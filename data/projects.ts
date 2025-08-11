export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  context: string;
  technologies: string[];
  category: string[]; // mudou para array
  image: string;
  link: string;
}

// Dados dos Projetos
export const allProjects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestão de Projetos de P&D",
    description:
      "Sistema web intuitivo para gerenciamento de projetos de pesquisa e desenvolvimento tecnológico, com dashboard, filtros e interface conversacional baseada em IA.",
    fullDescription: `
Este é um projeto acadêmico desenvolvido em grupo na faculdade, focado na criação de um sistema web intuitivo para gestão de projetos de pesquisa e desenvolvimento tecnológico da Fundação FAPG. O objetivo principal é simplificar e otimizar o acompanhamento dos projetos, garantindo eficiência e transparência para todos os envolvidos.

O sistema foi construído com base na metodologia ágil SCRUM, estimulando a proatividade, autonomia e colaboração da equipe. O projeto foi organizado em sprints, entregando funcionalidades incrementais como cadastro e edição de projetos, filtros e dashboards de acompanhamento, gestão de atividades e, por fim, uma interface conversacional baseada em inteligência artificial.

**Entre as principais funcionalidades destacam-se:**

- Cadastro, listagem, edição e exclusão de projetos.
- Filtros por área, responsáveis e status.
- Dashboard com gráficos para monitoramento do progresso.
- Adição, edição e exclusão de atividades vinculadas aos projetos.
- Interface conversacional inteligente para facilitar operações via comandos naturais.

**Este projeto proporcionou um aprendizado valioso sobre desenvolvimento fullstack, metodologias ágeis e integração de IA, além de permitir a aplicação prática dos conceitos de gestão de projetos e trabalho em equipe.**
`,
    context: "Projeto Acadêmico",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "MySQL",
      "Tailwind",
      "IA",
    ],
    category: ["FullStack", "IA", "Gestão de Projetos"],
    image: "/gifs/quantum.gif",
    link: "https://github.com/CODEPLAY-Fatec/API-ADS-4-Sem-Fatec",
  },
  {
    id: 2,
    title: "Sistema de Gerenciamento de RH",
    description:
      "Aplicação fullstack desenvolvida com Node.js, Express, React e PostgreSQL, incluindo autenticação, CRUD de funcionários, controle de permissões e dashboard intuitivo.",
    fullDescription: `
Este é um sistema web completo para **gerenciamento de Recursos Humanos (RH)**, desenvolvido com TypeScript no backend e frontend, visando oferecer uma solução robusta para controle de funcionários e autenticação de usuários.

O sistema foi construído com foco em **segurança, controle de acesso e produtividade**, permitindo operações de CRUD para funcionários, manutenção de senhas e gestão de permissões por nível de usuário.

**Entre as principais funcionalidades, destacam-se:**

- **Autenticação e controle de acesso** com JWT.
- **Cadastro, edição e exclusão de funcionários** com paginação na listagem.
- **Manutenção de senhas**, incluindo alteração e recuperação.
- **Controle de acesso baseado em papéis** (Administradores e Usuários comuns).
- Persistência de dados em **PostgreSQL**, com ORM **Prisma**.
- Integração entre **backend (Node.js + Express)** e **frontend (React + Vite)**.

**Benefícios e Aprendizados:**

**Este projeto proporcionou experiência prática no desenvolvimento fullstack, reforçando conceitos de autenticação segura, boas práticas de arquitetura, integração frontend-backend e uso de ORM com banco relacional.**
`,
    context: "Projeto Pessoal",
    technologies: [
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "JWT",
      "bcrypt",
      "Vite",
    ],
    category: ["FullStack", "Backend", "Segurança"],
    image: "/gifs/hr-system.gif",
    link: "https://github.com/gabrielfelip/hr-system",
  },
  {
    id: 3,
    title: "Java-Quest",
    description:
      "Chatbot inteligente desenvolvido em Java para responder consultas em linguagem natural, integrando-se a diversos bancos de dados relacionais com troca dinâmica.",
    fullDescription: `
Este projeto acadêmico consiste no desenvolvimento de um chatbot em Java, integrado a múltiplos bancos de dados relacionais, que responde a consultas em linguagem natural convertendo-as em comandos SQL executados dinamicamente.

Como Product Owner da equipe, conduzi o planejamento e a priorização das sprints, garantindo entregas incrementais e qualidade no desenvolvimento.

**Principais funcionalidades:**

- Seleção dinâmica de bancos de dados para execução das consultas.
- Interface para entrada de perguntas em linguagem natural e conversão para SQL.
- Exibição dos resultados das consultas.
- Troca entre diferentes IAs para processar as perguntas.
- Testes para garantir estabilidade e robustez.

Este projeto reforçou conhecimentos em processamento de linguagem natural, integração com bancos de dados, desenvolvimento ágil e liderança de equipe.
`,
    context: "Projeto Acadêmico",
    technologies: ["Java", "SQL", "JDBC", "JUnit", "Metodologias Ágeis"],
    category: ["Backend", "Java", "IA"],
    image: "/gifs/chatbot.gif",
    link: "https://github.com/Ctrl-Shift-Dev/Java-Quest",
  },
  {
    id: 4,
    title: "Scraper de Notebooks - Magazine Luiza (T2C)",
    description:
      "Script automatizado que coleta dados de notebooks no site da Magazine Luiza, filtra por avaliações e gera um relatório em Excel com envio por e-mail.",
    fullDescription: `
Este projeto consiste em um script automatizado desenvolvido em Python para realizar a extração e análise de dados de notebooks no site da Magazine Luiza.

O script acessa o site, realiza uma busca detalhada por notebooks e extrai informações essenciais como nome do produto, quantidade de avaliações e URL. Após a coleta, ele filtra a tabela para remover produtos que não possuem avaliações.

Os notebooks são organizados em duas categorias em um arquivo Excel: “Piores”, contendo notebooks com menos de 100 avaliações, e “Melhores”, com notebooks que possuem 100 ou mais avaliações. O arquivo gerado, chamado Notebooks.xlsx, contém colunas claras e objetivas (PRODUTO, QTD_AVAL, URL) e é salvo em uma pasta específica chamada Output.

Além disso, o script garante que apenas um arquivo esteja presente na pasta Output a cada execução, evitando duplicidades. Todas as instâncias do navegador são fechadas automaticamente após a extração, otimizando o uso dos recursos.

Por fim, o script envia um e-mail automático para o usuário com o relatório em anexo, contendo um assunto e corpo de mensagem padronizados para facilitar o acompanhamento dos dados coletados.

**Principais funcionalidades:**

- Automação de busca e extração de dados no site Magazine Luiza.
- Filtragem de produtos sem avaliações.
- Classificação dos notebooks em abas “Piores” e “Melhores” no arquivo Excel.
- Geração de arquivo Excel organizado e atualizado na pasta Output.
- Encerramento automático das instâncias do navegador.
- Envio automático de e-mail com relatório anexado.

**Este projeto permitiu desenvolver habilidades em automação web, manipulação de dados em Excel e integração com serviços de e-mail para envio automático de relatórios.**
`,
    context: "Projeto Pessoal",
    technologies: ["Python", "Selenium", "Pandas", "OpenPyXL", "SMTP"],
    category: ["Automação", "Web Scraping", "Python"],
    image: "/gifs/T2C.gif",
    link: "https://github.com/gabrielfelip/testeT2c#",
  },
  {
    id: 5,
    title: "Gerador de Resumos Inteligente de PDF e Vídeos com IA",
    description:
      "Aplicação com interface em Streamlit para gerar resumos automáticos de PDFs e vídeos do YouTube usando modelos locais como Mistral via Ollama.",
    fullDescription: `
Este projeto é uma aplicação web interativa desenvolvida com Streamlit que permite gerar resumos automáticos de documentos PDF e vídeos do YouTube utilizando inteligência artificial localmente, por meio do modelo Mistral via Ollama.

A aplicação oferece funcionalidades completas para upload e extração de texto de arquivos PDF, além da extração automática da transcrição de vídeos do YouTube. Com isso, é possível gerar resumos claros e objetivos, que podem ser baixados em formato \`.txt\`. Além disso, mantém um histórico dos resumos gerados durante a sessão, organizado em abas para fácil navegação.

O sistema apresenta uma interface limpa, responsiva e intuitiva, com personalização básica de fontes e ícones, proporcionando uma experiência amigável para usuários que desejam agilizar a leitura e compreensão de conteúdos extensos.

**Entre as principais funcionalidades destacam-se:**

- Upload e extração de texto de arquivos PDF.
- Extração automática de transcrição de vídeos do YouTube.
- Geração de resumos automáticos utilizando modelos de linguagem avançados.
- Download dos resumos em formato de texto simples.
- Histórico organizado dos resumos gerados durante a sessão.
- Interface web responsiva e de fácil utilização.

**Este projeto proporcionou aprendizado prático sobre integração de modelos de linguagem locais, manipulação de arquivos PDF e vídeo, além do desenvolvimento de interfaces interativas voltadas para produtividade com IA.**
`,
    context: "Projeto Pessoal",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "Mistral",
      "LangChain",
      "PyPDF2",
      "YouTube Transcript API",
    ],
    category: ["IA", "Automação", "Python"],
    image: "/gifs/resumo-ia.gif",
    link: "https://github.com/gabrielfelip/Resumos-IA",
  },
  {
    id: 6,
    title: "Simulador de Pagamento - SPA",
    description:
      "Aplicação web de página única que simula parcelamentos, taxas e descontos em tempo real. Desenvolvida com HTML, CSS e JavaScript puro como atividade da disciplina Eletiva de Programação Web.",
    fullDescription: `
Este projeto foi desenvolvido como parte da disciplina Eletiva Programação WEB, com foco na criação prática de uma Single Page Application (SPA) utilizando HTML, CSS e JavaScript.

A aplicação simula um sistema de pagamento que realiza cálculos financeiros dinâmicos em tempo real, incluindo parcelamentos, taxas e descontos, proporcionando ao usuário um feedback imediato conforme as escolhas feitas.

**Entre as principais funcionalidades destacam-se:**

- Seleção de produtos com ajuste de quantidade.
- Cálculo automático do valor total, considerando pagamento à vista ou parcelado.
- Validação inteligente para garantir valor mínimo por parcela.
- Interface responsiva e organizada para melhor experiência do usuário.
- Implementação das regras de negócio específicas:
  - Parcelas permitidas: 2, 3, 4 ou 5.
  - Valor mínimo por parcela: R$ 10,00.
  - Taxa de parcelamento: 6% sobre o valor total + R$ 6,90 por parcela.
  - Desconto à vista: 8,5% no valor total.

**Este projeto consolidou conceitos essenciais da programação web como gestão de estado, manipulação avançada do DOM, cálculos matemáticos em JavaScript e design de interfaces intuitivas, reforçando a aplicação prática de lógica e usabilidade no front-end.**
`,
    context: "Projeto Acadêmico",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    category: ["Frontend", "JavaScript", "SPA"],
    image: "/gifs/sistemadevendas.gif",
    link: "https://github.com/gabrielfelip/Sistema-de-Vendas",
  },
];
