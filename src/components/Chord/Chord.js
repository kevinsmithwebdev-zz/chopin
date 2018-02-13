import React from 'react'

import { chords, chordStr, notes } from '../../assets/constants/music'

import './Chord.css'

const Chord = ({ root, chord }) => {

  return (
    <div className="chord">

      <span className="chord_label">
        Currently selected chord:
      </span>
      &nbsp;
      <span className="chord_name">
        { chordStr(notes[root], chords[chord].symbol) }
      </span>

    </div>
  )
}

export default Chord
