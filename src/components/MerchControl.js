import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMerchList: [],
      selectedMerch: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      formVisibleOnPage: false 
    });
  }

  handleIncrementQuantity = (id) => {
    if (this.state.mainMerchList.length > 1) {
      const selectedMerch = this.state.mainMerchList.filter(
        (merch) => merch.id === id
      )[0];
      if(selectedMerch.quantity > 0){
      selectedMerch.quantity--;
      const newMainMerchList = this.state.mainMerchList
        .filter((merch) => merch.id !== id)
        .concat(selectedMerch);
      this.setState({
        mainMerchList: newMainMerchList,
      })};
    } else {
      const selectedMerch = this.state.mainMerchList.filter(
        (merch) => merch.id === id
      )[0];
      if(selectedMerch.quantity > 0){
      selectedMerch.quantity--;
      const newMerchListArray = [];
      const changedMerchArray = newMerchListArray.concat(selectedMerch);
      this.setState({
        mainMerchList: changedMerchArray,
      })};
    }
  };

  handleQuantityRestock = (id) => {
    if (this.state.mainMerchList.length > 1) {
      const selectedMerch = this.state.mainMerchList.filter(
        (merch) => merch.id === id
      )[0];
      selectedMerch.quantity += Number(20);
      const newMainMerchList = this.state.mainMerchList
        .filter((merch) => merch.id !== id)
        .concat(selectedMerch);
      this.setState({
        mainMerchList: newMainMerchList,
      });
    } else {
      const selectedMerch = this.state.mainMerchList.filter(
        (merch) => merch.id === id
      )[0];
      selectedMerch.quantity += Number(20);
      const newMerchListArray = [];
      const changedMerchArray = newMerchListArray.concat(selectedMerch);
      this.setState({
        mainMerchList: changedMerchArray,
      });
    }
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter((merch) => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter((merch) => merch.id !== id);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingMerchInList = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
      .filter((merch) => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
        mainMerchList: editedMainMerchList,
        editing: false,
        selectedMerch: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = (
      <EditMerchForm 
        merch = {this.state.selectedMerch} 
        onEditMerch = {this.handleEditingMerchInList} 
      />
      );
      buttonText = "Return to merch List";
    }
    else if (this.state.selectedMerch != null) {
      currentlyVisibleState = (
        <MerchDetail 
          merch = {this.state.selectedMerch} 
          onClickingDelete = {this.handleDeletingMerch} onClickingEdit = {this.handleEditClick} 
          onClickingBuy={this.handleIncrementQuantity}
          onClickingRestock={this.handleQuantityRestock}
        />
      );
      buttonText = "Return to merch List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
      <NewMerchForm 
        onNewMerchCreation={this.handleAddingNewMerchToList} 
        />
      );
      buttonText = "Return to merch List";
    } else {
      currentlyVisibleState = (
        <MerchList 
          merchList={this.state.mainMerchList} 
          onMerchSelection={this.handleChangingSelectedMerch} 

        />
      );
    buttonText = "Add merch";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default MerchControl;