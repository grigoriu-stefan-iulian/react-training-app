import React from 'react'

class ListDemo extends React.Component {
    state = {
        myList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        multiplier: 4,
        users: [
            {
                firstName: 'john',
                lastName: 'Doe',
                location: 'Iasi'
            },
            {
                firstName: 'Jane',
                lastName: 'Doe',
                location: 'Iasi'
            },
            {
                firstName: 'Foo',
                lastName: 'Bar',
                location: 'Iasi'
            }
        ]
    }

    greaterThanFive = (arr) => arr.filter(el => el > 5)
    handleClick = (value) => this.setState({ multiplier: value })

    render() {
        const { myList, multiplier, users } = this.state
        const BoldItem = (props) => <b key={props.element}>{props.element} </b>
        const multiply = () => myList.map(el => <BoldItem element={el * multiplier} />)
        return (
            <div>
                <p>The sum of the numbers is {myList.reduce((sum, el) => sum + el, 0)}</p>
                <p>The numbers multiplied by {multiplier} are: {multiply()}</p>
                <p>The array is: {myList.map(element => <BoldItem element={element} />)}</p>
                {[2, 5, 7].map(num => <button onClick={() => this.handleClick(num)}>{num}</button>)}
                <p>{users.map(user => <i>{user.firstName} </i>)}</p>
            </div>
        )
    }
}

export default ListDemo

// map() forEach(), filter(), reduce()

// info about key=""