export const Input = (props) => {
  const handleChange = (ev) => {
    props.handleFunction(ev.target.value);
  };
  return (
    <>
      <label className={props.labelClassName} htmlFor={props.labelId}>
        {props.labelText}
      </label>
      <input
        className={props.inputClassName}
        type={props.inputType}
        name={props.inputName}
        id={props.id}
        value={props.inputValue}
        onChange={handleChange}
        placeholder={props.inputPlaceholder}
      />
    </>
  );
};

// Estas son las default props
Input.defaultProps = {
  inputType: 'text',
  placeholder: '',
};
