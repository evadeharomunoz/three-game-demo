import { constructionMaterial, eventMaterial, material, waterMaterial } from '../materials'
import { TileInformation, TilesNumbers, TileType } from '../types'

export default function getTileInformation(tile: TilesNumbers | TileType): Pick<TileInformation, 'type' | 'material' | 'number'> {
	if (tile === 0 || tile === 'void') {
		return { type: 'void', number: 0, material: material }
	} else if (tile === 1 || tile === 'simple_tile') {
		return { type: 'simple_tile', number: 1, material: material }
	} else if (tile === 2 || tile === 'water') {
		return { type: 'water', number: 2, material: waterMaterial }
	} else if (tile === 3 || tile === 'close_water') {
		return { type: 'close_water', number: 3, material: material }
	} else if (tile === 4 || tile === 'event') {
		return { type: 'event', number: 4, material: eventMaterial }
	} else if (tile === 5 || tile === 'construction') {
		return { type: 'construction', number: 5, material: constructionMaterial }
	} else {
		return { type: 'void', number: 0, material: material }
	}
}
