import React from 'react';
import Carousel from './Carousel';
import Chart from './Chart';
import DateWidget from './DateWidget';
import { companyLogo } from '../assets/logos';

export default function Content() {
	return (
		<div className="content">
			<Carousel />
			<DateWidget />
			<Chart />
			<div className="company-logo">{companyLogo}</div>
		</div>
	);
}
