import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import BookShelf from "./BookShelf";
import AppText from "../Constants/AppText";
import { ShelfType } from "../Helper/ShelfType";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const filterBook = (shelfType) => {
    const filteredBooks = books.filter((book) => book.shelf === shelfType);
    return filteredBooks;
  };
  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll();
      setBooks(books);
    };
    getAllBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{AppText.My_Reads}</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            shelfTitle={AppText.Currently_Reading}
            books={filterBook(ShelfType.CurrentlyReading.valueOf())}
          />
          <BookShelf
            shelfTitle={AppText.Want_To_Read}
            books={filterBook(ShelfType.WantToRead.valueOf())}
          />
          <BookShelf
            shelfTitle={AppText.Read}
            books={filterBook(ShelfType.Read.valueOf())}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">{AppText.Add_A_Book}</Link>
      </div>
    </div>
  );
};

export default BookList;
