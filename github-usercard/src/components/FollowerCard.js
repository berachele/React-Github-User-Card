import React from "react"

const FollowerCard = props => {
    // console.log("Returning FollowerCard props-->", props)
    return(
        <div>
            {/* <h2>{props.followers.name}</h2> */}
            <h3>{props.login}</h3>
            <img src={props.avatar_url} alt="Profile image of GitHub user"/>
            {/* <p>More info <button>down below</button></p>
            <div>
                <p>Location: {props.location}</p>
                <p>Bio: {props.bio}</p>
                <p>Followers: {props.followers}</p>
                <p>Following: {props.following}</p>
            </div> */}
        </div>
    )
}

export default FollowerCard