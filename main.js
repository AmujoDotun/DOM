var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Form Submit Event

form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', deleteItem);

// filter event
filter.addEventListener('keyup', filterItems)


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

function filterItems(e)
{
    
    // convert text to lowerCase
    var text = e.target.value.toLowerCase();
    // console.log(text);

    // Get list items
    var items = document.getElementsByTagName('li');

    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}