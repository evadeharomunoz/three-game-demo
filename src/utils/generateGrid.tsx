type Props = {
	row?: number
	col?: number
	tileSize?: number
}

export default function generateNormalGrid({ row = 25, col = 25, tileSize = 20 }: Partial<Props>) {
	const arrayPosiciones = []
	console.log('Props?', row, col, tileSize)
	for (let x = 0; x < tileSize * row; x += 20) {
		for (let y = 0; y < tileSize * col; y += 20) {
			arrayPosiciones.push({ x: x, y: y })
		}
	}
	return arrayPosiciones
}
