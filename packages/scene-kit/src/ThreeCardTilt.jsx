import { useMemo } from 'react'

export function ThreeCardTilt({ children, maxTilt = 10, className = '' }) {
  const handlers = useMemo(
    () => ({
      onMouseMove: (event) => {
        const element = event.currentTarget
        const rect = element.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height
        const rx = (0.5 - py) * maxTilt
        const ry = (px - 0.5) * maxTilt
        element.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`
      },
      onMouseLeave: (event) => {
        event.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
      },
    }),
    [maxTilt],
  )

  return (
    <div className={className} {...handlers}>
      {children}
    </div>
  )
}
