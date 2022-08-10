import "./App.css";
import { useState } from "react";
import BookShelf from "./BookShelf";
import SearchBooks from "./components/SearchBooks";
import BookList from "./components/BooksList";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">{showSearchPage ? <SearchBooks /> : <BookList />}</div>
  );
}

export default App;
