import { useState } from 'react'
import './App.css'

const cards = [
  {
    id: 'dreamscape',
    title: 'Dreamscape',
    description: 'Soft hills and star paths shimmer in the mist.',
  },
  {
    id: 'all-seeing',
    title: 'All-Seeing',
    description: 'A calm gaze that keeps the world in balance.',
  },
  {
    id: 'wanderer',
    title: 'Wanderer',
    description: 'A tiny traveler on a dark, glowing tile.',
  },
]

export default function App() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className='stage'>
      <div className='board'>
        <header className='board-header'>
          <p className='eyebrow'>Silly Prototype</p>
          <h1>Dream Board</h1>
          <p>
            Choose a card to begin the Red Balloon scene. Drop your movie file at
            <span className='filename'> /public/red-balloon.mp4</span>.
          </p>
        </header>

        <section className='card-row'>
          {cards.map(card => (
            <button
              key={card.id}
              type='button'
              className={`dream-card dream-card--${card.id}`}
              onClick={() => setActiveCard(card)}
            >
              <span className='card-glow' aria-hidden='true' />
              <span className='card-art' aria-hidden='true' />
              <span className='card-copy'>
                <span className='card-title'>{card.title}</span>
                <span className='card-desc'>{card.description}</span>
              </span>
              <span className='card-cta'>Play Red Balloon</span>
            </button>
          ))}
        </section>
      </div>

      {activeCard ? (
        <div className='modal' role='dialog' aria-modal='true'>
          <div className='modal-surface'>
            <div className='modal-header'>
              <div>
                <p className='eyebrow'>Now playing</p>
                <h2>{activeCard.title}</h2>
              </div>
              <button type='button' className='close-btn' onClick={() => setActiveCard(null)}>
                Close
              </button>
            </div>
            <video className='player' controls autoPlay playsInline>
              <source src='/red-balloon.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : null}
    </div>
  )
}
