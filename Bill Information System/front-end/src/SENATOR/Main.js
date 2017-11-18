import React, { Component } from 'react';
import './../App.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
                    title: "",
                    director: "",
                    year: "",
                    actor:"",
                    franchise: "",
                  };
    //Title, Director, Year, Actor, Franchise
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleDirectorChange=this.handleDirectorChange.bind(this);
    this.handleYearChange=this.handleYearChange.bind(this);
    this.handleActorChange=this.handleActorChange.bind(this);
    this.handleFranchiseChange=this.handleFranchiseChange.bind(this);
    this.addClicked=this.addClicked.bind(this);
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div id="fields">
          <fieldset>
            <legend>Add</legend>
          </fieldset>

          <fieldset>
            <legend>Update</legend>
          </fieldset>

          <fieldset>
            <legend>Search</legend>
          </fieldset>

          <fieldset>
            <legend>Delete</legend>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Main;
