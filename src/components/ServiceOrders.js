import { Button, Card, Col, Row } from 'antd';
import { PlusOutlined, CalendarOutlined, SettingOutlined, ControlOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import Modal from 'antd/lib/modal/Modal';
import ModalForm from './ModalForm';
import DataContext from '../context/DataContext';
import assetServiceOrdersList from '../helpers/assetServiceOrdersList';
import Text from 'antd/lib/typography/Text';

const ServiceOrders = () => {
	const { actualAsset } = useContext(DataContext);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const serviceOrdersList = assetServiceOrdersList(actualAsset.id);

  const showModal = () => {
    setIsModalVisible(true);
  };

	const handleOk = () => {
    setIsModalVisible(false);
		setDisabled(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

	return (
		<>
			<Modal
				title="Adicionar Ordem de Serviço"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={
					<Button type="primary" onClick={handleOk} >
						Ok
					</Button>
				}
			>
				<ModalForm disabled={disabled} setDisabled={setDisabled} />
      </Modal>
			<Row gutter={12}>
				<Col>
					<Title level={3}>Ordens de Serviço</Title>
				</Col>
				<Col>
					<Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal} />
				</Col>
			</Row>
			<Row gutter={12} style={{marginTop: 25}}>
				{serviceOrdersList && serviceOrdersList.map((order) => (
					<Card title={order.title} style={{ width: 300 }}>
					 	<p style={{ fontSize: 12 }} ><CalendarOutlined /><Text strong> Inicio de coleta:</Text> {order.category}</p>
						<p><SettingOutlined /><Text strong> Modelo:</Text> {order.priority}</p>
						<p><ControlOutlined /><Text strong> Sensor:</Text> {order.responsable}</p>
						<p><CalendarOutlined /><Text strong> Última coleta:</Text> {order.descrption}</p>
				 	</Card>
				))}
			</Row>
		</>
	);
}

export default ServiceOrders;
