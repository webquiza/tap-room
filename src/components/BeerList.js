import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props){
  return (
    <React.Fragment>
      {props.beerList.map((beer) => (
        <Beer
          whenBeerClicked = { props.onBeerSelection }
          name={beer.name}
          brand={beer.brand}
          style={beer.style}
          price={beer.price}
          quantity={beer.quantity}
          id={beer.id}
          key={beer.id}  
        />
      ))}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
};

export default BeerList;