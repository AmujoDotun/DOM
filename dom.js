// EXAMIN THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.documentURI);
// console.log(document.links);
// console.log(document.forms);
// console.log(document.title);
// document.title = "Hello Wolrd";
// console.log(document.title);
// console.log(document.all);
// document.all[8].textContent = 'Hello THere';
// console.log(document.images);

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello There';
// headerTitle.innerText = "who is there";


// GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].style.fontWeight ='bold';
// items[1].style.backgroundColor = 'blue';

// for(var i =0; i<items.length; i++)
// {
//     items[i].style.backgroundColor ='red';
// }


// GET ELEMENT BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.fontWeight ='bold';
// li[1].style.backgroundColor = 'blue';

// for(var i =0; i<li.length; i++)
// {
//     li[i].style.backgroundColor ='red';
// }

// QUERY SELECTOR
var header = document.querySelector('#main-header');

header.style.backgroundColor ='green';
header.style.borderBottom =' solid 4px #ccc';

// var headerTitle = document.querySelector('#header-title');
// headerTitle.style.align ='right';

// var input = document.querySelector('input');
// input.value = 'hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value ="SEND";
// submit.style.backgroundColor ="grey";

// var item = document.querySelector('.list-group-item');
// item.style.color ="red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ="blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');

// secondItem.style.color ="coral";

// PARENT NODE

// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';

// PARENT ELEMENT
var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';


// CHildNode
// console.log(itemList.childNodes);
// console.log(itemList.childElementCount);
// console.log(itemList.chilcdren);
// itemList.children[1].style.backgroundColor = 'yellow'

// firstChild
// console.log(itemList.firstChild);

// firstELement Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello Wolrd';

// CREATING ELEMENT IN THE DOM

// Create DIv
var newDiv = document.createElement('div');

//assign class name

newDiv.className = 'hello';
newDiv.id = "hello1";

newDiv.setAttribute('title', 'helloDiv');

// Create text Node
var newDivText = document.createTextNode('Hello There I Just Landed My super Power');

// Add Text
newDiv.appendChild(newDivText);

// display test on the DOM
var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick()
{
    // console.log('Hello There');
   document.getElementById('header-title').textContent ='Yes I know';
   document.querySelector('#main').style.backgroundColor ='red';
}
