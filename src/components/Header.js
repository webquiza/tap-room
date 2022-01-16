import React from "react";
import merchImage from "./../img/merch.jpg";

// CSS object with inline styles
function Header(props){
  const Header = {
    color: '#457b9d',
    fontFamily: 'futura'
  }
  return (
    <React.Fragment>
      <div style={Header}>
        <h1>Merch Shop</h1>
        <img src={merchImage} alt="merch" />
      </div>
    </React.Fragment>
  );
}

export default Header;