import { Card, Image, Title, Price } from './styles';

const HistoryCard = ({ title, price, image }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Price>$ {price}</Price>
      <Image src={image} alt={title} />
    </Card>
  );
};

export default HistoryCard;
