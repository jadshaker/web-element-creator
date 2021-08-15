const SelectItem = e => (
  <label>
    Item
    <select value={e.value} onChange={e.onChange}>
      <option value="Switch">Switch</option>
      <option value="Checkbox">Checkbox</option>
    </select>
  </label>
);

export default SelectItem;
