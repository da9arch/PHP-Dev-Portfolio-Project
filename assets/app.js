import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import { setTheme, toggleAnimation } from './js/theme';
import { updateNavbarPosition } from './js/navbar.js';
import './styles/app.css';

document.addEventListener('DOMContentLoaded', function () {
    // Проверяем значение в localStorage и устанавливаем тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }

    // Обработчик события для иконки Light Theme
    const lightThemeIcon = document.getElementById('light-theme-icon');
    lightThemeIcon.addEventListener('click', function () {
        setTheme('light');
        toggleAnimation(lightThemeIcon);
    });

    // Обработчик события для иконки Dark Theme
    const darkThemeIcon = document.getElementById('dark-theme-icon');
    darkThemeIcon.addEventListener('click', function () {
        setTheme('dark');
        toggleAnimation(darkThemeIcon);
    });

    // Прикрепляем навигационную панель при прокрутке
    window.addEventListener('scroll', updateNavbarPosition);
});