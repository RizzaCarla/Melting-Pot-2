import React from 'react';

class RecipeShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getRecipes();
    }

    render(){
        if (this.props.recipe === undefined) {
            return null
        }
        return(
            <div className="">
                <div className="pic">
                    
                </div>
                {this.props.recipe.name}
            </div>
        )
    }
}

export default RecipeShow;