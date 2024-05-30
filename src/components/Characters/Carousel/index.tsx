import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";


const CarouselContainer = () => {
  return (
    <Carousel
        controlSize={'10px'}
    >
      {/* {imageCharacters.map((image) => (
        <SlideCarousel Children={image.image} key={image.id} />
      ))} */}
    </Carousel>
  );
};

export default CarouselContainer;
