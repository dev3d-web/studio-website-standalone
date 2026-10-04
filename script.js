const html = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-btn');

const applyTheme = (theme) => {
  html.classList.remove('dark', 'bright', 'light');
  html.classList.add(theme);

  themeButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
};

themeButtons.forEach((button) => {
  button.addEventListener('click', () => applyTheme(button.dataset.theme));
});

const menuButton = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 980 && nav) {
    nav.style.display = '';
  }
});

applyTheme('light');
