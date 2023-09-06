/* eslint-disable react/prop-types */
const Checkbox = ({ text, ...rest }) => {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span> {text}</span>
    </label>
  );
};

export default Checkbox;
