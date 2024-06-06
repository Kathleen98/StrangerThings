import styled from "styled-components";
import BkgModal from "../../../public/strangerThings-story-bkg.jpeg";
import Paragraphy from "../../Text";
import Btn from "../../Button";
import { CloseButton } from "@mantine/core";
import { IoCloseCircle } from "react-icons/io5";
import { ReactNode } from "react";

const ContainerModal = styled.div`
  width: 100vw;
  background: #000;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  padding: 0.5em 0;
`;

const Modal = styled.dialog`
  width: 90vw;
  max-height: 100vh;
  background-image: url(${BkgModal});
  background-size: 100vw 100vh;
  position: relative;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 8px;
  z-index: 2;
`;

// Adicionando um after para deixar uma capada de opacidade no fundo da div
const OpacityModal = styled(Modal)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
`;

// Definindo o tipo de propriedade que o StyleCloseBtn irá receber
interface PropsBtn {
  icon: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// Estilizando o botão "fechar"
const StyleCloseBtn = styled(CloseButton)<PropsBtn>`
  align-self: end;

  &:hover {
    background-color: transparent;
  }
`;

const ModalStory = () => {

    const onClose = () =>{

    }

    const handleShowModal = () => {

    }

  return (
    <ContainerModal>
            <OpacityModal>
              <StyleCloseBtn
                onClick={onClose}
                icon={
                  <IoCloseCircle
                    color="#e6292f"
                    size={25}
                    fontWeight={"bold"}
                    style={{ zIndex: "2" }}
                  />
                }
              />
              <Paragraphy
                props={
                  "No ano de 1983, na pacata cidade de Hawkins, algo sombrio e misterioso começa a se desenrolar. Tudo começa com o desaparecimento inexplicável de Will Byers, um garoto comum que se torna o epicentro de eventos extraordinários e aterrorizantes."
                }
              />
              <Paragraphy
                props={
                  "Enquanto seus amigos e familiares se desesperam na busca por respostas, somos apresentados a uma figura enigmática, uma jovem de nome Eleven. Aos poucos, revelações perturbadoras sobre seu passado vêm à tona. Eleven não é uma garota comum; ela foi submetida a experimentos cruéis em um laboratório secreto do governo, escondido nas profundezas da floresta de Hawkins."
                }
              />
              <Btn onClick={handleShowModal} text={"Saber mais"} />
            </OpacityModal>
          </ContainerModal>
  );
};

export default ModalStory;
