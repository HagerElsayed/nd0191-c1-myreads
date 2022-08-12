export const filterBookByShelf = (shelfType, books) => {
  const filteredBooks = books?.filter((book) => book.shelf === shelfType);
  return filteredBooks;
};

export const filterBookById = (id, books) => {
  const filteredBooks = books?.filter((book) => book.id === id);
  return filteredBooks;
};
