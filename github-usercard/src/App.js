import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList"
import axios from "axios"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/berachele")
    .then(response => {
      // console.log(response.data)
      this.setState({
        user: response.data
      })
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
          <UserList />
        </div>
      </div>
    )
  }
}
export default App;
