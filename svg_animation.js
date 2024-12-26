const svg = document.querySelector('.svg');
const frame = document.querySelector('.frame');
const l = document.querySelector('.l');
const r = document.querySelector('.r');
const t = document.querySelector('.t');
const b = document.querySelector('.b');
const s = document.querySelector('.s');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const p = document.querySelectorAll('p');

const body = document.body;

svg.addEventListener('click', function (event) {
    event.stopPropagation();
    frame.classList.add('active');
    l.classList.add('active');
    r.classList.add('active');
    t.classList.add('active');
    b.classList.add('active');
    s.classList.add('active');
    h1.forEach(el => el.classList.add('active'));
    h2.forEach(el => el.classList.add('active'));
    p.forEach(el => el.classList.add('active'));
});

body.addEventListener('click', function (event) {
    if (!frame.contains(event.target)) {
        frame.classList.remove('active');
        l.classList.remove('active');
        r.classList.remove('active');
        t.classList.remove('active');
        b.classList.remove('active');
        s.classList.remove('active');
        h1.forEach(el => el.classList.remove('active'));
        h2.forEach(el => el.classList.remove('active'));
        p.forEach(el => el.classList.remove('active'));
    }
});

