import React from 'react';
import { Typography as AntTypography } from 'antd';
const { Text } = AntTypography;
export const Typography = (props: any) => {
  const typographyStyle = { margin: '20px 0' };
  return <AntTypography {...props} style={typographyStyle} />;
};
Typography.Text = Text;
export default Typography;
