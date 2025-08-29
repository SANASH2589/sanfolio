import { Canvas } from '@react-three/fiber';
import { Sphere, Float, Text3D, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SkillSphere = ({ 
  position, 
  color, 
  skill, 
  percentage 
}: { 
  position: [number, number, number]; 
  color: string; 
  skill: string;
  percentage: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const size = (percentage / 100) * 1.5 + 0.5; // Scale based on skill level
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <Sphere ref={meshRef} args={[size, 32, 32]}>
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </Sphere>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.2}
          height={0.02}
          position={[0, size + 0.5, 0]}
        >
          {skill}
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </group>
    </Float>
  );
};

const Skill3D = () => {
  const skills = [
    { name: "Java", percentage: 70, color: "#f39c12", position: [-2, 1, 0] as [number, number, number] },
    { name: "HTML/CSS", percentage: 70, color: "#e67e22", position: [2, 1, 0] as [number, number, number] },
    { name: "C", percentage: 50, color: "#3498db", position: [0, -1, 0] as [number, number, number] },
    { name: "Python", percentage: 40, color: "#2ecc71", position: [-2, -1, -1] as [number, number, number] },
    { name: "DSA", percentage: 30, color: "#9b59b6", position: [2, -1, -1] as [number, number, number] }
  ];

  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {skills.map((skill, index) => (
          <SkillSphere
            key={index}
            position={skill.position}
            color={skill.color}
            skill={skill.name}
            percentage={skill.percentage}
          />
        ))}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};

export default Skill3D;