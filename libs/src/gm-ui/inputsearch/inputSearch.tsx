import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const InputSearch = (props: any) => {
  const searchStyle = { margin: '20px 0' };
  return <Search {...props} style={searchStyle} />;
};

export default InputSearch;
