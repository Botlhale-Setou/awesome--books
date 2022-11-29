class awesomeBooks {
  booksList = [];

  addToBooksList = (title, author) => {
    const book = {
      tit: title,
      aut: author,
    };
    this.booksList.push(book);
  };

  removeBook = (ix) => {
    this.booksList.splice(ix, 1);
  };

  displayBooks = () => {
    const bookSection = document.querySelector('.books-list');
    bookSection.innerHTML = '';
  
    for (let i = 0; i < this.booksList.length; i += 1) {
      bookSection.innerHTML += `
        <p>${this.booksList[i].tit}</p>
        <p>${this.booksList[i].aut}</p>
        <button id="${i}" class="rmv" type='button'>Remove</button>
        <hr>
      `;
    }
  };
};

const book = new awesomeBooks();

const setRmvs = () => {
  const xallRmvs = document.getElementsByClassName('rmv');
  const allRmvs = Array.from(xallRmvs);

  allRmvs.forEach((btn) => {
    btn.addEventListener('click', () => {
      book.removeBook(btn.id);
      book.displayBooks();
      setRmvs();
      window.localStorage.setItem('books', JSON.stringify(book.booksList));
    });
  });
};

const addButton = document.querySelector('#button');
addButton.addEventListener('click', () => {
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  book.addToBooksList(titleInput, authorInput);
  book.displayBooks();
  setRmvs();

  window.localStorage.setItem('books', JSON.stringify(book.booksList));
});

window.onload = () => {
  const localStorageItem = window.localStorage.getItem('books');

  if (localStorageItem) {
    book.booksList = JSON.parse(localStorageItem);

    book.displayBooks();
    setRmvs();
  }
};