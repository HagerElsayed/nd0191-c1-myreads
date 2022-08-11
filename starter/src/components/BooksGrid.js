import Book from "./Book";
import PropTypes from "prop-types";

const BooksGrid = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </ol>
  );
};
BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
};
export default BooksGrid;
