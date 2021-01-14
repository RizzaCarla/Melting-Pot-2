import React from 'react';

class Soup extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipeUsingCategory("Soup")
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

export default Soup;