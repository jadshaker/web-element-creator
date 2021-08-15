import styled from 'styled-components';

const Div = styled.div`
  margin: 2rem auto;
  width: 50rem;
  height: 1px;
  max-width: 95%;
  border-radius: 12px 12px 0 0;
  text-align: center;
  box-shadow: 0 1px 8px #00000040;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    font-size: 1.5rem;
    width: 50%;
    background: #a892ee;
    transition: 0.3s;
    border-bottom: 2px solid #b5add2;
  }

  & div:hover {
    background-color: #876ce0;
    cursor: pointer;
  }

  & div:nth-child(1) {
    border-radius: 12px 0 0 0;
    border-right: 1px solid #b5add2;
    float: left;
  }

  & div:nth-child(2) {
    border-radius: 0 12px 0 0;
    border-left: 1px solid #b5add2;
    float: right;
  }

  & div.clicked {
    background: #6e52cb;
  }
`;

export default Div;
