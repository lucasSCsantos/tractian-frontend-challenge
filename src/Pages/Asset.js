import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useContext } from 'react';
import AssetCard from '../components/AssetCard';
import AssetSpecs from '../components/AssetSpecs';
import DataContext from '../context/DataContext';

const Asset = () => {
	const { actualAsset } = useContext(DataContext);
	return (
		<Row gutter={24}>
		<Col span={12}>
			<Content
				className="site-layout-background"
				style={{
					padding: 24,
					margin: 0,
					marginBottom: 24,
				}}
			>
				<AssetCard asset={actualAsset} responsable/>
			</Content>
			<Content
				className="site-layout-background"
				style={{
					padding: 24,
					margin: 0,
					height: 236,
				}}
			>
				Content
			</Content>
		</Col>
		<Col span={12}>
			<Content
				className="site-layout-background"
				style={{
					padding: 24,
					margin: 0,
					height: 776,
					overflow: 'auto',
				}}
			>
				<AssetSpecs asset={actualAsset} />
			</Content>
		</Col>
	</Row>
	);
}

export default Asset;
