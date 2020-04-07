import React from "react"

class UserCard extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h2>Name:</h2>
                <h3>Username:</h3>
                <img></img>
                <p>More info <button>down below</button></p>
                <div>
                    <p>Location:</p>
                    <p>Bio:</p>
                    <p>Followers:</p>
                    <p>Following:</p>
                </div>
            </div>
        )
    }
}

export default UserCard