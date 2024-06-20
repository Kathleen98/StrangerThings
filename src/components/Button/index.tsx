import { Button } from '@mantine/core';

interface BtnProps{
    text : string;
    onClick?: () => void; // Função opcional de clique
}

const Btn = ({text, onClick} : BtnProps) => {
    return<Button bg={"#e6292f"} onClick={onClick}>{text}</Button>
}

export default Btn;