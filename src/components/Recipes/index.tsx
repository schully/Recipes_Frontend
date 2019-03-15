import * as React from 'react';
import {
  Link, //  Link allows us to navigate to another router in this app
  RouteComponentProps
} from 'react-router-dom';
import './styles.scss';
import { fetchRecipes as fRecipes } from './service'
import Recipe from '../Models/Recipe';
import RecipePreview from '../Models/RecipePreview';
import GlobalHeader from '../GlobalHeader';
import { Button } from "react-bulma-components/full";

class State {
  recipes: RecipePreview[] = []
  signedIn = true
}

export default class Recipes extends React.Component<RouteComponentProps, State>{
  state = new State()

  componentDidMount() {
    this.fetchRecipes();
  }
  async fetchRecipes() {
    let result: RecipePreview[] = await fRecipes()
    console.log(result);


    this.setState({
      recipes: result
    })

  }

  render() {

    let { state } = this

    return (
      <div>
        <GlobalHeader />
        <br/>
        {
          state.recipes.map(e => (
            <Link to={`/recipe/show/${e.id}`}>
              <div className="recipes">
                <h1>{e.name}</h1>
                <img src={e.imageUrl} />
              </div>
            </Link>
          ))
        }

      </div>
    )
  }
}