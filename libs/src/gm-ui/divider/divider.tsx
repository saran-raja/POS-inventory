import React from 'react';
import { Divider as AntDivider } from 'antd';

export const Divider = (props: any) => {
  const dividerStyle = { margin: '20px 0' };
  return <AntDivider {...props} style={dividerStyle} />;
};

export default Divider;
