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
        const deleteButton = (this.props.currentUser === undefined) || (Object.values(this.props.currentUser).length === 0) ? 
            null :
                ((this.props.currentUser.user._id === comment.authorId) || (this.props.recipe.authorId === this.props.currentUser.user._id)) ? 
                    <button onClick={() => this.handleDelete(comment._id)}>Delete</button> :
                        null;
        // const editButton = (this.props.currenUser.user._id === comment.authorId) 

        return(
            <div className="indiv-comment">
                <div className="indiv-comment-main">
                    <img src={author.photoUrl} alt=""/>
                    <div className="indiv-comment-body">
                        <p>{author.handle}&nbsp;wrote:</p>
                        {comment.body}
                    </div>
                </div>
                <div className="indiv-comment-util-btns">
                    {deleteButton}
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;