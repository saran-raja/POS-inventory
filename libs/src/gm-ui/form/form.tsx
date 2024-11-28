import React from 'react';
import { Form as AntForm } from 'antd';
const { Item } = AntForm;

export const Form = (props: any) => {
  const formStyle = {
    padding: '20px',
  };
  return <AntForm {...props} style={formStyle} />;
};
Form.Item = Item;

export default Form;
