import React from 'react'
import {reduxForm} from 'redux-form'
import FirstPage from '../components/FirstPage'
import inputRender from '../components/inputRender'
import validate from '../components/validate'

import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

chai.use(chaiEnzyme)

describe("FirstPage", () => {
  let subject = null;
  let submitting, touched, error, onSave, onSaveResponse, handleSubmit
  beforeEach(() => {
    submitting = false
    touched = false
    error = null
    onSaveResponse = Promise.resolve()
    handleSubmit = fn => fn
  })
  const buildSubject = () => {
    onSave = sinon.stub().returns(onSaveResponse)
    const props = {
      onSave,
      submitting: submitting,
      fields: {
        email: {
          value: '',
          touched: touched,
          error: error
        },
        password: {
          value: '',
          touched: touched,
          error: error
        },
        confirmPassword: {
          value: '',
          touched: touched,
          error: error
        }
      },
      handleSubmit
    }
    return shallow(<FirstPage {...props}/>)
  }

  it("calls reset after onSave", () => {
    subject = buildSubject()
    subject.find('form').simulate('submit')
    expect(onSave.callCount).to.equal(1)
  })

  context("when submitting", () => {
    it("shows a wait message while submitting", () => {
      submitting = true
      subject = buildSubject()
      const icon = subject.find('button[type="submit"]')
      expect(icon).to.have.text('Submitting (takes 1 s)')
    })

  })
});

describe('inputRender', () => {
  let subject
  context("when in an error state", () => {
    it("renders an error message for the input", () => {
      const input = { email: 'email', value: '' }
      const label = 'Email'
      const meta = { touched: true, error: 'INVALID EMAIL ADDRESS' }
      const element = inputRender({ input, label, meta })
      subject = shallow(element)
      const emailError = subject.find('.error').first()
      expect(emailError).to.exist
      expect(emailError.text()).to.equal('INVALID EMAIL ADDRESS')
    })
  })
})