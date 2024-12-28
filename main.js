// document.getElementById('trigger').addEventListener('click', function() {
//     document.querySelector('.svg').classList.toggle('active');
//     document.querySelector('.svg-2').classList.toggle('active');
//     document.querySelector('.svg-spacer').classList.toggle('active');
// });

document.addEventListener('keydown', function (event) {
    if (event.key === '4') {
        window.location.href = 'page_4.html';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const fullscreenButton = document.getElementById('fullscreen');
    const lightModeButton = document.getElementById('light-mode');
    const frame = document.querySelector('.frame');
    const root = document.querySelector(':root');
    const svg = document.querySelector('.svg');

    let lightModeActive = false;
    let fullscreenActive = false;

    lightModeButton.addEventListener('click', function () {
        if (!lightModeActive) {
            frame.classList.add('light');
            root.classList.add('light');
            lightModeActive = true;
        } else if (lightModeActive) {
            frame.classList.remove('light');
            root.classList.remove('light');
            lightModeActive = false;
        }
    });

    fullscreenButton.addEventListener('click', function () {
        if (!fullscreenActive) {
            frame.classList.add('fullscreen');
            root.classList.add('fullscreen');
            svg.classList.add('fullscreen');
            fullscreenActive = true;
        } else if (fullscreenActive) {
            frame.classList.remove('fullscreen');
            root.classList.remove('fullscreen');
            svg.classList.remove('fullscreen');
            fullscreenActive = false;
        }
    });
});