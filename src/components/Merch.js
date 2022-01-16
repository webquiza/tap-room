import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
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

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenMerchClicked: PropTypes.func
};

export default Merch;