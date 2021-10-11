import { Row, Col } from 'antd';
import { Menu, Dropdown, Button, Space } from 'antd'

const menu1 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
      global economy
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        religion
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        bitcoin
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        conflict
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        sports
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        scandals
      </a>
    </Menu.Item>
  </Menu>
);

function Footer() {
  return (
    <footer className="footer">
      <div className='Container'>
        <Row>
          <Col span={6}>
          <Space direction="vertical">
    <Space wrap>
      <Dropdown overlay={menu1} placement="bottomLeft">
        <Button >bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>

          </Col>
          {/* <Col span={6}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button>Entertainment</Button>
            </Dropdown>

          </Col> */}
          {/* <Col span={6}>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button>Health</Button>
            </Dropdown>

          </Col> */}
          {/* <Col span={6}>
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button>Business</Button>
            </Dropdown>
          </Col> */}
        </Row>


      </div>
    </footer>
  );
}



export default Footer;