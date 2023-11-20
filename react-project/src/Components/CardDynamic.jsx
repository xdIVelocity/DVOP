/* eslint-disable react/prop-types */
const CardDynamic = (props) => {
    return (
      <div>
        
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="ssps.cz">{props.link}</a>
      </div>
    );
  };
  
  export default CardDynamic;
  