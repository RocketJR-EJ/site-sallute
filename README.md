# Projeto Astro: Site Sallute

Este projeto utiliza o [Astro](https://astro.build/) para criar um site moderno, rápido e modular. Abaixo você encontra instruções para rodar, estruturar e organizar o projeto, além de dicas para uso de componentes e imagens.

## 🚀 Comandos Úteis

Todos os comandos devem ser executados na raiz do projeto:

| Comando                   | Ação                                               |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Instala as dependências                            |
| `npm run dev`             | Inicia o servidor de desenvolvimento (`localhost:4321`) |
| `npm run build`           | Gera o build de produção em `./dist/`              |
| `npm run preview`         | Visualiza o build local antes de publicar          |
| `npm run astro ...`       | Executa comandos CLI do Astro                      |

## 📁 Estrutura do Projeto

```
/
├── public/                # Arquivos públicos (acessíveis diretamente)
│   └── favicon.svg
├── src/
│   ├── assets/            # Imagens e arquivos estáticos do projeto
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.astro
│   │   ├── SectionExemplo.astro
│   │   ├── Welcome.astro
│   │   └── ui/            # Componentes de UI (ex: botões, cards)
│   │       └── CardExemplo.astro
│   ├── layouts/           # Layouts base para páginas
│   │   └── Layout.astro
│   ├── pages/             # Páginas do site (rotas)
│   │   └── index.astro
│   └── styles/            # Arquivos de estilo global
│       └── global.css
├── astro.config.mjs       # Configuração do Astro
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript (opcional)
└── README.md              # Este arquivo
```

## 🧩 Como Usar Componentes

- **Importação:**
  Para usar um componente, importe-o no início do arquivo `.astro`:
  ```astro
  import Header from '../components/Header.astro';
  import CardExemplo from '../components/ui/CardExemplo.astro';
  ```

- **Uso de Props:**
  Componentes podem receber propriedades (props) para exibir dados dinâmicos:
  ```astro
  <CardExemplo img="/src/assets/astro.svg" title="Astro Framework" />
  ```

- **Organização:**
  - Coloque componentes genéricos em `src/components/`.
  - Componentes específicos de UI podem ficar em subpastas, como `src/components/ui/`.

## 🖼️ Organização de Imagens

- Imagens e SVGs do projeto devem ser salvos em `src/assets/`.
- Para usar uma imagem em um componente, importe-a:
  ```astro
  import astroLogo from '../assets/astro.svg';
  <img src={astroLogo.src} alt="Logo Astro" />
  ```
- Imagens que precisam ser acessadas diretamente pela URL (ex: favicon) devem ficar em `public/`.

## 🛠️ Extensões Recomendadas para VS Code

Para uma melhor experiência de desenvolvimento, instale as seguintes extensões no Visual Studio Code:

- **Astro (astro-build.astro-vscode)**: Suporte oficial ao Astro.
- **Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)**: Autocompletar, dicas e validação para Tailwind CSS.
- **Tailwind CSS Autocomplete (austenc.tailwindcss-autocomplete)**: Autocompletar rápido para classes Tailwind.

> Estas extensões podem ser sugeridas automaticamente ao abrir o projeto no VS Code.

### Como funciona a recomendação automática?

O VS Code lê o arquivo `.vscode/extensions.json` do projeto e sugere a instalação das extensões listadas. Basta abrir o projeto e aceitar as sugestões na barra superior ou na aba de extensões.

Se quiser instalar manualmente, pesquise pelo nome ou ID na loja de extensões do VS Code.

## 📝 Como Criar uma Nova Seção ou Componente

Siga este passo a passo para criar sua própria seção ou componente, baseado nos exemplos do projeto:

1. **Duplique um exemplo existente:**
   - Por exemplo, copie `src/components/SectionExemplo.astro` e renomeie para `MinhaSecao.astro`.
   - Ou copie um componente de `src/components/ui/` para criar um novo card, botão, etc.

2. **Edite o conteúdo:**
   - Abra o novo arquivo e personalize o HTML, classes e textos conforme sua necessidade.
   - Utilize Tailwind CSS para estilização rápida.

3. **Importe o componente na página desejada:**
   - No arquivo da página (ex: `src/pages/index.astro`), importe seu novo componente:
     ```astro
     import MinhaSecao from '../components/MinhaSecao.astro';
     ```
   - Adicione a tag do componente onde quiser exibi-lo:
     ```astro
     <MinhaSecao />
     ```

4. **(Opcional) Use props para dados dinâmicos:**
   - Para componentes reutilizáveis, defina `export interface Props` e use `Astro.props` para receber dados.
   - Exemplo:
     ```astro
     ---
     export interface Props {
       titulo: string;
     }
     const { titulo } = Astro.props;
     ---
     <h2>{titulo}</h2>
     ```

5. **Organize os arquivos:**
   - Coloque seções em `src/components/`.
   - Componentes de UI (cards, botões, etc) em `src/components/ui/`.
   - Imagens em `src/assets/`. (Se possivel, evite duplicar imagens já existentes.)
   - Se necessário, crie subpastas para organizar melhor as imagens e agrupar por categoria.

Pronto! Assim você mantém o projeto organizado e facilita a reutilização de código.

## 💡 Dicas

- Utilize o Tailwind CSS para estilização rápida e responsiva.
- Mantenha os componentes pequenos e reutilizáveis.
- Consulte a [documentação do Astro](https://docs.astro.build/) para mais recursos e exemplos.

---

Se tiver dúvidas, consulte a documentação oficial!
