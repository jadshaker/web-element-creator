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
