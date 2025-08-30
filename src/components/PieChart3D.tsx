import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface PieChart3DProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  size?: number;
}

const PieSlice: React.FC<{
  startAngle: number;
  endAngle: number;
  color: string;
  radius: number;
  height: number;
}> = ({ startAngle, endAngle, color, radius = 2, height = 0.3 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const segments = 32;
    
    // Create pie slice shape
    shape.moveTo(0, 0);
    for (let i = 0; i <= segments; i++) {
      const angle = startAngle + (endAngle - startAngle) * (i / segments);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) {
        shape.lineTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.lineTo(0, 0);
    
    const extrudeSettings = {
      depth: height,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 8,
    };
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [startAngle, endAngle, radius, height]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -height / 2]}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const PieChart3DScene: React.FC<{ data: PieChart3DProps['data'] }> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} />
      
      <group>
        {data.map((item, index) => {
          const percentage = item.value / total;
          const sliceAngle = percentage * Math.PI * 2;
          const startAngle = currentAngle;
          const endAngle = currentAngle + sliceAngle;
          
          const slice = (
            <PieSlice
              key={index}
              startAngle={startAngle}
              endAngle={endAngle}
              color={item.color}
              radius={1.8}
              height={0.4}
            />
          );
          
          currentAngle += sliceAngle;
          return slice;
        })}
      </group>
      
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        minDistance={4}
        maxDistance={12}
        autoRotate={true}
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
    </>
  );
};

export const PieChart3D: React.FC<PieChart3DProps> = ({ data, size = 400 }) => {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div 
        className="w-full max-w-lg mx-auto rounded-lg overflow-hidden bg-gradient-card/20"
        style={{ aspectRatio: '1 / 1', minHeight: '350px' }}
      >
        <Canvas 
          camera={{ position: [0, 2, 6], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
        >
          <PieChart3DScene data={data} />
        </Canvas>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-foreground">{item.name}: {item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};