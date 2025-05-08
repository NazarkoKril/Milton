document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        const radioButtons = menu.querySelectorAll('input[type="radio"]');
        const text = toggleButton.querySelector('span');

        toggleButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        radioButtons.forEach(function(radio) {
            radio.addEventListener('change', function() {
                const selected = Array.from(radioButtons).find(r => r.checked);
                if (selected) {
                    text.innerHTML = selected.parentNode.textContent.trim();
                }
            });
        });
    });

    document.addEventListener('click', function(event) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.querySelector('.dropdown-menu').classList.remove('active');
            }
        });
    });
});
