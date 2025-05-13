import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

export const RatingSection = styled.div`
  margin-bottom: 20px;
`;

export const Stars = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props.selected ? "gold" : "gray")};
`;

export const NotesTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  height: 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  background-color: ${props => (props.primary ? "#4CAF50" : "#f44336")};
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${props => (props.primary ? "#45a049" : "#e53935")};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;