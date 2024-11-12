import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ReactNode, useRef } from 'react'
import GenerateGrid from './components/GenerateGrid'

type CameraMovementProps = {
	children: ReactNode
}

function CameraMovement({ children }: CameraMovementProps) {
	const { pointer } = useThree()
	const vec = new THREE.Vector3()
	const cam = useRef<THREE.Group>(null)

	useFrame(() => {
		cam.current?.position.lerp(vec.set(pointer.x * -0.001, pointer.y * -0.001, 0), -0.001)
	})

	return <group ref={cam}>{children}</group>
}

function App() {
	return (
		<div>
			{location.href.includes('generate') ? (
				<GenerateGrid />
			) : (
				<Canvas camera={{ fov: 60, position: [0, 0, 20] }}>
					<OrbitControls />
					<CameraMovement>
						<mesh>
							<boxGeometry args={[5, 5, 5]} />
							<meshStandardMaterial color='orange' />
						</mesh>
					</CameraMovement>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
				</Canvas>
			)}
		</div>
	)
}

export default App
