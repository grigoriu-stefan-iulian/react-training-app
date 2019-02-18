import React from 'react'

const Header = (props) => (
    <div className="header">
        <h1>
            Hello React New!
        </h1>
        <p>Have fun coding!</p>
        <p>The Color is {props.color.label}</p>
    </div>
)

export default Header