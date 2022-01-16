import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer, onClickingDelete, onClickingBuy, onClickingRestock } = props; 

  return (
    <React.Fragment>
      <h1>Beer Detail</h1>
      <h3>
        {beer.description} - {beer.name}
      </h3>
      <p>
        <em>{beer.quantity}</em>
      </p>
      <button onClick={props.onClickingEdit}>UpdateBeer</button>
      <button onClick={() => onClickingDelete(beer.id)}>Remove Beer</button>
      <button onClick={() => onClickingBuy(beer.id)}>Buy</button>
      <button onClick={() => onClickingRestock(beer.id)}>Restock</button>
      <hr/>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default BeerDetail;