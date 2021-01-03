import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import HomePageContainer from '../home/home_page_container'

const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} >
        <Tab label="Vegetables" />
        <Tab label="Meat" />
        <Tab label="Poultry" />
        <Tab label="Carbs" />
        <Tab label="Soup" />
      </Tabs>

      {selectedTab === 0 && <HomePageContainer />}
      {selectedTab === 1 && <VegetablesContainer />}
      {selectedTab === 2 && <MeatContainer />}
      {selectedTab === 3 && <PoultryContainer />}
      {selectedTab === 4 && <CarbsContainer />}
      {selectedTab === 5 && <SoupContainer />}
    </>


  )

}

export default NavBar;