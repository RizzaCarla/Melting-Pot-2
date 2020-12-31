import React from 'react';
import { uploadPhoto } from "../../util/photo_api_util";

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
            photoUrl: "",
            photoFile: null,
            photoId: "",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.photoFile) {
            const data = new FormData();
            data.append("file", this.state.photoFile);
            console.log(data)
            uploadPhoto(data).then(res => {
                let newEvent = {
                    name: this.state.name,
                    hostId: this.state.hostId,
                    location: this.state.location,
                    description: this.state.description,
                    date: this.state.date,
                    startTime: this.state.startTime,
                    endTime: this.state.startTime,
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
                endTime: this.state.startTime,
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
                            name=""
                            id=""
                            onChange={this.handlePhotoFile}
                        />
                    </label>

                    <input type="submit" value="Save Event" onClick={this.handleClick}/>

                </form>
            </div>
        )
    }

}
export default EventForm