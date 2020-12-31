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
                            <li>Difficulty:&nbsp;&nbsp;{recipe.difficulty}</li>
                            <li>Cooking Time:&nbsp;&nbsp;{recipe.cookingTime}</li>
                            <li>Likes: {recipe.numLikes}</li>
                        </ul>
                    </div>
                </div>
                <div className="recipe-detail-info">
                    <div className="recipe-show-ing-inst">
                        <h4>Igredients:</h4>
                        <ul className="recipe-ing-list">
                            {recipe.ingredients.map((ingredient, idx) => {
                                return(<li key={idx}>{ingredient}</li>)
                            })}
                        </ul>
                        <h4>Instructions: </h4>
                        <ul classname="recipe-inst-list">
                            {recipe.instructions.map((instruction, idx) => {
                                return(<li key={idx}>{instruction}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="recipe-owner-info">
                        <div className="recipe-show-owner">
                            <div className="owner-pic"></div>
                            {/* {recipe.authorId} */}
                        </div>
                        <h4>Recipe Story:</h4>
                        {recipe.story}
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeShow;