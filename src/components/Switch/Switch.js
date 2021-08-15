import Div from './Switch.css.js';

const Switch = props => {
    return (
        <Div
            size={props.size}
            on_color={props.onColor}
            offColor={props.offColor}
            innerColor={props.innerColor}
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
