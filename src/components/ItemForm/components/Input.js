const Input = e => (
  <label>
    {e.title}
    <input
      type={e.type}
      min={e.min}
      max={e.max}
      value={e.value}
      onChange={e.onChange}
    />
  </label>
);

export default Input;
