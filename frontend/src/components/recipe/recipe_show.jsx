import React from 'react';
import './recipe_show.css';
import './like.css'
import { Link } from 'react-router-dom';

import CommentShowContainer from "../comment/comment_index_container";

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.getRecipes();
        this.props.clearLikes();
        this.props.getRecipeLikes(this.props.recipeId);
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.recipeId !== this.props.recipeId)) {
            this.props.clearLikes();
            this.props.getRecipe(this.props.recipeId);
            this.props.getRecipeLikes(this.props.recipeId);
        }
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteRecipe(this.props.recipe._id).then(this.props.history.push(`/profile`))
    }

    handleLike(e) {
        e.preventDefault();
        this.props.createLike({"likerId": this.props.currentUser.user._id,
                                "recipeId": this.props.recipe._id})
        this.props.getRecipeLikes(this.props.recipeId);
    }

    handleUnlike(likeId) {
        this.props.deleteLike(likeId);
        this.props.getRecipeLikes(this.props.recipeId);
    }

    render(){
        if ((this.props.recipe === undefined) || (Object.keys(this.props.authors).length === 0)) {
            return null
        }
        
        const recipe = this.props.recipe;
        const author = this.props.authors[recipe.authorId];

        // Sorting through Likes = Starts Here
        const likes = Object.values(this.props.likes);
        const likeIds = Object.keys(this.props.likes);
        let peopleLiked = [];
        let i;
        for(i = 0; i < likes.length; i++) {
            peopleLiked.push(likes[i].likerId)
        }
        let idx = (this.props.currentUser === undefined) ? 
                    null : (Object.values(this.props.currentUser).length === 0) ? 
                    null :
                    peopleLiked.indexOf(this.props.currentUser.user._id);
        let likeId = (likeIds[idx]);
        // Sorting through Likes - Ends Here

        const userOnlyBtns = (this.props.currentUser === undefined) ? 
                                null : (this.props.currentUser.user === undefined) ? 
                                null : (this.props.currentUser.user._id !== recipe.authorId) ? 
                                null :
                                        <div className="user-only-btns">
                                            <Link className="user-only-btn-edit" to={`/recipes/${recipe._id}/edit`}>Edit Recipe</Link>
                                            <button className="user-only-btn-delete" onClick={this.handleDelete}>Delete Recipe</button>
                                        </div>
        
        const likeBtn = (this.props.currentUser === undefined) ?
            null : (this.props.currentUser.user === undefined) ?
            null : (this.props.currentUser.user._id === recipe.authorId) ?
            null : (peopleLiked.includes(this.props.currentUser.user._id)) ?
                <button className="like-btns" 
                        onClick={() => this.handleUnlike(likeId)}>
                        Unlike
                </button> :
                <button className="like-btns" 
                        onClick={this.handleLike}>
                        Like
                </button>


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
                            <li><h4>Likes:&nbsp;&nbsp;{peopleLiked.length}</h4></li>
                            {likeBtn}
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
                <CommentShowContainer recipe={recipe} 
                                      authors={this.props.authors}/>
                <Link className="recipe-show-go-back-btn-text" to="/profile"><button className="recipe-show-go-back-btn">Go Back</button></Link>
            </div>
        )
    }
}

export default RecipeShow;