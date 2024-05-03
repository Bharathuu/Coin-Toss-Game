//index.js

import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }
  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }
  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Total: {headsCount}</p>
            <p className="count">Total: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss


//index.css

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, #e2a139, #f9d423);
  min-height: 100vh;
}
.coin-toss-container {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  width: 80%;
}
@media screen and (min-width: 768px) {
  .coin-toss-container {
    max-width: 500px;
    padding: 64px;
  }
}
.heading {
  text-align: center;
  color: #a35200;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 8px;
}
@media screen and (min-width: 768px) {
  .heading {
    font-size: 48px;
    margin-bottom: 16px;
  }
}
.description {
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
}
@media screen and (min-width: 768px) {
  .description {
    font-size: 24px;
    margin-top: 16px;
  }
}
.toss-result-img {
  width: 150px;
  height: 150px;
}
@media screen and (min-width: 768px) {
  .toss-result-img {
    width: 250px;
    height: 250px;
  }
}
.button {
  background-color: #ffda6f;
  color: #a35200;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  outline: none;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .button {
    margin-top: 32px;
  }
}
.counts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
@media screen and (min-width: 768px) {
  .counts-container {
    margin-top: 32px;
  }
}
@media screen and (min-width: 768px) {
  .counts-container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
}
.count {
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
  margin-right: 24px;
}
