import React from 'react';

class RecipeEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.recipe;
        console.log("this is state");
        console.log(this.state);
    }

    componentDidMount(){
        this.props.getUserRecipes(this.props.currentUser._id);
    }

    componentDidUpdate(){
        if(this.state === null){
            this.setState(this.props.recipe)
        }
    }

    render() {
        const recipe = this.props.recipe;

        if (this.state === null) {
            return null
        }
        return(
            <div>
                <h1>Edit</h1>
                {this.state.authorId}
                {this.state.name}
                {this.state.story}
            </div>
            // <div className="recipe-show-container">
            //     <div className="recipe-show-info">
            //         <div className="recipe-pic">
            //             <div className="recipe-pic"></div>
            //             {recipe.name}
            //         </div>
            //         <div className="recipe-misc-info">
            //             <ul>
            //                 <li>Difficulty:&nbsp;&nbsp;{recipe.difficulty}</li>
            //                 <li>Cooking Time:&nbsp;&nbsp;{recipe.cookingTime}</li>
            //             </ul>
            //         </div>
            //     </div>
            //     <div className="recipe-detail-info">
            //         <div className="recipe-show-ing-inst">
            //             <h4>Igredients:</h4>
            //             <ul className="recipe-ing-list">
            //                 {recipe.ingredients.map((ingredient, idx) => {
            //                     return(<li key={idx}>{ingredient}</li>)
            //                 })}
            //             </ul>
            //             <h4>Instructions: </h4>
            //             <ul className="recipe-inst-list">
            //                 {recipe.instructions.map((instruction, idx) => {
            //                     return(<li key={idx}>{instruction}</li>)
            //                 })}
            //             </ul>
            //         </div>
            //         <div className="recipe-owner-info">
            //             <div className="recipe-show-owner">
            //                 <div className="owner-pic"></div>
            //                 {/* {recipe.authorId} */}
            //             </div>
            //             <h4>Recipe Story:</h4>
            //             {recipe.story}
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default RecipeEdit;