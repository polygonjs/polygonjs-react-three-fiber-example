import './Banner.css';

export const Banner = () => {
	return (
		<div className="logo-container">
			<a className="logo" href="https://polygonjs.com/docs/integrations/react-three-fiber">
				<img src="/images/logos.x32.png" alt="Demo of Polygonjs + React Three Fiber"></img>
				<span className="link-label">Polygonjs + React Three Fiber Demo</span>
			</a>
		</div>
	);
};
