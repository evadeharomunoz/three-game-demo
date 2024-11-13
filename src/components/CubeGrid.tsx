import { BoxGeometry, MeshNormalMaterial } from 'three'

type CubeGridProps = {
  size: number
  spacing: number
  levelsMap: number[][]
}

const cube = new BoxGeometry(1,1,1)
const material = new MeshNormalMaterial()

function CubeGrid({ size, spacing, levelsMap }: CubeGridProps) {
  const cubes = []

  for (let x = 0; x < size; x++) {
    for (let z = 0; z < size; z++) {
      const levels = levelsMap[x]?.[z] || 0;

      if (levels > 0) {
        for (let y = 0; y < levels; y++) {
          cubes.push(
            <mesh
              key={`${x}-${y}-${z}`}
              position={[x * spacing, y * spacing, z * spacing]}
              geometry={cube}
              material={material}
            />
          )
        }
      }
    }
  }

  return <>{cubes}</>
}

export default CubeGrid
