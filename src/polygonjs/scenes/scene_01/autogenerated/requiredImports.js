// actor
import { ClampActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Clamp";
import { ConstantActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Constant";
import { FloatToVec3ActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/FloatToVec3";
import { GetObjectAttributeActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObjectAttribute";
import { GetObjectPropertyActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/GetObjectProperty";
import { MixActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Mix";
import { OnObjectHoverActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnObjectHover";
import { OnTickActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick";
import { PlayInstrumentNoteActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/PlayInstrumentNote";
import { SetObjectPositionActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectPosition";
import { SetObjectScaleActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectScale";
import { SubtractActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Subtract";
import { SwitchActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Switch";
import { TriggerTwoWaySwitchActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/TriggerTwoWaySwitch";
import { TwoWaySwitchActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/TwoWaySwitch";
import { Vec3ToFloatActorNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/actor/Vec3ToFloat";
// audio
import { AMSynthAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/AMSynth";
import { DistortionAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Distortion";
import { EnvelopeAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Envelope";
import { NullAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Null";
import { PhaserAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Phaser";
import { PlayInstrumentAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/PlayInstrument";
import { ReverbAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Reverb";
import { SamplerAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Sampler";
import { SwitchAudioNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/audio/Switch";
// cop
import { EnvMapCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap";
import { ImageEXRCopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
// mat
import { LineBasicMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/LineBasic";
import { MeshLambertBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder";
import { MeshStandardMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard";
// obj
import { AudioListenerObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/AudioListener";
import { CopNetworkObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
import { HemisphereLightObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight";
import { OrthographicCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/OrthographicCamera";
import { PerspectiveCameraObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera";
import { PositionalAudioObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/PositionalAudio";
// sop
import { ActorSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor";
import { AttribCopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCopy";
import { AttribCreateSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate";
import { AttribDeleteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribDelete";
import { AttribPromoteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribPromote";
import { AttribRenameSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribRename";
import { AudioNotesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/AudioNotes";
import { BoxSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box";
import { CircleSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle";
import { CopySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy";
import { DeleteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete";
import { EventsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork";
import { FuseSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Fuse";
import { HexagonsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { NoiseSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Noise";
import { PaletteSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Palette";
import { PlaneSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane";
import { PlaneHelperSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PlaneHelper";
import { PointSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Point";
import { RaySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Ray";
import { RestAttributesSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/RestAttributes";
import { ScatterSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter";
import { SortSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sort";
import { SphereSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";
import { TubeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tube";

export const requiredImports_scene_01 = {
  nodes: [
    ClampActorNode,
    ConstantActorNode,
    FloatToVec3ActorNode,
    GetObjectAttributeActorNode,
    GetObjectPropertyActorNode,
    MixActorNode,
    OnObjectHoverActorNode,
    OnTickActorNode,
    PlayInstrumentNoteActorNode,
    SetObjectPositionActorNode,
    SetObjectScaleActorNode,
    SubtractActorNode,
    SwitchActorNode,
    TriggerTwoWaySwitchActorNode,
    TwoWaySwitchActorNode,
    Vec3ToFloatActorNode,
    AMSynthAudioNode,
    DistortionAudioNode,
    EnvelopeAudioNode,
    NullAudioNode,
    PhaserAudioNode,
    PlayInstrumentAudioNode,
    ReverbAudioNode,
    SamplerAudioNode,
    SwitchAudioNode,
    EnvMapCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    LineBasicMatNode,
    MeshLambertBuilderMatNode,
    MeshStandardMatNode,
    AudioListenerObjNode,
    CopNetworkObjNode,
    GeoObjNode,
    HemisphereLightObjNode,
    OrthographicCameraObjNode,
    PerspectiveCameraObjNode,
    PositionalAudioObjNode,
    ActorSopNode,
    AttribCopySopNode,
    AttribCreateSopNode,
    AttribDeleteSopNode,
    AttribPromoteSopNode,
    AttribRenameSopNode,
    AudioNotesSopNode,
    BoxSopNode,
    CircleSopNode,
    CopySopNode,
    DeleteSopNode,
    EventsNetworkSopNode,
    FuseSopNode,
    HexagonsSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    NoiseSopNode,
    PaletteSopNode,
    PlaneSopNode,
    PlaneHelperSopNode,
    PointSopNode,
    RaySopNode,
    RestAttributesSopNode,
    ScatterSopNode,
    SortSopNode,
    SphereSopNode,
    TransformSopNode,
    TubeSopNode,
  ],
  operations: [],
};
