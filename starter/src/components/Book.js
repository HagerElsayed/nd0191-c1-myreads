import ShelfTypeChanger from "./ShelfTypeChanger";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book, selectedShelf, onChangeBookShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <Link
            to={`/bookDetails/${book.id}`}
            // state={{
            //   image: book?.imageLinks?.thumbnail,
            //   title: book.title,
            //   authors: book.authors,
            // }}
          >
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
              }}
            ></div>
          </Link>
          <ShelfTypeChanger
            selectedShelf={selectedShelf}
            onChangeBookShelf={onChangeBookShelf}
            book={book}
          />
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">{book?.authors}</div>
      </div>
    </li>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  selectedShelf: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default Book;
