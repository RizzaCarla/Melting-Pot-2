import React from 'react'
import CategoryNavBar from '../category-nav/1.category_navbar'
import TrendingContainer from './trending_container'

class HomePage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <CategoryNavBar />
        {/* <TrendingContainer /> */}
        {/* { this.state.show ?  : null } */}
      </div>
    );
  }
}

export default HomePage;