import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FirstPage from './FirstPage'
import MiddlePage from './MiddlePage'
import LastPage from './LastPage'
import '../styles/progressBar.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1
    })
  }

  render() {
    const {onSubmit} = this.props;
    const {page} = this.state;

    return (
      <div className="container">
        <h2>{page === 3 ? 'Thank You!' : 'Signup'}</h2>
        <ol className="FormStepList">
          <li className="FormStepList-item">
            <span className={page === 1 ? "FormStepIcon is-active && is-passed" : "FormStepIcon is-passed"}>
              <span className="FormStepIcon-circle" />
            </span>
          </li>
          <li className="FormStepList-item">
            <span className={page === 1 ? "FormStepIcon is-active" : "FormStepIcon is-passed"}>
              <span className="FormStepIcon-circle" />
            </span>
          </li>
          <li className="FormStepList-item">
            <span className={page === 2 && "FormStepIcon is-active" || page === 1 && 'FormStepIcon' || page === 3 && 'FormStepIcon is-passed'}>
              <span className="FormStepIcon-circle" />
            </span>
          </li>

          {/*<li className="FormStepList-item">*/}
            {/*<span className={page === 3 ? "FormStepIcon is-active FormStepIcon--last" : "FormStepIcon FormStepIcon--last"}>*/}
              {/*<span className="FormStepIcon-circle"></span>*/}
            {/*</span>*/}
          {/*</li>*/}
        </ol>

          {page === 1 && <FirstPage onSubmit={this.nextPage}/>}
          {page === 2 && <MiddlePage onSubmit={this.nextPage} previousPage={this.previousPage}/>}
          {page === 3 && <LastPage onSubmit={onSubmit} previousPage={this.previousPage}/>}

      </div>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Form;