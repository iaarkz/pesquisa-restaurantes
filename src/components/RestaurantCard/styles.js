import styled from 'styled-components';

export const Restaurant = styled.div`
  background-color: #ffffff;
  border-left: 5px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 16px;
  transition: 500ms ease-in-out;
  :hover {
    border-left-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
    transition: 500ms ease-in-out;
  }
`;

export const RestaurantPhoto = styled.img`
  border-radius: 6px;
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
  height: 100px;
  object-fit: cover;
  width: 100px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
