import { Link } from "react-router-dom";
import BookShelf from "../BookShelf";
import AppText from "../Constants/AppText";

const BookList = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">{AppText.Add_A_Book}</Link>
      </div>
    </div>
  );
};

export default BookList;
