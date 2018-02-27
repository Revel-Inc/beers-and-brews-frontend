import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div className='top'>
        <div className='container d-flex justify-content-between'>
          <div className='logo d-flex flex-column my-3'>
            <h1 className='title mb-0'>BOOKS & BREWS</h1>
            <p className='subtitle mb-0'>revel book club</p>
          </div>
          <div className='nav-container d-flex align-items-center justify-content-between'>
            <a href=''>current book</a>
            <a href=''>history of pages</a>
            <a href=''>add book (admin)</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
