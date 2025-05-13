import {
  Container,
  CardImage,
  ContainerItems,
  Content,
  ReadMoreButton,
  Title,
  DivDateETime,
  Score,
  Description,
  Cast,
  Buttons,
  ButtonWatched,
  ButtonFavorited,
  ButtonNotes,
} from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { ImEye } from "react-icons/im";
import { LuStickyNote } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import formatDuration from "../../utils/formatMinutes";
import { toast } from "react-toastify";
import { useMovieContext } from "../../hooks/movieContext";
import AddNotesModal from "../AddNotesModal";

export function CardMovies({ filters, search }) {
  const [movies, setMovies] = useState([]);
  const [isExpanded, setIsExpanded] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);

  const movieContext = useMovieContext();
  const { isWatched, isFavorited, notes } = movieContext || {};

  useEffect(() => {
    async function getMovies() {
      try {
        const { data } = await api.get();
        setMovies(data);
      } catch {
        toast.error("Erro ao carregar os filmes.");
      }
    }

    getMovies();
  }, []);

  const resumeDescription = (description) => {
    const maxLength = 150;
    if (description.length > maxLength) {
      return {
        short: description.slice(0, maxLength) + "...",
        full: description,
      };
    } else {
      return {
        short: description,
        full: description,
      };
    }
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span style="background-color: yellow;">$1</span>`);
  };

  const toggleExpand = (id) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleWatched = (id) => {
    if (!movieContext) return;

    movieContext.setIsWatched((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    const movieTitle = movies.find((movie) => movie.id === id)?.title;

    if (!isWatched[id]) {
      toast.success(`Filme ${movieTitle} marcado como assistido!`);
    } else {
      toast.error(`Filme ${movieTitle} desmarcado como assistido!`);
    }
  };

  const handleFavorited = (id) => {
    if (!movieContext) return;

    movieContext.setIsFavorited((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    const movieTitle = movies.find((movie) => movie.id === id)?.title;

    if (!isFavorited[id]) {
      toast.success(`Filme ${movieTitle} adicionado aos favoritos!`);
    } else {
      toast.error(`Filme ${movieTitle} removido dos favoritos!`);
    }
  };

  const openModal = (id) => {
    setCurrentMovieId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentMovieId(null);
    setIsModalOpen(false);
  };

  const saveNotes = (id, rating, notes) => {
    if (!movieContext) return;

    movieContext.setNotes((prevNotes) => ({
      ...prevNotes,
      [id]: { rating, notes },
    }));

    toast.success("Nota salva com sucesso!");
    closeModal();
  };

  const filteredMovies = movies.filter((movie) => {
    const searchText = search.text.toLowerCase();
    const matchesTitle = movie.title.toLowerCase().includes(searchText);
    const matchesSynopsis =
      search.includeSynopsis &&
      movie.description.toLowerCase().includes(searchText);

    if (searchText && !(matchesTitle || matchesSynopsis)) return false;
    if (filters.watched && !isWatched[movie.id]) return false;
    if (filters.favorited && !isFavorited[movie.id]) return false;
    if (filters.withNotes && !notes[movie.id]) return false;
    if (filters.rating > 0 && notes[movie.id]?.rating !== filters.rating)
      return false;
    return true;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (filters.sortBy) {
      case "titleAsc":
        return a.title.localeCompare(b.title);
      case "titleDesc":
        return b.title.localeCompare(a.title);
      case "durationAsc":
        return a.running_time - b.running_time;
      case "durationDesc":
        return b.running_time - a.running_time;
      case "ratingDesc":
        return (notes[b.id]?.rating || 0) - (notes[a.id]?.rating || 0);
      case "ratingAsc":
        return (notes[a.id]?.rating || 0) - (notes[b.id]?.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <Container>
      {sortedMovies.map((movie) => {
        const { short, full } = resumeDescription(movie.description);
        const isCardExpanded = isExpanded[movie.id];
        const whatched = isWatched?.[movie.id];
        const favorited = isFavorited?.[movie.id];

        return (
          <ContainerItems key={movie.id}>
            <CardImage src={movie.image} alt={`Imagem do filme ${movie.title}`} />
            <Content>
              <Title
                dangerouslySetInnerHTML={{
                  __html: highlightText(movie.title, search.text),
                }}
              />
              <DivDateETime>
                <p>{movie.release_date}</p>
                <span>
                  <GoDotFill size={8} />
                </span>
                <p>{formatDuration(movie.running_time)}</p>
              </DivDateETime>

              <Score>
                <div>
                  <FaStar color="#EAB308" /> {movie.rt_score}%
                </div>
                <p>
                  {notes?.[movie.id]?.rating
                    ? `${notes[movie.id].rating} estrela(s)`
                    : "Não avaliado"}
                </p>
              </Score>

              <Description
                dangerouslySetInnerHTML={{
                  __html: highlightText(
                    isCardExpanded ? full : short,
                    search.text
                  ),
                }}
              />
              <ReadMoreButton
                onClick={() => toggleExpand(movie.id)}
                aria-label={`Ver ${isCardExpanded ? "menos" : "mais"} sobre ${movie.title}`}
              >
                {isCardExpanded ? "Ver menos" : "Ver mais"}
              </ReadMoreButton>
            </Content>

            <Buttons>
              <ButtonWatched
                onClick={() => handleWatched(movie.id)}
                isWatched={whatched}
                aria-label={`Marcar como ${whatched ? "não assistido" : "assistido"}`}
              >
                <ImEye style={{ marginRight: "5px" }} />
                {whatched ? "Assistido" : "Assistir"}
              </ButtonWatched>

              <ButtonFavorited
                onClick={() => handleFavorited(movie.id)}
                isFavorited={favorited}
                aria-label={`Marcar como ${favorited ? "não favoritado" : "favorito"}`}
              >
                <FaRegHeart style={{ marginRight: "5px" }} />
                {favorited ? "Favoritado" : "Add Favoritos"}
              </ButtonFavorited>

              <ButtonNotes
                onClick={() => openModal(movie.id)}
                hasNotes={!!notes?.[movie.id]}
                aria-label={`${notes?.[movie.id] ? "Editar notas para" : "Adicionar notas para"} ${movie.title}`}
              >
                <LuStickyNote style={{ marginRight: "5px" }} />
                {notes?.[movie.id] ? "Edit Notas" : "Add Notas"}
              </ButtonNotes>
            </Buttons>
          </ContainerItems>
        );
      })}
      <AddNotesModal
        movie={movies.find((movie) => movie.id === currentMovieId)}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveNotes}
        savedNotes={notes}
      />
    </Container>
  );
}