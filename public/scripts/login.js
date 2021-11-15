const email = document.querySelector('#login-email');
const password = document.querySelector('#login-password');
const submit = document.querySelector('#login-submit');

const warning = document.querySelector('#warning');

const isValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email.value).toLowerCase());
};

email.addEventListener('focus', () => {
  email.parentElement.style.border = '2px solid var(--accent-color)';
});

email.addEventListener('focusout', () => {
  if (!isValid(email)) email.parentElement.style.border = '2px solid #ee5555';
  else email.parentElement.style.border = '2px solid var(--accent-color)';

  warning.classList.remove('show');
});

password.addEventListener('focus', () => {
  password.parentElement.style.border = '2px solid var(--accent-color)';
});

password.addEventListener('focusout', () => {
  if (password.value.length < 6)
    password.parentElement.style.border = '2px solid #ee5555';

  warning.classList.remove('show');
});

const warn = (message) => {
  warning.classList.add('show');
  warning.innerHTML = `<span>${message}</span>`;
};

submit.addEventListener('click', (event) => {
  warning.classList.remove('show');

  if (!email.value || email.value == '')
    warn('O campo "email" não pode ser vazio!');
  else if (!isValid(email))
    warn('Email inválido! O email deve ter o formato "example@example.com".');
  else if (!password.value || password.value == '')
    warn('O campo "senha" não pode ser vazio!');
  else if (password.value.length < 6)
    warn('A senha deve ter pelo menos 6 caractres!');
  else {
    const user = {
      email: email.value,
      password: password.value,
    };

    axios
      .post('https://popaga-api.herokuapp.com/users/auth', user)
      .then((response) => {
        if (response.data) {
          const { token } = response.data;

          document.cookie = `session=${token}; max-age=259200`;
          location.assign('/app');
        } else {
          warn('Houve um problema com o login.');
        }
      })
      .catch((error) => {
        if (error.response) {
          const { status } = error.response;

          if (status == 404)
            warn(
              `Usuário com o email "${email.value}" não pôde ser encontrado. <a href="/signup">Sign Up?</a>`
            );
          else if (status == 401) warn('Senha incorreta. Tente novamente. ');
          else if (status == 500)
            warn('Houve um erro no servidor durante o sign up.');
        } else {
          warn('Houve um problema com o login.');
        }
      });
  }

  event.preventDefault();
});
