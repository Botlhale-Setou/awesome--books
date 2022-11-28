let books_list = [];
// let rmvBtns = 0;

// function add_to_books_list (title, author) {

// }

const add_to_books_list = (title, author) => {
  let book = {
    // ident: rmvBtns++,
    tit: title,
    aut: author
  }
  books_list.push(book);
}

const display_books = () => {
  const book_section = document.querySelector('.books-list');
  book_section.innerHTML = "";

  for (let i=0; i<books_list.length; i+=1) {
    book_section.innerHTML += `
      <h4>${books_list[i].tit}</h4>
      <h4>${books_list[i].aut}</h4>
      <button id="${i}" class="rmv" type='button'>Remove</button>
      <hr>
    `
  }
}


// add_to_books_list("hello", "world");
// display_books();

const add_button = document.querySelector('#button');
add_button.addEventListener("click", () => {
  const title_input = document.querySelector('#title').value;
  const author_input = document.querySelector('#author').value;
  add_to_books_list(title_input, author_input);
  display_books();
  setRmvs();

  window.localStorage.setItem('books', JSON.stringify(books_list));
});


const setRmvs = () => {
  console.log('running');
  let xallRmvs = document.getElementsByClassName('rmv');
  let allRmvs = Array.from(xallRmvs);

  allRmvs.forEach(btn => {
    btn.addEventListener('click', () => {
      remove_book(btn.id);
      display_books();
      setRmvs();
    })
  });
  
};

const remove_book = (ix) => {
  books_list.splice(ix, 1);
}

window.onload = () => {
  const localStorageItem = window.localStorage.getItem('books');

  if (localStorageItem) {
    books_list = JSON.parse(localStorageItem);

    display_books()
    setRmvs();
  }
};