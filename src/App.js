/*Ok, tema pentru saptamana viitoare
Adaugati validare la inputuri pentru urmatoarele cazuri:
1. validati hexCode-ul
2. validati ca si culoarea introdusa sa fie unica in lista
3. Stergeti valorile din input dupa adaugarea cu succes.
*/

import React, { Component } from 'react';

import Title from './components/Title';
import DateNow from './components/DateNow';
import CounterWithState from './components/CounterWithState';
import FizzBuzz from './components/FizzBuzz';
import ListDemo from './components/ListDemo';
import { Colors } from './components/Colors';
import './app.css';

class App extends Component {
  state = {
    selectedColor: {
      hexCode: '#607D8B',
      label: 'Blue Grey'
    }
  }

  handleClick = (color) => {
    this.setState({
      selectedColor: color
    })
  }

  render() {
    const { selectedColor } = this.state;
    return (
      <div className="App">
        <Title hexCode={selectedColor.hexCode} label={selectedColor.label} />
        <p>
          {
            selectedColor.hexCode === '#4CAF50' && <span>
              The color you selected is our color of the day! Enjoy 10% off.
              </span>
          }
        </p>
        <Colors onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
