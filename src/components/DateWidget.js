import React from 'react';
import { useEffect, useState } from 'react';

/* Basic date + time widget using a setTimeout async event to refresh */

export default function DateWidget() {
	const [d, setD] = useState(new Date());
	const day = d.getDay();
	const month = d.getMonth();
	const yr = d.getFullYear();
	const hrs = d.getHours();
	const min = d.getMinutes();
	const sec = d.getSeconds();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		setTimeout(() => {
			setD(new Date());
		}, 500);
	});

	return (
		<>
			<div className="date-widget noselect">
				<span>{`${day} ${monthNames[month]} ${yr}`}</span>
				<br />
				<span>{`${('0' + hrs).slice(-2)}:${('0' + min).slice(-2)}:${(
					'0' + sec
				).slice(-2)}`}</span>
			</div>
		</>
	);
};
