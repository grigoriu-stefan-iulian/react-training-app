import React, { Component } from 'react';
import { BlueCounter, RedCounter } from './Counter';


const Counter = (props) => {
  const { timesClicked } = props;
  if (timesClicked <= 3) {
    return <BlueCounter
      clicked={timesClicked}
    />
  }

  return <RedCounter
    clicked={timesClicked}
  />
}


class CounterWithState extends Component {
  state = {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    const { timesClicked } = this.state;

    return <div>
      <Counter timesClicked={timesClicked} />
      <button onClick={this.handleClick}>
        Increase
      </button>
    </div>
  }
}
export default CounterWithState;