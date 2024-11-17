import getMap from '../lib/map'
import { TileType } from '../lib/types'
import constructions from './tiles/constructions'
import { spacing, xSize } from './tiles/shared'

function BaseGenerator(props: { tiles: ReturnType<typeof getMap> }) {
	return [
		...(props.tiles.entries() as unknown as [
			string,
			{
				position: [number, number, number]
				type: TileType
			}
		][]),
	].map(([key, value]) => {
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
				return null
		}
	})
}

export default BaseGenerator
