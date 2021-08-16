import Div from './Switch.css.js';

const Switch = props => {
  return (
    <Div
      size={props.size}
      on_color={props.on_color}
      offColor={props.offColor}
      buttonColor={props.buttonColor}
      rounded={props.rounded}
      on_img={props.onImg}
      offImg={props.offImg}
    >
      <label>
        <input type="checkbox" />
        <span />
      </label>
    </Div>
  );
};

export default Switch;
