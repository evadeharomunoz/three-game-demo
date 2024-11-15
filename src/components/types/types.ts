import { MeshNormalMaterial, MeshPhongMaterial } from 'three'

export type TileType =
  | 'void'
  | 'simple_tile'
  | 'event'
  | 'water'
  | 'close_water'
  | 'construction'

export type TilesNumbers = 0 | 1 | 4 | 2 | 3 | 5
  
export type TileInformation = {
  type: TileType
  material?: MeshNormalMaterial | MeshPhongMaterial
  number?: TilesNumbers
  x: number
	y: number
	z: number
  references: 'event_01'
}