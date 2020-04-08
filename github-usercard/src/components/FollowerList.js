import React from "react"
import FollowerCard from "./FollowerCard"

const FollowerList = props => {
    // console.log("THIS IS PROPS IN FOLLOWERLIST", props.followers)
    return(
        <div>
            {props.followers.map(follower => {
           return <FollowerCard 
           key={follower.id} 
           login={follower.login}
           avatar_url={follower.avatar_url}
        //    location={follower.location}
        //    bio={follower.bio}
        //    followers={follower.followers}
        //    following={follower.following}
           />
        })}
        </div>
    )
}

export default FollowerList