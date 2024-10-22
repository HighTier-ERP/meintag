//PACKAGE IMPORTS
import classNames from "classnames";

//INTERNAL IMPORTS
import CheckIcon from "../../icons/CheckIcon"

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Custom Check Box
/*----------------------------------------------------------------------------*/

const CheckBox = ({
  selected,
  text,
  onChange,
  name,
  classes,
  checkBoxClasses,
}: any) => {
  return (
    <div
      className={classNames(
        classes,
        "modern-checkbox-container flex flex-row items-center justify-around w-100"
      )}
      onClick={onChange}
      onKeyDown={onChange}
      role="button"
      tabIndex={0}
    >
      <div
        className={classNames(
          "checkbox-outer-box",
          checkBoxClasses,
          checkBoxClasses ? "" : "bg-gray-2"
        )}
      >
        {selected ?
        <CheckIcon
          className={`checkbox-tick ${
            selected ? "selected-checkbox-tick" : ""
          }`}
        />: null}
      </div>
      <div className="-text f-w-500 px-4">{text}</div>
      <input
        className="none"
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={selected}
      />
    </div>
  );
};

export default CheckBox;
