import getMap from '../map'
const map = getMap()
export default function validateMovement(current: [number, number, number], future: [number, number, number]) {
	const nextTile = map.get(future.join('-'))
	// console.log('Next tile', nextTile, future, map, future.join('-'))
	if (nextTile?.type === 'void' || nextTile?.type === 'water' || nextTile?.type === 'construction') {
		return current
	}
	return future
}
