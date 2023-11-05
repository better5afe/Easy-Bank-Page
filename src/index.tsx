import ReactDOM from 'react-dom/client';
import App from './App';
import { NavContextProvider } from './context/NavContextProvder';

import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<NavContextProvider>
		<App />
	</NavContextProvider>
);
