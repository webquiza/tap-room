import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
  const { merch, onClickingDelete, onClickingBuy, onClickingRestock } = props; 

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>
        {merch.description} - {merch.name}
      </h3>
      <p>
        <em>{merch.quantity}</em>
      </p>
      <button onClick={props.onClickingEdit}>UpdateMerch</button>
      <button onClick={() => onClickingDelete(merch.id)}>Remove Merch</button>
      <button onClick={() => onClickingBuy(merch.id)}>Buy</button>
      <button onClick={() => onClickingRestock(merch.id)}>Restock</button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default MerchDetail;