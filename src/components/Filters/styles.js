import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
  }

  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    cursor: pointer;
    background-color: white;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    align-items: center;
  }
`;

export const ButtonsFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  button {
    padding: 0.5rem 1rem;
    background-color: #e5e7eb;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background-color: #d1d5db;
    }

    &:focus {
      outline: 2px solid #4f46e5;
      outline-offset: 2px;
    }
  }

  select {
    margin-left: auto;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActiveFilters = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background-color: #e0e0e0;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      background-color: #d6d6d6;
    }
  }
`;

export const ClearButton = styled.button`
  margin-top: 1rem;
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 15%;

  &:hover {
    background-color: #d32f2f;
  }
`;