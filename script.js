const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
    document.querySelector('.header').classList.add('active');
});

searchInput.addEventListener('blur', () => {
    document.querySelector('.header').classList.remove('active');
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})