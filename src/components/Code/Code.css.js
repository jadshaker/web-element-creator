import styled from 'styled-components';

const Div = styled.div`
  text-align: left;

  & h3 {
    margin-bottom: 0;
  }

  & ol li {
    font-size: 14px;
  }

  & a {
    text-decoration: none;
    color: #000000;
  }
`;

const Pre = styled.pre`
  text-align: left;
`;

export { Div };
export default Pre;
