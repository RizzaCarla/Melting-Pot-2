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
            </div>
        )
    }
}

export default Recipes;