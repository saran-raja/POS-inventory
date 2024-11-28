import { Pagination as  AntPagination} from "antd";
export const Pagination = (props: any) => {
    const paginationStyle = {
      margin: '20px 0',
    };
    return <AntPagination {...props} style={paginationStyle} />;
  };