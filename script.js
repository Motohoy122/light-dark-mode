const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');
let isLight = true;

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_on_the_go_${color}.svg`;
    image2.src = `img/undraw_Mobile_wireframe_${color}.svg`;
    image3.src = `img/undraw_Personal_site_${color}.svg`;
}

function toggleDarkLightMode(isLight) {
    isLight ? document.documentElement.setAttribute('data-theme', 'light') :  document.documentElement.setAttribute('data-theme', 'dark');;
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    isLight ? imageMode('light') : imageMode('dark');;

}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        localStorage.setItem('theme', 'dark');
        isLight = false;
        toggleDarkLightMode(isLight);
    } else {
        localStorage.setItem('theme', 'light');
        isLight = true;
        toggleDarkLightMode(isLight);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    localStorage.setItem('theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        isLight = false;
        toggleDarkLightMode(isLight);
    }
}