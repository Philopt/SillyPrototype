import React, { useState } from 'react'
import './index.css'

const rows = ['Role', 'Persona', 'Core']
const cols = ['Ordinary', 'Crisis (Now)', 'Transformed']

function StatCell({ value, onClick }) {
  const color = value > 0 ? 'text-green-600' : value < 0 ? 'text-red-600' : 'text-gray-800'
  return (
    <button
      className={`w-20 h-20 border flex items-center justify-center ${color}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default function App() {
  const initial = Array.from({ length: 3 }, () => Array(3).fill(0))
  const [grid, setGrid] = useState(initial)

  const cycleValue = (r, c) => {
    setGrid(prev =>
      prev.map((row, ri) =>
        row.map((val, ci) => {
          if (ri === r && ci === c) {
            const next = val + 1
            return next > 3 ? -3 : next
          }
          return val
        })
      )
    )
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Silly Lab: Stat Grid Simulator</h1>
      <div className='grid grid-cols-4 gap-2'>
        <div></div>
        {cols.map(col => (
          <div key={col} className='text-center font-semibold'>{col}</div>
        ))}
        {rows.map((rowLabel, r) => (
          <React.Fragment key={rowLabel}>
            <div className='font-semibold flex items-center'>{rowLabel}</div>
            {grid[r].map((val, c) => (
              <StatCell key={c} value={val} onClick={() => cycleValue(r, c)} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
