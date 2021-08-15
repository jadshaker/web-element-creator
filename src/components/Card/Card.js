import Div from './Card.css';

const Card = props => {
  const classes = props.className;
  const id = props.id;
  return (
    <Div className={classes} id={id}>
      {props.children}
    </Div>
  );
};

export default Card;
