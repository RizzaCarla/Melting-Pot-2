import React from 'react';
import './1.event_create.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

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
                <div> Event Name:
                    <input 
                        type="text"
                        value={this.state.name}
                        placeholder={event.name}
                        onChange={this.update("name")} />
                </div>

                <div>
                    {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
                    {!selectedDay && <p>Choose a day</p>}
                    <DayPickerInput onDayChange={this.handleDayChange} />
                </div>

                <div>Start Time:
                    <input
                        type="time"
                        value={this.state.startTime}
                        placeholder={event.startTime}
                        onChange={this.update('startTime')} />
                </div>

                <div>End Time:
                    <input
                        type="time"
                        value={this.state.endTime}
                        placeholder={event.endTime}
                        onChange={this.update('endTime')} />
                </div>

                <div>Location:
                    <input
                        type="text"
                        value={this.state.location}
                        placeholder={event.location}
                        onChange={this.update('location')} />
                </div>

                <div>Description:
                    <input
                        type="textbox"
                        value={this.state.description}
                        placeholder={event.description}
                        onChange={this.update('description')} />
                </div>


                <button onClick={this.handleSubmit}>Save Event</button>
       
            </div>
        )
    }
}

export default EditEvent;