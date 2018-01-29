import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import PropTypes from 'prop-types'
import App from '../components/App';
import Fonts from '../components/Fonts'

const reducer = combineReducers({
  form: reduxFormReducer
});

const store = createStore(reducer)

class Index extends Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Index