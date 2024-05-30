import styled from "styled-components";
import backgroundBanner from '../../../public/img/banner.jpg';

const BannerContainer = styled.div`
    width: 100vw;
    height: 40vh;
    margin: 0 auto;
    background: url(${backgroundBanner});
    background-size: 100vw 40vh;
`

const Banner = () =>{
    return<BannerContainer>
    </BannerContainer>
}

export default Banner;