import React from 'react'
import { Link } from 'react-router-dom'
import EventShow from '../event/2.event_show';
import './5.events.css'

class Events extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.getEvents();
        // this.props.getUserEvents(this.props.events.hostId)
    }

    render() {
        if (!this.props.events) {
            return null
        }

        return (
            <div>        
             
                <div className="button-container"><Link to="/events/new"><button id="add-event-button">Host An Event</button></Link></div>
                <div className = "hosting-events"> 
                        <ul>
                            {Object.values(this.props.events).map((event, i) => {
                                if (this.props.currentUser._id === event.hostId) {
                                    return(
                                <li key={i}>    

                                <div className="event-parent">
                                        <div className="event-parent-info">
                                            <div>
                                                <div > <Link to={`/events/${event._id}`}> <img className="event-photo" src={event.photoUrl}></img></Link></div>
                                            </div>

                                            <div>
                                                <div className="date">{ Object.values(event.date).slice(5, 10).concat('-' ,Object.values(event.date).slice(0,4))}</div>
                                                <div><Link className="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date"># of people participating: &nbsp;{ event.usersJoined.length }</div>
                                                <div className="date">Location:&nbsp;{event.location}</div>
                                                <div className="date">Hosted by:&nbsp;{this.props.users[event.hostId].handle}</div>

                                            </div>
                                        </div>

                                            <div className="hosting-button">Hosting</div>
                                </div>



                                </li> 
                                )}})}
                        </ul> 
               </div>

                <div className="participating-events">
                    <ul>
                        {Object.values(this.props.events).map((event, i) => {
                            if (this.props.user.eventsParticipating.includes(this.props.currentUser._id)) {
                                return (
                                    <li key={i}>
                                        <div> <Link to={`/events/${event._id}`}> <img src={event.photoUrl}></img></Link></div>
                                        <div>{Object.values(event.date).slice(0, 10)}</div>
                                        <div><Link to={`/events/${event._id}`}>{event.name}</Link></div>
                                        <div># of people participating</div>
                                        <div>{event.location}</div>
                                        <div><button>Participating</button></div>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
                
          </div>
        )
    }
}

export default Events;