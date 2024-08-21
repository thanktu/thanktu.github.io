"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{1090:function(e,t,i){var r=i(2971),s=i(5487),n=i(9515),a=i(5818);class h extends r.Z{constructor(e){super(),this.on,this.once,this.un,this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),e&&("function"==typeof e.getSimplifiedGeometry?this.setGeometry(e):this.setProperties(e))}clone(){let e=new h(this.hasProperties()?this.getProperties():null);e.setGeometryName(this.getGeometryName());let t=this.getGeometry();t&&e.setGeometry(t.clone());let i=this.getStyle();return i&&e.setStyle(i),e}getGeometry(){return this.get(this.geometryName_)}getId(){return this.id_}getGeometryName(){return this.geometryName_}getStyle(){return this.style_}getStyleFunction(){return this.styleFunction_}handleGeometryChange_(){this.changed()}handleGeometryChanged_(){this.geometryChangeKey_&&((0,a.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);let e=this.getGeometry();e&&(this.geometryChangeKey_=(0,a.oL)(e,s.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()}setGeometry(e){this.set(this.geometryName_,e)}setStyle(e){let t;this.style_=e,this.styleFunction_=e?"function"==typeof e?e:(Array.isArray(e)?t=e:((0,n.h)("function"==typeof e.getZIndex,"Expected an `ol/style/Style` or an array of `ol/style/Style.js`"),t=[e]),function(){return t}):void 0,this.changed()}setId(e){this.id_=e,this.changed()}setGeometryName(e){this.removeChangeListener(this.geometryName_,this.handleGeometryChanged_),this.geometryName_=e,this.addChangeListener(this.geometryName_,this.handleGeometryChanged_),this.handleGeometryChanged_()}}t.Z=h},1071:function(e,t,i){i.d(t,{E:function(){return s}});var r=i(8641);function s(e,t,i,s){let n=[],a=(0,r.lJ)();for(let h=0,o=i.length;h<o;++h){let o=i[h];a=(0,r.GN)(e,t,o[0],s),n.push((a[0]+a[2])/2,(a[1]+a[3])/2),t=o[o.length-1]}return n}},9405:function(e,t,i){i.d(t,{WW:function(){return n},dG:function(){return h},iJ:function(){return a}});var r=i(5537),s=i(3983);function n(e,t,i,n,a,h,o){let l,u;let d=(i-t)/n;if(1===d)l=t;else if(2===d)l=t,u=a;else if(0!==d){let s=e[t],h=e[t+1],o=0,d=[0];for(let r=t+n;r<i;r+=n){let t=e[r],i=e[r+1];o+=Math.sqrt((t-s)*(t-s)+(i-h)*(i-h)),d.push(o),s=t,h=i}let f=a*o,_=(0,r.ry)(d,f);_<0?(u=(f-d[-_-2])/(d[-_-1]-d[-_-2]),l=t+(-_-2)*n):l=t+_*n}o=o>1?o:2,h=h||Array(o);for(let t=0;t<o;++t)h[t]=void 0===l?NaN:void 0===u?e[l+t]:(0,s.t7)(e[l+t],e[l+n+t],u);return h}function a(e,t,i,r,n,a){let h;if(i==t)return null;if(n<e[t+r-1])return a?((h=e.slice(t,t+r))[r-1]=n,h):null;if(e[i-1]<n)return a?((h=e.slice(i-r,i))[r-1]=n,h):null;if(n==e[t+r-1])return e.slice(t,t+r);let o=t/r,l=i/r;for(;o<l;){let t=o+l>>1;n<e[(t+1)*r-1]?l=t:o=t+1}let u=e[o*r-1];if(n==u)return e.slice((o-1)*r,(o-1)*r+r);let d=e[(o+1)*r-1],f=(n-u)/(d-u);h=[];for(let t=0;t<r-1;++t)h.push((0,s.t7)(e[(o-1)*r+t],e[o*r+t],f));return h.push(n),h}function h(e,t,i,r,s,n,h){let o;if(h)return a(e,t,i[i.length-1],r,s,n);if(s<e[r-1])return n?((o=e.slice(0,r))[r-1]=s,o):null;if(e[e.length-1]<s)return n?((o=e.slice(e.length-r))[r-1]=s,o):null;for(let n=0,h=i.length;n<h;++n){let h=i[n];if(t!=h){if(s<e[t+r-1])break;if(s<=e[h-1])return a(e,t,h,r,s,!1);t=h}}return null}},7571:function(e,t,i){var r=i(6101),s=i(8641),n=i(226),a=i(5537),h=i(3448),o=i(6835),l=i(4772),u=i(9405),d=i(1071),f=i(4857),_=i(6442);let c=(0,r.Ue)();class m{constructor(e,t,i,r,s,n){this.styleFunction,this.extent_,this.id_=n,this.type_=e,this.flatCoordinates_=t,this.flatInteriorPoints_=null,this.flatMidpoints_=null,this.ends_=i||null,this.properties_=s,this.squaredTolerance_,this.stride_=r,this.simplifiedGeometry_}get(e){return this.properties_[e]}getExtent(){return this.extent_||(this.extent_="Point"===this.type_?(0,s.HK)(this.flatCoordinates_):(0,s.GN)(this.flatCoordinates_,0,this.flatCoordinates_.length,2)),this.extent_}getFlatInteriorPoint(){if(!this.flatInteriorPoints_){let e=(0,s.qg)(this.getExtent());this.flatInteriorPoints_=(0,h.X)(this.flatCoordinates_,0,this.ends_,2,e,0)}return this.flatInteriorPoints_}getFlatInteriorPoints(){if(!this.flatInteriorPoints_){let e=(0,l.Q3)(this.flatCoordinates_,this.ends_),t=(0,d.E)(this.flatCoordinates_,0,e,2);this.flatInteriorPoints_=(0,h.U)(this.flatCoordinates_,0,e,2,t)}return this.flatInteriorPoints_}getFlatMidpoint(){return this.flatMidpoints_||(this.flatMidpoints_=(0,u.WW)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,.5)),this.flatMidpoints_}getFlatMidpoints(){if(!this.flatMidpoints_){this.flatMidpoints_=[];let e=this.flatCoordinates_,t=0,i=this.ends_;for(let r=0,s=i.length;r<s;++r){let s=i[r],n=(0,u.WW)(e,t,s,2,.5);(0,a.l7)(this.flatMidpoints_,n),t=s}}return this.flatMidpoints_}getId(){return this.id_}getOrientedFlatCoordinates(){return this.flatCoordinates_}getGeometry(){return this}getSimplifiedGeometry(e){return this}simplifyTransformed(e,t){return this}getProperties(){return this.properties_}getPropertiesInternal(){return this.properties_}getStride(){return this.stride_}getStyleFunction(){return this.styleFunction}getType(){return this.type_}transform(e){e=(0,o.U2)(e);let t=e.getExtent(),i=e.getWorldExtent();if(t&&i){let e=(0,s.Cr)(i)/(0,s.Cr)(t);(0,r.qC)(c,i[0],i[3],e,-e,0,0,0),(0,_.vT)(this.flatCoordinates_,0,this.flatCoordinates_.length,2,c,this.flatCoordinates_)}}applyTransform(e){e(this.flatCoordinates_,this.flatCoordinates_,this.stride_)}clone(){return new m(this.type_,this.flatCoordinates_.slice(),this.ends_?.slice(),this.stride_,Object.assign({},this.properties_),this.id_)}getEnds(){return this.ends_}enableSimplifyTransformed(){return this.simplifyTransformed=(0,f.qe)((e,t)=>{let i;if(e===this.squaredTolerance_)return this.simplifiedGeometry_;this.simplifiedGeometry_=this.clone(),t&&this.simplifiedGeometry_.applyTransform(t);let r=this.simplifiedGeometry_.getFlatCoordinates();switch(this.type_){case"LineString":r.length=(0,n.dt)(r,0,this.simplifiedGeometry_.flatCoordinates_.length,this.simplifiedGeometry_.stride_,e,r,0),i=[r.length];break;case"MultiLineString":i=[],r.length=(0,n.UJ)(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,e,r,0,i);break;case"Polygon":i=[],r.length=(0,n.Zh)(r,0,this.simplifiedGeometry_.ends_,this.simplifiedGeometry_.stride_,Math.sqrt(e),r,0,i)}return i&&(this.simplifiedGeometry_=new m(this.type_,r,i,2,this.properties_,this.id_)),this.squaredTolerance_=e,this.simplifiedGeometry_}),this}}m.prototype.getFlatCoordinates=m.prototype.getOrientedFlatCoordinates,t.ZP=m},6689:function(e,t,i){i.d(t,{Z:function(){return v}});var r=i(8714),s=i(2071),n=i(291),a=i(5487),h=i(5990),o=i(5880),l=i(8641),u=i(4187),d=i(9374),f=class{constructor(e){this.rbush_=new o.Z(e),this.items_={}}insert(e,t){let i={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3],value:t};this.rbush_.insert(i),this.items_[(0,u.sq)(t)]=i}load(e,t){let i=Array(t.length);for(let r=0,s=t.length;r<s;r++){let s=e[r],n=t[r],a={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:n};i[r]=a,this.items_[(0,u.sq)(n)]=a}this.rbush_.load(i)}remove(e){let t=(0,u.sq)(e),i=this.items_[t];return delete this.items_[t],null!==this.rbush_.remove(i)}update(e,t){let i=this.items_[(0,u.sq)(t)],r=[i.minX,i.minY,i.maxX,i.maxY];(0,l.fS)(r,e)||(this.remove(t),this.insert(e,t))}getAll(){let e=this.rbush_.all();return e.map(function(e){return e.value})}getInExtent(e){let t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]},i=this.rbush_.search(t);return i.map(function(e){return e.value})}forEach(e){return this.forEach_(this.getAll(),e)}forEachInExtent(e,t){return this.forEach_(this.getInExtent(e),t)}forEach_(e,t){let i;for(let r=0,s=e.length;r<s&&!(i=t(e[r]));r++);return i}isEmpty(){return(0,d.x)(this.items_)}clear(){this.rbush_.clear(),this.items_={}}getExtent(e){let t=this.rbush_.toJSON();return(0,l.T9)(t.minX,t.minY,t.maxX,t.maxY,e)}concat(e){for(let t in this.rbush_.load(e.rbush_.all()),e.items_)this.items_[t]=e.items_[t]}},_=i(7571),c=i(8458),m=i(2796),g=i(4857);function y(e,t){return[[-1/0,-1/0,1/0,1/0]]}i(6835);var E=i(9515),p=i(5537),x=i(5818);function C(e,t){return function(i,r,s,n,a){let h=this;!function(e,t,i,r,s,n,a){let h=new XMLHttpRequest;h.open("GET","function"==typeof e?e(i,r,s):e,!0),"arraybuffer"==t.getType()&&(h.responseType="arraybuffer"),h.withCredentials=!1,h.onload=function(e){if(!h.status||h.status>=200&&h.status<300){let e=t.getType();try{let r;"text"==e||"json"==e?r=h.responseText:"xml"==e?r=h.responseXML||h.responseText:"arraybuffer"==e&&(r=h.response),r?n(t.readFeatures(r,{extent:i,featureProjection:s}),t.readProjection(r)):a()}catch{a()}}else a()},h.onerror=a,h.send()}(e,t,i,r,s,function(e,t){h.addFeatures(e),void 0!==n&&n(e)},a||g.Zn)}}class F extends n.ZP{constructor(e,t,i){super(e),this.feature=t,this.features=i}}class I extends c.Z{constructor(e){let t,i;e=e||{},super({attributions:e.attributions,interpolate:!0,projection:void 0,state:"ready",wrapX:void 0===e.wrapX||e.wrapX}),this.on,this.once,this.un,this.loader_=g.Zn,this.format_=e.format||null,this.overlaps_=void 0===e.overlaps||e.overlaps,this.url_=e.url,void 0!==e.loader?this.loader_=e.loader:void 0!==this.url_&&((0,E.h)(this.format_,"`format` must be set when `url` is set"),this.loader_=C(this.url_,this.format_)),this.strategy_=void 0!==e.strategy?e.strategy:y;let s=void 0===e.useSpatialIndex||e.useSpatialIndex;this.featuresRtree_=s?new f:null,this.loadedExtentsRtree_=new f,this.loadingExtentsCount_=0,this.nullGeometryFeatures_={},this.idIndex_={},this.uidIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(e.features)?i=e.features:e.features&&(i=(t=e.features).getArray()),s||void 0!==t||(t=new r.Z(i)),void 0!==i&&this.addFeaturesInternal(i),void 0!==t&&this.bindFeaturesCollection_(t)}addFeature(e){this.addFeatureInternal(e),this.changed()}addFeatureInternal(e){let t=(0,u.sq)(e);if(!this.addToIndex_(t,e)){this.featuresCollection_&&this.featuresCollection_.remove(e);return}this.setupChangeEvents_(t,e);let i=e.getGeometry();if(i){let t=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(t,e)}else this.nullGeometryFeatures_[t]=e;this.dispatchEvent(new F(m.Z.ADDFEATURE,e))}setupChangeEvents_(e,t){t instanceof _.ZP||(this.featureChangeKeys_[e]=[(0,x.oL)(t,a.Z.CHANGE,this.handleFeatureChange_,this),(0,x.oL)(t,h.Z.PROPERTYCHANGE,this.handleFeatureChange_,this)])}addToIndex_(e,t){let i=!0;if(void 0!==t.getId()){let e=String(t.getId());if(e in this.idIndex_){if(t instanceof _.ZP){let r=this.idIndex_[e];r instanceof _.ZP?Array.isArray(r)?r.push(t):this.idIndex_[e]=[r,t]:i=!1}else i=!1}else this.idIndex_[e]=t}return i&&((0,E.h)(!(e in this.uidIndex_),"The passed `feature` was already added to the source"),this.uidIndex_[e]=t),i}addFeatures(e){this.addFeaturesInternal(e),this.changed()}addFeaturesInternal(e){let t=[],i=[],r=[];for(let t=0,r=e.length;t<r;t++){let r=e[t],s=(0,u.sq)(r);this.addToIndex_(s,r)&&i.push(r)}for(let e=0,s=i.length;e<s;e++){let s=i[e],n=(0,u.sq)(s);this.setupChangeEvents_(n,s);let a=s.getGeometry();if(a){let e=a.getExtent();t.push(e),r.push(s)}else this.nullGeometryFeatures_[n]=s}if(this.featuresRtree_&&this.featuresRtree_.load(t,r),this.hasListener(m.Z.ADDFEATURE))for(let e=0,t=i.length;e<t;e++)this.dispatchEvent(new F(m.Z.ADDFEATURE,i[e]))}bindFeaturesCollection_(e){let t=!1;this.addEventListener(m.Z.ADDFEATURE,function(i){t||(t=!0,e.push(i.feature),t=!1)}),this.addEventListener(m.Z.REMOVEFEATURE,function(i){t||(t=!0,e.remove(i.feature),t=!1)}),e.addEventListener(s.Z.ADD,e=>{t||(t=!0,this.addFeature(e.element),t=!1)}),e.addEventListener(s.Z.REMOVE,e=>{t||(t=!0,this.removeFeature(e.element),t=!1)}),this.featuresCollection_=e}clear(e){if(e){for(let e in this.featureChangeKeys_){let t=this.featureChangeKeys_[e];t.forEach(x.bN)}this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.uidIndex_={})}else if(this.featuresRtree_){let e=e=>{this.removeFeatureInternal(e)};for(let t in this.featuresRtree_.forEach(e),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[t])}this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.nullGeometryFeatures_={};let t=new F(m.Z.CLEAR);this.dispatchEvent(t),this.changed()}forEachFeature(e){if(this.featuresRtree_)return this.featuresRtree_.forEach(e);this.featuresCollection_&&this.featuresCollection_.forEach(e)}forEachFeatureAtCoordinateDirect(e,t){let i=[e[0],e[1],e[0],e[1]];return this.forEachFeatureInExtent(i,function(i){let r=i.getGeometry();if(r instanceof _.ZP||r.intersectsCoordinate(e))return t(i)})}forEachFeatureInExtent(e,t){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(e,t);this.featuresCollection_&&this.featuresCollection_.forEach(t)}forEachFeatureIntersectingExtent(e,t){return this.forEachFeatureInExtent(e,function(i){let r=i.getGeometry();if(r instanceof _.ZP||r.intersectsExtent(e)){let e=t(i);if(e)return e}})}getFeaturesCollection(){return this.featuresCollection_}getFeatures(){let e;return this.featuresCollection_?e=this.featuresCollection_.getArray().slice(0):this.featuresRtree_&&(e=this.featuresRtree_.getAll(),(0,d.x)(this.nullGeometryFeatures_)||(0,p.l7)(e,Object.values(this.nullGeometryFeatures_))),e}getFeaturesAtCoordinate(e){let t=[];return this.forEachFeatureAtCoordinateDirect(e,function(e){t.push(e)}),t}getFeaturesInExtent(e,t){if(this.featuresRtree_){let i=t&&t.canWrapX()&&this.getWrapX();if(!i)return this.featuresRtree_.getInExtent(e);let r=(0,l.MV)(e,t);return[].concat(...r.map(e=>this.featuresRtree_.getInExtent(e)))}return this.featuresCollection_?this.featuresCollection_.getArray().slice(0):[]}getClosestFeatureToCoordinate(e,t){let i=e[0],r=e[1],s=null,n=[NaN,NaN],a=1/0,h=[-1/0,-1/0,1/0,1/0];return t=t||g.uX,this.featuresRtree_.forEachInExtent(h,function(e){if(t(e)){let t=e.getGeometry(),o=a;if((a=t instanceof _.ZP?0:t.closestPointXY(i,r,n,a))<o){s=e;let t=Math.sqrt(a);h[0]=i-t,h[1]=r-t,h[2]=i+t,h[3]=r+t}}}),s}getExtent(e){return this.featuresRtree_.getExtent(e)}getFeatureById(e){let t=this.idIndex_[e.toString()];return void 0!==t?t:null}getFeatureByUid(e){let t=this.uidIndex_[e];return void 0!==t?t:null}getFormat(){return this.format_}getOverlaps(){return this.overlaps_}getUrl(){return this.url_}handleFeatureChange_(e){let t=e.target,i=(0,u.sq)(t),r=t.getGeometry();if(r){let e=r.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(e,t)):this.featuresRtree_&&this.featuresRtree_.update(e,t)}else i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(t),this.nullGeometryFeatures_[i]=t);let s=t.getId();if(void 0!==s){let e=s.toString();this.idIndex_[e]!==t&&(this.removeFromIdIndex_(t),this.idIndex_[e]=t)}else this.removeFromIdIndex_(t),this.uidIndex_[i]=t;this.changed(),this.dispatchEvent(new F(m.Z.CHANGEFEATURE,t))}hasFeature(e){let t=e.getId();return void 0!==t?t in this.idIndex_:(0,u.sq)(e) in this.uidIndex_}isEmpty(){return this.featuresRtree_?this.featuresRtree_.isEmpty()&&(0,d.x)(this.nullGeometryFeatures_):!this.featuresCollection_||0===this.featuresCollection_.getLength()}loadFeatures(e,t,i){let r=this.loadedExtentsRtree_,s=this.strategy_(e,t,i);for(let e=0,n=s.length;e<n;++e){let n=s[e],a=r.forEachInExtent(n,function(e){return(0,l.r4)(e.extent,n)});a||(++this.loadingExtentsCount_,this.dispatchEvent(new F(m.Z.FEATURESLOADSTART)),this.loader_.call(this,n,t,i,e=>{--this.loadingExtentsCount_,this.dispatchEvent(new F(m.Z.FEATURESLOADEND,void 0,e))},()=>{--this.loadingExtentsCount_,this.dispatchEvent(new F(m.Z.FEATURESLOADERROR))}),r.insert(n,{extent:n.slice()}))}this.loading=!(this.loader_.length<4)&&this.loadingExtentsCount_>0}refresh(){this.clear(!0),this.loadedExtentsRtree_.clear(),super.refresh()}removeLoadedExtent(e){let t;let i=this.loadedExtentsRtree_;i.forEachInExtent(e,function(i){if((0,l.fS)(i.extent,e))return t=i,!0}),t&&i.remove(t)}removeFeatures(e){let t=!1;for(let i=0,r=e.length;i<r;++i)t=this.removeFeatureInternal(e[i])||t;t&&this.changed()}removeFeature(e){if(!e)return;let t=this.removeFeatureInternal(e);t&&this.changed()}removeFeatureInternal(e){let t=(0,u.sq)(e);if(!(t in this.uidIndex_))return!1;t in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[t]:this.featuresRtree_&&this.featuresRtree_.remove(e);let i=this.featureChangeKeys_[t];i?.forEach(x.bN),delete this.featureChangeKeys_[t];let r=e.getId();if(void 0!==r){let t=r.toString(),i=this.idIndex_[t];i===e?delete this.idIndex_[t]:Array.isArray(i)&&(i.splice(i.indexOf(e),1),1===i.length&&(this.idIndex_[t]=i[0]))}return delete this.uidIndex_[t],this.hasListener(m.Z.REMOVEFEATURE)&&this.dispatchEvent(new F(m.Z.REMOVEFEATURE,e)),!0}removeFromIdIndex_(e){for(let t in this.idIndex_)if(this.idIndex_[t]===e){delete this.idIndex_[t];break}}setLoader(e){this.loader_=e}setUrl(e){(0,E.h)(this.format_,"`format` must be set when `url` is set"),this.url_=e,this.setLoader(C(e,this.format_))}}var v=I},2796:function(e,t){t.Z={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature",FEATURESLOADSTART:"featuresloadstart",FEATURESLOADEND:"featuresloadend",FEATURESLOADERROR:"featuresloaderror"}}}]);