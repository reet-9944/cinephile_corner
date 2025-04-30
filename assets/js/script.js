document.addEventListener("DOMContentLoaded", () => {
    const movieBoxes = document.querySelectorAll(".movies-box");

    movieBoxes.forEach((box, index) => {
        box.addEventListener("click", () => {
            window.location.href = `movie${index + 1}.html`;
        });
    });
});
