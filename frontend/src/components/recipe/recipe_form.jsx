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
            pendingIngredient: "",
            instructions: this.props.instructions,
            cookingTime: "",
            difficulty: "",
            category: ""
        }
        this.handleIngredient = this.handleIngredient.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.handleInstruction = this.handleInstruction.bind(this);
        this.addInstruction = this.addInstruction.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleIngredient(e) {
        e.preventDefault();
        this.setState({ ["pendingIngredient"]: e.target.value });
    }

    addIngredient(e) {
        e.preventDefault();
        let newIngredients = this.state.ingredients.concat(this.state.pendingIngredient);
        this.setState({["ingredients"]: newIngredients });
        this.setState({["pendingIngredient"]: ""});
    }

    handleInstruction(e) {
        e.preventDefault();
        this.setState({["pendingInstruction"]: e.target.value });
    }

    addInstruction(e) {
        e.preventDefault();
        let newInstructions = this.state.instructions.concat(this.state.pendingInstruction);
        this.setState({["instructions"]: newInstructions });
        this.setState({["pendingInstruction"]: ""})
    }

    handleClick(e) {
        e.preventDefault();
        this.props.createRecipe(this.state);
    }

    render() {
        console.log(this.state);
        if(this.props.currentUser === undefined) {
            return null;
        }
        return(
            <div className="form-container">
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
                        <div className="recipe-owner">
                            <h3>Recipe Owner: &nbsp;<span>{this.props.currentUser.handle}</span></h3>
                            <div className="recipe-owner-pic"></div>
                        </div>
                    </div>
                    <div className="recipe-bottom">
                        <div className="recipe-story">
                            <textarea cols="26" rows="10"
                                    onChange={this.update("story")}
                                    placeholder="write your story about this recipe"/>
                        </div>
                    </div>
                    <input type="submit" value="Post Your Recipe" onClick={this.handleClick}/>
                </form>
                <div className="ing-inst-container">
                    <form className="ing-form" onSubmit={this.addIngredient}>
                        <ul>
                            {this.state.ingredients.map((ingredient, idx) => {
                                return(<li key={idx}>{ingredient}</li>)
                            })}
                        </ul>
                        <input type="text"
                            placeholder="Add ingredient"
                            value={this.state.pendingIngredient}
                            onChange={this.handleIngredient}/>
                        <input type="submit" value="+"/>
                    </form>
                    <form className="inst-form" onSubmit={this.addInstruction}>
                        <ul>
                            {this.state.instructions.map((instruction, idx) => {
                                return(<li key={idx}>{instruction}</li>)
                            })}
                        </ul>
                        <input type="text"
                            placeholder="Add instruction"
                            value={this.state.pendingInstruction}
                            onChange={this.handleInstruction}/>
                        <input type="submit" value="+"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default RecipeForm

