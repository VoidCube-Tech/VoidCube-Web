import { ProcessStepItem } from '../types';

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    stepNumber: 1,
    title: 'Diagnóstico Comercial',
    description: 'Analisamos as necessidades reais do seu negócio e identificamos exatamente o que precisa ser construído ou corrigido, sem enrolação.',
    details: [
      'Alinhamento direto dos seus objetivos de vendas',
      'Mapeamento simples do que seu site já possui',
      'Proposta clara de investimento sem letras miúdas'
    ]
  },
  {
    stepNumber: 2,
    title: 'Construção da Solução',
    description: 'Desenvolvimento do seu site ou sistema focado em velocidade e facilidade de uso. Você acompanha o progresso em linguagem simples.',
    details: [
      'Visual moderno e fácil de usar no celular',
      'Acompanhamento periódico de cada etapa',
      'Foco total em atração de novos clientes'
    ]
  },
  {
    stepNumber: 3,
    title: 'Lançamento & Suporte',
    description: 'Colocamos seu projeto no ar com testes prévios, suporte inicial garantido e orientações práticas para sua equipe ter total autonomia.',
    details: [
      'Verificação completa de todos os botões e contatos',
      'Publicação segura no seu endereço de site (.com.br)',
      'Atendimento direto para tirar qualquer dúvida'
    ]
  }
];
