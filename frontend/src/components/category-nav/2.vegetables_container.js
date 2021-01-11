import { connect } from 'react-redux'
import Vegetables from './2.vegetables'

const mapStateToProps = (state) => {
  return {
    recipes: state.entities.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vegetables);