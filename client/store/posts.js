import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const FORM_SUBMITTED = 'FORM_SUBMITTED'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const newPost = () => ({type: FORM_SUBMITTED})

/**
 * THUNK CREATORS
 */
export const postThunkCreator = (userId, formData) => async dispatch => {
  try {
    await axios.post(`/post/${userId}`, {formData})
    dispatch(newPost())
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case FORM_SUBMITTED:
      return {}
    default:
      return state
  }
}
