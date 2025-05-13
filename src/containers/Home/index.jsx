import { useState } from "react";
import { CardMovies } from "../../components/CardMovies";
import { Filters } from "../../components/Filters";
import { Search } from "../../components/Search";
import Logo from "../../assets/logo-2.png";
import { DivImage } from "./styles";

function Home() {
  const [filters, setFilters] = useState({
    watched: false,
    favorited: false,
    withNotes: false,
    rating: 0,
    sortBy: "default",
  });

  const [search, setSearch] = useState({ text: "", includeSynopsis: false });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      watched: false,
      favorited: false,
      withNotes: false,
      rating: 0,
      sortBy: "default",
    });
  };

  const removeFilter = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: filterName === "rating" ? 0 : false,
    }));
  };

  const handleSearchChange = (text, includeSynopsis) => {
    setSearch({ text, includeSynopsis });
  };

  return (
    <main>
      <DivImage>
        <img src={Logo} alt="Logo" />
      </DivImage>
      <Search onSearchChange={handleSearchChange} />
      <Filters
        onFilterChange={handleFilterChange}
        filters={filters}
        onClearAll={clearAllFilters}
        onRemoveFilter={removeFilter}
      />
      <CardMovies filters={filters} search={search} />
    </main>
  );
}

export default Home;