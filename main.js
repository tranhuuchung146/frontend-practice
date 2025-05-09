const mobileBtn = document.querySelector('.menu-button');
const navMobile = document.querySelector('.navbar-mobile');
const closeBtn = document.querySelector('.control-back img');

mobileBtn.onclick = function() {
    navMobile.style.display = 'block';
}

closeBtn.onclick = function() {
    navMobile.style.display = 'none';
}

let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Cuộn xuống
            header.classList.add('hide');
        } else {
            // Cuộn lên
            header.classList.remove('hide');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });