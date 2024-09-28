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


// Iterate over a collection of elements to accomplish some task

let nums = [1, 4, 7, 9, 11, 15, 18]

function sum (arr){
    let answer = 0

    for (let num of arr){
        (answer = answer+num)
    }

    return answer
}

console.log(sum(nums))

// Create at least one element using createElement.


// Use appendChild and/or prepend to add new elements to the DOM.


// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content


// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.


// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.


// Modify at least one attribute of an element in response to user interaction.


// Register at least two different event listeners and create the associated event handler functions.


// Use at least two Browser Object Model (BOM) properties or methods.


// Include at least one form and/or input with HTML attribute validation.


// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)


// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).


// Commit frequently to the git repository.


// Include a README file that contains a description of your application.


// Level of effort displayed in creativity, presentation, and user experience.