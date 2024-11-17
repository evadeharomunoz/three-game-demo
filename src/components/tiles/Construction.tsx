import { BaseTileProps } from '../../lib/types'
import { constructionMaterial, square } from './shared'

export default function Construction({ ...p }: BaseTileProps) {
	return null
	return <mesh geometry={square} material={constructionMaterial} {...p} />
}
