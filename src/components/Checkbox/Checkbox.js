import Div from './Checkbox.css';

const Checkbox = props => (
    <Div
        size={props.size}
        on_color={props.on_color}
        offColor={props.offColor}
        borderColor={props.borderColor}
        borderSize={props.borderSize}
        hoverColor={props.hoverColor}
    >
        <label>
            <input type="checkbox" />
            <span />
        </label>
    </Div>
);
export default Checkbox;
