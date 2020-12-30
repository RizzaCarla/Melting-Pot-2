import React from 'react';
import "./recipe.css"

class RecipeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.currentUser._id,
            name: "",
            story: "",
            ingredients: this.props.ingredients,
            instructions: this.props.instructions,
            cookingTime: "",
            difficulty: "",
            category: ""
        }
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleIngredient(e) {
        e.preventDefault();
        
    }

    render() {
        if(this.props.currentUser === undefined) {
            return null;
        }
        return(
            <form className="recipe-form-cont">
                <div className="recipe-top">
                    <div className="recipe-pic-name">
                        <input type="file"/>
                        <input type="text"
                               onChange={this.update("name")}
                               placeholder="Name of your recipe"/>
                    </div>
                    <div className="recipe-info">
                        <label>Difficulty:
                            <select onChange={this.update("difficulty")}>
                                <option value="" selected disabled>Please select</option>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </label>
                        <label>Cooking Time:
                            <select onChange={this.update("cookingTime")}>
                                <option value="" selected disabled>Please select</option>
                                <option value="0.5 hr">0.5 hr</option>
                                <option value="1 hr">1 hr</option>
                                <option value="1.5 hr">1.5 hr</option>
                                <option value="2+ hrs">2+ hrs</option>
                            </select>
                        </label>
                        <label>Category:
                            <select onChange={this.update("category")}>
                                <option value="" selected disabled>Please select</option>
                                <option value="Meat">Meat</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Poultry">Poultry</option>
                                <option value="Carbs">Carbs</option>
                                <option value="Noodle">Noodle</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="recipe-middle">
                    <div className="ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                            {this.state.ingredients.map((ingredient,idx) => {
                                return(<li key={idx}>{ingredient}</li>)
                            })}
                        </ul>
                        <input type="text"
                               placeholder="write ingredients"
                               onChange={this.handleIngredient}/>
                    </div>
                    <div className="recipe-owner">
                        <h3>Recipe Owner: &nbsp;<span>{this.props.currentUser.handle}</span></h3>
                        <div className="recipe-owner-pic"></div>
                    </div>
                </div>
                <div className="recipe-bottom">
                    <div className="instruction">
                        <h3>Instructions:</h3>
                        <input type="text"
                               placeholder="write instructions"/>
                    </div>
                    <div className="recipe-story">
                        <textarea cols="26" rows="10"
                                  onChange={this.update("story")}
                                  placeholder="write your story about this recipe"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default RecipeForm

