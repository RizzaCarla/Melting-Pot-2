import React from 'react';
import "./comment.css"

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    handleDelete(id) {
        this.props.deleteComment(id);
    }

    render() {
        const comment = this.props.comment;
        const author = this.props.authors[comment.authorId];
        const deleteButton = (this.props.currentUser.user._id === comment.authorId)? 
            <button onClick={() => this.handleDelete(comment._id)}>Delete</button> :
            null;
        

        return(
            <div className="indiv-comment">
                <div className="indiv-comment-main">
                    <img src={author.photoUrl} alt=""/>
                    {comment.body}
                </div>
                <div className="indiv-comment-util-btns">
                    {deleteButton}
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;