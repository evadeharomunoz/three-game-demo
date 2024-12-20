import { BaseTileProps } from '../../types/types'
import { eventMaterial, square } from './shared'

export default function Event({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={eventMaterial} {...p} />
}
