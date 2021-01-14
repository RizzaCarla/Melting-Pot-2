import React from 'react';
import { Link } from 'react-router-dom';
import { updateEvent } from '../../actions/event_actions';
import './3.event_index.css'

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers().then(() => this.props.getEvents());
    }

    // update(event) {
    //     return this.setState({ [usersJoined]: event.usersJoined.concat(this.props.currentUser._id) })
    // }
    
    render() {
        
        if (!this.props.events) {
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
                                                <div className="date-index"> Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(0, 10)}</span></div> 
                                            <div className="date-index"> Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index"># of people participating:&nbsp;<span className="event-index-info">{ event.usersJoined.length }</span></div>
                                                <div className="date-index">From:&nbsp;<span id="event-index-info">{ event.startTime } to {event.endTime}</span></div>
                                                <div className="date-index">Location:&nbsp;<span id="event-index-info">{ event.location }</span></div>
                                                <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{ this.props.users[event.hostId].handle }</span></div>
                                        </div>

                                    </div>
                                    
                                
                                        <div > {(this.props.users[this.props.currentUser._id].eventsParticipating).includes(event._id) ? <button className="event-index-participating-button">Unjoin</button> : 
                                                this.props.currentUser._id === event.hostId ? <label className="event-index-participating-button">Hosting</label> :
                                                <button className="event-index-join-button" >Join</button>}
                                        </div>
                             {/* onClick={this.update(event)} */}

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