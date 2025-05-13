# 🎥 Filmes Ghibli

Projeto React que consome a API pública do [Studio Ghibli](https://ghibliapi.vercel.app), permitindo que os usuários explorem filmes do estúdio com funcionalidades de pesquisa, filtros, notas e marcações de favoritos e assistidos.

---

## 🚀 Funcionalidades

- 🔍 **Pesquisa de Filmes**
  - Pesquise pelo título.
  - Inclua sinopse na busca e destaque as palavras buscadas em amarelo.

- 🧰 **Filtros**
  - Assistidos
  - Favoritados
  - Com notas
  - Classificação por estrelas
  - Ordenação por:
    - Título (A-Z / Z-A)
    - Duração (Menor / Maior)
    - Avaliação do usuário
    - Score da API
  - Limpeza e remoção individual de filtros

- ⭐ **Notas**
  - Adicione, edite ou remova notas e classificações (1 a 5 estrelas) por filme

- ❤️ **Favoritos e Assistidos**
  - Marque e desmarque filmes
  - Dados persistem via `localStorage`

---

## 📦 Tecnologias Utilizadas

- **React** – Interface do usuário
- **Styled-components** – Estilização dos componentes
- **React Icons** – Ícones SVG
- **React Toastify** – Notificações toast
- **Axios** – Requisições HTTP
- **LocalStorage** – Persistência de favoritos, assistidos e notas

---

## 📌 Passos para Executar

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/filmes-ghibli.git
cd filmes-ghibli

2. **Instale as dependências**:

```bash
npm install

3. **Inicie o servidor de desenvolvimento**:

```bash
npm run dev

---

## 🧪 Demonstração
Tela Inicial: lista de filmes com filtros e opções de ordenação.

Modal de Notas: para adicionar/editar avaliação por estrela e anotações.

Interação com filtros: aplique múltiplos critérios combinados.

---
