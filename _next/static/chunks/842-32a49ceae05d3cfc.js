"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{7842:function(e,t,i){i.d(t,{Z:function(){return S}});var o=i(1295),s=i(6233),n=i(3762),a=i(5850),r=i(3853),l=i(1992);function c(e,t,i){let o=(0,n.Mj)();return(0,r.xA)(t,i,o,e)}function p(e){let t=(0,l._2)(e),i=256*t[0],o=t[1],s=256*t[2],n=Math.round(255*t[3]);return[i+o,s+n]}let u=`vec4 unpackColor(vec2 packedColor) {
  return fract(packedColor[1] / 256.0) * vec4(
    fract(floor(packedColor[0] / 256.0) / 256.0),
    fract(packedColor[0] / 256.0),
    fract(floor(packedColor[1] / 256.0) / 256.0),
    1.0
  );
}`;function d(e){return e===n.Mr||e===n.n$?2:e===n.PA?4:1}function f(e){let t=d(e);return t>1?`vec${t}`:"float"}function h(e){let t=JSON.stringify(e).split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0),0);return(t>>>0).toString()}function m(e,t,i,o){if(`${o}radius` in e&&"icon-"!==o){let s=c(i,e[`${o}radius`],n.sw);if(`${o}radius2` in e){let t=c(i,e[`${o}radius2`],n.sw);s=`max(${s}, ${t})`}`${o}stroke-width` in e&&(s=`(${s} + ${c(i,e[`${o}stroke-width`],n.sw)} * 0.5)`),t.setSymbolSizeExpression(`vec2(${s} * 2. + 0.5)`)}if(`${o}scale` in e){let s=c(i,e[`${o}scale`],n.n$);t.setSymbolSizeExpression(`${t.getSymbolSizeExpression()} * ${s}`)}`${o}displacement` in e&&t.setSymbolOffsetExpression(c(i,e[`${o}displacement`],n.PA)),`${o}rotation` in e&&t.setSymbolRotationExpression(c(i,e[`${o}rotation`],n.sw)),`${o}rotate-with-view` in e&&t.setSymbolRotateWithView(!!e[`${o}rotate-with-view`])}function $(e,t,i,o,s){let n="vec4(0.)";if(null!==t&&(n=t),null!==i&&null!==o){let t=`smoothstep(-${o} + 0.63, -${o} - 0.58, ${e})`;n=`mix(${i}, ${n}, ${t})`}let a=`(1.0 - smoothstep(-0.63, 0.58, ${e}))`,r=`${n} * ${a}`;return null!==s&&(r=`${r} * ${s}`),r}function x(e,t,i,o,s){let n;let a=new Image;return a.crossOrigin=void 0===e[`${o}cross-origin`]?"anonymous":e[`${o}cross-origin`],a.src=e[`${o}src`],a.complete&&a.width&&a.height?n=(0,r.ci)([a.width,a.height]):(i[`u_texture${s}_size`]=()=>a.complete?[a.width,a.height]:[0,0],t.addUniform(`vec2 u_texture${s}_size`),n=`u_texture${s}_size`),i[`u_texture${s}`]=a,t.addUniform(`sampler2D u_texture${s}`),n}function g(e,t,i,o,s){let a=c(i,e[`${t}offset`],n.PA);if(`${t}offset-origin` in e)switch(e[`${t}offset-origin`]){case"top-right":a=`vec2(${o}.x, 0.) + ${s} * vec2(-1., 0.) + ${a} * vec2(-1., 1.)`;break;case"bottom-left":a=`vec2(0., ${o}.y) + ${s} * vec2(0., -1.) + ${a} * vec2(1., -1.)`;break;case"bottom-right":a=`${o} - ${s} - ${a}`}return a}class v extends o.Z{constructor(e){let t=Object.assign({},e);super(t),this.parseResult_=function(e){let t={inFragmentShader:!1,properties:{},variables:{},functions:{},style:e},i={inFragmentShader:!0,variables:t.variables,properties:{},functions:{},style:e},o=new a.k,s={};if("icon-src"in e?function(e,t,i,o,s){let a="vec4(1.0)";"icon-color"in e&&(a=c(s,e["icon-color"],n.Mr)),"icon-opacity"in e&&(a=`${a} * ${c(s,e["icon-opacity"],n.sw)}`);let r=h(e["icon-src"]),l=x(e,t,i,"icon-",r);if(t.setSymbolColorExpression(`${a} * samplePremultiplied(u_texture${r}, v_texCoord)`).setSymbolSizeExpression(l),"icon-width"in e&&"icon-height"in e&&t.setSymbolSizeExpression(`vec2(${c(o,e["icon-width"],n.sw)}, ${c(o,e["icon-height"],n.sw)})`),"icon-offset"in e&&"icon-size"in e){let i=c(o,e["icon-size"],n.PA),s=t.getSymbolSizeExpression();t.setSymbolSizeExpression(i);let a=g(e,"icon-",o,"v_quadSizePx",i);t.setTextureCoordinateExpression(`(vec4((${a}).xyxy) + vec4(0., 0., ${i})) / (${s}).xyxy`)}if(m(e,t,o,"icon-"),"icon-anchor"in e){let i;let s=c(o,e["icon-anchor"],n.PA),a="1.0";"icon-scale"in e&&(a=c(o,e["icon-scale"],n.n$));let r=`v_quadSizePx * vec2(0.5, -0.5) + ${i="pixels"===e["icon-anchor-x-units"]&&"pixels"===e["icon-anchor-y-units"]?`${s} * ${a}`:"pixels"===e["icon-anchor-x-units"]?`${s} * vec2(vec2(${a}).x, v_quadSizePx.y)`:"pixels"===e["icon-anchor-y-units"]?`${s} * vec2(v_quadSizePx.x, vec2(${a}).x)`:`${s} * v_quadSizePx`} * vec2(-1., 1.)`;if("icon-anchor-origin"in e)switch(e["icon-anchor-origin"]){case"top-right":r=`v_quadSizePx * -0.5 + ${i}`;break;case"bottom-left":r=`v_quadSizePx * 0.5 - ${i}`;break;case"bottom-right":r=`v_quadSizePx * vec2(-0.5, 0.5) + ${i} * vec2(1., -1.)`}t.setSymbolOffsetExpression(`${t.getSymbolOffsetExpression()} + ${r}`)}}(e,o,s,t,i):"shape-points"in e?function(e,t,i,o,s){let a;s.functions.round=`float round(float v) {
  return sign(v) * floor(abs(v) + 0.5);
}`,s.functions.starDistanceField=`float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round(beta / alpha) * alpha; // angle in sector
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  vec2 tipToPoint = inSector + vec2(-radius, 0.);
  vec2 edgeNormal = vec2(radius2 * sin(alpha * 0.5), -radius2 * cos(alpha * 0.5) + radius);
  return dot(normalize(edgeNormal), tipToPoint);
}`,s.functions.regularDistanceField=`float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {
  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle
  float c = cos(startAngle);
  float s = sin(startAngle);
  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);
  float alpha = TWO_PI / numPoints; // the angle of one sector
  float radiusIn = radius * cos(PI / numPoints);
  float beta = atan(pointRotated.y, pointRotated.x);
  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid
  c = cos(-gamma);
  s = sin(-gamma);
  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));
  return inSector.x - radiusIn;
}`,m(e,t,o,"shape-");let r=null;"shape-opacity"in e&&(r=c(s,e["shape-opacity"],n.sw));let l="coordsPx";if("shape-scale"in e){let t=c(s,e["shape-scale"],n.n$);l=`coordsPx / ${t}`}let p=null;"shape-fill-color"in e&&(p=c(s,e["shape-fill-color"],n.Mr));let u=null;"shape-stroke-color"in e&&(u=c(s,e["shape-stroke-color"],n.Mr));let d=null;"shape-stroke-width"in e&&(d=c(s,e["shape-stroke-width"],n.sw));let f=c(s,e["shape-points"],n.sw),h="0.";"shape-angle"in e&&(h=c(s,e["shape-angle"],n.sw));let x=c(s,e["shape-radius"],n.sw);if(null!==d&&(x=`${x} + ${d} * 0.5`),"shape-radius2"in e){let t=c(s,e["shape-radius2"],n.sw);null!==d&&(t=`${t} + ${d} * 0.5`),a=`starDistanceField(${l}, ${f}, ${x}, ${t}, ${h})`}else a=`regularDistanceField(${l}, ${f}, ${x}, ${h})`;let g=$(a,p,u,d,r);t.setSymbolColorExpression(g)}(e,o,0,t,i):"circle-radius"in e&&function(e,t,i,o,s){s.functions.circleDistanceField=`float circleDistanceField(vec2 point, float radius) {
  return length(point) - radius;
}`,m(e,t,o,"circle-");let a=null;"circle-opacity"in e&&(a=c(s,e["circle-opacity"],n.sw));let r="coordsPx";if("circle-scale"in e){let t=c(s,e["circle-scale"],n.n$);r=`coordsPx / ${t}`}let l=null;"circle-fill-color"in e&&(l=c(s,e["circle-fill-color"],n.Mr));let p=null;"circle-stroke-color"in e&&(p=c(s,e["circle-stroke-color"],n.Mr));let u=c(s,e["circle-radius"],n.sw),d=null;"circle-stroke-width"in e&&(u=`(${u} + ${d=c(s,e["circle-stroke-width"],n.sw)} * 0.5)`);let f=`circleDistanceField(${r}, ${u})`,h=$(f,l,p,d,a);t.setSymbolColorExpression(h)}(e,o,0,t,i),function(e,t,i,o,s){if("stroke-color"in e&&t.setStrokeColorExpression(c(s,e["stroke-color"],n.Mr)),"stroke-pattern-src"in e){let o=h(e["stroke-pattern-src"]),a=x(e,t,i,"stroke-pattern-",o),r=a,l="vec2(0.)";"stroke-pattern-offset"in e&&"stroke-pattern-size"in e&&(r=c(s,e["stroke-pattern-size"],n.PA),l=g(e,"stroke-pattern-",s,a,r));let p="0.";"stroke-pattern-spacing"in e&&(p=c(s,e["stroke-pattern-spacing"],n.sw)),s.functions.sampleStrokePattern=`vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {
  float currentLengthScaled = currentLengthPx * sampleSize.y / lineWidth;
  float spacingScaled = spacingPx * sampleSize.y / lineWidth;
  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));
  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);
  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;
  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;
  return samplePremultiplied(texture, texCoord);
}`;let u=`u_texture${o}`,d="1.";"stroke-color"in e&&(d=t.getStrokeColorExpression()),t.setStrokeColorExpression(`${d} * sampleStrokePattern(${u}, ${a}, ${l}, ${r}, ${p}, currentLengthPx, currentRadiusRatio, v_width)`)}if("stroke-width"in e&&t.setStrokeWidthExpression(c(o,e["stroke-width"],n.sw)),"stroke-offset"in e&&t.setStrokeOffsetExpression(c(o,e["stroke-offset"],n.sw)),"stroke-line-cap"in e&&t.setStrokeCapExpression(c(o,e["stroke-line-cap"],n.uW)),"stroke-line-join"in e&&t.setStrokeJoinExpression(c(o,e["stroke-line-join"],n.uW)),"stroke-miter-limit"in e&&t.setStrokeMiterLimitExpression(c(o,e["stroke-miter-limit"],n.sw)),"stroke-line-dash"in e){s.functions.getSingleDashDistance=`float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {
  float localDistance = mod(distance, dashLengthTotal);
  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;
  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);
  if (capType == ${(0,r.JB)("square")}) {
    distanceSegment -= v_width * 0.5;
  } else if (capType == ${(0,r.JB)("round")}) {
    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);
  }
  return distanceSegment;
}`;let i=e["stroke-line-dash"].map(e=>c(s,e,n.sw));i.length%2==1&&(i=[...i,...i]);let a="0.";"stroke-line-dash-offset"in e&&(a=c(o,e["stroke-line-dash-offset"],n.sw));let l=h(e["stroke-line-dash"]),p=`dashDistanceField_${l}`,u=i.map((e,t)=>`float dashLength${t} = ${e};`),d=i.map((e,t)=>`dashLength${t}`).join(" + "),f="0.",m=`getSingleDashDistance(distance, radius, ${f}, dashLength0, totalDashLength, capType)`;for(let e=2;e<i.length;e+=2)m=`min(${m}, getSingleDashDistance(distance, radius, ${f=`${f} + dashLength${e-2} + dashLength${e-1}`}, dashLength${e}, totalDashLength, capType))`;s.functions[p]=`float ${p}(float distance, float radius, float capType) {
  ${u.join("\n  ")}
  float totalDashLength = ${d};
  return ${m};
}`,t.setStrokeDistanceFieldExpression(`${p}(currentLengthPx + ${a}, currentRadiusPx, capType)`)}}(e,o,s,t,i),function(e,t,i,o,s){if("fill-color"in e&&t.setFillColorExpression(c(s,e["fill-color"],n.Mr)),"fill-pattern-src"in e){let o=h(e["fill-pattern-src"]),a=x(e,t,i,"fill-pattern-",o),r=a,l="vec2(0.)";"fill-pattern-offset"in e&&"fill-pattern-size"in e&&(r=c(s,e["fill-pattern-size"],n.PA),l=g(e,"fill-pattern-",s,a,r)),s.functions.sampleFillPattern=`vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {
  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);
  vec2 pxRelativePos = pxPosition - pxOrigin;
  // rotate the relative position from origin by the current view rotation
  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));
  // sample position is computed according to the sample offset & size
  vec2 samplePos = mod(pxRelativePos / scaleRatio, sampleSize);
  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels
  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));
  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright
  return samplePremultiplied(texture, (samplePos + textureOffset) / textureSize);
}`;let p=`u_texture${o}`,u="1.";"fill-color"in e&&(u=t.getFillColorExpression()),t.setFillColorExpression(`${u} * sampleFillPattern(${p}, ${a}, ${l}, ${r}, pxOrigin, pxPos)`)}}(e,o,s,0,i),e.filter){let t=c(i,e.filter,n.wy);o.setFragmentDiscardExpression(`!${t}`)}for(let t in i.variables){let a=i.variables[t],c=(0,r.aT)(a.name);o.addUniform(`${f(a.type)} ${c}`),s[c]=()=>{let t=e.variables[a.name];return"number"==typeof t?t:"boolean"==typeof t?t?1:0:a.type===n.Mr?p([...(0,l._2)(t||"#eee")]):"string"==typeof t?(0,r.Ce)(t):t}}for(let e in i.properties){let s=i.properties[e];t.properties[e]||(t.properties[e]=s);let a=f(s.type),r=`a_prop_${s.name}`;s.type===n.Mr&&(a="vec4",r=`unpackColor(${r})`,o.addVertexShaderFunction(u)),o.addVarying(`v_prop_${s.name}`,a,r)}for(let e in t.properties){let i=t.properties[e];o.addAttribute(`${f(i.type)} a_prop_${i.name}`)}for(let e in t.functions)o.addVertexShaderFunction(t.functions[e]);for(let e in i.functions)o.addFragmentShaderFunction(i.functions[e]);let v={};for(let e in t.properties){let i;let o=t.properties[e];i=o.evaluator?o.evaluator:e=>{let t=e.get(o.name);return o.type===n.Mr?p([...(0,l._2)(t||"#eee")]):"string"==typeof t?(0,r.Ce)(t):"boolean"==typeof t?t?1:0:t},v[o.name]={size:d(o.type),callback:i}}return{builder:o,attributes:v,uniforms:s}}(e.style),this.styleVariables_=e.style.variables||{},this.hitDetectionDisabled_=!!e.disableHitDetection}createRenderer(){let e=Object.keys(this.parseResult_.attributes).map(e=>({name:e,...this.parseResult_.attributes[e]}));return new s.Z(this,{vertexShader:this.parseResult_.builder.getSymbolVertexShader(),fragmentShader:this.parseResult_.builder.getSymbolFragmentShader(),hitDetectionEnabled:!this.hitDetectionDisabled_,uniforms:this.parseResult_.uniforms,attributes:e})}updateStyleVariables(e){Object.assign(this.styleVariables_,e),this.changed()}}var S=v}}]);