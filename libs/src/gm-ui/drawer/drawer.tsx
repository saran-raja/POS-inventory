import React from 'react';
import { Drawer as AntDrawer } from 'antd';

export const Drawer = (props: any) => {
  const drawerStyle = { margin: '20px 0' };
  return <AntDrawer {...props} style={drawerStyle} />;
};

export default Drawer;
