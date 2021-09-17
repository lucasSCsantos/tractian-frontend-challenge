import { Col, Row } from 'antd';
import React, { useContext } from 'react';
import AssetCard from '../components/AssetCard';
import DataContext from '../context/DataContext';
import getUnitAssets from '../helpers/getUnitAssets';

const Assets = () => {
	const { assets, actualUnit: unit } = useContext(DataContext);

	return (
		<div style={{ overflowY: 'auto', height: 888}}>
			{ assets &&
				<Row gutter={24} style={{ minHeight: 776 }}>
					{getUnitAssets(assets, unit).map((asset, index) => (
						<Col key={index} span={12}>
							<AssetCard asset={asset} responsable={false} />
						</Col>
					))}
				</Row>
			}
		</div>
	);
}

export default Assets;
