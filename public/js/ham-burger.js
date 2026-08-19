const questionBtn = document.querySelectorAll('.faq-toggle');
const faqAnswer = document.querySelectorAll('.answer-text');
const burgerSwitch = document.querySelector('.ham-burger');
const offScreen = document.querySelector('.left-screen-menu');



function hamBurgerMenu() {
  if (burgerSwitch.classList.toggle('active')){
    offScreen.style.display = 'flex'
    offScreen.style.display = 'block'
  } else {
    offScreen.style.display = 'none'
  }
}

function faqQuestion(i) {
  if (questionBtn[i].classList.toggle('active')) {
    faqAnswer[i].style.display = 'block'
  } else {
    faqAnswer[i].style.display = 'none'
  }
}

// this event listner is for when the user clicks on the ham burger menu
burgerSwitch.addEventListener('click', function(){
  hamBurgerMenu()
})


// this event listener is for the question toggle
for (let i = 0; i < questionBtn.length; i+= 1) {
  questionBtn[i].addEventListener('click', function(){
    faqQuestion(i)
  })
}
