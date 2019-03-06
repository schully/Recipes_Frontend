import React, { Component } from 'react';
import AddRecipe from './components/AddRecipe';
import AddForm from './components/AddForm';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>Welcome</strong>
        </header>

        <AddRecipe>AddRecipe</AddRecipe>
        <AddForm></AddForm>        
      </div>
    );
  }
}

