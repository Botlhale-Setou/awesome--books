class AwesomeBooks {
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
    bookSection.innerHTML = ``;

    for (let i = 0; i < this.booksList.length; i += 1) {
      bookSection.innerHTML += `
        <div class="bookWrapper">
        <p>${this.booksList[i].tit} by ${this.booksList[i].aut}</p>
        <button id="${i}" class="rmv" type='button'>Remove</button>
        </div>
      `;
    }
  };
}

const book = new AwesomeBooks();

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

const listNav = document.getElementById('list__nav1');
const addNav = document.getElementById('list__nav2');
const contNav = document.getElementById('list__nav3');
const inputs = document.querySelector('.inputs');
const bookSec = document.querySelector('.list_div');


listNav.addEventListener('click', () => {
  inputs.classList.add('hide');
  inputs.classList.remove('show');
  bookSec.classList.add('show');
})

addNav.addEventListener('click', () => {
  bookSec.classList.remove('show');
  bookSec.classList.add('hide');
  inputs.classList.add('show2');
})