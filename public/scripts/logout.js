const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
  document.cookies = 'session=; max-age=1';
  location.assign('/');
});
