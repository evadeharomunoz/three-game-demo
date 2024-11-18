import { constructionMaterial, spacing, xSize, zSize } from '../shared'

export default function BigRectangle() {
	return (
		<group position={[5 * xSize + spacing, 0, 6 * zSize * spacing]}>
			<mesh material={constructionMaterial} position={[3 * spacing, 2 * spacing, 3 * spacing + 2]}>
				<boxGeometry args={[2 * xSize * spacing, 4 * spacing, 3 * zSize * spacing]} />
			</mesh>
		</group>
	)
}
