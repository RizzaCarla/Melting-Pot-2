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
        this.props.fetchUsers();
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteRecipe(this.props.recipe._id).then(this.props.history.push(`/profile`))
    }

    render(){
        // debugger;
        if ((this.props.recipe === undefined) || (Object.keys(this.props.authors).length === 0)) {
            return null
        }
        
        const recipe = this.props.recipe;
        const author = this.props.authors[recipe.authorId];

        const userOnlyBtns = (this.props.currentUser === undefined) ? 
                                null : (this.props.currentUser.user === undefined) ? 
                                null : (this.props.currentUser.user._id !== recipe.authorId) ? 
                                null :
                                        <div className="user-only-btns">
                                            <Link className="user-only-btn-edit" to={`/recipes/${recipe._id}/edit`}>Edit Recipe</Link>
                                            <button className="user-only-btn-delete" onClick={this.handleDelete}>Delete Recipe</button>
                                        </div>

        return(
            <div className="recipe-show-container">
                <div className="recipe-show-info">
                    <div className="recipe-pic">
                        <img src={recipe.photoUrl} alt=""/>
                        <h4>{recipe.name}</h4>
                    </div>
                    <div className="recipe-misc-info">
                        <ul>
                            <li><h4>Difficulty:&nbsp;&nbsp;<span>{recipe.difficulty}</span></h4></li>
                            <li><h4>Cooking Time:&nbsp;&nbsp;<span>{recipe.cookingTime}</span></h4></li>
                            <li><h4>Likes:&nbsp;&nbsp;<span>{recipe.numLikes === null ? 0 : recipe.numlikes}</span></h4></li>
                            {userOnlyBtns}
                        </ul>
                    </div>
                </div>
                <div className="recipe-detail-info">
                    <div className="recipe-show-ing-inst">
                        <h4>Ingredients:</h4>
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
                    <div className="recipe-owner-story-info">
                        <div className="recipe-show-owner">
                            <div className="recipe-show-owner-personal-cont">
                                <h3>Recipe&nbsp;Owner:</h3>
                                <div className="recipe-show-owner-content">
                                    <img src={author.photoUrl} alt="author-img"/>
                                    <h4>{author.handle}</h4>
                                </div>
                            </div>
                            <div className="recipe-show-owner-story-cont">
                                <h4>Recipe Story:</h4>
                                {recipe.story}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeShow;