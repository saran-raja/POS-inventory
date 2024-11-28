import { Badge as AntBadge } from 'antd';
export const Badge = (props: any) => {
  const badgeStyle = {
    fontSize: '14px',
  };
  return <AntBadge {...props} style={badgeStyle} />;
};
export default Badge;
