import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import data from './SlideCarousel/data.json';
import Cards from "../Cards";

const CarouselContainer = () => {
  return (
    <Carousel
        controlSize={'10px'}
        slideSize="100%"
        slideGap="sm"
        w={'100vw'}
    >
      {data.map((cards) => (
        <Carousel.Slide 
            key={cards.id}
        >
            <Cards 
                src={cards.image}
                title={cards.title}
                text={cards.text}
                buttonText="Ver mais"
            />
        </Carousel.Slide>
      ))}
      ))
    </Carousel>
  );
};

export default CarouselContainer;
