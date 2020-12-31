import React from 'react'

class Events extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getEvents()
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
                            {event.name}
                            {/* <Link to={`/event/${event._id}`}>{event.name}</Link> */}
                    </li> 
                    ))}
                </ul>
            </div>
        )
    }
}

export default Events;