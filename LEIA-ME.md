# Página do Grupo Encante — manual do Davi

Este é o site do Grupo Encante. Ele é feito só de HTML, CSS e JavaScript:
não precisa instalar nada, não tem servidor e não tem banco de dados.

## O que tem em cada arquivo

| Arquivo | Para que serve |
|---|---|
| `index.html` | O conteúdo fixo da página (textos das seções, tabelas do guia) |
| `assets/js/config.js` | **O arquivo que você edita no dia a dia**: WhatsApp, vídeos, planos, perguntas, depoimentos |
| `assets/js/app.js` | O que faz a página funcionar. Não precisa mexer |
| `assets/css/style.css` | As cores, fontes e o formato da página. Não precisa mexer |
| `imagens/` | **Onde você coloca as suas fotos e vídeos** |
| `imagens/site/` | Fotos já recortadas e usadas na página (topo, Davi, Maria Clara) |
| `imagens/icones/` | Os ícones dos instrumentos, já tratados |
| `assets/fotos/` | Imagem de pré-visualização do link (a que aparece no WhatsApp) |
| `assets/icones/` | O ícone que aparece na aba do navegador |

## 1. Como ver a página no computador

1. Abra a pasta `GrupoEncante-page`.
2. Dê dois cliques no arquivo `index.html`.
3. Ela abre no navegador. Depois de qualquer alteração, aperte **Ctrl + F5**
   para o navegador carregar a versão nova.

## 2. O número do WhatsApp

Já está configurado: **(84) 98805-7769**. Ele fica na linha `whatsapp:` do
arquivo `assets/js/config.js`, escrito como `"5584988057769"` (55 + DDD +
número, só dígitos). Se um dia trocar de número, é só mudar ali.

## 3. Como colocar as fotos

1. Salve a foto dentro da pasta `imagens/`.
2. Use nomes simples, sem acento e sem espaço: `grupo-cerimonia.jpg`,
   `davi.jpg`, `trompete.jpg`.
3. Abra o `assets/js/config.js` e escreva o caminho no lugar certo. Exemplos:
   - Foto do topo: `fotoTopo: "imagens/grupo-cerimonia.jpg"`
   - Foto do Davi: dentro de `quemSomos`, `foto: "imagens/davi.jpg"`
   - Foto de um plano: dentro do plano, `foto: "imagens/trompete.jpg"`
4. Salve e recarregue a página.

Dica: fotos muito grandes deixam a página lenta no 4G. O ideal é que cada
foto tenha no máximo uns 1600 pixels de largura e uns 300 KB.

## 4. Como colocar os vídeos

1. Os vídeos precisam ser verticais, curtos (30 a 60 segundos) e leves
   (até uns 10 MB cada).
2. Salve o arquivo `.mp4` dentro da pasta `imagens/`.
3. No `assets/js/config.js`, na parte `videos`, escreva o caminho em
   `arquivo` (exemplo: `"imagens/entrada-da-noiva.mp4"`) e mude
   `provisorio: true` para `provisorio: false`.
4. Se quiser uma imagem de capa (a foto que aparece antes de tocar), salve
   também em `imagens/` e escreva o caminho em `capa`.

Para comprimir um vídeo grande, instale o programa **HandBrake** (gratuito) ou,
se preferir linha de comando com o ffmpeg instalado, use:

```bash
ffmpeg -i entrada-original.mp4 -vcodec libx264 -crf 28 -preset slow -vf "scale=-2:1080" -acodec aac -b:a 128k saida.mp4
```

Se ainda ficar acima de 10 MB, troque `-crf 28` por `-crf 30` (fica um pouco
menor a qualidade e bem menor o arquivo).

## 5. O bloco "Momentos"

Logo abaixo dos vídeos há um bloco com fotos de casais, cada uma num cartão
com uma frase embaixo. Ele fica na parte `galeria` do `assets/js/config.js`.
Cada foto tem três informações:

- `arquivo`: o caminho da foto (ex.: `"imagens/momento-4.jpg"`)
- `legenda`: a frase que aparece embaixo da foto
- `alt`: descrição para quem não enxerga a imagem

Use **fotos deitadas** (mais largas que altas) para todas ficarem iguais. Para
o bloco sumir da página, deixe `galeria: []`.

**Só publique foto de casal depois que o casal autorizar** — é a mesma regra
dos depoimentos.

## 6. Como mudar formações, perguntas e depoimentos

Tudo isso está no `assets/js/config.js`, com comentário explicando cada parte.

- **Perguntas frequentes:** troque o texto de `resposta` e mude
  `provisorio: true` para `provisorio: false` quando a resposta já for a final.
- **Depoimentos:** a seção só aparece quando houver pelo menos um depoimento.
  Copie o modelo que está no comentário e cole dentro dos colchetes de
  `depoimentos: []`. Só publique com autorização do casal.
- **Formações:** ficam em três partes do config. `bases` são Essencial e
  Harmonia (etapa 1); `destaques` são Metais, Violino e Metais e violino
  (etapa 2); `completo` é o Encante Completo, o da faixa azul com o selo.
  Em todas dá para mudar nome, formação e descrição. Lembre: **nenhum preço
  na página**, nem "a partir de".

## 7. Se uma alteração não aparecer no site publicado

Os navegadores guardam uma cópia dos arquivos para abrir mais rápido, e às
vezes continuam mostrando a versão antiga. Por isso o `index.html` tem um
número de versão nos endereços dos arquivos, assim:

```
<link rel="stylesheet" href="assets/css/style.css?v=2">
<script src="assets/js/config.js?v=2"></script>
<script src="assets/js/app.js?v=2"></script>
```

Se você mudar algo e o site publicado continuar igual, abra o `index.html`,
troque os três `?v=2` por `?v=3` (e da próxima vez `?v=4`, e assim por
diante) e envie o arquivo de novo. Isso obriga o navegador a pegar a versão
nova.

## 8. Como tirar as etiquetas de "provisório"

Enquanto a página tiver conteúdo provisório, aparecem etiquetas claras
(como "A CONFIRMAR" e "FALTA O VÍDEO"). Quando tudo estiver pronto:

1. Abra o `assets/js/config.js`.
2. Troque `mostrarMarcasProvisorias: true` por `mostrarMarcasProvisorias: false`.

## 9. Como publicar no GitHub Pages (grátis)

Faça uma vez:

1. Entre em <https://github.com> e clique em **Sign up**.
2. Crie a conta com o nome de usuário **grupoencante** (se estiver livre).
   Guarde o e-mail e a senha usados.
3. Confirme o e-mail que o GitHub envia.
4. Já dentro do GitHub, clique no **+** no canto superior direito e escolha
   **New repository**.
5. Em **Repository name**, escreva exatamente `grupoencante.github.io`.
6. Deixe marcado **Public**. Não marque nada em "Add a README file".
7. Clique em **Create repository**.
8. Na página que abrir, clique em **uploading an existing file**
   (o link fica no meio do texto).
9. Abra a pasta `GrupoEncante-page` no computador, selecione **o arquivo
   `index.html` e as pastas `assets` e `imagens`** e arraste tudo para a área
   do navegador.
10. Espere terminar de enviar e clique no botão verde **Commit changes**.
11. No menu de cima do repositório, clique em **Settings** e depois, no menu
    da esquerda, em **Pages**.
12. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
13. Espere de 1 a 3 minutos e recarregue a página. Vai aparecer o endereço
    **https://grupoencante.github.io**. Esse é o link para colocar na bio.

Para atualizar depois (nova foto, novo vídeo, texto novo):

1. Entre no repositório no GitHub.
2. Clique em **Add file** e depois em **Upload files**.
3. Arraste os arquivos alterados e clique em **Commit changes**.
4. Em poucos minutos o site já mostra a versão nova.

## 10. Domínio próprio (quando você quiser)

O site está pronto para receber um endereço `.com.br` do registro.br: nenhum
caminho da página depende do endereço atual. Quando você registrar o domínio,
me chame que eu explico, passo a passo, o que configurar no registro.br e na
tela **Settings → Pages** do GitHub.

## 11. O que ainda falta (pendências)

Já resolvido: número do WhatsApp, Maria Clara, região de Parelhas, resposta
sobre o som, resposta sobre recepções e eventos.

Também já entraram: os ícones dos instrumentos, a foto do topo e as fotos do
Davi e da Maria Clara.

Ainda falta:

- Com quanta antecedência o casal deve reservar (resposta da pergunta frequente)
- Texto do selo do Encante Completo (hoje está "Mais escolhido")
- Revisar os textos de apresentação do Davi e da Maria Clara
- Vídeos na pasta `imagens/`: 2 a 3 arquivos
- Depoimentos, quando os casais autorizarem
