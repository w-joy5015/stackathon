import React from 'react'
import {connect} from 'react-redux'
import {postThunkCreator} from '../store/posts'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      pain: 0,
      sideEffects: [],
      effectiveness: 0,
      overallSatisfaction: 0,
      deviceId: 0
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.props.postThunkCreator(
      this.props.match.params.userid,
      this.state
    )
    this.props.history.push('/home')
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <form className="new-response-container" onSubmit={this.handleSubmit}>
        <label htmlFor="pain">Select your device</label>
        <select
          style={{display: 'inline'}}
          name="sideEffects"
          onChange={this.handleChange}
          required
        >
          <option value={1}>Nexplanon</option>
          <option value={2}>MIC-KEY button</option>
          <option value={3}>Adapta Pacemaker</option>
        </select>

        <label htmlFor="pain">Pain Scale (required)</label>
        <p>
          On a scale of 0-10 (10 being the worst pain you have experienced and 0
          being no pain) rate your pain level since you'be started using your
          device.
        </p>
        <select
          style={{display: 'inline'}}
          name="sideEffects"
          onChange={this.handleChange}
          required
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>

        <label htmlFor="sideEffects">Side Effects</label>
        <p>
          Have you noticed any new symptoms since you've started using your
          device? Check all that apply:
        </p>
        <input
          name="sideEffects"
          value={this.state.sideEffects}
          onChange={this.handleChange}
        />

        <label htmlFor="effectiveness">Effectiveness</label>
        <p>How effective you would you rate your device?</p>
        <select
          style={{display: 'inline'}}
          name="effectiveness"
          onChange={this.handleChange}
          required
        >
          <option value="very effective">very effective</option>
          <optoin value="moderately effective">moderately effective</optoin>
          <option value="somewhat effective">somewhat effective</option>
          <option value="not effective at all">not effective at all</option>
        </select>

        <label htmlFor="overallSatisfaction">Overall Satisfaction</label>
        <p>Please rate your overall satisfaction with your device so far:</p>
        <select
          name="overallSatisfaction"
          value={this.state.overallSatisfaction}
          onChange={this.handleChange}
          required
        >
          <option value={1}>1 - not satisfied at all</option>
          <option value={2}>2</option>
          <option value={3}>3 - moderately satisfied</option>
          <option value={4}>5</option>
          <option value={5}>5 - very satisfied</option>
        </select>

        <label htmlFor="otherComments">Additional comments here:</label>
        <input
          name="otherComments"
          value={this.state.otherComments}
          onChange={this.handleChange}
        />

        <button type="submit">Save Changes</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  postThunkCreator: (arg1, arg2) => dispatch(postThunkCreator(arg1, arg2))
})

export default connect(null, mapDispatch)(NewPost)
