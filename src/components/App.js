import React from "react";
import Header from "./Header";
import BeerControl from "./BeerControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <BeerControl />
    </React.Fragment>
  );
}

export default App;