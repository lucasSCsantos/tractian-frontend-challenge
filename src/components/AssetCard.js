import { Card, Col, Image, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import { SettingOutlined, ControlOutlined, CalendarOutlined, SyncOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const AssetCard = ({ asset }) => {
	const { 
		name,
		image,
		metrics,
		sensors,
		status,
		healthscore,
		model,
		id,
	} = asset;
	return (
		<Link to={`/assets/${id}`}>
			<Card
				title={name}
				style={{
					marginBottom: 24,
				}}
			>
				<Row gutter={12} justify="space-between">
					<Col span={10}>
						<Content
							style={{
								margin: 0,
								backgroundColor: 'rgba(0, 0, 0, 0.1)',
								height: 210,
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Image
								height={210}
								src={image}
							/>
						</Content>
					</Col>
					<Col span={12}>
						<p><CalendarOutlined /><Text strong> Inicio de coleta:</Text> há {Math.round(metrics.totalUptime * 0.00136986)} mes{Math.round(metrics.totalUptime * 0.00136986) === 1 ? '' : 'es'}</p>
						<p><SettingOutlined /><Text strong> Modelo:</Text> {model}</p>
						<p><ControlOutlined /><Text strong> Sensor:</Text> {sensors[0]}</p>
						<p><CalendarOutlined /><Text strong> Última coleta:</Text> {metrics.lastUptimeAt}</p>
						<p><SyncOutlined /><Text strong> Status:</Text> {status}</p>
					</Col>
				</Row>
			</Card>
		</Link>
	);
}

export default AssetCard;
