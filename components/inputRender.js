import React, {Component} from 'react'
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  slideInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

class inputRender extends Component {
  render() {
    const {input, placeholder, className, label, type, meta: { touched, error }} = this.props;

    return (
      <div style={styles.slideInRight}>
        <label>{touched && error ? <span className="error">{error}</span> : label}</label>
        <div>
          <input {...input} className={className} placeholder={placeholder} type={type} />
          {/*{touched && error && <span>{error}</span>}*/}
        </div>
      </div>
    )
  }
}

export default inputRender;