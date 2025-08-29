import { Canvas } from '@react-three/fiber';
import { Box, Sphere, Torus, OrbitControls, Float, Text3D } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const InteractiveBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box
        ref={meshRef}
        position={position}
        args={[1, 1, 1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial 
          color={hovered ? "#6366f1" : "#8b5cf6"} 
          transparent 
          opacity={0.8}
        />
      </Box>
    </Float>
  );
};

const InteractiveTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [clicked, setClicked] = useState(false);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Torus
        ref={meshRef}
        position={position}
        args={[1, 0.3, 16, 100]}
        onClick={() => setClicked(!clicked)}
        scale={clicked ? 1.5 : 1}
      >
        <meshStandardMaterial 
          color={clicked ? "#10b981" : "#06b6d4"} 
          wireframe={clicked}
          transparent 
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
};

const Interactive3D = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`h-64 w-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <InteractiveBox position={[-2, 0, 0]} />
        <InteractiveTorus position={[2, 0, 0]} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Interactive3D;