import React from 'react'
import { Link } from 'react-router-dom'

class Recipes extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        console.log(this.props.recipes)
        this.props.getUserRecipes(this.props.currentUser._id)
    }

    
    render() {
        if (!this.props.recipes) {
            return null
        }
        return (
            <div>
                <ul>
                    {Object.values(this.props.recipes).map((recipe, i) => (
                        <li key={i}>
                            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Recipes;