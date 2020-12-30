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
                Handle:{this.props.currentUser.handle}
                <br></br>
                Email:{this.props.currentUser.email}
                <br></br>
                Recipes Posted: 
                <br></br>
                Member Since:{this.memberSince()}
                <br></br>
                Dietary Restrictions: 
                    {this.props.currentUser.dietaryRestrictions.map((rest,i) => (
                        <div key={i}>
                            {rest}
                        </div>
                    ))}

        
            </div>
        )
    }
}

export default AboutMe;