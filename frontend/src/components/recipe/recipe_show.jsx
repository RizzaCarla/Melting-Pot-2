import React from 'react';
import './recipe_show.css';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRecipes();
    }

    render(){
        const recipe = this.props.recipe;

        if (this.props.recipe === undefined) {
            return null
        }
        return(
            <div className="recipe-show-container">
                <div className="recipe-show-info">
                    <div className="recipe-pic">
                        <div className="recipe-pic"></div>
                        {recipe.name}
                    </div>
                    <div className="recipe-misc-info">
                        <ul>
                            <li>Difficulty:&nbsp;&nbsp;&nbsp;{recipe.difficulty}</li>
                            <li>Cooking Time:&nbsp;&nbsp;&nbsp;{recipe.cookingTime}</li>
                            {/* <li>Shared: &nbsp;&nbsp;&nbsp;{recipe}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeShow;