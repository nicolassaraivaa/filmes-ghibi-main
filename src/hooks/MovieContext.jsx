import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [isWatched, setIsWatched] = useState({});
  const [isFavorited, setIsFavorited] = useState({});
  const [notes, setNotes] = useState({}); // Estado para armazenar as notas

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched"));
    const favorited = JSON.parse(localStorage.getItem("favorited"));
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    setIsWatched(watched || {});
    setIsFavorited(favorited || {});
    setNotes(savedNotes || {}); // Carrega as notas salvas
  }, []);

  useEffect(() => {
    if (Object.keys(isWatched).length > 0) {
      localStorage.setItem("watched", JSON.stringify(isWatched));
    }
  }, [isWatched]);

  useEffect(() => {
    if (Object.keys(isFavorited).length > 0) {
      localStorage.setItem("favorited", JSON.stringify(isFavorited));
    }
  }, [isFavorited]);

  useEffect(() => {
    if (Object.keys(notes).length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes)); // Salva as notas no localStorage
    }
  }, [notes]);

  return (
    <MovieContext.Provider value={{ isWatched, setIsWatched, isFavorited, setIsFavorited, notes, setNotes }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}