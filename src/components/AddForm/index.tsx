import React from 'react'
import { submitRecipe } from './service';
import './styles.scss'

export default class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      inputDescription: '',
      inputInstructions: ''
    }
  }

  async submit(){
    let recipeId = await submitRecipe()
    this.navigateToRecipe(recipeId)
  }

  navigateToRecipe(recipeId) {

  }

  render() {
    return <div>
      <form onSubmit={e => {
        e.preventDefault();

        //  submit
        this.submit();
      }}>
        <div id="recipe-name">
          <label>Name</label>
          <input onChange={e => this.setState({
            inputName: e.target.value
          })} value={this.state.inputName} />
        </div>
        <div id="recipe-description">
          <label>Description</label>
          <input onChange={e => this.setState({
            inputDescription: e.target.value
          })} value={this.state.inputDescription} />
        </div>
        <div id="recipe-instructions">
          <label>Instructions</label>
          <input onChange={e => this.setState({
            inputInstructions: e.target.value
          })} value={this.state.inputInstructions} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  }
}
