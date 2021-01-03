import React, { useState } from 'react';
import { uploadPhoto } from "../../util/photo_api_util";
import { Link } from 'react-router-dom';
import './1.event_create.css'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


class EventForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            hostId: this.props.currentUser._id,
            location: "",
            description: "",
            date: undefined,
            startTime: "",
            endTime: "",
            photoUrl: "",
            photoFile: null,
            photoId: "",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this)

    }

    componentDidMount() {
        this.props.clearErrors()
    }

    handleDayChange(day) {
        this.setState({ date: day });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.events !== prevState.events ) {
            this.props.history.push(`/events/${nextProps.events.eventId}`)
        }
        return { errors: nextProps.errors }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.photoFile) {
            const data = new FormData();
            data.append("file", this.state.photoFile);
         
            uploadPhoto(data).then(res => {
                let newEvent = {
                    name: this.state.name,
                    hostId: this.state.hostId,
                    location: this.state.location,
                    description: this.state.description,
                    date: this.state.date,
                    startTime: this.state.startTime,
                    endTime: this.state.endTime,
                    photoId: res.data.newData.photoId,
                    photoUrl: res.data.newData.Location,
                };
                this.props.createEvent(newEvent)
                    .then((newEvent) =>
                        this.props.history.push(`/events/${newEvent.event.data._id}`)
                    );
            })
        } else {
            let newEvent = {
                name: this.state.name,
                hostId: this.state.hostId,
                location: this.state.location,
                description: this.state.description,
                date: this.state.date,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                photoId: this.state.photoId,
                photoUrl: this.state.photoUrl,
            }
            this.props.createEvent(newEvent)
                .then((newEvent) =>
                    this.props.history.push(`/events/${newEvent.event.data._id}`)
                );
        }
    }

    handlePhotoFile(e) {
        e.preventDefault();
        this.setState({
            photoFile: e.target.files[0]
        });
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        const { selectedDay } = this.state

        if (this.props.currentUser === undefined) {
            return null;
        }
        return (
            <div>
         
                <form className="event-create-form">
                    <h1 className="event-create-header">Host An Event</h1>

                    <div className="input-field-event-create-container"><label className="event-create-label">Event Name:&nbsp;&nbsp;</label>
                        <input 
                        type="text"
                        className="input-field-event-create"
                        value={this.state.name}
                        onChange={this.update('name')}
                        />
                    </div>
                

                    <div className="input-field-event-create-container">
                        {selectedDay && <label>Day: {selectedDay.toLocaleDateString()}</label>}
                        {!selectedDay && <label className="event-create-label">Event Date:&nbsp;&nbsp;</label>}
                        <span className="input-field-event-create"> 
                            <DayPickerInput  onDayChange={this.handleDayChange} />
                        </span>
           
                    </div>
                        
                    <div className="input-field-event-create-container"><label className="event-create-label">Start Time:&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-field-event-create"
                            value={this.state.startTime}
                            onChange={this.update('startTime')}
                        />
                    </div>

                    <div className="input-field-event-create-container"><label className="event-create-label">End Time:&nbsp;&nbsp;</label>
                        <input
                            type="time"
                            className="input-field-event-create"
                            value={this.state.endTime}
                            onChange={this.update('endTime')}
                        />
                    </div>
       
                    <div className="input-field-event-create-container"><label className="event-create-label">Location:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            className="input-field-event-create"
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </div>
           
                    <div className="input-field-event-create-container"><label className="event-create-label">Description:&nbsp;&nbsp;</label>
                        <input
                            type="textbox"
                            className="input-field-event-create textbox"
                            value={this.state.description}
                            onChange={this.update('description')}
                        />
                    </div>
          
                    <div className="input-field-event-create-container"><label className="event-create-label">Event Photo:&nbsp;&nbsp;</label>
                        <input
                            type="file"
                            className="input-field-event-create textbox"
                            name=""
                            id=""
                            onChange={this.handlePhotoFile}
                        />
                    </div>
                
                <div>

                    <div>
                        <input type="submit" className="host-event-button" value="Save Event" onClick={this.handleClick}/>
                    </div>

                    <div>
                            <Link to="/profile"> <button className="go-back">Go back</button></Link> 
                    </div>

                </div>
                    <div className="errors">{this.renderErrors()}</div>

                </form>
            </div>
        )
    }

}
export default EventForm