import React from 'react';
import { Descriptions as AntDescriptions } from 'antd';
const { Item } = AntDescriptions;

export const Descriptions = (props: any) => {
  const descriptionsStyle = { margin: '20px 0' };
  return <AntDescriptions {...props} style={descriptionsStyle} />;
};
Descriptions.Item = Item;

export default Descriptions;
