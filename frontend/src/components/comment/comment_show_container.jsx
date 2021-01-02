import { connect } from 'react-redux';
import { getComments, getRecipeComments, createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import CommentShow from "./comment_show";

const mapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.session.currentUser.user,
        comments: Object.values(state.entities.comments),
    })
    
}

const mapDispatchToProps = (dispatch) => {
    return({
        getComments: () => dispatch(getComments()),
        getRecipeComments: (recipeId) => dispatch(getRecipeComments(recipeId)),
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentShow);