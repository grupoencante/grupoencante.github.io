/* ===========================================================================
   GRUPO ENCANTE — COMPORTAMENTO DA PÁGINA
   ---------------------------------------------------------------------------
   Este arquivo monta a página a partir do que está em config.js.
   Em geral você não precisa mexer aqui: edite apenas o config.js.
   =========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
     Ícones de traço fino (dourado). Usados enquanto não houver fotos.
     --------------------------------------------------------------------- */
  const ICONES = {
    violao: '<svg viewBox="0 0 48 48" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path d="M24 44c-6.2 0-10.5-4.2-10.5-9.4 0-3.7 2.3-5.9 2.3-9.1 0-3-2.1-4.6-2.1-7.5 0-4.3 4.4-7.6 10.3-7.6s10.3 3.3 10.3 7.6c0 2.9-2.1 4.5-2.1 7.5 0 3.2 2.3 5.4 2.3 9.1 0 5.2-4.3 9.4-10.5 9.4z"/><circle cx="24" cy="26.5" r="3.3"/><path d="M22 10.4V5.5h4v4.9"/><path d="M20.8 4h6.4"/></svg>',
    violino: '<svg viewBox="0 0 48 48" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path d="M21 41c-4.4 0-7.6-3-7.6-6.9 0-2.4 1.5-4 2.6-5.4.9-1.1 1.4-2 1.4-2.9s-.5-1.8-1.4-2.7c-1-1.1-2.2-2.4-2.2-4.3 0-3.3 3.2-5.7 7.2-5.7s7.2 2.4 7.2 5.7c0 1.9-1.2 3.2-2.2 4.3-.9.9-1.4 1.8-1.4 2.7s.5 1.8 1.4 2.9c1.1 1.4 2.6 3 2.6 5.4 0 3.9-3.2 6.9-7.6 6.9z"/><path d="M17.6 27c-.8 2.1-.8 4.3 0 6.4M24.4 27c.8 2.1.8 4.3 0 6.4"/><path d="M24.4 16.6l6.4-6.4"/><path d="M30.8 10.2c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3-.9.9-2.4 1-3.4.2"/><path d="M7.5 34.5L33.5 21.5"/></svg>',
    teclado: '<svg viewBox="0 0 48 48" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="15" width="38" height="19" rx="2"/><path d="M13.5 15v11M22 15v11M30.5 15v11M38 15v11"/><path d="M5 26h38"/><path d="M10 15v7h3v-7M18.5 15v7h3v-7M27 15v7h3v-7M35.5 15v7h3v-7"/></svg>',
    trompete: '<svg viewBox="0 0 48 48" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path d="M43 15.5v17l-9-4.3v-8.4z"/><path d="M34 24H13.5"/><path d="M17 17.5h3.2v6.5H17zM23 17.5h3.2v6.5H23zM29 17.5h3.2v6.5H29z"/><path d="M13.5 20.5v7"/><path d="M13.5 24h-4"/><path d="M9.5 21.5v5"/></svg>',
    saxofone: '<svg viewBox="0 0 48 48" aria-hidden="true" stroke-linecap="round" stroke-linejoin="round"><path d="M26.5 5.5h8"/><path d="M30.5 5.5v16.8c0 9.8-4.8 16.2-12 16.2-4.6 0-8.2-3.4-8.2-7.6 0-4.2 3.4-7.3 7.8-7.3h4.6"/><path d="M10.3 30.9c-2.8-.6-5.4.7-6.3 3l6.6 2.8"/><circle cx="30.5" cy="13" r="1.3"/><circle cx="30.5" cy="19" r="1.3"/></svg>',
    cerimonia: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4v40"/><path d="M14 16h20"/><path d="M8 44V28c0-8.8 7.2-16 16-16s16 7.2 16 16v16"/></svg>',
    entradas: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 42V14c0-4.4 3.6-8 8-8h8c4.4 0 8 3.6 8 8v28"/><path d="M6 42h36"/><circle cx="30" cy="24" r="1.6"/><path d="M20 14c0-2.2 1.8-4 4-4s4 1.8 4 4"/></svg>',
    repertorio: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 34V10l20-4v24"/><circle cx="14" cy="34" r="4.2"/><circle cx="34" cy="30" r="4.2"/><path d="M18 17l20-4"/></svg>',
    som: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="5" width="24" height="38" rx="3"/><circle cx="24" cy="30" r="7"/><circle cx="24" cy="14" r="3.2"/></svg>',
    pessoa: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="17" r="8"/><path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>'
  };

  /* ---------------------------------------------------------------------
     Ajudantes
     --------------------------------------------------------------------- */

  // Evita que um texto do config quebre o HTML da página.
  function texto(valor) {
    return String(valor == null ? "" : valor).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Deixa em negrito o que estiver entre **asteriscos duplos**.
  // O texto é escapado antes, então isso não abre porta para HTML solto.
  function negrito(valor) {
    return texto(valor).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  // Se houver um arquivo de ícone no config, ele tem preferência sobre o
  // desenho interno.
  function icone(nome) {
    const imagens = CONFIG.iconesImagem || {};
    if (imagens[nome]) {
      return '<img class="icone-imagem" src="' + texto(imagens[nome]) + '" alt="" loading="lazy">';
    }
    return ICONES[nome] || ICONES.repertorio;
  }

  const numeroDefinido =
    typeof CONFIG.whatsapp === "string" && /^\d{12,13}$/.test(CONFIG.whatsapp.replace(/\D/g, ""));

  function linkWhatsApp(mensagem) {
    const numero = String(CONFIG.whatsapp).replace(/\D/g, "");
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  }

  // Aplica o link do WhatsApp em um elemento <a>.
  function aplicarWhatsApp(elemento, mensagem) {
    if (numeroDefinido) {
      elemento.href = linkWhatsApp(mensagem);
      elemento.target = "_blank";
      elemento.rel = "noopener";
      return;
    }
    // Enquanto o número não estiver no config.js, o botão avisa em vez de abrir.
    elemento.href = "#";
    elemento.addEventListener("click", function (evento) {
      evento.preventDefault();
      window.alert(
        "Falta configurar o número do WhatsApp.\n\n" +
          "Abra o arquivo assets/js/config.js e escreva o número no campo " +
          '"whatsapp", assim: "5584999991234".\n\n' +
          "Mensagem que seria enviada:\n" + mensagem
      );
    });
  }

  function marcaProvisoria(rotulo) {
    if (!CONFIG.mostrarMarcasProvisorias) return "";
    return '<span class="provisorio">' + texto(rotulo || "Provisório") + "</span>";
  }

  /* ---------------------------------------------------------------------
     Topo: foto de fundo e entrada suave
     --------------------------------------------------------------------- */
  function montarTopo() {
    const fundo = document.getElementById("topo-fundo");
    if (CONFIG.fotoTopo) {
      // O estilo escolhe sozinho entre a foto larga e a foto em pé (celular).
      // O endereço precisa ser completo: dentro do CSS, um caminho relativo
      // seria procurado a partir da pasta do arquivo de estilo.
      const enderecoCompleto = function (caminho) {
        return 'url("' + new URL(caminho, document.baseURI).href + '")';
      };
      fundo.style.setProperty("--foto-topo", enderecoCompleto(CONFIG.fotoTopo));
      if (CONFIG.fotoTopoCelular) {
        fundo.style.setProperty("--foto-topo-celular", enderecoCompleto(CONFIG.fotoTopoCelular));
      }
      fundo.classList.add("topo__fundo--foto");
      fundo.setAttribute("role", "img");
      fundo.setAttribute("aria-label", CONFIG.fotoTopoAlt || "");
      fundo.removeAttribute("aria-hidden");
    } else {
      fundo.classList.add("topo__fundo--provisorio");
    }

    const querMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!querMenosMovimento) {
      const partes = document.querySelectorAll(
        ".topo__marca, .topo .ornamento, .topo__titulo, .topo__subtitulo, .topo__botoes"
      );
      partes.forEach(function (parte, indice) {
        parte.classList.add("anima-entrada");
        if (indice > 0) parte.classList.add("anima-entrada--" + Math.min(indice + 1, 4));
      });
    }
  }

  /* ---------------------------------------------------------------------
     Vídeos
     --------------------------------------------------------------------- */
  function montarVideos() {
    const lista = document.getElementById("lista-videos");
    const videos = (CONFIG.videos || []).slice(0, 3);
    lista.innerHTML = "";

    const dica = document.getElementById("dica-videos");
    if (dica) dica.hidden = videos.length < 2;

    videos.forEach(function (item, indice) {
      const figura = document.createElement("figure");
      figura.className = "video";

      const legenda = item.titulo ? texto(item.titulo) : "Vídeo " + (indice + 1);

      if (!item.arquivo) {
        // Espaço reservado enquanto o vídeo real não está no site.
        figura.innerHTML =
          '<div class="video__moldura">' +
            '<div class="video__vazio">' +
              (CONFIG.mostrarMarcasProvisorias ? '<span class="provisorio">Falta o vídeo</span>' : "") +
              "<span>" + legenda + "</span>" +
              "<span>Vídeo vertical, MP4, até 10 MB</span>" +
            "</div>" +
          "</div>" +
          '<figcaption class="video__legenda">' + legenda + "</figcaption>";
        lista.appendChild(figura);
        return;
      }

      const moldura = document.createElement("div");
      moldura.className = "video__moldura";

      const video = document.createElement("video");
      video.setAttribute("playsinline", "");
      video.setAttribute("controls", "");
      video.setAttribute("preload", "none");
      video.src = item.arquivo;
      if (item.capa) video.poster = item.capa;
      video.hidden = true;

      const capa = document.createElement("button");
      capa.type = "button";
      capa.className = "video__capa";
      capa.setAttribute("aria-label", "Tocar o vídeo: " + legenda + " (com som)");
      if (item.capa) capa.style.backgroundImage = 'url("' + item.capa + '")';
      capa.innerHTML =
        '<span class="video__play">' + ICONES.play + "</span>" +
        '<span class="video__aviso-som">Toque para ouvir</span>';

      // O vídeo só carrega e toca quando a pessoa aperta o play — e toca com som.
      capa.addEventListener("click", function () {
        capa.remove();
        video.hidden = false;
        video.muted = false;
        video.volume = 1;
        video.play().catch(function () {
          /* Se o aparelho bloquear, os controles do vídeo continuam disponíveis. */
        });
      });

      moldura.appendChild(video);
      moldura.appendChild(capa);
      figura.appendChild(moldura);

      const rodape = document.createElement("figcaption");
      rodape.className = "video__legenda";
      rodape.innerHTML = legenda + (item.provisorio ? " " + marcaProvisoria("Provisório") : "");
      figura.appendChild(rodape);

      lista.appendChild(figura);
    });
  }

  /* ---------------------------------------------------------------------
     Faixa de fotos (some quando não há nenhuma no config)
     --------------------------------------------------------------------- */
  function montarGaleria() {
    const bloco = document.getElementById("bloco-momentos");
    const caixa = document.getElementById("lista-galeria");
    const fotos = CONFIG.galeria || [];

    if (fotos.length === 0) {
      bloco.hidden = true;
      return;
    }
    bloco.hidden = false;

    const dica = document.getElementById("dica-momentos");
    if (dica) dica.hidden = fotos.length < 2;

    caixa.innerHTML = fotos
      .map(function (foto) {
        return (
          '<figure class="momento">' +
            '<img src="' + texto(foto.arquivo) + '" alt="' + texto(foto.alt || "") + '" loading="lazy" decoding="async">' +
            (foto.legenda
              ? '<figcaption class="momento__legenda">' +
                  '<span class="momento__losango" aria-hidden="true"></span>' +
                  texto(foto.legenda) +
                "</figcaption>"
              : "") +
          "</figure>"
        );
      })
      .join("");

    ligarSetas(caixa);
  }

  /* Setas de rolagem da faixa de fotos (aparecem só no computador). */
  function ligarSetas(caixa) {
    const esquerda = document.getElementById("seta-esquerda");
    const direita = document.getElementById("seta-direita");
    if (!esquerda || !direita) return;

    const querMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Cada clique anda até a próxima foto que está fora da tela, em vez de
    // uma distância fixa: assim a rolagem sempre para alinhada numa foto.
    function posicoes() {
      const inicio = caixa.getBoundingClientRect().left + caixa.scrollLeft;
      const recuo = parseFloat(window.getComputedStyle(caixa).paddingLeft) || 0;
      return Array.prototype.map.call(caixa.children, function (item) {
        return Math.max(0, Math.round(item.getBoundingClientRect().left - inicio - recuo));
      });
    }

    function rolar(sentido) {
      const pontos = posicoes();
      const atual = caixa.scrollLeft;
      const fim = caixa.scrollWidth - caixa.clientWidth;
      let alvo;

      if (sentido > 0) {
        // Anda quase uma tela, parando na última foto que ainda cabe.
        const cabem = pontos.filter(function (p) {
          return p > atual + 8 && p <= atual + caixa.clientWidth - 40;
        });
        const proximas = pontos.filter(function (p) { return p > atual + 8; });
        alvo = cabem.length ? cabem[cabem.length - 1] : (proximas.length ? proximas[0] : fim);
      } else {
        const cabem = pontos.filter(function (p) {
          return p < atual - 8 && p >= atual - caixa.clientWidth + 40;
        });
        const anteriores = pontos.filter(function (p) { return p < atual - 8; });
        alvo = cabem.length ? cabem[0] : (anteriores.length ? anteriores[anteriores.length - 1] : 0);
      }

      const destino = Math.max(0, Math.min(alvo, fim));
      caixa.scrollTo({
        left: destino,
        behavior: querMenosMovimento ? "auto" : "smooth"
      });

      // Se o navegador não animar a rolagem, garante o movimento mesmo assim.
      window.setTimeout(function () {
        if (Math.abs(caixa.scrollLeft - destino) > 12) caixa.scrollLeft = destino;
      }, 420);
    }

    esquerda.addEventListener("click", function () { rolar(-1); });
    direita.addEventListener("click", function () { rolar(1); });

    // Apaga a seta quando não há mais para onde rolar naquele lado.
    function atualizar() {
      const sobra = caixa.scrollWidth - caixa.clientWidth;
      const temRolagem = sobra > 8;
      esquerda.hidden = !temRolagem;
      direita.hidden = !temRolagem;
      if (!temRolagem) return;
      esquerda.disabled = caixa.scrollLeft <= 4;
      direita.disabled = caixa.scrollLeft >= sobra - 4;
    }

    caixa.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    atualizar();
    // As fotos carregam aos poucos; reavalia quando cada uma chega.
    caixa.querySelectorAll("img").forEach(function (img) {
      img.addEventListener("load", atualizar);
    });
  }

  /* ---------------------------------------------------------------------
     O que está incluso
     --------------------------------------------------------------------- */
  function montarInclusos() {
    const lista = document.getElementById("lista-inclusos");
    lista.innerHTML = (CONFIG.inclusos || [])
      .map(function (item) {
        return (
          '<li class="incluso">' +
            '<div class="incluso__icone" aria-hidden="true">' + icone(item.icone) + "</div>" +
            '<h3 class="incluso__titulo">' + texto(item.titulo) + "</h3>" +
            (item.provisorio ? marcaProvisoria("A confirmar") : "") +
            "<p>" + texto(item.texto) + "</p>" +
          "</li>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------------------
     Formações (bases, destaques e o Encante Completo)
     --------------------------------------------------------------------- */
  // Um cartão de base (etapa 1) ou de destaque (etapa 2).
  // "tipo" decide qual mensagem do WhatsApp o botão usa.
  function cartaoFormacao(item, tipo) {
    const figura = item.foto
      ? '<div class="plano__figura" style="background-image:url(&quot;' + texto(item.foto) + '&quot;)" role="img" aria-label="Foto do instrumento da formação ' + texto(item.nome) + '"></div>'
      : '<div class="plano__figura" aria-hidden="true">' + icone(item.icone) + "</div>";

    return (
      '<article class="plano">' +
        figura +
        '<div class="plano__corpo">' +
          '<h4 class="plano__nome">' + texto(item.nome) + "</h4>" +
          '<p class="plano__formacao">' + texto(item.formacao) + "</p>" +
          '<p class="plano__descricao">' + texto(item.descricao) + "</p>" +
          '<a class="botao botao--contorno" href="#" data-zap-tipo="' + tipo + '" data-zap-nome="' + texto(item.nome) + '">Consultar valores</a>' +
        "</div>" +
      "</article>"
    );
  }

  function montarFormacoes() {
    const bases = CONFIG.bases || [];
    const destaques = CONFIG.destaques || [];
    const completo = CONFIG.completo;

    document.getElementById("lista-bases").innerHTML = bases
      .map(function (item) { return cartaoFormacao(item, "plano"); })
      .join("");

    document.getElementById("lista-destaques").innerHTML = destaques
      .map(function (item) { return cartaoFormacao(item, "destaque"); })
      .join("");

    const nota = document.getElementById("nota-destaques");
    if (nota) {
      nota.textContent = CONFIG.notaDestaques || "";
      nota.hidden = !CONFIG.notaDestaques;
    }

    const caixaCompleto = document.getElementById("plano-destaque");
    if (completo) {
      const figura = completo.foto
        ? '<div class="plano-destaque__icone" style="background-image:url(&quot;' + texto(completo.foto) + '&quot;);background-size:cover;border-radius:50%" role="img" aria-label="Foto da formação Encante Completo"></div>'
        : '<div class="plano-destaque__icone" aria-hidden="true">' + icone(completo.icone) + "</div>";

      caixaCompleto.innerHTML =
        '<article class="plano-destaque">' +
          (completo.selo ? '<p class="plano-destaque__selo">' + texto(completo.selo) + "</p>" : "") +
          figura +
          (completo.seloProvisorio ? marcaProvisoria("Texto do selo a confirmar") : "") +
          '<h3 class="plano-destaque__nome">' + texto(completo.nome) + "</h3>" +
          '<p class="plano-destaque__formacao">' + texto(completo.formacao) + "</p>" +
          '<p class="plano-destaque__descricao">' + texto(completo.descricao) + "</p>" +
          '<a class="botao botao--principal" href="#" data-zap-tipo="completo" data-zap-nome="' + texto(completo.nome) + '">Consultar valores</a>' +
        "</article>";
    } else {
      caixaCompleto.innerHTML = "";
    }

    // Liga todos os botões "Consultar valores" ao WhatsApp.
    document.querySelectorAll("[data-zap-tipo]").forEach(function (botao) {
      const tipo = botao.getAttribute("data-zap-tipo");
      const nome = botao.getAttribute("data-zap-nome");
      const modelo = (CONFIG.mensagens && CONFIG.mensagens[tipo]) || CONFIG.mensagens.geral;
      aplicarWhatsApp(botao, modelo.replace("[NOME]", nome));
    });
  }

  /* ---------------------------------------------------------------------
     Monte seu plano
     --------------------------------------------------------------------- */

  // Escolhe "na", "no" ou "em" conforme o lugar, para a frase ficar natural.
  function preposicao(local) {
    const primeira = local.trim().split(/\s+/)[0].toLowerCase().replace(/[.,]/g, "");
    const femininas = ["igreja", "capela", "paróquia", "paroquia", "catedral", "matriz", "fazenda", "chácara", "chacara", "praia", "casa", "comunidade"];
    const masculinos = ["santuário", "santuario", "sítio", "sitio", "salão", "salao", "espaço", "espaco", "clube", "hotel", "mosteiro", "convento"];
    if (femininas.indexOf(primeira) >= 0) return "na";
    if (masculinos.indexOf(primeira) >= 0) return "no";
    return "em";
  }

  function dataEmPortugues(valorIso) {
    if (!valorIso) return "";
    const partes = valorIso.split("-");
    if (partes.length !== 3) return valorIso;
    return partes[2] + "/" + partes[1] + "/" + partes[0];
  }

  function listaEmPortugues(itens) {
    if (itens.length === 0) return "";
    if (itens.length === 1) return itens[0];
    return itens.slice(0, -1).join(", ") + " e " + itens[itens.length - 1];
  }

  function montarFormulario() {
    const formulario = document.getElementById("formulario-plano");
    const caixas = formulario.querySelectorAll('input[name="instrumento"]');

    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      const nome = formulario.nome.value.trim();
      const local = formulario.local.value.trim();
      const data = dataEmPortugues(formulario.data.value);
      const cerimonia = formulario.cerimonia.value;

      const instrumentos = [];
      caixas.forEach(function (caixa) {
        if (caixa.checked) instrumentos.push(caixa.value);
      });

      let mensagem = "Olá!";
      if (nome) mensagem += " Meu nome é " + nome + ".";
      mensagem += " Vim pela página do Grupo Encante e montei meu plano.";

      const detalhes = [];
      if (data) detalhes.push("dia " + data);
      if (local) detalhes.push(preposicao(local) + " " + local);
      if (cerimonia) detalhes.push(cerimonia);
      if (detalhes.length) mensagem += " Casamento " + detalhes.join(", ") + ".";

      if (instrumentos.length) mensagem += " Quero: " + listaEmPortugues(instrumentos) + ".";

      mensagem += " Gostaria de consultar valores.";

      if (!numeroDefinido) {
        window.alert(
          "Falta configurar o número do WhatsApp em assets/js/config.js.\n\n" +
            "Mensagem que seria enviada:\n" + mensagem
        );
        return;
      }
      window.open(linkWhatsApp(mensagem), "_blank", "noopener");
    });
  }

  /* ---------------------------------------------------------------------
     Quem somos
     --------------------------------------------------------------------- */
  function pessoaHtml(pessoa) {
    const foto = pessoa.foto
      ? '<div class="pessoa__foto" style="background-image:url(&quot;' + texto(pessoa.foto) + '&quot;)" role="img" aria-label="Foto de ' + texto(pessoa.nome) + '"></div>'
      : '<div class="pessoa__foto" aria-hidden="true">' + ICONES.pessoa + "</div>";

    return (
      '<article class="pessoa">' +
        foto +
        '<h3 class="pessoa__nome">' + texto(pessoa.nome) + "</h3>" +
        '<p class="pessoa__funcao">' + texto(pessoa.funcao) + "</p>" +
        (pessoa.provisorio ? marcaProvisoria("A revisar") : "") +
        (pessoa.texto ? "<p>" + texto(pessoa.texto) + "</p>" : "") +
      "</article>"
    );
  }

  function montarQuemSomos() {
    const dados = CONFIG.quemSomos || {};

    const apresentacao = document.getElementById("texto-quem-somos");
    if (apresentacao) apresentacao.innerHTML = negrito(dados.texto || "");

    document.getElementById("lista-pessoas").innerHTML =
      (dados.davi ? pessoaHtml(dados.davi) : "") + (dados.parceira ? pessoaHtml(dados.parceira) : "");
    document.getElementById("texto-musicos").innerHTML = negrito(dados.textoMusicos || "");

    const foto = document.getElementById("foto-musicos");
    if (dados.fotoMusicos) {
      foto.hidden = false;
      foto.innerHTML =
        '<img src="' + texto(dados.fotoMusicos) + '" alt="' + texto(dados.fotoMusicosAlt || "") + '" loading="lazy" decoding="async">';
    } else {
      foto.hidden = true;
      foto.innerHTML = "";
    }
  }

  /* ---------------------------------------------------------------------
     Depoimentos (a seção some quando não há nenhum cadastrado)
     --------------------------------------------------------------------- */
  function montarDepoimentos() {
    const secao = document.getElementById("depoimentos");
    const depoimentos = CONFIG.depoimentos || [];

    if (depoimentos.length === 0) {
      secao.hidden = true;
      return;
    }
    secao.hidden = false;

    document.getElementById("lista-depoimentos").innerHTML = depoimentos
      .map(function (item) {
        const foto = item.foto
          ? '<img class="depoimento__foto" src="' + texto(item.foto) + '" alt="Foto do casal ' + texto(item.casal) + '" loading="lazy" width="44" height="44">'
          : "";
        return (
          '<figure class="depoimento">' +
            '<span class="depoimento__aspas" aria-hidden="true">&ldquo;</span>' +
            "<p>" + texto(item.texto) + "</p>" +
            "<figcaption>" + foto +
              "<span>" +
                '<span class="depoimento__casal">' + texto(item.casal) + "</span>" +
                (item.local ? '<span class="depoimento__local">' + texto(item.local) + "</span>" : "") +
              "</span>" +
            "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------------------
     Perguntas frequentes
     --------------------------------------------------------------------- */
  function montarPerguntas() {
    document.getElementById("lista-perguntas").innerHTML = (CONFIG.perguntas || [])
      .map(function (item) {
        return (
          '<details class="pergunta">' +
            '<summary class="pergunta__titulo">' +
              "<span>" + texto(item.pergunta) + "</span>" +
              '<span class="pergunta__sinal" aria-hidden="true"></span>' +
            "</summary>" +
            '<div class="pergunta__resposta">' +
              (item.provisorio ? marcaProvisoria("Resposta a confirmar") : "") +
              "<p>" + texto(item.resposta) + "</p>" +
            "</div>" +
          "</details>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------------------
     Instagram, região e botões gerais de WhatsApp
     --------------------------------------------------------------------- */
  function montarGerais() {
    const instagram = CONFIG.instagram || {};
    ["link-instagram", "link-instagram-rodape"].forEach(function (id) {
      const elemento = document.getElementById(id);
      if (!elemento || !instagram.link) return;
      elemento.href = instagram.link;
      if (id === "link-instagram-rodape") elemento.textContent = instagram.usuario || instagram.link;
    });

    const regiao = document.getElementById("rodape-regiao");
    if (regiao) regiao.textContent = CONFIG.regiao || "";

    document.querySelectorAll("[data-whatsapp]").forEach(function (botao) {
      const chave = botao.getAttribute("data-whatsapp");
      const mensagem = (CONFIG.mensagens && CONFIG.mensagens[chave]) || CONFIG.mensagens.geral;
      aplicarWhatsApp(botao, mensagem);
    });
  }

  /* ---------------------------------------------------------------------
     Início
     --------------------------------------------------------------------- */
  function iniciar() {
    montarTopo();
    montarVideos();
    montarGaleria();
    montarInclusos();
    montarFormacoes();
    montarFormulario();
    montarQuemSomos();
    montarDepoimentos();
    montarPerguntas();
    montarGerais();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
