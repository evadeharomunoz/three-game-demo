import { circle, spacing, userMaterial, xSize, zSize } from './shared'

type Props = {
	position: [number, number, number]
}
// TODO: Probably more optimal to pass it a separate props? Maybe just use a vector3?
export default function User({ position }: Props) {
	const [x, y, z] = position
	return <mesh position={[x * xSize * spacing, y, z * zSize * spacing]} geometry={circle} material={userMaterial} castShadow />
}
