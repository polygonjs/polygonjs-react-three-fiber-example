import {loadSceneData_scene_01} from './loadSceneData.js';

export const loadSceneAsync_scene_01 = async function (options={}) {
	const {
		onProgress,
		domElement,
		configureSceneData,
		autoPlay,
		createViewer,
		sceneDataRoot,
		assetsRoot,
		libsRootPrefix,
		printWarnings,
		renderer
	} = options;

	const runRegister = options.runRegister != null ? options.runRegister : true;
	const loadModules = options.loadModules != null ? options.loadModules : true;

	const moduleNames = loadModules ? [] : [];
	const promises = [import('./loadSceneFromSceneData.js'), loadSceneData_scene_01({onProgress, sceneDataRoot})];
	const results = await Promise.all(promises);
	const {Poly, loadSceneFromSceneData_scene_01} = results[0];
	const sceneData = results[1];
	if(configureSceneData){
		configureSceneData(sceneData);
	}

	const loadedModules = [];
	for (let i = 2; i < results.length; i++) {
		loadedModules.push(results[i]);
	}
	// register modules
	let i = 0;
	for (let moduleName of moduleNames) {
		const moduleNameContainer = moduleName + 'Module';
		Poly.registerModule(loadedModules[i][moduleNameContainer]);
		i++;
	}

	const loadedData = await loadSceneFromSceneData_scene_01({
		onProgress,
		sceneData,
		domElement,
		runRegister,
		autoPlay,
		createViewer,
		assetsRoot,
		libsRootPrefix,
		printWarnings,
		renderer,
	});
	return loadedData;
};
