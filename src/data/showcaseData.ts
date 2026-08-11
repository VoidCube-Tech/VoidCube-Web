import { Project } from '../types';
import { IMAGE_POOL } from './imagePool';

export const ALL_TECHNOLOGIES = [
  'Todos',
  'Design Simples', 'Vídeo de Produto', 'Entrega Rápida'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tech-1',
    title: 'BellaFitness',
    category: 'tecnica',
    shortDescription: 'Loja virtual de roupas fitness com design simples e vídeo dos produtos, entregue em tempo recorde para o cliente.',
    fullDescription: 'Demonstração prática de loja virtual de moda fitness desenvolvida com foco em simplicidade visual e uso de vídeo para apresentar os produtos, aumentando a confiança do cliente antes da compra e agilizando a decisão.',
    technologies: ['Design Simples', 'Vídeo de Produto', 'Entrega Rápida'],
    placeholderText: '[Demonstração visual da loja BellaFitness com vídeos de produto]',
    image: IMAGE_POOL.demoBellaFitness,
    problemSolved: 'Fotos estáticas não mostram caimento, tecido e movimento das peças fitness, gerando insegurança na hora da compra.',
    solutionProvided: 'Loja com layout enxuto e vídeos curtos dos produtos, permitindo que o cliente veja a peça em uso antes de decidir.',
    liveUrl: '#',
    githubUrl: '#'
  },
];
