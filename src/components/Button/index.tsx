import { Button } from '@mantine/core';

interface BtnProps{
    text : string;
    onClick : React.MouseEventHandler<HTMLButtonElement>;
}

const Btn = ({text, onClick} : BtnProps) => {
    return<Button onClick={onClick} style={{zIndex: "2", position: "relative"}} bg={"#e6292f"}>{text}</Button>
}

export default Btn;