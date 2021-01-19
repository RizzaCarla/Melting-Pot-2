import React from 'react'
import { Link } from 'react-router-dom'
import './5.events.css'
import '../event/3.event_index.css'

class Events extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUsers()
        this.props.getEvents();
        this.props.getUserJoins(this.props.currentUser._id);
    }

    render() {
        if (!this.props.events && !this.props.eventJoined) {
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

                                    <div className="event-index-parent">
                                        <div className="event-index-parent-info">
                                            <div >
                                                <div><Link to={`/events/${event._id}`}> <img className="event-index-photo" src={event.photoUrl}></img></Link></div>
                                            </div>
                                            <div className='event-index-description-list'>
                                                <div className="date-index">Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(5, 10).concat('-', Object.values(event.date).slice(0, 4))}</span></div>
                                                <div className="date-index">Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index">Partcipating:&nbsp;<span className="event-index-info">{this.props.count[event._id]}</span></div>
                                                <div className="date-index">From:&nbsp;<span id="event-index-info">{event.startTime} to {event.endTime}</span></div>
                                                <div className="date-index">Location:&nbsp;<span id="event-index-info">{event.location}</span></div>
                                                <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{this.props.users[event.hostId].handle}</span></div>
                                            </div>
                                            <div className="index-hosting-button"><Link className="hosting-event-txt" to={`/events/${event._id}`}>Hosting</Link></div>
                                        </div>
                                    </div>

                                </li>      
                                )}})}
                        </ul> 
               </div>

                <div className="participating-events hosting-events ">
                    <ul>
                        {this.props.eventJoined.map((event, i) => {
                            return(
                                <li key={i}>

                                    <div className="event-index-parent">
                                        <div className="event-index-parent-info">
                                            <div >
                                                <div><Link to={`/events/${event._id}`}> <img className="event-index-photo" src={event.photoUrl}></img></Link></div>
                                            </div>
                                            <div className='event-index-description-list'>
                                                <div className="date-index">Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(5, 10).concat('-', Object.values(event.date).slice(0, 4))}</span></div>
                                                <div className="date-index">Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index">Partcipating:&nbsp;<span className="event-index-info">{this.props.count[event._id]}</span></div>
                                                <div className="date-index">From:&nbsp;<span id="event-index-info">{event.startTime} to {event.endTime}</span></div>
                                                <div className="date-index">Location:&nbsp;<span id="event-index-info">{event.location}</span></div>
                                                <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{this.props.users[event.hostId].handle}</span></div>
                                            </div>
                                            <div className="index-participating-button"><Link className="participating-event-txt"to={`/events/${event._id}`}>Participating</Link></div>
                                        </div>
                                    </div>

                                </li>           
                        )})}
                    </ul>
                </div>
                
          </div>
        )
    }
}

export default Events;