import React from 'react'
import { Link } from 'react-router-dom';
import './7.trending.css'

class HomePageEventButton extends React.Component {
    constructor(props){
        super(props)
        this.handleParticipateButton = this.handleParticipateButton.bind(this)
        this.handleJoin = this.handleJoin.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers().then(() => this.props.getEvents());
        this.props.getJoins()
    }

    handleJoin(e) {
        e.preventDefault();
        this.props.createJoin({ joinerId: this.props.currentUser.user._id, eventId: this.props.event._id })
      
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteJoin(this.props.joinedEvent._id)
    
    }

    handleParticipateButton() {
        if (!this.props.auth) {
            return(
                <div className="trending-event-button">
                <button className="signintojoin-button" onClick={() => this.props.openModal('LogIn')}>Login to Join</button>
            </div>
            )
        } else {
            return(
                <div className="trending-event-button">
                {this.props.joinedEvent ? <button onClick={this.handleDelete} className="trending-unjoin-button">Unjoin</button> :
                    this.props.currentUser.user._id === this.props.event.hostId ? <label className="trending-hosting-button"><Link className="hosting-text" to={`/events/${this.props.event._id}`}>Hosting</Link></label> :
                    <button onClick={this.handleJoin} className="trending-participating-button" >Join</button>}
                </div>
            )
        }
    }
    render() {
        return (
            
     
            // <div className='home-page-event-container'>
                <div className='home-page-event-details-box'>
                    <div className="event-pic-and-info">
                        <div>
                            <img src={this.props.event.photoUrl} className="home-page-event-images"></img>
                        </div>

                        <div className='home-page-event-details'>
                            <div className='home-page-event-name'><span className="header-event-trend">{this.props.event.name}</span></div>
                            <div><span className="event-text">Date:</span> {Object.values(this.props.event.date).slice(0, 10)}</div>
                            <div><span className="event-text">From:</span>&nbsp;<span >{this.props.event.startTime} to {this.props.event.endTime}</span></div>
                            <div><span className="event-text">End Time:</span> {this.props.event.endTime}</div>
                            <div><span className="event-text">Partcipating:</span> {this.props.count[this.props.event._id]}</div>
                            <div><span className="event-text">Location:</span> {this.props.event.location}</div>
                            <div><span className="event-text">Description:</span> {this.props.event.description}</div>
                        </div>
                        <div className='trending-event-button-container'> {this.handleParticipateButton()}</div>
                    </div>
                    
                </div>
            // </div>
          
        );
    }
}

export default HomePageEventButton;