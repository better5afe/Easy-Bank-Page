import ReactDOM from 'react-dom';
import Nav from './components/UI/Nav';
import Overlay from './components/reusable/Overlay';
import Header from './components/UI/Header';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			{ReactDOM.createPortal(<Overlay />, document.getElementById('overlay')!)}
		</>
	);
};

export default App;
