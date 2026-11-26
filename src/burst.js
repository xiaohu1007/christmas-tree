// Expand in tree-local space so needles, lights and strands share its rotation.
const burstShader = `
uniform float uBurst;
vec3 burstPoint(vec3 p, float seed) {
  vec3 d = p - vec3(0.,4.8,0.);
  float a = atan(d.z,d.x) + .9*(seed-.5);
  float lift = clamp(d.y*.13 + .6*(seed-.5),-.85,.85);
  vec3 dir = vec3(cos(a)*sqrt(1.-lift*lift),lift,sin(a)*sqrt(1.-lift*lift));
  float travel = clamp(uBurst*1.13-.12*seed,0.,1.);
  float kick = travel + .50*sin(travel*3.14159);
  vec3 target = vec3(0.,4.8,0.) + dir*(4.15+5.0*seed);
  vec3 outPos = mix(p,target,kick);
  float twist = (.35+.55*seed)*travel;
  outPos.xz = mat2(cos(twist),-sin(twist),sin(twist),cos(twist))*outPos.xz;
  return outPos;
}`;

export function bindBurst(parts) {
  const progress = {value:0};
  for (const [part, position] of parts) {
    part.m.uniforms.uBurst = progress;
    const shader = part.m.vertexShader;
    const marker = 'vec4('+position+', 1.0)';
    if (!shader.includes(marker)) throw Error('Missing particle position for expansion');
    part.m.vertexShader = burstShader + shader.replace(marker,'vec4(burstPoint('+position+',aRand), 1.0)');
    part.points.frustumCulled = false;
  }
  return progress;
}
