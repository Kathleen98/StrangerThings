import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import Cards from "../../Cards";

interface SlidersProps {
  src: string;
  title: string;
  text: string;
  buttonText: string;
}

const SlideCarousel = ({ src, title, text, buttonText }: SlidersProps) => {
  return (
    <Carousel.Slide>
      <Cards src={src} title={title} text={text} buttonText={buttonText} />
    </Carousel.Slide>
  );
};

export default SlideCarousel;
