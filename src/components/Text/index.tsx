import { Text } from "@mantine/core";

interface TextProps {
  props: string;
}

const Paragraphy = ({ props }: TextProps) => {
  return <Text style={{zIndex: "2", position: "relative"}} ta={'center'} fz={".8em"} c={"#FFF"} fw={300}>{props}</Text>;
};

export default Paragraphy;
