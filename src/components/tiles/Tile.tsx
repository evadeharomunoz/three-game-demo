import { BaseTileProps } from '../../types/types';
import { simple_tileMaterial, square } from './shared';

export default function Tile({ ...p }: BaseTileProps) {
  return <mesh geometry={square} material={simple_tileMaterial} {...p} />;
}
