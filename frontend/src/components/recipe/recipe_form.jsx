import React from 'react';
import "./recipe.css"
import { uploadPhoto } from "../../util/photo_api_util";
import { Link } from 'react-router-dom'

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser._id,
      name: "",
      story: "",
      ingredients: this.props.ingredients,
      pendingIngredient: "",
      instructions: this.props.instructions,
      comments: [],
      cookingTime: "",
      difficulty: "",
      category: "",
      numLikes: 0,
      photoId: "",
      photoFile: null,
      photoUrl: "",
    };
    this.handleIngredient = this.handleIngredient.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.handleInstruction = this.handleInstruction.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);

  }
  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }
  handleIngredient(e) {
    e.preventDefault();
    this.setState({ ["pendingIngredient"]: e.target.value });
  }
  addIngredient(e) {
    e.preventDefault();
    let newIngredients = this.state.ingredients.concat(
      this.state.pendingIngredient
    );
    this.setState({ ["ingredients"]: newIngredients });
    this.setState({ ["pendingIngredient"]: "" });
  }
  handleInstruction(e) {
    e.preventDefault();
    this.setState({ ["pendingInstruction"]: e.target.value });
  }
  addInstruction(e) {
    e.preventDefault();
    let newInstructions = this.state.instructions.concat(
      this.state.pendingInstruction
    );
    this.setState({ ["instructions"]: newInstructions });
    this.setState({ ["pendingInstruction"]: "" });
  }
  handleClick(e) {
    e.preventDefault();
    // this.props.createRecipe(this.state).then((recipe) => console.log(recipe));
    if (this.state.photoFile) {
        const data = new FormData();
        data.append("file", this.state.photoFile);
        
        uploadPhoto(data).then(res => {
            let newRecipe = {
              authorId: this.state.authorId,
              name: this.state.name,
              story: this.state.story,
              ingredients: this.state.ingredients,
              pendingIngredient: this.state.pendingIngredient,
              instructions: this.state.instructions,
              comments: this.state.comments,
              cookingTime: this.state.cookingTime,
              difficulty: this.state.difficulty,
              category: this.state.category,
              numLikes: this.state.numLikes,
              photoId: res.data.newData.photoId,
              photoUrl: res.data.newData.Location,
            };
            this.props
              .createRecipe(newRecipe)
              .then((recipe) =>
                this.props.history.push(`/recipes/${recipe.recipe.data._id}`)
              );
        })
    } else {
        this.props
              .createRecipe(this.state)
              .then((recipe) =>
                this.props.history.push(`/recipes/${recipe.recipe.data._id}`)
              );
    }
  }

  handlePhotoFile(e) {
    e.preventDefault();
    this.setState({
      photoFile: e.target.files[0],
    });
  }

  render() {
    if (this.props.currentUser === undefined) {
      return null;
    }
    return (
      <div className="form-container">
        <input
          className="save-recipe-btn"
          type="submit"
          value="Save Recipe"
          onClick={this.handleClick}
        />
        <form id="recipe_form" className="recipe-form-cont">
          <div className="recipe-top">
            <div className="recipe-pic-name">
              <input 
                type="file" 
                name=""
                id=""
                onChange={this.handlePhotoFile}   
                />
              <input
                type="text"
                onChange={this.update("name")}
                placeholder="Name of your recipe"
              />
            </div>
            <div className="recipe-info">
              <label>
                Difficulty:&nbsp;&nbsp;&nbsp;
                <select onChange={this.update("difficulty")}>
                  <option value="" selected disabled>
                    Please select
                  </option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </label>
              <label>
                Cooking Time:&nbsp;&nbsp;&nbsp;
                <select onChange={this.update("cookingTime")}>
                  <option value="" selected disabled>
                    Please select
                  </option>
                  <option value="0.5 hr">0.5 hr</option>
                  <option value="1 hr">1 hr</option>
                  <option value="1.5 hr">1.5 hr</option>
                  <option value="2+ hrs">2+ hrs</option>
                </select>
              </label>
              <label>
                Category:&nbsp;&nbsp;&nbsp;
                <select onChange={this.update("category")}>
                  <option value="" selected disabled>
                    Please select
                  </option>
                  <option value="Meat">Meat</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Poultry">Poultry</option>
                  <option value="Carbs">Carbs</option>
                  <option value="Noodle">Soup</option>
                </select>
              </label>
            </div>
          </div>
          <div className="recipe-middle">
            <div className="recipe-story">
              <textarea
                cols="26"
                rows="10"
                onChange={this.update("story")}
                placeholder="Write your story about this recipe"
              />
            </div>
            <div className="recipe-owner">
              <h3>
                Recipe Owner: &nbsp;<span>{this.props.currentUser.handle}</span>
              </h3>
              <div className="recipe-owner-pic"></div>
            </div>
          </div>
          <div className="recipe-bottom">
            {/* <div className="recipe-story">
                            <textarea cols="26" rows="10"
                                    onChange={this.update("story")}
                                    placeholder="write your story about this recipe"/>
                        </div> */}
          </div>
        </form>
        <div className="ing-inst-container">
          <form className="ing-form" onSubmit={this.addIngredient}>
            <div className="ing-form-inputs">
              <input type="submit" value="+" />
              &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Add ingredient"
                value={this.state.pendingIngredient}
                onChange={this.handleIngredient}
              />
            </div>
            <ul>
              {this.state.ingredients.map((ingredient, idx) => {
                return <li key={idx}>{ingredient}</li>;
              })}
            </ul>
          </form>
          <form className="inst-form" onSubmit={this.addInstruction}>
            <div className="inst-form-inputs">
              <input type="submit" value="+" />
              &nbsp;&nbsp;&nbsp;
              <input
                type="text"
                placeholder="Add instruction"
                value={this.state.pendingInstruction}
                onChange={this.handleInstruction}
              />
            </div>
            <ul>
              {this.state.instructions.map((instruction, idx) => {
                return <li key={idx}>{instruction}</li>;
              })}
            </ul>
          </form>
        </div>
        <br></br>
        <Link to="/profile"><button>Go Back</button></Link>
      </div>
    );
  }
}
export default RecipeForm