import { Switch as AntSwitch } from 'antd';
export const Switch = (props: any) => {
  const switchStyle = {
    margin: '10px 0',
  };
  return <AntSwitch {...props} style={switchStyle} />;
};
export default Switch;
