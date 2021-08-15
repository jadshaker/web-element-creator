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
      </select>
    </label>
  );
};

export default SelectItem;
