import { connect } from 'react-redux'
import Likes from './4.likes'
import { likeSelector } from '../../reducers/likes_selector'
import {getAllLikes} from '../../actions/like_actions'
import { getRecipes} from '../../actions/recipe_actions'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        recipes: state.entities.recipes,
        recipesLiked: likeSelector(state),
        likes: state.entities.likes

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllLikes: (() => dispatch(getAllLikes())),
        getRecipes: (() => dispatch(getRecipes()))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);