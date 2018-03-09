import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Validation from './User/Validation';
import CharResult from './User/CharResult';
import './App.css';

class App extends Component {

  state = {
    userData : [
      {name: 'Computer', price: '5000'},
      {name: 'Mobile', price: '200'}      
    ],
    txtCount: 0,
    listChar: []
  }

  changeNameHandler = (input) => {
    this.setState({userData : [
      {name: input.target.value, price: '5000'},
      {name: 'Mobile', price: '200'}      
    ]});
  };  

  calCountChangeHandler = (event) => {    
    const tmptxtCount = event.target.value.length;
    this.setState({txtCount: tmptxtCount});
    
    let listChar = this.state.listChar;
    const textval = event.target.value;
    listChar = textval.split('');
    this.setState({listChar: listChar});
  };

  removeCharHandler = (index) => {
    //const oldValue = this.state.listChar;
    const lstChar = [...this.state.listChar];
    lstChar.splice(index, 1);
    this.setState({listChar: lstChar});    
  };

  render() {

    
    
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler}/>
        <UserOutput name={this.state.userData[0].name} price={this.state.userData[0].price} />
        <UserOutput name={this.state.userData[1].name} price={this.state.userData[1].price} />
        <input type="text" onChange={(event) => this.calCountChangeHandler(event)} />        
        <p>Length of the entered text: {this.state.txtCount}</p>
        <Validation txtCount={this.state.txtCount}/>
        {this.state.listChar.map((char, index) => {
          return <CharResult char={char} click={() => this.removeCharHandler(index)} />
        })}        
      </div>
    );
  }
}

export default App;
