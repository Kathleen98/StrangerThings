import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import BkgdModal from '../../../../public/bkgdModal.jpg'
import Btn from "../../Button";
import Paragraphy from "../../Text";
import style from './index.module.css'
import styled from "styled-components";


function ModalStory() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <>
      <Modal
        classNames={style}
        opened={opened}
        onClose={close}
        title={
          <Paragraphy
            props="Enquanto seus amigos e familiares se desesperam na busca por respostas, 
            somos apresentados a uma figura enigmática, uma jovem de nome Eleven. Aos poucos, 
            revelações perturbadoras sobre seu passado vêm à tona. Eleven não é uma garota comum; 
            ela foi submetida a experimentos cruéis em um laboratório secreto do governo, escondido 
            nas profundezas da floresta de Hawkins."
          />
        }
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
      </Modal>

      <Btn text="Ler mais" onClick={open} />
    </>
  );
}

export default ModalStory;
