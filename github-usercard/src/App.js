import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard"
import FollowerList from "./components/FollowerList"
import axios from "axios"

class App extends React.Component {
  state = {
    users: {},
    followers: []
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/berachele")
    .then(response => {
      console.log(response.data)
      this.setState({
        users: response.data
      })
    })
    .catch(error => {
      console.log("ERROR!", error)
    })

  //   axios.get("https://api.github.com/users/berachele/followers")
  //   .then(response => {
  //     console.log("THIS IS FOLLWERS RESP-->", response.data)
  //     this.setState({
  //       followers: response.data
  //     })
  //   })
  //   .catch(error => {
  //     console.log("Error on showFollowers", error)
  //   })
  // }

  // showFollowers = event => {
  //   event.preventDefault()
  //   axios.get("https://api.github.com/users/berachele/followers")
  //   .then(response => {
  //     console.log("THIS IS FOLLWERS RESP-->", response)
  //     // this.setState({
  //     //   followers: response.data
  //     // })
  //   })
  //   .catch(error => {
  //     console.log("Error on showFollowers", error)
  //   })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="github logo" />
          <h1>GitHub User's</h1>
        </header>
        <div>
          <UserCard users={this.state.users}/>
          {/* <FollowerList followers={this.state.followers}/> */}
        </div>
      </div>
    )
  }
}
export default App;
