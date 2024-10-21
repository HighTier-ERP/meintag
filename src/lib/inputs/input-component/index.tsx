//PACKAGE IMPORTS
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Reusable input component to speed up form development
/*----------------------------------------------------------------------------*/

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  classes,
  groupClasses,
}: any) => {
  return (
    <div className={classNames(groupClasses, "form__group field")}>
      <input
        type={type}
        className={`form__field ${classes}`}
        placeholder={placeholder}
        name={name}
        id={uuidv4()}
        defaultValue={value}
        onChange={onChange}
      />
      <label htmlFor={name} className="form__label text-capitalize">
        {name}
      </label>
    </div>
  );
};

export default Input;
