import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from '../App'
import Highstock from './Highstock'
import Highcharts from './Highcharts'

export default class MainRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Form</Link></li>
            <li><Link to="/highstock">Highstock</Link></li>
            <li><Link to="/highcharts">Highcharts</Link></li>
          </ul>

          <Route exact path="/" component={App}/>
          <Route path="/highstock" component={Highstock}/>
          <Route path="/highcharts" component={Highcharts}/>
        </div>
      </Router>
    )
  }
}