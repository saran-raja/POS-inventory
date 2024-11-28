import { Radio as AntRadio } from 'antd';
const { Group } = AntRadio;
export const Radio = (props: any) => {
  const radioStyle = {
    fontSize: '16px',
    margin: '10px 0',
  };
  return <AntRadio {...props} style={radioStyle} />;
};
Radio.Group = Group;
export default Radio;
