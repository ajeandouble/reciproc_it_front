import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import 'swiper/css';

/* Note:
	I decided not to use mui afterall, as we are using a pretty basic layout.
	There is not much need in theming a React Drawer to display a straight-forward sidebar.
*/

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<Sidebar />
				<Content />
			</div>
		</div>
	);
}

export default App;
