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

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].style.fontWeight ='bold';
li[1].style.backgroundColor = 'blue';

for(var i =0; i<li.length; i++)
{
    li[i].style.backgroundColor ='red';
}