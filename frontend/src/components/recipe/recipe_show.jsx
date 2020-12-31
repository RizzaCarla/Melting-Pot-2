import React from 'react';
import './recipe_show.css';
import { Link } from 'react-router-dom';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getRecipes();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteRecipe(this.props.recipe._id).then(this.props.history.push(`/profile`))
    }

    render(){
        if (this.props.recipe === undefined) {
            return null
        }
        
        const recipe = this.props.recipe;

        const userOnlyBtns = (this.props.currentUser === undefined) ? 
                                null : (this.props.currentUser.user === undefined) ? 
                                null : (this.props.currentUser.user._id !== recipe.authorId) ? 
                                null :
                                        <div>
                                            <Link to={`/recipes/${recipe._id}/edit`}>Edit Recipe</Link>
                                            <button onClick={this.handleDelete}>Delete Recipe</button>
                                        </div>

        return(
            <div className="recipe-show-container">
                <div className="recipe-show-info">
                    <div className="recipe-pic">
                        <img src={recipe.photoUrl} alt=""/>
                        {recipe.name}
                    </div>
                    <div className="recipe-misc-info">
                        <ul>
                            <li>Difficulty:&nbsp;&nbsp;{recipe.difficulty}</li>
                            <li>Cooking Time:&nbsp;&nbsp;{recipe.cookingTime}</li>
                            <li>Likes: {recipe.numLikes}</li>
                            {userOnlyBtns}
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
                        <ul className="recipe-inst-list">
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