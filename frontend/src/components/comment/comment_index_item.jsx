import React from 'react';
import "./comment.css"

class CommentIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const comment = this.props.comment;
        const author = this.props.authors[comment.authorId]

        return(
            <div className="indiv-comment">
                <img src={author.photoUrl} alt=""/>
                {comment.body}
            </div>
        )
    }
}

export default CommentIndexItem;