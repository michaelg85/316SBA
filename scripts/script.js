// Cache at least one element using selectElementById

let head1 = document.getElementById('heading1');

head1.textContent = `New Title`;

document.getElementById("head2").style.color = `blue`;


// Cache at least one element using querySelector or querySelectorAll

let body = document.querySelector('body');

body.style.backgroundColor = 'teal';


// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.)

let listItem2 = document.getElementById("item1").nextSibling;

listItem2.textContent = `Hello`;

