import { Dropdown as AntDropdown } from 'antd';
export const Dropdown = (props: any) => {
  const dropdownStyle = {
    margin: '10px 0',
  };
  return <AntDropdown {...props} style={dropdownStyle} />;
};
export default Dropdown;
