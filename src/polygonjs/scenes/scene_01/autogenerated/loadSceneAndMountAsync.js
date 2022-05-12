import {loadSceneAsync_scene_01} from './loadSceneAsync.js';

export const loadSceneAndMountAsync_scene_01 = async function (options={}) {
	if(options && options.createViewer == null){
		options.createViewer = true;
	}
	return loadSceneAsync_scene_01(options);
};
