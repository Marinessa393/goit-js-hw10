const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRefs = document.querySelector('.theme-switch__toggle');
const body = document.body;

checkColor();
themeRefs.addEventListener('change', setTheme);

// функція для першочергового завантаження теми
function checkColor() {
  if (localStorage.theme) {
    body.classList.add(localStorage.theme);
  }
  themeRefs.checked = localStorage.theme === 'dark-theme';
}

// функція для зміни теми та запису в localStorage
function setTheme(e) {
  body.classList.remove(localStorage.theme);
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
  body.classList.add(localStorage.theme);
}

// реалізація через toggle :
// function setTheme(e) {
//   body.classList.toggle('light-theme');
//   body.classList.toggle('dark-theme');
//   e.target.checked === true
//     ? localStorage.setItem('theme', Theme.DARK)
//     : localStorage.setItem('theme', Theme.LIGHT);
// }
