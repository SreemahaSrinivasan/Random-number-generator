// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickGenerateRandomNumber = () => {
    const getRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: getRandomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.onClickGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
