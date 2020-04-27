var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event

form.addEventListener('submit', addItem);

function addItem(e)
{
    e.preventDefault();

    // GET INPUT VALUE
    var newItem = document.getElementById('item').value; 
    
    // Create new li element
    var li = document.createElement('li');

    // Add Class
    li.className = 'list-group';
    
    // Add text Node with input value

    li.appendChild(document.createTextNode(newItem));
   ;

    // Create Del button to the item list added
    var deleteBtn = document.createElement('button');

    // Add Class
    deleteBtn.className ='btn btn-danger btn-sm float-right delete';
 
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    itemList.appendChild(li)
}


// var deleteBtn = document.createElement('button');

// // Add classes to Del btn
// deleteBtn.className ="btn btn-danger btn-sm float-right";
// deleteBtn.appendChild(document.createTextNode('X'));
// li.appendChild(deleteBtn);