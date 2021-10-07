import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons'
import Nav from 'react-bootstrap/Nav'




const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { SubMenu } = Menu;
const menu = (
    <Menu>
        <Menu.ItemGroup title="Group title">
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version one </a></Menu.Item>
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version two </a></Menu.Item>
        </Menu.ItemGroup>
        <SubMenu title="sub menu">
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version three </a></Menu.Item>
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version four </a></Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version five </a></Menu.Item>
            <Menu.Item><a class="dropdown-item" href="/homepage-v1.html"> Home version six </a></Menu.Item>
        </SubMenu>
    </Menu>
);


function Header() {
    return (
        <header className='Header'>
            <div className='topbar'>
                <div className='Container'>
                    <Row>
                        <Col span={10}>
                            <div className='topbar-left'>
                                <p className='topbar-left__text'>
                                    Monday, March 22, 2020
                                </p>

                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="list-unstyled topbar-right">
                                <ul className="topbar-link">
                                    <li><a href="#" title="">Career</a></li>
                                    <li><a href="#" title="">Contact Us</a></li>
                                    <li><a href="#" title="">Login / Register</a></li>
                                </ul>
                                <ul className="topbar-sosmed">
                                    <li>
                                        <a href="#"><IconFont type="icon-facebook" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><IconFont type="icon-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><InstagramOutlined type="icon-tuichu" /></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='navigation-wrap'>
                <nav className='navbar'>
                    <div className='Container'>
                        <Row>
                            <figure className="">
                                <a href="index.html">
                                    <img src="./images/logo1.png" alt="" className="logo" alt="logo" />
                                </a>
                            </figure>
                            <div className='navbar-menu'>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        Home <DownOutlined />
                                    </a>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        Pages <DownOutlined />
                                    </a>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        About <DownOutlined />
                                    </a>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        News <DownOutlined />
                                    </a>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        Category <DownOutlined />
                                    </a>
                                </Dropdown>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href='#' onClick={e => e.preventDefault()}>
                                        Contact <DownOutlined />
                                    </a>
                                </Dropdown>

                            </div>
                        </Row>


                    </div>

                </nav >

            </div >
        </header >
    );
}

export default Header;