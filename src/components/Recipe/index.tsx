import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchRecipe } from './service';

class State {
  name: string = ""
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
       author: result.author,
       description: result.description,
       instructions: result.instructions,
       category: result.category,
       ingredients: result.ingredients 
      })
    console.log("HELLO FROM RECIPE ICD", result)
  }
  render() {
    return <div>
      <h3>{this.state.name}</h3>
      <h3>__(INSERT PIC HERE)__</h3>
      <h3>{this.state.author}</h3>
      <h3>{this.state.description}</h3>
      <h3>{this.state.instructions}</h3>
      <h3>{this.state.category}</h3>
      <h3>{this.state.ingredients}</h3>
    </div>
  }
}