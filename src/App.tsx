import ReactDOM from 'react-dom';
import Nav from './components/UI/Nav';
import Overlay from './components/reusable/Overlay';

const App = () => {
	return (
		<>
			<Nav />
			{ReactDOM.createPortal(<Overlay />, document.getElementById('overlay')!)}
		</>
	);
};

export default App;
