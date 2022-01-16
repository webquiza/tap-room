import React from "react";
import PropTypes from "prop-types";

function Beer(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeerClicked(props.id)}>
        <h3>
          {props.description} - {props.name}
        </h3>
        <p>
          {props.quantity > 0 ? (
            <em>{props.quantity}</em>
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
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenBeerClicked: PropTypes.func
};

export default Beer;