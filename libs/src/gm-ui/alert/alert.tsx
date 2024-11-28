import { Alert as AntAlert } from 'antd';
export const Alert = (props: any) => {
  const alertStyle = {
    margin: '10px 0',
  };
  return <AntAlert {...props} style={alertStyle} />;
};
export default Alert;
