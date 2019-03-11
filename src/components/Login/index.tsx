import React, { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import GlobalHeader from "../GlobalHeader";
import './service';
import register from "./service";

class State {
  inputUsername = ''
  inputPassword = ''
}

export default class Login extends Component<RouteComponentProps,State> {
  constructor(props: any) {
    super(props)
    this.state = new State()
  }

  async submit() {
    let s = this.state
    let greatSuccess = await register(s.inputUsername, s.inputPassword)

    if (greatSuccess) {
      this.props.history.push('/');
    }
  }

  render() {
    return <div>
      <GlobalHeader />
      <form onSubmit={e => {
        e.preventDefault();

        //  submit
        this.submit();
      }}>
        <div id="username">
          <label>username</label>
          <input onChange={e => this.setState({
            inputUsername: e.target.value
          })}
          value={this.state.inputUsername}
          />
        </div>
        <div id="password">
          <label>Password</label>
          <input onChange={e => this.setState({
            inputPassword: e.target.value
          })}
          value={this.state.inputPassword}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  }
}