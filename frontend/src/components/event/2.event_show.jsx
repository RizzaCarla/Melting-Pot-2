import React from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin5Line}  from 'react-icons/ri'
import { BiArrowBack } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import "./2.event_show.css"
import { withRouter } from 'react-router-dom';


class EventShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleJoin = this.handleJoin.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = { clicked: true }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deleteEvent(this.props.event._id)
            .then(() => (this.props.history.push('/profile')))
    }

    componentDidMount() {
        this.props.getEvents();
        this.props.getJoins()
    }


    handleJoin(e) {
        e.preventDefault();
        this.props.createJoin({ joinerId: this.props.currentUser.user._id, eventId: this.props.event._id })
        this.setState({ clicked: false })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteJoin(this.props.joinedEvent._id)
        this.setState({ clicked: false })
    }


    handleEventShowRendering(){
        if (this.props.loggedIn && this.props.event){
            return(
            <div>
                <div className="event-show-container">
                    <div className="event-photo-container"><img className="event-photo-show" src={this.props.event.photoUrl} /></div>
                    <div className="event-info-show">
                        <div><label id="event-label">Event Name:</label>{this.props.event.name} </div>
                        <div> <label id="event-label">Date:</label>{Object.values(this.props.event.date).slice(5, 10).concat('-', Object.values(this.props.event.date).slice(0, 4))}</div>
                        <div> <label id="event-label">From:</label>{this.props.event.startTime} to {this.props.event.endTime}</div>
                        <div><label id="event-label">Location or Link:</label>{this.props.event.location}</div>
                        <div><label id="event-label">Description:</label>{this.props.event.description}</div>
                <div className="buttons">
                    {(this.props.currentUser.user._id === this.props.event.hostId) ?
                        <div>
                            <div><button onClick={this.props.history.goBack} className="goback-show-event-button"><BiArrowBack />&nbsp;Go back</button></div>
                            <div><Link to={`/events/${this.props.event._id}/edit`}><button className="edit-show-event-button"><FiEdit2 /> &nbsp;Edit Event</button></Link></div>
                            <div><button className="delete-show-event-button" onClick={this.handleClick}><RiDeleteBin5Line />&nbsp;Delete Event</button></div>
                        </div> :
                        <div>
                                {this.props.joinedEvent ? <button onClick={this.handleDelete} className="unjoin-show-event-button">Unjoin</button> :
                                    <button className="join-show-event-button" onClick={this.handleJoin}>Join</button>}
                            <div><button onClick={this.props.history.goBack} className="goback-show-event-button"><BiArrowBack />&nbsp;Go back</button></div>
                        </div>}
                </div>
                    </div>
                </div>
            </div>
            )
        } else if (!this.props.loggedIn ){
            return(
            <div>
                <div className="event-show-container">
                    <div className="event-photo-container"><img className="event-photo-show" src={this.props.event.photoUrl} /></div>
                    <div className="event-info-show">
                        <div><label id="event-label">Event Name:</label>{this.props.event.name} </div>
                            <div><label id="event-label">Description:</label> < span id="event-label-des">{this.props.event.description}</span></div>
                            <Link to={{ pathname: `/login`, state: { redirectLink: `/events/${this.props.event._id}` } }} onClick = {() => this.props.openModal('LogIn')} className="event-index-login-first">Sign in to see full details</Link>
                <div className="buttons">
                    <button onClick={this.props.history.goBack} className="goback-show-event-button"><BiArrowBack />&nbsp;Go back</button>       
                </div>
                    </div>
                </div>
            </div>
        )}
    }
    render() {
        if (this.props.event === undefined) {
            return null
        }
        return (
            <div>
                {this.handleEventShowRendering()}
            </div>
        )
    }
}

export default EventShow;