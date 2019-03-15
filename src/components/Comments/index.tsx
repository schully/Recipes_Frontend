import * as React from 'react'
import { RouteComponentProps } from 'react-router';
import { fetchComments as fComments } from './service'
import CommentPreview from '../Models/CommentPreview';
class State {
  comments: CommentPreview[] = []
}

export default class Comments extends React.Component<RouteComponentProps, State>{
  state = new State()

  componentDidMount() {
    this.fetchComments()
  }
  async fetchComments() {
    let recipeId = (this.props.match.params as any).recipeId
    let result: CommentPreview[] = await fComments(recipeId)
    console.log(result);

    this.setState({
      comments: result
    })
    
  }

  render() {
    let {state} = this

    return (
      <div>
        {
          state.comments.map(c => (
            <div className="comments">
              <p>{c.user}:</p>
              <p>{c.text}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

