import React, { Component } from 'react';
import './../App.css'
import autobind from 'react-autobind';

class Main extends Component {
  render() {
    return (
      <div>
        <div id="fields">
          <Add />
          <Search />
          <Update />
          <Delete />
        </div>
      </div>
    );
  }
}

class Add extends Component {
  constructor(props) {
    super(props);
    this.state={
        };
  }

  render(){
      return(
        <fieldset id="add">
        <legend>Add</legend>
        <form>
          <input placeholder="Billno"></input>
          <input placeholder="Status"></input>
          <input placeholder="Title"></input>
          <input placeholder="Primary Committee"></input>
          <input placeholder="Scope"></input>
          <input placeholder="Seconday Committee"></input>
          <textarea placeholder="Subjects
          (Separate multiple values with a semi-colon)"></textarea>
          <textarea placeholder="Summary Description"></textarea>
          <textarea id="content" placeholder="Content"></textarea>
          <input id="addButton" type="submit" value="Add Bill"></input>
        </form>
      </fieldset>
    )
  }
}

class Update extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      key: "",
      billno: "",
      value: ""
    };

    this.prompt=""
  }

  handleKeyChange(e){
    this.setState({
      key: e.target.value
    });
  }

  handleValueChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleBillNoChange(e){
    this.setState({
      billno: e.target.value
    });
  }

  submitUpdate(e){
    console.log(this.state);
    fetch('http://www.localhost:3001/updateBills', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  }

  render(){
    return(
      <fieldset>
        <legend>Update</legend>
        <form>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to change</option>
            <option>Billno</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Type</option>
            <option>Summary Description</option>
            <option>Title</option>
            <option>Content</option>
            <option>Primary Committee</option>
            <option>Scope</option>
            <option>Secondary Committee</option>
          </select>
          <input onChange={this.handleBillNoChange} placeholder="Enter Bill Number"></input>
          <textarea onChange={this.handleValueChange} placeholder="Enter new value"></textarea>
          <input type="button" onClick={this.submitUpdate} value="Update Bill"></input>
        </form>
        <h6>{this.prompt}</h6>
      </fieldset>
    )
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      key: "",
      value: "",
      bills: []
    };
  }

  handleKeyChange(e){
    this.setState({
      key: e.target.value
    })
  }

  handleValueChange(e){
    this.setState({
      value: e.target.value
    })
  }

  submitClicked(e){
    console.log(this.state);
		fetch(`http://localhost:3001/bills?key=${this.state.key}&value=${this.state.value}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result });
		})
		.catch((e) => { console.log(e); });

    console.log(this.state.bills);
    this.forceUpdate();
  }

  render(){
    return(
      <div>
      <fieldset>
        <legend>Search</legend>
        <form>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to search</option>
            <option>Billno</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Type</option>
            <option>Summary Description</option>
            <option>Title</option>
            <option>Content</option>
            <option>Primary Committee</option>
            <option>Scope</option>
            <option>Secondary Committee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Value to search"></textarea>
          <input type="button" onClick={this.submitClicked} value="Search Bill"></input>
        </form>
      </fieldset>
      <fieldset  id="searchResults">
        <legend>SEARCH RESULTS</legend>
        {
          this.state.bills.map((bill) => {
            return(
              <div id="searchResults" key={bill.Billno}>
                <div>
                  <p>Billno: {bill.Billno}</p>
                  <p>Status: {bill.Status}</p>
                  <hr/>
                </div>
              </div>
            )
          })
        }
      </fieldset>
      </div>
    )
  }
}

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state={
        };
  }

  render(){
    return(
      <fieldset>
        <legend>Delete</legend>
      </fieldset>
    )
  }
}
export default Main;
