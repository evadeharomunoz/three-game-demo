import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import BaseGenerator from './components/BaseGenerator'
import { useEffect, useMemo, useState } from 'react'
import getMap from './lib/map'
import User from './components/tiles/User'

import validateMovement from './lib/utils/validateMovement'
import BigRectangle from './components/tiles/constructions/BigRectangle'

function App() {
	const tiles = useMemo(() => getMap(), [])
	const [position, setPosition] = useState([13, 2, 0] satisfies [number, number, number])
	function handleMovement(e: KeyboardEvent) {
		switch (e.key) {
			case 'd':
				setPosition(([x, , z]) => {
					return validateMovement([x, 0, z], [x + 1, 0, z])
				})
				return
			case 'w':
				setPosition(([x, , z]) => {
					return validateMovement([x, 0, z], [x, 0, z - 1])
				})
				return
			case 'a':
				setPosition(([x, , z]) => {
					return validateMovement([x, 0, z], [x - 1, 0, z])
				})
				return
			case 's':
				setPosition(([x, , z]) => {
					return validateMovement([x, 0, z], [x, 0, z + 1])
				})
		}
	}
	useEffect(() => {
		window.addEventListener('keydown', handleMovement)
		return () => window.removeEventListener('keydown', handleMovement)
	}, [])
	return (
		<div className='h-full'>
			<Canvas camera={{ fov: 60, position: [-38.45243352252325, 97.74725408686916, -30.143349919091854], rotation: [-2.1918054491040944, -0.6082134779972862, -2.467657308228318] }}>
				<OrbitControls />
				{/* <CameraMovement> */}
				<>
					<BaseGenerator tiles={tiles} />
					<User position={position} />
					{/* <Water position={[0, 0, 0]} />
						<CloseWater position={[6, 0, 6]} />
						<Construction position={[6, 0, 0]} />
						<Tile position={[0, 0, 6]} />
						<Event position={[12, 0, 0]} />
						<Void position={[12, 0, 6]} /> */}
					<BigRectangle />
				</>
				{/* </CameraMovement> */}
				<ambientLight intensity={2} />
				<pointLight position={[10, 10, 10]} />
			</Canvas>
		</div>
	)
}

export default App
