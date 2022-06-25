import propTypes from 'prop-types'; 


function Card({ children, reverse }){
    // return(
    //     <div className= {`card ${reverse && 'reverse'}`}>  {children} </div>

    return (
      <div
        className="card"
        style={{
          backgroundColor: reverse ? "rgb(135, 100, 69,0.4)" : "#fff",
          color: reverse ? "#fff" : "#000",
        }}
      >
        {children}
      </div>
    );
}

Card.defaultProps = {
    reverse: true, 
}
Card.propTypes = {
    children: PropTypes.node.isRequired, 
    reverse: PropTypes.bool,
}
export default Card;