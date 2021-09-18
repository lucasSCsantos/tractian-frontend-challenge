import { Button, Input, message, Space } from 'antd';
import { UserOutlined, ExclamationCircleOutlined, TagOutlined, FormOutlined } from '@ant-design/icons';
import React, { useContext, useState } from 'react';
import Form from 'antd/lib/form/Form';
import DataContext from '../context/DataContext';
import setOrdersListLocal from '../helpers/setOrdersListLocal';

const ModalForm = ({ setDisabled, disabled }) => {
	const { actualAsset } = useContext(DataContext);
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [priority, setPriority] = useState('');
	const [responsable, setResponsable] = useState('');
	const [description, setDescription] = useState('');

	const success = () => {
		message.success('Ordem de Serviço adicionada!');
	};

	const onFinish = () => {
		const serviceOrder = {
			title,
			category,
			priority,
			responsable,
			description,
			date: new Date(),
			assetId: actualAsset && actualAsset.id,
		}
		setOrdersListLocal(serviceOrder);
		setTitle('');
		setCategory('');
		setPriority('');
		setResponsable('');
		setDescription('');
	}

	return (
		<Form
			name="create_order"
			onFinish={() => {
				onFinish();
				setDisabled(!disabled)
				success();
			}}
		>
			<Space direction="vertical" >
				<Input
					required
					disabled={disabled}
					style={{ width: 470 }}
					prefix={<FormOutlined className="site-form-item-icon" />}
					placeholder="Título"
					value={title}
					onChange={({ target }) => setTitle(target.value)}
					name="title"
					type="text"
				/>
				<Input
					required
					disabled={disabled}
					prefix={<TagOutlined className="site-form-item-icon" />}
					placeholder="Categoria"
					value={category}
					onChange={({ target }) => setCategory(target.value)}
					name="category"
					type="text"
				/>
				<Input
					required
					disabled={disabled}
					prefix={<ExclamationCircleOutlined className="site-form-item-icon" />}
					placeholder="Prioridade"
					value={priority}
					onChange={({ target }) => setPriority(target.value)}
					name="priority"
					type="text"
				/>
				<Input
					required
					disabled={disabled}
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Responsável"
					value={responsable}
					onChange={({ target }) => setResponsable(target.value)}
					name="responsable"
					type="text"
				/>
				<Input.TextArea
					required
					disabled={disabled}
					placeholder="Descrição"
					value={description}
					onChange={({ target }) => setDescription(target.value)}
					name="description"
					type="text"
				/>
				<Button type="primary" htmlType="submit" disabled={disabled} className="login-form-button">
					Submit
				</Button>
			</Space>
		</Form>
	);
}

export default ModalForm;
