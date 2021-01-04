import React from 'react'
import {Tabs, Tab} from '@material-ui/core'
import RecipesContainer from './3.recipes_container'
import LikesContainer from './4.likes_container'
import EventsContainer from './5.events_container'
import FriendsContainer from './6.friends_container'
import AboutMeContainer from './8..aboutMe_container'
import './2.navbar.css'

const NavBar = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

        return (
            <div>

                <Tabs className="tab-header"value={selectedTab} onChange={handleChange} >
                    <Tab className="tab-labels" label="My Recipes"/>
                    {/* <Tab className="tab-labels" label="Liked Recipes"/> */}
                    <Tab className="tab-labels" label="Events" />
                    {/* <Tab className="tab-labels" label="Friends" /> */}
                    <Tab className="tab-labels" label="About" />
                </Tabs>

                <div className="tab">{selectedTab === 0 && <RecipesContainer />}</div> 
                {/* <div className="tab">{selectedTab === 1 && <LikesContainer />} </div> */}
                <div className="tab">{selectedTab === 1 && <EventsContainer />}</div>
                {/* <div className="tab">{selectedTab === 3 && <FriendsContainer />}</div> */}
                <div className="tab">{selectedTab === 2 && <AboutMeContainer />}</div>
            </div>


        )
    
}

export default NavBar;