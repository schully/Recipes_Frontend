import React, { Component } from 'react';
import AddRecipe from './components/AddRecipe';
import AddForm from './components/AddForm';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'

export default () => {
  <BrowserRouter basename="">
    <Switch>
      <Route exact path="/" component={AddRecipe} />
      <Route exact path="/recipe/new" component={AddForm} />
    </Switch>
  </BrowserRouter>
}

/*
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

*/