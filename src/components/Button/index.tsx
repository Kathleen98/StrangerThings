import { Button } from '@mantine/core';

interface BtnProps{
    text : string;
}

const Btn = ({text} : BtnProps) => {
    return<Button bg={"#e6292f"}>{text}</Button>
}

export default Btn;