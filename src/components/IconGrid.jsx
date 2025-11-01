import React from 'react'

/**
 * IconGrid shows icons located in public/pexelicons/
 * Update the icons array with actual filenames you copied into public/pexelicons.
 */

const icons = [
  '/pexelicons/icon1.svg',
  '/pexelicons/icon2.svg',
  '/pexelicons/icon3.svg',
  '/pexelicons/icon4.svg',
  '/pexelicons/icon5.svg',
  '/pexelicons/icon6.svg'
]

export default function IconGrid() {
  return (
    <div id="icons" className="icon-grid">
      {icons.map((src, i) => (
        <div key={i} className="icon-card" style={{ ['--i']: `${i}` }}>
          <div className="icon-inner">
            <img src={src} alt={`icon-${i}`} loading="lazy" />
          </div>
          <div className="icon-label">Icon {i + 1}</div>
        </div>
      ))}
    </div>
  )
}
