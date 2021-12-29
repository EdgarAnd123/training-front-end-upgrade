const searchBox = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('submit');
const AddForm = document.getElementById('addForm');
const itemList = document.getElementById('items');

AddForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
searchBox.addEventListener('keyup', filterItems)

function addItem(e) {
  e.preventDefault();

  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  let deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  deleteButton.appendChild(document.createTextNode('X'));
  li.appendChild(deleteButton);

  itemList.appendChild(li);
}

function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you Sure?')) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}