import React from 'react';
import "./recipe.css"

class RecipeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
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
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                        <input type="text"
                            placeholder="write ingredients"/>
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
                        <textarea cols="30" rows="10"
                                  placeholder="write your story about this recipe"/>
                    </div>
                </div>
            </form>
        )
    }
}

export default RecipeForm