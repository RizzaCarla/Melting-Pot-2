import { connect } from 'react-redux';
import { getRecipe, getRecipes } from '../../actions/recipe_actions';
import { getEvent, getEvents } from '../../actions/event_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import HomePage from './home_page';
import {closeModal, openModal } from '../../actions/modal_actions'
import { countSelector } from '../../reducers/joins_selectors'
import { createJoin, deleteJoin, getJoins, getEventJoins } from '../../actions/join_actions'
import { joinSelector2 } from '../../reducers/joins_selectors'
// import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    recipes: state.entities.recipes,
    events: state.entities.events,
    users: state.entities.users,
    count: countSelector(state),
    joins: state.entities.joins,
    joinedEvent: joinSelector2(state)

  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getRecipes: () => dispatch(getRecipes()),
    getRecipe: (recipeId) => dispatch(getRecipe(recipeId)),
    getEvents: () => dispatch(getEvents()),
    getEvent: (eventId) => dispatch(getEvent(eventId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    createJoin: ((join) => dispatch(createJoin(join))),
    deleteJoin: (joinId) => dispatch(deleteJoin(joinId)),
    getJoins: (() => dispatch(getJoins())),
    getEventJoins: ((eventId) => dispatch(getEventJoins(eventId)))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);