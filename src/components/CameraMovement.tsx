import { useFrame, useThree } from '@react-three/fiber'
import { ReactNode, useRef } from 'react'
import * as THREE from 'three'

type CameraMovementProps = {
	children: ReactNode
  }
  
  export default function CameraMovement({ children }: CameraMovementProps) {
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