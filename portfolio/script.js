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
