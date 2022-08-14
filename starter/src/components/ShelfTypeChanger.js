import AppText from "../Constants/AppText";
import { ShelfType, ShelfTypes } from "../Helper/ShelfType";
import PropTypes from "prop-types";

const ShelfTypeChanger = ({ selectedShelf, onChangeBookShelf, book }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={selectedShelf}
        onChange={(event) => {
          onChangeBookShelf(book, event?.target?.value); // callback function to handle changeing Book shelf
        }}
      >
        <option disabled>{AppText.Move_To}</option>
        {ShelfTypes.map((shelfType) => (
          <option value={shelfType.value}>{shelfType.title}</option>
        ))}
        <option value={ShelfType.None.valueOf()}>{AppText.None}</option>
      </select>
    </div>
  );
};
ShelfTypeChanger.propTypes = {
  selectedShelf: PropTypes.string.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};
export default ShelfTypeChanger;
