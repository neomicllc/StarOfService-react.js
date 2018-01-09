import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import validate from './validate'
import checkCircleGreen from '../check.png'

class LastPage extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="lastPageContainer">
          <img className="success" alt="success" src={checkCircleGreen}/>
          <button type="submit" className="last button">Go to Dashboard &#x2192;</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LastPage)