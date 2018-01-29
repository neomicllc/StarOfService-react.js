import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { loadGetInitialProps } from 'next/dist/lib/utils'
import getStore from 'redux'
// import App from './App';

const reducer = combineReducers({
  form: reduxFormReducer
});

const store = createStore(reducer)

const getInitialState = reduxStore => ({
  ...reduxStore.getState()
})

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const reduxStore = getStore({})
      const props = {...subProps}

      return {
        initialState: getInitialState(reduxStore),
        ...props
      }
    }
    constructor(props) {
      super(props)
      const reduxStore = getStore(this.props.initialState)
      this.reduxStore = reduxStore
    }
    render() {
      return (
        <Provider store={this.reduxStore}>
          <ComposedComponent {...this.props}/>
        </Provider>
      )
    }
  }

