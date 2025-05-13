import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin-top: 5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      font-size: 1rem;
      color: #fff;
      font-weight: 500;
    }
  }
`;

export const Search = styled.input`
    width: 18px;
    height: 18px;
    cursor: pointer;
    padding: 1rem;

`