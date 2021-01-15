import React from 'react'
import { Link } from 'react-router-dom'
import './3.recipes.css'

class Likes extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.getRecipes()
        this.props.getAllLikes()
    }

    render() {
        if ( !this.props.recipesLiked) {
             return <div>you have no likes</div>
        }
        return (
            <div>
                <br></br>
                <div className="button-container"><Link to='/'><button id="add-recipe-button">See More Recipes</button></Link></div>
            <div>
                {!this.props.recipesLiked ? <div><p>You currently have no liked recipes</p></div> :
                <div>
                <ul className="recipe-wrap">
                    {this.props.recipesLiked.map((recipe, i) => {
                    return(
                    <li className="recipe-list" key={i}>
                        <div >
                            <div className="single-recipe-container">
                                <div><Link to={`/recipes/${recipe._id}`}> <img className="recipe-profile-photo" src={recipe.photoUrl}></img></Link></div>
                                <div><Link className="recipe-name" to={`/recipes/${recipe._id}`}>{recipe.name}</Link></div>
                            </div>
                            <br></br>
                        </div>
                    </li>)         
                })}
                </ul>
                </div>
                 }
            </div>
            </div>
        )
    }
}

export default Likes;