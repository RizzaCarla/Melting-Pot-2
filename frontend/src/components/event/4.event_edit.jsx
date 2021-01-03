import React from 'react';
import './1.event_create.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './4.event_edit.css'
import { Link } from 'react-router-dom';

class EditEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.event;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleDayChange = this.handleDayChange.bind(this)
    }

    componentDidMount() {
        this.props.getEvents();
        this.props.getUserEvents(this.props.currentUser._id);
        this.props.clearErrors()
    }


    handleDayChange(day) {
        this.setState({ date: day });
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEvent(this.state).then(() => this.props.history.push(`/events/${this.props.event._id}`));
    }

    render() {
        const event = this.props.event
        const { selectedDay } = this.state
        if (this.state === null) {
            return null
        }
        return (
            <div>
                <form className="event-edit-form">
                    <h1 className="event-edit-header">Edit Event</h1>


                    <div className="input-field-event-edit-container"><label label className="event-create-label">Event Name:&nbsp;&nbsp;</label>
                        <input 
                            type="text"
                            className="input-field-event-create"
                            value={this.state.name}
                            placeholder={event.name}
                            onChange={this.update("name")} />
                    </div>

                    <div className="input-field-event-edit-container">
                        {selectedDay && <label>Day: {selectedDay.toLocaleDateString()}</label>}
                        {!selectedDay && <label className="event-create-label">Choose a day</label>}
                        <span className="input-field-event-create"> 
                        <DayPickerInput onDayChange={this.handleDayChange} />
                        </span>
                    </div>

                    <div className="input-field-event-edit-container"><label className="event-create-label">Start Time:&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-field-event-create"
                            value={this.state.startTime}
                            placeholder={event.startTime}
                            onChange={this.update('startTime')} />
                    </div>

                    <div className="input-field-event-edit-container"><label className="event-create-label">End Time:&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-field-event-create"
                            value={this.state.endTime}
                            placeholder={event.endTime}
                            onChange={this.update('endTime')} />
                    </div>

                    <div className="input-field-event-edit-container"><label className="event-create-label">Location:&nbsp;&nbsp;</label>
                        <input
                            type="text" 
                            className="input-field-event-create"
                            value={this.state.location}
                            placeholder={event.location}
                            onChange={this.update('location')} />
                    </div>

                    <div className="input-field-event-edit-container"><label className="event-create-label">Description:&nbsp;&nbsp;</label>
                        <input
                            type="textbox"
                            className="input-field-event-create"
                            value={this.state.description}
                            placeholder={event.description}
                            onChange={this.update('description')} />
                    </div>


                    <button className="host-event-button" onClick={this.handleSubmit}>Save Event</button>
                    <div>
                        <Link to="/profile"> <button className="go-back">Go back</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditEvent;