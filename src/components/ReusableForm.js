import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <p><strong><em>Name</em></strong></p>
        <input type="text" name="name" placeholder="3BS IPA" />
        
        <p><strong><em>Brand</em></strong></p>
        <input type="text" name="brand" placeholder="Boneyard" />
        
        <p><strong><em>Style</em></strong></p>
        <input type="text" name="style" placeholder="IPA" />
        
        <p><strong><em>Price</em></strong></p>
        <input type="text" name="price" placeholder="$5" min={0} />
        
        <p><strong><em>Quantity (pints of beer)</em></strong></p>
        
        <input
          type="number"
          name="quantity"
          placeholder="1"
          min="1"
          max="124"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;