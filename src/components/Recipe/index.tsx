import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { fetchRecipe, submitComment } from './service';
import RecipeModel from '../Models/Recipe'
import IngredientPreview from '../Models/IngredientPreview'
import './styles.scss'
import { Link } from 'react-router-dom';
import Comments from '../Comments'
import GlobalHeader from '../GlobalHeader';
import { Button } from "react-bulma-components/full";

class State extends RecipeModel {
  name: string = ""
  picture: string = ""
  author: string = ""
  description: string = ""
  instructions: string = ""
  category: string = ""
  ingredients: IngredientPreview[] = []
  comment: string = ""
}

var recipeId
export default class RecipeScreen extends React.Component<RouteComponentProps, State> {
  state = new State();
  componentDidMount() {
    this.fetchRecipe()
  }


  async fetchRecipe() {
    recipeId = (this.props.match.params as any).recipeId
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

  async submit() {
    let s = this.state
    let c = await submitComment(recipeId, s.comment)
  }

  render() {
    let props = this.props
    console.log(this.state.ingredients);

    let match = props.match
    let staticContext = props.staticContext
    let history = props.history
    let location = props.location

    return <div>
      <Button className="backHome">
        <Link to="/">return</Link>
      </Button>
      <p className="title">{this.state.name}</p>
      <img src={this.state.picture} alt="insertPicHERE" />
      <p className="author">{this.state.author}</p>
      <br />
      <p>{this.state.description}</p>
      <br />
      <p>{this.state.instructions}</p>
      <br />
      <p>{this.state.category}</p>
      <p>
        {
          this.state.ingredients.map(e => (
            <div className="ingredient">
              <h3>{e.name}</h3>
              <h3>{e.quantity}</h3>
            </div>
          ))
        }
      </p>

      <form onSubmit={e => {
        e.preventDefault()
        this.submit()
      }}>

        <div id="comment">
          <br />
          <input
            onChange={e => this.setState({
              comment: e.target.value
            })}
            value={this.state.comment}
          />
        </div>
          <Button>Comment</Button>


      </form>

      <div>
        <Comments match={match} staticContext={staticContext} history={history} location={location} />

      </div>
    </div>
  }
}