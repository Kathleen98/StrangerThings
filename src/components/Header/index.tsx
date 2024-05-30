import styled from "styled-components";
import navOptions from "./data.json";
import { NavLink } from "@mantine/core";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

// Estilo do header
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 10vh;
  background: #cb210c;
  position: relative;
  z-index: 2;
`;

// Estilo do icone menu hamburguer
const StyledIoMenu = styled(IoMenu)`
  color: #000;
  width: 10vw;
  height: 10vh;
`;

// Estilo do container da lista de opção do menu
const NavOptionsContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  background: #cb210c;
`;

const Header = () => {
  // Usando o useState para controlar a visibilidade da lista de opções do menu.
  // Ela inicia como falso para manter o padrão do menu sempre estar oculto.
  const [showNavOptons, setShowNavOptions] = useState(false);

  // Essa função foi criada para alterar o boleano do useState.
  // Se ele for false, quando acontecer o click vai alterar para true.
  const handleMenuClick = () => {
    setShowNavOptions(!showNavOptons);
  };

  return (
    <HeaderContainer>
      {/* Chamando a função no icone do menu */}
      <StyledIoMenu onClick={handleMenuClick} />
      {showNavOptons && (
        <NavOptionsContainer>
          {/* 
                        Usando o map para colocar as opções do menu de forma dinâmica, o map percorre cada item do json, 
                        chamando cada um desses itens no options, consigo acessar as opções dentro do json e colocar cada 
                        um em sem respactivo lugar, o id no key e o nav no label.
                    */}
          {navOptions.map((option) => (
            <NavLink
              fw={"bold"}
              c={"#000"}
              key={option.id}
              label={option.nav}
              href={option.href}
            />
          ))}
        </NavOptionsContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
