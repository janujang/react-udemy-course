import "./Card.css";

//wrapper component (container)
const Card = (props) => {
  //add classes from parent
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
