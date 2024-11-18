import { BaseTileProps } from '../../types/types'
import { square, waterMaterial } from './shared'

export default function Water({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={waterMaterial} {...p} />
}
