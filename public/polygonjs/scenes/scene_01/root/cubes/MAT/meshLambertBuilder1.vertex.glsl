#define LAMBERT
varying vec3 vViewPosition;
#include <common>



// /cubes/MAT/meshLambertBuilder1/complement1
float complement(float x){return 1.0-x;}
vec2 complement(vec2 x){return vec2(1.0-x.x, 1.0-x.y);}
vec3 complement(vec3 x){return vec3(1.0-x.x, 1.0-x.y, 1.0-x.z);}
vec4 complement(vec4 x){return vec4(1.0-x.x, 1.0-x.y, 1.0-x.z, 1.0-x.w);}


// /cubes/MAT/meshLambertBuilder1/easing1

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}









// /cubes/MAT/meshLambertBuilder1/param2
uniform float v_POLY_param_blendShape;

// /cubes/MAT/meshLambertBuilder1/globals1
varying vec3 v_POLY_globals1_position;
varying vec3 v_POLY_globals1_normal;

// /cubes/MAT/meshLambertBuilder1/attribute1
varying vec3 v_POLY_attribute_baseColor;

// /cubes/MAT/meshLambertBuilder1/attribute2
attribute float pti;

// /cubes/MAT/meshLambertBuilder1/attribute1
attribute vec3 baseColor;




#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>



	// /cubes/MAT/meshLambertBuilder1/globals1
	v_POLY_globals1_position = vec3(position);
	v_POLY_globals1_normal = vec3(normal);
	
	// /cubes/MAT/meshLambertBuilder1/param2
	float v_POLY_param2_val = v_POLY_param_blendShape;
	
	// /cubes/MAT/meshLambertBuilder1/attribute2
	float v_POLY_attribute2_val = pti;
	
	// /cubes/MAT/meshLambertBuilder1/attribute1
	v_POLY_attribute_baseColor = vec3(baseColor);
	
	// /cubes/MAT/meshLambertBuilder1/multAdd4
	vec3 v_POLY_multAdd4_val = (vec3(1.0, 1.0, 1.0)*(v_POLY_globals1_position + vec3(0.0, -0.5, 0.0))) + vec3(0.0, 0.0, 0.0);
	
	// /cubes/MAT/meshLambertBuilder1/complement1
	float v_POLY_complement1_val = complement(v_POLY_attribute2_val);
	
	// /cubes/MAT/meshLambertBuilder1/normalize2
	vec3 v_POLY_normalize2_normalized = normalize(v_POLY_multAdd4_val);
	
	// /cubes/MAT/meshLambertBuilder1/subtract2
	float v_POLY_subtract2_subtract = (v_POLY_param2_val - v_POLY_complement1_val - 0.0);
	
	// /cubes/MAT/meshLambertBuilder1/multAdd3
	vec3 v_POLY_multAdd3_val = (vec3(0.5, 0.5, 0.5)*(v_POLY_normalize2_normalized + vec3(0.0, 0.0, 0.0))) + vec3(0.0, 0.5, 0.0);
	
	// /cubes/MAT/meshLambertBuilder1/clamp2
	float v_POLY_clamp2_val = clamp(v_POLY_subtract2_subtract, 0.0, 1.0);
	
	// /cubes/MAT/meshLambertBuilder1/easing1
	float v_POLY_easing1_out = sineInOut(v_POLY_clamp2_val);
	
	// /cubes/MAT/meshLambertBuilder1/mix2
	vec3 v_POLY_mix2_mix = mix(v_POLY_globals1_position, v_POLY_multAdd3_val, v_POLY_easing1_out);
	
	// /cubes/MAT/meshLambertBuilder1/mix3
	vec3 v_POLY_mix3_mix = mix(v_POLY_globals1_normal, v_POLY_normalize2_normalized, v_POLY_easing1_out);
	
	// /cubes/MAT/meshLambertBuilder1/output1
	vec3 transformed = v_POLY_mix2_mix;
	vec3 objectNormal = v_POLY_mix3_mix;
	#ifdef USE_TANGENT
		vec3 objectTangent = vec3( tangent.xyz );
	#endif



	#include <morphcolor_vertex>
// removed:
//	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
// removed:
//	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}