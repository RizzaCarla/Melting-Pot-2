import React from 'react'

class Friends extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                hi there i'm your friend
                Friends:
                {this.props.currentUser.friends.map((friend, i) => (
                    <div key={i}>
                        {friend}
                    </div>
                ))}
            </div>
        )
    }
}

export default Friends;