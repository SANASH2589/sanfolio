import { Canvas } from '@react-three/fiber';
import { Box, Sphere, Float, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ProjectCube = ({ 
  position, 
  color, 
  onClick 
}: { 
  position: [number, number, number]; 
  color: string;
  onClick: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Box
        ref={meshRef}
        position={position}
        args={[1.5, 1.5, 1.5]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : color} 
          transparent 
          opacity={hovered ? 0.9 : 0.7}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Box>
    </Float>
  );
};

const Project3D = () => {
  const projects = [
    { color: "#6366f1", position: [-2, 0, 0] as [number, number, number] },
    { color: "#8b5cf6", position: [2, 0, 0] as [number, number, number] }
  ];

  const handleProjectClick = (index: number) => {
    // Scroll to projects section or trigger project modal
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-64 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {projects.map((project, index) => (
          <ProjectCube
            key={index}
            position={project.position}
            color={project.color}
            onClick={() => handleProjectClick(index)}
          />
        ))}
        
        {/* Orbiting spheres */}
        <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <Sphere position={[0, 2, 0]} args={[0.3, 16, 16]}>
            <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
          </Sphere>
        </Float>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

export default Project3D;