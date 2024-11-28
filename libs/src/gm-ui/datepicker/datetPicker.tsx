import { DatePicker as AntDatePicker } from 'antd';
export const DatePicker = (props: any) => {
  const datePickerStyle = {
    width: '100%',
  };
  return <AntDatePicker {...props} style={datePickerStyle} />;
};
// export default DatePicker;
