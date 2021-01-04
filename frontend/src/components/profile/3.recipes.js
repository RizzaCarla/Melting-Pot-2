import React from 'react'
import { Link } from 'react-router-dom'
import './3.recipes.css'

class Recipes extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.clearRecipes()
        this.props.getUserRecipes(this.props.currentUser._id)
    }

    render() {     
        if (!this.props.recipes) {
            return null
        }
        return(

            <div>
                <br></br>
                <div className="button-container"><Link to='/recipes/new'><button id="add-recipe-button">Add A Recipe</button></Link></div>
                <ul className="recipe-wrap">
                    {Object.values(this.props.recipes).map((recipe, i) => (
                        <li className="recipe-list" key={i}>
                            <div >
                                <div className="single-recipe-container">

                                <div><Link to={`/recipes/${recipe._id}`}> <img className="recipe-profile-photo" src={recipe.photoUrl}></img></Link></div>
                                <div className="recipe-name"><Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link></div>
                                </div>
                                <br></br>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Recipes;