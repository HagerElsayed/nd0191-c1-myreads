import AppText from "../Constants/AppText";
import { ShelfType } from "../Helper/ShelfType";

const ShelfTypeChanger = () => {
  return (
    <div className="book-shelf-changer">
      <select>
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

export default ShelfTypeChanger;
