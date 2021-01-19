import React from 'react';
import { Link } from 'react-router-dom';
import './3.event_index.css'

class EventButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { clicked: true}
        this.handleJoin = this.handleJoin.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        this.props.getJoins()
    }

    componentDidUpdate(prevProps) {
        if( prevProps.event._id !== this.props.event._id) {
            this.props.getJoins()
        }
    }

    handleJoin(e){
        e.preventDefault();
        this.props.createJoin({ joinerId: this.props.currentUser._id, eventId: this.props.event._id })
        this.setState({clicked : false})
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteJoin(this.props.joinedEvent._id)
        this.setState({ clicked: false })
    }

    render() {
        
        return (
            <div >
                { this.props.joinedEvent ? <button onClick={this.handleDelete} className="index-unjoin-button">Unjoin</button> : 
                    this.props.currentUser._id === this.props.event.hostId ? <div className="index-hosting-button"><Link className="hosting-text" to={`/events/${this.props.event._id}`}>Hosting</Link></div> :
                        <button onClick={this.handleJoin} className="index-participating-button" >Join</button>}
            </div>     
       
        )
    }
}

export default EventButton;