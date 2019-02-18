import React from 'react'

class FizzBuzz extends React.Component {
    state = {
        divisor3: 3,
        divisor5: 5
    }

    handleFizzBuzz() {
            let result = []
            for (let i = 1; i <= 100; i++) {
                if (i % 3 === 0 && i % 5 ===0) {
                    result.push('FizzBuzz')
                } else if (i % 3 === 0) {
                    result.push('Fizz')
                } else if (i % 5 === 0) {
                    result.push('Buzz')
                } else {
                    result.push(i.toString()) // Best practices .toString()
                }
            }
            return result.join(', ')
    }

    render() {
        return (
            <div className="container">
                works V2 {this.state.divisor3}

                <h4>Solution {this.handleFizzBuzz()}</h4>
            </div>
        )
    }
}

export default FizzBuzz


