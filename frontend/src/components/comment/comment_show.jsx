import React from 'react';

class CommentShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRecipeComments(this.props.recipe._id)
    }

    render() {
        return(
            <div>
                <h3>Comments:</h3>
                <ul>
                    {this.props.comments.map(comment => {
                        return(comment.body)
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentShow;