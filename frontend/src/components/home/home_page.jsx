import React from 'react'
import CategoryNavBar from '../category-nav/1.category_navbar'

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <CategoryNavBar />
      </div>
    );
  }
}

export default HomePage;