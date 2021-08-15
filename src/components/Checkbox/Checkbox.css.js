import styled from 'styled-components';
import CheckMark from './CheckMark.svg';

let size, onColor, offColor, borderColor, borderSize, hoverColor;

const Div = styled.div`
    ${props => {
        size = props.size || 1;
        onColor = props.on_color || '#5ce640';
        offColor = props.offColor || '#ffffff';
        hoverColor = props.hoverColor || '#cccccc';
        borderColor = props.borderColor || '#000000';
        borderSize = props.borderSize || '0';
        console.log(onColor);
    }}
    & label {
        position: relative;
        display: inline-block;
        width: ${() => (size - 1) * (13 / 3) + 13}px;
        height: ${() => (size - 1) * (13 / 3) + 13}px;
        border: ${() => borderSize}px solid ${() => borderColor};
    }

    & input {
        display: none;
    }

    & span:hover {
        background: ${() => hoverColor};
    }

    & span {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${() => offColor};
        transition: 0.5s;
    }

    & label input:checked + span {
        background: ${() => onColor} url(${CheckMark});
        background-size: cover;
    }
`;

export default Div;
