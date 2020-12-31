import React from 'react';
import './recipe_edit.css';

class RecipeEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.recipe;
        this.update = this.update.bind(this);
        this.handleInstruction = this.handleInstruction.bind(this);
        this.handleInstClick = this.handleInstClick.bind(this);
        this.handleIngClick = this.handleIngClick.bind(this);
        this.handleIngredient = this.handleIngredient.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getUserRecipes(this.props.currentUser._id);
    }

    componentDidUpdate(){
        if(this.state === null){
            this.setState(Object.assign(this.props.recipe, {ingIdx: "", instIdx: ""}));
        }
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    handleInstClick(idx) {
        this.setState({["instIdx"]: idx});
    }

    handleInstruction(e) {
        e.preventDefault();
        let newInstruction = this.state.instructions;
        newInstruction[this.state.instIdx] = e.target.value;
        this.setState({["instructions"]: newInstruction});
    }

    handleIngClick(idx) {
        this.setState({["ingIdx"]: idx });
    }

    handleIngredient(e) {
        e.preventDefault();
        let newIngredient = this.state.ingredients;
        newIngredient[this.state.ingIdx] = e.target.value;
        this.setState({["ingredients"]: newIngredient });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateRecipe(this.state).then(() => this.props.history.push(`/recipes/${this.props.recipe._id}`));
    }

    render() {
        const recipe = this.props.recipe;

        if (this.state === null) {
            return null
        }
        return(
            <div>
                <label>Recipe Name:
                    <input type="text"
                        value={this.state.name}
                        placeholder={recipe.name}
                        onChange={this.update("name")}/>
                </label>
                <label>Difficulty:
                    <select onChange={this.update("difficulty")} value={this.state.difficulty}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <label>Cooking Time:
                    <select onChange={this.update("cookingTime")} value={this.state.cookingTime}>
                        <option value="0.5 hr">0.5 hr</option>
                        <option value="1 hr">1 hr</option>
                        <option value="1.5 hr">1.5 hr</option>
                        <option value="2+ hrs">2+ hr</option>
                    </select>             
                </label>
                <label>Category:
                    <select onChange={this.update("category")} value={this.state.category}>
                        <option value="Meat">Meat</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Poultry">Poultry</option>
                        <option value="Carbs">Carbs</option>
                        <option value="Noodle">Soup</option>
                    </select>
                </label>
                <label>Likes: {recipe.numLikes}</label>
                <label>Recipe Owner:
                    <h5>Author Name(Placeholder)</h5>
                </label>
                <label>Story:
                    <textarea cols="26" rows="10"
                              value={this.state.story}
                              onChange={this.update("story")}
                              placeholder="Write your story about this recipe"/>
                </label>
                <label>Ingredients:
                    <ul>
                        {this.state.ingredients.map((ingredient, idx) => {
                            return(
                                <li key={idx}>
                                    <input type="text"
                                            value={this.state.ingredients[idx]}
                                            placeholder={ingredient}
                                            onClick={() => this.handleIngClick(idx)}
                                            onChange={this.handleIngredient}/>
                                </li>
                            )
                        })}
                    </ul>
                    <input type="text"
                           placeholder="Add more ingredient"/>
                </label>
                <label>Instructions:
                    <ul>
                        {this.state.instructions.map((instruction, idx) => {
                            return(
                                <li key={idx}>
                                    <input type="text"
                                            value={this.state.instructions[idx]}
                                            placeholder={instruction}
                                            onClick={() => this.handleInstClick(idx)}
                                            onChange={this.handleInstruction}/>
                                </li>
                            )
                        })}
                    </ul>
                    <input type="text"
                           placeholder="Add more instruction"/>
                </label>
                <button onClick={this.handleSubmit}>Update Recipe</button>
            </div>
        )
    }
}

export default RecipeEdit;