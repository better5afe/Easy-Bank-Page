import ReactDOM from 'react-dom';
import Nav from './components/UI/Nav';
import Overlay from './components/reusable/Overlay';
import Header from './components/UI/Header';
import Main from './components/UI/Main';
import Footer from './components/UI/Footer';

const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<Main />
			<Footer />
			{ReactDOM.createPortal(<Overlay />, document.getElementById('overlay')!)}
		</>
	);
};

export default App;
