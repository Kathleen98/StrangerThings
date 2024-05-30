import styled from "styled-components";
import { ReactNode } from "react";

interface TitleProps {
    Children: ReactNode;
  }

const TitleStyled = styled.h2`
    font-size: 1em;
    color: #E6292F;
    text-align: center;
    padding-bottom: 0.25em;
    border-bottom: 1px solid #e0e0e0;
`

const Title = ({Children} : TitleProps) =>{
    return<TitleStyled>
        {Children}
    </TitleStyled>
}

export default Title