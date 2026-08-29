# Comando Fire — Site Institucional

Projeto estático pronto para publicar no **GitHub Pages**.

## Estrutura

- `index.html` — página principal
- `styles.css` — identidade visual e responsividade
- `script.js` — menu, animações, seção Produtos/Serviços, modal e formulário
- `assets/logo-comando-fire.png` — logo oficial fornecida
- `assets/favicon.png` — ícone do site
- `.nojekyll` — evita processamento desnecessário pelo Jekyll

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `comando-fire`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/root`.
6. Salve e aguarde a publicação.

## O que já está pronto

- Design preto/grafite, laranja e vermelho inspirado na identidade da Comando Fire.
- Header fixo e responsivo.
- Hero premium com a logo oficial.
- Seção **Produtos | Serviços** lado a lado.
- No desktop, o painel expande ao passar o mouse.
- No celular, o painel expande ao tocar.
- Cards de todos os 7 serviços.
- Modal com descrição completa dos serviços.
- Formulário de orçamento.
- Animações de entrada.
- Layout responsivo para desktop, tablet e celular.
- SEO básico e favicon.

## Ajustes que faltam quando os dados forem enviados

### WhatsApp
Abra `script.js` e procure:

```js
const whatsapp = "";
```

Coloque o número no formato internacional, sem espaços ou símbolos:

```js
const whatsapp = "5521999999999";
```

### Dados de contato
No `index.html`, substitua:

- `Dados de contato a inserir`
- `Região de atendimento a inserir`

### Produtos
A seção de produtos usa categorias coerentes com prevenção e combate a incêndio, mas deve ser revisada conforme o catálogo real da empresa.

## Observação

O formulário está configurado para abrir uma conversa no WhatsApp depois que o número for preenchido em `script.js`. Isso permite publicar no GitHub Pages sem servidor/backend.
