import ReactDOM from 'react-dom';
import Nav from './components/UI/Nav';
import Overlay from './components/reusable/Overlay';
import Header from './components/UI/Header';
import Main from './components/UI/Main';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<Main />
			{ReactDOM.createPortal(<Overlay />, document.getElementById('overlay')!)}
		</>
	);
};

export default App;
