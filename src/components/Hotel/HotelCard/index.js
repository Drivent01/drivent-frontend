import { Container, ContentInfo } from './styles';

function HotelCard({
  hotel, 
  subtitle01, 
  subtitle02, 
  text01, 
  image, 
  text02, 
  marginBottom, 
  selectMe = () => {},
  isSelected }) {
  function handleClick(e) {
    e.preventDefault();
    selectMe();
  }
  
  return (
    <Container marginBottom={marginBottom} onClick={handleClick} isSelected={isSelected}>
      <img src={image} alt="hotel imagem" />

      <ContentInfo>
        <h3>{hotel}</h3>
        <p className="subTitle">{subtitle01}</p>
        <p className="text">{text01}</p>

        <p className="subTitle">{subtitle02}</p>
        <p className="text">{text02}</p>
      </ContentInfo>
    </Container>
  );
}

export default HotelCard;
