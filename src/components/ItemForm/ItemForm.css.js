import styled from 'styled-components';

const Div = styled.div`
  & div {
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  & .container {
    width: 100%;
  }

  & .container label {
    margin-top: 0.2rem;
    font-weight: 200;
    display: block;
  }

  & .container input,
  & .container select {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #cccccc;
    width: 100%;
    height: 38px;
    max-width: 100%;
    background: #ffffff;
  }

  & .slider {
    position: relative;
    height: 32px;
  }

  & .slider span {
    position: absolute;
    top: 18px;
    left: 90%;
    padding: 2px;
    width: 10%;
    box-sizing: border-box;
    background: #ffffff;
    text-align: center;
    z-index: 1;
    border-radius: 15px;
  }

  & .container input[type='range'] {
    width: 90%;
    height: 2px;
    background: #ffffff;
    -webkit-appearance: none;
    outline: none;
    border-radius: 2px;
    border: none;
    padding: 0;
    left: 0;
    top: 27px;
    cursor: pointer;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 550px) {
    & .container span {
      width: 20%;
      left: 80%;
    }
    & .container input[type='range'] {
      width: 80%;
    }
  }

  & .container input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6442d3;
  }

  & .container input[type='color'] {
    border: 0;
    padding: 0.2rem;
  }

  & .actions {
    text-align: right;
  }

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #3f005c;
    background-color: #3f005c;
    color: #ffffff;
    border-radius: 12px;
  }

  & button:hover,
  & button:active {
    background-color: #510674;
    border-color: #510674;
  }
`;

export default Div;
