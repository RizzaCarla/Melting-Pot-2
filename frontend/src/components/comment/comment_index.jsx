import React from 'react';
import CommentIndexItem from "./comment_index_item";
import "./comment.css"

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRecipeComments(this.props.recipe._id)
    }

    render() {
        const commentInput = this.props.currentUser === undefined ?
            null :
                <div className="comment-input-section">
                    <img src={this.props.currentUser.user.photoUrl} alt=""/>
                    <input className="comment-input"
                            type="text"
                            placeholder="Write your comment here..."/>
                </div>

        return(
            <div className="comment-container">
                <h3>Comments:</h3>
                {commentInput}
                <ul className="comment-section">
                    {this.props.comments.map(comment => {
                        return(
                            <li key={comment._id}>
                                <CommentIndexItem comment={comment}
                                                  authors={this.props.authors}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;