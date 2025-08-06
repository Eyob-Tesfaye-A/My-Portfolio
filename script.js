const MWBtoggle = document.getElementById('MWB-toggle');
const MWBlinks = document.getElementById('MWB-links');

MWBtoggle.addEventListener('click', () => {
    MWBtoggle.classList.toggle('open');
    MWBlinks.classList.toggle('active');
});

const fillElements = document.querySelectorAll('.fill');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.getAttribute('data-percent');
            observer.unobserve(fill);
        }
    });
}, {
    threshold: 0.5
});

fillElements.forEach(fill => {
    observer.observe(fill);
});
