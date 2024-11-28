import React from 'react';
import { Avatar as AntAvatar } from 'antd';

export const Avatar = (props: any) => {
  const avatarStyle = { margin: '10px 0' };
  return <AntAvatar {...props} style={avatarStyle} />;
};

export default Avatar;
