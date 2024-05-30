import { Card, Image, Text,Button, Group } from '@mantine/core';
import ImageEleven from '../../../../public/img/characters/eleven.jpg'

const Cards = () =>{
    return<Card withBorder maw={'70vw'}  shadow="sm" radius="md" bg={'#000'}>
            <Card.Section>
                <Image src={ImageEleven} maw={'90vw'}  />
            </Card.Section>
            <Group>
                <Text c={"#FFF"}>
                    Onze
                </Text>
            </Group>
            <Text w={'70vw'} size='sm' c={"#FFF"}>
                Lorem ipsum dolor siuam soluta, quasi t quos nam consectetur eum, iusto alias atque ad.
            </Text>
            <Button bg={'#E6292F'} c={"e6292f"} mt="md" radius="md">
                Ver mais
            </Button>
    </Card>
}

export default Cards