import styled from "styled-components";
import { ReactNode } from "react";

interface TitleProps {
  Children: ReactNode;
}

const TitleStyled = styled.h2`
  font-size: 1.5em;
  color: #e6292f;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 0.25em;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = ({ Children }: TitleProps) => {
  return <TitleStyled>{Children}</TitleStyled>;
};

export default Title;
