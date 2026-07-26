import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeHeroBackground({ className = '', particleColor = '#8b5cf6', haloColor = '#3b82f6' }) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 22

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

    let frame = 0
    let animationId = 0
    const animate = () => {
      frame += 1
      points.rotation.y += reduceMotion ? 0.00035 : 0.0009
      points.rotation.x = Math.sin(frame * 0.003) * (reduceMotion ? 0.03 : 0.08)
      halo.rotation.y -= reduceMotion ? 0.0007 : 0.002
      halo.rotation.z += reduceMotion ? 0.0004 : 0.001
      renderer.render(scene, camera)
      animationId = window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
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
