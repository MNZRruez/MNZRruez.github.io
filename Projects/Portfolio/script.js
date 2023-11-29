function hoverHov(top){
  var heading = document.getElementById(top);
  var letters = heading.textContent.split('');
  
  // Create a new variable to store the wrapped letters
  var wrappedLetters = '';
  
  letters.forEach(letter => {
    var span = document.createElement('span');
    span.innerText = letter;
    heading.appendChild(span);
    wrappedLetters += span.outerHTML;
  });
  
  heading.innerHTML = wrappedLetters;
  
  heading.addEventListener('mouseover', event => {
    if (event.target.tagName === 'SPAN') {
      event.target.classList.add('hover');
    }
  });
  
  heading.addEventListener('mouseout', event => {
    if (event.target.tagName === 'SPAN') {
      event.target.classList.remove('hover');
    }
  });
}

hoverHov('main-head1');
hoverHov('main-head2');
hoverHov('main-head3');


const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".nav-links");
const sectBtn = document.querySelectorAll(".nav");
const allSections = document.querySelector(".main-content");


function PageTransitions(){
  // btn click on active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener("click", function(){
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn';
    })
  }
}

PageTransitions()