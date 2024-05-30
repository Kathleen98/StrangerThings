import styled from "styled-components";
import { ReactNode } from "react";

interface TitleProps {
    Children: ReactNode;
  }

const TitleStyled = styled.h2`
    font-size: 1em;
    color: #E6292F;
`

const Title = ({Children} : TitleProps) =>{
    return<TitleStyled>
        {Children}
    </TitleStyled>
}

export default Title