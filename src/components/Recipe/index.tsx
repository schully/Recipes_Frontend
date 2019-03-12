import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchRecipe } from './service';
import './styles.scss'

class State {
  name: string = ""
  picture: string = ""
  author: string = ""
  description: string = ""
  instructions: string = ""
  category: string = ""
  ingredients: Ingredient[] = []
}

class Ingredient {
  name: string = ''
  quantity: string = ''
}

export default class RecipeScreen extends React.Component<RouteComponentProps, State> {
  state = new State();
  componentDidMount(){
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
    console.log(this.state.picture);
    return <div>
      <h1>{this.state.name}</h1>
      <img src={this.state.picture} alt="insertPicHERE" />    
      <h3>{this.state.author}</h3>
      <p>{this.state.description}</p>
      <p>{this.state.instructions}</p>
      <h4>{this.state.category}</h4>
      <h4>{this.state.ingredients}</h4>
    </div>
  }
}