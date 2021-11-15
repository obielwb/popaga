const username = document.querySelector('#signup-username');
const email = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const avatar = document.querySelector('#avatar-file-input');
const filename = document.querySelector('#avatar-filename');
const dismiss = document.querySelector('#dismiss-avatar-button');
const submit = document.querySelector('#signup-submit');

const warning = document.querySelector('#warning');

const isValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email.value).toLowerCase());
};

username.addEventListener('focus', () => {
  username.parentElement.style.border = '2px solid var(--accent-color)';
});

username.addEventListener('focusout', () => {
  if (username.value.length < 4)
    username.parentElement.style.border = '2px solid #ee5555';
  else username.parentElement.style.border = '2px solid var(--accent-color)';

  warning.classList.remove('show');
});

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

var file = null;
const loadAvatar = (file) => {
  document.querySelector('#file-input-container').classList.add('hide');
  document.querySelector('#avatar-preview-container').classList.add('show');
  document.querySelector('#avatar-label').classList.add('hide');
  document.querySelector('#avatar-file-name').classList.add('show');
  document.querySelector('#avatar-file-name').innerText = file.name;

  var reader = new FileReader();

  reader.onload = () => {
    document.querySelector('#avatar-preview').src = reader.result;
  };

  reader.readAsDataURL(file);
};

avatar.addEventListener('change', (event) => {
  file = event.target.files[0];

  if (event.target.id == 'avatar-file-input' && file != undefined) {
    loadAvatar(file);

    var reader = new FileReader();

    reader.onload = () => {
      filename.value = reader.result;
    };

    reader.readAsDataURL(file);
  }
});

dismiss.addEventListener('click', (event) => {
  event.preventDefault();

  document.querySelector('#file-input-container').classList.remove('hide');
  document.querySelector('#avatar-preview-container').classList.remove('show');
  document.querySelector('#avatar-label').classList.remove('hide');
  document.querySelector('#avatar-file-name').classList.remove('show');

  file = null;
  filename.value = '';
});

const warn = (message) => {
  warning.classList.add('show');
  warning.innerHTML = `<span>${message}</span>`;
};

submit.addEventListener('click', (event) => {
  warning.classList.remove('show');

  if (!username.value || username.value == '')
    warn('O campo "username" não pode ser vazio!');
  else if (username.value.length < 4)
    warn('O username deve ter pelo menos 4 caractres!');
  else if (!email.value || email.value == '')
    warn('O campo "email" não pode ser vazio!');
  else if (!isValid(email))
    warn('Email inválido! O email deve ter o formato "example@example.com".');
  else if (!password.value || password.value == '')
    warn('O campo "senha" não pode ser vazio!');
  else if (password.value.length < 6)
    warn('A senha deve ter pelo menos 6 caractres!');
  else {
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
      // avatar: file ? filename.value : 'https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png',
      avatar: file ? filename.value : null,
    };

    axios
      .post(
        'https://ojpbarbosa-cors-anywhere.herokuapp.com//https://popaga-api.herokuapp.com/users',
        user
      )
      .then((response) => {
        const { data, status } = response; // TODO: add cases with different status codes,  if (data.error), if (status === 400)

        console.log(data);

        if (status === 200) {
          document.cookie = `session=${data.token}; max-age=259200`;
          location.assign('/app');
        }
      });
  }

  event.preventDefault();
});
