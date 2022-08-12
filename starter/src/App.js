import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import BookList from "./components/BooksList";
import ErrorItem from "./components/Common/errorItem";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="*"
          element={<ErrorItem source="images/ErrorPage404.jpg" />}
        />
        <Route exact path="/" element={<BookList />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
