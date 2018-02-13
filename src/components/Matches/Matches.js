import React from 'react'

import { chordStr, chords, notes, NUM_NOTES, SCORE_FACTOR } from '../../assets/constants/music'

import './Matches.css'

const regNote = note => (note<0) ? note+NUM_NOTES : note % NUM_NOTES

const Matches = ({ chord, root, handleRootChange, handleChordChange }) => {

  const startRoot = root
  const startChordNum = chord

  const generateDistArr = (root, chordNum) => {

    const chord = chords[chordNum]
    const notes = chord.notes.map((n) => regNote(root+n))

    let arr = new Array(NUM_NOTES).fill(NUM_NOTES)

    for (let i=0; i<NUM_NOTES; i++) {
      if (notes.includes(i))
        arr[i]=0
      else
        for (var j=1; j<=Math.ceil(NUM_NOTES/2); j++)
          if (notes.includes(regNote(i+j)) || notes.includes(regNote(i-j))) {
            arr[i]=j
            break
          }
    }
    return arr
  }



  const distArr = generateDistArr(startRoot, startChordNum )

  let chordScores = []

  for (let r=0; r<notes.length; r++) {
    for (let c=0; c<chords.length; c++) {
      if (r===startRoot && c === startChordNum)
        continue
      const endChord = chords[c]
      const endRoot = r
      const endNotes = endChord.notes.map((n) => regNote(endRoot+n))
      const scores = endNotes.map((n) => distArr[n])
      chordScores.push({
        root: r,
        chord: c,
        scores: scores,
        score: Math.round(10*scores.reduce(function(acc, cur, idx) {
          return acc + Math.pow(NUM_NOTES/2-cur, SCORE_FACTOR);
        }, 0))/10
      })
    }
  }

  chordScores.sort(() => .5 - Math.random()).sort((a, b) => b.score - a.score)

  const renderScoreBox = (idx, chord, score, d0, d1, d2, d3, scoreObj) => {

    const chordSelect = (e) => {
      e.preventDefault()
      handleRootChange(scoreObj.root)
      handleChordChange(scoreObj.chord)
    }

    return (
      <div key={idx} className='matches_score'>
        {
          idx===-1
            ? <span className='matches_score_chord'>{chord}</span>
            : <button
                className='matches_score_chord'
                onClick={chordSelect.bind(this)}
                value={scoreObj}
              >
                {chord}
              </button>
        }
        <span className='matches_score_score'>{score}</span>
        <span className='matches_score_d'>{d0}</span>
        <span className='matches_score_d'>{d1}</span>
        <span className='matches_score_d'>{d2}</span>
        <span className='matches_score_d'>{d3}</span>
      </div>
    )
  }

  const renderTitleBar = renderScoreBox(
    -1,
    "Chord",
    "Score",
    "D0",
    "D1",
    "D2",
    "D3"
  )

  const renderScores = chordScores.map((score, idx) => {

    const dist = (d) => {

      let count = 0
      for (let s of score.scores) {
        if (s===d)
          count++
      }
      return count;
    }

    return renderScoreBox(
      idx,
      chordStr(notes[score.root], chords[score.chord].symbol),
      score.score,
      dist(0),
      dist(1),
      dist(2),
      dist(3),
      score
    )
  })

  return (
    <div className="matches">

      { renderTitleBar }

      { renderScores }

    </div>
  )
}

export default Matches
