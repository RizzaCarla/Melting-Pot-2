import React from 'react';


class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            hostId: this.props.currentUser._id,
            location: "",
            description: "",
            date: "",
            startTime: "",
            endTime: "",
            photoUrl: ""
        }

        this.handleClick = this.handleClick.bind(this)
        
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }
 
    handleClick(e){
        e.preventDefault();
        this.props.createEvent(this.state)
            // .then((event) => this.props.history.push(`/events/${event.event.data._id}`));
    }

    render() {
        if (this.props.currentUser === undefined) {
            return null;
        }
        return (
            <div>
                <form>
                
                    <label>Event Name:&nbsp;&nbsp;
                        <input 
                        type="text"
                        className="input-field"
                        value={this.state.name}
                        onChange={this.update('name')}
                        />
                    </label>


                    <label>Date:&nbsp;&nbsp;
                        <input
                            type="text"
                            className="calendar"
                            value={this.state.date}
                            onChange={this.update('date')}
                        />
                    </label>

                    <label>Start Time:&nbsp;&nbsp;
                        <input
                            type="text"
                            className="time"
                            value={this.state.startTime}
                            onChange={this.update('startTime')}
                        />
                    </label>

                    <label>End Time:&nbsp;&nbsp;
                        <input
                            type="text"
                            className="time"
                            value={this.state.endTime}
                            onChange={this.update('endTime')}
                        />
                    </label>

                    <label>Location:&nbsp;&nbsp;
                        <input
                            type="text"
                            className="input-field"
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </label>

                    <label>Description:&nbsp;&nbsp;
                        <input
                            type="textbox"
                            className="input-field"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </label>

                    <label>Event Photo:&nbsp;&nbsp;
                        <input
                            type="file"
                            className="photo-field"
                            value={this.state.photoUrl}
                            onChange={this.update('photoUrl')}
                        />
                    </label>

                    <input type="submit" value="Create Event" onClick={this.handleClick}/>

                </form>
            </div>
        )
    }

}
export default EventForm