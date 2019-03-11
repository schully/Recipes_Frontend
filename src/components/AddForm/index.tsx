import React from 'react';
import { submitRecipe } from './service';
import './styles.scss';
import GlobalHeader from '../GlobalHeader';
import { RouteComponentProps } from 'react-router';

class State {
  inputName: string = '';
  inputDescription: string = '';
  inputInstructions: string = '';
  inputCategory: string = '';
}

export default class AddForm extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props)
    this.state = new State()
  }

  async submit() {
    let s = this.state;
    let recipeId = await submitRecipe(s.inputName, s.inputDescription, s.inputInstructions, s.inputCategory.trim())
    this.navigateToRecipe(recipeId)
  }

  async navigateToRecipe(recipeId: Number) {
    this.props.history.push(`/recipe/show/${recipeId}`)
  }

  render() {
    return <div>
      <GlobalHeader />
      <form onSubmit={e => {
        e.preventDefault();

        //  submit
        this.submit();
      }}>
        <div id="recipe-name">
          <label>Name</label>
          <input
            onChange={e => this.setState({
              inputName: e.target.value
            })}
            value={this.state.inputName}
          />
        </div>
        <div id="recipe-description">
          <label>Description</label>
          <input
            onChange={e => this.setState({
              inputDescription: e.target.value
            })}
            value={this.state.inputDescription}
          />
        </div>
        <div id="recipe-instructions">
          <label>Instructions</label>
          <input
            onChange={e => this.setState({
              inputInstructions: e.target.value
            })}
            value={this.state.inputInstructions}
          />
        </div>
        <div id="recipe-category">
          <label>Category</label>
          <input
            onChange={e => this.setState({
              inputCategory: e.target.value
            })}
            value={this.state.inputCategory}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  }
}
