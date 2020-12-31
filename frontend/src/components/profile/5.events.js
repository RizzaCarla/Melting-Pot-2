import React from 'react'
import { Link } from 'react-router-dom'

class Events extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getUserEvents(this.props.currentUser._id)
    }

    render() {
        // if (!this.props.events) {
        //     return null
        // }

        return (
            <div>
                <ul>
                    {Object.values(this.props.events).map((event, i) => (
                        <li key={i}> 
                        
                            <Link to={`/events/${event._id}`}> <img src={event.photoUrl}></img></Link>
                            {event.date}
                            <Link to={`/events/${event._id}`}>{event.name}</Link>
                            <p># of people participating</p>
                            {event.location}
                    </li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default Events;