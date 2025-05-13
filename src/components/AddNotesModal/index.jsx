import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  ModalBackdrop,
  ModalContent,
  RatingSection,
  Stars,
  NotesTextArea,
  ButtonContainer,
  Button,
} from "./styles";

const AddNotesModal = ({ movie, isOpen, onClose, onSave, savedNotes }) => {
  const [rating, setRating] = useState(0);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isOpen && movie) {
      const movieNotes = savedNotes?.[movie.id];
      if (movieNotes) {
        setRating(movieNotes.rating || 0);
        setNotes(movieNotes.notes || "");
      } else {
        setRating(0);
        setNotes("");
      }
    }
  }, [isOpen, movie, savedNotes]);

  const handleClose = () => {
    setRating(0); 
    setNotes(""); 
    onClose(); 
  };

  const handleSave = () => {
    if (!movie) {
      toast.error("Filme não encontrado.");
      return;
    }

    if (rating === 0) {
      toast.error("Você precisa selecionar uma avaliação antes de salvar.");
      return;
    }

    if (notes.trim() === "") {
      toast.error("As notas não podem estar vazias.");
      return;
    }

    onSave(movie.id, rating, notes); 
  };

  if (!isOpen || !movie) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <h2>Adicionar Notas para {movie.title}</h2>

        <RatingSection>
          <p>Sua Avaliação:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <Stars
              key={star}
              selected={star <= rating}
              onClick={() => setRating(star)}
            >
              ★
            </Stars>
          ))}
          <p>{rating ? `${rating} estrela(s)` : "Sem avaliação"}</p>
        </RatingSection>

        <div>
          <p>Suas Notas:</p>
          <NotesTextArea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Escreva suas notas sobre este filme..."
          />
        </div>

        <ButtonContainer>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button primary onClick={handleSave}>
            Salvar Notas
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default AddNotesModal;