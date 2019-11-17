import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_POSTS = 'GET_POSTS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const gotPosts = postsArr => ({type: GET_POSTS, postsArr})

/**
 * THUNK CREATORS
 */
export const gotPostsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/posts/`)
    dispatch(gotPosts(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.postsArr
    default:
      return state
  }
}
