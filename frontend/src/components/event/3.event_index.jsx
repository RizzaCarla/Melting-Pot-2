import React from 'react';
import { Link } from 'react-router-dom';
import './3.event_index.css'
import Event_button_container from './5.event_button_container';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers().then(() => this.props.getEvents());
        this.props.getJoins();
    }

    // componentDidUpdate(prevProps){
    //     if (prevProps.events !== this.props.events) {
    //         this.props.getEvents()
    //     }
    // }

    componentWillUnmount(){
        this.props.fetchUsers();
    }

    handleEventRendering() {
       if (this.props.loggedIn) {
            return (
                <div className="index-events-container">
                    <div id="index-header"><h1 className="index-title">All Events</h1></div>
                    <div className="hosting-events">
                        <ul>
                            {Object.values(this.props.events).map((event ) => (
                                <li key={event._id}>

                                    <div className="event-index-parent">
                                        <div className="event-index-parent-info">
                                            <div >
                                                <div><Link to={`/events/${event._id}`}> <img className="event-index-photo" src={event.photoUrl}></img></Link></div>
                                            </div>
                                            <div className='event-index-description-list'>
                                                <div className="date-index">Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(0, 10)}</span></div>
                                                <div className="date-index">Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index">Partcipating:&nbsp;<span className="event-index-info">{this.props.count[event._id]}</span></div>
                                                <div className="date-index">From:&nbsp;<span id="event-index-info">{event.startTime} to {event.endTime}</span></div>
                                                <div className="date-index">Location:&nbsp;<span id="event-index-info">{event.location}</span></div>
                                                <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{this.props.users[event.hostId].handle}</span></div>
                                            </div>
                                            <div className='index-button-container'><Event_button_container event={event} /></div>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="index-events-container">
                    <div id="index-header"><h1 className="index-title">All Events</h1></div>
                    <div className="hosting-events">
                        <ul>
                            {Object.values(this.props.events).map((event, i) => (
                                <li key={i}>

                                    <div className="event-index-parent">
                                        <div className="event-index-parent-info">
                                            <div >
                                                <div><Link to={`/events/${event._id}`}> <img className="event-index-photo" src={event.photoUrl}></img></Link></div>
                                            </div>
                                            <div className='event-index-description-list-nonuser'>
                                                <div className="date-index">Date:&nbsp;<span id="event-index-info">{Object.values(event.date).slice(0, 10)}</span></div>
                                                <div className="date-index">Event Name:&nbsp;<Link id="event-name" to={`/events/${event._id}`}>{event.name}</Link></div>
                                                <div className="date-index">Partcipating:&nbsp;<span className="event-index-info">{this.props.count[event._id]}</span></div>
                                                <div className="date-index">From:&nbsp;<span id="event-index-info">{event.startTime} to {event.endTime}</span></div>
                                                {/* <div className="date-index">Location:&nbsp;<span id="event-index-info">{event.location}</span></div> */}
                                                {/* <div className="date-index">Hosted by:&nbsp;<span id="event-index-info">{this.props.users[event.hostId].handle}</span></div> */}
                                            </div>
                                            <div className="index-signin-button"> <span className="index-signin-text" onClick={() => this.props.openModal('eventLogIn')}>Login to Join</span> </div>
                                        </div>

                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
    }

    render() {
        if (!this.props.events){
            return null
        }
        
        return (
            <div>
                {this.handleEventRendering()}
            </div>
        )
    }
}

export default EventIndex;