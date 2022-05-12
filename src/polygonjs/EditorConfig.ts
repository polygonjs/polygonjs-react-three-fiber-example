import {EditorApiOptions, ConfigureEditor} from 'polygonjs-editor/public/editor/api';
// import {ProgressBarTop} from '@polygonjs/polygonjs/src/engine/viewers/progressBars/Top';

export const configureEditor: ConfigureEditor = (options: EditorApiOptions) => {
	// configure the editor
	options.api.setProjectName('polygonjs-r3f');
	options.api.html.head.setTitle(options.sceneName);
	options.api.html.head.setDescription('a WebGL experience created with @polygonjs');
	options.api.html.head.setSiteUrl('https://polygonjs.com');
	options.api.html.head.setTwitter('@polygonjs');
	// options.api.html.head.addScript({
	// 	id: 'my-script',
	// 	content: `console.log('this is running my custom script')`,
	// });
	// options.api.html.viewer.setProgressBar(new ProgressBarTop());
};
