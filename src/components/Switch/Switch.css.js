import styled from 'styled-components';

let size, offColor, onColor, innerColor, rounded, onImg, offImg;

const Div = styled.div`
  ${props => {
    size = props.size || 1;
    offColor = props.offColor || '#cccccc';
    onColor = props.on_color || '#2094f3';
    innerColor = props.innerColor || '#ffffff';
    rounded = props.rounded !== false;
    onImg = props.on_img;
    offImg = props.offImg;
  }}

  & label {
    position: relative;
    display: inline-block;

    width: ${() => (size - 1) * 10 + 30}px;
    height: ${() => (size - 1) * (17 / 3) + 17}px;
  }

  & label input {
    display: none;
  }

  & label span {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.5s;

    background: ${() => offColor};
    ${() => rounded && 'border-radius: 34px;'}
  }

  & label span:before {
    position: absolute;
    content: '';
    transition: 0.5s;

    width: ${() => (size - 1) * (13 / 3) + 13}px;
    height: ${() => (size - 1) * (13 / 3) + 13}px;
    left: ${() => (size - 1) * (2 / 3) + 2}px;
    bottom: ${() => (size - 1) * (2 / 3) + 2}px;
    background: ${() => innerColor} no-repeat center center;
    background-image: url(${() => offImg});
    ${() => rounded && 'border-radius: 50%;'}
  }

  & label input:checked + span:before {
    background: ${() => innerColor} no-repeat center center;
    background-image: url(${() => onImg});
    transform: translateX(${() => (size - 1) * (13 / 3) + 13}px);
  }

  & label input:checked + span {
    background: ${() => onColor};
  }
`;

export default Div;
