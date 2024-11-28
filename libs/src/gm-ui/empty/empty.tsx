import React from 'react';
import { Empty as AntEmpty } from 'antd';

export const Empty = (props: any) => {
  const emptyStyle = { margin: '20px 0' };
  return <AntEmpty {...props} style={emptyStyle} />;
};

export default Empty;
