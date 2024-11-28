import React, { useEffect } from 'react';
import {
  Login,
  Register,
  Alert,
  AutoComplete,
  Avatar,
  BackTop,
  Badge,
  Button,
  Card,
  Carousel,
  Checkbox,
  Collapse,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  Input,
  InputNumber,
  InputSearch,
  List,
  Modal,
  Notification,
  Pagination,
  Popover,
  Progress,
  Radio,
  Result,
  Select,
  Skeleton,
  Spin,
  Statistic,
  Switch,
  Table,
  Tooltip,
  Tree,
  TreeSelect,
  Typography,
  Upload,
} from '@pos-inventory/libs';

const Home = () => {
  // Trigger the notification when the component mounts
  useEffect(() => {
    Notification.success('Success', 'The operation completed successfully.');
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Alert message="This is an alert" />
      <AutoComplete />
      <Avatar />
      <BackTop />
      <Badge count={5} />
      <Button type="primary">Primary Button</Button>
      <Card title="Card Title" extra={<Button>More</Button>}>
        <p>Card content</p>
      </Card>
      <Carousel autoplay>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
      </Carousel>
      <Checkbox>Checkbox</Checkbox>
      <Collapse>
        <Collapse.Panel header="Collapse Header" key="1">
          <p>Collapse content</p>
        </Collapse.Panel>
      </Collapse>
      <DatePicker />
      <Descriptions>
        <Descriptions.Item label="User">John Doe</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Drawer title="Drawer" placement="right" closable={false}>
        <p>Drawer content</p>
      </Drawer>
      <Dropdown overlay={<span>Dropdown Content</span>}>
        <Button>Hover me</Button>
      </Dropdown>
      <Empty description="No Data" />
      <Form layout="vertical">
        <Form.Item label="Input">
          <Input />
        </Form.Item>
      </Form>
      <InputNumber />
      <InputSearch />
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={['Item 1', 'Item 2']}
        renderItem={(item: string) => <List.Item>{item}</List.Item>}
      />
      {/* <Modal title="Modal" visible={true}>
        <p>Modal content</p>
      </Modal> */}
      <Pagination defaultCurrent={1} total={50} />
      <Popover content={<span>Popover Content</span>} title="Title">
        <Button>Hover me</Button>
      </Popover>
      <Progress percent={50} />
      <Radio.Group>
        <Radio value={1}>Radio 1</Radio>
        <Radio value={2}>Radio 2</Radio>
      </Radio.Group>
      <Result status="success" title="Success!" />
      <Select defaultValue="Option1">
        <Select.Option value="Option1">Option 1</Select.Option>
      </Select>
      <Skeleton active />
      <Spin />
      <Statistic title="Active Users" value={112893} />
      <Switch defaultChecked />
      <Table
        dataSource={[]}
        columns={[{ title: 'Column', dataIndex: 'column', key: 'column' }]}
      />
      <Tooltip title="Tooltip">
        <Button>Hover me</Button>
      </Tooltip>
      <Tree treeData={[]} />
      <TreeSelect treeData={[]} />
      <Typography.Text>Text</Typography.Text>
      <Upload>
        <Button>Upload</Button>
      </Upload>
    </div>
  );
};

export default Home;
