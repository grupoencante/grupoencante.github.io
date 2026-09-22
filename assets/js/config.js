/* ===========================================================================
   GRUPO ENCANTE - ARQUIVO DE CONFIGURAÇÃO
   ---------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Tudo o que muda com o tempo (número do WhatsApp, vídeos, fotos, planos,
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

  /* Mensagens prontas que vão junto com o link do WhatsApp. */
  mensagens: {
    geral: "Olá! Vim pela página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
    // O trecho [NOME DO PLANO] é trocado automaticamente pelo plano clicado.
    plano: "Olá! Vi o plano [NOME DO PLANO] na página do Grupo Encante e gostaria de consultar valores para o meu casamento.",
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
     Quando tiver a foto do grupo tocando, salve na pasta imagens/ e escreva o
     caminho aqui. Exemplo: "imagens/grupo-cerimonia.jpg"
     Deixe "" (vazio) para usar o fundo provisório com a paleta.
     ------------------------------------------------------------------------- */
  fotoTopo: "imagens/site/topo.jpg",
  // Versão em pé da mesma foto, usada no celular (deixe "" para usar só a de cima).
  fotoTopoCelular: "imagens/site/topo-celular.jpg",
  fotoTopoAlt: "Grupo Encante tocando em um casamento: saxofone, voz e violão",

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
      titulo: "Entrada da noiva",
      provisorio: true             // troque para false quando colocar o vídeo real
    },
    {
      arquivo: "",
      capa: "",
      titulo: "Marcha nupcial com metais",
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
     6) O QUE ESTÁ INCLUSO EM QUALQUER PLANO
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
     6.1) ÍCONES (instrumentos, alianças, portas e o selo do plano completo)
     Arquivos PNG de fundo transparente, na pasta imagens/icones/.
     O nome da esquerda é o apelido usado em "icone" nas partes de cima.
     Se você apagar um nome daqui, a página volta a usar o desenho interno.
     ------------------------------------------------------------------------- */
  iconesImagem: {
    violao: "imagens/icones/violao.png",
    violino: "imagens/icones/violino.png",
    teclado: "imagens/icones/teclado.png",
    trompete: "imagens/icones/trompete.png",
    sax: "imagens/icones/sax.png",
    aliancas: "imagens/icones/aliancas.png",
    portas: "imagens/icones/portas.png",
    selo: "imagens/icones/selo-completo.png"
  },

  /* -------------------------------------------------------------------------
     7) PLANOS
     Não coloque preço em nenhum lugar. O botão sempre leva ao WhatsApp.
     - base:     "essencial" (duas vozes e violão) ou "harmonia" (com teclado)
     - destaque: "" (sem destaque na marcha), "metais" ou "violino"
     - foto:     foto fechada do instrumento (pasta imagens/). Vazio = ícone dourado
     ------------------------------------------------------------------------- */
  planos: [
    {
      nome: "Essencial",
      base: "essencial",
      destaque: "",
      formacao: "Duas vozes e violão",
      descricao: "A base do Encante: as duas vozes e o violão conduzindo toda a cerimônia.",
      icone: "violao",
      foto: ""
    },
    {
      nome: "Essencial com Violino",
      base: "essencial",
      destaque: "violino",
      formacao: "Duas vozes, violão e violino",
      descricao: "O violino recebe a noiva na marcha nupcial e enriquece os momentos instrumentais.",
      icone: "violino",
      foto: ""
    },
    {
      nome: "Harmonia",
      base: "harmonia",
      destaque: "",
      formacao: "Duas vozes, violão e teclado",
      descricao: "O teclado dá corpo e preenchimento a todas as músicas da cerimônia.",
      icone: "teclado",
      foto: ""
    },
    {
      nome: "Harmonia com Metais",
      base: "harmonia",
      destaque: "metais",
      formacao: "Duas vozes, violão, teclado e dois trompetes",
      descricao: "Dois trompetes à frente do altar para uma marcha nupcial imponente.",
      icone: "trompete",
      foto: ""
    },
    {
      nome: "Harmonia com Violino",
      base: "harmonia",
      destaque: "violino",
      formacao: "Duas vozes, violão, teclado e violino",
      descricao: "A delicadeza do violino somada ao preenchimento do teclado.",
      icone: "violino",
      foto: ""
    },
    {
      nome: "Encante Completo",
      base: "harmonia",
      destaque: "metais",
      formacao: "Duas vozes, violão, teclado, dois trompetes e sax tenor",
      descricao: "Tudo o que o Encante pode oferecer: a base completa e os metais recebendo a noiva à frente do altar.",
      icone: "selo",
      foto: "",
      emDestaque: true,
      // [CONFIRMAR] Texto do selo do plano em destaque.
      selo: "Mais escolhido",
      seloProvisorio: true
    }
  ],

  /* -------------------------------------------------------------------------
     8) QUEM SOMOS
     ------------------------------------------------------------------------- */
  quemSomos: {
    davi: {
      nome: "Davi",
      funcao: "Voz e violão",
      texto: "[Texto provisório, a revisar.] Lidero o Grupo Encante no violão e na voz. Acompanho cada cerimônia junto com o casal, da primeira conversa até a última música.",
      foto: "imagens/site/davi.jpg",
      provisorio: true
    },
    parceira: {
      nome: "Maria Clara",
      funcao: "Vocalista principal",
      texto: "[Texto provisório, a revisar.] É a voz principal do Grupo Encante e está presente em todas as cerimônias, conduzindo as músicas ao lado do Davi.",
      foto: "imagens/site/maria-clara.jpg",
      provisorio: true
    },
    musicos: "Os demais instrumentos ficam com músicos parceiros profissionais, que tocam com a gente conforme a disponibilidade de cada data. A formação pode mudar; o cuidado com a sua cerimônia, não.",
    // Foto que ilustra os músicos parceiros (deixe "" para não aparecer).
    fotoMusicos: "imagens/site/grupo-igreja.jpg",
    fotoMusicosAlt: "Músicos do Grupo Encante com trompetes e sax tenor diante do altar"
  },

  /* -------------------------------------------------------------------------
     9) DEPOIMENTOS
     A seção só aparece se houver pelo menos um depoimento aqui dentro.
     Nunca publique depoimento sem autorização do casal.
     Modelo para copiar e colar dentro dos colchetes:
       { casal: "Ana e Pedro", local: "Igreja Matriz", texto: "...", foto: "" }
     ------------------------------------------------------------------------- */
  depoimentos: [],

  /* -------------------------------------------------------------------------
     10) PERGUNTAS FREQUENTES
     Quase todas as respostas estão provisórias. Troque pelo texto real e
     mude "provisorio" para false em cada uma que você já revisou.
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
      resposta: "Podem. Os planos são um ponto de partida: dá para ajustar os instrumentos conforme o que vocês imaginam para a cerimônia.",
      provisorio: false
    }
  ]
};
