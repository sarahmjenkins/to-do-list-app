function newItem() {

  //1. Adding a new item to the list of items: 
  // still want to figure out: add to list on enter, hide the input value when something has been added to the list

  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  
  if(inputValue.length < 1) {
    alert('You must write something!');
  } else {
    list.append(li);
    li.append(inputValue);
  }

  //2. Crossing out an item from the list of items:
  
  li.on('dblclick', function () {
    li.toggleClass('strike');
  })

  //3(i). Adding the delete button "X": 
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);
  crossOutButton.on('click', function() {
    li.addClass('delete');
  })

  // 4. Reordering the items: 
  list.sortable();

}