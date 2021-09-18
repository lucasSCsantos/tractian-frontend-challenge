import { Button, Col, Divider, Row } from 'antd';
import { PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useContext, useRef, useState } from 'react';
import Title from 'antd/lib/typography/Title';
import Modal from 'antd/lib/modal/Modal';
import ModalForm from './ModalForm';
import DataContext from '../context/DataContext';
import assetServiceOrdersList from '../helpers/assetServiceOrdersList';
import ServiceOrderCard from './ServiceOrderCard';

const ServiceOrders = () => {
	const { actualAsset } = useContext(DataContext);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const listEl = useRef(null);

	const serviceOrdersList = actualAsset && assetServiceOrdersList(actualAsset.id);

  const showModal = () => {
    setIsModalVisible(true);
  };

	const handleOk = () => {
    setIsModalVisible(false);
		setDisabled(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
		setDisabled(false);
  };

	const onNextClick = () => {
    const imgWidth = listEl.current.offsetWidth;
    listEl.current.scrollLeft +=  imgWidth;
  }

  const onPreviousClick = () => {
    const imgWidth = listEl.current.offsetWidth;
    listEl.current.scrollLeft -=  imgWidth;
  }

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
			<Row gutter={12} style={{ marginBottom: -15 }}>
				<Col span={7}>
					<Title level={3}>Ordens de Serviço</Title>
				</Col>
				<Col span={5}>
					<Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={showModal} />
				</Col>
				<Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }} >
					<Button shape="circle" icon={<LeftOutlined />} onClick={onPreviousClick} />
					<Button shape="circle" icon={<RightOutlined />} onClick={onNextClick} />
				</Col>
			</Row>
			<Divider />
			<Row
				gutter={12}
				style={{ marginTop: 25, overflowX: "hidden", scrollBehavior: 'smooth' }}
				wrap={false}
				align="middle"
				ref={listEl}
			>
				{serviceOrdersList ? serviceOrdersList.map((order, index) => (
					<Col span={8} key={index}>
						<ServiceOrderCard order={order} />	
					</Col>
				)) : 
				<Col offset={7} style={{ marginTop: 100 }}>
					<Title level={3} style={{ color: '#ccc' }}>Nenhuma Ordem de Serviço</Title>
				</Col>
				}
			</Row>
		</>
	);
}

export default ServiceOrders;
