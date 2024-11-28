import { Modal as AntModal } from 'antd';
export const Modal = (props: any) => {
  const modalStyle = {
    padding: '20px',
  };
  return <AntModal {...props} style={modalStyle} />;
};
export default Modal;
