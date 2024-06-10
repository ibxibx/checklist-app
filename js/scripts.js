$(document).ready(function () {
  // Function to add a new item
  $('#addItemForm').on('submit', function (e) {
    e.preventDefault();
    let inputValue = $('#input').val().trim();
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append('<li>' + inputValue + ' <button class="crossOutButton">X</button></li>');
      $('#input').val(''); // Clear the input field
    }
  });

  // Function to cross out an item
  $('#list').on('dblclick', 'li', function () {
    $(this).toggleClass('strike');
  });

  // Function to delete an item
  $('#list').on('click', '.crossOutButton', function () {
    $(this).parent().addClass('delete');
  });

  // Enable sorting of the list items
  $('#list').sortable();
});