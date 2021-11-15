const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
  document.cookie = 'session=; max-age=0';
  location.assign('/');
});
