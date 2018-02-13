import React from 'react'

import './Header.css'

const expText = "Chopin used a technique of moving between chords that didn't depend on functional harmony but on chromatic closeness. " +
  "The chords would gently fold chromatically into each other, and it \"worked\" because the chords shared notes in common and the other notes voice led gracefully. " +
  "I've also seen a few jazz compositions that work similarly. " +
  "This app was made to make it easy to find chords that share a lot in common with the starting chord. " +
  "The D0 column tells how many notes are in common, D1 how many are one semi-tone away, etc. " +
  "The \"score\" is a measure of the \"closeness\" of the two chords, with the D0 score weighted more heavily than the D1, etc."


class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showExp: false
    }
  }

  handleExplanation() {
    this.setState({ showExp: !this.state.showExp })
  }

  render() {

    return (
      <header>
        <div className="title">
          Chopin - Chord Proximity Generator
        </div>

        <div className="subtitle">
          ©2018 kevinsmithwebdev.com
          <span
            className="exp-btn"
            onClick={this.handleExplanation.bind(this)}
          >
            Explanation?
          </span>
        </div>

        <div className={this.state.showExp ? "explanation-show" : "explanation-noshow"}>
          { expText }
        </div>

      </header>
    )
  }
}

export default Header
