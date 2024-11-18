import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import validateMovement from './lib/utils/validateMovement';
import BaseGenerator from './components/BaseGenerator';
import User from './components/tiles/User';
import getMap from './lib/map';

function App() {
  const [map, setMap] = useState(getMap());
  const [position, setPosition] = useState([13, 2, 0] satisfies [
    number,
    number,
    number
  ]);
  function handleMovement(e: KeyboardEvent) {
    switch (e.key) {
      case 'd':
        setPosition(([x, , z]) => {
          return validateMovement([x, 0, z], [x + 1, 0, z]);
        });
        return;
      case 'w':
        setPosition(([x, , z]) => {
          return validateMovement([x, 0, z], [x, 0, z - 1]);
        });
        return;
      case 'a':
        setPosition(([x, , z]) => {
          return validateMovement([x, 0, z], [x - 1, 0, z]);
        });
        return;
      case 's':
        setPosition(([x, , z]) => {
          return validateMovement([x, 0, z], [x, 0, z + 1]);
        });
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleMovement);
    return () => window.removeEventListener('keydown', handleMovement);
  }, []);

  return (
    <div className='h-full'>
      <Canvas
        camera={{
          fov: 60,
          position: [
            -38.45243352252325, 97.74725408686916, -30.143349919091854,
          ],
          rotation: [
            -2.1918054491040944, -0.6082134779972862, -2.467657308228318,
          ],
        }}
      >
        <OrbitControls />

        <User position={position} />
        <BaseGenerator tiles={map} map={map} setMap={setMap} />

        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default App;
