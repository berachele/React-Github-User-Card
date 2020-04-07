import React from "react"
import UserCard from "./UserCard"

class UserList extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <UserCard />
        )
    }
}

export default UserList