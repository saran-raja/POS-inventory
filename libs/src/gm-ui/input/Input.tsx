import React from 'react';
import { Input as AntdInput } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(AntdInput)`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Input = (props: any) => {
  return <StyledInput {...props} />;
};

export default Input;
