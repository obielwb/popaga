const root = document.querySelector(':root');

const light = document.querySelector('#light');
const dark = document.querySelector('#dark');

const favicon = document.querySelector('link[rel=icon]');

const themes = [light, dark];

const reference = {
  light: light,
  dark: dark,
};

const inverse = {
  light: dark,
  dark: light,
};

themes.forEach((theme) => {
  theme.addEventListener('click', (event) => {
    const theme = event.target.dataset.theme;

    root.classList.remove(localStorage.getItem('theme'));
    root.classList.add(theme);
    favicon.href = `/favicon/${theme}.svg`;

    reference[theme].classList.add('hide');
    inverse[theme].classList.remove('hide');

    localStorage.setItem('theme', theme);
  });
});

window.addEventListener('load', () => {
  if (
    localStorage.getItem('theme') == null ||
    (localStorage.getItem('theme') != 'light' &&
      localStorage.getItem('theme') != 'dark')
  )
    localStorage.setItem('theme', 'light');

  const theme = localStorage.getItem('theme');

  reference[theme].classList.add('hide');

  root.classList.toggle(theme);
  favicon.href = `/favicon/${theme}.svg`;
});
