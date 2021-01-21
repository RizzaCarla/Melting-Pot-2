import { connect } from 'react-redux'
import { getUserRecipes, clearRecipes } from  '../../actions/recipe_actions';
import AboutMe from './7.aboutMe'

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser.user,
        user: state.entities.users[state.session.currentUser.user._id],
        numRecipes: Object.values(state.entities.recipes).length
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      getUserRecipes: (authorId) => dispatch(getUserRecipes(authorId)),
      clearRecipes: () => dispatch(clearRecipes()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);