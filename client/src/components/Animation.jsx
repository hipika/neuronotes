import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const BrainModel = () => {
  const brain = useGLTF('/brain_hologram.glb') // model should be in public folder
  return <primitive object={brain.scene} scale={2}/>
}

const Animation = () => {
  return (
    <Canvas style={{ background: '#0f0f0f' }}  camera={{ position: [0, 0, 5], fov: 90 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2}/>
      <directionalLight position={[-5, -5, -5]} intensity={1} />
      <Suspense fallback={null}>
        <BrainModel />
        <OrbitControls enableZoom={true} />
      </Suspense>
    </Canvas>
  )
}

export default Animation
