import { Card } from 'antd';
import React from 'react';
import { CalendarOutlined, ExclamationCircleOutlined, UserOutlined, TagOutlined, ProfileOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { correctDate } from '../helpers/correct';


const ServiceOrderCard = ({order}) => {
	return (
		<Card title={order.title} style={{ width: 250, height: 290 }}>
			<p><TagOutlined /><Text strong> Categoria</Text> {order.category}</p>
			<p><ExclamationCircleOutlined /><Text strong> Prioridade:</Text> {order.priority}</p>
			<p><UserOutlined /><Text strong> Responsável:</Text> {order.responsable}</p>
			<p><CalendarOutlined /><Text strong> Data:</Text> {correctDate(order.date)}</p>
			<p><ProfileOutlined /><Text strong> Descrição:</Text> {order.description}</p>
		</Card>
	);
}

export default ServiceOrderCard;
