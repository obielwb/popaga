const homeSignupEmail = document.querySelector('#signup-email');
const homeSignupAnchor = document.querySelector('#continue-to-signup-anchor');

homeSignupEmail.addEventListener('focus', () => {
  homeSignupEmail.parentElement.style.border = '2px solid var(--accent-color)';
});

homeSignupEmail.addEventListener('focusout', () => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  if (re.test(String(homeSignupEmail.value).toLowerCase()))
    homeSignupAnchor.setAttribute('href', `/signup?email=${homeSignupEmail.value}`);

  else
    homeSignupEmail.parentElement.style.border = '2px solid #ee5555';
});