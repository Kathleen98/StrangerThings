import { Flex } from "@mantine/core";
import Title from "../Title/Index";
import Paragraphy from "../Text";
import styled from "styled-components";
import ModalStory from "./ModalStory";


const ParagraphyStyled = styled(Paragraphy)`
  padding: 0.5em 0;
`

const Story = () => {
  return (
    <Flex w={"90vw"} direction={'column'}>
      <Title Children={"História"} />
      <ParagraphyStyled 
        props={'No ano de 1983, na pacata cidade de Hawkins, algo sombrio e misterioso começa a se desenrolar. Tudo começa com o desaparecimento inexplicável de Will Byers, um garoto comum que se torna o epicentro de eventos extraordinários e aterrorizantes.'}
      />
      < ModalStory />
    </Flex>
  );
};

export default Story;
