import { Anchor } from "@mantine/core";

interface PropsLinks {
  href: string;
  target: string;
  text: string;
}

const Link = ({ href, target, text }: PropsLinks) => {
  return (
    <Anchor style={{borderRadius: "12px"}} bg={"#e6292f"} ta={"center"} c={"#FFF"} p={".5em"} href={href} target={target}>{text}</Anchor>
  );
};

export default Link;
