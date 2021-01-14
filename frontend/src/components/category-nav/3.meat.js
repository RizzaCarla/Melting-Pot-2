import React from 'react';

class Meat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipeUsingCategory("Meat")
    console.log('this is componentdid mount')
  }
  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    console.log('this is componentdid update')
  }

  render() {
    console.log('this is rendered')
    if (!this.props.categoryRecipes) {
      return null
    }
    return (
      <div className="meat-recipe"> 
        {Object.values(this.props.categoryRecipes).map((categoryRecipe, i) => (
          <ul className="meat-recipe-list">
            <li className="meat-recipe-photo-container">
              <img className="meat-recipe-photo" src={categoryRecipe.photoUrl}></img>
            </li>
            <li className="meat-recipe-name">
              {categoryRecipe.name}
            </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default Meat;