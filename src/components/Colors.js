import React from 'react'

const colorList = [
    {
        label: 'Pink',
        hexCode: '#E91E63'
    },
    {
        label: 'Green',
        hexCode: '#4CAF50'
    },
    {
        label: 'Lime',
        hexCode: '#CDDC39'
    },
    {
        label: 'Indigo',
        hexCode: '#3F51B5'
    },
    {
        label: 'Cyan',
        hexCode: '#00BCD4'
    }
]

class Colors extends React.Component {
    render() {
        return (
            <div className="container">
                {
                    colorList.map(color => {
                        return <button
                            style={{ backgroundColor: color.hexCode }}
                            key={color.label}
                        >
                            {color.label}
                        </button>
                    })
                }
            </div>
        )
    }
}

export default Colors