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