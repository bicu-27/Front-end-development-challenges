window.addEventListener('scroll', () => {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            container.classList.add('show');
        }
    });
});
