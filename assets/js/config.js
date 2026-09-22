/* ===========================================================================
   GRUPO ENCANTE - ARQUIVO DE CONFIGURAÇÃO
   ---------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Tudo o que muda com o tempo (número do WhatsApp, vídeos, fotos, formações,
   perguntas frequentes, depoimentos) está aqui embaixo, com explicação.

   Regra de ouro: nunca coloque preços nesta página.
   =========================================================================== */

const CONFIG = {

  /* -------------------------------------------------------------------------
     1) WHATSAPP
     Coloque o número com código do país (55), DDD e o número, só com dígitos.
     Exemplo: (84) 99999-1234  ->  "5584999991234"
     O número abaixo é o (84) 98805-7769.
     ------------------------------------------------------------------------- */
  whatsapp: "5584988057769",

  /* Mensagens prontas que vão junto com o link do WhatsApp.
     O trecho [NOME] é trocado automaticamente pelo nome do que foi clicado. */
  mensagens: {
    geral: "Olá! Vim pela página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
    plano: "Olá! Vi o plano [NOME] na página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
    destaque: "Olá! Vi o destaque [NOME] para a marcha nupcial na página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
    completo: "Olá! Vi o Encante Completo na página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
    repertorio: "Olá! Vim pela página do Grupo Encante e gostaria de ajuda para montar o repertório do meu casamento."
  },

  /* -------------------------------------------------------------------------
     2) REDES E REGIÃO
     ------------------------------------------------------------------------- */
  instagram: {
    usuario: "@grupo_encante",
    link: "https://www.instagram.com/grupo_encante/"
  },

  regiao: "Parelhas e região — Rio Grande do Norte",

  /* -------------------------------------------------------------------------
     3) MARCAS DE "PROVISÓRIO"
     Enquanto for true, a página mostra etiquetas nos trechos que ainda são
     provisórios. Quando estiver tudo pronto, troque para false.
     ------------------------------------------------------------------------- */
  mostrarMarcasProvisorias: true,

  /* -------------------------------------------------------------------------
     4) TOPO DA PÁGINA
     Foto deitada para o computador e foto em pé para o celular.
     Deixe "" (vazio) para usar o fundo provisório com a paleta.
     ------------------------------------------------------------------------- */
  fotoTopo: "imagens/site/topo.jpg",
  fotoTopoCelular: "imagens/site/topo-celular.jpg",
  fotoTopoAlt: "Davi tocando violão e Maria Clara cantando em um casamento",

  /* -------------------------------------------------------------------------
     5) VÍDEOS
     De 2 a 3 vídeos verticais, comprimidos em MP4 (abaixo de 10 MB cada).
     - arquivo: caminho do MP4 dentro da pasta imagens/
     - capa:    imagem que aparece antes de tocar (pasta imagens/). Pode ficar ""
     - titulo:  frase curta que aparece embaixo do vídeo
     Os vídeos NÃO tocam sozinhos e tocam COM SOM quando a pessoa aperta play.
     ------------------------------------------------------------------------- */
  videos: [
    {
      arquivo: "",                 // ex.: "imagens/entrada-da-noiva.mp4"
      capa: "",                    // ex.: "imagens/capa-entrada.jpg"
      titulo: "Entrada da noiva com metais",
      provisorio: true             // troque para false quando colocar o vídeo real
    },
    {
      arquivo: "",
      capa: "",
      titulo: "Entrada da noiva com violino",
      provisorio: true
    },
    {
      arquivo: "",
      capa: "",
      titulo: "Saída dos noivos",
      provisorio: true
    }
  ],

  /* -------------------------------------------------------------------------
     5.1) MOMENTOS (faixa de fotos que rola para o lado, abaixo dos vídeos)
     Todas as fotos aparecem com a mesma altura; a largura acompanha o
     formato de cada uma, então dá para misturar fotos em pé e deitadas.
     - arquivo: caminho da foto
     - alt:     descrição para quem não enxerga a imagem
     - legenda: opcional, frase curta que aparece sobre a foto
     Deixe a lista vazia ( galeria: [] ) para o bloco não aparecer.
     Atenção: só publique foto de casal depois que o casal autorizar.
     ------------------------------------------------------------------------- */
  galeria: [
    { arquivo: "imagens/site/momento-01.jpg", alt: "Grupo Encante ao lado dos noivos depois da cerimônia" },
    { arquivo: "imagens/site/momento-02.jpg", alt: "Grupo Encante com os noivos diante do altar da igreja" },
    { arquivo: "imagens/site/momento-03.jpg", alt: "Noivos abraçados dançando enquanto o Grupo Encante toca ao fundo" },
    { arquivo: "imagens/site/momento-04.jpg", alt: "Grupo Encante com os noivos na igreja" },
    { arquivo: "imagens/site/momento-05.jpg", alt: "Grupo Encante ao lado do casal na saída da igreja" },
    { arquivo: "imagens/site/momento-06.jpg", alt: "Grupo Encante com os noivos no tapete da igreja" },
    { arquivo: "imagens/site/momento-07.jpg", alt: "Grupo Encante com os noivos diante do altar" },
    { arquivo: "imagens/site/momento-08.jpg", alt: "Grupo Encante com os noivos ao final da cerimônia" },
    { arquivo: "imagens/site/momento-09.jpg", alt: "Grupo Encante com os noivos na recepção" },
    { arquivo: "imagens/site/momento-10.jpg", alt: "Grupo Encante com os noivos em uma recepção ao ar livre" }
  ],

  /* -------------------------------------------------------------------------
     6) O QUE ESTÁ INCLUSO EM QUALQUER FORMAÇÃO
     ------------------------------------------------------------------------- */
  inclusos: [
    {
      titulo: "A cerimônia inteira",
      texto: "Celebração ou missa, com toda a musicalização do começo ao fim.",
      icone: "aliancas"
    },
    {
      titulo: "Das entradas à saída",
      texto: "Do cortejo de entrada até a música final de saída dos noivos.",
      icone: "portas"
    },
    {
      titulo: "Repertório do casal",
      texto: "Vocês escolhem as músicas, com a nossa orientação em cada momento.",
      icone: "repertorio"
    },
    {
      titulo: "Músicos parceiros profissionais",
      texto: "A formação que vocês escolherem, com músicos profissionais da região.",
      icone: "pessoa"
    }
  ],

  /* -------------------------------------------------------------------------
     6.1) ÍCONES (instrumentos, alianças, portas e o selo do Encante Completo)
     Arquivos PNG de fundo transparente, na pasta imagens/icones/.
     O nome da esquerda é o apelido usado em "icone" nas partes de baixo.
     Se você apagar um nome daqui, a página volta a usar o desenho interno.
     ------------------------------------------------------------------------- */
  iconesImagem: {
    violao: "imagens/icones/violao.png",
    violino: "imagens/icones/violino.png",
    teclado: "imagens/icones/teclado.png",
    trompete: "imagens/icones/trompete.png",
    saxofone: "imagens/icones/saxofone.png",
    metaisEviolino: "imagens/icones/metais-violino.png",
    aliancas: "imagens/icones/aliancas.png",
    portas: "imagens/icones/portas.png",
    selo: "imagens/icones/selo-completo.png"
  },

  /* -------------------------------------------------------------------------
     7) ETAPA 1 — AS BASES
     A formação que conduz a cerimônia inteira.
     ------------------------------------------------------------------------- */
  bases: [
    {
      nome: "Essencial",
      formacao: "Duas vozes e violão",
      descricao: "A base do Encante: as duas vozes e o violão conduzindo toda a cerimônia.",
      icone: "violao"
    },
    {
      nome: "Harmonia",
      formacao: "Duas vozes, violão e teclado",
      descricao: "O teclado dá corpo e preenchimento a todas as músicas da cerimônia.",
      icone: "teclado"
    }
  ],

  /* -------------------------------------------------------------------------
     8) ETAPA 2 — OS DESTAQUES DA MARCHA NUPCIAL
     Podem ser escolhidos sozinhos ou os dois juntos.
     ------------------------------------------------------------------------- */
  destaques: [
    {
      nome: "Metais",
      formacao: "Dois trompetes, com ou sem saxofone",
      descricao: "Presença imponente e marcante para receber a noiva.",
      icone: "trompete"
    },
    {
      nome: "Violino",
      formacao: "Violino à frente do altar",
      descricao: "Mais delicado e emocionante. Também brilha nas músicas instrumentais da cerimônia.",
      icone: "violino"
    },
    {
      nome: "Metais e violino",
      formacao: "Trompetes, saxofone e violino",
      descricao: "A força dos metais com a delicadeza do violino, no mesmo momento.",
      icone: "metaisEviolino"
    }
  ],

  /* Frase que aparece logo abaixo dos três destaques. */
  notaDestaques: "Vocês podem escolher metais, violino ou os dois. Nossos arranjos são pensados para que todos os instrumentos conversem entre si, seja qual for a combinação.",

  /* -------------------------------------------------------------------------
     9) ENCANTE COMPLETO (a formação em evidência)
     ------------------------------------------------------------------------- */
  completo: {
    nome: "Encante Completo",
    formacao: "Duas vozes, violão, teclado, dois trompetes, saxofone e violino",
    descricao: "A formação mais grandiosa do Encante: todos os instrumentos juntos, da primeira entrada à música final.",
    icone: "selo",
    // [CONFIRMAR] Texto do selo. Deixe "" para não mostrar a pastilha dourada.
    selo: "Mais escolhido",
    seloProvisorio: true
  },

  /* -------------------------------------------------------------------------
     10) QUEM SOMOS
     Use **asteriscos duplos** em volta de uma palavra para deixá-la em negrito.
     ------------------------------------------------------------------------- */
  quemSomos: {
    texto: "Somos **Davi e Maria Clara**, um casal que canta junto há anos. Hoje levamos essa música para o dia mais importante da vida de outros casais, e cada cerimônia é preparada com o mesmo cuidado que teríamos com a nossa.",
    textoMusicos: "Ao nosso lado, músicos parceiros profissionais de teclado, metais e violino, escolhidos a dedo para cada cerimônia.",
    davi: {
      nome: "Davi",
      funcao: "Voz e violão",
      foto: "imagens/site/davi.jpg"
    },
    parceira: {
      nome: "Maria Clara",
      funcao: "Voz",
      foto: "imagens/site/maria-clara.jpg"
    },
    // Foto que acompanha o parágrafo dos músicos parceiros (deixe "" para tirar).
    fotoMusicos: "imagens/site/grupo-igreja.jpg",
    fotoMusicosAlt: "Músicos do Grupo Encante com trompetes e saxofone diante do altar"
  },

  /* -------------------------------------------------------------------------
     11) DEPOIMENTOS
     A seção só aparece se houver pelo menos um depoimento aqui dentro.
     Nunca publique depoimento sem autorização do casal.
     Modelo para copiar e colar dentro dos colchetes:
       { casal: "Ana e Pedro", local: "Igreja Matriz", texto: "...", foto: "" }
     ------------------------------------------------------------------------- */
  depoimentos: [],

  /* -------------------------------------------------------------------------
     12) PERGUNTAS FREQUENTES
     Troque o texto de "resposta" e mude "provisorio" para false quando a
     resposta já estiver revisada.
     ------------------------------------------------------------------------- */
  perguntas: [
    {
      pergunta: "Quais cidades vocês atendem?",
      resposta: "Atendemos Parelhas e toda a região. Fale com a gente no WhatsApp contando onde será a sua cerimônia.",
      provisorio: false
    },
    {
      pergunta: "O equipamento de som está incluso?",
      resposta: "Quando a cerimônia é na igreja, usamos o som da própria igreja. Em cerimônia externa ou na recepção, o equipamento de som não está incluso — nesse caso a gente conversa sobre como resolver o som do seu evento.",
      provisorio: false
    },
    {
      pergunta: "Com quanta antecedência preciso reservar?",
      resposta: "[CONFIRMAR] Quanto antes, melhor: as datas mais procuradas costumam ser reservadas com meses de antecedência.",
      provisorio: true
    },
    {
      pergunta: "Nós escolhemos as músicas?",
      resposta: "Sim. O repertório é escolhido por vocês, e a gente ajuda a encaixar cada música no momento certo da cerimônia.",
      provisorio: false
    },
    {
      pergunta: "Vocês tocam em celebração e em missa?",
      resposta: "Sim, nos dois formatos. Na missa entram também os cantos da liturgia, que costumam quase dobrar o número de músicas.",
      provisorio: false
    },
    {
      pergunta: "Vocês também tocam na recepção e em outros eventos?",
      resposta: "Sim. Além das cerimônias, tocamos em recepções e eventos particulares que pedem uma música agradável de ambiente, com MPB e canções que combinam com a ocasião.",
      provisorio: false
    },
    {
      pergunta: "Podemos personalizar a formação?",
      resposta: "Podem. As bases e os destaques são um ponto de partida: dá para ajustar os instrumentos conforme o que vocês imaginam para a cerimônia.",
      provisorio: false
    }
  ]
};
