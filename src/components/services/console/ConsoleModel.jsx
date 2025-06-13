import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/consoleModel.glb')

  // Render all mesh nodes dynamically
  const meshes = Object.entries(nodes)
    .filter(([_, node]) => node.isMesh) // Only include mesh nodes
    .map(([key, node], index) => {
      // Clone the material and reduce brightness by darkening the color
      const originalMaterial = materials[node.material?.name] || materials.Material
      const darkenedMaterial = originalMaterial.clone()
      if (darkenedMaterial.color) {
        darkenedMaterial.color.multiplyScalar(0.1) // Reduce brightness (0.7 = 70% of original)
      }

      return (
        <mesh
          key={key}
          geometry={node.geometry}
          material={darkenedMaterial} // Use darkened material
          position={node.position ? [node.position.x, node.position.y, node.position.z] : [0, 0, 0]}
          rotation={node.rotation ? [node.rotation.x, node.rotation.y, node.rotation.z] : [0, 0, 0]}
          scale={node.scale ? [node.scale.x, node.scale.y, node.scale.z] : 80} // Use node scale or fallback to 100
        />
      )
    })

  return (
    <group {...props} dispose={null} rotation={[Math.PI,0, 0]}> {/* Flip upside down with 180-degree Y rotation */}
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.0}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {meshes}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/consoleModel.glb')