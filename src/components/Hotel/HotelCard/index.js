import React from 'react';

import { Container, ContentInfo } from './styles';

function HotelCard(props) {
  const { subtitle, text, image } = props;

  return (
    <Container {...props}>
      <img src={image} alt="hotel imagem" />

      <ContentInfo>
        <h3>Driven Resort</h3>
        <p className='subTitle'>{subtitle}</p>
        <p className='text'>{text}</p>

        <p className='subTitle'>{subtitle}</p>
        <p className='text'>{text}</p>
      </ContentInfo>
    </Container>
  );
}

export default HotelCard;
