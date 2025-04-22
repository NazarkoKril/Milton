
document.addEventListener('DOMContentLoaded', () => {
// burger 

    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const langBlock = document.querySelector('.header-language');
    const toggleBtn = langBlock.querySelector('.language-btn');
    const dropdown = langBlock.querySelector('.header-language-dropdown');
    const options = dropdown.querySelectorAll('button.language');

    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    options.forEach(option => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleBtn.innerHTML = `${this.textContent}
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2842 8L8.5 10.6417L5.71579 8L5 8.67915L8.5 12L12 8.67915L11.2842 8Z" fill="#232323"/>
                </svg>`;
            dropdown.classList.remove('active');
        });
    });

    document.addEventListener('click', function (e) {
        if (!langBlock.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
