import React from 'react'
import './7.aboutMe.css'

class AboutMe extends React.Component {

    componentDidMount() {
        this.props.clearRecipes();
        this.props.getUserRecipes(this.props.currentUser._id);
    }

    memberSince(){
        const createdAt = this.props.currentUser.createdAt;
        const arr = createdAt.split('')
        return arr.slice(5,10).concat('-', arr.slice(0,4))
    }

 
    render() {
        return (
            <div className="about-me-container">
                <div className="about">Handle:&nbsp;{this.props.currentUser.handle}</div>

                <div className="about">Email:&nbsp;{this.props.currentUser.email}</div>

                {/* <div className="about">Recipes Posted:&nbsp;{(this.props.user.recipesPosted).length}</div> */}
                <div className="about">Recipes Posted:&nbsp;{(this.props.numRecipes)}</div>

                <div className="about">Member Since:&nbsp;{this.memberSince()}</div>

                <div className="about">Dietary Restrictions:&nbsp;
                    {this.props.currentUser.dietaryRestrictions.map((rest,i) => (
                        <div key={i}>
                            {rest}
                        </div>
                    ))}
                </div>

        
            </div>
        )
    }
}

export default AboutMe;