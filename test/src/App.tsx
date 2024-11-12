import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ReactNode, useRef } from 'react'
import GenerateGrid from './components/GenerateGrid'
import CubeGrid from './components/CubeGrid'

type CameraMovementProps = {
  children: ReactNode
}

function CameraMovement({ children }: CameraMovementProps) {
  const { pointer } = useThree()
  const cam = useRef<THREE.Group>(null)

  useFrame(() => {
    if (cam.current) {
      const targetX = pointer.x * 2
      const targetY = pointer.y * 2

      cam.current.position.x += (targetX - cam.current.position.x) * 0.05
      cam.current.position.y += (targetY - cam.current.position.y) * 0.05
    }
  })

  return <group ref={cam}>{children}</group>
}

function App() {
  const SIZE_NUMBER = 40
  const SIZE_HEIGHT = 20

  function generateLevelsMap() {
    const rows = SIZE_NUMBER
    const cols = SIZE_NUMBER
    const levelsMap = Array.from({ length: rows }, (_, rowIndex) => {
      if (rowIndex < 1) {
        return [...Array(cols).fill(SIZE_HEIGHT)]
      } else if (rowIndex < 8) {
        return [
          ...Array(1).fill(SIZE_HEIGHT),
          ...Array(20).fill(2),
          ...Array(9).fill(0),
          ...Array(10).fill(2),
        ]
      } else if (rowIndex < 24) {
        return [...Array(1).fill(SIZE_HEIGHT), ...Array(39).fill(2)]
      } else if (rowIndex < 35) {
        return [
          ...Array(1).fill(SIZE_HEIGHT),
          ...Array(17).fill(5),
          ...Array(22).fill(1),
        ]
      } else if (rowIndex <= 40) {
        return [
          ...Array(1).fill(SIZE_HEIGHT),
          ...Array(13).fill(5),
          ...Array(2).fill(4),
          ...Array(2).fill(3),
          ...Array(2).fill(2),
          ...Array(23).fill(1),
        ]
      } else {
        return Array(cols).fill(1)
      }
    })

    return levelsMap
  }

  const levelsMap = generateLevelsMap()

  return (
    <div className='h-full'>
      {location.href.includes('generate') ? (
        <GenerateGrid />
      ) : (
        <Canvas camera={{ fov: 60, position: [0, 0, 20] }}>
          <OrbitControls />
          <CameraMovement>
            <mesh>
              <CubeGrid
                size={SIZE_NUMBER}
                spacing={1.05}
                levelsMap={levelsMap}
              />
              <meshNormalMaterial />
            </mesh>
          </CameraMovement>
          <ambientLight intensity={2} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      )}
    </div>
  )
}

export default App
