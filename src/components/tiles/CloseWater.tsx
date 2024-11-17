import { BaseTileProps } from '../../lib/types'
import { close_waterMaterial, square } from './shared'

export default function CloseWater({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={close_waterMaterial} {...p} />
}
