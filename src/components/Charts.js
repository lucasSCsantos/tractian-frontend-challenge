import React, { useContext } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import '../styles/Charts.css';
import { useFetch } from '../services/hooks';
import DataContext from '../context/DataContext';
import { getData, getTotal } from '../helpers/getData';
import { Row } from 'antd';
import isEmpty from '../helpers/isEmpty';

const Charts = () => {
	const { actUserId, assets: data } = useContext(DataContext);
	const userId = localStorage.getItem('actualUser');
	const actualUser = useFetch(`https://my-json-server.typicode.com/tractian/fake-api/users/${actUserId !== 0 ? actUserId : userId}`, {});
	const total = getTotal(data, actualUser);
	const alert = getData(data, 'inAlert', actualUser);
	const operation = getData(data, 'inOperation', actualUser);
	const downtime = getData(data, 'inDowntime', actualUser);
	console.log(data)
	
	const options = {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		marginTop: -40,
	},
	title: {
		text: `Ativos</br></br><div>${total}</div>`,
		align: 'center',
		style: { "fontWeight": "800" },
		verticalAlign: 'middle',
		floating: false,
	},
	tooltip: {
		animation: true,
		borderRadius: 25,
		borderColor: 'transparent',
	},
	accessibility: {
		point: {
				valueSuffix: '%'
		}
	},
	legend: {
		layout: 'horizontal',
		align: 'center',
		verticalAlign: 'bottom',
		labelFormat: '{name} {y}'
	},
	plotOptions: {
		pie: {
				dataLabels: {
						enabled: false,
						distance: 0,
						style: {
								fontWeight: 'bold',
								color: 'white'
						}
				},
				startAngle: -130,
				endAngle: 130,
				center: ['50%', '60%'],
				size: '90%',
				showInLegend: true
		}
	},
	series: [{
		type: 'pie',
		name: 'Ativos',
		innerSize: '92%',
		data: [
				{
					name: 'Em Operação',
					color: '#00CE00',
					y: operation,
				},
				{
					name: 'Em Alerta',
					color: '#FF2E3B',
					y: alert,
				},
				{
					name: 'Em Parada',
					color: '#FFAD00',
					y: downtime,
				},
			]
		}],
	}

	return (
	<Row justify="center">
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
		/>
	</Row>
)}

export default Charts;