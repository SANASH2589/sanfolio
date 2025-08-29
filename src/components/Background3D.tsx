import { Canvas } from '@react-three/fiber';
import { Sphere, Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingSphere = ({ position, color, size = 1, speed = 1 }: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.3} />
      </Sphere>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Static background spheres */}
        <FloatingSphere position={[-8, 4, -5]} color="#6366f1" size={1.2} speed={0.5} />
        <FloatingSphere position={[8, -3, -8]} color="#8b5cf6" size={0.8} speed={0.7} />
        <FloatingSphere position={[-6, -5, -6]} color="#06b6d4" size={1} speed={0.6} />
        <FloatingSphere position={[7, 6, -7]} color="#10b981" size={0.9} speed={0.8} />
        <FloatingSphere position={[-4, 2, -4]} color="#f59e0b" size={0.7} speed={0.9} />
        <FloatingSphere position={[5, -6, -5]} color="#ef4444" size={1.1} speed={0.4} />
        <FloatingSphere position={[-7, 7, -9]} color="#ec4899" size={0.6} speed={1.2} />
        <FloatingSphere position={[9, 2, -6]} color="#8b5cf6" size={0.9} speed={0.5} />
        <FloatingSphere position={[-3, -7, -7]} color="#06b6d4" size={0.8} speed={0.8} />
        <FloatingSphere position={[6, 5, -8]} color="#10b981" size={1} speed={0.6} />
      </Canvas>
    </div>
  );
};

export default Background3D;