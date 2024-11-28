import React from 'react';
import { BackTop as AntBackTop } from 'antd';

export const BackTop = (props: any) => {
  const backTopStyle = { margin: '10px 0' };
  return <AntBackTop {...props} style={backTopStyle} />;
};

export default BackTop;
