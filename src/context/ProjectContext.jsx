import { createContext, useState } from 'react';
import wb from "../assets/water-bottle.webp";
import sp from "../assets/Smart Plant Pot.jpeg";
import re from "../assets/Rural Education Kit.jpeg";

export const ProjectContext = createContext();

const sampleProjects = [
  {
    id: 1,
    title: 'Eco-Friendly Water Bottle',
    description: 'A sustainable and reusable water bottle that helps reduce plastic waste.',
    image: wb,
  },
  {
    id: 2,
    title: 'Smart Plant Pot',
    description: 'Monitor and automate your plant watering with IoT tech.',
    image: sp,
  },
  {
    id: 3,
    title: 'Rural Education Kit',
    description: 'Portable kits for remote village education with solar power.',
    image: re,
  },
];

export function ProjectProvider({ children }) {
  const [projects] = useState(sampleProjects);
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}
