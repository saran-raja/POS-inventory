import React from 'react';
import { List as AntList } from 'antd';
const { Item } = AntList;

export const List = (props: any) => {
  const listStyle = { padding: '20px', margin: '10px 0' };
  return <AntList {...props} style={listStyle} />;
};
List.Item = Item;

export default List;
