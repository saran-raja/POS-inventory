import { Button as AntButton } from 'antd';
import React from 'react';

export const Button = (props: any) => {
  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#1e90ff',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
  };

  return (
    <div>
      <AntButton {...props} style={buttonStyle}>
        {props?.children}
      </AntButton>
    </div>
  );
};

export default Button;
