import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
import CurrentBook from './components/CurrentBook'

class RevelBookClub extends Component {

  render() {
    return (
      <div>
        <Router>
          <Route path='/' component={CurrentBook} />
        </Router>
      </div>
    )
  }
}

export default RevelBookClub
