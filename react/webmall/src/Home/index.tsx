import { Button, Layout, Menu, Space } from "antd";
import { Link } from "react-router-dom";
import { Breadcrumb } from 'antd';
import React from "react";

const {Header, Content, Footer} = Layout;

// 头部菜单
function Head() {
    const items = [
        { key: '1', label: 'Home Page' },
        { key: '2', label: 'About Us'},
    ]

    return (
        <Header style={{display:"flex", alignItems: 'center'}}>
            {/* 头菜单 */}
            <Menu 
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                style={{flex: 1, minWidth: 0}}
            />
        </Header>
    )
}

// 局部页面跳转按钮
function SkipButton({ skip, context} : {skip: string, context: string}) {
    return (
        <Link to={skip}>
            <Button type="primary" size="large" shape="round">
                {context}
            </Button>
        </Link>
    )
}

// 索引
function UseBreadcrumb() {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
    )
}



const HomePage: React.FC = () => {
    return (
        // 全局适应
        <Layout style={{minHeight: '100vh'}}>
            {/* 头部 */}
            <Head />
            <Content style={{ padding: '0 48px' }}>
                {/* 内容索引 */}
                <UseBreadcrumb />
                {/* 跳转按键 */}
                <Space>
                    <SkipButton skip="/login" context="Login" />
                    <SkipButton skip="/register" context="Register" />
                </Space>
            </Content>
        </Layout>
    )
}

export default HomePage;