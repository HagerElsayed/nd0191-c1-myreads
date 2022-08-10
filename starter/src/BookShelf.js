import BooksGrid from "./components/BooksGrid";

const BookShelf = () => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <BooksGrid />
      </div>
    </div>
  );
};
export default BookShelf;
