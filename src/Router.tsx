import React, { Component } from 'react';
import Recipes from './components/Recipes';
import AddForm from './components/AddForm';
import Login from './components/Login'
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom'
import {
  Redirect,
} from 'react-router'
import GlobalHeader from './components/GlobalHeader';
import RecipeScreen from './components/Recipe';

export default () => (
  <>
    <BrowserRouter basename="">
      <Switch>
        <Route exact path="/" component={Recipes} />
        <Route exact path="/login" component={Login} />
        {/*<Route exact path="/recipies" component={} />*/}
        <Route exact path="/recipe/new" component={AddForm} />
        <Route exact path="/recipe/show/:recipeId" component={RecipeScreen} />
      </Switch>
    </BrowserRouter>
  </>
)

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