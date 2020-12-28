import React from 'react';

class RecipeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <form className="recipe-form-cont">
                <div className="recipe-top">
                    <div className="recipe-pic-name">
                        <input type="file"/>
                        <input type="text"/>
                    </div>
                    <div className="recipe-info">
                        <label>Difficulty:
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                        <label>Cooking Time:
                            <input type="text"/>
                        </label>
                        <label>
                            in
                        </label>


                    </div>
                </div>
                <div className="recipe-middle">

                </div>
                <div className="recipe-bottom">
                    
                </div>
            </form>
        )
    }
}

export default RecipeForm