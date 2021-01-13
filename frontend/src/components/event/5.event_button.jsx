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
        this.props.getJoins(this.props.event._id)
    }

    componentDidUpdate(prevProps) {
        if( prevProps.event._id !== this.props.event._id) {
            this.props.getJoins(this.props.event._id)
        }
    }

    handleJoin(e){
        e.preventDefault();
        this.props.createJoin({ joinerId: this.props.currentUser._id, eventId: this.props.event._id })
        this.setState({clicked : false})
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteJoin(this.props.joins[this.props.event._id]._id)
        this.setState({ clicked: false })
    }

    render() {
     
        return (
            
            <div >
                {this.props.joins[this.props.event._id] && this.props.joins[this.props.event._id].joinerId === this.props.currentUser._id ? 
                    <button onClick={this.handleDelete} className="event-index-participating-button">Unjoin</button> : 
                this.props.currentUser._id === this.props.event.hostId ? <label className="event-index-participating-button">Hosting</label> :
                <button onClick={this.handleJoin} className="event-index-join-button" >Join</button>}
            </div>     
       
        )
    }
}

export default EventButton;