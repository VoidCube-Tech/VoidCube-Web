import { Project } from '../types';

export const ALL_TECHNOLOGIES = [
  'Todos',
  'Velocidade & Vendas',
  'Agendamento & Gestão',
  'Design para Celular',
  'Confirmação Automática',
  'Atendimento Rápido'
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'tech-1',
    title: 'Loja Virtual & E-Commerce de Alta Performance',
    category: 'tecnica',
    shortDescription: 'Estrutura de loja virtual otimizada para carregamento veloz no celular e compras sem complicações.',
    fullDescription: 'Demonstração prática de plataforma de vendas online desenvolvida para abrir instantaneamente no celular do cliente, facilitar o pagamento e aumentar a taxa de conversão.',
    technologies: ['Velocidade & Vendas', 'Design para Celular', 'Compra Direta'],
    placeholderText: '[Demonstração visual de loja virtual e checkout de compra rápido]',
    problemSolved: 'Lojas virtuais lentas e complicadas fazem o cliente desistir da compra antes de concluir o pagamento.',
    solutionProvided: 'Interface limpa e rápida com fluxo de compra simplificado para celular e computador.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'tech-2',
    title: 'Sistema de Agendamento e Gestão de Clientes',
    category: 'tecnica',
    shortDescription: 'Organização completa da agenda da empresa, confirmações automáticas e controle de atendimentos.',
    fullDescription: 'Painel intuitivo para pequenas e médias empresas de serviços. Permite organizar horários da equipe, sincronizar atendimentos e mandar lembretes automáticos.',
    technologies: ['Agendamento & Gestão', 'Confirmação Automática', 'Atendimento Rápido'],
    placeholderText: '[Demonstração visual do painel de agendamento e clientes]',
    problemSolved: 'Agendamentos manuais em papel ou mensagens soltas geram horários duplicados e perda de receita por esquecimento do cliente.',
    solutionProvided: 'Centralização de todas as solicitações em uma agenda visual simples com confirmações diretas.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'tech-3',
    title: 'Site Institucional & Captação de Clientes',
    category: 'tecnica',
    shortDescription: 'Website comercial para destaque no Google, carregamento instantâneo e botão direto para o atendimento.',
    fullDescription: 'Página institucional criada para apresentar os diferenciais do seu negócio de forma profissional, atraindo novos contatos no Google e direcionando para vendas.',
    technologies: ['Velocidade & Vendas', 'Atendimento Rápido', 'Design para Celular'],
    placeholderText: '[Demonstração visual do site comercial para captação de clientes]',
    problemSolved: 'Sites ultrapassados que demoram para abrir no celular e não trazem nenhum novo orçamento.',
    solutionProvided: 'Estrutura leve e moderna que direciona o visitante direto aos canais comerciais.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'tech-4',
    title: 'Central de Notificações & Confirmação de Pedidos',
    category: 'tecnica',
    shortDescription: 'Automação para envio automático de confirmações de compras, avisos e comprovantes aos clientes.',
    fullDescription: 'Solução sob medida para garantir que seu cliente receba a confirmação do seu pedido ou agendamento sem necessidade de digitação manual pela sua equipe.',
    technologies: ['Confirmação Automática', 'Atendimento Rápido', 'Agendamento & Gestão'],
    placeholderText: '[Demonstração visual da central de confirmação de pedidos]',
    problemSolved: 'Perda de tempo da equipe enviando mensagens manuais repetitivas para cada cliente.',
    solutionProvided: 'Envio automático imediato após a ação do cliente com total confiabilidade.',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'dev-1',
    title: 'Painel de Automação de Rotinas Comerciais',
    category: 'desenvolvimento',
    shortDescription: 'Ferramenta interna para integrar dados da empresa e eliminar tarefas repetitivas do dia a dia.',
    fullDescription: 'Sistema prático para organizar dados de vendas, gerar relatórios de forma rápida e economizar horas de trabalho semanal da sua equipe.',
    technologies: ['Agendamento & Gestão', 'Confirmação Automática'],
    placeholderText: '[Demonstração visual do painel de automação de rotinas]',
    problemSolved: 'Processos manuais demorados em planilhas que tiram o foco da equipe de vendas.',
    solutionProvided: 'Gerador automatizado de dados e relatórios pronto para o uso diário.',
    githubUrl: '#'
  },
  {
    id: 'dev-2',
    title: 'Formulário Inteligente de Atendimento',
    category: 'desenvolvimento',
    shortDescription: 'Formulário ágil que impede envio de dados incompletos ou errados pelo cliente antes do orçamento.',
    fullDescription: 'Interface simples para coleta de informações essenciais de clientes com verificação automática no momento do preenchimento.',
    technologies: ['Atendimento Rápido', 'Design para Celular'],
    placeholderText: '[Demonstração visual do formulário de atendimento inteligente]',
    problemSolved: 'Informações enviadas incompletas por clientes que atrasam o orçamento e o atendimento.',
    solutionProvided: 'Verificação em tempo real que garante o envio dos dados corretos na primeira tentativa.',
    githubUrl: '#'
  }
];
