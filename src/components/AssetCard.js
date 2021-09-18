import { Card, Col, Image, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Text from 'antd/lib/typography/Text';
import { SettingOutlined, ControlOutlined, CalendarOutlined, SyncOutlined, UserOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Paragraph from 'antd/lib/typography/Paragraph';
import { correct, correctDate } from '../helpers/correct';
import correctUptime from '../helpers/correctUptime';
import responsableExist from '../helpers/responsableExist';

const AssetCard = ({ asset, responsable }) => {
	const { setActAssetId, editableStr, setEditableStr, responsables } = useContext(DataContext);
	const { 
		name,
		image,
		metrics,
		sensors,
		status,
		model,
		id,
	} = asset;
	console.log(responsable);
	
	return (
		<Link
		to={`/assets/${id}`}
		onClick={() => {
			localStorage.setItem("actualAssetId", id);
			setActAssetId(id);
		}}
		>
			{ (asset && metrics) && 
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
									preview={false}
								/>
							</Content>
						</Col>
						<Col span={12}>
							<p><CalendarOutlined /><Text strong> Inicio de coleta:</Text> {correctUptime(metrics.totalUptime)}</p>
							<p><SettingOutlined /><Text strong> Modelo:</Text> {correct(model)}</p>
							<p><ControlOutlined /><Text strong> Sensor:</Text> {sensors[0]}</p>
							<p><CalendarOutlined /><Text strong> Última coleta:</Text> {correctDate(metrics.lastUptimeAt)}</p>
							<p><SyncOutlined /><Text strong> Status:</Text> {correct(status)}</p>
							{responsable && 
								<p>
									<Row gutter={6} align={'middle'}>
										<Col>
											<UserOutlined />
											<Text strong> Responsável:</Text>
										</Col>
										<Col>
											<Paragraph
												style={{  width: 180, margin: 0, display: 'flex' }}
												editable={{ onChange: setEditableStr }}
											>
												{responsableExist(responsables, asset) 
													? responsableExist(responsables, asset)
														:
														editableStr
												}
											</Paragraph>
										</Col>
									</Row>
								</p>
							}
						</Col>
					</Row>
				</Card>
			}
		</Link>
	);
}

export default AssetCard;
