import "./App.css";
import { useState } from "react";
import SearchBooks from "./components/SearchBooks";
import BookList from "./components/BooksList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* {showSearchPage ? <SearchBooks /> : <BookList />}{" "} */}
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
