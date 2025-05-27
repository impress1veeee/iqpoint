document.getElementById('sign-up-course').addEventListener('click', () => {
    window.location.href = '../pug/pricing.html#apply-section';
});

// Таймер дни
const endDate_days = new Date('2025-08-31');
//endDate.setDate(endDate.getDate() + 30); // Отсчет на 30 дней от 26 мая 2025

function updateTimer_days() {
    const now = new Date();
    const timeLeft = endDate_days - now; // Разница в миллисекундах
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const timerText = `${days} дней ${hours} часов ${minutes} минут`;
    const timerElement = document.getElementById('timer_days') || document.querySelector('.bigger');
    if (timerElement) {
        timerElement.textContent = timerText;
    } else {
        console.error('Элемент таймера не найден');
    }
}
setInterval(updateTimer_days, 1000); // Обновлять каждую секунду
updateTimer_days(); // Запустить сразу
