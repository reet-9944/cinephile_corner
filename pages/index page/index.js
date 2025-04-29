function openLogin() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.login-popup').style.display = "block";
    document.querySelector('.signup-popup').style.display = "none";
}

function openSignup() {
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.signup-popup').style.display = "block";
    document.querySelector('.login-popup').style.display = "none";
}

function closePopups() {
    document.getElementById("overlay").style.display = "none";
    document.querySelector('.login-popup').style.display = "none";
    document.querySelector('.signup-popup').style.display = "none";
}

function switchToSignup() {
    document.querySelector('.login-popup').style.display = "none";
    document.querySelector('.signup-popup').style.display = "block";
}

function switchToLogin() {
    document.querySelector('.signup-popup').style.display = "none";
    document.querySelector('.login-popup').style.display = "block";
}

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = 220;
    let scrollLeft = carousel.scrollLeft + direction * scrollAmount;
    carousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.movies-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        const infoOverlay = box.querySelector('.info-overlay');
        const title = box.getAttribute('data-title');
        const info = box.getAttribute('data-info');
        infoOverlay.innerHTML = `<p>${title}</p><p>${info}</p>`;
    });

    box.addEventListener('mouseout', () => {
        const infoOverlay = box.querySelector('.info-overlay');
        infoOverlay.innerHTML = '';
    });
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark-mode');
    const movieTitles = document.querySelectorAll('.movie-title');
    const popupInfo = document.querySelectorAll('.popup-info');
    
    movieTitles.forEach((title) => title.classList.toggle('dark-mode'));
    popupInfo.forEach((info) => info.classList.toggle('dark-mode'));

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun-o');
    } else {
        themeIcon.classList.remove('fa-sun-o');
        themeIcon.classList.add('fa-moon-o');
    }

    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
