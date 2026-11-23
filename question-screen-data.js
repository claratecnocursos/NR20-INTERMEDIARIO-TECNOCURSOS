/**
 * Conteúdo da Trilha NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis
 * Tipos: cover | content | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos da NR 20, Classificação e Propriedades Físico-Químicas dos Inflamáveis",
      objective: "Apresentar a base regulamentar da NR 20, o campo de aplicação, as exceções legais, a classificação oficial das instalações industriais e a análise das propriedades físico-químicas, perigos e riscos dos produtos inflamáveis e combustíveis.",
      titleUnlock: {
        title: "FRASES NO LUGAR",
        body: "Você separou o que a NR 20 afirma sobre inflamáveis, classes, GLP e FDS.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Capa do módulo 1",
          title: "Módulo 1 — Fundamentos da NR 20, Classificação e Propriedades Físico-Químicas dos Inflamáveis",
          subtitle: "Base da NR 20, classificação das instalações e propriedades dos inflamáveis e combustíveis.",
          transcript: "Módulo 1. Fundamentos da NR 20, classificação e propriedades físico-químicas dos inflamáveis. Base regulamentar, campo de aplicação, exceções legais, classificação das instalações e propriedades dos inflamáveis e combustíveis."
        },
        {
          id: "nr20-m1-diretrizes",
          type: "video",
          kicker: "Vídeo",
          title: "Diretrizes Globais da NR 20: Objetivo, Público e Abrangência",
          playerId: "panda-fe2f6d94-fe3c-4430-ac1e-a224fd5de180",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fe2f6d94-fe3c-4430-ac1e-a224fd5de180",
          transcript: "Vídeo. Diretrizes Globais da NR 20: Objetivo, Público e Abrangência. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m1-definicoes",
          type: "content",
          layout: "defs",
          kicker: "Classificação",
          title: "Definições",
          body: "A NR 20 separa os produtos pelo ponto de fulgor e pela condição em que inflamam.",
          items: [
            {
              tag: "Ponto de fulgor",
              metric: "< 60",
              unit: "°C",
              title: "Líquidos inflamáveis",
              text: "São líquidos que possuem ponto de fulgor menor que 60 °C."
            },
            {
              tag: "No ar",
              metric: "20",
              unit: "°C",
              extra: "101,3 kPa",
              title: "Gases inflamáveis",
              text: "Gases que inflamam com o ar a 20 °C e à pressão padrão de 101,3 kPa."
            },
            {
              tag: "Ponto de fulgor",
              metric: "60–93",
              unit: "°C",
              title: "Líquidos combustíveis",
              text: "São líquidos com ponto de fulgor maior que 60 °C e menor que 93 °C."
            }
          ],
          transcript: "Definições. A classificação da NR 20 separa os produtos pelo ponto de fulgor e pela condição em que inflamam. Líquidos inflamáveis são líquidos que possuem ponto de fulgor menor que 60 graus Celsius. Gases inflamáveis são gases que inflamam com o ar a 20 graus Celsius e a uma pressão padrão de 101,3 quilopascals. Líquidos combustíveis são líquidos com ponto de fulgor maior que 60 graus Celsius e menor que 93 graus Celsius."
        },
        {
          id: "nr20-m1-classes",
          type: "content",
          layout: "defs",
          kicker: "Instalações",
          title: "Classes das instalações",
          body: "A NR 20 divide as instalações em três classes.",
          items: [
            {
              tag: "Postos e depósitos",
              metric: "I",
              title: "Classe I",
              text: "Postos de combustível e depósitos de gás de 2 a 60 toneladas ou líquidos de 10 a 5.000 m³."
            },
            {
              tag: "Engarrafadoras e dutos",
              metric: "II",
              title: "Classe II",
              text: "Engarrafadoras, transporte por dutos e estoques de gás até 600 toneladas ou líquidos até 50.000 m³."
            },
            {
              tag: "Grandes plantas",
              metric: "III",
              title: "Classe III",
              text: "Grandes plantas, como refinarias, petroquímicas e usinas de etanol."
            }
          ],
          transcript: "Classes das instalações. A NR 20 divide as instalações em três classes. A Classe I inclui postos de combustível e depósitos de gás de 2 a 60 toneladas ou líquidos de 10 a 5.000 metros cúbicos. A Classe II engloba engarrafadoras, transporte por dutos e estoques de gás até 600 toneladas ou líquidos até 50.000 metros cúbicos. A Classe III reúne grandes plantas, como refinarias, petroquímicas e usinas de etanol."
        },
        {
          id: "nr20-m1-normas",
          type: "content",
          layout: "defs",
          kicker: "Referências",
          title: "Integração normativa da NR 20",
          body: "Para garantir uma gestão de segurança sólida, a aplicação da NR 20 atua integrada a diversas normas técnicas nacionais e internacionais de referência. Seguir esse conjunto de normas é o nosso compromisso com a conformidade técnica e a vida!",
          items: [
            {
              tag: "Códigos internacionais",
              metric: "NFPA",
              title: "NFPA 30 e 70",
              text: "NFPA 30 para líquidos inflamáveis e combustíveis e NFPA 70 para instalações elétricas."
            },
            {
              tag: "Normas nacionais",
              metric: "NR",
              extra: "ABNT",
              title: "NR-10, NR-26 e NBR",
              text: "NR-10 para eletricidade, NR-26 para sinalização, NBR 5410 para baixa tensão e NBR 5419 para descargas atmosféricas."
            },
            {
              tag: "Procedimento interno",
              metric: "PO",
              title: "PO-COR-SST-011/1",
              text: "Padroniza os padrões operacionais obrigatórios nas unidades que armazenam ou utilizam líquidos inflamáveis e combustíveis."
            }
          ],
          transcript: "Integração normativa da N R vinte. Para garantir uma gestão de segurança sólida, a aplicação da N R vinte atua integrada a diversas normas técnicas nacionais e internacionais de referência. Utilizamos os códigos internacionais da N F P A, em especial a N F P A trinta para líquidos inflamáveis e combustíveis e a N F P A setenta para instalações elétricas. No âmbito nacional, seguimos a N R dez para segurança em eletricidade, a N R vinte e seis para sinalização de segurança, e as normas da A B N T: a N B R cinco mil quatrocentos e dez para baixa tensão e a N B R cinco mil quatrocentos e dezenove para proteção contra descargas atmosféricas. Internamente, todas essas exigências são padronizadas pelo procedimento P O C O R S S T zero onze barra um, que estabelece os padrões operacionais obrigatórios para todas as unidades operativas que armazenam ou utilizam líquidos inflamáveis e combustíveis. Seguir esse conjunto de normas é o nosso compromisso com a conformidade técnica e a vida."
        },
        {
          id: "nr20-m1-glp",
          type: "video",
          kicker: "Vídeo",
          title: "Propriedades Físico-Químicas e Estudo de Caso: GLP",
          playerId: "panda-20519fb0-8a21-4877-8f25-69e4a5a0c72a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=20519fb0-8a21-4877-8f25-69e4a5a0c72a",
          transcript: "Vídeo. Propriedades Físico-Químicas e Estudo de Caso: GLP. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m1-vapores",
          type: "video",
          kicker: "Vídeo",
          title: "Vapores Inflamáveis, Riscos de Explosão e Uso da FDS",
          playerId: "panda-28244be0-088c-46f1-a702-559392f6352d",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=28244be0-088c-46f1-a702-559392f6352d",
          transcript: "Vídeo. Vapores Inflamáveis, Riscos de Explosão e Uso da FDS. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m1-vf",
          type: "sort",
          vf: true,
          title: "Verdadeiro ou falso",
          body: "Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo 4 de 5.",
          transcript: "Verdadeiro ou falso. Leia a frase e toque em Falso ou Verdadeiro. Acerte no mínimo quatro de cinco.",
          time: 60,
          minCorrect: 4,
          left: { id: "falso", label: "Falso", icon: "F" },
          right: { id: "verdadeiro", label: "Verdadeiro", icon: "V" },
          items: [
            {
              text: "A NR 20 vale para residência unifamiliar e para plataforma marítima de petróleo e gás.",
              bin: "falso",
              hint: "Residência unifamiliar fica de fora. Plataforma marítima segue a NR-30."
            },
            {
              text: "Líquido inflamável tem ponto de fulgor igual ou inferior a 60 °C.",
              bin: "verdadeiro",
              hint: "Até 60 °C o líquido é inflamável. O combustível fica entre 60 °C e 93 °C."
            },
            {
              text: "Um depósito com 20.000 m³ de combustível é Classe I.",
              bin: "falso",
              hint: "Classe I vai até 5.000 m³ de líquido. 20.000 m³ é Classe II."
            },
            {
              text: "O cheiro do GLP vem do propano e do butano.",
              bin: "falso",
              hint: "Propano e butano são inodoros. O cheiro é da mercaptana."
            },
            {
              text: "A FDS fica acessível no local de trabalho, com os riscos, os limites e as medidas de emergência.",
              bin: "verdadeiro",
              hint: "A ficha de informação de segurança tem de estar acessível no trabalho."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Controle de Fontes de Ignição, Armazenamento Seguro e Medidas de Prevenção",
      objective: "Mapear todas as potenciais fontes de ignição nos ambientes de trabalho e estabelecer as diretrizes técnicas para controle de engenharia, aterramento elétrico, armazenamento seguro de recipientes e manutenção preventiva.",
      titleUnlock: {
        title: "FRASES NO LUGAR",
        body: "Você associou aterramento, trabalho a quente, palete, empilhamento e tambor vazio.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m2-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Capa do módulo 2",
          title: "Módulo 2 — Controle de Fontes de Ignição, Armazenamento Seguro e Medidas de Prevenção",
          subtitle: "Fontes de ignição, aterramento elétrico, armazenamento de recipientes e manutenção preventiva.",
          transcript: "Módulo 2. Controle de fontes de ignição, armazenamento seguro e medidas de prevenção. Fontes de ignição, aterramento elétrico, armazenamento de recipientes e manutenção preventiva."
        },
        {
          id: "nr20-m2-ignicao",
          type: "video",
          kicker: "Vídeo",
          title: "Mapeamento e Controle das Fontes de Ignição",
          playerId: "panda-83d5c94f-2d24-470f-865f-65b2f524522e",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=83d5c94f-2d24-470f-865f-65b2f524522e",
          transcript: "Vídeo. Mapeamento e Controle das Fontes de Ignição. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-fontes",
          type: "content",
          layout: "fontes",
          kicker: "Controle",
          title: "Sete fontes de ignição",
          body: "Devemos mapear e controlar rigorosamente estas sete fontes no ambiente de trabalho.",
          items: [
            { title: "Chamas abertas" },
            { title: "Ato de fumar" },
            { title: "Serviços a quente", text: "Solda e corte" },
            { title: "Superfícies aquecidas" },
            { title: "Eletricidade estática" },
            { title: "Faíscas mecânicas", text: "Atrito de ferramentas" },
            { title: "Arcos elétricos" }
          ],
          note: "Para evitar acúmulos perigosos, as instalações devem contar com sistemas de ventilação adequada e isolamento rigoroso de processos e operações perigosas, seja em ambientes confinados, externos ou compartimentados.",
          tags: ["Ventilação adequada", "Isolamento rigoroso"],
          transcript: "Sete fontes de ignição. Devemos mapear e controlar rigorosamente sete fontes principais no ambiente de trabalho: chamas abertas, o ato de fumar, serviços a quente como solda e corte, superfícies aquecidas, eletricidade estática, faíscas mecânicas geradas pelo atrito de ferramentas e arcos elétricos. Para evitar acúmulos perigosos, as instalações devem contar com sistemas de ventilação adequada e isolamento rigoroso de processos e operações perigosas, seja em ambientes confinados, externos ou compartimentados."
        },
        {
          id: "nr20-m2-aterramento",
          type: "video",
          kicker: "Vídeo",
          title: "Aterramento Elétrico e Prevenção de Eletricidade Estática",
          playerId: "panda-7d39b9ae-d621-4186-9bfa-6201f9567877",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7d39b9ae-d621-4186-9bfa-6201f9567877",
          transcript: "Vídeo. Aterramento Elétrico e Prevenção de Eletricidade Estática. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-armazenamento",
          type: "video",
          kicker: "Vídeo",
          title: "Regras Estritas de Armazenamento e Estocagem de Recipientes",
          playerId: "panda-fa72f404-f314-43f1-b9e0-db4546cd5c58",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fa72f404-f314-43f1-b9e0-db4546cd5c58",
          transcript: "Vídeo. Regras Estritas de Armazenamento e Estocagem de Recipientes. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-manutencao",
          type: "video",
          kicker: "Vídeo",
          title: "Organização, Limpeza e Manutenção Preventiva",
          playerId: "panda-e0ea5407-c282-4a0a-814f-1b6732e33802",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e0ea5407-c282-4a0a-814f-1b6732e33802",
          transcript: "Vídeo. Organização, Limpeza e Manutenção Preventiva. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-matriz",
          type: "video",
          kicker: "Vídeo",
          title: "Matriz de Responsabilidades Intersetoriais na Gestão da NR 20",
          playerId: "panda-7b306a5a-0506-4871-a46c-f79bc818e7c8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7b306a5a-0506-4871-a46c-f79bc818e7c8",
          transcript: "Vídeo. Matriz de Responsabilidades Intersetoriais na Gestão da NR 20. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-setores",
          type: "content",
          layout: "roles",
          kicker: "Gestão",
          title: "Responsabilidades intersetoriais",
          body: "Cada setor da empresa tem um papel definido na gestão da NR 20 — juntos formam a segurança coletiva.",
          items: [
            {
              tag: "Estoque e FDS",
              metric: "01",
              title: "Almoxarifado",
              text: "Controla a planilha de consumo e mantém as FDS do estoque atualizadas."
            },
            {
              tag: "Posto de trabalho",
              metric: "02",
              title: "Áreas Usuárias",
              text: "Solicitam as FDS e as mantêm disponíveis no posto de trabalho."
            },
            {
              tag: "SST e prontuário",
              metric: "03",
              title: "SGI / Segurança",
              text: "Gerencia consumo, EPIs, chuveiros e lava-olhos; capacita equipes e atualiza o Prontuário."
            },
            {
              tag: "Inspeção mensal",
              metric: "04",
              title: "Manutenção",
              text: "Inspeciona contenções, mantém válvulas travadas e zela por detectores e tubulações."
            },
            {
              tag: "Projetos técnicos",
              metric: "05",
              title: "Engenharia",
              text: "Elabora os projetos técnicos e o prontuário conforme as normas."
            },
            {
              tag: "Entrada de químicos",
              metric: "06",
              title: "Portaria",
              text: "Libera só cargas autorizadas por Segurança, Qualidade e Almoxarifado."
            }
          ],
          transcript: "Responsabilidades intersetoriais. A gestão da N R vinte envolve uma cadeia de responsabilidades bem definida entre os setores da empresa. O Almoxarifado controla a planilha de consumo e garante as F D S atualizadas do estoque. As Áreas Usuárias solicitam essas fichas e as mantêm disponíveis junto ao posto de trabalho. O S G I ou Segurança do Trabalho gerencia o consumo, fornece os E P Is adequados, garante os chuveiros e lava-olhos de emergência, capacita colaboradores e terceiros e mantém o Prontuário da Instalação atualizado. A Manutenção inspeciona mensalmente as contenções secundárias, mantém suas válvulas de drenagem travadas e fechadas e zela pelos detectores e tubulações. A Engenharia elabora os projetos técnicos e o prontuário conforme as normas. E a Portaria controla rigorosamente a entrada de produtos químicos, liberando apenas cargas autorizadas por Segurança, Qualidade e Almoxarifado. Cada setor tem um papel vital na segurança coletiva!"
        },
        {
          id: "nr20-m2-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Identificação de Perigos, Avaliação de Riscos e Controles Administrativos",
          playerId: "panda-8539e18e-2cc7-42ad-af40-b38de19f6c1f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8539e18e-2cc7-42ad-af40-b38de19f6c1f",
          transcript: "Vídeo. Identificação de Perigos, Avaliação de Riscos e Controles Administrativos. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m2-pares",
          type: "match",
          title: "Associe os pares",
          leftTitle: "Medida",
          rightTitle: "O que vale",
          minCorrect: 5,
          transcript: "Associe os pares. Toque em uma medida e depois no que vale para ela. São cinco pares: aterramento, trabalho a quente, palete, empilhamento e tambor vazio.",
          pairs: [
            { ex: "Aterramento elétrico", body: "Dissipa a estática" },
            { ex: "Trabalho a quente", body: "Solda e corte" },
            { ex: "Palete", body: "Fora do piso" },
            { ex: "Empilhamento", body: "Só um recipiente" },
            { ex: "Tambor vazio", body: "Sai do local" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Equipamentos de Proteção Coletiva (EPC), Individual (EPI) e Proteção Contra Incêndios",
      objective: "Detalhar a aplicação hierárquica dos Equipamentos de Proteção Coletiva (EPC) e Individual (EPI) conforme a NR-6 e capacitar o aluno no reconhecimento e operação dos sistemas manuais, fixos e automáticos de proteção contra incêndio.",
      titleUnlock: {
        title: "AÇÃO CERTA",
        body: "Você escolheu o CA, o extintor e a proteção do tanque.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr11-m3-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Capa do módulo 3",
          title: "Módulo 3 — Equipamentos de Proteção Coletiva (EPC), Individual (EPI) e Proteção Contra Incêndios",
          subtitle: "Hierarquia de EPC e EPI na NR-6 e sistemas de proteção contra incêndio.",
          transcript: "Módulo 3. Equipamentos de proteção coletiva, EPC, individual, EPI, e proteção contra incêndios. Hierarquia de proteção na NR 6 e sistemas de combate a incêndio."
        },
        {
          id: "nr20-m3-epc",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Coletiva (EPC) e Hierarquia de Segurança",
          playerId: "panda-ac316cca-b60d-448e-9de8-060c3334a1c7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ac316cca-b60d-448e-9de8-060c3334a1c7",
          transcript: "Vídeo. Equipamentos de Proteção Coletiva (EPC) e Hierarquia de Segurança. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m3-epi",
          type: "video",
          kicker: "Vídeo",
          title: "Equipamentos de Proteção Individual (EPI), Regras da NR-6 e o CA",
          playerId: "panda-7082a746-7133-451a-a3af-43dad9216aff",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7082a746-7133-451a-a3af-43dad9216aff",
          transcript: "Vídeo. Equipamentos de Proteção Individual (EPI), Regras da NR-6 e o CA. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m3-epi-corpo",
          type: "content",
          layout: "figure",
          wide: true,
          title: "Seleção de EPIs por Parte do Corpo e Traje Estrutural de Combate",
          body: "A seleção do EPI deve proteger cada parte do corpo exposta aos riscos.",
          image: "assets/fotos/EPI.png",
          imageAlt: "Seleção de EPIs por parte do corpo e traje estrutural de combate a incêndio",
          transcript: "Seleção de EPIs por parte do corpo e traje estrutural de combate. A seleção do EPI deve proteger cada parte do corpo exposta aos riscos."
        },
        {
          id: "nr20-m3-incendio",
          type: "video",
          kicker: "Vídeo",
          title: "Sistemas de Proteção Contra Incêndios: Extintores, Água Nebulizada e Espuma",
          playerId: "panda-e9d41615-0e11-4872-b488-4d1ea834c31f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e9d41615-0e11-4872-b488-4d1ea834c31f",
          transcript: "Vídeo. Sistemas de Proteção Contra Incêndios: Extintores, Água Nebulizada e Espuma. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m3-combate",
          type: "content",
          title: "Conhecimento e Utilização dos Sistemas de Segurança Contra Incêndio com Inflamáveis",
          stack: [
            {
              image: "assets/fotos/HIDRANTES.png",
              imageAlt: "Tipos de hidrantes de coluna",
              caption: "Tipos de Hidrantes de Coluna"
            },
            {
              image: "assets/fotos/Kit de Segurança.png",
              imageAlt: "Kit de segurança com mangueira, esguicho, adaptador, chave Storz e registro",
              caption: "Kit de segurança"
            },
            {
              image: "assets/fotos/Sinalização de Emergência.png",
              imageAlt: "Placas de rota de fuga, saída e equipamentos de incêndio",
              caption: "Sinalização de segurança"
            },
            {
              image: "assets/fotos/Armário de Mangueiras.png",
              imageAlt: "Armário de mangueiras com duas mangueiras e registro",
              caption: "Armário de mangueiras"
            }
          ],
          transcript: "Conhecimento e utilização dos sistemas de segurança contra incêndio com inflamáveis. Tipos de hidrantes de coluna. Kit de segurança. Sinalização de segurança. Armário de mangueiras."
        },
        {
          id: "nr20-m3-acao3",
          type: "console",
          title: "Ação certa",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Ação certa. Uma situação por vez. Toque na ação certa. São três situações sobre o CA, o extintor e a proteção do tanque.",
          doneText: "As três situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "Chegou um EPI importado sem o número do CA. Pode usar?",
              hint: "Nacional ou importado, o EPI precisa do Certificado de Aprovação. A empresa só fornece item aprovado pelo Ministério do Trabalho.",
              answer: "nao",
              options: [
                { id: "sim", text: "Pode, se a marca for boa" },
                { id: "nao", text: "Não. Sem CA, não uso" }
              ]
            },
            {
              ask: "O depósito tem só líquidos e gases inflamáveis. Qual extintor?",
              hint: "Só líquidos e gases: Pó BC. Se também houver sólido combustível, o extintor é o Pó ABC.",
              answer: "bc",
              options: [
                { id: "abc", text: "Pó ABC, porque sempre serve" },
                { id: "bc", text: "Pó BC" }
              ]
            },
            {
              ask: "O tanque precisa ser resfriado e o derramamento, abafado. O que entra?",
              hint: "A água nebulizada refrigera o tanque. A espuma mecânica abafa o fogo e segura a evaporação do líquido.",
              answer: "sistemas",
              options: [
                { id: "jato", text: "Jato cheio de água no líquido" },
                { id: "sistemas", text: "Água nebulizada e espuma mecânica" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Engenharia de Instalações, Sistemas de Tanques, Ventilação e Contenção de Inflamáveis",
      objective: "Apresentar os requisitos de engenharia para armazenamento secundário, classificação de áreas, sistemas de tanques, ventilação industrial, bacias de contenção e sistemas de proteção contra incêndio em instalações com inflamáveis.",
      titleUnlock: {
        title: "LIMITES NO LUGAR",
        body: "Você aplicou os limites de armário, doca, zona, tanque, LEL, bacia e dilúvio.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr20-m4-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Capa do módulo 4",
          title: "Módulo 4 — Engenharia de Instalações, Sistemas de Tanques, Ventilação e Contenção de Inflamáveis",
          subtitle: "Armários corta-fogo, zonas classificadas, tanques, ventilação, contenção e proteção por dilúvio.",
          transcript: "Módulo 4. Engenharia de instalações, sistemas de tanques, ventilação e contenção de inflamáveis. Armários corta-fogo, classificação de áreas, tanques, ventilação industrial, bacias de contenção e sistemas por dilúvio."
        },
        {
          id: "nr20-m4-armarios",
          type: "video",
          kicker: "Vídeo",
          title: "Armazenamento Secundário em Armários Corta-Fogo e Áreas de Doca",
          playerId: "panda-0555e721-e484-4af0-a107-0e88ec021229",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0555e721-e484-4af0-a107-0e88ec021229",
          transcript: "Vídeo. Armazenamento Secundário em Armários Corta-Fogo e Áreas de Doca. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-zonas",
          type: "video",
          kicker: "Vídeo",
          title: "Classificação de Áreas (Zonas 0, 1 e 2), Equipamentos EE/ES e Aterramento Avançado",
          playerId: "panda-528d3c02-2925-4448-a5c9-01bb7c52f28c",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=528d3c02-2925-4448-a5c9-01bb7c52f28c",
          transcript: "Vídeo. Classificação de Áreas (Zonas 0, 1 e 2), Equipamentos EE/ES e Aterramento Avançado. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-limites-visuais",
          type: "content",
          layout: "defs",
          kicker: "Limites",
          title: "Armário, doca e zonas",
          body: "Três regras práticas para fracionamento, estocagem transitória e áreas classificadas.",
          items: [
            {
              tag: "Armário corta-fogo",
              metric: "227",
              unit: "L",
              title: "Fracionamento",
              text: "Recipientes de até 20 L, só o consumo de um turno. Volume total por armário: no máximo 227 L."
            },
            {
              tag: "Área de doca",
              metric: "8",
              unit: "h",
              extra: "< 1.135 L",
              title: "Estocagem transitória",
              text: "No máximo 8 horas, recipientes lacrados, extintor por perto e FDS disponível. Sem transferência fora do local."
            },
            {
              tag: "Zonas 0, 1 e 2",
              metric: "EE",
              extra: "ES",
              title: "Equipamentos e aterramento",
              text: "Empilhadeiras e móveis só com EE ou ES. Aterre o caminhão-tanque antes de abrir tampas ou válvulas."
            }
          ],
          transcript: "Armário, doca e zonas. Frações de até 20 litros fora do depósito principal só para o consumo de um turno, em armário corta-fogo, com no máximo 227 litros por armário. Na doca, no máximo 8 horas, menos de 1.135 litros, recipientes lacrados, extintor e F D S. Em Zonas zero, um e dois, equipamentos móveis precisam de classificação E E ou E S. Caminhões-tanque aterrados antes de abrir tampas ou válvulas."
        },
        {
          id: "nr20-m4-tanques",
          type: "video",
          kicker: "Vídeo",
          title: "Segurança em Sistemas de Tanques Externos e Interiores de Edifícios",
          playerId: "panda-7024c5fc-d35d-4a85-8d4e-d23965617e50",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7024c5fc-d35d-4a85-8d4e-d23965617e50",
          transcript: "Vídeo. Segurança em Sistemas de Tanques Externos e Interiores de Edifícios. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-ventilacao",
          type: "video",
          kicker: "Vídeo",
          title: "Ventilação Industrial e Controle do Limite Inferior de Explosividade — LEL",
          playerId: "panda-88045b59-5901-414e-ab43-f2213f84d12b",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=88045b59-5901-414e-ab43-f2213f84d12b",
          transcript: "Vídeo. Ventilação Industrial e Controle do Limite Inferior de Explosividade — LEL. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-bacias",
          type: "video",
          kicker: "Vídeo",
          title: "Bacias de Contenção Secundária, Drenagem e Travamento de Válvulas",
          playerId: "panda-4ed94ab8-d52e-4306-9749-9de7d4598ed8",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=4ed94ab8-d52e-4306-9749-9de7d4598ed8",
          transcript: "Vídeo. Bacias de Contenção Secundária, Drenagem e Travamento de Válvulas. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-protecao",
          type: "content",
          layout: "defs",
          kicker: "Proteção",
          title: "Tanques, LEL e contenção",
          body: "Números que travam a engenharia de tanques, ventilação e bacias de contenção.",
          items: [
            {
              tag: "Tanques",
              metric: "15",
              unit: "m",
              extra: "3 × 3.000 L",
              title: "Externos e internos",
              text: "Externos a 15 m de prédios ou com dilúvio e espuma. Internos: no máximo três tanques metálicos de 3.000 L."
            },
            {
              tag: "Ventilação",
              metric: "25",
              unit: "%",
              extra: "LEL",
              title: "Limite de vapores",
              text: "Manter abaixo de 25% do LEL. Em ambiente fechado: 0,3 m³/min/m². Em 25% do LEL, exaustão total."
            },
            {
              tag: "Bacia secundária",
              metric: "110",
              unit: "%",
              title: "Contenção e drenagem",
              text: "Capacidade de 110% do maior tanque + água de combate. Válvulas fechadas e travadas. Drena só após análise."
            }
          ],
          transcript: "Tanques, L E L e contenção. Tanques externos a pelo menos 15 metros de prédios habitados, ou com dilúvio e espuma. Dentro do edifício, no máximo três tanques metálicos de 3.000 litros. A ventilação mantém os vapores abaixo de 25 por cento do L E L, com vazão mínima de 0,3 metros cúbicos por minuto por metro quadrado. A bacia de contenção tem no mínimo 110 por cento do maior tanque, válvulas travadas, e a água de chuva só drena após análise sem contaminantes."
        },
        {
          id: "nr20-m4-diluvio",
          type: "video",
          kicker: "Vídeo",
          title: "Sistema por Dilúvio, Chuveiros Diários e Inspeção de Tanques",
          playerId: "panda-e513dde9-72ee-4c7d-8aae-a55d6e8fb8be",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e513dde9-72ee-4c7d-8aae-a55d6e8fb8be",
          transcript: "Vídeo. Sistema por Dilúvio, Chuveiros Diários e Inspeção de Tanques. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m4-limites",
          type: "console",
          title: "Limite certo",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Limite certo. Uma situação por vez. Toque na ação certa. São seis situações: armário corta-fogo, zona classificada, tanque interno, L E L, bacia de contenção e chuveiro de emergência.",
          doneText: "As seis situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "Frações de até 20 L fora do depósito principal. Qual limite do armário corta-fogo?",
              hint: "O volume total por armário corta-fogo não pode exceder 227 litros. Também precisa atender só o consumo de um turno e ficar em armário corta-fogo ou câmara refrigerada segura. Na doca, o limite é outro: até 8 horas e menos de 1.135 litros.",
              answer: "227",
              options: [
                { id: "500", text: "Até 500 litros por armário" },
                { id: "227", text: "No máximo 227 litros por armário" }
              ]
            },
            {
              ask: "Empilhadeira em área com vapores inflamáveis. Pode operar sem classificação EE/ES?",
              hint: "Em Zonas 0, 1 e 2, equipamentos móveis precisam de classificação EE ou ES. Sem essa certificação, o uso é proibido. Caminhões-tanque também precisam aterrar antes de abrir tampas ou válvulas.",
              answer: "nao",
              options: [
                { id: "sim", text: "Sim, se o operador for experiente" },
                { id: "nao", text: "Não. Sem EE ou ES, é proibido" }
              ]
            },
            {
              ask: "Tanques dentro do edifício. Qual regra vale?",
              hint: "Dentro do edifício: projeto e APP/APR, área exclusiva no térreo/subsolo/pilotis, bacia de contenção e no máximo três tanques metálicos de até 3.000 litros cada, com paredes e portas corta-fogo. Externos ficam a pelo menos 15 metros de prédios habitados.",
              answer: "tres",
              options: [
                { id: "cinco", text: "Até cinco tanques de 5.000 L" },
                { id: "tres", text: "No máximo três tanques de 3.000 L" }
              ]
            },
            {
              ask: "Ventilação com recirculação atingiu 25% do LEL. O que o sistema faz?",
              hint: "A concentração deve ficar abaixo de 25% do LEL. Com recirculação, os detectores desarmam a recirculação e convertem para exaustão externa total ao atingir 25% do LEL. Em ambientes fechados, a vazão mínima é 0,3 m³/min/m².",
              answer: "exaustao",
              options: [
                { id: "segue", text: "Mantém a recirculação e só alarma" },
                { id: "exaustao", text: "Desarma a recirculação e exaure para fora" }
              ]
            },
            {
              ask: "Choveu na bacia de contenção. Pode abrir a válvula e drenar agora?",
              hint: "A bacia deve ter no mínimo 110% do maior tanque, mais a água de combate. As válvulas ficam fechadas e travadas com cadeado. A água de chuva só drena depois de análise de CQ ou ETE sem contaminantes.",
              answer: "analise",
              options: [
                { id: "abre", text: "Sim. Abro e escoo na rede" },
                { id: "analise", text: "Não. Só após análise sem contaminantes" }
              ]
            },
            {
              ask: "Quando testar chuveiros de emergência e lava-olhos?",
              hint: "Chuveiros e lava-olhos devem ser testados no início de cada turno ou antes de iniciar a manipulação. Em risco grave e iminente, o trabalho é interrompido na hora.",
              answer: "turno",
              options: [
                { id: "mes", text: "Uma vez por mês, na inspeção geral" },
                { id: "turno", text: "No início de cada turno de trabalho" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Gestão Operacional de Riscos (APP/APR), Permissão de Trabalho (PT), Plano de Emergência (PAE) e Comunicação",
      objective: "Capacitar os trabalhadores na gestão operacional de riscos com APP/APR, permissão de trabalho, plano de emergência e comunicação em situações de crise.",
      titleUnlock: {
        title: "RISCO NO LUGAR",
        body: "Você diferencia perigo e risco, aplica APP/APR, PT, PAE e a notificação legal.",
        icon: "✓"
      },
      screens: [
        {
          id: "nr20-m5-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo5.png",
          imageAlt: "Capa do módulo 5",
          title: "Módulo 5 — Gestão Operacional de Riscos (APP/APR), Permissão de Trabalho (PT), Plano de Emergência (PAE) e Comunicação",
          subtitle: "APP/APR, permissão de trabalho, plano de emergência e comunicação operacional.",
          transcript: "Módulo 5. Gestão operacional de riscos, A P P e A P R, permissão de trabalho, plano de emergência P A E e comunicação."
        },
        {
          id: "nr20-m5-app-apr",
          type: "video",
          kicker: "Vídeo",
          title: "Análise Preliminar de Perigos e Riscos (APP/APR): Conceito e Diferença Essencial",
          playerId: "panda-0dd436af-e1ed-4877-99ae-a06a9ea42685",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0dd436af-e1ed-4877-99ae-a06a9ea42685",
          transcript: "Vídeo. Análise Preliminar de Perigos e Riscos (APP/APR): Conceito e Diferença Essencial. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-etapas-app",
          type: "video",
          kicker: "Vídeo",
          title: "Etapas da APP/APR, Perigos Típicos e Hierarquia de Controle",
          playerId: "panda-2004cbb5-cba8-4822-98a0-4663ef38d5c6",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2004cbb5-cba8-4822-98a0-4663ef38d5c6",
          transcript: "Vídeo. Etapas da APP/APR, Perigos Típicos e Hierarquia de Controle. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-pt",
          type: "video",
          kicker: "Vídeo",
          title: "Permissão de Trabalho (PT): Conceito, Atividades Críticas e Relação com a APR",
          playerId: "panda-d068eda9-16db-4aef-9511-b63b11adfe20",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d068eda9-16db-4aef-9511-b63b11adfe20",
          transcript: "Vídeo. Permissão de Trabalho (PT): Conceito, Atividades Críticas e Relação com a APR. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-liberacao-pt",
          type: "video",
          kicker: "Vídeo",
          title: "Etapas de Liberação da PT, Conteúdo Recomendado e Motivos de Interrupção",
          playerId: "panda-5682d426-09a3-47f8-bce6-9234a7d408fb",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=5682d426-09a3-47f8-bce6-9234a7d408fb",
          transcript: "Vídeo. Etapas de Liberação da PT, Conteúdo Recomendado e Motivos de Interrupção. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-vazamentos",
          type: "content",
          layout: "list",
          title: "Emergências com Inflamáveis",
          lead: {
            label: "Pequenos vazamentos",
            text: "Lavar a área com grande quantidade de água."
          },
          listTitle: "Grandes vazamentos",
          bullets: [
            "Isolar a área",
            "Sinalizar o local",
            "Afastar os curiosos",
            "Eliminar as fontes de ignição da área",
            "Impedir a contaminação das fontes, lagos e rios, através do uso de barreiras e dispositivos que possam confinar o produto",
            "Absorver com areia, terra ou outro material absorvente e recolher em embalagem apropriadas para posterior destruição",
            "Avisar imediatamente as autoridades locais: Bombeiros, Órgão Ambiental, Defesa Civil e Polícia Rodoviária"
          ],
          transcript: "Emergências com inflamáveis. Em pequenos vazamentos, lavar a área com grande quantidade de água. Em grandes vazamentos: isolar a área, sinalizar o local, afastar os curiosos, eliminar as fontes de ignição, impedir a contaminação de fontes, lagos e rios, absorver o produto com areia, terra ou outro material absorvente e avisar imediatamente as autoridades locais."
        },
        {
          id: "nr20-m5-brigada",
          type: "video",
          kicker: "Vídeo",
          title: "Atuação da Brigada, Primeiros Socorros e Cortes de Segurança",
          playerId: "panda-b6655311-b205-4185-bab8-edd457471c60",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=b6655311-b205-4185-bab8-edd457471c60",
          transcript: "Vídeo. Atuação da Brigada, Primeiros Socorros e Cortes de Segurança. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-abandono",
          type: "video",
          kicker: "Vídeo",
          title: "Protocolo de Abandono de Área e Contenção de Vazamentos",
          playerId: "panda-819f11bd-08e0-4e12-8458-dee74a97ab48",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=819f11bd-08e0-4e12-8458-dee74a97ab48",
          transcript: "Vídeo. Protocolo de Abandono de Área e Contenção de Vazamentos. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-notificacao",
          type: "video",
          kicker: "Vídeo",
          title: "Notificação Legal ao MTE, Investigação de Acidentes, Reciclagem e Conclusão",
          playerId: "panda-3c8059e2-7405-4ef9-96b0-518b5789e10d",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=3c8059e2-7405-4ef9-96b0-518b5789e10d",
          transcript: "Vídeo. Notificação Legal ao MTE, Investigação de Acidentes, Reciclagem e Conclusão. Assista ao vídeo para avançar."
        },
        {
          id: "nr20-m5-console",
          type: "console",
          title: "Decisão certa",
          body: "Uma situação por vez. Toque na ação certa.",
          transcript: "Decisão certa. Uma situação por vez. Toque na ação certa. São cinco situações sobre A P P e A P R, permissão de trabalho, P A E e notificação.",
          doneText: "As cinco situações estão certas.",
          doneLabel: "Concluir",
          items: [
            {
              ask: "A gasolina é inflamável. Isso é perigo ou risco?",
              hint: "Perigo é a fonte com potencial de dano — a inflamabilidade da gasolina. Risco é a probabilidade de incêndio ou explosão se os vapores encontrarem ignição.",
              answer: "perigo",
              options: [
                { id: "risco", text: "Risco, porque pode explodir" },
                { id: "perigo", text: "Perigo: a inflamabilidade da gasolina" }
              ]
            },
            {
              ask: "Na hierarquia de controle, o EPI sozinho elimina risco de incêndio e explosão?",
              hint: "Elimine o perigo sempre que possível, use EPC e medidas administrativas. O EPI, isoladamente, não elimina os perigos de incêndio e explosão.",
              answer: "nao",
              options: [
                { id: "sim", text: "Sim. Com EPI está seguro" },
                { id: "nao", text: "Não. EPI sozinho não elimina" }
              ]
            },
            {
              ask: "Qual a relação entre APP/APR e Permissão de Trabalho?",
              hint: "São complementares: a APP/APR analisa perigos e define controles; a PT verifica se as condições estão prontas no campo e libera o serviço.",
              answer: "comp",
              options: [
                { id: "igual", text: "São o mesmo documento" },
                { id: "comp", text: "São complementares: APR analisa, PT libera" }
              ]
            },
            {
              ask: "Após a emissão da PET, durante a realização do trabalho surge um vazamento de gás. O que fazer?",
              hint: "A PET não é autorização definitiva. Interrompa na hora se houver vazamento, gás perigoso, falha de ventilação, perda de bloqueio ou fonte de ignição imprevista.",
              answer: "para",
              options: [
                { id: "segue", text: "Sigo. A PET já autorizou" },
                { id: "para", text: "Interrompo o serviço na hora" }
              ]
            },
            {
              ask: "Houve um acidente de trabalho com queimadura de 2 grau e internação após a explosão. O que a empresa deve fazer?",
              hint: "Em acidente com queimadura de 2º grau e internação após explosão, a empresa deve emitir a CAT no e-Social e informar o sindicato.",
              answer: "cat",
              options: [
                { id: "nao", text: "Não. Só registra internamente" },
                { id: "cat", text: "Emitir a CAT no e-Social e informar o sindicato" }
              ]
            }
          ]
        },
        {
          id: "nr20-m5-final",
          type: "finale",
          image: "assets/fotos/capafinal.png",
          kicker: "Conclusão",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento de NR 20 - Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis.",
          quote: "Proteger o coletivo é sempre a primeira escolha.",
          chips: ["NR-20", "INTERMEDIÁRIO", "INFLAMÁVEIS"],
          transcript: "Conclusão. Treinamento concluído. Parabéns. Você concluiu o treinamento de NR 20, Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis. Proteger o coletivo é sempre a primeira escolha."
        }
      ]
    }
  ]
};
