import React from 'react'

import Header from './Header/Header'
import Select from './Select/Select'
import Chord from './Chord/Chord'
import Matches from './Matches/Matches'

import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      root: 0,
      chord: 0
    }
  }

  handleRootChange(root) {
    this.setState({ root })
  }

  handleChordChange(chord) {
    this.setState({ chord })
  }

  render() {
    return (
      <div className="page">
        <Header />
        <Select
          root={this.state.root}
          chord={this.state.chord}
          handleRootChange={this.handleRootChange.bind(this)}
          handleChordChange={this.handleChordChange.bind(this)}
        />
        <Chord root={this.state.root} chord={this.state.chord } />
        <Matches
          root={this.state.root}
          chord={this.state.chord}
          handleRootChange={this.handleRootChange.bind(this)}
          handleChordChange={this.handleChordChange.bind(this)}
        />
      </div>
    )
  }
}

export default App
