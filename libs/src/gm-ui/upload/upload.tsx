import { Upload as AntUpload } from 'antd';
export const Upload = (props: any) => {
  const uploadStyle = {
    margin: '10px 0',
  };
  return <AntUpload {...props} style={uploadStyle} />;
};
export default Upload;
