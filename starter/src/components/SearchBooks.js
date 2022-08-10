import BooksGrid from "./BooksGrid";

const SearchBooks = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => {}}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid />
      </div>
    </div>
  );
};

export default SearchBooks;
