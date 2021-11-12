const username = document.querySelector('#signup-username');
const email = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const avatar = document.querySelector('#avatar-file-input');
const filename = document.querySelector('#avatar-filename');
const dismiss = document.querySelector('#dismiss-avatar-button');
const submit = document.querySelector('#signup-submit');

const warning = document.querySelector('#warning');

const isValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email.value).toLowerCase());
};

username.addEventListener('focus', () => {
  username.parentElement.style.border = '2px solid var(--accent-color)';
});

username.addEventListener('focusout', () => {
  if (username.value.length < 2)
    username.parentElement.style.border = '2px solid #ee5555';

  else
    username.parentElement.style.border = '2px solid var(--accent-color)';
});

email.addEventListener('focus', () => {
  email.parentElement.style.border = '2px solid var(--accent-color)';
});

email.addEventListener('focusout', () => {
  if (!isValid(email))
    email.parentElement.style.border = '2px solid #ee5555';

  else
    email.parentElement.style.border = '2px solid var(--accent-color)';
});

password.addEventListener('focus', () => {
  password.parentElement.style.border = '2px solid var(--accent-color)';
});

password.addEventListener('focusout', () => {
  if (password.value.length < 6)
    password.parentElement.style.border = '2px solid #ee5555';
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
  filename.value = 'https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png';
});

submit.addEventListener('click', (event) => {
  warning.classList.remove('show');

  if (username.value == '' || email.value == '' || password.value == '') {
    warning.classList.add('show');
    warning.innerHTML = '<p>Insira email e senha antes de prosseguir!</p>'
  }

  else if (username.value.length < 2 || !isValid(email) || password.value.length < 6) {
    warning.classList.add('show');
    warning.innerHTML = '<p>Email e/ou senha inválido(s)! Tente novamente.</p>'
    event.preventDefault();
  }

  if (filename.value == '' || filename.value == null || filename.value == undefined)
    filename.value = 'https://www.seekpng.com/png/full/245-2454602_tanni-chand-default-user-image-png.png'

  /* else
    var url = window.URL.createObjectURL(file);
    console.log(url)
    filename.value = url; */
});