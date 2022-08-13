import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import AppText from "../Constants/AppText";
import { ShelfTypes } from "../Helper/ShelfType";
import { filterBookByShelf } from "../Helper/Filtration";
import ErrorItem from "./Common/errorItem";
import PropTypes from "prop-types";

const BookList = ({ onChangeBookShelf, books, isError }) => {
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
                onChangeBookShelf={onChangeBookShelf}
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
BookList.propTypes = {
  isError: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
};
export default BookList;
