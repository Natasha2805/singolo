


/*Header*/

const navLinks = document.querySelectorAll('nav > ul > li > a');
navLinks.forEach(el => el.addEventListener('click',(event)=>{
  navLinks.forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
}));

/*Slider. Переключение слайдов*/

const left_arrow = document.querySelector(".slider-arrow-prev");
const right_arrow = document.querySelector(".slider-arrow-next");
let slides = document.getElementsByClassName("slide");

let slideIndex = 1;
showSlides(slideIndex);

left_arrow.addEventListener('click', (e) => {
  plusSlides(-1);
});

right_arrow.addEventListener('click', (e) => {
  plusSlides(1);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}
console.log(slides.length);
function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
}

/*Slider. Активация экранов телефонов*/

const imagesList = document.querySelectorAll('.phone-container div');
for (var i = 0; i < imagesList.length; i++) {
	imagesList[i].addEventListener('click', (event) => {
		console.log(event);
		console.log(event.target.parentNode.classList);
		event.target.parentNode.classList.toggle('turn-off');
	});
}

/*Portfolio. Переключение табов*/

const buttonItems = document.getElementById('portfolio-filter');

buttonItems.addEventListener('click', (event) => {
    buttonItems.querySelectorAll('div button').forEach(element => element.classList.remove('active-1'));
    event.target.classList.add('active-1');

    document.querySelector('.flex-wrapper').querySelectorAll('.flex-portfolio-item').forEach(element => {        
         element.style.order = Math.floor(1 + Math.random() * 12);        
    });
});


/*Portfolio. Взаимодействие с картинками*/

var portfolioItems = document.getElementsByClassName('portfolio-img');
var onClick_2 = function (event) {
	event.preventDefault();
  
  for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].classList.remove('active-2');
	}
  
  event.currentTarget.classList.add('active-2');
};

for (var i = 0; i < portfolioItems.length; i++) {
    portfolioItems[i].addEventListener('click', onClick_2, false);
}

/*Get a quote*/

document.querySelector('#form-submit').addEventListener('click', (evt) => {
  evt.preventDefault();
  let subject = document.querySelector('#subject').value;
  subject = subject === '' ? 'Без темы' : 'Тема: ' + subject;
  let description = document.querySelector('#description').value;
  description = description === '' ? 'Без описания' : 'Описание: ' + description;
  let message = 'Письмо отправлено \n'+subject+'\n'+description;
  alert(message);
})
