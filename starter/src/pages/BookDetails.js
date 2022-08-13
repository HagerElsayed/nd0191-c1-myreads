import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useLocation } from "react-router-dom";
import ErrorItem from "../components/Common/errorItem";
import { Link, useParams } from "react-router-dom";
import { get } from "../BooksAPI";
import "./styles/BookDetails.style.css";
import AppText from "../Constants/AppText";
const BookDetails = () => {
  // const { state } = useLocation();
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const book = await get(id).catch((err) => {
        setIsError(true);
      });
      setBook(book);
    };
    getBook();
  }, [id]);

  return (
    <div className="book-details">
      {!isError && book && (
        <div>
          <div
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <h1>{book?.title}</h1>
          <h2>{book?.subtitle}</h2>
          <h3 className="authors">{book?.authors}</h3>
          <p>{book?.description}</p>
          <div>
            <Link to="/">{AppText.back}</Link>
          </div>
        </div>
      )}

      {isError && <ErrorItem source="images/Error.jpg" />}
    </div>
  );
};

export default BookDetails;
