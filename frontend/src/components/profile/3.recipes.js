import React from 'react'

class Recipes extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.getUserRecipes(this.props.currentUser._id)
    }

    render() {
        return (
            <div>
                {this.props.recipes.name}
            </div>
        )
    }
}

export default Recipes;