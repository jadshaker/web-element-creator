import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Div from './ItemForm.css';
import SelectItem from './components/SelectItem';
import Input from './components/Input';
import Switch from '../Switch/Switch';
import Checkbox from '../Checkbox/Checkbox';
import Buttons from '../Buttons/Buttons';
import Code from '../Code/Code';

const DATA = {
    item: 'Switch',
    size: '1',
    onColor: '#2094f3',
    offColor: '#cccccc',
    innerColor: '#ffffff',
    borderColor: '#000000',
    borderSize: '1',
    hoverColor: '#cccccc',
    codeType: 'React',
};

const ItemForm = () => {
    const [item, setItem] = useState(DATA.item);
    const [size, setSize] = useState(DATA.size);
    const [onColor, setOnColor] = useState(DATA.onColor);
    const [offColor, setOffColor] = useState(DATA.offColor);
    const [innerColor, setInnerColor] = useState(DATA.innerColor);
    const [borderColor, setBorderColor] = useState(DATA.borderColor);
    const [borderSize, setBorderSize] = useState(DATA.borderSize);
    const [hoverColor, setHoverColor] = useState(DATA.hoverColor);
    const [codeType, setCodeType] = useState(DATA.codeType);

    useEffect(() => {
        DATA.item = item;
        DATA.size = size;
        DATA.onColor = onColor;
        DATA.offColor = offColor;
        DATA.innerColor = innerColor;
        DATA.borderColor = borderColor;
        DATA.borderSize = borderSize;
        DATA.hoverColor = hoverColor;
        DATA.codeType = codeType;
    });

    const changeItemHandler = e => {
        setItem(e.target.value);
    };
    const changeSizeHandler = e => {
        setSize(e.target.value);
    };
    const changeOnColorHandler = e => {
        setOnColor(e.target.value);
    };
    const changeOffColorHandler = e => {
        setOffColor(e.target.value);
    };
    const changeInnerColorHandler = e => {
        setInnerColor(e.target.value);
    };
    const changeBorderColorHandler = e => {
        setBorderColor(e.target.value);
    };
    const changeBorderSizeHandler = e => {
        setBorderSize(e.target.value);
    };
    const changeHoverColorHandler = e => {
        setHoverColor(e.target.value);
    };
    const changeCodeTypeHandler = e => {
        setCodeType(e.target.innerHTML.split(' ')[0]);
    };

    return (
        <div>
            <Card>
                <Div>
                    <div className="container">
                        <SelectItem value={item} onChange={changeItemHandler} />
                    </div>

                    {(item === 'Switch' || item === 'Checkbox') && (
                        <div className="container">
                            <Input
                                title="Size"
                                type="number"
                                min="1"
                                max="20"
                                value={Math.max(1, Math.min(size, 20))}
                                onChange={changeSizeHandler}
                            />
                        </div>
                    )}

                    {(item === 'Switch' || item === 'Checkbox') && (
                        <div className="container">
                            <Input
                                title="On Color"
                                type="color"
                                value={onColor}
                                onChange={changeOnColorHandler}
                            />
                        </div>
                    )}

                    {(item === 'Switch' || item === 'Checkbox') && (
                        <div className="container">
                            <Input
                                title="Off Color"
                                type="color"
                                value={offColor}
                                onChange={changeOffColorHandler}
                            />
                        </div>
                    )}

                    {item === 'Switch' && (
                        <div className="container">
                            <Input
                                title="Inner Color"
                                type="color"
                                value={innerColor}
                                onChange={changeInnerColorHandler}
                            />
                        </div>
                    )}

                    {item === 'Checkbox' && (
                        <div className="container">
                            <Input
                                title="Border Color"
                                type="color"
                                value={borderColor}
                                onChange={changeBorderColorHandler}
                            />
                        </div>
                    )}

                    {item === 'Checkbox' && (
                        <div className="container">
                            <Input
                                title="Border Size"
                                type="number"
                                min="0"
                                max="20"
                                value={Math.max(0, Math.min(borderSize, 20))}
                                onChange={changeBorderSizeHandler}
                            />
                        </div>
                    )}

                    {item === 'Checkbox' && (
                        <div className="container">
                            <Input
                                title="Hover Color"
                                type="color"
                                value={hoverColor}
                                onChange={changeHoverColorHandler}
                            />
                        </div>
                    )}
                </Div>
            </Card>

            <Card>
                {item === 'Switch' && (
                    <Switch
                        size={Math.max(1, Math.min(size, 20))}
                        on_color={onColor}
                        offColor={offColor}
                        innerColor={innerColor}
                    />
                )}
                {item === 'Checkbox' && (
                    <Checkbox
                        size={Math.max(1, Math.min(size, 20))}
                        on_color={onColor}
                        offColor={offColor}
                        borderColor={borderColor}
                        borderSize={Math.max(0, Math.min(borderSize, 20))}
                        hoverColor={hoverColor}
                    />
                )}
            </Card>

            <Buttons value={codeType} onChange={changeCodeTypeHandler} />

            <Card>
                <Code
                    item={item}
                    size={size}
                    onColor={onColor}
                    offColor={offColor}
                    innerColor={innerColor}
                    borderColor={borderColor}
                    borderSize={borderSize}
                    hoverColor={hoverColor}
                    codeType={codeType}
                />
            </Card>
        </div>
    );
};

export { DATA };
export default ItemForm;
