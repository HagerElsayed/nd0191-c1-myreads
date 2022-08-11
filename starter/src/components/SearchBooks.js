import { useState } from "react";
import { Link } from "react-router-dom";
import { search, update } from "../BooksAPI";
import AppText from "../Constants/AppText";
import BooksGrid from "./BooksGrid";

const SearchBooks = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query); //.trim()
    const searchBook = async () => {
      const books = await search(query.toLowerCase(), 20);
      setBooks(books);
    };
    if (query !== "") {
      searchBook();
    }
  };

  const onChangeBookshelf = (book, shelf) => {
    const updateShelf = async () => {
      await update(book, shelf);
    };
    updateShelf();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          {AppText.Close}
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder={AppText.Search_Placeholder}
            value={query}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </div>
      </div>
      {query !== "" && books?.length > 0 && (
        <div className="search-books-results">
          <BooksGrid books={books} onChangeBookShelf={onChangeBookshelf} />
        </div>
      )}
    </div>
  );
};

export default SearchBooks;
