// HamBurger Menu
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

// Featured Section 

const btnOne = document.querySelector('.feature-btn1');
const tabOne = document.querySelector('.tab-one');
const btnTwo = document.querySelector('.feature-btn2');
const tabTwo = document.querySelector('.tab-two');
const btnThree = document.querySelector('.feature-btn3');
const tabThree = document.querySelector('.tab-three');

btnOne.addEventListener('click', function(){
    tabOne.classList.toggle('show-feature');
    tabTwo.classList.remove('show-feature');
    tabThree.classList.remove('show-feature');
});

btnTwo.addEventListener('click', function(){
    tabOne.classList.remove('show-feature');
    tabTwo.classList.toggle('show-feature');
    tabThree.classList.remove('show-feature');
});

btnThree.addEventListener('click', function(){
    tabOne.classList.remove('show-feature');
    tabTwo.classList.remove('show-feature');
    tabThree.classList.toggle('show-feature');
});

// Frequently Asked questions

const questions = document.querySelectorAll('.questions');

questions.forEach(function(question){
    const arrow = question.querySelector('.open-arrow');
    arrow.addEventListener('click', function(){
        questions.forEach(function(item){
            if(item !== question) {
                item.children[1].classList.remove('show-text');
            }
        })
        question.children[1].classList.toggle('show-text');
        arrow.classList.toggle('arrowclose');
    })
})
