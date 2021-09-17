import { SettingTwoTone, FireTwoTone, RocketTwoTone } from '@ant-design/icons';
import React from 'react';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { Col, Row, Progress } from 'antd';
import { correct, correctIcon } from '../helpers/correct';
import progressColor from '../helpers/progressColor';

const AssetSpecs = ({ asset }) => {
	
	const { specifications, healthscore } = asset;
	const icons = [
		{ icon: <FireTwoTone style={{fontSize: 30}} twoToneColor="#FF2E3B"/>, unidade: '°C' },
		{ icon: <SettingTwoTone style={{fontSize: 30}} twoToneColor="#FFAD00"/>, unidade: 'RPM' },
		{ icon: <RocketTwoTone style={{fontSize: 30}} twoToneColor=""/>, unidade: 'kWh' },
	]

	return (
		<>
		{ (asset && specifications ) &&
			<>
				<Row justify="center" gutter={8} align="middle" style={{marginTop: 40}}>
					{Object.entries(specifications).map((spec, index) => (
						<Col
							span={8} 
							key={index}
							style={{
								padding: '0 50px',
								display: 'flex',
								height: 90,
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}
						>
							{icons[correctIcon(spec[0])] && icons[correctIcon(spec[0])]['icon']}
							<Title level={5} style={{margin: 0, textAlign: 'center'}}>{correct(spec[0])}</Title>
							<Text style={{fontSize: 20}}>
								{`${spec[1]} ${icons[correctIcon(spec[0])] && icons[correctIcon(spec[0])]['unidade']}`}
							</Text>
						</Col>
					))}
				</Row>
				<Row justify="center" align="middle">
						<Title style={{marginTop: 30}} level={4}>Saúde do ativo:</Title>
				</Row>
				<Row justify="center" align="middle">
						<Progress
							style={{marginTop: 10}}
							type="circle"
							percent={healthscore}
							strokeColor={{
								'0%': progressColor(healthscore)[0],
								'100%': progressColor(healthscore)[1],
							}}
						/>
				</Row>
			</>
		}
		</>
	);
}

export default AssetSpecs;
