import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

const SlideContent = ({ user }) => {
	/* This, being a bigger project would move to an helper folder */
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
	let dob = new Date(user.dob);
	const birth_date = `${dob.getDay(dob) + 1} ${
		monthNames[dob.getMonth(dob)]
	} 19${dob.getYear(dob)}`;

	return (
		<div
			className="swiper-slide--content noselect"
			style={{ backgroundImage: `url('${user.image}')` }}
		>
			<br />
			<section>
				{user.firstname} {user.lastname}
			</section>
			<section>{birth_date}</section>
			<section>{user.email}</section>
		</div>
	);
};

/* Pretty straightfoward consumption of that example API. */
export default function Carousel() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=10')
			.then((results) => {
				return results.json();
			})
			.then(({ results }) => {
				results = results.map((user) => {
					return {
						email: user.email,
						firstname: user.name.first,
						lastname: user.name.last,
						dob: user.dob.date,
						image: user.picture.large,
					};
				});
				setUserData(results);
			});
	}, []);
	console.debug(userData);

	const addPic = () => {
		fetch('https://randomuser.me/api/?results=1')
			.then((results) => {
				return results.json();
			})
			.then(({ results }) => {
				results = results.map((user) => {
					return {
						email: user.email,
						firstname: user.name.first,
						lastname: user.name.last,
						dob: user.dob.date,
						image: user.picture.large,
					};
				});
				const newUserData = [...results, ...userData];
				setUserData(newUserData);
			});
	};

	return (
		<Swiper
			className="swiper"
			spaceBetween={7}
			slidesPerView={4}
			grabCursor={true}
			navigation={true}
			onNavigationShow={true}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide onClick={() => addPic()} className="swiper-slide">
				<div className="swiper-slide__add">+</div>
			</SwiperSlide>
			{userData.length &&
				userData.map((user) => {
					return (
						<SwiperSlide className="swiper-slide">
							<SlideContent user={user} />
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
}
