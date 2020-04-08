import React from "react"

const UserCard = props => {
    console.log("THIS IS THE PROPS-->", props) //returning users: undefined
        return(
            <div>
                <h2>{props.users.name}</h2>
                <h3>{props.users.login}</h3>
                <img src={props.users.avatar_url} alt="Profile image of GitHub user"/>
                <p>More info <button>down below</button></p>
                <div>
                    <p>Location: {props.users.location}</p>
                    <p>Bio: {props.users.bio}</p>
                    <p>Followers: {props.users.followers}</p>
                    <p>Following: {props.users.following}</p>
                </div>
                
            </div>
        )
    }

export default UserCard