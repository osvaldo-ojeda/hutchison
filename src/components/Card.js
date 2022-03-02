const Card = (props) => {
  return (
    <div className="card">
      <h3 className="cardHeader">{props.panel.cardHeader}</h3>

      <p>{props.panel.parrafo}</p>
      <h3 className="cardFooter">{props.panel.cardFooter}</h3>
    </div>
  );
};

export default Card;
