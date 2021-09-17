import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useContext } from 'react';
import AssetCard from '../components/AssetCard';
import Charts from '../components/Charts';
import DataContext from '../context/DataContext';
import getUnitAssets from '../helpers/getUnitAssets';

const Home = () => {
	const { assets, actualUnit: unit } = useContext(DataContext);
	return (
		<Row gutter={24}>
			<Col span={12}>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						marginBottom: 24,
						height: 446,
					}}
				>
					<Charts />
				</Content>
				<Content
					className="site-layout-background"
					style={{
						padding: 24,
						margin: 0,
						height: 396,
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
						height: 826,
						overflow: 'auto',
					}}
				>
					{getUnitAssets(assets, unit).map((asset, index) => (
						<AssetCard key={index} asset={asset} responsable={false} />
					))}
				</Content>
			</Col>
		</Row>
	);
}

export default Home;
