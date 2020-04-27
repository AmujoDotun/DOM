var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event

form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', deleteItem);

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

// Delete Item function 
function deleteItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure you want to delete?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}