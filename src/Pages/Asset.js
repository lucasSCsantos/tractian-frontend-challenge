import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useContext } from 'react';
import AssetCard from '../components/AssetCard';
import AssetSpecs from '../components/AssetSpecs';
import ServiceOrders from '../components/ServiceOrders';
import DataContext from '../context/DataContext';

const Asset = () => {
	const { actualAsset } = useContext(DataContext);
	// console.log(actualAsset)
	return (
		<>
			{/* { actualAsset && */}
			<div>
				<Row gutter={24}>
					<Col span={12}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								height: 396,
								marginBottom: 24,
							}}
						>
							{/* <AssetCard asset={actualAsset} responsable/> */}
						</Content>
					</Col>
					<Col span={12}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								height: 396,
								overflow: 'auto',
							}}
						>
							{/* <AssetSpecs asset={actualAsset} /> */}
						</Content>
					</Col>
				</Row>
				<Row justify="center">
					<Col span={12}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								height: 446,
							}}
						>
							<ServiceOrders />
						</Content>
					</Col>
				</Row>
			</div> 
			{/* } */}
		</>
	);
}

export default Asset;
