import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import AppText from "../Constants/AppText";
import { filterBookById } from "../Helper/Filtration";
import BooksGrid from "../components/BooksGrid";
import PropTypes from "prop-types";
import ErrorItem from "../components/Common/errorItem";

const SearchBooks = ({ onChangeBookShelf, allbooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isError, setIsError] = useState(false);

  const [query, setQuery] = useState("");
  const timeout = useRef();

  const searchBook = async () => {
    await search(query.toLowerCase(), 20)
      .then((searchedBooks) => {
        updateBooksShelf(searchedBooks);
      })
      .catch((err) => {
        setIsError(true);
      });
  };
  const handleSearch = (query) => {
    clearTimeout(timeout.current);
    setQuery(query);
    timeout.current = setTimeout(() => {
      if (query === "") {
        setSearchResults([]);
        return;
      } else {
        searchBook();
      }
    }, 600);
  };

  const updateBooksShelf = (searchedBooks) => {
    allbooks?.forEach((book) => {
      if (searchedBooks.length > 0) {
        let filteredBooks = filterBookById(book.id, searchedBooks);
        if (filteredBooks.length > 0) {
          filteredBooks[0].shelf = book.shelf;
        }
      }
    });
    setSearchResults(searchedBooks);
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
      {query !== "" && searchResults?.length > 0 && !isError && (
        <div className="search-books-results">
          <BooksGrid
            books={searchResults}
            onChangeBookShelf={onChangeBookShelf}
          />
        </div>
      )}
      {isError && <ErrorItem source="images/Error.jpg" />}
    </div>
  );
};

SearchBooks.propTypes = {
  allbooks: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
