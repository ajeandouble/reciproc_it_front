import React, { Component } from 'react';
import ApexChart from 'react-apexcharts';

export default class Chart extends Component {
	chartData = {
		options: {
			tooltip: {
				enabled: false,
			},
			grid: { show: true },	
			dataLabels: { enabled: false },
			legend: { show: false },
			states: {
				hover: {
					filter: {
						type: 'none',
					}
				},
				active: {
					filter: {
						type: 'none',
					}
				}
			},
			chart: {
				id: 'basic-bar',
				toolbar: {
					show: false
				},
				width: "100%",
				height: "150%",
			},

			title: {
				text: 'World population',
				align: 'center',
				margin: 15,
				offsetX: 0,
				offsetY: 0,
				floating: false,
				style: {
					fontSize: '20px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#263238',
				},
			},
			
			xaxis: {
				categories: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
				labels: { show: true },
				axisTicks: { show: false }
			},
			yaxis: { labels: { show: false }}
		},
		series: [
			{
				name: 'series-1',
				data: [2584034261, 3034949748, 3700437046, 4458003514, 5327231061, 6143493823, 6956823603],
			},
		],
		
	};

	render() {
		return (
			<div className="chart">
				<ApexChart
					options={this.chartData.options}
					series={this.chartData.series}
					title={this.chartData.title}
					type="bar"
					width="750"
					toolbar={{show: false}}
				/>
			</div>
		);
	}
}
