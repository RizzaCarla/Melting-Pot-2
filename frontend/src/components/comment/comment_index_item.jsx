import React from 'react';
import "./comment.css"

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.props.deleteComment(id);
    }

    render() {
        const comment = this.props.comment;
        const author = this.props.authors[comment.authorId];
        const deleteButton = (this.props.currentUser === undefined) || (Object.values(this.props.currentUser).length === 0) ? 
            null :
                (this.props.currentUser.user._id === comment.authorId) ? 
                    <button className="comment-delete-btn" onClick={() => this.handleDelete(comment._id)}>Delete</button> :
                        null;
        const displayComment = 
                <div className="indiv-comment-main">
                    <img src={author.photoUrl} alt=""/>
                    <div className="indiv-comment-body">
                        <p>{author.handle}&nbsp;wrote:</p>
                        {comment.body}
                        {deleteButton}
                    </div>
                </div>
        return(
            <div className="indiv-comment">
                {displayComment}
            </div>
        )
    }
}

export default CommentIndexItem;