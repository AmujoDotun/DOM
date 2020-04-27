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
    itemList.appendChild(li);
}