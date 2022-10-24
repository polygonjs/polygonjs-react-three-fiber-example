import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1666611534690",
  root: "1663590649871",
  nodes: {
    perspectiveCamera1: "1652368422359",
    "perspectiveCamera1/events1": "1663590649871",
    geo2: "1663590649871",
    "geo2/MAT": "1663590649871",
    COP: "1663590649871",
    hexa_grid: "1652368422359",
    "hexa_grid/MAT": "1652368422359",
    grid: "1652368422359",
    orthographicCamera1: "1663590649871",
    "orthographicCamera1/eventsNetwork1": "1652368422359",
    cubes: "1652368422359",
    "cubes/MAT": "1652368422359",
    "cubes/MAT/meshLambertBuilder1": "1663590649871",
    "cubes/actor1": "1663590649871",
    positionalAudio1: "1652368422359",
  },
  shaders: {
    "/cubes/MAT/meshLambertBuilder1": {
      vertex: "1663590649871",
      fragment: "1663590649871",
      "customDepthMaterial.vertex": "1663590649871",
      "customDepthMaterial.fragment": "1663590649871",
      "customDistanceMaterial.vertex": "1663590649871",
      "customDistanceMaterial.fragment": "1663590649871",
      "customDepthDOFMaterial.vertex": "1663590649871",
      "customDepthDOFMaterial.fragment": "1663590649871",
    },
  },
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
