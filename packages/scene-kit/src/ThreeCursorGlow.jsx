import { useEffect, useRef } from 'react'

export function ThreeCursorGlow({ color = '99,102,241' }) {
  const glowRef = useRef(null)

  useEffect(() => {
    const element = glowRef.current
    if (!element) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const supportsPointer = window.matchMedia('(pointer: fine)').matches
    if (!supportsPointer || reduceMotion) {
      element.style.display = 'none'
      return undefined
    }

    let animationId = 0
    let currentX = window.innerWidth * 0.5 - 120
    let currentY = window.innerHeight * 0.5 - 120
    let targetX = currentX
    let targetY = currentY

    const tick = () => {
      currentX += (targetX - currentX) * 0.24
      currentY += (targetY - currentY) * 0.24
      element.style.transform = `translate(${currentX}px, ${currentY}px)`
      animationId = window.requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      targetX = event.clientX - 120
      targetY = event.clientY - 120
    }

    animationId = window.requestAnimationFrame(tick)
    window.addEventListener('pointermove', onMove)
    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', onMove)
    }
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
