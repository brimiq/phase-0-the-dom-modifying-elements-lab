// Write your code here!
// index.js

// 1. Remove the <main id="main"> element
const main = document.querySelector('#main');
main.remove();

// 2. Create an <h1> element and assign it to the variable `newHeader`
const newHeader = document.createElement('h1');

// 3. Give it an id of "victory"
newHeader.id = 'victory';

// 4. Set its text
newHeader.textContent = 'Bradley is the champion'; // <- replace with your name
