// Centralized Portuguese text content for ACEFI website

// Event Dates (defined first so they can be used in other sections)
const eventDates = {
  dateWritten: ' OITO DE FEVERIRO ',
  dateNumeric: ' 08/02/2026 '
}

export const STRINGS_PT = {
  // Navigation
  nav: {
    ourHistory: 'Nossa história',
    volunteers: 'Voluntarios',
    upcomingEvents: 'Próximos eventos'
  },

  // Main Banner
  banner: {
    nextSukiyaki: 'PROXIMO SUKIYAKI DIA',
    whatsappMessage: 'Gostaria de falar sobre a ACEFI. '
  },

  // Content Sections
  contentSections: {
    participateCaicam: {
      title: 'Venha conhecer o melhor Sukiyaki de Foz do Iguaçu!',
      description: `De março a outubro, sempre no primeiro domingo do mês, a ACEFI abre as portas para o nosso tradicional Sukiyaki, um dos eventos mais queridos da comunidade.

Traga sua família, seus amigos e venha prestigiar uma tradição que atravessa gerações.
`
    },
    volunteer: {
      title: 'Voluntariado',
      description: `Venha prestigiar nosso evento neste domingo dia ${eventDates.dateNumeric}, e experimente
nosso buffe de sukiyaki assim como varias outras opções de pratos
tipicos que estarão disponiveis no Cai na hora.
Crianças 6 a 8 anos: não pagam
Jovem adolescente 9 a 12: R$35,00
Adultos: compra antecipada R$40,00 | na hora R$45,00`
    }
  },

  // Event Dates
  events: eventDates,

  // History Section
  history: {
    mainTitle:
      'História da ACEFI – Associação Cultural Esportiva Nippo-Brasileira de Foz do Iguaçu',
    whenStarted: 'Quando surgiu a ACEFI Foz?',
    whenStartedDescription: `A ACEFI nasceu em 1º de abril de 1987, impulsionada pelo sonho e pela coragem de um grupo de emigrantes japoneses que, ao chegarem a Foz do Iguaçu, carregavam consigo não apenas malas e memórias, mas também uma forte vontade de preservar suas raízes. Eles desejavam construir um espaço onde a cultura japonesa pudesse florescer, ser compartilhada e fortalecer laços entre gerações.

Os primeiros anos foram marcados por desafios intensos. Não havia estrutura, recursos ou garantias — apenas determinação. Foram diversos e longos anos de dedicação, reuniões extensas, trabalhos voluntários, mutirões e uma união inabalável. Cada parede levantada, cada evento organizado e cada conquista alcançada surgiu de muito suor, esforço coletivo e amor pela comunidade.

Foi assim, tijolo por tijolo, que a ACEFI se tornou realidade. E mais do que um prédio, ela se ergueu como um símbolo de perseverança, identidade e pertencimento. Uma prova viva de que, quando uma comunidade acredita em um propósito comum, ela é capaz de transformar sonhos em legado.`,
    whoWeAre: 'Quem somos nós?',
    whoWeAreDescription: `Nós somos a continuação daquele sonho iniciado em 1987.

Somos descendentes, associados, voluntários, amigos e admiradores da cultura japonesa que mantêm viva essa chama. Somos um grupo que valoriza o respeito, a disciplina, a amizade e a união — pilares fundamentais da cultura nipônica.

Somos uma comunidade diversa que acolhe quem quer aprender, quem quer ensinar e quem deseja apenas fazer parte de algo maior. Somos o elo entre passado, presente e futuro.`,
    ourMission: 'Qual a nossa missão, qual o propósito da associação?',
    ourMissionDescription: `A missão da ACEFI é preservar, promover e fortalecer a cultura japonesa em Foz do Iguaçu e região, criando um ambiente de integração, aprendizado e convivência harmoniosa.

Buscamos transmitir valores culturais que inspiram disciplina, respeito e cooperação, enquanto incentivamos práticas esportivas, culturais e sociais que aproximam pessoas e constroem comunidade.

O propósito da associação é:

• Manter vivas as tradições japonesas, oferecendo atividades culturais, artísticas e esportivas.

• Promover a união da comunidade nipo-brasileira, fortalecendo laços entre gerações.

• Aproximar culturas, criando pontes entre o Japão, o Brasil e todos que desejam conhecer esse universo.

• Criar um ambiente acolhedor, onde cada pessoa, descendente ou não, se sinta parte da história.

• Preservar o legado dos pioneiros, honrando seu trabalho e continuando sua contribuição para a cidade.`
  },

  // Contact Form
  contactForm: {
    title: 'Nos ajude com sua opinião',
    subtitle: 'Conte onde podemos melhorar',
    placeholders: {
      name: 'Seu nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem'
    },
    whatsappTemplate: {
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem'
    }
  },

  // Footer
  footer: {
    copyright: '© 2024 ACEFI-Foz. Todos os direitos reservado'
  }
}
