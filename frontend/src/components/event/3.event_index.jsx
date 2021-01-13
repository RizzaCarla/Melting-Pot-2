import React from 'react';
import { Link } from 'react-router-dom';
import './3.event_index.css'
import Event_button_container from './5.event_button_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.getEvents();
        this.props.getJoins()
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.events.map((event) => {
    //         if (prevProps.event && prevProps.event.usersJoined !== this.props.event.usersJoined) {
    //             this.props.getEvents()
    //         }
    //         })
    //     }
    // }
    
    render() {
        if (!this.props.events){
            return null
        }

        return (
                <div className="index-events-container">
                    <div className="index-header"><h1 className="index-title">All Events</h1></div>
                    <div className="hosting-events">
                        <ul>
                            {Object.values(this.props.events).map((event, i) => (
                                <li key={i}>

                                <div className="event-index-parent">
                                    <div className="event-index-parent-info">
                                        <div >
                                            <div><Link to={`/events/${event._id}`}> <img className="event-index-photo" src={event.photoUrl}></img></Link></div>
                                        </div>
                                        <div>
                                            <div className="date-index">Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(0, 10)}</span></div> 
                                            <div className="date-index">Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index">Partcipating:&nbsp;<span className="event-index-info">{!this.props.joins[event._id] ? 0 : Object.entries(this.props.joins[event._id]).length }</span></div>
                                            <div className="date-index">From:&nbsp;<span id="event-index-info">{ event.startTime } to {event.endTime}</span></div>
                                            <div className="date-index">Location:&nbsp;<span id="event-index-info">{ event.location }</span></div>
                                            <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{ this.props.users[event.hostId].handle }</span></div>
                                        </div>
                                    </div>

                                    <div ><Event_button_container event={event} /> </div>
                                </div>

                                </li>                                
                            ))}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default EventIndex;