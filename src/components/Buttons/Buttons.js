import Div from './Buttons.css';

const Buttons = props => {
  const value = props.value;

  return (
    <Div>
      <div
        onClick={props.onChange}
        className={value === 'React' ? 'clicked' : ''}
      >
        React
      </div>
      <div
        onClick={props.onChange}
        className={value === 'HTML' ? 'clicked' : ''}
      >
        HTML and CSS
      </div>
    </Div>
  );
};

export default Buttons;
