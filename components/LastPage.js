import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import validate from './validate'
import {fadeIn, zoomIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
}

class LastPage extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <StyleRoot>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="lastPageContainer" style={styles.fadeIn}>
          <img className="success" alt="success" src='../static/check.png' style={styles.zoomIn}/>
          <button type="submit" className="last button">Go to Dashboard &#x2192;</button>
        </div>
      </form>
      </StyleRoot>
    )
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(LastPage)