import React from 'react';
import { Button, Popover as AntPopover } from 'antd';

export const Popover = (props: any) => (
  <AntPopover {...props}>{props.children}</AntPopover>
);

export default Popover;
