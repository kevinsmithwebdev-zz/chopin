import React from 'react'

import { chords, notes } from '../../assets/constants/music'

import './Select.css'

class Select extends React.Component {

  handleRootChange(e) {
    this.props.handleRootChange(+e.target.value)
  }
  handleChordChange(e) {
    this.props.handleChordChange(+e.target.value)
  }
  handleNumNotesChange(e) {

    let prop = 'numNotes' + e.target.value

    if (!(this.props[prop] && !( this.props.numNotesThree && this.props.numNotesFour)))
      this.props.handleNumNotesChange(prop)

  }

  render() {

    const radioButton = (opt, label, onChange, current) => {

      let isSelected = (typeof(current) === 'boolean') ? current : current === opt

      return (
        <div className="select_radio" key={opt}>
          <input
            type="radio"
            value={opt}
            checked={isSelected}
            onChange={onChange}
          />
          {label}
        </div>
      )
    }

    const renderRoots = notes.map((note, idx) => {
      return radioButton(idx, note, this.handleRootChange.bind(this), this.props.root)
    })
    const renderChords = chords.map((chord, idx) => {
      return radioButton(idx, chord.symbol, this.handleChordChange.bind(this), this.props.chord)
    })

    return (
      <div className="select">

        <div className="select_notes">
          <div className="select_subtitle">
            Select a Root
          </div>
          <div className="select_root_box">
            { renderRoots }
          </div>
        </div>

        <div className="select_chords">
          <div className="select_subtitle">
            Select a Chord Quality
          </div>
          <div className="select_chords_box">
            { renderChords }
          </div>
        </div>
        
      </div>

    )
  }
}

export default Select
