const email = document.querySelector('#signup-email');
const anchor = document.querySelector('#continue-to-signup-anchor');

email.addEventListener('focus', () => {
  email.parentElement.style.border = '2px solid var(--accent-color)';
});

email.addEventListener('focusout', () => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if (re.test(String(email.value).toLowerCase()))
    anchor.setAttribute('href', `/signup?email=${email.value}`);

  else
    anchor.parentElement.style.border = '2px solid #ee5555';
});