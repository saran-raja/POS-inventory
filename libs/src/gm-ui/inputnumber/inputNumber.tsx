import React from 'react';
import { InputNumber as AntInputNumber } from 'antd';

export const InputNumber = (props: any) => {
  const inputNumberStyle = { margin: '20px 0' };
  return <AntInputNumber {...props} style={inputNumberStyle} />;
};

export default InputNumber;
