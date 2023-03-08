import React from 'react';

import { Container, ContentInfo } from './styles';

function HotelCard(props) {
  const { subtitle01, subtitle02, text01, image, text02 } = props;

  return (
    <Container {...props} >
      <img src={image} alt="hotel imagem" />

      <ContentInfo>
        <h3>Driven Resort</h3>
        <p className='subTitle'>{subtitle01}</p>
        <p className='text'>{text01}</p>

        <p className='subTitle'>{subtitle02}</p>
        <p className='text'>{text02}</p>
      </ContentInfo>
    </Container>
  );
}

export default HotelCard;
