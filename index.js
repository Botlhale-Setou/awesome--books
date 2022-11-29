let booksList = [];

const addToBooksList = (title, author) => {
  const book = {
    tit: title,
    aut: author,
  };
  booksList.push(book);
};

const displayBooks = () => {
  const bookSection = document.querySelector('.books-list');
  bookSection.innerHTML = '';

  for (let i = 0; i < booksList.length; i += 1) {
    bookSection.innerHTML += `
      <p>${booksList[i].tit}</p>
      <p>${booksList[i].aut}</p>
      <button id="${i}" class="rmv" type='button'>Remove</button>
      <hr>
    `;
  }
};

const removeBook = (ix) => {
  booksList.splice(ix, 1);
};

const setRmvs = () => {
  const xallRmvs = document.getElementsByClassName('rmv');
  const allRmvs = Array.from(xallRmvs);

  allRmvs.forEach((btn) => {
    btn.addEventListener('click', () => {
      removeBook(btn.id);
      displayBooks();
      setRmvs();
      window.localStorage.setItem('books', JSON.stringify(booksList));
    });
  });
};

const addButton = document.querySelector('#button');
addButton.addEventListener('click', () => {
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  addToBooksList(titleInput, authorInput);
  displayBooks();
  setRmvs();

  window.localStorage.setItem('books', JSON.stringify(booksList));
});

window.onload = () => {
  const localStorageItem = window.localStorage.getItem('books');

  if (localStorageItem) {
    booksList = JSON.parse(localStorageItem);

    displayBooks();
    setRmvs();
  }
};