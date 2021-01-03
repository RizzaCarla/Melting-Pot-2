import React from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin5Line}  from 'react-icons/ri'

class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteEvent(this.props.event._id)
            .then(() => (this.props.history.push('/profile')))
    }


    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        if (this.props.event === undefined) {
            return null
        }

        return (
            <div>

                <div><img src={this.props.event.photoUrl} /></div>            
                <div>Event Name:&nbsp;{this.props.event.name} </div>            
                <div>Date:&nbsp;{ Object.values(this.props.event.date).slice(0, 10) }</div>        
                <div>From:&nbsp;{this.props.event.startTime} to {this.props.event.endTime}</div>        
                <div>Location or Link:&nbsp;{this.props.event.location}</div>      
                <div>Description:&nbsp;{this.props.event.description}</div>
  
                <div>
                    <div><button onClick={this.handleClick}><RiDeleteBin5Line/>Delete Event</button></div>              
                    <div><Link to={`/events/${this.props.event._id}/edit`}><button>Edit Event</button></Link></div>               
                    <div><Link to="/profile">Go Back</Link></div>
                </div>


            </div>
        )
    }
}

export default EventShow;