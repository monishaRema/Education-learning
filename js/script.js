const menuToggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('toggle-menu');

menuToggleBtn.addEventListener('click', function () { 
    menu.classList.toggle('open');
})