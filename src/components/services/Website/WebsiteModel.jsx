import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function WebsiteModel(props) {
  const { nodes, materials } = useGLTF('/websiteModel.glb')
  const meshRef = useRef()

  // Rotate the object on the Y-axis
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.02 // Adjust speed here
    }
  })

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          ref={meshRef}
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials.Material}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={[0.4, 0.4, 0.4]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/websiteModel.glb')
