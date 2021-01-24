//three var 
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
//create a responsive button 
button.onclick = function() {
let myItem = input.value;
//value a string
input.value = '';
//create element for each item
const listItem = document.createElement('li');  
const listText = document.createElement('span');
const listBtn = document.createElement('button');
//append span and button as children of list item
listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBtn);
//create delete option
listBtn.textContent = 'Delete';
list.appendChild(listItem);
//when clicked, remove child ftom list
listBtn.onclick = function(e) {
list.removeChild(listItem);
}
//focus the input element for entering the next shopping list item
input.focus();
}