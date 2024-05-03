const container = document.querySelectorAll('.container');

container.forEach(element => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animation');
                return;
            }
            entry.target.classList.remove('animation')
        });
    });
    observer.observe(element)
});
