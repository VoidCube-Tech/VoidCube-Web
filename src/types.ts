export type ProjectCategory = 'clientes' | 'tecnica' | 'desenvolvimento';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  placeholderText: string;
  metrics?: string;
  problemSolved?: string;
  solutionProvided?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactContext {
  source: string;
  projectTitle?: string;
  initialNote?: string;
}

export interface ProblemCardItem {
  id: string;
  title: string;
  description: string;
  iconName: 'AlertTriangle' | 'UserX' | 'MessageSquareOff';
}

export interface ProcessStepItem {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}
