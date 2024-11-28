import { Card as AntCard } from 'antd';
export const Card = (props: any) => {
  const cardStyle = {
    padding: '20px',
    margin: '20px 0',
  };
  return <AntCard {...props} style={cardStyle} />;
};
export default Card;
