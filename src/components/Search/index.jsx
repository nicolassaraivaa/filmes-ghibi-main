import { SearchContainer } from "./styles";
import { useState } from "react";

export function Search({ onSearchChange }) {
  const [searchText, setSearchText] = useState("");
  const [includeSynopsis, setIncludeSynopsis] = useState(false);

  const handleSearchTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearchChange(value, includeSynopsis); // Atualiza a pesquisa
  };

  const handleIncludeSynopsisChange = () => {
    const newValue = !includeSynopsis;
    setIncludeSynopsis(newValue);
    onSearchChange(searchText, newValue); // Atualiza a pesquisa
  };

  return (
    <SearchContainer>
      <Search
        type="text"
        placeholder="Pesquisar Filmes..."
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <div>
        <input
          type="checkbox"
          checked={includeSynopsis}
          onChange={handleIncludeSynopsisChange}
        />
        <p>Incluir sinopse na pesquisa</p>
      </div>
    </SearchContainer>
  );
}