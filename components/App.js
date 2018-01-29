import React, { Component } from 'react';
import {connect} from 'react-redux'
import Head from 'next/head'
import Form from './Form'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 1000)
  });

class App extends Component {
  render() {
    console.log(this.props.values);
    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
          <link href="../static/App.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
        <Form onSubmit={showResults}/>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // const { data } = state;
//   // console.log(data)
//   if (state.form.wizard) {
//     return {
//       values: state.form.wizard.values
//     }
//   }
//
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     showResults: () => {
//       dispatch(showResults())
//     }
//   }
// }


// export default connect(mapStateToProps)(App);

export default App;