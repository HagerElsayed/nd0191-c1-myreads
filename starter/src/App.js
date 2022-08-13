import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import BookList from "./components/BooksList";
import ErrorItem from "./components/Common/errorItem";
import { getAll, update } from "./BooksAPI";
import { useEffect, useState } from "react";

function App() {
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

  const onChangeBookShelf = (book, shelf) => {
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
    <div className="app">
      <Routes>
        <Route
          path="*"
          element={<ErrorItem source="images/ErrorPage404.jpg" />}
        />
        <Route
          exact
          path="/"
          element={
            <BookList
              onChangeBookShelf={(book, shelf) =>
                onChangeBookShelf(book, shelf)
              }
              books={books}
              isError={isError}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchBooks
              onChangeBookShelf={(book, shelf) =>
                onChangeBookShelf(book, shelf)
              }
              allbooks={books}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
