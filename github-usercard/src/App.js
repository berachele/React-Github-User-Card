import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard"
import FollowerCard from "./components/FollowerCard"
import axios from "axios"

class App extends React.Component {
  state = {
    users: {}
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
          {/* <h2>Name: {this.name}</h2>
          <h3>Username: {this.username}</h3>
          <img>{this.photo}</img>
          <p>More info <button>down below</button></p>
          <div>
              <p>Location: {this.location}</p>
              <p>Bio: {this.bio}</p>
              <p>Followers: {this.followers}</p>
              <p>Following: {this.following}</p>
          </div> */}
        </div>
      </div>
    )
  }
}
export default App;
