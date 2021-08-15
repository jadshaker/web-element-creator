import Pre, { Div } from './Code.css';
import Switch from './zipFiles/Switch.zip';
import Checkbox from './zipFiles/Checkbox.zip';
import CheckMark from './../Checkbox/CheckMark.svg';

const Code = props => {
    const item = props.item;
    const size = Math.max(1, Math.min(props.size, 20));
    const onColor = props.onColor;
    const offColor = props.offColor;
    const innerColor = props.innerColor;
    const borderColor = props.borderColor;
    const borderSize = Math.max(0, Math.min(props.borderSize, 20));
    const hoverColor = props.hoverColor;
    const codeType = props.codeType;

    if (codeType === 'React')
        return (
            <Div>
                <h3>Steps to use React script</h3>
                <ol type="1">
                    <li>
                        Install styled-components library in your app
                        <br /> (npm install styled-components)
                    </li>
                    <li>
                        Install the{' '}
                        <i>
                            <b>
                                <a
                                    href={item === 'Switch' ? Switch : Checkbox}
                                    download={`${item}.zip`}
                                >
                                    {item}
                                </a>
                            </b>
                        </i>{' '}
                        files and put them in your app
                    </li>
                    <li>
                        Import <b>{item}</b> in your file and copy the code!
                    </li>
                </ol>
                <Pre>
                    {item === 'Switch' &&
                        `<Switch
    size={${size}}
    on_color='${onColor}'
    offColor='${offColor}'
    innerColor='${innerColor}'
/>`}

                    {item === 'Checkbox' &&
                        `<Checkbox
    size={${size}}
    on_color='${onColor}'
    offColor='${offColor}'
    borderColor='${borderColor}'
    borderSize={${borderSize}}
    hoverColor='${hoverColor}'
/>`}
                </Pre>
            </Div>
        );

    return (
        <Div>
            <Pre>
                {item === 'Switch' &&
                    `<style>
    #switch-container label {
        position: relative;
        display: inline-block;
        width: ${Math.round((size - 1) * 10 + 30)}px;
        height: ${Math.round((size - 1) * (17 / 3) + 17)}px;
    }

    #switch-container label input {
        display: none;
    }

    #switch-container label span {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: 0.5s;
        background: ${offColor};
        border-radius: 34px;
    }

    #switch-container label span:before {
        position: absolute;
        content: '';
        transition: 0.5s;
        width: ${Math.round((size - 1) * (13 / 3) + 13)}px;
        height: ${Math.round((size - 1) * (13 / 3) + 13)}px;
        left: ${Math.round((size - 1) * (2 / 3) + 2)}px;
        bottom: ${Math.round((size - 1) * (2 / 3) + 2)}px;
        background: ${innerColor};
        border-radius: 50%;
    }

    #switch-container label input:checked + span:before {
        background: ${innerColor};
        transform: translateX(${Math.floor((size - 1) * (13 / 3) + 13)}px);
    }

    #switch-container label input:checked + span {
        background: ${onColor};
    }
</style>
    
<div id="switch-container">
    <label>
        <input type="checkbox" />
        <span />
    </label>
</div>`}

                {item === 'Checkbox' &&
                    `<style>
    #checkbox-container label {
        position: relative;
        display: inline-block;
        width: ${Math.round((size - 1) * (13 / 3) + 13)}px;
        height: ${Math.round((size - 1) * (13 / 3) + 13)}px;
        border: ${borderSize} solid ${borderColor};
    }

    #checkbox-container input {
        display: none;
    }

    #checkbox-container span:hover {
        background: ${hoverColor};
    }

    #checkbox-container span {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${offColor};
        transition: 0.5s;
    }

    #checkbox-container input:checked + span {
        background: ${onColor}
            url('CheckMark.svg');
        background-size: cover;
    }
</style>

<div id="checkbox-container">
    <label>
        <input type="checkbox" />
        <span />
    </label>
</div>
`}
            </Pre>
            Put this svg file in the same path as the code <br />
            <i>
                <b>
                    <a href={CheckMark} download="CheckMark.svg">
                        CheckMark
                    </a>
                </b>
            </i>
        </Div>
    );
};

export default Code;
