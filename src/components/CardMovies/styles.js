import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(17.6rem, 1fr));
  gap: 1.5rem;
  max-width: 1280px;
  margin: 50px auto 0;
  padding: 1rem;

  @media  (max-width: 500px) {
    padding: 2rem;
    gap: 5rem;
  }
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #f7f7f7;
    border-radius: 12px;
    width: 100%;
    box-shadow: rgba(255, 255, 255, 0.33) 0px 5px 15px 0px;
`

export const CardImage = styled.img`
    height: 30rem;
    width: 100%;
    object-fit: cover;
` 

export const Content = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 0.7rem;
  
` 

export const ReadMoreButton = styled.button`
    display: flex;
    margin-top: 0.5rem;
    gap: 1rem;
    border: none;
    background-color: transparent;
    transition: all 0.2s ease;
  
    &:hover {
      cursor: pointer;
      background-color:rgba(202, 199, 199, 0.48);
    }
` 

export const Title = styled.h2`
  font-size: 1.1rem;
`

export const DivDateETime = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: row;
  gap: 0.3rem;
  color:rgb(92, 97, 109);
  font-weight: 400;
  font-size: 0.9rem;

  span{
    font-size: 1rem;
  }
`

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;

  p{
     color:rgb(92, 97, 109);
      font-size: 0.7rem;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
`

export const Cast = styled.div`
  font-size: 0.7rem;
    color:rgb(92, 97, 109);
    font-weight: 500;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;

  button{
    width: 90%;
    padding: 0.5rem;
    border: 1px solid rgba(175, 171, 171, 0.55);
    border-radius: 5px;
    cursor: pointer;
  }
`

export const ButtonWatched = styled.button`
  background-color: ${props => props.isWatched ? '#000' : 'transparent'};  
  color: ${props => props.isWatched ? '#fff' : '#000'};

  &:hover {
   background-color: ${props => props.isWatched ? '#000' : 'rgba(202, 199, 199, 0.48)'};  
   
  }

`

export const ButtonFavorited = styled.button`
  background-color: ${props => props.isFavorited ? '#f44336' : 'transparent'};  
  color: ${props => props.isFavorited ? '#fff' : '#000'};

  &:hover {
   background-color: ${props => props.isFavorited ? '#f44336' : 'rgba(202, 199, 199, 0.48)'};  
   
  }
`

export const ButtonNotes = styled.button`
  width: 90%;
  padding: 0.5rem;
  border: 1px solid ${props => (props.hasNotes ? '#FFD700' : 'rgba(175, 171, 171, 0.55)')};
  background-color: ${props => (props.hasNotes ? '#FFD700' : '#FFFFFF')};
  color: ${props => (props.hasNotes ? '#000' : '#000')};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.hasNotes ? '#FFC107' : 'rgba(202, 199, 199, 0.48)')};
  }
`;

