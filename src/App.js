import React, { Component } from 'react';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'
import './App.css';

class App extends Component {

  state = {
    userData : [
      {name: 'Computer', price: '5000'},
      {name: 'Mobile', price: '200'}      
    ]
  }

  changeNameHandler = (input) => {
    this.setState({userData : [
      {name: input.target.value, price: '5000'},
      {name: 'Mobile', price: '200'}      
    ]});
  };

  render() {
    
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler}/>
        <UserOutput name={this.state.userData[0].name} price={this.state.userData[0].price} />
        <UserOutput name={this.state.userData[1].name} price={this.state.userData[1].price} />
      </div>
    );
  }
}

export default App;
