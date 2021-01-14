import React from 'react';

class Poultry extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipeUsingCategory("Poultry")
  }

  render() {
    if (!this.props.recipes) {
      return null
    }
    return (
      <div>
        {Object.values(this.props.recipes).map((categoryRecipe, i) => (
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

export default Poultry;