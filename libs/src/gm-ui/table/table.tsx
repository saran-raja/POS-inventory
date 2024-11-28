import { Table as AntTable } from 'antd';
export const Table = (props: any) => {
  const tableStyle = {
    marginTop: '20px',
  };

  return <AntTable {...props} style={tableStyle} />;
};
export default Table;
