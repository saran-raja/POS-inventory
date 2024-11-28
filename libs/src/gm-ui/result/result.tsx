import React from 'react';
import { Result as AntResult } from 'antd';

export const Result = (props: any) => {
  const resultStyle = { margin: '20px 0' };
  return <AntResult {...props} style={resultStyle} />;
};

export default Result;
