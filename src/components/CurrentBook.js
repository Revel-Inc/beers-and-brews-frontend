import React, { Component } from 'react'
import Header from './common/Header'
import { Footer } from './common'

class CurrentBook extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='d-flex'>
            <div className='current-book-container d-flex flex-column align-items-end pr-3'>
              <h3 className='mt-5 mb-3 column-title'>This Month's Book</h3>
              <img className='book-img-focus mb-3' src='https://images-na.ssl-images-amazon.com/images/I/518l2awqcnL.jpg'/>
              <h5 className='focus-title'>Hit Refresh <span className='orange-emphasis'>:Title</span></h5>
              <h6 className='meta-data'>Satya Nadella <span className='orange-emphasis'>:Author</span></h6>
              <h6 className='meta-data'>289 <span className='orange-emphasis'>:Pages</span> </h6>
              <p className='synopsis'>“In this thoughtful debut, the Indian-born Nadella tells the story of his personal life and his work as a change-making leader, and he explains the coming importance of machine intelligence. The author emerges as a modest, likable individual from an accomplished family… A valuable blueprint for techies and others in a culture-change state of mind.” (Kirkus Review )</p>
            </div>
            <div className='current-book-container d-flex flex-column align-items-start pl-3'>
              <h3 className='mt-5 mb-3 column-title'>This Month's Brew</h3>
              <img className='book-img-focus mb-3' src='https://thepourfooldotcom.files.wordpress.com/2017/04/holymountain.jpg'/>
              <h5 className='focus-title'><span className='orange-emphasis'>Brewery:</span> Holy Moutain</h5>
              <h6 className='meta-data'><span className='orange-emphasis'>Beer:</span> Kiln & Cone</h6>
              <h6 className='meta-data'><span className='orange-emphasis'>Category:</span> Pale Ale</h6>
              <p className='synopsis'>“A soft & aromatic American pale ale hopped generously with mosaic, simcoe, & a new hop variety called loral (previously ”</p>
            </div>
          </div>
          <div className='d-flex align-items-center mb-5 flex-column'>
            <h3 className='mt-5 mb-3 column-title'>This Month's Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.588702623102!2d-122.34638118436918!3d47.61468667918514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906cd1d449d1cf%3A0xf35b9f98670b4794!2sRevel+Consulting!5e0!3m2!1sen!2sus!4v1519703495131" frameborder="0"  allowfullscreen></iframe>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default CurrentBook
