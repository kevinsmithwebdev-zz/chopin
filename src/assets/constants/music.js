import React from 'react'

export const NUM_NOTES = 12

export const SCORE_FACTOR = 1.5

export const chords = [
  {
    name: 'major',
    symbol: '△',
    notes: [0, 4, 7]
  },
  {
    name: 'minor',
    symbol: 'm',
    notes: [0, 3, 7]
  },
  {
    name: 'augmented',
    symbol: '+',
    notes: [0, 4, 8]
  },
  {
    name: 'diminished',
    symbol: '°',
    notes: [0, 3, 6]
  },



  {
    name: 'major 7th',
    symbol: '△7',
    notes: [0, 4, 7, 11]
  },
  {
    name: 'major 7th #5',
    symbol: '△7#5',
    notes: [0, 4, 8, 11]
  },
  {
    name: 'major 7th b5',
    symbol: '△7b5',
    notes: [0, 4, 6, 11]
  },

  {
    name: 'dominant 7th',
    symbol: '7',
    notes: [0, 4, 7, 10]
  },
  {
    name: 'dominant 7th #5',
    symbol: '7#5',
    notes: [0, 4, 8, 10]
  },
  {
    name: 'dominant 7th b5',
    symbol: '7b5',
    notes: [0, 4, 6, 10]
  },

  {
    name: 'minor 7th',
    symbol: 'm7',
    notes: [0, 3, 7, 10]
  },
  {
    name: 'minor-major7th',
    symbol: 'm△7',
    notes: [0, 3, 7, 11]
  },
  {
    name: 'minor 7th #5',
    symbol: 'm7#5',
    notes: [0, 3, 8, 11]
  },

  {
    name: 'half-diminished 7th',
    symbol: 'ø7',
    notes: [0, 3, 6, 10]
  },
  {
    name: 'diminshed-major7th',
    symbol: '°△7',
    notes: [0, 3, 7, 11]
  }
]

export const notes = [
  'C',
  'C#/Db',
  'D',
  'D#/Eb',
  'E',
  'F',
  'F#/Gb',
  'G',
  'G#/Ab',
  'A',
  'A#/Bb',
  'B'
]

export const chordStr = (root, symbol) => {
  let i = root.indexOf('/')
  if (i===-1)
    return <span className='matches_score_chord_name'>{root + symbol}</span>
  else
    return (
      <React.Fragment>
        <span className='matches_score_chord_name'>{root.substr(0, i) + symbol}</span>
        {" / "}
        <span className='matches_score_chord_name'>{root.substr(i+1) + symbol}</span>
      </React.Fragment>
    )
}
