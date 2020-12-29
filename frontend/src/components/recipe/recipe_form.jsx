import React from 'react';
import "./recipe.css"

class RecipeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorId: this.props.currentUser.id,
            name: "",
            story: "",
            ingredients: this.props.ingredients,
            instructions: this.props.instructions,
            cookingTime: "",
            difficulty: "",
            category: ""
        }

        this.handleIngredients = this.handleIngredients.bind(this);
    }

    handleIngredients(e) {
        let prevIngredients = this.props.ingredients;
        let newIngredient = [e.target.value];
        this.setState({["ingredients"]: prevIngredients.concat(newIngredient)})
    }

    render() {
        return(
            <form className="recipe-form-cont">
                <div className="recipe-top">
                    <div className="recipe-pic-name">
                        <input type="file"/>
                        <input type="text"/>
                    </div>
                    <div className="recipe-info">
                        <label>Difficulty:
                            <select>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </label>
                        <label>Cooking Time:
                            <input type="text"/>
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
                               onChange={this.handleIngredients}/>
                    </div>
                    <div className="recipe-owner">
                        <h3>Recipe Owner:</h3>
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
                                  placeholder="write your story about this recipe"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default RecipeForm
