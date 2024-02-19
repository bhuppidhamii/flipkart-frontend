const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
    document.querySelector('.header').classList.add('active');
});

searchInput.addEventListener('blur', () => {
    document.querySelector('.header').classList.remove('active');
});
