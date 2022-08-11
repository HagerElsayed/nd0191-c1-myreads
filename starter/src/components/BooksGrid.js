import Book from "./Book";
import PropTypes from "prop-types";
import { ShelfType } from "../Helper/ShelfType";

const BooksGrid = ({ books, onChangeBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            book={book}
            selectedShelf={book.shelf ?? ShelfType.None.valueOf()}
            onChangeBookShelf={onChangeBookShelf}
          />
        );
      })}
    </ol>
  );
};
BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default BooksGrid;
