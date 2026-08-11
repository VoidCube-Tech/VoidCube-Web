import demoBellaFitness from '../../assets/demo_bella_fitness.jpg';

export const IMAGE_POOL = {
  demoBellaFitness,
} as const;

export type ImageKey = keyof typeof IMAGE_POOL;
