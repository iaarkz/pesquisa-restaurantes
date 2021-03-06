import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: scroll;
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
    margin-right: 20px;
  }
`;

export const Map = styled.div`
  background-color: gray;
  width: 500px;
`;

export const ModalTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.11px;
  line-height: 29px;
  margin-bottom: 10px;
  text-transform: none;
`;

export const ModalContent = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.15px;
  line-height: 19px;
  margin-bottom: 10px;
  text-transform: none;
`;

export const ModalStatus = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.15px;
  line-height: 19px;
  margin-bottom: 10px;
  text-transform: none;
`;
