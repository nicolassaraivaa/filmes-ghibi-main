import { ButtonsFilter, Container, ActiveFilters, ClearButton } from "./styles";

export function Filters({ onFilterChange, filters, onClearAll, onRemoveFilter }) {
  return (
    <Container>
      <p>Filtros</p>

      <ButtonsFilter>
        <button
          type="button"
          onClick={() => onFilterChange("watched", !filters.watched)}
        >
          Assistidos
        </button>
        <button
          type="button"
          onClick={() => onFilterChange("favorited", !filters.favorited)}
        >
          Favoritados
        </button>
        <button
          type="button"
          onClick={() => onFilterChange("withNotes", !filters.withNotes)}
        >
          Com Notas
        </button>
        <select
          value={filters.rating}
          onChange={(e) => onFilterChange("rating", Number(e.target.value))}
        >
          <option value="0">Sem classificação</option>
          <option value="1">1 Estrela ★</option>
          <option value="2">2 Estrelas ★★</option>
          <option value="3">3 Estrelas ★★★</option>
          <option value="4">4 Estrelas ★★★★</option>
          <option value="5">5 Estrelas ★★★★★</option>
        </select>
      </ButtonsFilter>

      <div>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange("sortBy", e.target.value)}
        >
          <option value="default">Padrão</option>
          <option value="titleAsc">Título (A–Z)</option>
          <option value="titleDesc">Título (Z–A)</option>
          <option value="durationAsc">Duração (Menor)</option>
          <option value="durationDesc">Duração (Maior)</option>
          <option value="ratingDesc">Sua Avaliação (Maior)</option>
          <option value="ratingAsc">Sua Avaliação (Menor)</option>
        </select>
      </div>

      <ActiveFilters>
        {filters.watched && (
          <span onClick={() => onRemoveFilter("watched")}>
            Assistidos ✖
          </span>
        )}
        {filters.favorited && (
          <span onClick={() => onRemoveFilter("favorited")}>
            Favoritados ✖
          </span>
        )}
        {filters.withNotes && (
          <span onClick={() => onRemoveFilter("withNotes")}>
            Com Notas ✖
          </span>
        )}
        {filters.rating > 0 && (
          <span onClick={() => onRemoveFilter("rating")}>
            {filters.rating} Estrela(s) ✖
          </span>
        )}
      </ActiveFilters>

      <ClearButton onClick={onClearAll}>Limpar os Filtros</ClearButton>
    </Container>
  );
}