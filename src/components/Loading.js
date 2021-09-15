import { Row, Spin } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
	return (
		<Layout>
			<Content 
				className="loading-page-background"
				style={{
					minHeight: 888,
				}}
			> 
				<Row justify="center" align="center">
					<div className="loading-page-content">
						<Spin size="large" />
					</div>
				</Row>
			</Content>
		</Layout>
	);
}

export default Loading;
