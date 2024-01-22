// image slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// 3d rotating texts
const TEXTS = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'SWIFT', 'PYTHON', 'REACT',
  'MANGOOSE', 'SASS',
  'DJANGO', 'NODE.JS', 'MANGODB',
  'EXPRESS', 'MYSQL', 'JAVA', 'JQUERY'
];

var tagCloud = TagCloud('.sphere', TEXTS, {
  radius: 230,

  maxSpeed: 'normal',
  initSpeed: 'normal',

  direction: 135,

  keep: false
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show1');
    }else{
      entry.target.classList.remove('show1');
    }
  });
});
const hiddenElements =  document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));



const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {

    if(entry2.isIntersecting){
      entry2.target.classList.add('show2');
    }else{
      entry2.target.classList.remove('show2');
    }
  });
});
const hiddenElements2 =  document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));



const observer3 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {

  if(entry2.isIntersecting){
    entry2.target.classList.add('show3');
  }else{
    entry2.target.classList.remove('show3');
  }
});
});
const hiddenElements3 =  document.querySelectorAll('.percent');
hiddenElements3.forEach((el) => observer3.observe(el));