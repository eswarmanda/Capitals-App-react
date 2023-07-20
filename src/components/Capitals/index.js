import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  isCapitalClicked = event => {
    console.log(event.target.value)
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const findOption = countryAndCapitalsList.find(
      eachObj => eachObj.id === activeCapitalId,
    )
    return findOption.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)

    return (
      <div className="main-cont">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="question-card">
            <div className="">
              <select
                className="select-list"
                onChange={this.isCapitalClicked}
                value={activeCapitalId}
              >
                {countryAndCapitalsList.map(eachObj => (
                  <option
                    className="option-card"
                    key={eachObj.id}
                    value={eachObj.id}
                  >
                    {eachObj.capitalDisplayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="p">
              <p>is capital of which country</p>
            </div>
          </div>
          <div className="country-card">
            <h2>{country}</h2>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
