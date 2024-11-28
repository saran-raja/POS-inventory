import React from 'react';
import { Progress as AntProgress } from 'antd';

export const Progress = (props: any) => {
  const progressStyle = { margin: '20px 0' };
  return <AntProgress {...props} style={progressStyle} />;
};

export default Progress;
