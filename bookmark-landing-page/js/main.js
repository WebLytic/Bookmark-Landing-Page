const openBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navMenu = document.querySelector('.mobile-nav');


openBtn.addEventListener('click', function(){
    navMenu.classList.add('show-nav');
    openBtn.classList.add('burger-remove');
});

closeBtn.addEventListener('click', function(){
    navMenu.classList.remove('show-nav');
    openBtn.classList.remove('burger-remove');
});