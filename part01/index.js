// We can access the document on this way to intereact with all the elements
// of the DOM, nonetheless, this is not the best way.

/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

console.log(document.doctype);
console.log(document.head);
console.log(document.body); */


// Getting elements by Id
// const header = document.getElementById('header-title');
// console.log(header);
// header.textContent = 'Hello';
//header.innerText = 'Inner text';
 

// Get elements by className
/*
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}
*/

// QuerySelector, finds by id using #
// it finds the first element and take it. If there are more repeated elements, it's going
// to get the first one and then ignore the rest

/*
let header2 = document.querySelector('#main-header');
console.log(header2);

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

let item = document.querySelector('.list-group-item');
item.style.color = 'red'; */


// TRAVERSING THE DOM
/*
let itemsList = document.querySelector("#items");

// parentNode
console.log(itemsList.parentNode)

// parentElement
console.log(itemsList.parentElement);

// children
console.log(itemsList.children);

// firstChild
console.log(itemsList.firstChild);

// lastChild
console.log(itemsList.lastChild);
*/

/*
// Create elements
let newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'hello Div');

// Create text node
let newDivText = document.createTextNode('Hello World');

// Add Text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
// Add the newDiv to the HTML on the page
container.insertBefore(newDiv, h1);
*/

// Part 3: Playing with function inside elements

// random things in part 3, so boring


// Final project

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// remove from list event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems)


// FUNCTIONS

function filterItems(e) {
    // convert text to lower case
    let text = e.target.value.toLowerCase();
    
    // get list
    let items = itemList.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}


function addItem(e) {
    // avoid normal submission of the form
    e.preventDefault();
    console.log(1);

    // get input value
    let newItem = document.getElementById('item').value;
    // create a new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    
    // add text input node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // create delete button element
    let deleteButton = document.createElement('button');
    
    // add classes to del button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // appendt text node
    deleteButton.appendChild(document.createTextNode(' X'));

    // append button to li
    li.appendChild(deleteButton);

    // append li to list
    itemList.appendChild(li);
}


function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

