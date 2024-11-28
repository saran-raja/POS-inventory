import { Select as AntSelect } from 'antd';
const { Option } = AntSelect;
export const Select = (props: any) => {
  const selectStyle = {
    width: '100%',
    border: '1px solid #d9d9d9',
    borderRadius: '5px',
    fontSize: '16px',
  };

  return <AntSelect {...props} style={selectStyle} />;
};
Select.Option = Option;
export default Select;
