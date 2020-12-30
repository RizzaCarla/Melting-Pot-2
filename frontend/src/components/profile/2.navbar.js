import React from 'react'
import { Link } from 'react-router-dom'
import {Tabs, Tab, AppBar} from '@material-ui/core'
import RecipesContainer from './3.recipes_container'
import LikesContainer from './4.likes_container'
import EventsContainer from './5.events_container'
import FriendsContainer from './6.friends_container'
import AboutMeContainer from './8..aboutMe_container'

const NavBar = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

        return (
            <>
                <Tabs value={selectedTab} onChange={handleChange} >
                    <Tab label="My Recipes"/>
                    <Tab label="Liked Recipes"/>
                    <Tab label="Events" />
                    <Tab label="Friends" />
                    <Tab label="About" />
                </Tabs>

                {selectedTab === 0 && <RecipesContainer />}
                {selectedTab === 1 && <LikesContainer />}
                {selectedTab === 2 && <EventsContainer />}
                {selectedTab === 3 && <FriendsContainer />}
                {selectedTab === 4 && <AboutMeContainer />}
            </>


        )
    
}

export default NavBar;