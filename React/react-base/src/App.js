import React from 'react';
import { Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
	toast.success('Sucesso!', { autoClose: 3000, toastId: 'success' });
	toast.error('Deu ruim!', { autoClose: 3000, toastId: 'error' });

	return (
		<Router history={history}>
			<Header />
			<Routes />
			<GlobalStyles />
			<ToastContainer className='toast-container' />
		</Router>
	);
}

export default App;
