import { Content } from 'antd/lib/layout/layout';
import { SettingOutlined } from '@ant-design/icons';

import React from 'react';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Col, Row } from 'antd';
import correct from '../helpers/correct';

const AssetSpecs = ({ asset }) => {
	
	const { specifications } = asset;

	return (
		<Row justify="center" gutter={8} align="middle">
			{Object.entries(specifications).map((spec, index) => (
				<Col span={8} 
					style={{
						padding: '0 50px',
						display: 'flex',
						height: 200,
						flexDirection: 'column',
						alignItems: 'center',
					}}>
						<SettingOutlined style={{fontSize: 30}} />
						<Title level={4} style={{margin: 0, textAlign: 'center'}}>{correct(spec[0])}</Title>
						<Text style={{fontSize: 25}}>{spec[1]}</Text>
				</Col>
			))}
		</Row>
	);
}

export default AssetSpecs;
