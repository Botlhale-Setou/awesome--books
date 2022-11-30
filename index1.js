// import * as lux from "./modules/luxon.js"

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
  let inputs = document.querySelector('.inputs');
  let bookSec = document.querySelector('.list_div');
  let contDiv = document.querySelector('.contDiv');

  contDiv.classList.add('hide');
  bookSec.classList.add('hide');
  inputs.classList.add('hide');
  
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
const contDiv = document.querySelector('.contDiv');
const navTitle = document.querySelector('.nav__title');


listNav.addEventListener('click', () => {
  bookSec.classList.remove('hide');
  bookSec.classList.add('show');

  contDiv.classList.add('hide');

  inputs.classList.add('hide');
})

addNav.addEventListener('click', () => {
  inputs.classList.remove('hide');
  inputs.classList.toggle('show2');

  bookSec.classList.add('hide');

  contDiv.classList.add('hide');
})

contNav.addEventListener('click', () => {
  contDiv.classList.remove('hide');
  contDiv.classList.add('show');

  bookSec.classList.add('hide');

  inputs.classList.add('hide');
})

navTitle.addEventListener('click', () => {
  contDiv.classList.add('hide');

  bookSec.classList.remove('hide');
  bookSec.classList.add('show');

  inputs.classList.remove('hide');
  inputs.classList.add('show2');
})

window.setInterval(() => {
  const clock = document.querySelector('.clock');
  let d = new Date();
  clock.innerHTML = d;
}, 1000);