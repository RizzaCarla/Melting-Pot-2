import React from 'react';
import { Link } from 'react-router-dom';

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getEvents();
        this.props.fetchUsers()
    }

    render() {
        
        if (this.props.events === undefined) {
            return null
        }
        return (
            <div>
                <ul>
                    {Object.values(this.props.events).map((event, i) => (
                        <li key={i}>
                            
                            <div>
                                <Link to={`/events/${event._id}`}> <img src={event.photoUrl}></img></Link>
                            </div>

                            <div> Event Name:&nbsp;
                                <Link to={`/events/${event._id}`}>{event.name}</Link>
                            </div>

                            <div> Date:&nbsp;
                                {Object.values(event.date).slice(0, 10)}
                            </div> 

                           <div>From:&nbsp;{event.startTime} to {event.endTime}</div>
                           
                            <div>
                                Hosted by:&nbsp;
                                {this.props.users[event.hostId].handle}
                            </div>

                            <div>
                                # of people participating:&nbsp;
                                {event.usersJoined.length}
                            </div>

                            <div>
                                Location:&nbsp;
                                {event.location}
                            </div>

                            <div>
                                {(this.props.users[this.props.currentUser._id].eventsParticipating).includes(event._id) ? <button>Participating</button> : <button>Join</button>}
                            </div>

                        </li>
                        
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventIndex;