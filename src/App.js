import React , { Component } from 'react';
import './App.css';
import Nav from './Nav';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component{
  state = {
    group1 : 0,
    group2 : 0,
    group3 : 0,
    group4 : 0
  }
  
  handleClick = (e) => {
    if (e.target.id === "group1"){
      this.setState({
        group1 : this.state.group1 + 1,
      }
      )
    }
    if (e.target.id === "group2"){
      this.setState({
        group2 : this.state.group2 + 1
      }
      )
    }
    if (e.target.id === "group3"){
      this.setState({
        group3 : this.state.group3 + 1
      }
      )
    }
    if (e.target.id === "group4"){
      this.setState({
        group4 : this.state.group4 + 1
      }
      )
    }
  }
  render(){
    return(
      <div className="App">
        < Nav />
        <h4 className = "text-center mt-5 mb-5 text-white">Guess who's gona WIN..!!!</h4>
        <div className="groups container">
          <div className = "row text-center text-white">
            <div className = "col-sm-12 col-md-3 px-4 py-3 bg-dark">
              <h3 className="group1 py-4" onClick = {this.handleClick}>FC Barcelona</h3>
              <button className = "btn btn-light" id="group1" onClick = {this.handleClick}>Vote</button>
              <h5 className = "py-4">Count:{ this.state.group1 }</h5>
            </div>
            <div className = "col-sm-12 col-md-3 px-4 py-3 bg-dark">
              <h3 className="group2 py-4" onClick = {this.handleClick}>Real Madrid</h3>
              <button className = "btn btn-light" id="group2" onClick = {this.handleClick}>Vote</button>
              <h5 className = "py-4">Count:{ this.state.group2 }</h5>
            </div>
            <div className = "col-sm-12 col-md-3 px-4 py-3 bg-dark">
              <h3 className="group3 py-4" onClick = {this.handleClick}>FC Bayern Munich</h3>
              <button className = "btn btn-light" id="group3" onClick = {this.handleClick}>Vote</button>
              <h5 className = "py-4">Count:{ this.state.group3 }</h5>
            </div>
            <div className = "col-sm-12 col-md-3 px-4 py-3 bg-dark">
              <h3 className="group4 py-4" onClick = {this.handleClick}>Liverpool</h3>
              <button className = "btn btn-light" id="group4" onClick = {this.handleClick}>Vote</button>
              <h5 className = "py-4">Count:{ this.state.group4 }</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
