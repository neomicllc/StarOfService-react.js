import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import validate from './validate'
import checkCircleGreen from '../check.png'

class LastPage extends Component {
  render() {
    const {onSubmit} = this.props;

    return (
      <div className="lastPageContainer">
        <img className="success" alt="success" src={checkCircleGreen}/>
        <button onClick={onSubmit} className="last button">Go to Dashboard &#x2192;</button>
      </div>
    )
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LastPage)