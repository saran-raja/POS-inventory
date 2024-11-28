import { Tooltip as AntTooltip } from "antd";
export const Tooltip = (props: any) => {
    const tooltipStyle = {
      fontSize: '14px',
    };
    return <AntTooltip {...props} style={tooltipStyle} />;
  };