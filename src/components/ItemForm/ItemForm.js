import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Div from './ItemForm.css';
import SelectItem from './components/SelectItem';
import Input from './components/Input';
import Switch from '../Switch/Switch';
import Checkbox from '../Checkbox/Checkbox';
import Buttons from '../Buttons/Buttons';
import Code from '../Code/Code';

const ITEMS = ['Switch', 'Checkbox'];

const DATA = {
  item: 'Switch',
  size: '1',
  onColor: '#2094f3',
  offColor: '#cccccc',
  innerColor: '#ffffff',
  borderSize: '0',
  borderRadius: '0',
  borderColor: '#000000',
  hoverColor: '#cccccc',
  codeType: 'React',
};

const ItemForm = () => {
  const [item, setItem] = useState(DATA.item);
  const [size, setSize] = useState(DATA.size);
  const [onColor, setOnColor] = useState(DATA.onColor);
  const [offColor, setOffColor] = useState(DATA.offColor);
  const [innerColor, setInnerColor] = useState(DATA.innerColor);
  const [borderSize, setBorderSize] = useState(DATA.borderSize);
  const [borderRadius, setBorderRadius] = useState(DATA.borderRadius);
  const [borderColor, setBorderColor] = useState(DATA.borderColor);
  const [hoverColor, setHoverColor] = useState(DATA.hoverColor);
  const [codeType, setCodeType] = useState(DATA.codeType);

  useEffect(() => {
    DATA.item = item;
    DATA.size = size;
    DATA.onColor = onColor;
    DATA.offColor = offColor;
    DATA.innerColor = innerColor;
    DATA.borderSize = borderSize;
    DATA.borderRadius = borderRadius;
    DATA.borderColor = borderColor;
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
  const changeBorderSizeHandler = e => {
    setBorderSize(e.target.value);
  };
  const changeBorderRadiusHandler = e => {
    setBorderRadius(e.target.value);
  };
  const changeBorderColorHandler = e => {
    setBorderColor(e.target.value);
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
          <SelectItem
            value={item}
            options={ITEMS}
            onChange={changeItemHandler}
          />

          {(item === 'Switch' || item === 'Checkbox') && (
            <Input
              title="Size"
              type="range"
              min="1"
              max="20"
              value={Math.max(1, Math.min(size, 20))}
              onChange={changeSizeHandler}
            />
          )}

          {item === 'Checkbox' && (
            <Input
              title="Border Size"
              type="range"
              min="0"
              max="20"
              value={Math.max(0, Math.min(borderSize, 20))}
              onChange={changeBorderSizeHandler}
            />
          )}

          {item === 'Checkbox' && (
            <Input
              title="Border Radius"
              type="range"
              min="0"
              max="50"
              unit="%"
              value={Math.max(0, Math.min(borderRadius, 50))}
              onChange={changeBorderRadiusHandler}
            />
          )}

          {(item === 'Switch' || item === 'Checkbox') && (
            <Input
              title="On Color"
              type="color"
              value={onColor}
              onChange={changeOnColorHandler}
            />
          )}

          {(item === 'Switch' || item === 'Checkbox') && (
            <Input
              title="Off Color"
              type="color"
              value={offColor}
              onChange={changeOffColorHandler}
            />
          )}

          {item === 'Checkbox' && (
            <Input
              title="Border Color"
              type="color"
              value={borderColor}
              onChange={changeBorderColorHandler}
            />
          )}

          {item === 'Switch' && (
            <Input
              title="Inner Color"
              type="color"
              value={innerColor}
              onChange={changeInnerColorHandler}
            />
          )}

          {item === 'Checkbox' && (
            <Input
              title="Hover Color"
              type="color"
              value={hoverColor}
              onChange={changeHoverColorHandler}
            />
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
            borderSize={Math.max(0, Math.min(borderSize, 20))}
            borderRadius={Math.max(0, Math.min(borderRadius, 50))}
            borderColor={borderColor}
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
          borderSize={borderSize}
          borderRadius={borderRadius}
          borderColor={borderColor}
          hoverColor={hoverColor}
          codeType={codeType}
        />
      </Card>
    </div>
  );
};

export { DATA };
export default ItemForm;
