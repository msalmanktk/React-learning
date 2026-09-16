const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring examples
const books = getBooks();
books;
console.log(data[3].title);
datafind = data.find((a) => {
  return a.author === "Stanislaw Lem";
});
console.log(datafind.title);

const book = getBook(1);
console.log(book.author);

// it is difficul so object destructuring make it easier
const { title, author, publicationDate, pages, genres } = book;
console.log(author, title, genres);
// const primarygenre=genres[0]
// const secondarygenre=genres[1]
// primarygenre
const [primarygenre, secodarygenre] = genres;
console.log(primarygenre, secodarygenre);

//REST and Spread operators
const [istgenre, secgenre, ...others] = genres; //spresad operator
console.log(istgenre, secgenre, others);
const newGenres = [...genres, "epic fantacy"]; //REST operators
console.log(newGenres);

const updateBook = {
  ...book,
  //adding a new property
  moviePublicationDate: `2001-12-19`,
  //overriding an existing property
  pages: 1210,
};
updateBook;

//Template laterals : are ES6 js features than constain sany js expression inside string
const summary = `${title} is ${pages}--page book, was written by ${author} ${publicationDate.split("-")[0]}  `;
summary;

//Ternaries instead of if ele
const checkpages = pages > 1000 ? "yes" : "no";
checkpages;

//arrow function
const getyear = (str) => str.split("-")[0];
console.log(getyear(publicationDate));

//Short Circuiting and logical operator &&
console.log(true && "yes");
console.log(false && "yes");
//falsy value= =,'',null,undefined
console.log("salman" && "some string");
console.log(null && "some string");
const book2 = getBook(2);
//or operator
console.log(true || "some string");
console.log(false || "some string");
console.log(book2.translations.spanish || "not translated"); //check book 2
const countwrong = book2.reviews.librarything.reviewsCount || "no data";
countwrong;
// if here in condition 0 then it return again 0 so nulish coelicing
const count = book2.reviews.librarything.reviewsCount ?? "no data";
count;

//optional chaining
function getTtalreviewcount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarythng = book.reviews.librarything?.reviewsCount ?? 0;
  librarythng;
  0;
  return goodreads + librarythng;
}
console.log(getTtalreviewcount(book));

////3 functional array method having master in it
const xx = [1, 2, 4].map((x) => x * 2);
xx;
const booktitles = books.map((book) => book.title);
booktitles;
const essentialdata = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTtalreviewcount(book),
  };
});
essentialdata;

//filter methid
const filterbooks = books
  .filter((item) => item.pages > 500)
  .filter((item) => item.hasMovieAdaptation);
filterbooks;
const adventurebooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventurebooks;

//reduce method most pwerfull of fall array methods in js
const pagesAllbooks = books.reduce((acc, x) => acc + x.pages, 0);
pagesAllbooks;

//array sort method
const x = [1, 5, 7, 2, 9];
const sorted = x.sort((a, b) => a - b); //b-a descending
sorted;
x; // sort is not a functional method it mutates the original array it cant be stored in new array

const sortedbookbypages = books.slice().sort((a, b) => a.pages - b.pages);
sortedbookbypages;
//work with mutatable array
//adding a book
const newbook = {
  id: 6,
  title: "The Hundred",
  author: "Jonas Smith",
  pages: 349,
};
const bookAdd = [...books, newbook];
bookAdd;

//delete a book
const bookDelete = bookAdd
  .filter((book) => book.id !== 3)
  .map((x) => {
    return x.id;
  });
console.log(bookDelete);
//update boo
const bookupdate = bookAdd.map((x) => (x.id === 1 ? {} : x));
const bookupdate2 = bookAdd.map((x) =>
  x.id === 1 ? { ...books, pages: 10 } : x,
); //so here only pages updated
bookupdate;
bookupdate2;

//
//asynchronous programming promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("salman");
//async await
async function getTodos(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
const todos = getTodos();
console.log(todos);
console.log("jnas");
