import React, {Component} from 'react'

class inputRender extends Component {
  render() {
    const {input, placeholder, className, label, type, meta: { touched, error }} = this.props;

    return (
      <div>
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