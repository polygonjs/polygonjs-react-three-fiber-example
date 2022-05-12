import {Banner} from './Banner';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import React, {useRef, useState} from 'react';
import {PolygonjsScene} from '@polygonjs/react-three-fiber';
// import {PolygonjsScene} from './PolygonjsScene.old';
import {loadSceneAsync_scene_01} from '../polygonjs/scenes/scene_01/autogenerated/loadSceneAsync';
// import {
// 	PolySceneWithNodeMap_scene_01,
// } from '../polygonjs/scenes/scene_01/autogenerated/PolySceneWithNodeMap';

import './CanvasContainer.css';
import {
	PolySceneWithNodeMap_scene_01,
	PolySceneProps_scene_01,
} from '../polygonjs/scenes/scene_01/autogenerated/PolySceneWithNodeMap';

interface SceneContainerProps {
	blendPos: number;
	blendShape: number;
	gridSize: number;
}
// interface CanvasContainerState {
// 	text: string;
// 	blendPosAnimated: number;
// }

// interface PolygonjsScene01Props extends PolygonjsSceneProps<PolySceneWithNodeMap_scene_01>,PolySceneProps_scene_01 {}
// const PolygonjsScene01 = TypedPolygonjsScene<PolySceneWithNodeMap_scene_01, PolygonjsScene01Props>();
const lerp = 0.03;

const SceneContainer = (props: SceneContainerProps) => {
	const [blendPosAnim, setBlendPosAnim] = useState(0);
	const [blendShapeAnim, setBlendShapeAnim] = useState(0);
	const [audioInputIndex, setAudioInputIndex] = useState(0);

	useFrame((state) => {
		setBlendPosAnim(lerp * props.blendPos + (1 - lerp) * blendPosAnim);
		setBlendShapeAnim(lerp * props.blendShape + (1 - lerp) * blendShapeAnim);
		setAudioInputIndex(blendShapeAnim >= 1 ? 1 : 0);
	});

	return (
		<PolygonjsScene<PolySceneWithNodeMap_scene_01, PolySceneProps_scene_01>
			sceneName={'scene_01'}
			loadFunction={loadSceneAsync_scene_01}
			cubes-MAT-meshLambertBuilder1--blendShape={blendShapeAnim}
			cubes-actor1-constant_posBlend--float={blendPosAnim}
			cubes-plane1--size={[props.gridSize, props.gridSize]}
			positionalAudio1-switch_filterSound--input={audioInputIndex}
		/>
	);
};

export const CanvasContainer = () => {
	const [blendPos, setBlendPos] = useState(0);
	const [blendShape, setBlendShape] = useState(0);
	const [gridSize, setGridSize] = useState(8);

	function setAndClampGridSize(val: number) {
		const min = 4;
		const max = 12;
		if (val >= min && val <= max) {
			setGridSize(val);
		}
	}

	return (
		<div id="canvas-container">
			<Canvas orthographic camera={{position: [10, 10, 10], zoom: 40, near: 5, far: 50}}>
				<color attach="background" args={['#3BBF93']} />
				<ambientLight intensity={0.1} />
				<SceneContainer blendPos={blendPos} blendShape={blendShape} gridSize={gridSize} />

				<OrbitControls
					makeDefault
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI / 3}
					enableZoom={true}
					enablePan={true}
					zoomSpeed={0.3}
				/>
			</Canvas>
			<Banner />
			<div className="buttons">
				<button onClick={() => setBlendShape(0)}>🟩</button>
				<button onClick={() => setBlendShape(2)}>🟣</button>
				<button onClick={() => setBlendPos(0)}>👇</button>
				<button onClick={() => setBlendPos(2)}>👆</button>
				<button onClick={() => setAndClampGridSize(gridSize - 2)}>➖</button>
				<button onClick={() => setAndClampGridSize(gridSize + 2)}>➕</button>
			</div>
		</div>
	);
};