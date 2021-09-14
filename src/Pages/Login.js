import { Button, Col, Form, Input, notification, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React from 'react';
import '../styles/Login.css';
import { UserOutlined, CloseCircleFilled } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

const Login = () => {

	const openNotification = () => {
		notification.open({
			message: 'Email inválido',
			icon: <CloseCircleFilled style={{ color: '#ff4d4f' }} />,
			duration: 2,
		});
	};

	const onFinish = (data) => {
		const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (regex.test(data.email)) {
			console.log(data)
		} else {
			openNotification();
		}
	}

	return (
		<Layout>
			<Content 
				className="login-page-background"
				style={{
					minHeight: 888,
				}}
			> 
				<Row justify="center" align="center">
					<div className="login-page-content">
						<Row justify="center" align="bottom">
							<Col span={16}>
								<Form
									name="normal_login"
									className="login-form"
									onFinish={onFinish}
								>
									<Row justify="center">
										<Form.Item>
											<Title level={2} style={{margin: 0}}>LOGIN</Title>
										</Form.Item>
									</Row>
									<Row justify="center">
										<Form.Item>
											<Text>Insira seu email de acesso</Text>
										</Form.Item>
									</Row>
									<Form.Item
										name="email"
										rules={[{ required: true, message: 'Please input your Email!' }]}
									>
										<Input
											prefix={<UserOutlined className="site-form-item-icon" />}
											placeholder="Email"
											type="email"
										/>
									</Form.Item>
									<Form.Item>
										<Button type="primary" htmlType="submit" className="login-form-button">
											Log in
										</Button>
									</Form.Item>
								</Form>
							</Col>
						</Row>
					</div>
				</Row>
			</Content>
		</Layout>
	);
}

export default Login;
