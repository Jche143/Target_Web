import React, { useContext } from 'react';
import { UserOutlined, DownloadOutlined} from '@ant-design/icons';
import { notification, NotificationArgsProps, Flex, Breadcrumb, Layout, Menu, theme, Space, Button, Input, Card, Typography } from 'antd';
import { Link } from "react-router-dom";

const {Header, Content, Footer} = Layout;
    
const items = new Array(1).fill(null).map((_, i) => ({
        key: i + 1,
        label: `Register Page`,
}));

const cardStyle: React.CSSProperties = {
    width: 620,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';

type NotificationPlacement = NotificationArgsProps['placement'];

const RegisterPage: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // 提示信息
    const openNotification = (type: NotificationType ,placement: NotificationPlacement) => {
        api[type]({
          message:  `注册成功`,
          description: "success", placement
        })
    }
    
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{display: 'flex', alignItems: 'center' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                style={{ flex:1, minWidth: 0 }}
            />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Register</Breadcrumb.Item>
                </Breadcrumb>
                <Typography.Title level={3} style={{padding:'0 0'}}>
                    注册
                </Typography.Title>
                <Space direction="vertical">
                    <Input 
                    style={{
                        width:200,
                    }} placeholder="username" prefix={<UserOutlined/>}/>
                    
                    <Input.Password 
                    style={{
                        width:200,
                    }}
                    placeholder="input password" />
                    
                    {contextHolder}
                    <Button onClick={() => openNotification('success','top')} type="primary">Register</Button>
                    <br></br>
                    <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                        <Flex justify="space-between">
                            <img
                                alt='avatar'
                                src="http://sa6jipv2c.hn-bkt.clouddn.com/make.jpg?e=1710159061&token=HRDXZQPk8TTSdfdE87ABDNFzzEsBYsQAb997fPTL:cbWfoQJyRa1skJO5n0g27yGUdzg="
                                style={imgStyle}
                            />
                            <Flex vertical align='flex-end' justify="space-between" style={{padding: 32}}>
                                <Typography.Title level={3}>
                                    "If you have registed, click me to login!"
                                </Typography.Title>
                                <Link to={`/login`}>
                                    <Button type="primary" size="large" shape="round">
                                        goto login
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Card>
                </Space>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Page @{new Date().getFullYear()} created by Jche143 
            </Footer>
        </Layout>
    )
}



export default RegisterPage;