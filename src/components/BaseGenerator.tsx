import getMap from '../lib/map'
import { TileType } from '../types/types';
import constructions from './tiles/constructions'
import { spacing, xSize } from './tiles/shared'

function BaseGenerator(props: { tiles: ReturnType<typeof getMap>; map: ReturnType<typeof getMap>; setMap: React.Dispatch<React.SetStateAction<ReturnType<typeof getMap>>> }) {
	return [
		...(props.tiles.entries() as unknown as [
			string,
			{
				position: [number, number, number]
				type: TileType
			}
		][]),
	].map(([key, value]) => {
		// function onClick() {
		// 	const newMap = new Map(props.map)
		// 	newMap.set(key, { type: 'simple_tile', position: value.position })
		// 	props.setMap(newMap)
		// 	console.log('newMap', newMap)
		// }
    
		if (typeof key !== 'string') return null
		const position = value.position.map((el) => el * xSize * spacing) as [number, number, number]
		switch (value.type) {
			case 'void':
				return constructions['void']({ position, key })
			case 'simple_tile':
				return constructions['tile']({ position, key })
			case 'event':
				return constructions['event']({ position, key })
			case 'water':
				return constructions['water']({ position, key })
			case 'close_water':
				return constructions['closeWater']({ position, key })
			case 'construction':
				return constructions['construction']({ position, key })
		}
	})
}

export default BaseGenerator