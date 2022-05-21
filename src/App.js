import './App.css';
import Sidebar from './components/Sidebar';
import 'swiper/css';
import Carousel from './components/Carousel';
import Chart from './components/Chart';
import DateWidget from './components/DateWidget';
import { companyLogo } from './assets/logos';

/* Note:
	I decided not to use mui afterall, as we are using a pretty basic layout.
	There is not much need in theming a React Drawer to display a straight-forward sidebar.
*/

function App() {
	return (
		<div className="App">
			<div className="parent">
				<div className="grid-area--sidebar">
					<Sidebar />
				</div>
				<div className="grid-area--chart">
					<Chart />
				</div>
				<div className="grid-area--swiper">
					<Carousel />
				</div>
				<div className="grid-area--company">{companyLogo}</div>
				<div className="grid-area--date">
					<DateWidget />
				</div>
			</div>
		</div>
	);
}

export default App;
