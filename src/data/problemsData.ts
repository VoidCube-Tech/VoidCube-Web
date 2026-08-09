import { ProblemCardItem } from '../types';

export const PROBLEM_CARDS: ProblemCardItem[] = [
  {
    id: 'prob-1',
    title: 'Site ou produto quebrado que não traz clientes',
    description: 'Seu site atual trava, apresenta erros visíveis no celular, demora para carregar ou simplesmente não transforma visitantes em vendas.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'prob-2',
    title: 'Histórico de entregas incompletas e atrasos',
    description: 'Prazos que foram estourados repetidamente, prestadores que sumiram após o pagamento ou sistemas confusos que ninguém consegue atualizar.',
    iconName: 'UserX'
  },
  {
    id: 'prob-3',
    title: 'Comunicação complicada cheia de termos difíceis',
    description: 'Profissionais que explicam tudo em linguagem técnica e incompreensível, em vez de focarem nos objetivos comerciais e no seu lucro.',
    iconName: 'MessageSquareOff'
  }
];
