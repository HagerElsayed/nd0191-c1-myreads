import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI";
import BookShelf from "./BookShelf";
import AppText from "../Constants/AppText";
import { ShelfTypes } from "../Helper/ShelfType";
import { filterBookByShelf } from "../Helper/Filtration";
import ErrorItem from "./Common/errorItem";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll().catch((err) => {
        setIsError(true);
      });
      setBooks(books);
    };
    getAllBooks();
  }, []);

  const onChangeBookshelf = (book, shelf) => {
    const updateShelf = async () => {
      await update(book, shelf)
        .then(() => {
          updateShelfBooksDependsOnType(book, shelf);
        })
        .catch((err) => {
          setIsError(true);
        });
    };
    updateShelf();
  };

  const updateShelfBooksDependsOnType = (book, shelf) => {
    book.shelf = shelf;
    let updatedBooks = books.filter(
      (selectedBook) => book.id !== selectedBook.id
    );
    setBooks(updatedBooks.concat([book]));
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{AppText.My_Reads}</h1>
      </div>
      <div className="list-books-content">
        <div>
          {!isError &&
            books &&
            ShelfTypes.map((shelfType) => (
              <BookShelf
                key={shelfType.title}
                shelfTitle={shelfType.title}
                books={filterBookByShelf(shelfType.value, books)}
                onChangeBookShelf={(book, shelf) =>
                  onChangeBookshelf(book, shelf)
                }
              />
            ))}
          {isError && <ErrorItem source="images/Error.jpg" />}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">{AppText.Add_A_Book}</Link>
      </div>
    </div>
  );
};

export default BookList;
