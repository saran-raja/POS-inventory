import {Checkbox as AntCheckbox} from "antd";
export const CheckBox = (props: any) => {
    const checkboxStyle = {
      fontSize: '16px',
      margin: '10px 0',
    };
  
    return <AntCheckbox {...props} style={checkboxStyle} />;
  };
  export default CheckBox