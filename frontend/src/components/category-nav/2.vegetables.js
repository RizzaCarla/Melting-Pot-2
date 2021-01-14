import React from 'react';

class Vegetable extends React.Component {

  componentDidMount() {
    this.props.getRecipeUsingCategory("Vegetables")
  }
  
  render () {
    if (!this.props.categoryRecipes) {
      return null
    }
    return (
      <div>
        {Object.values(this.props.categoryRecipes).map((categoryRecipe, i) => (
          <ul>
            <li>
              <img src={categoryRecipe.photoUrl}></img>
            </li>
            <li>
              {categoryRecipe.name}
            </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Vegetable;