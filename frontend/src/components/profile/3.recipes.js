import React from 'react'
import { Link } from 'react-router-dom'

class Recipes extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.getUserRecipes(this.props.currentUser._id)
    }

    
    render() {
        if (!this.props.recipes) {
            return null
        }
        return (
            <div>
                <div><Link to='/recipes/new'><button>Create A New Recipe</button></Link></div>


                <ul>
                    {Object.values(this.props.recipes).map((recipe, i) => (
                        <li key={i}>
                            
                            <div><Link to={`/recipes/${recipe._id}`}> <img src={recipe.photoUrl}></img></Link></div>
                            <div><Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link></div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Recipes;