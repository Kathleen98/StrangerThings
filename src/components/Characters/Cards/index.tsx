import { Card, Image, Text,Button, Group } from '@mantine/core';


interface CardsProps {
    src: string;
    title: string;
    text: string;
    buttonText: string;
}

const Cards = ({src, title, text, buttonText} : CardsProps) =>{
    return<Card withBorder w={'100vw'} h={'95vh'}  shadow="sm" radius="md" bg={'#000'}>
            <Card.Section>
                <Image src={src}  />
            </Card.Section>
            <Group>
                <Text c={"#FFF"}>
                    {title}
                </Text>
            </Group>
            <Text w={'70vw'} size='sm' c={"#FFF"}>
                {text}
            </Text>
            <Button bg={'#E6292F'} c={"e6292f"} mt="md" radius="md">
                {buttonText}
            </Button>
    </Card>
}


export default Cards