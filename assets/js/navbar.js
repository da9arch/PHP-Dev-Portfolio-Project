export function updateNavbarPosition() {
    const navbar = document.querySelector('nav');
    const navbarOffsetTop = navbar.offsetTop;

    if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add('fixed', 'top-0', 'w-full');
    } else {
        navbar.classList.remove('fixed', 'top-0', 'w-full');
    }
}