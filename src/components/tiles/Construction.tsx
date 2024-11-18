import { BaseTileProps } from '../../types/types'
import { constructionMaterial, square } from './shared'

export default function Construction({ ...p }: BaseTileProps) {
	return <mesh geometry={square} material={constructionMaterial} {...p} />
}
