import {useEffect} from 'react';
import './App.css';
import {CanvasContainer} from './components/CanvasContainer';

export function App() {
	useEffect(() => {
		document.title = 'Polygonjs + R3F';
	});
	return <CanvasContainer />;
}
