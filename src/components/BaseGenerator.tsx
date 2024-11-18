import { TileInformation } from '../types/types';
import { BoxGeometry } from 'three';

import getTileInformation from '../utils/getTileInformation';

const cube = new BoxGeometry(1, 1, 1);

function BaseGenerator(props: TileInformation) {
  const spacing = 1.05;

  return (
    <mesh
      key={`${props.x}-${props.y}-${props.z}`}
      position={[props.x * spacing, props.y * spacing, props.z * spacing]}
      material={getTileInformation(props.type).material}
      geometry={cube}
    />
  );
}

export default BaseGenerator;
