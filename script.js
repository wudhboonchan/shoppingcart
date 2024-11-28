// Select all <li> elements by tag name
const liElements = document.getElementsByTagName('li');
liElements[0].textContent = 'cool555';
console.log('First <li> changed to:', liElements[0].textContent);

// Select <li> elements with the class "hot"
const hotItems = document.querySelectorAll('li.hot');
hotItems[1].textContent = 'complete';
console.log('Second <li>.hot changed to:', hotItems[1].textContent);

// Loop through the NodeList and change text content
hotItems.forEach(item => {
  item.textContent = 'cool';
});
console.log('All <li>.hot changed to:', Array.from(hotItems).map(item => item.textContent));

// Select the <ul> element
const groceryList = document.getElementById('groceries');

// Change firstChild and lastChild text content
groceryList.firstElementChild.textContent = 'complete';
groceryList.lastElementChild.textContent = 'cool';
console.log('First child changed to:', groceryList.firstElementChild.textContent);
console.log('Last child changed to:', groceryList.lastElementChild.textContent);

// Remove the last <li> element from the <ul>
groceryList.removeChild(groceryList.lastElementChild);
console.log('Last child removed. Remaining items:', groceryList.innerHTML);

// Select the second <li>
const secondItem = liElements[1];

// Check and log the class attribute
if (secondItem.hasAttribute('class')) {
  const classValue = secondItem.getAttribute('class');
  document.getElementById('output').textContent = `Class attribute of second item: ${classValue}`;
  console.log('Second item class attribute:', classValue);
} else {
  console.log('Second item does not have a class attribute.');
}

// Select the fourth <li> and change its class
const fourthItem = liElements[3];
fourthItem.setAttribute('class', 'cool');
console.log('Fourth item class changed to:', fourthItem.className);

// Remove the class attribute
fourthItem.removeAttribute('class');
console.log('Fourth item class removed. Current className:', fourthItem.className);