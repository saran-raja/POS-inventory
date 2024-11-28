import React from 'react';
import { Collapse as AntCollapse } from 'antd';

const { Panel } = AntCollapse;

export const Collapse = (props: any) => {
  const collapseStyle = { margin: '20px 0' };
  return (
    <AntCollapse {...props} style={collapseStyle}>
      {props.children}
    </AntCollapse>
  );
};
Collapse.Panel = Panel;

export default Collapse;
