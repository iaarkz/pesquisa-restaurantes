import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: auto;
  width: 360px;
`;

export const Search = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

export const Logo = styled.img`
  height: 80%;
  margin-bottom: 15px;
`;
export const CarouselTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;
export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
  .slick-track {
    height: 45px;
  }
`;

export const Map = styled.div`
  background-color: gray;
  width: 500px;
`;