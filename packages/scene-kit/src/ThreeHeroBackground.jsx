import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeHeroBackground({ className = '', particleColor = '#8b5cf6', haloColor = '#3b82f6' }) {
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
    const particleCount = reduceMotion ? 200 : 500
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 36
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24
    }

    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: new THREE.Color(particleColor),
      transparent: true,
      opacity: 0.8,
    })
    const points = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(points)

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(4.8, 36, 36),
      new THREE.MeshBasicMaterial({
        color: haloColor,
        transparent: true,
        opacity: 0.1,
        wireframe: true,
      }),
    )
    halo.position.set(8, 0.6, -2)
    scene.add(halo)

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

    const animate = () => {
      if (!isVisible) return
      const dt = Math.min(clock.getDelta(), 0.05)
      frame += dt * 60
      const rotationScale = reduceMotion ? 0.35 : 1
      points.rotation.y += dt * 0.054 * rotationScale
      points.rotation.x = Math.sin(frame * 0.003) * (reduceMotion ? 0.03 : 0.08)
      halo.rotation.y -= dt * 0.12 * rotationScale
      halo.rotation.z += dt * 0.06 * rotationScale
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
      renderer.dispose()
      if (renderer.domElement.parentNode === host) host.removeChild(renderer.domElement)
    }
  }, [haloColor, particleColor])

  return <div className={className} ref={hostRef} />
}
