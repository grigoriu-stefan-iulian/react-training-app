/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

class ListDemo extends React.Component {
  state = {
    myList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplier: 1,
    myUserList: [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'John', lastName: 'Foo' },
      { firstName: 'James', lastName: 'Bar' }
    ]
  }

  sum = (arr) => {
    let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum = sum + arr[i];
    // }

    arr.forEach((element) => { sum = sum + element })
    return sum;
  }

  sumReduce = (arr) => arr.reduce((sum, el) => sum + el);

  handleClick = (value) => {
    this.setState({ multiplier: value });
  }

  render() {
    const { myList, multiplier, myUserList } = this.state;

    const BoldItem = (props) => <b key={props.element}>{props.element} </b>

    const displayList = myList.map(el => <BoldItem element={el} />);
    const multiplyList = myList.map(el => <BoldItem element={el * multiplier} />);

    const greaterListJsx = myList.filter(x => x > 5).map(el => <BoldItem element={el} />);

    return <div>
      <p>
        The array is: {displayList}
      </p>
      <p>
        The array multiplied by {multiplier} is: {multiplyList}
      </p>
      <p>
        Select multiplier:
        {
          [2, 5, 10].map((el) => {
            return <button key={el} onClick={() => this.handleClick(el)}>{el}</button>
          })
        }
      </p>
      <p>
        Numbers greater than 5: {greaterListJsx}
      </p>
      <p>
        The sum of the array is: {myList.reduce((sum, el) => sum + el, 0)}
      </p>
      <p>
        {myUserList.map(user => <i>{user.firstName} 😀</i>)}
      </p>
    </div>
  }
}

export default ListDemo;