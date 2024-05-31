import { Text } from "@mantine/core";

interface TextProps {
  props: string;
}

const Paragraphy = ({ props }: TextProps) => {
  return <Text c={"#FFF"} fw={300}>{props}</Text>;
};

export default Paragraphy;
