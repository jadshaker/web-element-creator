const Input = props => {
  const classes = 'container' + (props.type === 'range' ? ' slider' : '');
  return (
    <div className={classes}>
      <label>
        {props.title}
        {props.type === 'range' && (
          <span>
            {props.value} {props.unit}
          </span>
        )}
        <input
          type={props.type}
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
};

export default Input;
