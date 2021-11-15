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
});

password.addEventListener('focus', () => {
  password.parentElement.style.border = '2px solid var(--accent-color)';
});

password.addEventListener('focusout', () => {
  if (password.value.length < 6)
    password.parentElement.style.border = '2px solid #ee5555';
});

submit.addEventListener('click', (event) => {
  warning.classList.remove('show');

  if (email.value == '' || password.value == '') {
    warning.classList.add('show');
    warning.innerHTML = '<p>Insira email e senha antes de prosseguir!</p>';
  } else if (!isValid(email) || password.value.length < 6) {
    warning.classList.add('show');
    warning.innerHTML = '<p>Email e/ou senha inválido(s)! Tente novamente.</p>';
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };

    axios
      .post(
        'https://ojpbarbosa-cors-everywhere.herokuapp.com/https://popaga-api.herokuapp.com/users/auth',
        user
      )
      .then((response) => {
        const { data, status } = response; // TODO: add cases with different status codes

        if (status === 200) {
          document.cookie = `session=${data.token}; max-age=259200`;
          location.assign('/app');
        }
      });
  }

  event.preventDefault();
});
