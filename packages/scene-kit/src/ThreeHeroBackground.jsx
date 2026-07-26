import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeHeroBackground({
  className = '',
  particleColor = '#8b5cf6',
  particleSize = 0.08,
  haloColor = '#3b82f6',
  primaryHaloOpacity = 0.1,
  secondaryHaloColor = '#c4b5fd',
  secondaryHaloOpacity = 0.14,
  density = 1,
  speed = 1,
  fieldWidth = 36,
  fieldHeight = 16,
  fieldDepth = 24,
  primaryHaloPosition = [8, 0.6, -2],
  secondaryHaloPosition = [-6.5, -1.4, -4],
  seed = null,
}) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const clock = new THREE.Clock()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 22

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    host.appendChild(renderer.domElement)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const baseCount = reduceMotion ? 200 : 500
    const particleCount = Math.max(120, Math.floor(baseCount * density))
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const phases = new Float32Array(particleCount)
    const halfWidth = fieldWidth * 0.5
    const halfHeight = fieldHeight * 0.5
    const halfDepth = fieldDepth * 0.5
    const random = (() => {
      if (typeof seed !== 'number') return Math.random
      let state = (seed >>> 0) || 1
      return () => {
        state = (state * 1664525 + 1013904223) >>> 0
        return state / 4294967296
      }
    })()

    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (random() - 0.5) * fieldWidth
      positions[i * 3 + 1] = (random() - 0.5) * fieldHeight
      positions[i * 3 + 2] = (random() - 0.5) * fieldDepth
      velocities[i * 3] = (random() - 0.5) * 0.9
      velocities[i * 3 + 1] = (random() - 0.5) * 0.7
      velocities[i * 3 + 2] = (random() - 0.5) * 0.5
      phases[i] = random() * Math.PI * 2
    }

    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const positionAttribute = pointsGeometry.getAttribute('position')

    const pointsMaterial = new THREE.PointsMaterial({
      size: particleSize,
      color: new THREE.Color(particleColor),
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(points)

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(4.8, 36, 36),
      new THREE.MeshBasicMaterial({
        color: haloColor,
        transparent: true,
        opacity: primaryHaloOpacity,
        wireframe: true,
      }),
    )
    halo.position.set(primaryHaloPosition[0], primaryHaloPosition[1], primaryHaloPosition[2])
    scene.add(halo)

    const accentHalo = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 28, 28),
      new THREE.MeshBasicMaterial({
        color: secondaryHaloColor,
        transparent: true,
        opacity: secondaryHaloOpacity,
        wireframe: true,
      }),
    )
    accentHalo.position.set(secondaryHaloPosition[0], secondaryHaloPosition[1], secondaryHaloPosition[2])
    scene.add(accentHalo)

    const resize = () => {
      const width = host.clientWidth || 1
      const height = host.clientHeight || 1
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)
    const observer = new ResizeObserver(resize)
    observer.observe(host)

    let frame = 0
    let isVisible = document.visibilityState === 'visible'
    const onVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const primaryBaseX = primaryHaloPosition[0]
    const primaryBaseY = primaryHaloPosition[1]
    const primaryBaseZ = primaryHaloPosition[2]
    const secondaryBaseX = secondaryHaloPosition[0]
    const secondaryBaseY = secondaryHaloPosition[1]
    const secondaryBaseZ = secondaryHaloPosition[2]

    const animate = () => {
      if (!isVisible) return
      const dt = Math.min(clock.getDelta(), 0.05)
      frame += dt * 60
      const rotationScale = (reduceMotion ? 0.35 : 1) * speed

      for (let i = 0; i < particleCount; i += 1) {
        const idx = i * 3
        positions[idx] += velocities[idx] * dt * 2.6 * rotationScale
        positions[idx + 1] += velocities[idx + 1] * dt * 2.2 * rotationScale + Math.sin(frame * 0.02 + phases[i]) * dt * 0.5
        positions[idx + 2] += velocities[idx + 2] * dt * 1.8 * rotationScale

        if (positions[idx] > halfWidth) positions[idx] = -halfWidth
        else if (positions[idx] < -halfWidth) positions[idx] = halfWidth
        if (positions[idx + 1] > halfHeight) positions[idx + 1] = -halfHeight
        else if (positions[idx + 1] < -halfHeight) positions[idx + 1] = halfHeight
        if (positions[idx + 2] > halfDepth) positions[idx + 2] = -halfDepth
        else if (positions[idx + 2] < -halfDepth) positions[idx + 2] = halfDepth
      }
      positionAttribute.needsUpdate = true

      points.rotation.y += dt * 0.054 * rotationScale
      points.rotation.x = Math.sin(frame * 0.003) * (reduceMotion ? 0.03 : 0.08)
      pointsMaterial.opacity = 0.55 + Math.sin(frame * 0.01) * 0.16

      // Slow cinematic drift so spheres float across and in/out of depth.
      halo.position.x = primaryBaseX + Math.sin(frame * 0.0045) * 5.2
      halo.position.y = primaryBaseY + Math.sin(frame * 0.0065) * 1.2
      halo.position.z = primaryBaseZ + Math.cos(frame * 0.0038) * 2.4
      halo.rotation.y -= dt * 0.12 * rotationScale
      halo.rotation.z += dt * 0.06 * rotationScale

      accentHalo.position.x = secondaryBaseX + Math.cos(frame * 0.0042) * 4.6
      accentHalo.position.y = secondaryBaseY + Math.sin(frame * 0.0068) * 1.1
      accentHalo.position.z = secondaryBaseZ + Math.sin(frame * 0.0034) * 2.1
      accentHalo.rotation.y += dt * 0.07 * rotationScale
      accentHalo.rotation.x -= dt * 0.04 * rotationScale
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    return () => {
      renderer.setAnimationLoop(null)
      window.removeEventListener('resize', resize)
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      pointsGeometry.dispose()
      pointsMaterial.dispose()
      halo.geometry.dispose()
      halo.material.dispose()
      accentHalo.geometry.dispose()
      accentHalo.material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
    }
  }, [
    density,
    fieldDepth,
    fieldHeight,
    fieldWidth,
    haloColor,
    particleSize,
    primaryHaloOpacity,
    particleColor,
    primaryHaloPosition,
    secondaryHaloColor,
    secondaryHaloOpacity,
    secondaryHaloPosition,
    speed,
    seed,
  ])

  return <div className={className} ref={hostRef} />
}
