import React, {Component} from "react";
import './service'

export default class Login extends Component {
  constructor(props:any) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  async submit() {
    
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
          })}
          // value={this.state.inputName}
          />
        </div>
        <div id="recipe-description">
          <label>Description</label>
          <input onChange={e => this.setState({
            inputDescription: e.target.value
          })}
          //  value={this.state.inputDescription}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  }
}