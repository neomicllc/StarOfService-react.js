import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import inputRender from './inputRender'
import validate from './validate'

class FirstPage extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="inputContainer">
          <Field
            name="email"
            type="email"
            component={inputRender}
            label="EMAIL"
            className="input"
          />
          <Field
            name="password"
            type="password"
            component={inputRender}
            label="PASSWORD"
            className="input"
          />
          <Field
            name="confirmPassword"
            type="password"
            component={inputRender}
            label="CONFIRM PASSWORD"
            className="input"
          />
        </div>
        <div className="nextContainer">
          <button type="submit" className="next button">
            Next &#x2192;
          </button>
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
})(FirstPage)