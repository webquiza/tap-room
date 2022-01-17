import React from "react";
import PropTypes from "prop-types";

function Beer(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}>
        <h3>
          {props.name} - ${props.price}
        </h3>
        <p>
          {props.quantity > 0 ? (
            <em><strong>{props.quantity}</strong> pints of beer left</em>
          ) : (
            <em>Out of stock</em>
          )}
        </p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  style: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenBeerClicked: PropTypes.func
};

export default Beer;