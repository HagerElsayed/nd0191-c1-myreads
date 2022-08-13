import AppText from "../Constants/AppText";
import { ShelfType } from "../Helper/ShelfType";
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
        <option value="none" disabled>
          {AppText.Move_To}
        </option>
        <option value={ShelfType.CurrentlyReading.valueOf()}>
          {AppText.Currently_Reading}
        </option>
        <option value={ShelfType.WantToRead.valueOf()}>
          {AppText.Want_To_Read}
        </option>
        <option value={ShelfType.Read.valueOf()}>{AppText.Read}</option>
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
