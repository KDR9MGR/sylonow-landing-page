import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function GiftBoxModel() {
  const { scene } = useGLTF('/gift_box.glb');
  const groupRef = useRef<THREE.Group>(null);

  React.useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    <group ref={groupRef} scale={2}>
      <primitive object={scene} />
    </group>
  );
}

export default function GiftBox3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[5, 5, 5]}
          fov={50}
          near={0.1}
          far={1000}
        />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GiftBoxModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={4}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

// Pre-load the model
useGLTF.preload('/gift_box.glb'); 