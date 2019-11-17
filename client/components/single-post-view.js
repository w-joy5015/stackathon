import React from 'react'

class SinglePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(currentState => ({showDetails: !currentState.showDetails}))
  }
  render() {
    const post = this.props.post
    return (
      <div>
        <div className="post-header">
          <h3>Post created at: {post.createdAt}</h3>
          <p onClick={() => this.handleClick()} className="details-btn">
            View Order Details
          </p>
        </div>
        <div className="post-toggled-view">
          {this.state.showDetails ? (
            <div>
              <p>Pain rating:{post.pain}</p>
              <p>Overall Satisfaction: {post.overallSatisfaction}</p>
              <p>Effectiveness: {post.effectiveness}</p>
              <p>Other comments: {post.otherComments}</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default SinglePost
