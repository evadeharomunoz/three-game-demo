import { BaseTileProps } from '../../lib/types'
import { square, waterMaterial } from './shared'

export default function Water({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={waterMaterial} {...p} />
}
