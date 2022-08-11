import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

const BookShelf = ({ shelfTitle, books, onChangeBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          key={shelfTitle}
          books={books}
          onChangeBookShelf={onChangeBookShelf}
        />
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  shelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default BookShelf;
