import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const container = document.getElementById('root');

// 非空断言，确保 container 不是 null
if (container !== null) {
	const root = ReactDOM.createRoot(container);
	root.render(<App />);
} else {
	console.error('Failed to find the root element');
}
