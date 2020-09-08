
const next = document.querySelector('.button .next');
const prev = document.querySelector('.button .prev');
const container = document.querySelectorAll(".container");


let slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
  if (n > container.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = container.length}

  container.forEach(function(el){
    el.style.display = "none";
  });
  
  container[slideIndex-1].style.display = "grid";  
  
}

next.addEventListener('click',function(){
    showSlides(slideIndex += 1);
});

prev.addEventListener('click',function(){
    showSlides(slideIndex += -1);
});