import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import HomePageContainer from '../home/home_page_container'

const NavBar = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);

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

      {/* {selectedTab === 0 && <VegetablesContainer />}
      {selectedTab === 1 && <MeatContainer />}
      {selectedTab === 2 && <PoultryContainer />}
      {selectedTab === 3 && <CarbsContainer />}
      {selectedTab === 4 && <SoupContainer />} */}
    </>


  )

}

export default NavBar;