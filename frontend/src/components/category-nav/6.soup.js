import React from 'react';
import { Link } from 'react-router-dom'

class Soup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipeUsingCategory("Soup")
  }

  render() {
    if (!this.props.categoryRecipes) {
      return null
    }
    return (
      <div className="category-recipe">
        {Object.values(this.props.categoryRecipes).map((categoryRecipe, i) => (
          <Link to={`/recipes/${categoryRecipe._id}`}>
            <ul className="category-recipe-list">
              <li className="category-recipe-photo-container">
                <img className="category-recipe-photo" src={categoryRecipe.photoUrl}></img>
              </li>
              <li className="category-recipe-name">
                {categoryRecipe.name}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    )
  }
}

export default Soup;