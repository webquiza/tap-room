import React from "react";
import beerImage from "./../img/beer.jpg";

// CSS object with inline styles
function Header(props){
  const Header = {
    color: '#457b9d',
  }
  return (
    <React.Fragment>
      <div style={Header}>
        <h1>Tap Room</h1>
        <img src={beerImage} alt="beer" />
      </div>
    </React.Fragment>
  );
}

export default Header;