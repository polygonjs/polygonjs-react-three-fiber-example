import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652368422359',
	root: '1652368422359',
	nodes: {
		perspectiveCamera1: '1652368422359',
		'perspectiveCamera1/events1': '1652368422359',
		geo2: '1652368422359',
		'geo2/MAT': '1652368422359',
		COP: '1652368422359',
		hexa_grid: '1652368422359',
		'hexa_grid/MAT': '1652368422359',
		grid: '1652368422359',
		orthographicCamera1: '1652368422359',
		'orthographicCamera1/eventsNetwork1': '1652368422359',
		cubes: '1652368422359',
		'cubes/MAT': '1652368422359',
		'cubes/MAT/meshLambertBuilder1': '1652368422359',
		'cubes/actor1': '1652368422359',
		positionalAudio1: '1652368422359',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
