const SelectItem = props => {
  const options = [];
  for (let option of props.options)
    options.push(<option value={option}>{option}</option>);
  return (
    <label>
      Item
      <select
        options={props.options}
        value={props.value}
        onChange={props.onChange}
      >
        {options}
        {/* <option value="Switch">Switch</option>
      <option value="Checkbox">Checkbox</option> */}
      </select>
    </label>
  );
};

export default SelectItem;
