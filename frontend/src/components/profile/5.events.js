import React from 'react'
import { Link } from 'react-router-dom'
import EventShow from '../event/2.event_show';

class Events extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getEvents();
        // this.props.getUserEvents(this.props.events.hostId)
    }

    render() {
        if (!this.props.events) {
            return null
        }

        return (
            <div>        
                <Link to="/events/new"><button>Host An Event</button></Link>
                <div className = "hosting-events"> 
                        <ul>
                            {Object.values(this.props.events).map((event, i) => {
                                if (this.props.currentUser._id === event.hostId) {
                                    return(
                                <li key={i}>                  
                                        <div> <Link to={`/events/${event._id}`}> <img src={event.photoUrl}></img></Link></div>
                                        <div>{Object.values(event.date).slice(0, 10)}</div>
                                        <div><Link to={`/events/${event._id}`}>{event.name}</Link></div>
                                        <div># of people participating</div>
                                        <div>{event.location}</div>
                                        <div><button>Hosting</button></div>
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