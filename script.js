// TASK 1 //
// Store the original HTML of the list when the page loads
const originalHTML = document.querySelector('ul').innerHTML;

// Function to reset the <ul> list to its original HTML
function resetList() {
  const ulElement = document.querySelector('ul');
  ulElement.innerHTML = originalHTML;

  const messageElement = document.getElementById('class-check-message');
  if (messageElement) {
    messageElement.remove();
  }
}

// Task A: Change the first <li> to class 'cool'
document.getElementById('task1a').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const listItems = document.getElementsByTagName('li');
  if (listItems.length > 0) {
    listItems[0].className = 'cool';
  }
});

// Task B: Change the second <li> to class 'complete'
document.getElementById('task1b').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const listItems = document.querySelectorAll('li.hot');
  if (listItems.length > 1) {
    listItems[1].className = 'complete';
  }
});

// Task C: Loop through all 'hot' items and change their class to 'cool'
document.getElementById('task1c').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const hotItems = document.querySelectorAll('li.hot');
  hotItems.forEach(item => {
    item.className = 'cool';
  });
});

// Task D: Change the first child of <ul> to 'complete' and last child to 'cool'
document.getElementById('task1d').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const ulElement = document.querySelector('ul');
  if (ulElement.firstElementChild) {
    ulElement.firstElementChild.className = 'complete';
  }
  if (ulElement.lastElementChild) {
    ulElement.lastElementChild.className = 'cool';
  }
});

// Reset button functionality
document.getElementById('reset').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
});


// TASK 2a //
// Remove the last child from the list
document.getElementById('task2a').addEventListener('click', function (event) {
  event.preventDefault();
  const ulElement = document.querySelector('ul');

  if (ulElement.lastElementChild) {
    ulElement.removeChild(ulElement.lastElementChild);
  }
});


// TASK 3
// Task 3a: Check if the second item has a class attribute and display its value
document.getElementById('task3a').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const secondItem = document.querySelectorAll('ul li')[1];
  const hasClass = secondItem.hasAttribute('class');


  const message = document.createElement('p');
  message.id = 'class-check-message';
  message.textContent = hasClass
    ? `The second item has a class: "${secondItem.getAttribute('class')}"`
    : 'The second item does not have a class attribute.';
  
  const listContainer = document.querySelector('.list-items');
  const existingMessage = document.getElementById('class-check-message');
  if (existingMessage) existingMessage.remove();
  listContainer.appendChild(message);
});

// Task 3b: Change the className of the fourth item to 'cool'
document.getElementById('task3b').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const fourthItem = document.querySelectorAll('ul li')[3];
  if (fourthItem) {
    fourthItem.setAttribute('class', 'cool');
    console.log('Fourth item class changed to "cool".');
  }
});

// Task 3c: Remove the class of the fourth item
document.getElementById('task3c').addEventListener('click', function(event) {
  event.preventDefault();
  resetList();
  const fourthItem = document.querySelectorAll('ul li')[3];
  if (fourthItem) {
    fourthItem.removeAttribute('class');
    console.log('Fourth item class removed.');
  }
});