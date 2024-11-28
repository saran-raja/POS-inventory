import React from 'react';
import { Spin as AntSpin } from 'antd';

export const Spin = (props: any) => {
  const spinStyle = { margin: '20px 0' };
  return <AntSpin {...props} style={spinStyle} />;
};

export default Spin;
