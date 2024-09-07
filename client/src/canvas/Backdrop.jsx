import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
    ref={shadows}
    temporal
    frames={60}
    alphaTest={0.65}
    scae={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[0, 0, -0.14]}
    >
      <RandomizedLight 
        amount={3}
        radius={9}
        intensity={1.95}
        ambient={0.25}
        position={[5, 5, -10]}
        />
        <RandomizedLight 
        amount={2}
        radius={5}
        intensity={0.45}
        ambient={2.55}
        position={[-5, 5, -9]}
        />
    </AccumulativeShadows>
  )
}

export default Backdrop