import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Debug from './Debug.jsx';
import './output.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		{/* <Debug></Debug> */}
	</React.StrictMode>
);
