import React from 'react';
import CommentIndexItem from "./comment_index_item";
import "./comment.css"

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "",
            authorId: "",
            recipeId: this.props.recipe._id
        }
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.getRecipeComments(this.props.recipe._id)
        if ((this.props.currentUser !== undefined) && (Object.keys(this.props.currentUser).length !== 0)){
            this.setState({["authorId"]: this.props.currentUser.user._id})
        }
    }

    handleComment(e) {
        e.preventDefault();
        this.setState({["body"]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({["body"]: "" })
    }

    render() {
        const profilePic = ((this.props.currentUser === undefined) || (Object.keys(this.props.currentUser).length === 0)) ?
            null :
                <img src={this.props.currentUser.user.photoUrl} alt=""/>

        const commentInput = this.props.currentUser === undefined ?
            null :
                <div className="comment-input-section">
                    {profilePic}
                    <form onSubmit={this.handleSubmit}>
                        <input className="comment-input"
                               type="text"
                               value={this.state.body}
                               placeholder="Write your comment here..."
                               onChange={this.handleComment}/>
                        <input className="comment-submit"
                               type="submit"
                               value="Comment"/>
                    </form>
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
                                                  authors={this.props.authors}
                                                  currentUser={this.props.currentUser}
                                                  deleteComment={this.props.deleteComment}
                                                  recipe={this.props.recipe}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentIndex;