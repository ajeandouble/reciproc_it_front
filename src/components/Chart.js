import React, { Component } from 'react';
import ApexChart from 'react-apexcharts';

export default class Chart extends Component {
	chartData = {
		options: {
			chart: {
				id: 'basic-bar',
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
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
			},
		},
		series: [
			{
				name: 'series-1',
				data: [30, 40, 45, 50, 49, 60, 70, 91],
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
					width="650"
				/>
			</div>
		);
	}
}
