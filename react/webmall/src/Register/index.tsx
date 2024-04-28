import React, { useContext } from 'react';
import { UserOutlined, KeyOutlined, SolutionOutlined} from '@ant-design/icons';
import { notification, NotificationArgsProps, Flex, Breadcrumb, Layout, Menu, theme, Space, Button, Input, Card, Typography } from 'antd';
import { Link } from "react-router-dom";
import axios from 'axios';

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

// 局部跳转按钮
function SkipButton({skip, context}: {skip: string, context: string}) {
    return (
        <Link to={skip}>
            <Button type="primary" size="large" shape="round">
                {context}
            </Button>
        </Link>
    )
}

const RegisterPage: React.FC = () => {
    const [api, contextHolder] = notification.useNotification();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [post, setPost] = React.useState('');
    const [err, setErr] = React.useState('');


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // 提示信息
    const openSuccessNotification = (type: NotificationType ,placement: NotificationPlacement, message: string) => {
        api[type]({
          message:  `注册成功`,
          description: message, placement
        })
    }

    const openErrNotification = (type: NotificationType ,placement: NotificationPlacement, message: string) => {
        api[type]({
          message:  `注册失败`,
          description: message, placement
        })
    }

    // 注册
    const handleUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const handleNickname = (e: any) => {
        setNickname(e.target.value);
    }

    const handleRigster = () => {
        // console.log("123")
        axios.post('/api/register',{
            username: username,
            password: password,
            name: nickname,
        })
        .then((res) => {
            // console.log(res.data.message)
            setPost(res.data)
            openSuccessNotification('success','top', res.data.message)
        }).catch((err) => {
            setErr(err)
            // console.log(err.response.data.message)
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
                    <Breadcrumb.Item>Register</Breadcrumb.Item>
                </Breadcrumb>

                {/* 标题 */}
                <Typography.Title level={3} style={{padding:'0 0'}}>
                    注册
                </Typography.Title>

                {/* 注册表单 */}
                <Space direction="vertical">
                    {/* 用户名 */}
                    <Input 
                    style={{
                        width:200,
                    }} placeholder="username" onChange={handleUsername} prefix={<UserOutlined/>}/>

                    {/* 密码 */}
                    <Input.Password 
                    style={{
                        width:200,
                    }}
                    placeholder="password" onChange={handlePassword}  prefix={<KeyOutlined />} />

                    {/* 昵称 */}
                    <Input 
                    style={{
                        width:200,
                    }} placeholder="nickname" onChange={handleNickname} prefix={<SolutionOutlined/>}/>

                    {contextHolder}
                    <Button onClick={() => handleRigster()} type="primary">Register</Button>
                    <br></br>
                    <Card hoverable style={cardStyle} styles={{body: {padding: 0, overflow: 'hidden'}}}>
                        <Flex justify="space-between">
                            <img
                                alt='avatar'
                                src="http://jche143.top:81/image/registershow.jpg"
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

                    {/* 返回主页 */}
                    <br/>
                    <SkipButton context="Back Home" skip="/" />
                </Space>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Page @{new Date().getFullYear()} created by Jche143 
            </Footer>
        </Layout>
    )
}



export default RegisterPage;