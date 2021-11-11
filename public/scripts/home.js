const email = document.querySelector('#signup-email');
const anchor = document.querySelector('#continue-to-signup-anchor');

email.addEventListener('focusout', () => {
  // TODO: verify if the email is valid before redirecting
  anchor.setAttribute('href', `/signup?email=${email.value}`);
});