import React, { Component } from 'react';
import Header from './components/Header'
import DateNow from './components/DateNow'
import Counter from './components/Counter'
import Button from './components/Button'
import ListDemo from './components/ListDemo'
import FizzBuzz from './components/FizzBuzz'
import Colors from './components/Colors'

class App extends Component {
  state = {
    clicked: 0,
    selectedColor: {
      hexCode: 'grey',
      label: 'greyLabel'
    }
  }
  handleClick = () => {
    this.setState(() => ({
      clicked: this.state.clicked + 1
    }))
  }
  render() {

    return (
      <div className="App">
        <Header color={this.state.selectedColor} />

        <Colors />
      </div>
    )
  }
}

export default App;

//din Colors schimbam culoarea in App.js 
// si din App.js schimbam textul/culoarea din Header.js 