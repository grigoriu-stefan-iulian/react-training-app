import React from 'react'

const Counter = (props) => (
    <h2
        className={props.handleClick}
    >
        The button was clicked: {props.clicked} times</h2>
)

export default Counter