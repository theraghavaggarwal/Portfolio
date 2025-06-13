import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { WebsiteModel } from './WebsiteModel'

export default function WebsiteModelContainer() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <WebsiteModel />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  )
}