import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import inputRender from './inputRender'
import validate from './validate'
import '../styles/flexbox.css';

const choices = ['internet', 'press', 'tv', 'friends'];

const renderError = ({label, meta: {touched, error}}) => {

  return touched && error ? <span className="error">{error}</span> : <label>{label}</label>
};

const renderSelector = ({label, input, meta: {touched, error}}) => (
  <div>
    {touched && error ? <span className="error">{error}</span> : <label>{label}</label>}
    <select {...input}>
      <option value=""/>
      {choices.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {/*{touched && error && <span>{error}</span>}*/}
  </div>
);

class MiddlePage extends Component {
  render() {
    const {handleSubmit, previousPage} = this.props;

    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="middlePage">
          <div>
            <Field name='dateOfBirth' label="DATE OF BIRTH" component={renderError}/>
            <Field
              name="DD"
              type="text"
              component='input'
              value="DD"
              placeholder="DD"
            />
            <Field
              name="MM"
              type="text"
              component='input'
              value="MM"
              placeholder="MM"
            />
            <Field
              name="YYYY"
              type="text"
              component='input'
              value="YYYY"
              placeholder="YYYY"
            />
          </div>
          <div>
            <Field name="gender" label="GENDER" component={renderError}/>
            <div className="gender-section">
              <Field
                name="gender"
                type="radio"
                component="input"
                value="MALE"
                id="tab-one"
              />
              <label htmlFor="tab-one">Male</label>
              <Field
                name="gender"
                type="radio"
                component="input"
                value="FEMALE"
                id="tab-two"
              />
              <label htmlFor='tab-two'>Female</label>
              <Field
                name="gender"
                type="radio"
                component="input"
                value="UNSPECIFIED"
                id="tab-three"
              />
              <label htmlFor='tab-three'>Unspecified</label>
            </div>
          </div>
          <div>
            <Field name="select" label="WHERE DID YOU HEAR ABOUT US?" component={renderSelector}/>
          </div>
        </div>
        <div className="buttonContainer">
          <button type="button" className="back button" onClick={previousPage}>
            Back
          </button>
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
})(MiddlePage)