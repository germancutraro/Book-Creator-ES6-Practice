const createBook = () => {
  //Create Elements
  let li = document.createElement('li'),
      nameEl = document.createElement('span'),
      authorEl = document.createElement('span');

  nameEl.textContent = name.value; // The span name element is going to have the input name value
  nameEl.setAttribute('class', 'name'); // Add name class for css style
  authorEl.textContent = author.value; // The span author element is going to have the input author value
  authorEl.setAttribute('class', 'author'); // Add author class for css style
  // Add both span inside the li parent tag
  li.appendChild(nameEl);
  li.appendChild(authorEl);
  // Finally, the ul append the li tag
  bookStore.appendChild(li);

  // Set values
  myBook.bName = li.innerHTML;
  myBook.bAuthor = author.value;
  myBook.addBook();
  //console.log(`Book name: ${myBook.bName} and the Author is ${myBook.bAuthor}`);

  //Clean both inputs text
  name.value = '';
  author.value = '';
}
