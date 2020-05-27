
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Lolis are the best!');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');

myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to loli land, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to loli land, ' + storedName;
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'imgs/loli.png') {
      myImage.setAttribute ('src','imgs/loli2.png');
      alert('Ouch! Stop poking the loli! She has left for now.');
    } else {
      myImage.setAttribute ('src','imgs/loli.png');
alert('Ouch! Stop poking the loli! She has left for now.');
    }
}
