import React from 'react';

class EventShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
    
        return (
            <div>
                
            </div>
        )
    }
}

export default EventShow;