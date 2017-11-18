import React, { Component } from 'react';
import './../App.css'

class Main extends Component {
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
