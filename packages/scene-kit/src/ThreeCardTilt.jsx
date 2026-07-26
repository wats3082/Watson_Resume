import { useMemo } from 'react'

export function ThreeCardTilt({ children, maxTilt = 10, className = '' }) {
  const canTilt =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handlers = useMemo(
    () => ({
      onPointerMove: (event) => {
        if (!canTilt) return
        const element = event.currentTarget
        const rect = element.getBoundingClientRect()
        const px = (event.clientX - rect.left) / rect.width
        const py = (event.clientY - rect.top) / rect.height
        const rx = (0.5 - py) * maxTilt
        const ry = (px - 0.5) * maxTilt
        element.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`
      },
      onPointerLeave: (event) => {
        event.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
      },
      onFocus: (event) => {
        if (!canTilt) return
        event.currentTarget.style.transform = 'perspective(900px) rotateX(2deg) rotateY(-2deg)'
      },
      onBlur: (event) => {
        event.currentTarget.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
      },
    }),
    [canTilt, maxTilt],
  )

  return (
    <div className={className} {...handlers}>
      {children}
    </div>
  )
}
