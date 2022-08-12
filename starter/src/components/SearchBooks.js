import { useState } from "react";
import { Link } from "react-router-dom";
import { getAll, search, update } from "../BooksAPI";
import AppText from "../Constants/AppText";
import { filterBookById } from "../Helper/filteration";
import BooksGrid from "./BooksGrid";

const SearchBooks = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
    const searchBook = async () => {
      await search(query.toLowerCase(), 20).then((searchedBooks) => {
        updateBooksShelf(searchedBooks);
      });
    };
    if (query !== "") {
      searchBook();
    }
  };

  const updateBooksShelf = (searchedBooks) => {
    getAll().then((allbooks) => {
      allbooks?.forEach((book) => {
        if (searchedBooks.length > 0) {
          let filteredBooks = filterBookById(book.id, searchedBooks);
          if (filteredBooks.length > 0) {
            filteredBooks[0].shelf = book.shelf;
          }
        }
      });
      setSearchResults(searchedBooks);
    });
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
      {query !== "" && searchResults?.length > 0 && (
        <div className="search-books-results">
          <BooksGrid
            books={searchResults}
            onChangeBookShelf={onChangeBookshelf}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBooks;
