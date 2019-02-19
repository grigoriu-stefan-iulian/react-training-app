import React from 'react';

export class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: '',
      colorHexCode: '',
      errorMessage: '',
      colorList: [
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
        },
        {
          label: 'Blue',
          hexCode: '#2196F3'
        }
      ]
    }
  }

  onColorNameChange = (event) => {
    this.setState({ colorName: event.target.value })
  }

  onHexCodeChange = (event) => {
    this.setState({ colorHexCode: event.target.value })
  }

  onAddButtonClick = (event) => {
    const { colorList, colorHexCode, colorName } = this.state;

    if (colorHexCode.length === 0) {
      this.setState({
        errorMessage: 'Hexcode cannot be empty'
      })
    } else {
      colorList.push({
        label: colorName,
        hexCode: colorHexCode
      });

      this.setState({
        colorList: colorList,
        errorMessage: ''
      })
    }
  }

  render() {
    const { colorName, colorHexCode } = this.state;
    return (<div className={"buttonContainer"}>
      {
        this.state.colorList.map((color) => {
          return (
            <button
              style={{ backgroundColor: color.hexCode }}
              key={color.label}
              onClick={() => this.props.onClick(color)}
            >
              {color.label}
            </button>
          )
        })
      }
      {
        // extract into component
      }
      <div>
        <label>
          <input
            type="text"
            placeholder="Color name"
            value={colorName}
            onChange={this.onColorNameChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="hexcode"
            value={colorHexCode}
            onChange={this.onHexCodeChange}
          />
        </label>
        <button
          onClick={this.onAddButtonClick}
          disabled={colorName.length === 0 || colorHexCode.length === 0}
        >
          Add color
        </button>
        <p>
          {this.state.errorMessage}
        </p>
      </div>
    </div>)
  }
}
