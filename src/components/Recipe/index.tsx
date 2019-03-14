import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchRecipe } from './service';
import RecipeModel from '../Models/Recipe'
import IngredientPreview from '../Models/IngredientPreview'
import './styles.scss'
import { Link } from 'react-router-dom';
import Comments from '../Comments'
import GlobalHeader from '../GlobalHeader';

class State extends RecipeModel {
  name: string = ""
  picture: string = ""
  author: string = ""
  description: string = ""
  instructions: string = ""
  category: string = ""
  ingredients: IngredientPreview[] = []
}


export default class RecipeScreen extends React.Component<RouteComponentProps, State> {
  state = new State();
  componentDidMount() {
    this.fetchRecipe()
  }

  async fetchRecipe() {
    let recipeId = (this.props.match.params as any).recipeId
    let result = await fetchRecipe(recipeId)
    this.setState({
      name: result.name,
      picture: result.picture,
      author: result.author,
      description: result.description,
      instructions: result.instructions,
      category: result.category,
      ingredients: result.ingredients
    })
    console.log("HELLO FROM RECIPE ICD", result)
  }

  render() {
    console.log(this.state.ingredients);
    return <div>
      
      <Link className="backHome" to="/">Back</Link>
      <h1>{this.state.name}</h1>
      <img src={this.state.picture} alt="insertPicHERE" />
      <h3>{this.state.author}</h3>
      <p>{this.state.description}</p>
      <p>{this.state.instructions}</p>
      <h4>{this.state.category}</h4>
      <h4>
        {
          this.state.ingredients.map(e => (
            <div className="ingredient">
              <h3>{e.name}</h3>
              <h3>{e.quantity}</h3>
            </div>
          ))
        }
      </h4>
    </div>
  }
}