const draggables = document.querySelectorAll('.draggable');
let isDragging = false;
let offsetX, offsetY;

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        draggables.forEach(draggable => {
            draggable.style.left = `${e.clientX - offsetX}px`;
            draggable.style.top = `${e.clientY - offsetY}px`;
        });
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        // const rect = frame.getBoundingClientRect();
        // frame.style.transform = `translate(-50%, -50%)`;
        // frame.style.left = `${rect.left + rect.width / 2}px`;
        // frame.style.top = `${rect.top + rect.height / 2}px`;
        isDragging = false;
    }
});