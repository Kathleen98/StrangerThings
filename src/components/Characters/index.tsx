import styled from "styled-components";
import Title from "../Title/Index";
import "@mantine/carousel/styles.css";
import Cards from "./Cards";

const CharactersContainer = styled.section`
  padding: 1em;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsContainer = styled.div`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
`

const Characters = () => {
  return (
    <CharactersContainer>
      <Title Children={'Personagens'} />
      <CardsContainer>
        <Cards />
      </CardsContainer>
    </CharactersContainer>
  );
};

export default Characters;
