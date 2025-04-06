import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import * as THREE from 'three';

function GiftBoxModel() {
  const { scene } = useGLTF('/gift_box.glb');
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group
      ref={modelRef}
      scale={1.5}
      position={[0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

const GiftBox3D = () => {
  return (
    <div 
      className="h-[400px] md:h-[500px] w-full relative overflow-hidden"
      style={{ 
        touchAction: 'pan-x pan-y',
        pointerEvents: 'none'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{ 
          pointerEvents: 'auto',
          touchAction: 'none'
        }}
      >
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ 
            position: [0, 0, 5],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
          style={{ 
            touchAction: 'none',
            outline: 'none'
          }}
          eventSource={document.documentElement}
          eventPrefix="client"
        >
          <Stage
            environment="city"
            intensity={0.7}
            shadows={false}
            adjustCamera={false}
            preset="rembrandt"
          >
            <GiftBoxModel />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            makeDefault
            domElement={document.documentElement}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default GiftBox3D;

// Preload the model
useGLTF.preload('/gift_box.glb'); 