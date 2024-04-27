import { Button, Layout, Menu, Space, Typography } from "antd";
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
            <Content style={{ padding: '0 48px' }} >
                {/* 内容索引 */}
                <UseBreadcrumb />
                {/* 标题 */}
                <Typography.Title level={1}>
                    欢迎来到Webmall
                </Typography.Title>
                {/* 描述 */}
                <Typography.Paragraph>
                    本网站是一个专门设计为练习的新手友好平台
                    <br />
                    在这里你可以找到很多有趣的东西
                    <br />
                    希望你能在这里找到乐趣
                    <br />
                </Typography.Paragraph>
                {/* 跳转按键 */}
                游客模式先看看？<SkipButton skip="/show" context="showPage" />
                <br /><br/>
                如果你还没有账号，请先注册 <SkipButton skip="/register" context="Register" />
                <br/><br/>
                如果你已经注册，请登录 <SkipButton skip="/login" context="Login" />
                
            </Content>
        </Layout>
    )
}

export default HomePage;