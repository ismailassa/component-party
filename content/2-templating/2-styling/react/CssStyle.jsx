import React from 'react';
import './style.css';

export default function CssStyle() {
	return (
		<>
			<h1 className="title">I am red</h1>
			<button style={{ 'font-size': '10rem' }}>I am a button</button>
		</>
	);
}
