import { Spoiler, Flex } from "@mantine/core";
import Title from "../Title/Index";
import Paragraphy from "../Text";

const SpoilerText = () => {
  return (
    <Flex w={"90vw"} m={"0, auto"} direction={'column'}>
      <Title Children={"História"} />
      <Spoiler  maxHeight={150} showLabel="Ler mais" hideLabel="Ocultar">
        <Paragraphy
          props={
            "No ano de 1983, na pacata cidade de Hawkins, algo sombrio e misterioso começa a se desenrolar. Tudo começa com o desaparecimento inexplicável de Will Byers, um garoto comum que se torna o epicentro de eventos extraordinários e aterrorizantes."
          }
        />
      </Spoiler>
    </Flex>
  );
};

export default SpoilerText;
