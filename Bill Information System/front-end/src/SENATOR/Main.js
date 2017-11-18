import React, { Component } from 'react';
import './../App.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
              };
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
