import React, { useContext, useState } from 'react';
import { UserOutlined, DownloadOutlined } from '@ant-design/icons';
import { notification, Flex, Breadcrumb, Layout, Menu, theme, Space, Button, Input, Card, Typography, NotificationArgsProps } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';

const {Header, Content, Footer} = Layout;
    
const items = new Array(1).fill(null).map((_, i) => ({
        key: i + 1,
        label: `Login Page`,
}));

const cardStyle: React.CSSProperties = {
    width: 620,
};

const imgStyle: React.CSSProperties = {
    display: 'block',
}
// 图标
type NotificationType = 'success' | 'info' | 'warning' | 'error';
// 位置
type NotificationPlacement = NotificationArgsProps['placement']

// 局部页面跳转按钮
function SkipButton({skip, context}: {skip: string, context: string}) {
    return (
        <Link to={skip}>
            <Button type="primary" size="large" shape="round">
                {context}
            </Button>
        </Link>
    )
}

const LoginPage: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();
    const [message, setMessge] = useState('')
    const [passwd, setPasswd] = useState('')
    const [post, setPost] = useState('')
    const [err, setErr] = useState('')

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    
    // 提示信息
    const openSuccessNotification = (type: NotificationType,placement: NotificationPlacement, message: string) => {
        api[type]({
          message: `登录成功`,
          description: message, placement
        })
    }

    const openErrNotification = (type: NotificationType,placement: NotificationPlacement, message: string) => {
        api[type]({
          message: `登录失败`,
          description: message, placement
        })
    }

    // 输入输出取值
    const handleChange = (e: any) => {
        setMessge(e.target.value)
    }

    const handleChange2 = (e: any) => {
        setPasswd(e.target.value)
    }

    // 登录接口处理
    function handleClick() {
        console.log(message, passwd)
        axios.post('/login',{
            username: message,
            password: passwd,
        })
        .then((res) => {
            setPost(res.data)
            openSuccessNotification('success','top', res.data.message)
        }).catch((err) => {
            setErr(err)
            openErrNotification('error','top', err.response.data.message)
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
                {/* 索引 */}
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                </Breadcrumb>
                
                <Typography.Title level={3} style={{padding:'0 0'}}>
                        登录
                </Typography.Title>
                
                <Space direction="vertical">
                    {/* 用户名 */}
                    <Input 
                    style={{
                        width:200,
                    }} onChange={handleChange} placeholder="username" prefix={<UserOutlined/>}/>
                    
                    {/* 密码 */}
                    <Input.Password 
                    style={{
                        width:200,
                    }}
                    placeholder="input password"  onChange={handleChange2} />
                    
                    {contextHolder}
                    <Button onClick= {() => {handleClick()}} type="primary">Login</Button>
                    <br></br>
                    
                    <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                        <Flex justify="space-between">
                            <img
                                alt='avatar'
                                src="http://sa6jipv2c.hn-bkt.clouddn.com/aoyin.jpg?e=1710156597&token=HRDXZQPk8TTSdfdE87ABDNFzzEsBYsQAb997fPTL:Wxyl65ohnLKTFPPzdT7HQ4K67G4="
                                style={imgStyle}
                            />
                            <Flex vertical align='flex-end' justify="space-between" style={{padding: 32}}>
                                <Typography.Title level={3}>
                                    "If you want join, click me!"
                                </Typography.Title>
                                <Link to={`/register`}>
                                    <Button type="primary" size="large" shape="round">
                                        Get Register
                                    </Button>
                                </Link>
                            </Flex>
                        </Flex>
                    </Card>

                    <br/>
                    <SkipButton skip={`/`} context={`Back Home`}/>

                </Space>

            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Page @{new Date().getFullYear()} created by Jche143 
            </Footer>

        </Layout>
    )
}

export default LoginPage;