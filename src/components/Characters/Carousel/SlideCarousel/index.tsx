import "@mantine/carousel/styles.css";
import { Carousel } from '@mantine/carousel';
import { ReactNode } from "react";

interface TitleProps {
    Children: ReactNode;
  }

const SlideCarousel = ({Children} : TitleProps) =>{
    return<Carousel.Slide>
        {Children}
    </Carousel.Slide>
}

export default SlideCarousel;