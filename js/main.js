const toggle = document.querySelector('.toggle');
const pricesAnnually = document.querySelectorAll('.card__h2-annually');
const pricesMonthly = document.querySelectorAll('.card__h2-monthly');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('toggle-active');

    pricesAnnually.forEach(h2 => {
        h2.classList.toggle('card__h2-annually-close');
    });

    pricesMonthly.forEach(h2 => {
        h2.classList.toggle('card__h2-monthly-open');
    });
});