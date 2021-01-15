import React from 'react'
import { Link } from 'react-router-dom';

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
            <div>
                <button className='home-page-event-button' onClick={() => this.props.openModal('LogIn')}>Sign in to Join</button>
            </div>
            )
        } else {
            return(
                <div className='home-page-event-button' >
                {this.props.joinedEvent ? <button onClick={this.handleDelete} className="unjoin-button">Unjoin</button> :
                    this.props.currentUser.user._id === this.props.event.hostId ? <label className="hosting-button"><Link className="hosting-text" to={`/events/${this.props.event._id}`}>Hosting</Link></label> :
                    <button onClick={this.handleJoin} className="participating-button" >Join</button>}
            </div>
            )
        }
    }
    render() {
        return (
     
            <div className='home-page-container'>
                    <div className='home-page-event-details-box'>
                        <img src={this.props.event.photoUrl} className="home-page-event-images"></img>
                        <div className='home-page-event-details'>
                        <h1 className='home-page-event-name'>{this.props.event.name}</h1>
                        <h1>Date: { Object.values(this.props.event.date).slice(0, 10)}</h1>
                        <h1>From:&nbsp;<span >{this.props.event.startTime} to {this.props.event.endTime}</span></h1>
                        <h1>End Time: {this.props.event.endTime}</h1>
                        <h1>Partcipating: {this.props.count[this.props.event._id]}</h1>
                        <h1>Location: {this.props.event.location}</h1>
                        <h1>Description: {this.props.event.description}</h1>
                    </div>
                    <div className='home-page-event-button' >{this.handleParticipateButton()}</div>
                </div>
            </div>
          
        );
    }
}

export default HomePageEventButton;