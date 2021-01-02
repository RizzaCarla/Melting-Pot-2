import React from 'react'

class AboutMe extends React.Component {

    memberSince(){
        const createdAt = this.props.currentUser.createdAt;
        const arr = createdAt.split('')
        return arr.slice(0,10)
    }

 
    render() {
        return (
            <div>
                <div>Handle:{this.props.currentUser.handle}</div>

                <div>Email:{this.props.currentUser.email}</div>

                <div>Recipes Posted: {(this.props.user.recipesPosted).length}</div>

                <div>Member Since:{this.memberSince()}</div>

                <div>Dietary Restrictions: 
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