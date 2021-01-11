import React from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin5Line}  from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import "./2.event_show.css"

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
            <div className="event-show-container">

                <div className="event-photo-container"><img className="event-photo-show" src={this.props.event.photoUrl} /></div>            
                
                <div className="event-info-show">
                    <div><label id="event-label">Event Name:&nbsp;</label>{this.props.event.name} </div>            
                    <div> <label id="event-label">Date:&nbsp;</label>{ Object.values(this.props.event.date).slice(5, 10).concat('-',Object.values(this.props.event.date).slice(0,4)) }</div>        
                    <div> <label id="event-label">From:&nbsp;</label>{this.props.event.startTime} to {this.props.event.endTime}</div>        
                    <div><label id="event-label">Location or Link:&nbsp;</label>{this.props.event.location}</div>      
                    <div><label id="event-label">Description:&nbsp;</label>{this.props.event.description}</div>
                </div>

                    <div>
                        <div><Link to="/profile"><button className="goback-show-event-button"><BiArrowBack />&nbsp;Go back</button></Link></div>
                        <div><Link to={`/events/${this.props.event._id}/edit`}><button className="edit-show-event-button"><FiEdit2 /> &nbsp;Edit Event</button></Link></div>               
                        <div><button className="delete-show-event-button"onClick={this.handleClick}><RiDeleteBin5Line/>&nbsp;Delete Event</button></div>              
                    </div>
               

            </div>
        )
    }
}

export default EventShow;