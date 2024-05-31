import { Anchor } from "@mantine/core";

interface PropsLinks {
  href: string;
  target: string;
  text: string;
}

const Link = ({ href, target, text }: PropsLinks) => {
  return (
    <Anchor bg={"#e6292f"} c={"#FFF"} p={".5em"} href={href} target={target}>{text}</Anchor>
  );
};

export default Link;
