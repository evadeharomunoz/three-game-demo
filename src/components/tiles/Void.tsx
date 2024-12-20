import { BaseTileProps } from '../../types/types'
import { square, voidMaterial } from './shared'

export default function Void({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={voidMaterial} {...p} />
}
