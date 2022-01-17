import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value), 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBeerFormSubmission}
        buttonText="Submit" 
      />
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
};

export default NewBeerForm;