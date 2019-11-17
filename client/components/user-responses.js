import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {gotPostsThunk} from '../store/postHx'
import SinglePost from './single-post-view'

class Responses extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
    this.props.gotPostsThunk(userId)
  }

  render() {
    const {post} = this.props.post
    return (
      <div>
        <h2>Your past responses:</h2>
        <div>
          {post.map(currentOrder => {
            return <SinglePost key={currentOrder.id} order={currentOrder} />
          })}
        </div>
        <Link to={`/new-response/${post.userId}`}>Submit a Response</Link>
      </div>
    )
  }
}

const mapState = store => ({
  post: store.post
})

const mapDispatch = dispatch => ({
  gotPostsThunk: arg => dispatch(gotPostsThunk(arg))
})

export default connect(mapState, mapDispatch)(Responses)
