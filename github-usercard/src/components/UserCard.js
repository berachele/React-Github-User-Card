import React from "react"

const UserCard = props => {
    console.log("THIS IS THE PROPS-->", props) //returning users: undefined
        return(
            <div className="card">
                <h2>{props.users.name}</h2>
                <h3>{props.users.login}</h3>
                <img src={props.users.avatar_url} alt="Profile image of GitHub user"/>
                {/* <p>More info <button>down below</button></p> */}
                <div>
                    <p><b>Location:</b> {props.users.location}</p>
                    <p><b>Bio:</b> {props.users.bio}</p>
                    <p><b>Followers:</b> {props.users.followers}</p>
                    <p><b>Following:</b> {props.users.following}</p>
                    {/* <div>
                        <p>See my followers: <button>here</button></p>
                    </div> */}
                </div>
                
            </div>
        )
    }

export default UserCard