import { useEffect, useRef } from 'react'

export function ThreeCursorGlow({ color = '99,102,241' }) {
  const glowRef = useRef(null)

  useEffect(() => {
    const element = glowRef.current
    if (!element) return undefined

    const onMove = (event) => {
      element.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 240,
        height: 240,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(${color},0.22) 0%, rgba(${color},0) 72%)`,
        filter: 'blur(12px)',
        zIndex: 0,
        transition: 'transform 60ms linear',
      }}
    />
  )
}
