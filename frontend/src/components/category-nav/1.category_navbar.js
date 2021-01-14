import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import VegetablesContainer from './2.vegetables_container'
import MeatContainer from './3.meat_container'
import PoultryContainer from './4.poultry_container'
import CarbsContainer from './5.carbs_container'
import SoupContainer from './6.soup_container'
import TrendingContainer from './7.trending_container'
import './1.category_navbar.css'


const CategoryNavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="category-navbar-component">
      <Tabs value={selectedTab} onChange={handleChange} >
        <Tab label="Trending" />
        <Tab label="Vegetables" />
        <Tab label="Meat"/>
        <Tab label="Poultry" />
        <Tab label="Carbs" />
        <Tab label="Soup" />
      </Tabs>
      {selectedTab === 0 && <TrendingContainer/>}
      {selectedTab === 1 && <VegetablesContainer />}
      {selectedTab === 2 && <MeatContainer />}
      {selectedTab === 3 && <PoultryContainer  />}
      {selectedTab === 4 && <CarbsContainer/>}
      {selectedTab === 5 && <SoupContainer/>}
    </div>
  )

}

export default CategoryNavBar;