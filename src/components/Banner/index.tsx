import styled from "styled-components";
import backgroundBanner from '../../../public/img/banner.jpg';

const BannerContainer = styled.div`
    width: 100vw;
    height: 70vh;
    margin: 0 auto;
    background: url(${backgroundBanner});
    background-size: 100vw 70vh;
`

const Banner = () =>{
    return<BannerContainer>
    </BannerContainer>
}

export default Banner;