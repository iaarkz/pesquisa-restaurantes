import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
  background-image: url(${(props) => props.photo});
  background-size: cover;
  border-radius: 6px;
  display: flex;
  height: 90px;
  justify-content: center;
  width: 90px;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin: 5px;
  text-shadow: 2px 2px 4px #000000;
`;

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, SetImageLoaded] = useState(false);
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => SetImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>{' '}
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
