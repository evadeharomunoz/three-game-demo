import { BaseTileProps } from '../../../types/types'
import CloseWater from '../CloseWater'
import Construction from '../Construction'
import Event from '../Event'
import Tile from '../Tile'
import Void from '../Void'
import Water from '../Water'

type SharedProps = BaseTileProps & { key: string }

const constructions = {
	water: ({ key, ...props }: SharedProps) => <Water key={key} {...props} />,
	closeWater: ({ key, ...props }: SharedProps) => <CloseWater key={key} {...props} />,
	construction: ({ key, ...props }: SharedProps) => <Construction key={key} {...props} />,
	event: ({ key, ...props }: SharedProps) => <Event key={key} {...props} />,
	tile: ({ key, ...props }: SharedProps) => <Tile key={key} {...props} />,
	void: ({ key, ...props }: SharedProps) => <Void key={key} {...props} />,
}
export default constructions
