AOS.init({ duration: 1000, once: true });

// Đóng navbar khi click vào nav-link
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});

// Đóng navbar khi click ra ngoài
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggle = document.querySelector('.navbar-toggler');
    if (navbar.classList.contains('show')
        && !navbar.contains(event.target)
        && !toggle.contains(event.target)) {
        new bootstrap.Collapse(navbar).toggle();
    }
});