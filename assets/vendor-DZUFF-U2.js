var Pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],u=n[t++],h=n[t++],g=((i&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(g>>10)),e[r++]=String.fromCharCode(56320+(g&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,h=u?n[i+1]:0,g=i+2<n.length,m=g?n[i+2]:0,E=o>>2,P=(o&3)<<4|h>>4;let O=(h&15)<<2|m>>6,F=m&63;g||(F=64,u||(O=64)),r.push(t[E],t[P],t[O],t[F])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ff(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],h=i<n.length?t[n.charAt(i)]:0;++i;const m=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||h==null||m==null||P==null)throw new Gp;const O=o<<2|h>>4;if(r.push(O),m!==64){const F=h<<4&240|m>>2;if(r.push(F),P!==64){const L=m<<6&192|P;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kp=function(n){const e=ff(n);return df.encodeByteArray(e,!0)},ga=function(n){return Kp(n).replace(/\./g,"")},pf=function(n){try{return df.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=()=>Qp().__FIREBASE_DEFAULTS__,Yp=()=>{if(typeof process>"u"||typeof Pc>"u")return;const n=Pc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pf(n[1]);return e&&JSON.parse(e)},Oa=()=>{try{return Xp()||Yp()||Jp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gf=n=>{var e,t;return(t=(e=Oa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Zp=n=>{const e=gf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mf=()=>{var n;return(n=Oa())===null||n===void 0?void 0:n.config},vf=n=>{var e;return(e=Oa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ga(JSON.stringify(t)),ga(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ng(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function rg(){var n;const e=(n=Oa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ig(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ag(){const n=xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ug(){return!rg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lg(){try{return typeof indexedDB=="object"}catch{return!1}}function cg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="FirebaseError";class ur extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=hg,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],u=o?fg(o,r):"Error",h=`${this.serviceName}: ${u} (${i}).`;return new ur(i,h,r)}}function fg(n,e){return n.replace(dg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dg=/\{\$([^}]+)}/g;function pg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ma(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],u=e[i];if(kc(o)&&kc(u)){if(!ma(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function kc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function xs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function gg(n,e){const t=new mg(n,e);return t.subscribe.bind(t)}class mg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");vg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=wu),i.error===void 0&&(i.error=wu),i.complete===void 0&&(i.complete=wu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n){return n&&n._delegate?n._delegate:n}class si{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new eg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&u.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const u=this.instances.get(i);return u&&e(u,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(n){return n===Jr?void 0:n}function Eg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const wg={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},Ig=$e.INFO,bg={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},Ag=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=bg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=Ig,this._logHandler=Ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}const Cg=(n,e)=>e.some(t=>n instanceof t);let Nc,Dc;function Sg(){return Nc||(Nc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rg(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yf=new WeakMap,Bu=new WeakMap,_f=new WeakMap,Iu=new WeakMap,Il=new WeakMap;function Pg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Ar(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&yf.set(t,n)}).catch(()=>{}),Il.set(e,n),e}function kg(n){if(Bu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Bu.set(n,e)}let $u={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_f.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ar(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ng(n){$u=n($u)}function Dg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bu(this),e,...t);return _f.set(r,e.sort?e.sort():[e]),Ar(r)}:Rg().includes(n)?function(...e){return n.apply(bu(this),e),Ar(yf.get(this))}:function(...e){return Ar(n.apply(bu(this),e))}}function Og(n){return typeof n=="function"?Dg(n):(n instanceof IDBTransaction&&kg(n),Cg(n,Sg())?new Proxy(n,$u):n)}function Ar(n){if(n instanceof IDBRequest)return Pg(n);if(Iu.has(n))return Iu.get(n);const e=Og(n);return e!==n&&(Iu.set(n,e),Il.set(e,n)),e}const bu=n=>Il.get(n);function Lg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,e),h=Ar(u);return r&&u.addEventListener("upgradeneeded",g=>{r(Ar(u.result),g.oldVersion,g.newVersion,Ar(u.transaction),g)}),t&&u.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),h.then(g=>{o&&g.addEventListener("close",()=>o()),i&&g.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const xg=["get","getKey","getAll","getAllKeys","count"],Vg=["put","add","delete","clear"],Au=new Map;function Oc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Au.get(e))return Au.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Vg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xg.includes(t)))return;const o=async function(u,...h){const g=this.transaction(u,i?"readwrite":"readonly");let m=g.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),i&&g.done]))[0]};return Au.set(e,o),o}Ng(n=>({...n,get:(e,t,r)=>Oc(e,t)||n.get(e,t,r),has:(e,t)=>!!Oc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Fg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Fg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qu="@firebase/app",Lc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new wl("@firebase/app"),Ug="@firebase/app-compat",jg="@firebase/analytics-compat",Bg="@firebase/analytics",$g="@firebase/app-check-compat",qg="@firebase/app-check",Hg="@firebase/auth",zg="@firebase/auth-compat",Wg="@firebase/database",Gg="@firebase/data-connect",Kg="@firebase/database-compat",Qg="@firebase/functions",Xg="@firebase/functions-compat",Yg="@firebase/installations",Jg="@firebase/installations-compat",Zg="@firebase/messaging",em="@firebase/messaging-compat",tm="@firebase/performance",nm="@firebase/performance-compat",rm="@firebase/remote-config",im="@firebase/remote-config-compat",sm="@firebase/storage",om="@firebase/storage-compat",am="@firebase/firestore",um="@firebase/vertexai-preview",lm="@firebase/firestore-compat",cm="firebase",hm="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="[DEFAULT]",fm={[qu]:"fire-core",[Ug]:"fire-core-compat",[Bg]:"fire-analytics",[jg]:"fire-analytics-compat",[qg]:"fire-app-check",[$g]:"fire-app-check-compat",[Hg]:"fire-auth",[zg]:"fire-auth-compat",[Wg]:"fire-rtdb",[Gg]:"fire-data-connect",[Kg]:"fire-rtdb-compat",[Qg]:"fire-fn",[Xg]:"fire-fn-compat",[Yg]:"fire-iid",[Jg]:"fire-iid-compat",[Zg]:"fire-fcm",[em]:"fire-fcm-compat",[tm]:"fire-perf",[nm]:"fire-perf-compat",[rm]:"fire-rc",[im]:"fire-rc-compat",[sm]:"fire-gcs",[om]:"fire-gcs-compat",[am]:"fire-fst",[lm]:"fire-fst-compat",[um]:"fire-vertex","fire-js":"fire-js",[cm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Map,dm=new Map,zu=new Map;function xc(n,e){try{n.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qi(n){const e=n.name;if(zu.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;zu.set(e,n);for(const t of va.values())xc(t,n);for(const t of dm.values())xc(t,n);return!0}function bl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new oo("app","Firebase",pm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=hm;function mm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(t||(t=mf()),!t)throw Cr.create("no-options");const o=va.get(i);if(o){if(ma(t,o.options)&&ma(r,o.config))return o;throw Cr.create("duplicate-app",{appName:i})}const u=new Tg(i);for(const g of zu.values())u.addComponent(g);const h=new gm(t,r,u);return va.set(i,h),h}function Ef(n=Hu){const e=va.get(n);if(!e&&n===Hu&&mf())return mm();if(!e)throw Cr.create("no-app",{appName:n});return e}function Sr(n,e,t){var r;let i=(r=fm[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${i}" with version "${e}":`];o&&h.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(h.join(" "));return}Qi(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="firebase-heartbeat-database",ym=1,Ws="firebase-heartbeat-store";let Cu=null;function Tf(){return Cu||(Cu=Lg(vm,ym,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cr.create("idb-open",{originalErrorMessage:n.message})})),Cu}async function _m(n){try{const t=(await Tf()).transaction(Ws),r=await t.objectStore(Ws).get(wf(n));return await t.done,r}catch(e){if(e instanceof ur)ir.warn(e.message);else{const t=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function Vc(n,e){try{const r=(await Tf()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,wf(n)),await r.done}catch(t){if(t instanceof ur)ir.warn(t.message);else{const r=Cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(r.message)}}}function wf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=1024,Tm=30*24*60*60*1e3;class wm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Mc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=Tm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mc(),{heartbeatsToSend:r,unsentEntries:i}=Im(this._heartbeatsCache.heartbeats),o=ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ir.warn(t),""}}}function Mc(){return new Date().toISOString().substring(0,10)}function Im(n,e=Em){const t=[];let r=n.slice();for(const i of n){const o=t.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),Fc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lg()?cg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _m(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fc(n){return ga(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){Qi(new si("platform-logger",e=>new Mg(e),"PRIVATE")),Qi(new si("heartbeat",e=>new wm(e),"PRIVATE")),Sr(qu,Lc,n),Sr(qu,Lc,"esm2017"),Sr("fire-js","")}Am("");function Al(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function If(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cm=If,bf=new oo("auth","Firebase",If());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new wl("@firebase/auth");function Sm(n,...e){ya.logLevel<=$e.WARN&&ya.warn(`Auth (${os}): ${n}`,...e)}function na(n,...e){ya.logLevel<=$e.ERROR&&ya.error(`Auth (${os}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(n,...e){throw Sl(n,...e)}function mn(n,...e){return Sl(n,...e)}function Cl(n,e,t){const r=Object.assign(Object.assign({},Cm()),{[e]:t});return new oo("auth","Firebase",r).create(e,{appName:n.name})}function nr(n){return Cl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rm(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ln(n,"argument-error"),Cl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bf.create(n,...e)}function Ie(n,e,...t){if(!n)throw Sl(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw na(e),new Error(e)}function sr(n,e){n||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Pm(){return Uc()==="http:"||Uc()==="https:"}function Uc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pm()||sg()||"connection"in navigator)?navigator.onLine:!0}function Nm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,sr(t>e,"Short delay should be less than long delay!"),this.isMobile=ng()||og()}get(){return km()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n,e){sr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new uo(3e4,6e4);function Lr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function lr(n,e,t,r,i={}){return Cf(n,i,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const h=ao(Object.assign({key:n.config.apiKey},u)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:g},o);return ig()||(m.referrerPolicy="no-referrer"),Af.fetch()(Sf(n,n.config.apiHost,t,h),m)})}async function Cf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dm),e);try{const i=new xm(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw Go(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const h=o.ok?u.errorMessage:u.error.message,[g,m]=h.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(n,"credential-already-in-use",u);if(g==="EMAIL_EXISTS")throw Go(n,"email-already-in-use",u);if(g==="USER_DISABLED")throw Go(n,"user-disabled",u);const E=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Cl(n,E,m);ln(n,E)}}catch(i){if(i instanceof ur)throw i;ln(n,"network-request-failed",{message:String(i)})}}async function lo(n,e,t,r,i={}){const o=await lr(n,e,t,r,i);return"mfaPendingCredential"in o&&ln(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Sf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Rl(n.config,i):`${n.config.apiScheme}://${i}`}function Lm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),Om.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Go(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=mn(n,e,r);return i.customData._tokenResponse=t,i}function jc(n){return n!==void 0&&n.enterprise!==void 0}class Vm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Lm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Mm(n,e){return lr(n,"GET","/v2/recaptchaConfig",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(n,e){return lr(n,"POST","/v1/accounts:delete",e)}async function Rf(n,e){return lr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Um(n,e=!1){const t=vn(n),r=await t.getIdToken(e),i=Pl(r);Ie(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Us(Su(i.auth_time)),issuedAtTime:Us(Su(i.iat)),expirationTime:Us(Su(i.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Su(n){return Number(n)*1e3}function Pl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=pf(t);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bc(n){const e=Pl(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ur&&jm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Xi(n,Rf(t,{idToken:r}));Ie(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Pf(o.providerUserInfo):[],h=qm(n.providerData,u),g=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),E=g?m:!1,P={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new Gu(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(n,P)}async function $m(n){const e=vn(n);await _a(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pf(n){return n.map(e=>{var{providerId:t}=e,r=Al(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,e){const t=await Cf(n,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,u=Sf(n,i,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Af.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zm(n,e){return lr(n,"POST","/v2/accounts:revokeToken",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Hm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,u=new Bi;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),i&&(Ie(typeof i=="string","internal-error",{appName:e}),u.accessToken=i),o&&(Ie(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Gu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Um(this,e)}reload(){return $m(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _a(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await Xi(this,Fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,u,h,g,m,E;const P=(r=t.displayName)!==null&&r!==void 0?r:void 0,O=(i=t.email)!==null&&i!==void 0?i:void 0,F=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,L=(u=t.photoURL)!==null&&u!==void 0?u:void 0,V=(h=t.tenantId)!==null&&h!==void 0?h:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,$=(m=t.createdAt)!==null&&m!==void 0?m:void 0,X=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Q,emailVerified:Y,isAnonymous:ee,providerData:J,stsTokenManager:c}=t;Ie(Q&&c,e,"internal-error");const C=Bi.fromJSON(this.name,c);Ie(typeof Q=="string",e,"internal-error"),vr(P,e.name),vr(O,e.name),Ie(typeof Y=="boolean",e,"internal-error"),Ie(typeof ee=="boolean",e,"internal-error"),vr(F,e.name),vr(L,e.name),vr(V,e.name),vr(q,e.name),vr($,e.name),vr(X,e.name);const w=new Jn({uid:Q,auth:e,email:O,emailVerified:Y,displayName:P,isAnonymous:ee,photoURL:L,phoneNumber:F,tenantId:V,stsTokenManager:C,createdAt:$,lastLoginAt:X});return J&&Array.isArray(J)&&(w.providerData=J.map(A=>Object.assign({},A))),q&&(w._redirectEventId=q),w}static async _fromIdTokenResponse(e,t,r=!1){const i=new Bi;i.updateFromServerResponse(t);const o=new Jn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _a(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Ie(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Pf(i.providerUserInfo):[],u=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),h=new Bi;h.updateFromIdToken(r);const g=new Jn({uid:i.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(g,m),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map;function Zn(n){sr(n instanceof Function,"Expected a class definition");let e=$c.get(n);return e?(sr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$c.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kf.type="NONE";const qc=kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e,t){return`firebase:${n}:${e}:${t}`}class $i{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,o),this.fullPersistenceKey=ra("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $i(Zn(qc),e,r);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=i[0]||Zn(qc);const u=ra(r,e.config.apiKey,e.name);let h=null;for(const m of t)try{const E=await m._get(u);if(E){const P=Jn._fromJSON(e,E);m!==o&&(h=P),o=m;break}}catch{}const g=i.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!g.length?new $i(o,e,r):(o=g[0],h&&await o._set(u,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new $i(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Mf(e))return"Webos";if(Df(e))return"Safari";if((e.includes("chrome/")||Of(e))&&!e.includes("edge/"))return"Chrome";if(xf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nf(n=xt()){return/firefox\//i.test(n)}function Df(n=xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Of(n=xt()){return/crios\//i.test(n)}function Lf(n=xt()){return/iemobile/i.test(n)}function xf(n=xt()){return/android/i.test(n)}function Vf(n=xt()){return/blackberry/i.test(n)}function Mf(n=xt()){return/webos/i.test(n)}function kl(n=xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wm(n=xt()){var e;return kl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gm(){return ag()&&document.documentMode===10}function Ff(n=xt()){return kl(n)||xf(n)||Mf(n)||Vf(n)||/windows phone/i.test(n)||Lf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n,e=[]){let t;switch(n){case"Browser":t=Hc(xt());break;case"Worker":t=`${Hc(xt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,h)=>{try{const g=e(o);u(g)}catch(g){h(g)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(n,e={}){return lr(n,"GET","/v2/passwordPolicy",Lr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=6;class Ym{constructor(e){var t,r,i,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:Xm,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,u,h;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(r=g.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(i=g.containsLowercaseLetter)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(o=g.containsUppercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsNumericCharacter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),g}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new Km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rf(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=i==null?void 0:i._redirectEventId,g=await this.tryRedirectSignIn(e);(!u||u===h)&&(g!=null&&g.user)&&(i=g.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(u){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _a(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(nr(this));const t=e?vn(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qm(this),t=new Ym(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await zm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zn(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[Zn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(h,this,"internal-error"),h.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,r,i);return()=>{u=!0,g()}}else{const g=e.addObserver(t);return()=>{u=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Sm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function xr(n){return vn(n)}class zc{constructor(e){this.auth=e,this.observer=null,this.addObserver=gg(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zm(n){La=n}function jf(n){return La.loadJS(n)}function ev(){return La.recaptchaEnterpriseScript}function tv(){return La.gapiScript}function nv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const rv="recaptcha-enterprise",iv="NO_RECAPTCHA";class sv{constructor(e){this.type=rv,this.auth=xr(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,h)=>{Mm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new Vm(g);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(g=>{h(g)})})}function i(o,u,h){const g=window.grecaptcha;jc(g)?g.enterprise.ready(()=>{g.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(iv)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,u)=>{r(this.auth).then(h=>{if(!t&&jc(window.grecaptcha))i(h,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let g=ev();g.length!==0&&(g+=h),jf(g).then(()=>{i(h,o,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function Wc(n,e,t,r=!1){const i=new sv(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const u=Object.assign({},e);return r?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Ku(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Wc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n,e){const t=bl(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(ma(o,e??{}))return i;ln(i,"already-initialized")}return t.initialize({options:e})}function av(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uv(n,e,t){const r=xr(n);Ie(r._canInitEmulator,r,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Bf(e),{host:u,port:h}=lv(e),g=h===null?"":`:${h}`;r.config.emulator={url:`${o}//${u}${g}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),cv()}function Bf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function lv(n){const e=Bf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Gc(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:Gc(u)}}}function Gc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function hv(n,e){return lr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e){return lo(n,"POST","/v1/accounts:signInWithPassword",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,e){return lo(n,"POST","/v1/accounts:signInWithEmailLink",Lr(n,e))}async function pv(n,e){return lo(n,"POST","/v1/accounts:signInWithEmailLink",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Nl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Gs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Gs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ku(e,t,"signInWithPassword",fv);case"emailLink":return dv(e,{email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ku(e,r,"signUpPassword",hv);case"emailLink":return pv(e,{idToken:t,email:this._email,oobCode:this._password});default:ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n,e){return lo(n,"POST","/v1/accounts:signInWithIdp",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="http://localhost";class oi extends Nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ln("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Al(t,["providerId","signInMethod"]);if(!r||!i)return null;const u=new oi(r,i);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return qi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qi(e,t)}buildRequest(){const e={requestUri:gv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ao(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vv(n){const e=Ls(xs(n)).link,t=e?Ls(xs(e)).deep_link_id:null,r=Ls(xs(n)).deep_link_id;return(r?Ls(xs(r)).link:null)||r||t||e||n}class Dl{constructor(e){var t,r,i,o,u,h;const g=Ls(xs(e)),m=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(r=g.oobCode)!==null&&r!==void 0?r:null,P=mv((i=g.mode)!==null&&i!==void 0?i:null);Ie(m&&E&&P,"argument-error"),this.apiKey=m,this.operation=P,this.code=E,this.continueUrl=(o=g.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=g.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(h=g.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=vv(e);try{return new Dl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,t){return Gs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Dl.parseLink(t);return Ie(r,"argument-error"),Gs._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends co{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _r.credential(t,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends co{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends co{constructor(){super("twitter.com")}static credential(e,t){return oi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tr.credential(t,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e){return lo(n,"POST","/v1/accounts:signUp",Lr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Jn._fromIdTokenResponse(e,r,i),u=Kc(r);return new ai({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Kc(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Kc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends ur{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ea(e,t,r,i)}}function $f(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(n,o,e,r):o})}async function _v(n,e,t=!1){const r=await Xi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ai._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(n,e,t=!1){const{auth:r}=n;if(pn(r.app))return Promise.reject(nr(r));const i="reauthenticate";try{const o=await Xi(n,$f(r,i,e,n),t);Ie(o.idToken,r,"internal-error");const u=Pl(o.idToken);Ie(u,r,"internal-error");const{sub:h}=u;return Ie(n.uid===h,r,"user-mismatch"),ai._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e,t=!1){if(pn(n.app))return Promise.reject(nr(n));const r="signIn",i=await $f(n,r,e),o=await ai._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Tv(n,e){return qf(xr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(n){const e=xr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qI(n,e,t){if(pn(n.app))return Promise.reject(nr(n));const r=xr(n),u=await Ku(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yv).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Hf(n),g}),h=await ai._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(h.user),h}function HI(n,e,t){return pn(n.app)?Promise.reject(nr(n)):Tv(vn(n),as.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hf(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(n,e){return lr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=vn(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Xi(r,wv(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const h=r.providerData.find(({providerId:g})=>g==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function Iv(n,e,t,r){return vn(n).onIdTokenChanged(e,t,r)}function bv(n,e,t){return vn(n).beforeAuthStateChanged(e,t)}function WI(n,e,t,r){return vn(n).onAuthStateChanged(e,t,r)}function GI(n){return vn(n).signOut()}const Ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=1e3,Cv=10;class Wf extends zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ff(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,g)=>{this.notifyListeners(u,g)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);Gm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wf.type="LOCAL";const Sv=Wf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gf.type="SESSION";const Kf=Gf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,u=this.handlersMap[i];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const h=Array.from(u).map(async m=>m(t.origin,o)),g=await Rv(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,u;return new Promise((h,g)=>{const m=Ll("",20);i.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},r);u={messageChannel:i,onMessage(P){const O=P;if(O.data.eventId===m)switch(O.data.status){case"ack":clearTimeout(E),o=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(O.data.response);break;default:clearTimeout(E),clearTimeout(o),g(new Error("invalid_response"));break}}},this.handlers.add(u),i.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(){return window}function kv(n){kn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function Nv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ov(){return Qf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="firebaseLocalStorageDb",Lv=1,wa="firebaseLocalStorage",Yf="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Va(n,e){return n.transaction([wa],e?"readwrite":"readonly").objectStore(wa)}function xv(){const n=indexedDB.deleteDatabase(Xf);return new ho(n).toPromise()}function Qu(){const n=indexedDB.open(Xf,Lv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wa,{keyPath:Yf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wa)?e(r):(r.close(),await xv(),e(await Qu()))})})}async function Qc(n,e,t){const r=Va(n,!0).put({[Yf]:e,value:t});return new ho(r).toPromise()}async function Vv(n,e){const t=Va(n,!1).get(e),r=await new ho(t).toPromise();return r===void 0?null:r.value}function Xc(n,e){const t=Va(n,!0).delete(e);return new ho(t).toPromise()}const Mv=800,Fv=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Fv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(Ov()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Nv(),!this.activeServiceWorker)return;this.sender=new Pv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qu();return await Qc(e,Ta,"1"),await Xc(e,Ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Vv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Va(i,!1).getAll();return new ho(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const Uv=Jf;new uo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n,e){return e?Zn(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jv(n){return qf(n.auth,new xl(n),n.bypassAuthState)}function Bv(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Ev(t,new xl(n),n.bypassAuthState)}async function $v(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),_v(t,new xl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:u,type:h}=e;if(u){this.reject(u);return}const g={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(g))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jv;case"linkViaPopup":case"linkViaRedirect":return $v;case"reauthViaPopup":case"reauthViaRedirect":return Bv;default:ln(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=new uo(2e3,1e4);async function KI(n,e,t){if(pn(n.app))return Promise.reject(mn(n,"operation-not-supported-in-this-environment"));const r=xr(n);Rm(n,e,Ol);const i=Zf(r,t);return new Zr(r,"signInViaPopup",e,i).executeNotNull()}class Zr extends ed{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qv.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="pendingRedirect",ia=new Map;class zv extends ed{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await Wv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wv(n,e){const t=Qv(e),r=Kv(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Gv(n,e){ia.set(n._key(),e)}function Kv(n){return Zn(n._redirectPersistence)}function Qv(n){return ra(Hv,n.config.apiKey,n.name)}async function Xv(n,e,t=!1){if(pn(n.app))return Promise.reject(nr(n));const r=xr(n),i=Zf(r,e),u=await new zv(r,i,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=10*60*1e3;class Jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!td(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(mn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(e))}saveEventToCache(e){this.cachedEventUids.add(Yc(e)),this.lastProcessedEventTime=Date.now()}}function Yc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function td({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(n,e={}){return lr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ny=/^https?/;async function ry(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ey(n);for(const t of e)try{if(iy(t))return}catch{}ln(n,"unauthorized-domain")}function iy(n){const e=Wu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!ny.test(t))return!1;if(ty.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new uo(3e4,6e4);function Jc(){const n=kn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oy(n){return new Promise((e,t)=>{var r,i,o;function u(){Jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jc(),t(mn(n,"network-request-failed"))},timeout:sy.get()})}if(!((i=(r=kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=kn().gapi)===null||o===void 0)&&o.load)u();else{const h=nv("iframefcb");return kn()[h]=()=>{gapi.load?u():t(mn(n,"network-request-failed"))},jf(`${tv()}?onload=${h}`).catch(g=>t(g))}}).catch(e=>{throw sa=null,e})}let sa=null;function ay(n){return sa=sa||oy(n),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new uo(5e3,15e3),ly="__/auth/iframe",cy="emulator/auth/iframe",hy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dy(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rl(e,cy):`https://${n.config.authDomain}/${ly}`,r={apiKey:e.apiKey,appName:n.name,v:os},i=fy.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${ao(r).slice(1)}`}async function py(n){const e=await ay(n),t=kn().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hy,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const u=mn(n,"network-request-failed"),h=kn().setTimeout(()=>{o(u)},uy.get());function g(){kn().clearTimeout(h),i(r)}r.ping(g).then(g,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},my=500,vy=600,yy="_blank",_y="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(n,e,t,r=my,i=vy){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const g=Object.assign(Object.assign({},gy),{width:r.toString(),height:i.toString(),top:o,left:u}),m=xt().toLowerCase();t&&(h=Of(m)?yy:t),Nf(m)&&(e=e||_y,g.scrollbars="yes");const E=Object.entries(g).reduce((O,[F,L])=>`${O}${F}=${L},`,"");if(Wm(m)&&h!=="_self")return Ty(e||"",h),new Zc(null);const P=window.open(e||"",h,E);Ie(P,n,"popup-blocked");try{P.focus()}catch{}return new Zc(P)}function Ty(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="__/auth/handler",Iy="emulator/auth/handler",by=encodeURIComponent("fac");async function eh(n,e,t,r,i,o){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:os,eventId:i};if(e instanceof Ol){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",pg(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,P]of Object.entries({}))u[E]=P}if(e instanceof co){const E=e.getScopes().filter(P=>P!=="");E.length>0&&(u.scopes=E.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const E of Object.keys(h))h[E]===void 0&&delete h[E];const g=await n._getAppCheckToken(),m=g?`#${by}=${encodeURIComponent(g)}`:"";return`${Ay(n)}?${ao(h).slice(1)}${m}`}function Ay({config:n}){return n.emulator?Rl(n,Iy):`https://${n.authDomain}/${wy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="webStorageSupport";class Cy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=Xv,this._overrideRedirectResult=Gv}async _openPopup(e,t,r,i){var o;sr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await eh(e,t,r,Wu(),i);return Ey(e,u,Ll())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await eh(e,t,r,Wu(),i);return kv(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(sr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await py(e),r=new Jv(e);return t.register("authEvent",i=>(Ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ru,{type:Ru},i=>{var o;const u=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ru];u!==void 0&&t(!!u),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ry(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ff()||Df()||kl()}}const Sy=Cy;var th="@firebase/auth",nh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ky(n){Qi(new si("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;Ie(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uf(n)},m=new Jm(r,i,o,g);return av(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new si("auth-internal",e=>{const t=xr(e.getProvider("auth").getImmediate());return(r=>new Ry(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(th,nh,Py(n)),Sr(th,nh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=5*60,Dy=vf("authIdTokenMaxAge")||Ny;let rh=null;const Oy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dy)return;const i=t==null?void 0:t.token;rh!==i&&(rh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QI(n=Ef()){const e=bl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ov(n,{popupRedirectResolver:Sy,persistence:[Uv,Sv,Kf]}),r=vf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const u=Oy(o.toString());bv(t,u,()=>u(t.currentUser)),Iv(t,h=>u(h))}}const i=gf("auth");return i&&uv(t,`http://${i}`),t}function Ly(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Zm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=mn("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Ly().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ky("Browser");var xy="firebase",Vy="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr(xy,Vy,"app");var My=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nd={exports:{}},Pu={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var ih;function Uy(){return ih||(ih=1,function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:My,function(e,t){var r=[],i=Object.getPrototypeOf,o=r.slice,u=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},h=r.push,g=r.indexOf,m={},E=m.toString,P=m.hasOwnProperty,O=P.toString,F=O.call(Object),L={},V=function(l){return typeof l=="function"&&typeof l.nodeType!="number"&&typeof l.item!="function"},q=function(l){return l!=null&&l===l.window},$=e.document,X={type:!0,src:!0,nonce:!0,noModule:!0};function Q(s,l,f){f=f||$;var p,y,_=f.createElement("script");if(_.text=s,l)for(p in X)y=l[p]||l.getAttribute&&l.getAttribute(p),y&&_.setAttribute(p,y);f.head.appendChild(_).parentNode.removeChild(_)}function Y(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?m[E.call(s)]||"object":typeof s}var ee="3.7.1",J=/HTML$/i,c=function(s,l){return new c.fn.init(s,l)};c.fn=c.prototype={jquery:ee,constructor:c,length:0,toArray:function(){return o.call(this)},get:function(s){return s==null?o.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var l=c.merge(this.constructor(),s);return l.prevObject=this,l},each:function(s){return c.each(this,s)},map:function(s){return this.pushStack(c.map(this,function(l,f){return s.call(l,f,l)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(s,l){return(l+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(s,l){return l%2}))},eq:function(s){var l=this.length,f=+s+(s<0?l:0);return this.pushStack(f>=0&&f<l?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:r.sort,splice:r.splice},c.extend=c.fn.extend=function(){var s,l,f,p,y,_,T=arguments[0]||{},D=1,k=arguments.length,M=!1;for(typeof T=="boolean"&&(M=T,T=arguments[D]||{},D++),typeof T!="object"&&!V(T)&&(T={}),D===k&&(T=this,D--);D<k;D++)if((s=arguments[D])!=null)for(l in s)p=s[l],!(l==="__proto__"||T===p)&&(M&&p&&(c.isPlainObject(p)||(y=Array.isArray(p)))?(f=T[l],y&&!Array.isArray(f)?_=[]:!y&&!c.isPlainObject(f)?_={}:_=f,y=!1,T[l]=c.extend(M,_,p)):p!==void 0&&(T[l]=p));return T},c.extend({expando:"jQuery"+(ee+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var l,f;return!s||E.call(s)!=="[object Object]"?!1:(l=i(s),l?(f=P.call(l,"constructor")&&l.constructor,typeof f=="function"&&O.call(f)===F):!0)},isEmptyObject:function(s){var l;for(l in s)return!1;return!0},globalEval:function(s,l,f){Q(s,{nonce:l&&l.nonce},f)},each:function(s,l){var f,p=0;if(C(s))for(f=s.length;p<f&&l.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(l.call(s[p],p,s[p])===!1)break;return s},text:function(s){var l,f="",p=0,y=s.nodeType;if(!y)for(;l=s[p++];)f+=c.text(l);return y===1||y===11?s.textContent:y===9?s.documentElement.textContent:y===3||y===4?s.nodeValue:f},makeArray:function(s,l){var f=l||[];return s!=null&&(C(Object(s))?c.merge(f,typeof s=="string"?[s]:s):h.call(f,s)),f},inArray:function(s,l,f){return l==null?-1:g.call(l,s,f)},isXMLDoc:function(s){var l=s&&s.namespaceURI,f=s&&(s.ownerDocument||s).documentElement;return!J.test(l||f&&f.nodeName||"HTML")},merge:function(s,l){for(var f=+l.length,p=0,y=s.length;p<f;p++)s[y++]=l[p];return s.length=y,s},grep:function(s,l,f){for(var p,y=[],_=0,T=s.length,D=!f;_<T;_++)p=!l(s[_],_),p!==D&&y.push(s[_]);return y},map:function(s,l,f){var p,y,_=0,T=[];if(C(s))for(p=s.length;_<p;_++)y=l(s[_],_,f),y!=null&&T.push(y);else for(_ in s)y=l(s[_],_,f),y!=null&&T.push(y);return u(T)},guid:1,support:L}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=r[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,l){m["[object "+l+"]"]=l.toLowerCase()});function C(s){var l=!!s&&"length"in s&&s.length,f=Y(s);return V(s)||q(s)?!1:f==="array"||l===0||typeof l=="number"&&l>0&&l-1 in s}function w(s,l){return s.nodeName&&s.nodeName.toLowerCase()===l.toLowerCase()}var A=r.pop,R=r.sort,N=r.splice,I="[\\x20\\t\\r\\n\\f]",de=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g");c.contains=function(s,l){var f=l&&l.parentNode;return s===f||!!(f&&f.nodeType===1&&(s.contains?s.contains(f):s.compareDocumentPosition&&s.compareDocumentPosition(f)&16))};var _e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Je(s,l){return l?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}c.escapeSelector=function(s){return(s+"").replace(_e,Je)};var Se=$,he=h;(function(){var s,l,f,p,y,_=he,T,D,k,M,W,G=c.expando,B=0,Z=0,Ee=Gn(),Ve=Gn(),Te=Gn(),gt=Gn(),ut=function(S,x){return S===x&&(y=!0),0},Xt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Yt="(?:\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ke="\\["+I+"*("+Yt+")(?:"+I+"*([*^$|!~]?=)"+I+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Yt+"))|)"+I+"*\\]",ht=":("+Yt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ke+")*)|.*)\\)|)",Ue=new RegExp(I+"+","g"),st=new RegExp("^"+I+"*,"+I+"*"),sn=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),a=new RegExp(I+"|>"),d=new RegExp(ht),v=new RegExp("^"+Yt+"$"),b={ID:new RegExp("^#("+Yt+")"),CLASS:new RegExp("^\\.("+Yt+")"),TAG:new RegExp("^("+Yt+"|[*])"),ATTR:new RegExp("^"+ke),PSEUDO:new RegExp("^"+ht),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+Xt+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},U=/^(?:input|select|textarea|button)$/i,H=/^h\d$/i,ne=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Qe=/[+~]/,tt=new RegExp("\\\\[\\da-fA-F]{1,6}"+I+"?|\\\\([^\\r\\n\\f])","g"),Pe=function(S,x){var j="0x"+S.slice(1)-65536;return x||(j<0?String.fromCharCode(j+65536):String.fromCharCode(j>>10|55296,j&1023|56320))},wt=function(){mr()},It=zo(function(S){return S.disabled===!0&&w(S,"fieldset")},{dir:"parentNode",next:"legend"});function gr(){try{return T.activeElement}catch{}}try{_.apply(r=o.call(Se.childNodes),Se.childNodes),r[Se.childNodes.length].nodeType}catch{_={apply:function(x,j){he.apply(x,o.call(j))},call:function(x){he.apply(x,o.call(arguments,1))}}}function Ne(S,x,j,z){var K,re,ue,ge,le,Me,we,Ce=x&&x.ownerDocument,Fe=x?x.nodeType:9;if(j=j||[],typeof S!="string"||!S||Fe!==1&&Fe!==9&&Fe!==11)return j;if(!z&&(mr(x),x=x||T,k)){if(Fe!==11&&(le=ne.exec(S)))if(K=le[1]){if(Fe===9)if(ue=x.getElementById(K)){if(ue.id===K)return _.call(j,ue),j}else return j;else if(Ce&&(ue=Ce.getElementById(K))&&Ne.contains(x,ue)&&ue.id===K)return _.call(j,ue),j}else{if(le[2])return _.apply(j,x.getElementsByTagName(S)),j;if((K=le[3])&&x.getElementsByClassName)return _.apply(j,x.getElementsByClassName(K)),j}if(!gt[S+" "]&&(!M||!M.test(S))){if(we=S,Ce=x,Fe===1&&(a.test(S)||sn.test(S))){for(Ce=Qe.test(S)&&vu(x.parentNode)||x,(Ce!=x||!L.scope)&&((ge=x.getAttribute("id"))?ge=c.escapeSelector(ge):x.setAttribute("id",ge=G)),Me=ks(S),re=Me.length;re--;)Me[re]=(ge?"#"+ge:":scope")+" "+Ho(Me[re]);we=Me.join(",")}try{return _.apply(j,Ce.querySelectorAll(we)),j}catch{gt(S,!0)}finally{ge===G&&x.removeAttribute("id")}}}return Rc(S.replace(de,"$1"),x,j,z)}function Gn(){var S=[];function x(j,z){return S.push(j+" ")>l.cacheLength&&delete x[S.shift()],x[j+" "]=z}return x}function jt(S){return S[G]=!0,S}function Oi(S){var x=T.createElement("fieldset");try{return!!S(x)}catch{return!1}finally{x.parentNode&&x.parentNode.removeChild(x),x=null}}function $p(S){return function(x){return w(x,"input")&&x.type===S}}function qp(S){return function(x){return(w(x,"input")||w(x,"button"))&&x.type===S}}function Cc(S){return function(x){return"form"in x?x.parentNode&&x.disabled===!1?"label"in x?"label"in x.parentNode?x.parentNode.disabled===S:x.disabled===S:x.isDisabled===S||x.isDisabled!==!S&&It(x)===S:x.disabled===S:"label"in x?x.disabled===S:!1}}function Xr(S){return jt(function(x){return x=+x,jt(function(j,z){for(var K,re=S([],j.length,x),ue=re.length;ue--;)j[K=re[ue]]&&(j[K]=!(z[K]=j[K]))})})}function vu(S){return S&&typeof S.getElementsByTagName<"u"&&S}function mr(S){var x,j=S?S.ownerDocument||S:Se;return j==T||j.nodeType!==9||!j.documentElement||(T=j,D=T.documentElement,k=!c.isXMLDoc(T),W=D.matches||D.webkitMatchesSelector||D.msMatchesSelector,D.msMatchesSelector&&Se!=T&&(x=T.defaultView)&&x.top!==x&&x.addEventListener("unload",wt),L.getById=Oi(function(z){return D.appendChild(z).id=c.expando,!T.getElementsByName||!T.getElementsByName(c.expando).length}),L.disconnectedMatch=Oi(function(z){return W.call(z,"*")}),L.scope=Oi(function(){return T.querySelectorAll(":scope")}),L.cssHas=Oi(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),L.getById?(l.filter.ID=function(z){var K=z.replace(tt,Pe);return function(re){return re.getAttribute("id")===K}},l.find.ID=function(z,K){if(typeof K.getElementById<"u"&&k){var re=K.getElementById(z);return re?[re]:[]}}):(l.filter.ID=function(z){var K=z.replace(tt,Pe);return function(re){var ue=typeof re.getAttributeNode<"u"&&re.getAttributeNode("id");return ue&&ue.value===K}},l.find.ID=function(z,K){if(typeof K.getElementById<"u"&&k){var re,ue,ge,le=K.getElementById(z);if(le){if(re=le.getAttributeNode("id"),re&&re.value===z)return[le];for(ge=K.getElementsByName(z),ue=0;le=ge[ue++];)if(re=le.getAttributeNode("id"),re&&re.value===z)return[le]}return[]}}),l.find.TAG=function(z,K){return typeof K.getElementsByTagName<"u"?K.getElementsByTagName(z):K.querySelectorAll(z)},l.find.CLASS=function(z,K){if(typeof K.getElementsByClassName<"u"&&k)return K.getElementsByClassName(z)},M=[],Oi(function(z){var K;D.appendChild(z).innerHTML="<a id='"+G+"' href='' disabled='disabled'></a><select id='"+G+"-\r\\' disabled='disabled'><option selected=''></option></select>",z.querySelectorAll("[selected]").length||M.push("\\["+I+"*(?:value|"+Xt+")"),z.querySelectorAll("[id~="+G+"-]").length||M.push("~="),z.querySelectorAll("a#"+G+"+*").length||M.push(".#.+[+~]"),z.querySelectorAll(":checked").length||M.push(":checked"),K=T.createElement("input"),K.setAttribute("type","hidden"),z.appendChild(K).setAttribute("name","D"),D.appendChild(z).disabled=!0,z.querySelectorAll(":disabled").length!==2&&M.push(":enabled",":disabled"),K=T.createElement("input"),K.setAttribute("name",""),z.appendChild(K),z.querySelectorAll("[name='']").length||M.push("\\["+I+"*name"+I+"*="+I+`*(?:''|"")`)}),L.cssHas||M.push(":has"),M=M.length&&new RegExp(M.join("|")),ut=function(z,K){if(z===K)return y=!0,0;var re=!z.compareDocumentPosition-!K.compareDocumentPosition;return re||(re=(z.ownerDocument||z)==(K.ownerDocument||K)?z.compareDocumentPosition(K):1,re&1||!L.sortDetached&&K.compareDocumentPosition(z)===re?z===T||z.ownerDocument==Se&&Ne.contains(Se,z)?-1:K===T||K.ownerDocument==Se&&Ne.contains(Se,K)?1:p?g.call(p,z)-g.call(p,K):0:re&4?-1:1)}),T}Ne.matches=function(S,x){return Ne(S,null,null,x)},Ne.matchesSelector=function(S,x){if(mr(S),k&&!gt[x+" "]&&(!M||!M.test(x)))try{var j=W.call(S,x);if(j||L.disconnectedMatch||S.document&&S.document.nodeType!==11)return j}catch{gt(x,!0)}return Ne(x,T,null,[S]).length>0},Ne.contains=function(S,x){return(S.ownerDocument||S)!=T&&mr(S),c.contains(S,x)},Ne.attr=function(S,x){(S.ownerDocument||S)!=T&&mr(S);var j=l.attrHandle[x.toLowerCase()],z=j&&P.call(l.attrHandle,x.toLowerCase())?j(S,x,!k):void 0;return z!==void 0?z:S.getAttribute(x)},Ne.error=function(S){throw new Error("Syntax error, unrecognized expression: "+S)},c.uniqueSort=function(S){var x,j=[],z=0,K=0;if(y=!L.sortStable,p=!L.sortStable&&o.call(S,0),R.call(S,ut),y){for(;x=S[K++];)x===S[K]&&(z=j.push(K));for(;z--;)N.call(S,j[z],1)}return p=null,S},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(o.apply(this)))},l=c.expr={cacheLength:50,createPseudo:jt,match:b,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(S){return S[1]=S[1].replace(tt,Pe),S[3]=(S[3]||S[4]||S[5]||"").replace(tt,Pe),S[2]==="~="&&(S[3]=" "+S[3]+" "),S.slice(0,4)},CHILD:function(S){return S[1]=S[1].toLowerCase(),S[1].slice(0,3)==="nth"?(S[3]||Ne.error(S[0]),S[4]=+(S[4]?S[5]+(S[6]||1):2*(S[3]==="even"||S[3]==="odd")),S[5]=+(S[7]+S[8]||S[3]==="odd")):S[3]&&Ne.error(S[0]),S},PSEUDO:function(S){var x,j=!S[6]&&S[2];return b.CHILD.test(S[0])?null:(S[3]?S[2]=S[4]||S[5]||"":j&&d.test(j)&&(x=ks(j,!0))&&(x=j.indexOf(")",j.length-x)-j.length)&&(S[0]=S[0].slice(0,x),S[2]=j.slice(0,x)),S.slice(0,3))}},filter:{TAG:function(S){var x=S.replace(tt,Pe).toLowerCase();return S==="*"?function(){return!0}:function(j){return w(j,x)}},CLASS:function(S){var x=Ee[S+" "];return x||(x=new RegExp("(^|"+I+")"+S+"("+I+"|$)"))&&Ee(S,function(j){return x.test(typeof j.className=="string"&&j.className||typeof j.getAttribute<"u"&&j.getAttribute("class")||"")})},ATTR:function(S,x,j){return function(z){var K=Ne.attr(z,S);return K==null?x==="!=":x?(K+="",x==="="?K===j:x==="!="?K!==j:x==="^="?j&&K.indexOf(j)===0:x==="*="?j&&K.indexOf(j)>-1:x==="$="?j&&K.slice(-j.length)===j:x==="~="?(" "+K.replace(Ue," ")+" ").indexOf(j)>-1:x==="|="?K===j||K.slice(0,j.length+1)===j+"-":!1):!0}},CHILD:function(S,x,j,z,K){var re=S.slice(0,3)!=="nth",ue=S.slice(-4)!=="last",ge=x==="of-type";return z===1&&K===0?function(le){return!!le.parentNode}:function(le,Me,we){var Ce,Fe,ve,nt,zt,Nt=re!==ue?"nextSibling":"previousSibling",on=le.parentNode,Sn=ge&&le.nodeName.toLowerCase(),Li=!we&&!ge,Bt=!1;if(on){if(re){for(;Nt;){for(ve=le;ve=ve[Nt];)if(ge?w(ve,Sn):ve.nodeType===1)return!1;zt=Nt=S==="only"&&!zt&&"nextSibling"}return!0}if(zt=[ue?on.firstChild:on.lastChild],ue&&Li){for(Fe=on[G]||(on[G]={}),Ce=Fe[S]||[],nt=Ce[0]===B&&Ce[1],Bt=nt&&Ce[2],ve=nt&&on.childNodes[nt];ve=++nt&&ve&&ve[Nt]||(Bt=nt=0)||zt.pop();)if(ve.nodeType===1&&++Bt&&ve===le){Fe[S]=[B,nt,Bt];break}}else if(Li&&(Fe=le[G]||(le[G]={}),Ce=Fe[S]||[],nt=Ce[0]===B&&Ce[1],Bt=nt),Bt===!1)for(;(ve=++nt&&ve&&ve[Nt]||(Bt=nt=0)||zt.pop())&&!((ge?w(ve,Sn):ve.nodeType===1)&&++Bt&&(Li&&(Fe=ve[G]||(ve[G]={}),Fe[S]=[B,Bt]),ve===le)););return Bt-=K,Bt===z||Bt%z===0&&Bt/z>=0}}},PSEUDO:function(S,x){var j,z=l.pseudos[S]||l.setFilters[S.toLowerCase()]||Ne.error("unsupported pseudo: "+S);return z[G]?z(x):z.length>1?(j=[S,S,"",x],l.setFilters.hasOwnProperty(S.toLowerCase())?jt(function(K,re){for(var ue,ge=z(K,x),le=ge.length;le--;)ue=g.call(K,ge[le]),K[ue]=!(re[ue]=ge[le])}):function(K){return z(K,0,j)}):z}},pseudos:{not:jt(function(S){var x=[],j=[],z=Tu(S.replace(de,"$1"));return z[G]?jt(function(K,re,ue,ge){for(var le,Me=z(K,null,ge,[]),we=K.length;we--;)(le=Me[we])&&(K[we]=!(re[we]=le))}):function(K,re,ue){return x[0]=K,z(x,null,ue,j),x[0]=null,!j.pop()}}),has:jt(function(S){return function(x){return Ne(S,x).length>0}}),contains:jt(function(S){return S=S.replace(tt,Pe),function(x){return(x.textContent||c.text(x)).indexOf(S)>-1}}),lang:jt(function(S){return v.test(S||"")||Ne.error("unsupported lang: "+S),S=S.replace(tt,Pe).toLowerCase(),function(x){var j;do if(j=k?x.lang:x.getAttribute("xml:lang")||x.getAttribute("lang"))return j=j.toLowerCase(),j===S||j.indexOf(S+"-")===0;while((x=x.parentNode)&&x.nodeType===1);return!1}}),target:function(S){var x=e.location&&e.location.hash;return x&&x.slice(1)===S.id},root:function(S){return S===D},focus:function(S){return S===gr()&&T.hasFocus()&&!!(S.type||S.href||~S.tabIndex)},enabled:Cc(!1),disabled:Cc(!0),checked:function(S){return w(S,"input")&&!!S.checked||w(S,"option")&&!!S.selected},selected:function(S){return S.parentNode&&S.parentNode.selectedIndex,S.selected===!0},empty:function(S){for(S=S.firstChild;S;S=S.nextSibling)if(S.nodeType<6)return!1;return!0},parent:function(S){return!l.pseudos.empty(S)},header:function(S){return H.test(S.nodeName)},input:function(S){return U.test(S.nodeName)},button:function(S){return w(S,"input")&&S.type==="button"||w(S,"button")},text:function(S){var x;return w(S,"input")&&S.type==="text"&&((x=S.getAttribute("type"))==null||x.toLowerCase()==="text")},first:Xr(function(){return[0]}),last:Xr(function(S,x){return[x-1]}),eq:Xr(function(S,x,j){return[j<0?j+x:j]}),even:Xr(function(S,x){for(var j=0;j<x;j+=2)S.push(j);return S}),odd:Xr(function(S,x){for(var j=1;j<x;j+=2)S.push(j);return S}),lt:Xr(function(S,x,j){var z;for(j<0?z=j+x:j>x?z=x:z=j;--z>=0;)S.push(z);return S}),gt:Xr(function(S,x,j){for(var z=j<0?j+x:j;++z<x;)S.push(z);return S})}},l.pseudos.nth=l.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})l.pseudos[s]=$p(s);for(s in{submit:!0,reset:!0})l.pseudos[s]=qp(s);function Sc(){}Sc.prototype=l.filters=l.pseudos,l.setFilters=new Sc;function ks(S,x){var j,z,K,re,ue,ge,le,Me=Ve[S+" "];if(Me)return x?0:Me.slice(0);for(ue=S,ge=[],le=l.preFilter;ue;){(!j||(z=st.exec(ue)))&&(z&&(ue=ue.slice(z[0].length)||ue),ge.push(K=[])),j=!1,(z=sn.exec(ue))&&(j=z.shift(),K.push({value:j,type:z[0].replace(de," ")}),ue=ue.slice(j.length));for(re in l.filter)(z=b[re].exec(ue))&&(!le[re]||(z=le[re](z)))&&(j=z.shift(),K.push({value:j,type:re,matches:z}),ue=ue.slice(j.length));if(!j)break}return x?ue.length:ue?Ne.error(S):Ve(S,ge).slice(0)}function Ho(S){for(var x=0,j=S.length,z="";x<j;x++)z+=S[x].value;return z}function zo(S,x,j){var z=x.dir,K=x.next,re=K||z,ue=j&&re==="parentNode",ge=Z++;return x.first?function(le,Me,we){for(;le=le[z];)if(le.nodeType===1||ue)return S(le,Me,we);return!1}:function(le,Me,we){var Ce,Fe,ve=[B,ge];if(we){for(;le=le[z];)if((le.nodeType===1||ue)&&S(le,Me,we))return!0}else for(;le=le[z];)if(le.nodeType===1||ue)if(Fe=le[G]||(le[G]={}),K&&w(le,K))le=le[z]||le;else{if((Ce=Fe[re])&&Ce[0]===B&&Ce[1]===ge)return ve[2]=Ce[2];if(Fe[re]=ve,ve[2]=S(le,Me,we))return!0}return!1}}function yu(S){return S.length>1?function(x,j,z){for(var K=S.length;K--;)if(!S[K](x,j,z))return!1;return!0}:S[0]}function Hp(S,x,j){for(var z=0,K=x.length;z<K;z++)Ne(S,x[z],j);return j}function Wo(S,x,j,z,K){for(var re,ue=[],ge=0,le=S.length,Me=x!=null;ge<le;ge++)(re=S[ge])&&(!j||j(re,z,K))&&(ue.push(re),Me&&x.push(ge));return ue}function _u(S,x,j,z,K,re){return z&&!z[G]&&(z=_u(z)),K&&!K[G]&&(K=_u(K,re)),jt(function(ue,ge,le,Me){var we,Ce,Fe,ve,nt=[],zt=[],Nt=ge.length,on=ue||Hp(x||"*",le.nodeType?[le]:le,[]),Sn=S&&(ue||!x)?Wo(on,nt,S,le,Me):on;if(j?(ve=K||(ue?S:Nt||z)?[]:ge,j(Sn,ve,le,Me)):ve=Sn,z)for(we=Wo(ve,zt),z(we,[],le,Me),Ce=we.length;Ce--;)(Fe=we[Ce])&&(ve[zt[Ce]]=!(Sn[zt[Ce]]=Fe));if(ue){if(K||S){if(K){for(we=[],Ce=ve.length;Ce--;)(Fe=ve[Ce])&&we.push(Sn[Ce]=Fe);K(null,ve=[],we,Me)}for(Ce=ve.length;Ce--;)(Fe=ve[Ce])&&(we=K?g.call(ue,Fe):nt[Ce])>-1&&(ue[we]=!(ge[we]=Fe))}}else ve=Wo(ve===ge?ve.splice(Nt,ve.length):ve),K?K(null,ge,ve,Me):_.apply(ge,ve)})}function Eu(S){for(var x,j,z,K=S.length,re=l.relative[S[0].type],ue=re||l.relative[" "],ge=re?1:0,le=zo(function(Ce){return Ce===x},ue,!0),Me=zo(function(Ce){return g.call(x,Ce)>-1},ue,!0),we=[function(Ce,Fe,ve){var nt=!re&&(ve||Fe!=f)||((x=Fe).nodeType?le(Ce,Fe,ve):Me(Ce,Fe,ve));return x=null,nt}];ge<K;ge++)if(j=l.relative[S[ge].type])we=[zo(yu(we),j)];else{if(j=l.filter[S[ge].type].apply(null,S[ge].matches),j[G]){for(z=++ge;z<K&&!l.relative[S[z].type];z++);return _u(ge>1&&yu(we),ge>1&&Ho(S.slice(0,ge-1).concat({value:S[ge-2].type===" "?"*":""})).replace(de,"$1"),j,ge<z&&Eu(S.slice(ge,z)),z<K&&Eu(S=S.slice(z)),z<K&&Ho(S))}we.push(j)}return yu(we)}function zp(S,x){var j=x.length>0,z=S.length>0,K=function(re,ue,ge,le,Me){var we,Ce,Fe,ve=0,nt="0",zt=re&&[],Nt=[],on=f,Sn=re||z&&l.find.TAG("*",Me),Li=B+=on==null?1:Math.random()||.1,Bt=Sn.length;for(Me&&(f=ue==T||ue||Me);nt!==Bt&&(we=Sn[nt])!=null;nt++){if(z&&we){for(Ce=0,!ue&&we.ownerDocument!=T&&(mr(we),ge=!k);Fe=S[Ce++];)if(Fe(we,ue||T,ge)){_.call(le,we);break}Me&&(B=Li)}j&&((we=!Fe&&we)&&ve--,re&&zt.push(we))}if(ve+=nt,j&&nt!==ve){for(Ce=0;Fe=x[Ce++];)Fe(zt,Nt,ue,ge);if(re){if(ve>0)for(;nt--;)zt[nt]||Nt[nt]||(Nt[nt]=A.call(le));Nt=Wo(Nt)}_.apply(le,Nt),Me&&!re&&Nt.length>0&&ve+x.length>1&&c.uniqueSort(le)}return Me&&(B=Li,f=on),zt};return j?jt(K):K}function Tu(S,x){var j,z=[],K=[],re=Te[S+" "];if(!re){for(x||(x=ks(S)),j=x.length;j--;)re=Eu(x[j]),re[G]?z.push(re):K.push(re);re=Te(S,zp(K,z)),re.selector=S}return re}function Rc(S,x,j,z){var K,re,ue,ge,le,Me=typeof S=="function"&&S,we=!z&&ks(S=Me.selector||S);if(j=j||[],we.length===1){if(re=we[0]=we[0].slice(0),re.length>2&&(ue=re[0]).type==="ID"&&x.nodeType===9&&k&&l.relative[re[1].type]){if(x=(l.find.ID(ue.matches[0].replace(tt,Pe),x)||[])[0],x)Me&&(x=x.parentNode);else return j;S=S.slice(re.shift().value.length)}for(K=b.needsContext.test(S)?0:re.length;K--&&(ue=re[K],!l.relative[ge=ue.type]);)if((le=l.find[ge])&&(z=le(ue.matches[0].replace(tt,Pe),Qe.test(re[0].type)&&vu(x.parentNode)||x))){if(re.splice(K,1),S=z.length&&Ho(re),!S)return _.apply(j,z),j;break}}return(Me||Tu(S,we))(z,x,!k,j,!x||Qe.test(S)&&vu(x.parentNode)||x),j}L.sortStable=G.split("").sort(ut).join("")===G,mr(),L.sortDetached=Oi(function(S){return S.compareDocumentPosition(T.createElement("fieldset"))&1}),c.find=Ne,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,Ne.compile=Tu,Ne.select=Rc,Ne.setDocument=mr,Ne.tokenize=ks,Ne.escape=c.escapeSelector,Ne.getText=c.text,Ne.isXML=c.isXMLDoc,Ne.selectors=c.expr,Ne.support=c.support,Ne.uniqueSort=c.uniqueSort})();var ce=function(s,l,f){for(var p=[],y=f!==void 0;(s=s[l])&&s.nodeType!==9;)if(s.nodeType===1){if(y&&c(s).is(f))break;p.push(s)}return p},ie=function(s,l){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==l&&f.push(s);return f},me=c.expr.match.needsContext,Ae=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function xe(s,l,f){return V(l)?c.grep(s,function(p,y){return!!l.call(p,y,p)!==f}):l.nodeType?c.grep(s,function(p){return p===l!==f}):typeof l!="string"?c.grep(s,function(p){return g.call(l,p)>-1!==f}):c.filter(l,s,f)}c.filter=function(s,l,f){var p=l[0];return f&&(s=":not("+s+")"),l.length===1&&p.nodeType===1?c.find.matchesSelector(p,s)?[p]:[]:c.find.matches(s,c.grep(l,function(y){return y.nodeType===1}))},c.fn.extend({find:function(s){var l,f,p=this.length,y=this;if(typeof s!="string")return this.pushStack(c(s).filter(function(){for(l=0;l<p;l++)if(c.contains(y[l],this))return!0}));for(f=this.pushStack([]),l=0;l<p;l++)c.find(s,y[l],f);return p>1?c.uniqueSort(f):f},filter:function(s){return this.pushStack(xe(this,s||[],!1))},not:function(s){return this.pushStack(xe(this,s||[],!0))},is:function(s){return!!xe(this,typeof s=="string"&&me.test(s)?c(s):s||[],!1).length}});var ot,Et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,se=c.fn.init=function(s,l,f){var p,y;if(!s)return this;if(f=f||ot,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=Et.exec(s),p&&(p[1]||!l))if(p[1]){if(l=l instanceof c?l[0]:l,c.merge(this,c.parseHTML(p[1],l&&l.nodeType?l.ownerDocument||l:$,!0)),Ae.test(p[1])&&c.isPlainObject(l))for(p in l)V(this[p])?this[p](l[p]):this.attr(p,l[p]);return this}else return y=$.getElementById(p[2]),y&&(this[0]=y,this.length=1),this;else return!l||l.jquery?(l||f).find(s):this.constructor(l).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(V(s))return f.ready!==void 0?f.ready(s):s(c)}return c.makeArray(s,this)};se.prototype=c.fn,ot=c($);var je=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(s){var l=c(s,this),f=l.length;return this.filter(function(){for(var p=0;p<f;p++)if(c.contains(this,l[p]))return!0})},closest:function(s,l){var f,p=0,y=this.length,_=[],T=typeof s!="string"&&c(s);if(!me.test(s)){for(;p<y;p++)for(f=this[p];f&&f!==l;f=f.parentNode)if(f.nodeType<11&&(T?T.index(f)>-1:f.nodeType===1&&c.find.matchesSelector(f,s))){_.push(f);break}}return this.pushStack(_.length>1?c.uniqueSort(_):_)},index:function(s){return s?typeof s=="string"?g.call(c(s),this[0]):g.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,l){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(s,l))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function et(s,l){for(;(s=s[l])&&s.nodeType!==1;);return s}c.each({parent:function(s){var l=s.parentNode;return l&&l.nodeType!==11?l:null},parents:function(s){return ce(s,"parentNode")},parentsUntil:function(s,l,f){return ce(s,"parentNode",f)},next:function(s){return et(s,"nextSibling")},prev:function(s){return et(s,"previousSibling")},nextAll:function(s){return ce(s,"nextSibling")},prevAll:function(s){return ce(s,"previousSibling")},nextUntil:function(s,l,f){return ce(s,"nextSibling",f)},prevUntil:function(s,l,f){return ce(s,"previousSibling",f)},siblings:function(s){return ie((s.parentNode||{}).firstChild,s)},children:function(s){return ie(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(w(s,"template")&&(s=s.content||s),c.merge([],s.childNodes))}},function(s,l){c.fn[s]=function(f,p){var y=c.map(this,l,f);return s.slice(-5)!=="Until"&&(p=f),p&&typeof p=="string"&&(y=c.filter(p,y)),this.length>1&&(pt[s]||c.uniqueSort(y),je.test(s)&&y.reverse()),this.pushStack(y)}});var ze=/[^\x20\t\r\n\f]+/g;function _n(s){var l={};return c.each(s.match(ze)||[],function(f,p){l[p]=!0}),l}c.Callbacks=function(s){s=typeof s=="string"?_n(s):c.extend({},s);var l,f,p,y,_=[],T=[],D=-1,k=function(){for(y=y||s.once,p=l=!0;T.length;D=-1)for(f=T.shift();++D<_.length;)_[D].apply(f[0],f[1])===!1&&s.stopOnFalse&&(D=_.length,f=!1);s.memory||(f=!1),l=!1,y&&(f?_=[]:_="")},M={add:function(){return _&&(f&&!l&&(D=_.length-1,T.push(f)),function W(G){c.each(G,function(B,Z){V(Z)?(!s.unique||!M.has(Z))&&_.push(Z):Z&&Z.length&&Y(Z)!=="string"&&W(Z)})}(arguments),f&&!l&&k()),this},remove:function(){return c.each(arguments,function(W,G){for(var B;(B=c.inArray(G,_,B))>-1;)_.splice(B,1),B<=D&&D--}),this},has:function(W){return W?c.inArray(W,_)>-1:_.length>0},empty:function(){return _&&(_=[]),this},disable:function(){return y=T=[],_=f="",this},disabled:function(){return!_},lock:function(){return y=T=[],!f&&!l&&(_=f=""),this},locked:function(){return!!y},fireWith:function(W,G){return y||(G=G||[],G=[W,G.slice?G.slice():G],T.push(G),l||k()),this},fire:function(){return M.fireWith(this,arguments),this},fired:function(){return!!p}};return M};function Vt(s){return s}function ae(s){throw s}function We(s,l,f,p){var y;try{s&&V(y=s.promise)?y.call(s).done(l).fail(f):s&&V(y=s.then)?y.call(s,l,f):l.apply(void 0,[s].slice(p))}catch(_){f.apply(void 0,[_])}}c.extend({Deferred:function(s){var l=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],f="pending",p={state:function(){return f},always:function(){return y.done(arguments).fail(arguments),this},catch:function(_){return p.then(null,_)},pipe:function(){var _=arguments;return c.Deferred(function(T){c.each(l,function(D,k){var M=V(_[k[4]])&&_[k[4]];y[k[1]](function(){var W=M&&M.apply(this,arguments);W&&V(W.promise)?W.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[k[0]+"With"](this,M?[W]:arguments)})}),_=null}).promise()},then:function(_,T,D){var k=0;function M(W,G,B,Z){return function(){var Ee=this,Ve=arguments,Te=function(){var ut,Xt;if(!(W<k)){if(ut=B.apply(Ee,Ve),ut===G.promise())throw new TypeError("Thenable self-resolution");Xt=ut&&(typeof ut=="object"||typeof ut=="function")&&ut.then,V(Xt)?Z?Xt.call(ut,M(k,G,Vt,Z),M(k,G,ae,Z)):(k++,Xt.call(ut,M(k,G,Vt,Z),M(k,G,ae,Z),M(k,G,Vt,G.notifyWith))):(B!==Vt&&(Ee=void 0,Ve=[ut]),(Z||G.resolveWith)(Ee,Ve))}},gt=Z?Te:function(){try{Te()}catch(ut){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(ut,gt.error),W+1>=k&&(B!==ae&&(Ee=void 0,Ve=[ut]),G.rejectWith(Ee,Ve))}};W?gt():(c.Deferred.getErrorHook?gt.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(gt.error=c.Deferred.getStackHook()),e.setTimeout(gt))}}return c.Deferred(function(W){l[0][3].add(M(0,W,V(D)?D:Vt,W.notifyWith)),l[1][3].add(M(0,W,V(_)?_:Vt)),l[2][3].add(M(0,W,V(T)?T:ae))}).promise()},promise:function(_){return _!=null?c.extend(_,p):p}},y={};return c.each(l,function(_,T){var D=T[2],k=T[5];p[T[1]]=D.add,k&&D.add(function(){f=k},l[3-_][2].disable,l[3-_][3].disable,l[0][2].lock,l[0][3].lock),D.add(T[3].fire),y[T[0]]=function(){return y[T[0]+"With"](this===y?void 0:this,arguments),this},y[T[0]+"With"]=D.fireWith}),p.promise(y),s&&s.call(y,y),y},when:function(s){var l=arguments.length,f=l,p=Array(f),y=o.call(arguments),_=c.Deferred(),T=function(D){return function(k){p[D]=this,y[D]=arguments.length>1?o.call(arguments):k,--l||_.resolveWith(p,y)}};if(l<=1&&(We(s,_.done(T(f)).resolve,_.reject,!l),_.state()==="pending"||V(y[f]&&y[f].then)))return _.then();for(;f--;)We(y[f],T(f),_.reject);return _.promise()}});var Mt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(s,l){e.console&&e.console.warn&&s&&Mt.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,l)},c.readyException=function(s){e.setTimeout(function(){throw s})};var qt=c.Deferred();c.fn.ready=function(s){return qt.then(s).catch(function(l){c.readyException(l)}),this},c.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(s!==!0&&--c.readyWait>0)&&qt.resolveWith($,[c]))}}),c.ready.then=qt.then;function Le(){$.removeEventListener("DOMContentLoaded",Le),e.removeEventListener("load",Le),c.ready()}$.readyState==="complete"||$.readyState!=="loading"&&!$.documentElement.doScroll?e.setTimeout(c.ready):($.addEventListener("DOMContentLoaded",Le),e.addEventListener("load",Le));var kt=function(s,l,f,p,y,_,T){var D=0,k=s.length,M=f==null;if(Y(f)==="object"){y=!0;for(D in f)kt(s,l,D,f[D],!0,_,T)}else if(p!==void 0&&(y=!0,V(p)||(T=!0),M&&(T?(l.call(s,p),l=null):(M=l,l=function(W,G,B){return M.call(c(W),B)})),l))for(;D<k;D++)l(s[D],f,T?p:p.call(s[D],D,l(s[D],f)));return y?s:M?l.call(s):k?l(s[0],f):_},pi=/^-ms-/,Fr=/-([a-z])/g;function Co(s,l){return l.toUpperCase()}function Jt(s){return s.replace(pi,"ms-").replace(Fr,Co)}var Mn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function Fn(){this.expando=c.expando+Fn.uid++}Fn.uid=1,Fn.prototype={cache:function(s){var l=s[this.expando];return l||(l={},Mn(s)&&(s.nodeType?s[this.expando]=l:Object.defineProperty(s,this.expando,{value:l,configurable:!0}))),l},set:function(s,l,f){var p,y=this.cache(s);if(typeof l=="string")y[Jt(l)]=f;else for(p in l)y[Jt(p)]=l[p];return y},get:function(s,l){return l===void 0?this.cache(s):s[this.expando]&&s[this.expando][Jt(l)]},access:function(s,l,f){return l===void 0||l&&typeof l=="string"&&f===void 0?this.get(s,l):(this.set(s,l,f),f!==void 0?f:l)},remove:function(s,l){var f,p=s[this.expando];if(p!==void 0){if(l!==void 0)for(Array.isArray(l)?l=l.map(Jt):(l=Jt(l),l=l in p?[l]:l.match(ze)||[]),f=l.length;f--;)delete p[l[f]];(l===void 0||c.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var l=s[this.expando];return l!==void 0&&!c.isEmptyObject(l)}};var pe=new Fn,Ke=new Fn,At=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,gi=/[A-Z]/g;function So(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:At.test(s)?JSON.parse(s):s}function gs(s,l,f){var p;if(f===void 0&&s.nodeType===1)if(p="data-"+l.replace(gi,"-$&").toLowerCase(),f=s.getAttribute(p),typeof f=="string"){try{f=So(f)}catch{}Ke.set(s,l,f)}else f=void 0;return f}c.extend({hasData:function(s){return Ke.hasData(s)||pe.hasData(s)},data:function(s,l,f){return Ke.access(s,l,f)},removeData:function(s,l){Ke.remove(s,l)},_data:function(s,l,f){return pe.access(s,l,f)},_removeData:function(s,l){pe.remove(s,l)}}),c.fn.extend({data:function(s,l){var f,p,y,_=this[0],T=_&&_.attributes;if(s===void 0){if(this.length&&(y=Ke.get(_),_.nodeType===1&&!pe.get(_,"hasDataAttrs"))){for(f=T.length;f--;)T[f]&&(p=T[f].name,p.indexOf("data-")===0&&(p=Jt(p.slice(5)),gs(_,p,y[p])));pe.set(_,"hasDataAttrs",!0)}return y}return typeof s=="object"?this.each(function(){Ke.set(this,s)}):kt(this,function(D){var k;if(_&&D===void 0)return k=Ke.get(_,s),k!==void 0||(k=gs(_,s),k!==void 0)?k:void 0;this.each(function(){Ke.set(this,s,D)})},null,l,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){Ke.remove(this,s)})}}),c.extend({queue:function(s,l,f){var p;if(s)return l=(l||"fx")+"queue",p=pe.get(s,l),f&&(!p||Array.isArray(f)?p=pe.access(s,l,c.makeArray(f)):p.push(f)),p||[]},dequeue:function(s,l){l=l||"fx";var f=c.queue(s,l),p=f.length,y=f.shift(),_=c._queueHooks(s,l),T=function(){c.dequeue(s,l)};y==="inprogress"&&(y=f.shift(),p--),y&&(l==="fx"&&f.unshift("inprogress"),delete _.stop,y.call(s,T,_)),!p&&_&&_.empty.fire()},_queueHooks:function(s,l){var f=l+"queueHooks";return pe.get(s,f)||pe.access(s,f,{empty:c.Callbacks("once memory").add(function(){pe.remove(s,[l+"queue",f])})})}}),c.fn.extend({queue:function(s,l){var f=2;return typeof s!="string"&&(l=s,s="fx",f--),arguments.length<f?c.queue(this[0],s):l===void 0?this:this.each(function(){var p=c.queue(this,s,l);c._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&c.dequeue(this,s)})},dequeue:function(s){return this.each(function(){c.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,l){var f,p=1,y=c.Deferred(),_=this,T=this.length,D=function(){--p||y.resolveWith(_,[_])};for(typeof s!="string"&&(l=s,s=void 0),s=s||"fx";T--;)f=pe.get(_[T],s+"queueHooks"),f&&f.empty&&(p++,f.empty.add(D));return D(),y.promise(l)}});var Ro=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,hn=new RegExp("^(?:([+-])=|)("+Ro+")([a-z%]*)$","i"),Zt=["Top","Right","Bottom","Left"],En=$.documentElement,Tn=function(s){return c.contains(s.ownerDocument,s)},ou={composed:!0};En.getRootNode&&(Tn=function(s){return c.contains(s.ownerDocument,s)||s.getRootNode(ou)===s.ownerDocument});var mi=function(s,l){return s=l||s,s.style.display==="none"||s.style.display===""&&Tn(s)&&c.css(s,"display")==="none"};function vi(s,l,f,p){var y,_,T=20,D=p?function(){return p.cur()}:function(){return c.css(s,l,"")},k=D(),M=f&&f[3]||(c.cssNumber[l]?"":"px"),W=s.nodeType&&(c.cssNumber[l]||M!=="px"&&+k)&&hn.exec(c.css(s,l));if(W&&W[3]!==M){for(k=k/2,M=M||W[3],W=+k||1;T--;)c.style(s,l,W+M),(1-_)*(1-(_=D()/k||.5))<=0&&(T=0),W=W/_;W=W*2,c.style(s,l,W+M),f=f||[]}return f&&(W=+W||+k||0,y=f[1]?W+(f[1]+1)*f[2]:+f[2],p&&(p.unit=M,p.start=W,p.end=y)),y}var ms={};function Po(s){var l,f=s.ownerDocument,p=s.nodeName,y=ms[p];return y||(l=f.body.appendChild(f.createElement(p)),y=c.css(l,"display"),l.parentNode.removeChild(l),y==="none"&&(y="block"),ms[p]=y,y)}function en(s,l){for(var f,p,y=[],_=0,T=s.length;_<T;_++)p=s[_],p.style&&(f=p.style.display,l?(f==="none"&&(y[_]=pe.get(p,"display")||null,y[_]||(p.style.display="")),p.style.display===""&&mi(p)&&(y[_]=Po(p))):f!=="none"&&(y[_]="none",pe.set(p,"display",f)));for(_=0;_<T;_++)y[_]!=null&&(s[_].style.display=y[_]);return s}c.fn.extend({show:function(){return en(this,!0)},hide:function(){return en(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){mi(this)?c(this).show():c(this).hide()})}});var Un=/^(?:checkbox|radio)$/i,yi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,wn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=$.createDocumentFragment(),l=s.appendChild($.createElement("div")),f=$.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),l.appendChild(f),L.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",L.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",L.option=!!l.lastChild})();var Ft={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ft.tbody=Ft.tfoot=Ft.colgroup=Ft.caption=Ft.thead,Ft.th=Ft.td,L.option||(Ft.optgroup=Ft.option=[1,"<select multiple='multiple'>","</select>"]);function vt(s,l){var f;return typeof s.getElementsByTagName<"u"?f=s.getElementsByTagName(l||"*"):typeof s.querySelectorAll<"u"?f=s.querySelectorAll(l||"*"):f=[],l===void 0||l&&w(s,l)?c.merge([s],f):f}function _i(s,l){for(var f=0,p=s.length;f<p;f++)pe.set(s[f],"globalEval",!l||pe.get(l[f],"globalEval"))}var Ur=/<|&#?\w+;/;function vs(s,l,f,p,y){for(var _,T,D,k,M,W,G=l.createDocumentFragment(),B=[],Z=0,Ee=s.length;Z<Ee;Z++)if(_=s[Z],_||_===0)if(Y(_)==="object")c.merge(B,_.nodeType?[_]:_);else if(!Ur.test(_))B.push(l.createTextNode(_));else{for(T=T||G.appendChild(l.createElement("div")),D=(yi.exec(_)||["",""])[1].toLowerCase(),k=Ft[D]||Ft._default,T.innerHTML=k[1]+c.htmlPrefilter(_)+k[2],W=k[0];W--;)T=T.lastChild;c.merge(B,T.childNodes),T=G.firstChild,T.textContent=""}for(G.textContent="",Z=0;_=B[Z++];){if(p&&c.inArray(_,p)>-1){y&&y.push(_);continue}if(M=Tn(_),T=vt(G.appendChild(_),"script"),M&&_i(T),f)for(W=0;_=T[W++];)wn.test(_.type||"")&&f.push(_)}return G}var Tt=/^([^.]*)(?:\.(.+)|)/;function jn(){return!0}function tn(){return!1}function Bn(s,l,f,p,y,_){var T,D;if(typeof l=="object"){typeof f!="string"&&(p=p||f,f=void 0);for(D in l)Bn(s,D,f,p,l[D],_);return s}if(p==null&&y==null?(y=f,p=f=void 0):y==null&&(typeof f=="string"?(y=p,p=void 0):(y=p,p=f,f=void 0)),y===!1)y=tn;else if(!y)return s;return _===1&&(T=y,y=function(k){return c().off(k),T.apply(this,arguments)},y.guid=T.guid||(T.guid=c.guid++)),s.each(function(){c.event.add(this,l,y,p,f)})}c.event={global:{},add:function(s,l,f,p,y){var _,T,D,k,M,W,G,B,Z,Ee,Ve,Te=pe.get(s);if(Mn(s))for(f.handler&&(_=f,f=_.handler,y=_.selector),y&&c.find.matchesSelector(En,y),f.guid||(f.guid=c.guid++),(k=Te.events)||(k=Te.events=Object.create(null)),(T=Te.handle)||(T=Te.handle=function(gt){return typeof c<"u"&&c.event.triggered!==gt.type?c.event.dispatch.apply(s,arguments):void 0}),l=(l||"").match(ze)||[""],M=l.length;M--;)D=Tt.exec(l[M])||[],Z=Ve=D[1],Ee=(D[2]||"").split(".").sort(),Z&&(G=c.event.special[Z]||{},Z=(y?G.delegateType:G.bindType)||Z,G=c.event.special[Z]||{},W=c.extend({type:Z,origType:Ve,data:p,handler:f,guid:f.guid,selector:y,needsContext:y&&c.expr.match.needsContext.test(y),namespace:Ee.join(".")},_),(B=k[Z])||(B=k[Z]=[],B.delegateCount=0,(!G.setup||G.setup.call(s,p,Ee,T)===!1)&&s.addEventListener&&s.addEventListener(Z,T)),G.add&&(G.add.call(s,W),W.handler.guid||(W.handler.guid=f.guid)),y?B.splice(B.delegateCount++,0,W):B.push(W),c.event.global[Z]=!0)},remove:function(s,l,f,p,y){var _,T,D,k,M,W,G,B,Z,Ee,Ve,Te=pe.hasData(s)&&pe.get(s);if(!(!Te||!(k=Te.events))){for(l=(l||"").match(ze)||[""],M=l.length;M--;){if(D=Tt.exec(l[M])||[],Z=Ve=D[1],Ee=(D[2]||"").split(".").sort(),!Z){for(Z in k)c.event.remove(s,Z+l[M],f,p,!0);continue}for(G=c.event.special[Z]||{},Z=(p?G.delegateType:G.bindType)||Z,B=k[Z]||[],D=D[2]&&new RegExp("(^|\\.)"+Ee.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=_=B.length;_--;)W=B[_],(y||Ve===W.origType)&&(!f||f.guid===W.guid)&&(!D||D.test(W.namespace))&&(!p||p===W.selector||p==="**"&&W.selector)&&(B.splice(_,1),W.selector&&B.delegateCount--,G.remove&&G.remove.call(s,W));T&&!B.length&&((!G.teardown||G.teardown.call(s,Ee,Te.handle)===!1)&&c.removeEvent(s,Z,Te.handle),delete k[Z])}c.isEmptyObject(k)&&pe.remove(s,"handle events")}},dispatch:function(s){var l,f,p,y,_,T,D=new Array(arguments.length),k=c.event.fix(s),M=(pe.get(this,"events")||Object.create(null))[k.type]||[],W=c.event.special[k.type]||{};for(D[0]=k,l=1;l<arguments.length;l++)D[l]=arguments[l];if(k.delegateTarget=this,!(W.preDispatch&&W.preDispatch.call(this,k)===!1)){for(T=c.event.handlers.call(this,k,M),l=0;(y=T[l++])&&!k.isPropagationStopped();)for(k.currentTarget=y.elem,f=0;(_=y.handlers[f++])&&!k.isImmediatePropagationStopped();)(!k.rnamespace||_.namespace===!1||k.rnamespace.test(_.namespace))&&(k.handleObj=_,k.data=_.data,p=((c.event.special[_.origType]||{}).handle||_.handler).apply(y.elem,D),p!==void 0&&(k.result=p)===!1&&(k.preventDefault(),k.stopPropagation()));return W.postDispatch&&W.postDispatch.call(this,k),k.result}},handlers:function(s,l){var f,p,y,_,T,D=[],k=l.delegateCount,M=s.target;if(k&&M.nodeType&&!(s.type==="click"&&s.button>=1)){for(;M!==this;M=M.parentNode||this)if(M.nodeType===1&&!(s.type==="click"&&M.disabled===!0)){for(_=[],T={},f=0;f<k;f++)p=l[f],y=p.selector+" ",T[y]===void 0&&(T[y]=p.needsContext?c(y,this).index(M)>-1:c.find(y,this,null,[M]).length),T[y]&&_.push(p);_.length&&D.push({elem:M,handlers:_})}}return M=this,k<l.length&&D.push({elem:M,handlers:l.slice(k)}),D},addProp:function(s,l){Object.defineProperty(c.Event.prototype,s,{enumerable:!0,configurable:!0,get:V(l)?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(f){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(s){return s[c.expando]?s:new c.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var l=this||s;return Un.test(l.type)&&l.click&&w(l,"input")&&Ei(l,"click",!0),!1},trigger:function(s){var l=this||s;return Un.test(l.type)&&l.click&&w(l,"input")&&Ei(l,"click"),!0},_default:function(s){var l=s.target;return Un.test(l.type)&&l.click&&w(l,"input")&&pe.get(l,"click")||w(l,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Ei(s,l,f){if(!f){pe.get(s,l)===void 0&&c.event.add(s,l,jn);return}pe.set(s,l,!1),c.event.add(s,l,{namespace:!1,handler:function(p){var y,_=pe.get(this,l);if(p.isTrigger&1&&this[l]){if(_)(c.event.special[l]||{}).delegateType&&p.stopPropagation();else if(_=o.call(arguments),pe.set(this,l,_),this[l](),y=pe.get(this,l),pe.set(this,l,!1),_!==y)return p.stopImmediatePropagation(),p.preventDefault(),y}else _&&(pe.set(this,l,c.event.trigger(_[0],_.slice(1),this)),p.stopPropagation(),p.isImmediatePropagationStopped=jn)}})}c.removeEvent=function(s,l,f){s.removeEventListener&&s.removeEventListener(l,f)},c.Event=function(s,l){if(!(this instanceof c.Event))return new c.Event(s,l);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?jn:tn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,l&&c.extend(this,l),this.timeStamp=s&&s.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:tn,isPropagationStopped:tn,isImmediatePropagationStopped:tn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=jn,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=jn,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=jn,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(s,l){function f(p){if($.documentMode){var y=pe.get(this,"handle"),_=c.event.fix(p);_.type=p.type==="focusin"?"focus":"blur",_.isSimulated=!0,y(p),_.target===_.currentTarget&&y(_)}else c.event.simulate(l,p.target,c.event.fix(p))}c.event.special[s]={setup:function(){var p;if(Ei(this,s,!0),$.documentMode)p=pe.get(this,l),p||this.addEventListener(l,f),pe.set(this,l,(p||0)+1);else return!1},trigger:function(){return Ei(this,s),!0},teardown:function(){var p;if($.documentMode)p=pe.get(this,l)-1,p?pe.set(this,l,p):(this.removeEventListener(l,f),pe.remove(this,l));else return!1},_default:function(p){return pe.get(p.target,s)},delegateType:l},c.event.special[l]={setup:function(){var p=this.ownerDocument||this.document||this,y=$.documentMode?this:p,_=pe.get(y,l);_||($.documentMode?this.addEventListener(l,f):p.addEventListener(s,f,!0)),pe.set(y,l,(_||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,y=$.documentMode?this:p,_=pe.get(y,l)-1;_?pe.set(y,l,_):($.documentMode?this.removeEventListener(l,f):p.removeEventListener(s,f,!0),pe.remove(y,l))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,l){c.event.special[s]={delegateType:l,bindType:l,handle:function(f){var p,y=this,_=f.relatedTarget,T=f.handleObj;return(!_||_!==y&&!c.contains(y,_))&&(f.type=T.origType,p=T.handler.apply(this,arguments),f.type=l),p}}}),c.fn.extend({on:function(s,l,f,p){return Bn(this,s,l,f,p)},one:function(s,l,f,p){return Bn(this,s,l,f,p,1)},off:function(s,l,f){var p,y;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,c(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(y in s)this.off(y,l,s[y]);return this}return(l===!1||typeof l=="function")&&(f=l,l=void 0),f===!1&&(f=tn),this.each(function(){c.event.remove(this,s,f,l)})}});var au=/<script|<style|<link/i,cr=/checked\s*(?:[^=]|=\s*.checked.)/i,uu=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ko(s,l){return w(s,"table")&&w(l.nodeType!==11?l:l.firstChild,"tr")&&c(s).children("tbody")[0]||s}function Ti(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function No(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function wi(s,l){var f,p,y,_,T,D,k;if(l.nodeType===1){if(pe.hasData(s)&&(_=pe.get(s),k=_.events,k)){pe.remove(l,"handle events");for(y in k)for(f=0,p=k[y].length;f<p;f++)c.event.add(l,y,k[y][f])}Ke.hasData(s)&&(T=Ke.access(s),D=c.extend({},T),Ke.set(l,D))}}function Ii(s,l){var f=l.nodeName.toLowerCase();f==="input"&&Un.test(s.type)?l.checked=s.checked:(f==="input"||f==="textarea")&&(l.defaultValue=s.defaultValue)}function Ut(s,l,f,p){l=u(l);var y,_,T,D,k,M,W=0,G=s.length,B=G-1,Z=l[0],Ee=V(Z);if(Ee||G>1&&typeof Z=="string"&&!L.checkClone&&cr.test(Z))return s.each(function(Ve){var Te=s.eq(Ve);Ee&&(l[0]=Z.call(this,Ve,Te.html())),Ut(Te,l,f,p)});if(G&&(y=vs(l,s[0].ownerDocument,!1,s,p),_=y.firstChild,y.childNodes.length===1&&(y=_),_||p)){for(T=c.map(vt(y,"script"),Ti),D=T.length;W<G;W++)k=y,W!==B&&(k=c.clone(k,!0,!0),D&&c.merge(T,vt(k,"script"))),f.call(s[W],k,W);if(D)for(M=T[T.length-1].ownerDocument,c.map(T,No),W=0;W<D;W++)k=T[W],wn.test(k.type||"")&&!pe.access(k,"globalEval")&&c.contains(M,k)&&(k.src&&(k.type||"").toLowerCase()!=="module"?c._evalUrl&&!k.noModule&&c._evalUrl(k.src,{nonce:k.nonce||k.getAttribute("nonce")},M):Q(k.textContent.replace(uu,""),k,M))}return s}function ys(s,l,f){for(var p,y=l?c.filter(l,s):s,_=0;(p=y[_])!=null;_++)!f&&p.nodeType===1&&c.cleanData(vt(p)),p.parentNode&&(f&&Tn(p)&&_i(vt(p,"script")),p.parentNode.removeChild(p));return s}c.extend({htmlPrefilter:function(s){return s},clone:function(s,l,f){var p,y,_,T,D=s.cloneNode(!0),k=Tn(s);if(!L.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!c.isXMLDoc(s))for(T=vt(D),_=vt(s),p=0,y=_.length;p<y;p++)Ii(_[p],T[p]);if(l)if(f)for(_=_||vt(s),T=T||vt(D),p=0,y=_.length;p<y;p++)wi(_[p],T[p]);else wi(s,D);return T=vt(D,"script"),T.length>0&&_i(T,!k&&vt(s,"script")),D},cleanData:function(s){for(var l,f,p,y=c.event.special,_=0;(f=s[_])!==void 0;_++)if(Mn(f)){if(l=f[pe.expando]){if(l.events)for(p in l.events)y[p]?c.event.remove(f,p):c.removeEvent(f,p,l.handle);f[pe.expando]=void 0}f[Ke.expando]&&(f[Ke.expando]=void 0)}}}),c.fn.extend({detach:function(s){return ys(this,s,!0)},remove:function(s){return ys(this,s)},text:function(s){return kt(this,function(l){return l===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=l)})},null,s,arguments.length)},append:function(){return Ut(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=ko(this,s);l.appendChild(s)}})},prepend:function(){return Ut(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=ko(this,s);l.insertBefore(s,l.firstChild)}})},before:function(){return Ut(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return Ut(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,l=0;(s=this[l])!=null;l++)s.nodeType===1&&(c.cleanData(vt(s,!1)),s.textContent="");return this},clone:function(s,l){return s=s??!1,l=l??s,this.map(function(){return c.clone(this,s,l)})},html:function(s){return kt(this,function(l){var f=this[0]||{},p=0,y=this.length;if(l===void 0&&f.nodeType===1)return f.innerHTML;if(typeof l=="string"&&!au.test(l)&&!Ft[(yi.exec(l)||["",""])[1].toLowerCase()]){l=c.htmlPrefilter(l);try{for(;p<y;p++)f=this[p]||{},f.nodeType===1&&(c.cleanData(vt(f,!1)),f.innerHTML=l);f=0}catch{}}f&&this.empty().append(l)},null,s,arguments.length)},replaceWith:function(){var s=[];return Ut(this,arguments,function(l){var f=this.parentNode;c.inArray(this,s)<0&&(c.cleanData(vt(this)),f&&f.replaceChild(l,this))},s)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,l){c.fn[s]=function(f){for(var p,y=[],_=c(f),T=_.length-1,D=0;D<=T;D++)p=D===T?this:this.clone(!0),c(_[D])[l](p),h.apply(y,p.get());return this.pushStack(y)}});var bi=new RegExp("^("+Ro+")(?!px)[a-z%]+$","i"),jr=/^--/,hr=function(s){var l=s.ownerDocument.defaultView;return(!l||!l.opener)&&(l=e),l.getComputedStyle(s)},_s=function(s,l,f){var p,y,_={};for(y in l)_[y]=s.style[y],s.style[y]=l[y];p=f.call(s);for(y in l)s.style[y]=_[y];return p},Do=new RegExp(Zt.join("|"),"i");(function(){function s(){if(M){k.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",M.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",En.appendChild(k).appendChild(M);var W=e.getComputedStyle(M);f=W.top!=="1%",D=l(W.marginLeft)===12,M.style.right="60%",_=l(W.right)===36,p=l(W.width)===36,M.style.position="absolute",y=l(M.offsetWidth/3)===12,En.removeChild(k),M=null}}function l(W){return Math.round(parseFloat(W))}var f,p,y,_,T,D,k=$.createElement("div"),M=$.createElement("div");M.style&&(M.style.backgroundClip="content-box",M.cloneNode(!0).style.backgroundClip="",L.clearCloneStyle=M.style.backgroundClip==="content-box",c.extend(L,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),_},pixelPosition:function(){return s(),f},reliableMarginLeft:function(){return s(),D},scrollboxSize:function(){return s(),y},reliableTrDimensions:function(){var W,G,B,Z;return T==null&&(W=$.createElement("table"),G=$.createElement("tr"),B=$.createElement("div"),W.style.cssText="position:absolute;left:-11111px;border-collapse:separate",G.style.cssText="box-sizing:content-box;border:1px solid",G.style.height="1px",B.style.height="9px",B.style.display="block",En.appendChild(W).appendChild(G).appendChild(B),Z=e.getComputedStyle(G),T=parseInt(Z.height,10)+parseInt(Z.borderTopWidth,10)+parseInt(Z.borderBottomWidth,10)===G.offsetHeight,En.removeChild(W)),T}}))})();function Br(s,l,f){var p,y,_,T,D=jr.test(l),k=s.style;return f=f||hr(s),f&&(T=f.getPropertyValue(l)||f[l],D&&T&&(T=T.replace(de,"$1")||void 0),T===""&&!Tn(s)&&(T=c.style(s,l)),!L.pixelBoxStyles()&&bi.test(T)&&Do.test(l)&&(p=k.width,y=k.minWidth,_=k.maxWidth,k.minWidth=k.maxWidth=k.width=T,T=f.width,k.width=p,k.minWidth=y,k.maxWidth=_)),T!==void 0?T+"":T}function $r(s,l){return{get:function(){if(s()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}var Es=["Webkit","Moz","ms"],Ai=$.createElement("div").style,fr={};function $n(s){for(var l=s[0].toUpperCase()+s.slice(1),f=Es.length;f--;)if(s=Es[f]+l,s in Ai)return s}function qr(s){var l=c.cssProps[s]||fr[s];return l||(s in Ai?s:fr[s]=$n(s)||s)}var lu=/^(none|table(?!-c[ea]).+)/,Oo={position:"absolute",visibility:"hidden",display:"block"},Ts={letterSpacing:"0",fontWeight:"400"};function ws(s,l,f){var p=hn.exec(l);return p?Math.max(0,p[2]-(f||0))+(p[3]||"px"):l}function Hr(s,l,f,p,y,_){var T=l==="width"?1:0,D=0,k=0,M=0;if(f===(p?"border":"content"))return 0;for(;T<4;T+=2)f==="margin"&&(M+=c.css(s,f+Zt[T],!0,y)),p?(f==="content"&&(k-=c.css(s,"padding"+Zt[T],!0,y)),f!=="margin"&&(k-=c.css(s,"border"+Zt[T]+"Width",!0,y))):(k+=c.css(s,"padding"+Zt[T],!0,y),f!=="padding"?k+=c.css(s,"border"+Zt[T]+"Width",!0,y):D+=c.css(s,"border"+Zt[T]+"Width",!0,y));return!p&&_>=0&&(k+=Math.max(0,Math.ceil(s["offset"+l[0].toUpperCase()+l.slice(1)]-_-k-D-.5))||0),k+M}function Ci(s,l,f){var p=hr(s),y=!L.boxSizingReliable()||f,_=y&&c.css(s,"boxSizing",!1,p)==="border-box",T=_,D=Br(s,l,p),k="offset"+l[0].toUpperCase()+l.slice(1);if(bi.test(D)){if(!f)return D;D="auto"}return(!L.boxSizingReliable()&&_||!L.reliableTrDimensions()&&w(s,"tr")||D==="auto"||!parseFloat(D)&&c.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(_=c.css(s,"boxSizing",!1,p)==="border-box",T=k in s,T&&(D=s[k])),D=parseFloat(D)||0,D+Hr(s,l,f||(_?"border":"content"),T,p,D)+"px"}c.extend({cssHooks:{opacity:{get:function(s,l){if(l){var f=Br(s,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,l,f,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var y,_,T,D=Jt(l),k=jr.test(l),M=s.style;if(k||(l=qr(D)),T=c.cssHooks[l]||c.cssHooks[D],f!==void 0){if(_=typeof f,_==="string"&&(y=hn.exec(f))&&y[1]&&(f=vi(s,l,y),_="number"),f==null||f!==f)return;_==="number"&&!k&&(f+=y&&y[3]||(c.cssNumber[D]?"":"px")),!L.clearCloneStyle&&f===""&&l.indexOf("background")===0&&(M[l]="inherit"),(!T||!("set"in T)||(f=T.set(s,f,p))!==void 0)&&(k?M.setProperty(l,f):M[l]=f)}else return T&&"get"in T&&(y=T.get(s,!1,p))!==void 0?y:M[l]}},css:function(s,l,f,p){var y,_,T,D=Jt(l),k=jr.test(l);return k||(l=qr(D)),T=c.cssHooks[l]||c.cssHooks[D],T&&"get"in T&&(y=T.get(s,!0,f)),y===void 0&&(y=Br(s,l,p)),y==="normal"&&l in Ts&&(y=Ts[l]),f===""||f?(_=parseFloat(y),f===!0||isFinite(_)?_||0:y):y}}),c.each(["height","width"],function(s,l){c.cssHooks[l]={get:function(f,p,y){if(p)return lu.test(c.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?_s(f,Oo,function(){return Ci(f,l,y)}):Ci(f,l,y)},set:function(f,p,y){var _,T=hr(f),D=!L.scrollboxSize()&&T.position==="absolute",k=D||y,M=k&&c.css(f,"boxSizing",!1,T)==="border-box",W=y?Hr(f,l,y,M,T):0;return M&&D&&(W-=Math.ceil(f["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(T[l])-Hr(f,l,"border",!1,T)-.5)),W&&(_=hn.exec(p))&&(_[3]||"px")!=="px"&&(f.style[l]=p,p=c.css(f,l)),ws(f,p,W)}}}),c.cssHooks.marginLeft=$r(L.reliableMarginLeft,function(s,l){if(l)return(parseFloat(Br(s,"marginLeft"))||s.getBoundingClientRect().left-_s(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(s,l){c.cssHooks[s+l]={expand:function(f){for(var p=0,y={},_=typeof f=="string"?f.split(" "):[f];p<4;p++)y[s+Zt[p]+l]=_[p]||_[p-2]||_[0];return y}},s!=="margin"&&(c.cssHooks[s+l].set=ws)}),c.fn.extend({css:function(s,l){return kt(this,function(f,p,y){var _,T,D={},k=0;if(Array.isArray(p)){for(_=hr(f),T=p.length;k<T;k++)D[p[k]]=c.css(f,p[k],!1,_);return D}return y!==void 0?c.style(f,p,y):c.css(f,p)},s,l,arguments.length>1)}});function Ct(s,l,f,p,y){return new Ct.prototype.init(s,l,f,p,y)}c.Tween=Ct,Ct.prototype={constructor:Ct,init:function(s,l,f,p,y,_){this.elem=s,this.prop=f,this.easing=y||c.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=p,this.unit=_||(c.cssNumber[f]?"":"px")},cur:function(){var s=Ct.propHooks[this.prop];return s&&s.get?s.get(this):Ct.propHooks._default.get(this)},run:function(s){var l,f=Ct.propHooks[this.prop];return this.options.duration?this.pos=l=c.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=l=s,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):Ct.propHooks._default.set(this),this}},Ct.prototype.init.prototype=Ct.prototype,Ct.propHooks={_default:{get:function(s){var l;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(l=c.css(s.elem,s.prop,""),!l||l==="auto"?0:l)},set:function(s){c.fx.step[s.prop]?c.fx.step[s.prop](s):s.elem.nodeType===1&&(c.cssHooks[s.prop]||s.elem.style[qr(s.prop)]!=null)?c.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ct.propHooks.scrollTop=Ct.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},c.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},c.fx=Ct.prototype.init,c.fx.step={};var qn,Si,cu=/^(?:toggle|show|hide)$/,Lo=/queueHooks$/;function Ri(){Si&&($.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Ri):e.setTimeout(Ri,c.fx.interval),c.fx.tick())}function xo(){return e.setTimeout(function(){qn=void 0}),qn=Date.now()}function nn(s,l){var f,p=0,y={height:s};for(l=l?1:0;p<4;p+=2-l)f=Zt[p],y["margin"+f]=y["padding"+f]=s;return l&&(y.opacity=y.width=s),y}function rn(s,l,f){for(var p,y=(Ht.tweeners[l]||[]).concat(Ht.tweeners["*"]),_=0,T=y.length;_<T;_++)if(p=y[_].call(f,l,s))return p}function Pi(s,l,f){var p,y,_,T,D,k,M,W,G="width"in l||"height"in l,B=this,Z={},Ee=s.style,Ve=s.nodeType&&mi(s),Te=pe.get(s,"fxshow");f.queue||(T=c._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,D=T.empty.fire,T.empty.fire=function(){T.unqueued||D()}),T.unqueued++,B.always(function(){B.always(function(){T.unqueued--,c.queue(s,"fx").length||T.empty.fire()})}));for(p in l)if(y=l[p],cu.test(y)){if(delete l[p],_=_||y==="toggle",y===(Ve?"hide":"show"))if(y==="show"&&Te&&Te[p]!==void 0)Ve=!0;else continue;Z[p]=Te&&Te[p]||c.style(s,p)}if(k=!c.isEmptyObject(l),!(!k&&c.isEmptyObject(Z))){G&&s.nodeType===1&&(f.overflow=[Ee.overflow,Ee.overflowX,Ee.overflowY],M=Te&&Te.display,M==null&&(M=pe.get(s,"display")),W=c.css(s,"display"),W==="none"&&(M?W=M:(en([s],!0),M=s.style.display||M,W=c.css(s,"display"),en([s]))),(W==="inline"||W==="inline-block"&&M!=null)&&c.css(s,"float")==="none"&&(k||(B.done(function(){Ee.display=M}),M==null&&(W=Ee.display,M=W==="none"?"":W)),Ee.display="inline-block")),f.overflow&&(Ee.overflow="hidden",B.always(function(){Ee.overflow=f.overflow[0],Ee.overflowX=f.overflow[1],Ee.overflowY=f.overflow[2]})),k=!1;for(p in Z)k||(Te?"hidden"in Te&&(Ve=Te.hidden):Te=pe.access(s,"fxshow",{display:M}),_&&(Te.hidden=!Ve),Ve&&en([s],!0),B.done(function(){Ve||en([s]),pe.remove(s,"fxshow");for(p in Z)c.style(s,p,Z[p])})),k=rn(Ve?Te[p]:0,p,B),p in Te||(Te[p]=k.start,Ve&&(k.end=k.start,k.start=0))}}function ki(s,l){var f,p,y,_,T;for(f in s)if(p=Jt(f),y=l[p],_=s[f],Array.isArray(_)&&(y=_[1],_=s[f]=_[0]),f!==p&&(s[p]=_,delete s[f]),T=c.cssHooks[p],T&&"expand"in T){_=T.expand(_),delete s[p];for(f in _)f in s||(s[f]=_[f],l[f]=y)}else l[p]=y}function Ht(s,l,f){var p,y,_=0,T=Ht.prefilters.length,D=c.Deferred().always(function(){delete k.elem}),k=function(){if(y)return!1;for(var G=qn||xo(),B=Math.max(0,M.startTime+M.duration-G),Z=B/M.duration||0,Ee=1-Z,Ve=0,Te=M.tweens.length;Ve<Te;Ve++)M.tweens[Ve].run(Ee);return D.notifyWith(s,[M,Ee,B]),Ee<1&&Te?B:(Te||D.notifyWith(s,[M,1,0]),D.resolveWith(s,[M]),!1)},M=D.promise({elem:s,props:c.extend({},l),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},f),originalProperties:l,originalOptions:f,startTime:qn||xo(),duration:f.duration,tweens:[],createTween:function(G,B){var Z=c.Tween(s,M.opts,G,B,M.opts.specialEasing[G]||M.opts.easing);return M.tweens.push(Z),Z},stop:function(G){var B=0,Z=G?M.tweens.length:0;if(y)return this;for(y=!0;B<Z;B++)M.tweens[B].run(1);return G?(D.notifyWith(s,[M,1,0]),D.resolveWith(s,[M,G])):D.rejectWith(s,[M,G]),this}}),W=M.props;for(ki(W,M.opts.specialEasing);_<T;_++)if(p=Ht.prefilters[_].call(M,s,W,M.opts),p)return V(p.stop)&&(c._queueHooks(M.elem,M.opts.queue).stop=p.stop.bind(p)),p;return c.map(W,rn,M),V(M.opts.start)&&M.opts.start.call(s,M),M.progress(M.opts.progress).done(M.opts.done,M.opts.complete).fail(M.opts.fail).always(M.opts.always),c.fx.timer(c.extend(k,{elem:s,anim:M,queue:M.opts.queue})),M}c.Animation=c.extend(Ht,{tweeners:{"*":[function(s,l){var f=this.createTween(s,l);return vi(f.elem,s,hn.exec(l),f),f}]},tweener:function(s,l){V(s)?(l=s,s=["*"]):s=s.match(ze);for(var f,p=0,y=s.length;p<y;p++)f=s[p],Ht.tweeners[f]=Ht.tweeners[f]||[],Ht.tweeners[f].unshift(l)},prefilters:[Pi],prefilter:function(s,l){l?Ht.prefilters.unshift(s):Ht.prefilters.push(s)}}),c.speed=function(s,l,f){var p=s&&typeof s=="object"?c.extend({},s):{complete:f||!f&&l||V(s)&&s,duration:s,easing:f&&l||l&&!V(l)&&l};return c.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in c.fx.speeds?p.duration=c.fx.speeds[p.duration]:p.duration=c.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){V(p.old)&&p.old.call(this),p.queue&&c.dequeue(this,p.queue)},p},c.fn.extend({fadeTo:function(s,l,f,p){return this.filter(mi).css("opacity",0).show().end().animate({opacity:l},s,f,p)},animate:function(s,l,f,p){var y=c.isEmptyObject(s),_=c.speed(l,f,p),T=function(){var D=Ht(this,c.extend({},s),_);(y||pe.get(this,"finish"))&&D.stop(!0)};return T.finish=T,y||_.queue===!1?this.each(T):this.queue(_.queue,T)},stop:function(s,l,f){var p=function(y){var _=y.stop;delete y.stop,_(f)};return typeof s!="string"&&(f=l,l=s,s=void 0),l&&this.queue(s||"fx",[]),this.each(function(){var y=!0,_=s!=null&&s+"queueHooks",T=c.timers,D=pe.get(this);if(_)D[_]&&D[_].stop&&p(D[_]);else for(_ in D)D[_]&&D[_].stop&&Lo.test(_)&&p(D[_]);for(_=T.length;_--;)T[_].elem===this&&(s==null||T[_].queue===s)&&(T[_].anim.stop(f),y=!1,T.splice(_,1));(y||!f)&&c.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var l,f=pe.get(this),p=f[s+"queue"],y=f[s+"queueHooks"],_=c.timers,T=p?p.length:0;for(f.finish=!0,c.queue(this,s,[]),y&&y.stop&&y.stop.call(this,!0),l=_.length;l--;)_[l].elem===this&&_[l].queue===s&&(_[l].anim.stop(!0),_.splice(l,1));for(l=0;l<T;l++)p[l]&&p[l].finish&&p[l].finish.call(this);delete f.finish})}}),c.each(["toggle","show","hide"],function(s,l){var f=c.fn[l];c.fn[l]=function(p,y,_){return p==null||typeof p=="boolean"?f.apply(this,arguments):this.animate(nn(l,!0),p,y,_)}}),c.each({slideDown:nn("show"),slideUp:nn("hide"),slideToggle:nn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,l){c.fn[s]=function(f,p,y){return this.animate(l,f,p,y)}}),c.timers=[],c.fx.tick=function(){var s,l=0,f=c.timers;for(qn=Date.now();l<f.length;l++)s=f[l],!s()&&f[l]===s&&f.splice(l--,1);f.length||c.fx.stop(),qn=void 0},c.fx.timer=function(s){c.timers.push(s),c.fx.start()},c.fx.interval=13,c.fx.start=function(){Si||(Si=!0,Ri())},c.fx.stop=function(){Si=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(s,l){return s=c.fx&&c.fx.speeds[s]||s,l=l||"fx",this.queue(l,function(f,p){var y=e.setTimeout(f,s);p.stop=function(){e.clearTimeout(y)}})},function(){var s=$.createElement("input"),l=$.createElement("select"),f=l.appendChild($.createElement("option"));s.type="checkbox",L.checkOn=s.value!=="",L.optSelected=f.selected,s=$.createElement("input"),s.value="t",s.type="radio",L.radioValue=s.value==="t"}();var Ze,In=c.expr.attrHandle;c.fn.extend({attr:function(s,l){return kt(this,c.attr,s,l,arguments.length>1)},removeAttr:function(s){return this.each(function(){c.removeAttr(this,s)})}}),c.extend({attr:function(s,l,f){var p,y,_=s.nodeType;if(!(_===3||_===8||_===2)){if(typeof s.getAttribute>"u")return c.prop(s,l,f);if((_!==1||!c.isXMLDoc(s))&&(y=c.attrHooks[l.toLowerCase()]||(c.expr.match.bool.test(l)?Ze:void 0)),f!==void 0){if(f===null){c.removeAttr(s,l);return}return y&&"set"in y&&(p=y.set(s,f,l))!==void 0?p:(s.setAttribute(l,f+""),f)}return y&&"get"in y&&(p=y.get(s,l))!==null?p:(p=c.find.attr(s,l),p??void 0)}},attrHooks:{type:{set:function(s,l){if(!L.radioValue&&l==="radio"&&w(s,"input")){var f=s.value;return s.setAttribute("type",l),f&&(s.value=f),l}}}},removeAttr:function(s,l){var f,p=0,y=l&&l.match(ze);if(y&&s.nodeType===1)for(;f=y[p++];)s.removeAttribute(f)}}),Ze={set:function(s,l,f){return l===!1?c.removeAttr(s,f):s.setAttribute(f,f),f}},c.each(c.expr.match.bool.source.match(/\w+/g),function(s,l){var f=In[l]||c.find.attr;In[l]=function(p,y,_){var T,D,k=y.toLowerCase();return _||(D=In[k],In[k]=T,T=f(p,y,_)!=null?k:null,In[k]=D),T}});var zr=/^(?:input|select|textarea|button)$/i,Wr=/^(?:a|area)$/i;c.fn.extend({prop:function(s,l){return kt(this,c.prop,s,l,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[c.propFix[s]||s]})}}),c.extend({prop:function(s,l,f){var p,y,_=s.nodeType;if(!(_===3||_===8||_===2))return(_!==1||!c.isXMLDoc(s))&&(l=c.propFix[l]||l,y=c.propHooks[l]),f!==void 0?y&&"set"in y&&(p=y.set(s,f,l))!==void 0?p:s[l]=f:y&&"get"in y&&(p=y.get(s,l))!==null?p:s[l]},propHooks:{tabIndex:{get:function(s){var l=c.find.attr(s,"tabindex");return l?parseInt(l,10):zr.test(s.nodeName)||Wr.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),L.optSelected||(c.propHooks.selected={get:function(s){var l=s.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(s){var l=s.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function Hn(s){var l=s.match(ze)||[];return l.join(" ")}function bn(s){return s.getAttribute&&s.getAttribute("class")||""}function Is(s){return Array.isArray(s)?s:typeof s=="string"?s.match(ze)||[]:[]}c.fn.extend({addClass:function(s){var l,f,p,y,_,T;return V(s)?this.each(function(D){c(this).addClass(s.call(this,D,bn(this)))}):(l=Is(s),l.length?this.each(function(){if(p=bn(this),f=this.nodeType===1&&" "+Hn(p)+" ",f){for(_=0;_<l.length;_++)y=l[_],f.indexOf(" "+y+" ")<0&&(f+=y+" ");T=Hn(f),p!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var l,f,p,y,_,T;return V(s)?this.each(function(D){c(this).removeClass(s.call(this,D,bn(this)))}):arguments.length?(l=Is(s),l.length?this.each(function(){if(p=bn(this),f=this.nodeType===1&&" "+Hn(p)+" ",f){for(_=0;_<l.length;_++)for(y=l[_];f.indexOf(" "+y+" ")>-1;)f=f.replace(" "+y+" "," ");T=Hn(f),p!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,l){var f,p,y,_,T=typeof s,D=T==="string"||Array.isArray(s);return V(s)?this.each(function(k){c(this).toggleClass(s.call(this,k,bn(this),l),l)}):typeof l=="boolean"&&D?l?this.addClass(s):this.removeClass(s):(f=Is(s),this.each(function(){if(D)for(_=c(this),y=0;y<f.length;y++)p=f[y],_.hasClass(p)?_.removeClass(p):_.addClass(p);else(s===void 0||T==="boolean")&&(p=bn(this),p&&pe.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":pe.get(this,"__className__")||""))}))},hasClass:function(s){var l,f,p=0;for(l=" "+s+" ";f=this[p++];)if(f.nodeType===1&&(" "+Hn(bn(f))+" ").indexOf(l)>-1)return!0;return!1}});var hu=/\r/g;c.fn.extend({val:function(s){var l,f,p,y=this[0];return arguments.length?(p=V(s),this.each(function(_){var T;this.nodeType===1&&(p?T=s.call(this,_,c(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=c.map(T,function(D){return D==null?"":D+""})),l=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!l||!("set"in l)||l.set(this,T,"value")===void 0)&&(this.value=T))})):y?(l=c.valHooks[y.type]||c.valHooks[y.nodeName.toLowerCase()],l&&"get"in l&&(f=l.get(y,"value"))!==void 0?f:(f=y.value,typeof f=="string"?f.replace(hu,""):f??"")):void 0}}),c.extend({valHooks:{option:{get:function(s){var l=c.find.attr(s,"value");return l??Hn(c.text(s))}},select:{get:function(s){var l,f,p,y=s.options,_=s.selectedIndex,T=s.type==="select-one",D=T?null:[],k=T?_+1:y.length;for(_<0?p=k:p=T?_:0;p<k;p++)if(f=y[p],(f.selected||p===_)&&!f.disabled&&(!f.parentNode.disabled||!w(f.parentNode,"optgroup"))){if(l=c(f).val(),T)return l;D.push(l)}return D},set:function(s,l){for(var f,p,y=s.options,_=c.makeArray(l),T=y.length;T--;)p=y[T],(p.selected=c.inArray(c.valHooks.option.get(p),_)>-1)&&(f=!0);return f||(s.selectedIndex=-1),_}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(s,l){if(Array.isArray(l))return s.checked=c.inArray(c(s).val(),l)>-1}},L.checkOn||(c.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Gr=e.location,Vo={guid:Date.now()},zn=/\?/;c.parseXML=function(s){var l,f;if(!s||typeof s!="string")return null;try{l=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return f=l&&l.getElementsByTagName("parsererror")[0],(!l||f)&&c.error("Invalid XML: "+(f?c.map(f.childNodes,function(p){return p.textContent}).join(`
`):s)),l};var fn=/^(?:focusinfocus|focusoutblur)$/,bs=function(s){s.stopPropagation()};c.extend(c.event,{trigger:function(s,l,f,p){var y,_,T,D,k,M,W,G,B=[f||$],Z=P.call(s,"type")?s.type:s,Ee=P.call(s,"namespace")?s.namespace.split("."):[];if(_=G=T=f=f||$,!(f.nodeType===3||f.nodeType===8)&&!fn.test(Z+c.event.triggered)&&(Z.indexOf(".")>-1&&(Ee=Z.split("."),Z=Ee.shift(),Ee.sort()),k=Z.indexOf(":")<0&&"on"+Z,s=s[c.expando]?s:new c.Event(Z,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=Ee.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Ee.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=f),l=l==null?[s]:c.makeArray(l,[s]),W=c.event.special[Z]||{},!(!p&&W.trigger&&W.trigger.apply(f,l)===!1))){if(!p&&!W.noBubble&&!q(f)){for(D=W.delegateType||Z,fn.test(D+Z)||(_=_.parentNode);_;_=_.parentNode)B.push(_),T=_;T===(f.ownerDocument||$)&&B.push(T.defaultView||T.parentWindow||e)}for(y=0;(_=B[y++])&&!s.isPropagationStopped();)G=_,s.type=y>1?D:W.bindType||Z,M=(pe.get(_,"events")||Object.create(null))[s.type]&&pe.get(_,"handle"),M&&M.apply(_,l),M=k&&_[k],M&&M.apply&&Mn(_)&&(s.result=M.apply(_,l),s.result===!1&&s.preventDefault());return s.type=Z,!p&&!s.isDefaultPrevented()&&(!W._default||W._default.apply(B.pop(),l)===!1)&&Mn(f)&&k&&V(f[Z])&&!q(f)&&(T=f[k],T&&(f[k]=null),c.event.triggered=Z,s.isPropagationStopped()&&G.addEventListener(Z,bs),f[Z](),s.isPropagationStopped()&&G.removeEventListener(Z,bs),c.event.triggered=void 0,T&&(f[k]=T)),s.result}},simulate:function(s,l,f){var p=c.extend(new c.Event,f,{type:s,isSimulated:!0});c.event.trigger(p,null,l)}}),c.fn.extend({trigger:function(s,l){return this.each(function(){c.event.trigger(s,l,this)})},triggerHandler:function(s,l){var f=this[0];if(f)return c.event.trigger(s,l,f,!0)}});var Mo=/\[\]$/,As=/\r?\n/g,dr=/^(?:submit|button|image|reset|file)$/i,fu=/^(?:input|select|textarea|keygen)/i;function Cs(s,l,f,p){var y;if(Array.isArray(l))c.each(l,function(_,T){f||Mo.test(s)?p(s,T):Cs(s+"["+(typeof T=="object"&&T!=null?_:"")+"]",T,f,p)});else if(!f&&Y(l)==="object")for(y in l)Cs(s+"["+y+"]",l[y],f,p);else p(s,l)}c.param=function(s,l){var f,p=[],y=function(_,T){var D=V(T)?T():T;p[p.length]=encodeURIComponent(_)+"="+encodeURIComponent(D??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!c.isPlainObject(s))c.each(s,function(){y(this.name,this.value)});else for(f in s)Cs(f,s[f],l,y);return p.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=c.prop(this,"elements");return s?c.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!c(this).is(":disabled")&&fu.test(this.nodeName)&&!dr.test(s)&&(this.checked||!Un.test(s))}).map(function(s,l){var f=c(this).val();return f==null?null:Array.isArray(f)?c.map(f,function(p){return{name:l.name,value:p.replace(As,`\r
`)}}):{name:l.name,value:f.replace(As,`\r
`)}}).get()}});var du=/%20/g,An=/#.*$/,pu=/([?&])_=[^&]*/,gu=/^(.*?):[ \t]*([^\r\n]*)$/mg,Ni=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Di=/^(?:GET|HEAD)$/,Fo=/^\/\//,pr={},Wn={},Ss="*/".concat("*"),Kr=$.createElement("a");Kr.href=Gr.href;function it(s){return function(l,f){typeof l!="string"&&(f=l,l="*");var p,y=0,_=l.toLowerCase().match(ze)||[];if(V(f))for(;p=_[y++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(f)):(s[p]=s[p]||[]).push(f)}}function Uo(s,l,f,p){var y={},_=s===Wn;function T(D){var k;return y[D]=!0,c.each(s[D]||[],function(M,W){var G=W(l,f,p);if(typeof G=="string"&&!_&&!y[G])return l.dataTypes.unshift(G),T(G),!1;if(_)return!(k=G)}),k}return T(l.dataTypes[0])||!y["*"]&&T("*")}function Rs(s,l){var f,p,y=c.ajaxSettings.flatOptions||{};for(f in l)l[f]!==void 0&&((y[f]?s:p||(p={}))[f]=l[f]);return p&&c.extend(!0,s,p),s}function jo(s,l,f){for(var p,y,_,T,D=s.contents,k=s.dataTypes;k[0]==="*";)k.shift(),p===void 0&&(p=s.mimeType||l.getResponseHeader("Content-Type"));if(p){for(y in D)if(D[y]&&D[y].test(p)){k.unshift(y);break}}if(k[0]in f)_=k[0];else{for(y in f){if(!k[0]||s.converters[y+" "+k[0]]){_=y;break}T||(T=y)}_=_||T}if(_)return _!==k[0]&&k.unshift(_),f[_]}function Bo(s,l,f,p){var y,_,T,D,k,M={},W=s.dataTypes.slice();if(W[1])for(T in s.converters)M[T.toLowerCase()]=s.converters[T];for(_=W.shift();_;)if(s.responseFields[_]&&(f[s.responseFields[_]]=l),!k&&p&&s.dataFilter&&(l=s.dataFilter(l,s.dataType)),k=_,_=W.shift(),_){if(_==="*")_=k;else if(k!=="*"&&k!==_){if(T=M[k+" "+_]||M["* "+_],!T){for(y in M)if(D=y.split(" "),D[1]===_&&(T=M[k+" "+D[0]]||M["* "+D[0]],T)){T===!0?T=M[y]:M[y]!==!0&&(_=D[0],W.unshift(D[1]));break}}if(T!==!0)if(T&&s.throws)l=T(l);else try{l=T(l)}catch(G){return{state:"parsererror",error:T?G:"No conversion from "+k+" to "+_}}}}return{state:"success",data:l}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Gr.href,type:"GET",isLocal:Ni.test(Gr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ss,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,l){return l?Rs(Rs(s,c.ajaxSettings),l):Rs(c.ajaxSettings,s)},ajaxPrefilter:it(pr),ajaxTransport:it(Wn),ajax:function(s,l){typeof s=="object"&&(l=s,s=void 0),l=l||{};var f,p,y,_,T,D,k,M,W,G,B=c.ajaxSetup({},l),Z=B.context||B,Ee=B.context&&(Z.nodeType||Z.jquery)?c(Z):c.event,Ve=c.Deferred(),Te=c.Callbacks("once memory"),gt=B.statusCode||{},ut={},Xt={},Yt="canceled",ke={readyState:0,getResponseHeader:function(Ue){var st;if(k){if(!_)for(_={};st=gu.exec(y);)_[st[1].toLowerCase()+" "]=(_[st[1].toLowerCase()+" "]||[]).concat(st[2]);st=_[Ue.toLowerCase()+" "]}return st==null?null:st.join(", ")},getAllResponseHeaders:function(){return k?y:null},setRequestHeader:function(Ue,st){return k==null&&(Ue=Xt[Ue.toLowerCase()]=Xt[Ue.toLowerCase()]||Ue,ut[Ue]=st),this},overrideMimeType:function(Ue){return k==null&&(B.mimeType=Ue),this},statusCode:function(Ue){var st;if(Ue)if(k)ke.always(Ue[ke.status]);else for(st in Ue)gt[st]=[gt[st],Ue[st]];return this},abort:function(Ue){var st=Ue||Yt;return f&&f.abort(st),ht(0,st),this}};if(Ve.promise(ke),B.url=((s||B.url||Gr.href)+"").replace(Fo,Gr.protocol+"//"),B.type=l.method||l.type||B.method||B.type,B.dataTypes=(B.dataType||"*").toLowerCase().match(ze)||[""],B.crossDomain==null){D=$.createElement("a");try{D.href=B.url,D.href=D.href,B.crossDomain=Kr.protocol+"//"+Kr.host!=D.protocol+"//"+D.host}catch{B.crossDomain=!0}}if(B.data&&B.processData&&typeof B.data!="string"&&(B.data=c.param(B.data,B.traditional)),Uo(pr,B,l,ke),k)return ke;M=c.event&&B.global,M&&c.active++===0&&c.event.trigger("ajaxStart"),B.type=B.type.toUpperCase(),B.hasContent=!Di.test(B.type),p=B.url.replace(An,""),B.hasContent?B.data&&B.processData&&(B.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(B.data=B.data.replace(du,"+")):(G=B.url.slice(p.length),B.data&&(B.processData||typeof B.data=="string")&&(p+=(zn.test(p)?"&":"?")+B.data,delete B.data),B.cache===!1&&(p=p.replace(pu,"$1"),G=(zn.test(p)?"&":"?")+"_="+Vo.guid+++G),B.url=p+G),B.ifModified&&(c.lastModified[p]&&ke.setRequestHeader("If-Modified-Since",c.lastModified[p]),c.etag[p]&&ke.setRequestHeader("If-None-Match",c.etag[p])),(B.data&&B.hasContent&&B.contentType!==!1||l.contentType)&&ke.setRequestHeader("Content-Type",B.contentType),ke.setRequestHeader("Accept",B.dataTypes[0]&&B.accepts[B.dataTypes[0]]?B.accepts[B.dataTypes[0]]+(B.dataTypes[0]!=="*"?", "+Ss+"; q=0.01":""):B.accepts["*"]);for(W in B.headers)ke.setRequestHeader(W,B.headers[W]);if(B.beforeSend&&(B.beforeSend.call(Z,ke,B)===!1||k))return ke.abort();if(Yt="abort",Te.add(B.complete),ke.done(B.success),ke.fail(B.error),f=Uo(Wn,B,l,ke),!f)ht(-1,"No Transport");else{if(ke.readyState=1,M&&Ee.trigger("ajaxSend",[ke,B]),k)return ke;B.async&&B.timeout>0&&(T=e.setTimeout(function(){ke.abort("timeout")},B.timeout));try{k=!1,f.send(ut,ht)}catch(Ue){if(k)throw Ue;ht(-1,Ue)}}function ht(Ue,st,sn,a){var d,v,b,U,H,ne=st;k||(k=!0,T&&e.clearTimeout(T),f=void 0,y=a||"",ke.readyState=Ue>0?4:0,d=Ue>=200&&Ue<300||Ue===304,sn&&(U=jo(B,ke,sn)),!d&&c.inArray("script",B.dataTypes)>-1&&c.inArray("json",B.dataTypes)<0&&(B.converters["text script"]=function(){}),U=Bo(B,U,ke,d),d?(B.ifModified&&(H=ke.getResponseHeader("Last-Modified"),H&&(c.lastModified[p]=H),H=ke.getResponseHeader("etag"),H&&(c.etag[p]=H)),Ue===204||B.type==="HEAD"?ne="nocontent":Ue===304?ne="notmodified":(ne=U.state,v=U.data,b=U.error,d=!b)):(b=ne,(Ue||!ne)&&(ne="error",Ue<0&&(Ue=0))),ke.status=Ue,ke.statusText=(st||ne)+"",d?Ve.resolveWith(Z,[v,ne,ke]):Ve.rejectWith(Z,[ke,ne,b]),ke.statusCode(gt),gt=void 0,M&&Ee.trigger(d?"ajaxSuccess":"ajaxError",[ke,B,d?v:b]),Te.fireWith(Z,[ke,ne]),M&&(Ee.trigger("ajaxComplete",[ke,B]),--c.active||c.event.trigger("ajaxStop")))}return ke},getJSON:function(s,l,f){return c.get(s,l,f,"json")},getScript:function(s,l){return c.get(s,void 0,l,"script")}}),c.each(["get","post"],function(s,l){c[l]=function(f,p,y,_){return V(p)&&(_=_||y,y=p,p=void 0),c.ajax(c.extend({url:f,type:l,dataType:_,data:p,success:y},c.isPlainObject(f)&&f))}}),c.ajaxPrefilter(function(s){var l;for(l in s.headers)l.toLowerCase()==="content-type"&&(s.contentType=s.headers[l]||"")}),c._evalUrl=function(s,l,f){return c.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){c.globalEval(p,l,f)}})},c.fn.extend({wrapAll:function(s){var l;return this[0]&&(V(s)&&(s=s.call(this[0])),l=c(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(s){return V(s)?this.each(function(l){c(this).wrapInner(s.call(this,l))}):this.each(function(){var l=c(this),f=l.contents();f.length?f.wrapAll(s):l.append(s)})},wrap:function(s){var l=V(s);return this.each(function(f){c(this).wrapAll(l?s.call(this,f):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(s){return!c.expr.pseudos.visible(s)},c.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var $o={0:200,1223:204},Cn=c.ajaxSettings.xhr();L.cors=!!Cn&&"withCredentials"in Cn,L.ajax=Cn=!!Cn,c.ajaxTransport(function(s){var l,f;if(L.cors||Cn&&!s.crossDomain)return{send:function(p,y){var _,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(_ in s.xhrFields)T[_]=s.xhrFields[_];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(_ in p)T.setRequestHeader(_,p[_]);l=function(D){return function(){l&&(l=f=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,D==="abort"?T.abort():D==="error"?typeof T.status!="number"?y(0,"error"):y(T.status,T.statusText):y($o[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=l(),f=T.onerror=T.ontimeout=l("error"),T.onabort!==void 0?T.onabort=f:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){l&&f()})},l=l("abort");try{T.send(s.hasContent&&s.data||null)}catch(D){if(l)throw D}},abort:function(){l&&l()}}}),c.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return c.globalEval(s),s}}}),c.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),c.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var l,f;return{send:function(p,y){l=c("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",f=function(_){l.remove(),f=null,_&&y(_.type==="error"?404:200,_.type)}),$.head.appendChild(l[0])},abort:function(){f&&f()}}}});var Ps=[],Qt=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Ps.pop()||c.expando+"_"+Vo.guid++;return this[s]=!0,s}}),c.ajaxPrefilter("json jsonp",function(s,l,f){var p,y,_,T=s.jsonp!==!1&&(Qt.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Qt.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=V(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(Qt,"$1"+p):s.jsonp!==!1&&(s.url+=(zn.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return _||c.error(p+" was not called"),_[0]},s.dataTypes[0]="json",y=e[p],e[p]=function(){_=arguments},f.always(function(){y===void 0?c(e).removeProp(p):e[p]=y,s[p]&&(s.jsonpCallback=l.jsonpCallback,Ps.push(p)),_&&V(y)&&y(_[0]),_=y=void 0}),"script"}),L.createHTMLDocument=function(){var s=$.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),c.parseHTML=function(s,l,f){if(typeof s!="string")return[];typeof l=="boolean"&&(f=l,l=!1);var p,y,_;return l||(L.createHTMLDocument?(l=$.implementation.createHTMLDocument(""),p=l.createElement("base"),p.href=$.location.href,l.head.appendChild(p)):l=$),y=Ae.exec(s),_=!f&&[],y?[l.createElement(y[1])]:(y=vs([s],l,_),_&&_.length&&c(_).remove(),c.merge([],y.childNodes))},c.fn.load=function(s,l,f){var p,y,_,T=this,D=s.indexOf(" ");return D>-1&&(p=Hn(s.slice(D)),s=s.slice(0,D)),V(l)?(f=l,l=void 0):l&&typeof l=="object"&&(y="POST"),T.length>0&&c.ajax({url:s,type:y||"GET",dataType:"html",data:l}).done(function(k){_=arguments,T.html(p?c("<div>").append(c.parseHTML(k)).find(p):k)}).always(f&&function(k,M){T.each(function(){f.apply(this,_||[k.responseText,M,k])})}),this},c.expr.pseudos.animated=function(s){return c.grep(c.timers,function(l){return s===l.elem}).length},c.offset={setOffset:function(s,l,f){var p,y,_,T,D,k,M,W=c.css(s,"position"),G=c(s),B={};W==="static"&&(s.style.position="relative"),D=G.offset(),_=c.css(s,"top"),k=c.css(s,"left"),M=(W==="absolute"||W==="fixed")&&(_+k).indexOf("auto")>-1,M?(p=G.position(),T=p.top,y=p.left):(T=parseFloat(_)||0,y=parseFloat(k)||0),V(l)&&(l=l.call(s,f,c.extend({},D))),l.top!=null&&(B.top=l.top-D.top+T),l.left!=null&&(B.left=l.left-D.left+y),"using"in l?l.using.call(s,B):G.css(B)}},c.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(y){c.offset.setOffset(this,s,y)});var l,f,p=this[0];if(p)return p.getClientRects().length?(l=p.getBoundingClientRect(),f=p.ownerDocument.defaultView,{top:l.top+f.pageYOffset,left:l.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,l,f,p=this[0],y={top:0,left:0};if(c.css(p,"position")==="fixed")l=p.getBoundingClientRect();else{for(l=this.offset(),f=p.ownerDocument,s=p.offsetParent||f.documentElement;s&&(s===f.body||s===f.documentElement)&&c.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(y=c(s).offset(),y.top+=c.css(s,"borderTopWidth",!0),y.left+=c.css(s,"borderLeftWidth",!0))}return{top:l.top-y.top-c.css(p,"marginTop",!0),left:l.left-y.left-c.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&c.css(s,"position")==="static";)s=s.offsetParent;return s||En})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,l){var f=l==="pageYOffset";c.fn[s]=function(p){return kt(this,function(y,_,T){var D;if(q(y)?D=y:y.nodeType===9&&(D=y.defaultView),T===void 0)return D?D[l]:y[_];D?D.scrollTo(f?D.pageXOffset:T,f?T:D.pageYOffset):y[_]=T},s,p,arguments.length)}}),c.each(["top","left"],function(s,l){c.cssHooks[l]=$r(L.pixelPosition,function(f,p){if(p)return p=Br(f,l),bi.test(p)?c(f).position()[l]+"px":p})}),c.each({Height:"height",Width:"width"},function(s,l){c.each({padding:"inner"+s,content:l,"":"outer"+s},function(f,p){c.fn[p]=function(y,_){var T=arguments.length&&(f||typeof y!="boolean"),D=f||(y===!0||_===!0?"margin":"border");return kt(this,function(k,M,W){var G;return q(k)?p.indexOf("outer")===0?k["inner"+s]:k.document.documentElement["client"+s]:k.nodeType===9?(G=k.documentElement,Math.max(k.body["scroll"+s],G["scroll"+s],k.body["offset"+s],G["offset"+s],G["client"+s])):W===void 0?c.css(k,M,D):c.style(k,M,W,D)},l,T?y:void 0,T)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,l){c.fn[l]=function(f){return this.on(l,f)}}),c.fn.extend({bind:function(s,l,f){return this.on(s,null,l,f)},unbind:function(s,l){return this.off(s,null,l)},delegate:function(s,l,f,p){return this.on(l,s,f,p)},undelegate:function(s,l,f){return arguments.length===1?this.off(s,"**"):this.off(l,s||"**",f)},hover:function(s,l){return this.on("mouseenter",s).on("mouseleave",l||s)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,l){c.fn[l]=function(f,p){return arguments.length>0?this.on(l,null,f,p):this.trigger(l)}});var qo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(s,l){var f,p,y;if(typeof l=="string"&&(f=s[l],l=s,s=f),!!V(s))return p=o.call(arguments,2),y=function(){return s.apply(l||this,p.concat(o.call(arguments)))},y.guid=s.guid=s.guid||c.guid++,y},c.holdReady=function(s){s?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=w,c.isFunction=V,c.isWindow=q,c.camelCase=Jt,c.type=Y,c.now=Date.now,c.isNumeric=function(s){var l=c.type(s);return(l==="number"||l==="string")&&!isNaN(s-parseFloat(s))},c.trim=function(s){return s==null?"":(s+"").replace(qo,"$1")};var mu=e.jQuery,Qr=e.$;return c.noConflict=function(s){return e.$===c&&(e.$=Qr),s&&e.jQuery===c&&(e.jQuery=mu),c},typeof t>"u"&&(e.jQuery=e.$=c),c})}(Pu)),Pu.exports}(function(n){(function(e){e(["jquery"],function(t){return function(){var r,i,o=0,u={error:"error",info:"info",success:"success",warning:"warning"},h={clear:V,remove:q,error:m,getContainer:E,info:P,options:{},subscribe:O,success:F,version:"2.1.4",warning:L},g;return h;function m(w,A,R){return J({type:u.error,iconClass:c().iconClasses.error,message:w,optionsOverride:R,title:A})}function E(w,A){return w||(w=c()),r=t("#"+w.containerId),r.length||A&&(r=Q(w)),r}function P(w,A,R){return J({type:u.info,iconClass:c().iconClasses.info,message:w,optionsOverride:R,title:A})}function O(w){i=w}function F(w,A,R){return J({type:u.success,iconClass:c().iconClasses.success,message:w,optionsOverride:R,title:A})}function L(w,A,R){return J({type:u.warning,iconClass:c().iconClasses.warning,message:w,optionsOverride:R,title:A})}function V(w,A){var R=c();r||E(R),X(w,R,A)||$(R)}function q(w){var A=c();if(r||E(A),w&&t(":focus",w).length===0){C(w);return}r.children().length&&r.remove()}function $(w){for(var A=r.children(),R=A.length-1;R>=0;R--)X(t(A[R]),w)}function X(w,A,R){var N=R&&R.force?R.force:!1;return w&&(N||t(":focus",w).length===0)?(w[A.hideMethod]({duration:A.hideDuration,easing:A.hideEasing,complete:function(){C(w)}}),!0):!1}function Q(w){return r=t("<div/>").attr("id",w.containerId).addClass(w.positionClass),r.appendTo(t(w.target)),r}function Y(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1}}function ee(w){i&&i(w)}function J(w){var A=c(),R=w.iconClass||A.iconClass;if(typeof w.optionsOverride<"u"&&(A=t.extend(A,w.optionsOverride),R=w.optionsOverride.iconClass||R),Vt(A,w))return;o++,r=E(A,!0);var N=null,I=t("<div/>"),de=t("<div/>"),_e=t("<div/>"),Je=t("<div/>"),Se=t(A.closeHtml),he={intervalId:null,hideEta:null,maxHideTime:null},ce={toastId:o,state:"visible",startTime:new Date,options:A,map:w};return me(),ot(),xe(),ee(ce),A.debug&&console&&console.log(ce),I;function ie(Le){return Le==null&&(Le=""),Le.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function me(){Et(),je(),pt(),et(),ze(),_n(),se(),Ae()}function Ae(){var Le="";switch(w.iconClass){case"toast-success":case"toast-info":Le="polite";break;default:Le="assertive"}I.attr("aria-live",Le)}function xe(){A.closeOnHover&&I.hover(Mt,We),!A.onclick&&A.tapToDismiss&&I.click(ae),A.closeButton&&Se&&Se.click(function(Le){Le.stopPropagation?Le.stopPropagation():Le.cancelBubble!==void 0&&Le.cancelBubble!==!0&&(Le.cancelBubble=!0),A.onCloseClick&&A.onCloseClick(Le),ae(!0)}),A.onclick&&I.click(function(Le){A.onclick(Le),ae()})}function ot(){I.hide(),I[A.showMethod]({duration:A.showDuration,easing:A.showEasing,complete:A.onShown}),A.timeOut>0&&(N=setTimeout(ae,A.timeOut),he.maxHideTime=parseFloat(A.timeOut),he.hideEta=new Date().getTime()+he.maxHideTime,A.progressBar&&(he.intervalId=setInterval(qt,10)))}function Et(){w.iconClass&&I.addClass(A.toastClass).addClass(R)}function se(){A.newestOnTop?r.prepend(I):r.append(I)}function je(){if(w.title){var Le=w.title;A.escapeHtml&&(Le=ie(w.title)),de.append(Le).addClass(A.titleClass),I.append(de)}}function pt(){if(w.message){var Le=w.message;A.escapeHtml&&(Le=ie(w.message)),_e.append(Le).addClass(A.messageClass),I.append(_e)}}function et(){A.closeButton&&(Se.addClass(A.closeClass).attr("role","button"),I.prepend(Se))}function ze(){A.progressBar&&(Je.addClass(A.progressClass),I.prepend(Je))}function _n(){A.rtl&&I.addClass("rtl")}function Vt(Le,kt){if(Le.preventDuplicates){if(kt.message===g)return!0;g=kt.message}return!1}function ae(Le){var kt=Le&&A.closeMethod!==!1?A.closeMethod:A.hideMethod,pi=Le&&A.closeDuration!==!1?A.closeDuration:A.hideDuration,Fr=Le&&A.closeEasing!==!1?A.closeEasing:A.hideEasing;if(!(t(":focus",I).length&&!Le))return clearTimeout(he.intervalId),I[kt]({duration:pi,easing:Fr,complete:function(){C(I),clearTimeout(N),A.onHidden&&ce.state!=="hidden"&&A.onHidden(),ce.state="hidden",ce.endTime=new Date,ee(ce)}})}function We(){(A.timeOut>0||A.extendedTimeOut>0)&&(N=setTimeout(ae,A.extendedTimeOut),he.maxHideTime=parseFloat(A.extendedTimeOut),he.hideEta=new Date().getTime()+he.maxHideTime)}function Mt(){clearTimeout(N),he.hideEta=0,I.stop(!0,!0)[A.showMethod]({duration:A.showDuration,easing:A.showEasing})}function qt(){var Le=(he.hideEta-new Date().getTime())/he.maxHideTime*100;Je.width(Le+"%")}}function c(){return t.extend({},Y(),h.options)}function C(w){r||(r=E()),!w.is(":visible")&&(w.remove(),w=null,r.children().length===0&&(r.remove(),g=void 0))}}()})})(function(e,t){n.exports?n.exports=t(Uy()):window.toastr=t(window.jQuery)})})(nd);var jy=nd.exports;const XI=Fy(jy);var By=Object.defineProperty,$y=(n,e,t)=>e in n?By(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ye=(n,e,t)=>($y(n,typeof e!="symbol"?e+"":e,t),t);const qy=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Hy=/^-?[0-9]\d*$/,zy=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,Wy=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,Gy=n=>{let e=n;return typeof n=="string"&&(e=n.trim()),!e},Ky=n=>qy.test(n),Qy=(n,e)=>n.length>e,Xy=(n,e)=>n.length<e,Yy=n=>typeof n!="string"?!1:!isNaN(+n)&&!isNaN(parseFloat(n)),Jy=n=>Hy.test(n),Zy=n=>zy.test(n),e_=n=>Wy.test(n),t_=(n,e)=>n>e,n_=(n,e)=>n<e,Kn=n=>typeof n!="string"||n==="";var Be=(n=>(n.Required="required",n.Email="email",n.MinLength="minLength",n.MaxLength="maxLength",n.Password="password",n.Number="number",n.Integer="integer",n.MaxNumber="maxNumber",n.MinNumber="minNumber",n.StrongPassword="strongPassword",n.CustomRegexp="customRegexp",n.MinFilesCount="minFilesCount",n.MaxFilesCount="maxFilesCount",n.Files="files",n))(Be||{}),Xu=(n=>(n.Required="required",n))(Xu||{}),rd=(n=>(n.Label="label",n.LabelArrow="labelArrow",n))(rd||{});const sh=[{key:Be.Required,dict:{en:"The field is required"}},{key:Be.Email,dict:{en:"Email has invalid format"}},{key:Be.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:Be.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:Be.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:Be.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:Be.Number,dict:{en:"Value should be a number"}},{key:Be.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:Be.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:Be.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:Be.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:Be.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],r_="Value is incorrect",Ns=n=>typeof n=="object"&&n!==null&&"then"in n&&typeof n.then=="function",i_=n=>{let e=n;const t=[];for(;e;)t.unshift(e),e=e.parentNode;return t},s_=(n,e)=>{const t=[...e].reverse();for(let r=0,i=t.length;r<i;++r){const o=t[r];for(const u in n){const h=n[u];if(h.groupElem===o)return[u,h]}}return null},Rn=n=>Array.isArray(n)?n.filter(e=>e.length>0):typeof n=="string"&&n.trim()?[...n.split(" ").filter(e=>e.length>0)]:[],Ds=n=>n instanceof Element||n instanceof HTMLDocument,o_=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",Ko=5,ku={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class YI{constructor(e,t,r){Ye(this,"form",null),Ye(this,"fields",{}),Ye(this,"groupFields",{}),Ye(this,"errors",{}),Ye(this,"isValid",!1),Ye(this,"isSubmitted",!1),Ye(this,"globalConfig",ku),Ye(this,"errorLabels",{}),Ye(this,"successLabels",{}),Ye(this,"eventListeners",[]),Ye(this,"dictLocale",sh),Ye(this,"currentLocale","en"),Ye(this,"customStyleTags",{}),Ye(this,"onSuccessCallback"),Ye(this,"onFailCallback"),Ye(this,"onValidateCallback"),Ye(this,"tooltips",[]),Ye(this,"lastScrollPosition"),Ye(this,"isScrollTick"),Ye(this,"fieldIds",new Map),Ye(this,"getKeyByFieldSelector",i=>this.fieldIds.get(i)),Ye(this,"getFieldSelectorByKey",i=>{for(const[o,u]of this.fieldIds)if(i===u)return o}),Ye(this,"getCompatibleFields",()=>{const i={};return Object.keys(this.fields).forEach(o=>{let u=o;const h=this.getFieldSelectorByKey(o);typeof h=="string"&&(u=h),i[u]={...this.fields[o]}}),i}),Ye(this,"setKeyByFieldSelector",i=>{if(this.fieldIds.has(i))return this.fieldIds.get(i);const o=String(this.fieldIds.size+1);return this.fieldIds.set(i,o),o}),Ye(this,"refreshAllTooltips",()=>{this.tooltips.forEach(i=>{i.refresh()})}),Ye(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),Ye(this,"formSubmitHandler",i=>{i.preventDefault(),this.isSubmitted=!0,this.validateHandler(i)}),Ye(this,"handleFieldChange",i=>{let o;for(const u in this.fields)if(this.fields[u].elem===i){o=u;break}o&&(this.fields[o].touched=!0,this.validateField(o,!0))}),Ye(this,"handleGroupChange",i=>{let o;for(const u in this.groupFields)if(this.groupFields[u].elems.find(g=>g===i)){o=u;break}o&&(this.groupFields[o].touched=!0,this.validateGroup(o,!0))}),Ye(this,"handlerChange",i=>{i.target&&(this.handleFieldChange(i.target),this.handleGroupChange(i.target),this.renderErrors())}),this.initialize(e,t,r)}initialize(e,t,r){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=ku,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...ku,...t},r&&(this.dictLocale=[...r,...sh]),this.isTooltip()){const i=document.createElement("style");i.textContent=o_,this.customStyleTags[rd.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,r){var i;const o=r??e;let u=(i=this.dictLocale.find(h=>h.key===o))==null?void 0:i.dict[this.currentLocale];if(u||r&&(u=r),u&&t!==void 0)switch(e){case Be.MaxLength:case Be.MinLength:case Be.MaxNumber:case Be.MinNumber:case Be.MinFilesCount:case Be.MaxFilesCount:u=u.replace(":value",String(t))}return u||r||r_}getFieldErrorMessage(e,t){const r=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,r)}getFieldSuccessMessage(e,t){const r=typeof e=="function"?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,r)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,t!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,r){switch(r.rule){case Xu.Required:t.every(i=>!i.checked)?this.setGroupInvalid(e,r):this.setGroupValid(e,r)}}validateFieldRule(e,t,r,i=!1){const o=r.value,u=this.getElemValue(t);if(r.plugin){r.plugin(u,this.getCompatibleFields())||this.setFieldInvalid(e,r);return}switch(r.rule){case Be.Required:{Gy(u)&&this.setFieldInvalid(e,r);break}case Be.Email:{if(Kn(u))break;Ky(u)||this.setFieldInvalid(e,r);break}case Be.MaxLength:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Kn(u))break;Qy(u,o)&&this.setFieldInvalid(e,r);break}case Be.MinLength:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Kn(u))break;Xy(u,o)&&this.setFieldInvalid(e,r);break}case Be.Password:{if(Kn(u))break;Zy(u)||this.setFieldInvalid(e,r);break}case Be.StrongPassword:{if(Kn(u))break;e_(u)||this.setFieldInvalid(e,r);break}case Be.Number:{if(Kn(u))break;Yy(u)||this.setFieldInvalid(e,r);break}case Be.Integer:{if(Kn(u))break;Jy(u)||this.setFieldInvalid(e,r);break}case Be.MaxNumber:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Kn(u))break;const h=+u;(Number.isNaN(h)||t_(h,o))&&this.setFieldInvalid(e,r);break}case Be.MinNumber:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Kn(u))break;const h=+u;(Number.isNaN(h)||n_(h,o))&&this.setFieldInvalid(e,r);break}case Be.CustomRegexp:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);return}let h;try{h=new RegExp(o)}catch{console.error(`Value for ${r.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,r);break}const g=String(u);g!==""&&!h.test(g)&&this.setFieldInvalid(e,r);break}case Be.MinFilesCount:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Number.isFinite(u==null?void 0:u.length)&&u.length<o){this.setFieldInvalid(e,r);break}break}case Be.MaxFilesCount:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof o!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Number.isFinite(u==null?void 0:u.length)&&u.length>o){this.setFieldInvalid(e,r);break}break}case Be.Files:{if(o===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);return}if(typeof o!="object"){console.error(`Value for ${r.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const h=o.files;if(typeof h!="object"){console.error(`Value for ${r.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const g=(m,E)=>{const P=Number.isFinite(E.minSize)&&m.size<E.minSize,O=Number.isFinite(E.maxSize)&&m.size>E.maxSize,F=Array.isArray(E.names)&&!E.names.includes(m.name),L=Array.isArray(E.extensions)&&!E.extensions.includes(m.name.split(".")[m.name.split(".").length-1]),V=Array.isArray(E.types)&&!E.types.includes(m.type);return P||O||F||L||V};if(typeof u=="object"&&u!==null)for(let m=0,E=u.length;m<E;++m){const P=u.item(m);if(!P){this.setFieldInvalid(e,r);break}if(g(P,h)){this.setFieldInvalid(e,r);break}}break}default:{if(typeof r.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const h=r.validator(u,this.getCompatibleFields());if(typeof h!="boolean"&&typeof h!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof h=="function")if(i)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const g=h();if(!Ns(g)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,r);return}return g.then(m=>{m||this.setFieldInvalid(e,r)}).catch(()=>{this.setFieldInvalid(e,r)})}h||this.setFieldInvalid(e,r)}}}isFormValid(){let e=!0;for(let t=0,r=Object.values(this.fields).length;t<r;++t){const i=Object.values(this.fields)[t];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}for(let t=0,r=Object.values(this.groupFields).length;t<r;++t){const i=Object.values(this.groupFields)[t];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}return e}validateField(e,t=!1){var r;const i=this.fields[e];i.isValid=!0;const o=[];return[...i.rules].reverse().forEach(u=>{const h=this.validateFieldRule(e,i.elem,u,t);Ns(h)&&o.push(h)}),i.isValid&&this.setFieldValid(e,(r=i.config)==null?void 0:r.successMessage),Promise.allSettled(o).finally(()=>{var u;t&&((u=this.onValidateCallback)==null||u.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!Ds(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.fields[t]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(r=>{this.validateField(t,!0).finally(()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t,!0),r(!!this.fields[t].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!Ds(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(r=>{this.validateGroup(t).finally(()=>{this.clearFieldLabel(t),this.renderGroupError(t,!0),r(!!this.groupFields[t].isValid)})})}validateGroup(e,t=!1){const r=this.groupFields[e],i=[];return[...r.rules].reverse().forEach(o=>{const u=this.validateGroupRule(e,r.elems,o);Ns(u)&&i.push(u)}),Promise.allSettled(i).finally(()=>{var o;t&&((o=this.onValidateCallback)==null||o.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout(()=>t.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(t=>{const r=[];Object.keys(this.fields).forEach(i=>{const o=this.validateField(i);Ns(o)&&r.push(o)}),Object.keys(this.groupFields).forEach(i=>{const o=this.validateGroup(i);Ns(o)&&r.push(o)}),Promise.allSettled(r).then(()=>{var i;this.afterSubmitValidation(e),(i=this.onValidateCallback)==null||i.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),t(!!r.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally(()=>{var r,i,o;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((r=this.onSuccessCallback)==null||r.call(this,e),this.globalConfig.submitFormAutomatically&&((i=e==null?void 0:e.currentTarget)==null||i.submit())):(o=this.onFailCallback)==null||o.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,r){t.addEventListener(e,r),this.eventListeners.push({type:e,elem:t,func:r})}removeListener(e,t,r){t.removeEventListener(e,r),this.eventListeners=this.eventListeners.filter(i=>i.type!==e||i.elem!==t)}addField(e,t,r){if(typeof e!="string"&&!Ds(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let i;if(typeof e=="string"?i=this.form.querySelector(e):i=e,!i)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach(u=>{if(!("rule"in u||"validator"in u||"plugin"in u))throw Error("Rules argument must contain at least one rule or validator property.");if(!u.validator&&!u.plugin&&(!u.rule||!Object.values(Be).includes(u.rule)))throw Error(`Rule should be one of these types: ${Object.values(Be).join(", ")}. Provided value: ${u.rule}`)});const o=this.setKeyByFieldSelector(e);return this.fields[o]={elem:i,rules:t,isValid:void 0,touched:!1,config:r},this.setListeners(i),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(o),this}removeField(e){if(typeof e!="string"&&!Ds(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const r=this.getListenerType(this.fields[t].elem.type);return this.removeListener(r,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[t].elems.forEach(r=>{const i=this.getListenerType(r.type);this.removeListener(i,r,this.handlerChange)}),this.clearErrors(),delete this.groupFields[t],this)}addRequiredGroup(e,t,r,i){if(typeof e!="string"&&!Ds(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let o;if(typeof e=="string"?o=this.form.querySelector(e):o=e,!o)throw Error("Group selector not found! Please check the group selector.");const u=o.querySelectorAll("input"),h=Array.from(u).filter(m=>{const E=s_(this.groupFields,i_(m));return E?E[1].elems.find(P=>P!==m):!0}),g=this.setKeyByFieldSelector(e);return this.groupFields[g]={rules:[{rule:Xu.Required,errorMessage:t,successMessage:i}],groupElem:o,elems:h,touched:!1,isValid:void 0,config:r},u.forEach(m=>{this.setListeners(m)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,r;(t=this.errorLabels[e])==null||t.remove(),(r=this.successLabels[e])==null||r.remove()}clearFieldStyle(e){var t,r,i,o;const u=this.fields[e],h=((t=u.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(h).forEach(m=>{u.elem.style[m]=""});const g=((r=u.config)==null?void 0:r.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(g).forEach(m=>{u.elem.style[m]=""}),u.elem.classList.remove(...Rn(((i=u.config)==null?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...Rn(((o=u.config)==null?void 0:o.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach(r=>this.errorLabels[r].remove()),Object.keys(this.successLabels).forEach(r=>this.successLabels[r].remove());for(const r in this.fields)this.clearFieldStyle(r);for(const r in this.groupFields){const i=this.groupFields[r],o=((e=i.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach(h=>{i.elems.forEach(g=>{var m;g.style[h]="",g.classList.remove(...Rn(((m=i.config)==null?void 0:m.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const u=((t=i.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(u).forEach(h=>{i.elems.forEach(g=>{var m;g.style[h]="",g.classList.remove(...Rn(((m=i.config)==null?void 0:m.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,r=e.length;t<r;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,r=e.length;t<r;++t)e[t].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,r){var i;const{top:o,left:u,width:h,height:g}=e.getBoundingClientRect(),m=t.getBoundingClientRect(),E=r||((i=this.globalConfig.tooltip)==null?void 0:i.position);switch(E){case"left":{t.style.top=`${o+g/2-m.height/2}px`,t.style.left=`${u-m.width-Ko}px`;break}case"top":{t.style.top=`${o-m.height-Ko}px`,t.style.left=`${u+h/2-m.width/2}px`;break}case"right":{t.style.top=`${o+g/2-m.height/2}px`,t.style.left=`${u+h+Ko}px`;break}case"bottom":{t.style.top=`${o+g+Ko}px`,t.style.left=`${u+h/2-m.width/2}px`;break}}return t.dataset.direction=E,{refresh:()=>{this.renderTooltip(e,t,r)}}}createErrorLabelElem(e,t,r){const i=document.createElement("div");i.innerHTML=t;const o=this.isTooltip()?r==null?void 0:r.errorLabelStyle:(r==null?void 0:r.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,o),i.classList.add(...Rn((r==null?void 0:r.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels[e]=i,i}createSuccessLabelElem(e,t,r){if(t===void 0)return null;const i=document.createElement("div");i.innerHTML=t;const o=(r==null?void 0:r.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(i.style,o),i.classList.add(...Rn((r==null?void 0:r.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(i.dataset.testId=`success-label-${e}`),this.successLabels[e]=i,i}renderErrorsContainer(e,t){const r=t||this.globalConfig.errorsContainer;if(typeof r=="string"){const i=this.form.querySelector(r);if(i)return i.appendChild(e),!0;console.error(`Error container with ${r} selector not found. Errors will be rendered as usual`)}return r instanceof Element?(r.appendChild(e),!0):(r!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,r,i){!i&&this.renderErrorsContainer(t,r)||e.appendChild(t)}renderFieldLabel(e,t,r,i){var o,u,h,g,m,E,P;if(!(!i&&this.renderErrorsContainer(t,r)))if(e.type==="checkbox"||e.type==="radio"){const O=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((u=(o=e.parentElement)==null?void 0:o.tagName)==null?void 0:u.toLowerCase())==="label"?(g=(h=e.parentElement)==null?void 0:h.parentElement)==null||g.appendChild(t):O?(m=O.parentElement)==null||m.appendChild(t):(E=e.parentElement)==null||E.appendChild(t)}else(P=e.parentElement)==null||P.appendChild(t)}showLabels(e,t){Object.keys(e).forEach((r,i)=>{const o=e[r],u=this.getKeyByFieldSelector(r);if(!u||!this.fields[u]){console.error("Field not found. Check the field selector.");return}const h=this.fields[u];h.isValid=!t,this.clearFieldStyle(u),this.clearFieldLabel(u),this.renderFieldError(u,!1,o),i===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>h.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t=!1,r){var i,o,u,h,g,m;const E=this.fields[e];if(E.isValid===!1&&(this.isValid=!1),E.isValid===void 0||!t&&!this.isSubmitted&&!E.touched&&r===void 0)return;if(E.isValid){if(!E.asyncCheckPending){const O=this.createSuccessLabelElem(e,r!==void 0?r:E.successMessage,E.config);O&&this.renderFieldLabel(E.elem,O,(i=E.config)==null?void 0:i.errorsContainer,!0),E.elem.classList.add(...Rn(((o=E.config)==null?void 0:o.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}E.elem.classList.add(...Rn(((u=E.config)==null?void 0:u.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const P=this.createErrorLabelElem(e,r!==void 0?r:E.errorMessage,E.config);this.renderFieldLabel(E.elem,P,(h=E.config)==null?void 0:h.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(E.elem,P,(m=(g=E.config)==null?void 0:g.tooltip)==null?void 0:m.position))}renderGroupError(e,t=!0){var r,i,o,u;const h=this.groupFields[e];if(h.isValid===!1&&(this.isValid=!1),h.isValid===void 0||!t&&!this.isSubmitted&&!h.touched)return;if(h.isValid){h.elems.forEach(E=>{var P,O;Object.assign(E.style,((P=h.config)==null?void 0:P.successFieldStyle)||this.globalConfig.successFieldStyle),E.classList.add(...Rn(((O=h.config)==null?void 0:O.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const m=this.createSuccessLabelElem(e,h.successMessage,h.config);m&&this.renderGroupLabel(h.groupElem,m,(r=h.config)==null?void 0:r.errorsContainer,!0);return}this.isValid=!1,h.elems.forEach(m=>{var E,P;Object.assign(m.style,((E=h.config)==null?void 0:E.errorFieldStyle)||this.globalConfig.errorFieldStyle),m.classList.add(...Rn(((P=h.config)==null?void 0:P.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const g=this.createErrorLabelElem(e,h.errorMessage,h.config);this.renderGroupLabel(h.groupElem,g,(i=h.config)==null?void 0:i.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(h.groupElem,g,(u=(o=h.config)==null?void 0:o.tooltip)==null?void 0:u.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const t in this.groupFields)this.renderGroupError(t);for(const t in this.fields)this.renderFieldError(t)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ti,id;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(c,C){function w(){}w.prototype=C.prototype,c.D=C.prototype,c.prototype=new w,c.prototype.constructor=c,c.C=function(A,R,N){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return C.prototype[R].apply(A,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(c,C,w){w||(w=0);var A=Array(16);if(typeof C=="string")for(var R=0;16>R;++R)A[R]=C.charCodeAt(w++)|C.charCodeAt(w++)<<8|C.charCodeAt(w++)<<16|C.charCodeAt(w++)<<24;else for(R=0;16>R;++R)A[R]=C[w++]|C[w++]<<8|C[w++]<<16|C[w++]<<24;C=c.g[0],w=c.g[1],R=c.g[2];var N=c.g[3],I=C+(N^w&(R^N))+A[0]+3614090360&4294967295;C=w+(I<<7&4294967295|I>>>25),I=N+(R^C&(w^R))+A[1]+3905402710&4294967295,N=C+(I<<12&4294967295|I>>>20),I=R+(w^N&(C^w))+A[2]+606105819&4294967295,R=N+(I<<17&4294967295|I>>>15),I=w+(C^R&(N^C))+A[3]+3250441966&4294967295,w=R+(I<<22&4294967295|I>>>10),I=C+(N^w&(R^N))+A[4]+4118548399&4294967295,C=w+(I<<7&4294967295|I>>>25),I=N+(R^C&(w^R))+A[5]+1200080426&4294967295,N=C+(I<<12&4294967295|I>>>20),I=R+(w^N&(C^w))+A[6]+2821735955&4294967295,R=N+(I<<17&4294967295|I>>>15),I=w+(C^R&(N^C))+A[7]+4249261313&4294967295,w=R+(I<<22&4294967295|I>>>10),I=C+(N^w&(R^N))+A[8]+1770035416&4294967295,C=w+(I<<7&4294967295|I>>>25),I=N+(R^C&(w^R))+A[9]+2336552879&4294967295,N=C+(I<<12&4294967295|I>>>20),I=R+(w^N&(C^w))+A[10]+4294925233&4294967295,R=N+(I<<17&4294967295|I>>>15),I=w+(C^R&(N^C))+A[11]+2304563134&4294967295,w=R+(I<<22&4294967295|I>>>10),I=C+(N^w&(R^N))+A[12]+1804603682&4294967295,C=w+(I<<7&4294967295|I>>>25),I=N+(R^C&(w^R))+A[13]+4254626195&4294967295,N=C+(I<<12&4294967295|I>>>20),I=R+(w^N&(C^w))+A[14]+2792965006&4294967295,R=N+(I<<17&4294967295|I>>>15),I=w+(C^R&(N^C))+A[15]+1236535329&4294967295,w=R+(I<<22&4294967295|I>>>10),I=C+(R^N&(w^R))+A[1]+4129170786&4294967295,C=w+(I<<5&4294967295|I>>>27),I=N+(w^R&(C^w))+A[6]+3225465664&4294967295,N=C+(I<<9&4294967295|I>>>23),I=R+(C^w&(N^C))+A[11]+643717713&4294967295,R=N+(I<<14&4294967295|I>>>18),I=w+(N^C&(R^N))+A[0]+3921069994&4294967295,w=R+(I<<20&4294967295|I>>>12),I=C+(R^N&(w^R))+A[5]+3593408605&4294967295,C=w+(I<<5&4294967295|I>>>27),I=N+(w^R&(C^w))+A[10]+38016083&4294967295,N=C+(I<<9&4294967295|I>>>23),I=R+(C^w&(N^C))+A[15]+3634488961&4294967295,R=N+(I<<14&4294967295|I>>>18),I=w+(N^C&(R^N))+A[4]+3889429448&4294967295,w=R+(I<<20&4294967295|I>>>12),I=C+(R^N&(w^R))+A[9]+568446438&4294967295,C=w+(I<<5&4294967295|I>>>27),I=N+(w^R&(C^w))+A[14]+3275163606&4294967295,N=C+(I<<9&4294967295|I>>>23),I=R+(C^w&(N^C))+A[3]+4107603335&4294967295,R=N+(I<<14&4294967295|I>>>18),I=w+(N^C&(R^N))+A[8]+1163531501&4294967295,w=R+(I<<20&4294967295|I>>>12),I=C+(R^N&(w^R))+A[13]+2850285829&4294967295,C=w+(I<<5&4294967295|I>>>27),I=N+(w^R&(C^w))+A[2]+4243563512&4294967295,N=C+(I<<9&4294967295|I>>>23),I=R+(C^w&(N^C))+A[7]+1735328473&4294967295,R=N+(I<<14&4294967295|I>>>18),I=w+(N^C&(R^N))+A[12]+2368359562&4294967295,w=R+(I<<20&4294967295|I>>>12),I=C+(w^R^N)+A[5]+4294588738&4294967295,C=w+(I<<4&4294967295|I>>>28),I=N+(C^w^R)+A[8]+2272392833&4294967295,N=C+(I<<11&4294967295|I>>>21),I=R+(N^C^w)+A[11]+1839030562&4294967295,R=N+(I<<16&4294967295|I>>>16),I=w+(R^N^C)+A[14]+4259657740&4294967295,w=R+(I<<23&4294967295|I>>>9),I=C+(w^R^N)+A[1]+2763975236&4294967295,C=w+(I<<4&4294967295|I>>>28),I=N+(C^w^R)+A[4]+1272893353&4294967295,N=C+(I<<11&4294967295|I>>>21),I=R+(N^C^w)+A[7]+4139469664&4294967295,R=N+(I<<16&4294967295|I>>>16),I=w+(R^N^C)+A[10]+3200236656&4294967295,w=R+(I<<23&4294967295|I>>>9),I=C+(w^R^N)+A[13]+681279174&4294967295,C=w+(I<<4&4294967295|I>>>28),I=N+(C^w^R)+A[0]+3936430074&4294967295,N=C+(I<<11&4294967295|I>>>21),I=R+(N^C^w)+A[3]+3572445317&4294967295,R=N+(I<<16&4294967295|I>>>16),I=w+(R^N^C)+A[6]+76029189&4294967295,w=R+(I<<23&4294967295|I>>>9),I=C+(w^R^N)+A[9]+3654602809&4294967295,C=w+(I<<4&4294967295|I>>>28),I=N+(C^w^R)+A[12]+3873151461&4294967295,N=C+(I<<11&4294967295|I>>>21),I=R+(N^C^w)+A[15]+530742520&4294967295,R=N+(I<<16&4294967295|I>>>16),I=w+(R^N^C)+A[2]+3299628645&4294967295,w=R+(I<<23&4294967295|I>>>9),I=C+(R^(w|~N))+A[0]+4096336452&4294967295,C=w+(I<<6&4294967295|I>>>26),I=N+(w^(C|~R))+A[7]+1126891415&4294967295,N=C+(I<<10&4294967295|I>>>22),I=R+(C^(N|~w))+A[14]+2878612391&4294967295,R=N+(I<<15&4294967295|I>>>17),I=w+(N^(R|~C))+A[5]+4237533241&4294967295,w=R+(I<<21&4294967295|I>>>11),I=C+(R^(w|~N))+A[12]+1700485571&4294967295,C=w+(I<<6&4294967295|I>>>26),I=N+(w^(C|~R))+A[3]+2399980690&4294967295,N=C+(I<<10&4294967295|I>>>22),I=R+(C^(N|~w))+A[10]+4293915773&4294967295,R=N+(I<<15&4294967295|I>>>17),I=w+(N^(R|~C))+A[1]+2240044497&4294967295,w=R+(I<<21&4294967295|I>>>11),I=C+(R^(w|~N))+A[8]+1873313359&4294967295,C=w+(I<<6&4294967295|I>>>26),I=N+(w^(C|~R))+A[15]+4264355552&4294967295,N=C+(I<<10&4294967295|I>>>22),I=R+(C^(N|~w))+A[6]+2734768916&4294967295,R=N+(I<<15&4294967295|I>>>17),I=w+(N^(R|~C))+A[13]+1309151649&4294967295,w=R+(I<<21&4294967295|I>>>11),I=C+(R^(w|~N))+A[4]+4149444226&4294967295,C=w+(I<<6&4294967295|I>>>26),I=N+(w^(C|~R))+A[11]+3174756917&4294967295,N=C+(I<<10&4294967295|I>>>22),I=R+(C^(N|~w))+A[2]+718787259&4294967295,R=N+(I<<15&4294967295|I>>>17),I=w+(N^(R|~C))+A[9]+3951481745&4294967295,c.g[0]=c.g[0]+C&4294967295,c.g[1]=c.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,c.g[2]=c.g[2]+R&4294967295,c.g[3]=c.g[3]+N&4294967295}r.prototype.u=function(c,C){C===void 0&&(C=c.length);for(var w=C-this.blockSize,A=this.B,R=this.h,N=0;N<C;){if(R==0)for(;N<=w;)i(this,c,N),N+=this.blockSize;if(typeof c=="string"){for(;N<C;)if(A[R++]=c.charCodeAt(N++),R==this.blockSize){i(this,A),R=0;break}}else for(;N<C;)if(A[R++]=c[N++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=C},r.prototype.v=function(){var c=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);c[0]=128;for(var C=1;C<c.length-8;++C)c[C]=0;var w=8*this.o;for(C=c.length-8;C<c.length;++C)c[C]=w&255,w/=256;for(this.u(c),c=Array(16),C=w=0;4>C;++C)for(var A=0;32>A;A+=8)c[w++]=this.g[C]>>>A&255;return c};function o(c,C){var w=h;return Object.prototype.hasOwnProperty.call(w,c)?w[c]:w[c]=C(c)}function u(c,C){this.h=C;for(var w=[],A=!0,R=c.length-1;0<=R;R--){var N=c[R]|0;A&&N==C||(w[R]=N,A=!1)}this.g=w}var h={};function g(c){return-128<=c&&128>c?o(c,function(C){return new u([C|0],0>C?-1:0)}):new u([c|0],0>c?-1:0)}function m(c){if(isNaN(c)||!isFinite(c))return P;if(0>c)return q(m(-c));for(var C=[],w=1,A=0;c>=w;A++)C[A]=c/w|0,w*=4294967296;return new u(C,0)}function E(c,C){if(c.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(c.charAt(0)=="-")return q(E(c.substring(1),C));if(0<=c.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=m(Math.pow(C,8)),A=P,R=0;R<c.length;R+=8){var N=Math.min(8,c.length-R),I=parseInt(c.substring(R,R+N),C);8>N?(N=m(Math.pow(C,N)),A=A.j(N).add(m(I))):(A=A.j(w),A=A.add(m(I)))}return A}var P=g(0),O=g(1),F=g(16777216);n=u.prototype,n.m=function(){if(V(this))return-q(this).m();for(var c=0,C=1,w=0;w<this.g.length;w++){var A=this.i(w);c+=(0<=A?A:4294967296+A)*C,C*=4294967296}return c},n.toString=function(c){if(c=c||10,2>c||36<c)throw Error("radix out of range: "+c);if(L(this))return"0";if(V(this))return"-"+q(this).toString(c);for(var C=m(Math.pow(c,6)),w=this,A="";;){var R=Y(w,C).g;w=$(w,R.j(C));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(c);if(w=R,L(w))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},n.i=function(c){return 0>c?0:c<this.g.length?this.g[c]:this.h};function L(c){if(c.h!=0)return!1;for(var C=0;C<c.g.length;C++)if(c.g[C]!=0)return!1;return!0}function V(c){return c.h==-1}n.l=function(c){return c=$(this,c),V(c)?-1:L(c)?0:1};function q(c){for(var C=c.g.length,w=[],A=0;A<C;A++)w[A]=~c.g[A];return new u(w,~c.h).add(O)}n.abs=function(){return V(this)?q(this):this},n.add=function(c){for(var C=Math.max(this.g.length,c.g.length),w=[],A=0,R=0;R<=C;R++){var N=A+(this.i(R)&65535)+(c.i(R)&65535),I=(N>>>16)+(this.i(R)>>>16)+(c.i(R)>>>16);A=I>>>16,N&=65535,I&=65535,w[R]=I<<16|N}return new u(w,w[w.length-1]&-2147483648?-1:0)};function $(c,C){return c.add(q(C))}n.j=function(c){if(L(this)||L(c))return P;if(V(this))return V(c)?q(this).j(q(c)):q(q(this).j(c));if(V(c))return q(this.j(q(c)));if(0>this.l(F)&&0>c.l(F))return m(this.m()*c.m());for(var C=this.g.length+c.g.length,w=[],A=0;A<2*C;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<c.g.length;R++){var N=this.i(A)>>>16,I=this.i(A)&65535,de=c.i(R)>>>16,_e=c.i(R)&65535;w[2*A+2*R]+=I*_e,X(w,2*A+2*R),w[2*A+2*R+1]+=N*_e,X(w,2*A+2*R+1),w[2*A+2*R+1]+=I*de,X(w,2*A+2*R+1),w[2*A+2*R+2]+=N*de,X(w,2*A+2*R+2)}for(A=0;A<C;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=C;A<2*C;A++)w[A]=0;return new u(w,0)};function X(c,C){for(;(c[C]&65535)!=c[C];)c[C+1]+=c[C]>>>16,c[C]&=65535,C++}function Q(c,C){this.g=c,this.h=C}function Y(c,C){if(L(C))throw Error("division by zero");if(L(c))return new Q(P,P);if(V(c))return C=Y(q(c),C),new Q(q(C.g),q(C.h));if(V(C))return C=Y(c,q(C)),new Q(q(C.g),C.h);if(30<c.g.length){if(V(c)||V(C))throw Error("slowDivide_ only works with positive integers.");for(var w=O,A=C;0>=A.l(c);)w=ee(w),A=ee(A);var R=J(w,1),N=J(A,1);for(A=J(A,2),w=J(w,2);!L(A);){var I=N.add(A);0>=I.l(c)&&(R=R.add(w),N=I),A=J(A,1),w=J(w,1)}return C=$(c,R.j(C)),new Q(R,C)}for(R=P;0<=c.l(C);){for(w=Math.max(1,Math.floor(c.m()/C.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=m(w),I=N.j(C);V(I)||0<I.l(c);)w-=A,N=m(w),I=N.j(C);L(N)&&(N=O),R=R.add(N),c=$(c,I)}return new Q(R,c)}n.A=function(c){return Y(this,c).h},n.and=function(c){for(var C=Math.max(this.g.length,c.g.length),w=[],A=0;A<C;A++)w[A]=this.i(A)&c.i(A);return new u(w,this.h&c.h)},n.or=function(c){for(var C=Math.max(this.g.length,c.g.length),w=[],A=0;A<C;A++)w[A]=this.i(A)|c.i(A);return new u(w,this.h|c.h)},n.xor=function(c){for(var C=Math.max(this.g.length,c.g.length),w=[],A=0;A<C;A++)w[A]=this.i(A)^c.i(A);return new u(w,this.h^c.h)};function ee(c){for(var C=c.g.length+1,w=[],A=0;A<C;A++)w[A]=c.i(A)<<1|c.i(A-1)>>>31;return new u(w,c.h)}function J(c,C){var w=C>>5;C%=32;for(var A=c.g.length-w,R=[],N=0;N<A;N++)R[N]=0<C?c.i(N+w)>>>C|c.i(N+w+1)<<32-C:c.i(N+w);return new u(R,c.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,id=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=E,ti=u}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sd,Vs,od,oa,Yu,ad,ud,ld;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,v){return a==Array.prototype||a==Object.prototype||(a[d]=v.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var d=0;d<a.length;++d){var v=a[d];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=t(this);function i(a,d){if(d)e:{var v=r;a=a.split(".");for(var b=0;b<a.length-1;b++){var U=a[b];if(!(U in v))break e;v=v[U]}a=a[a.length-1],b=v[a],d=d(b),d!=b&&d!=null&&e(v,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var v=0,b=!1,U={next:function(){if(!b&&v<a.length){var H=v++;return{value:d(H,a[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function g(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function m(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function E(a,d,v){return a.call.apply(a.bind,arguments)}function P(a,d,v){if(!a)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),a.apply(d,U)}}return function(){return a.apply(d,arguments)}}function O(a,d,v){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:P,O.apply(null,arguments)}function F(a,d){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function L(a,d){function v(){}v.prototype=d.prototype,a.aa=d.prototype,a.prototype=new v,a.prototype.constructor=a,a.Qb=function(b,U,H){for(var ne=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)ne[Qe-2]=arguments[Qe];return d.prototype[U].apply(b,ne)}}function V(a){const d=a.length;if(0<d){const v=Array(d);for(let b=0;b<d;b++)v[b]=a[b];return v}return[]}function q(a,d){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(g(b)){const U=a.length||0,H=b.length||0;a.length=U+H;for(let ne=0;ne<H;ne++)a[U+ne]=b[ne]}else a.push(b)}}class ${constructor(d,v){this.i=d,this.j=v,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function X(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=h.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var ee=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function J(a,d,v){for(const b in a)d.call(v,a[b],b,a)}function c(a,d){for(const v in a)d.call(void 0,a[v],v,a)}function C(a){const d={};for(const v in a)d[v]=a[v];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,d){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)a[v]=b[v];for(let H=0;H<w.length;H++)v=w[H],Object.prototype.hasOwnProperty.call(b,v)&&(a[v]=b[v])}}function R(a){var d=1;a=a.split(":");const v=[];for(;0<d&&a.length;)v.push(a.shift()),d--;return a.length&&v.push(a.join(":")),v}function N(a){h.setTimeout(()=>{throw a},0)}function I(){var a=ce;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class de{constructor(){this.h=this.g=null}add(d,v){const b=_e.get();b.set(d,v),this.h?this.h.next=b:this.g=b,this.h=b}}var _e=new $(()=>new Je,a=>a.reset());class Je{constructor(){this.next=this.g=this.h=null}set(d,v){this.h=d,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,he=!1,ce=new de,ie=()=>{const a=h.Promise.resolve(void 0);Se=()=>{a.then(me)}};var me=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(v){N(v)}var d=_e;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}he=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const v=()=>{};h.addEventListener("test",v,d),h.removeEventListener("test",v,d)}catch{}return a}();function Et(a,d){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var v=this.type=a.type,b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(ee){e:{try{Y(d.nodeName);var U=!0;break e}catch{}U=!1}U||(d=null)}}else v=="mouseover"?d=a.fromElement:v=="mouseout"&&(d=a.toElement);this.relatedTarget=d,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:se[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Et.aa.h.call(this)}}L(Et,xe);var se={2:"touch",3:"pen",4:"mouse"};Et.prototype.h=function(){Et.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(1e6*Math.random()|0),pt=0;function et(a,d,v,b,U){this.listener=a,this.proxy=null,this.src=d,this.type=v,this.capture=!!b,this.ha=U,this.key=++pt,this.da=this.fa=!1}function ze(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _n(a){this.src=a,this.g={},this.h=0}_n.prototype.add=function(a,d,v,b,U){var H=a.toString();a=this.g[H],a||(a=this.g[H]=[],this.h++);var ne=ae(a,d,b,U);return-1<ne?(d=a[ne],v||(d.fa=!1)):(d=new et(d,this.src,H,!!b,U),d.fa=v,a.push(d)),d};function Vt(a,d){var v=d.type;if(v in a.g){var b=a.g[v],U=Array.prototype.indexOf.call(b,d,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(ze(d),a.g[v].length==0&&(delete a.g[v],a.h--))}}function ae(a,d,v,b){for(var U=0;U<a.length;++U){var H=a[U];if(!H.da&&H.listener==d&&H.capture==!!v&&H.ha==b)return U}return-1}var We="closure_lm_"+(1e6*Math.random()|0),Mt={};function qt(a,d,v,b,U){if(Array.isArray(d)){for(var H=0;H<d.length;H++)qt(a,d[H],v,b,U);return null}return v=pe(v),a&&a[je]?a.K(d,v,m(b)?!!b.capture:!!b,U):Le(a,d,v,!1,b,U)}function Le(a,d,v,b,U,H){if(!d)throw Error("Invalid event type");var ne=m(U)?!!U.capture:!!U,Qe=Mn(a);if(Qe||(a[We]=Qe=new _n(a)),v=Qe.add(d,v,b,ne,H),v.proxy)return v;if(b=kt(),v.proxy=b,b.src=a,b.listener=v,a.addEventListener)ot||(U=ne),U===void 0&&(U=!1),a.addEventListener(d.toString(),b,U);else if(a.attachEvent)a.attachEvent(Co(d.toString()),b);else if(a.addListener&&a.removeListener)a.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function kt(){function a(v){return d.call(a.src,a.listener,v)}const d=Jt;return a}function pi(a,d,v,b,U){if(Array.isArray(d))for(var H=0;H<d.length;H++)pi(a,d[H],v,b,U);else b=m(b)?!!b.capture:!!b,v=pe(v),a&&a[je]?(a=a.i,d=String(d).toString(),d in a.g&&(H=a.g[d],v=ae(H,v,b,U),-1<v&&(ze(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete a.g[d],a.h--)))):a&&(a=Mn(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ae(d,v,b,U)),(v=-1<a?d[a]:null)&&Fr(v))}function Fr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[je])Vt(d.i,a);else{var v=a.type,b=a.proxy;d.removeEventListener?d.removeEventListener(v,b,a.capture):d.detachEvent?d.detachEvent(Co(v),b):d.addListener&&d.removeListener&&d.removeListener(b),(v=Mn(d))?(Vt(v,a),v.h==0&&(v.src=null,d[We]=null)):ze(a)}}}function Co(a){return a in Mt?Mt[a]:Mt[a]="on"+a}function Jt(a,d){if(a.da)a=!0;else{d=new Et(d,this);var v=a.listener,b=a.ha||a.src;a.fa&&Fr(a),a=v.call(b,d)}return a}function Mn(a){return a=a[We],a instanceof _n?a:null}var Fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(a){return typeof a=="function"?a:(a[Fn]||(a[Fn]=function(d){return a.handleEvent(d)}),a[Fn])}function Ke(){Ae.call(this),this.i=new _n(this),this.M=this,this.F=null}L(Ke,Ae),Ke.prototype[je]=!0,Ke.prototype.removeEventListener=function(a,d,v,b){pi(this,a,d,v,b)};function At(a,d){var v,b=a.F;if(b)for(v=[];b;b=b.F)v.push(b);if(a=a.M,b=d.type||d,typeof d=="string")d=new xe(d,a);else if(d instanceof xe)d.target=d.target||a;else{var U=d;d=new xe(b,a),A(d,U)}if(U=!0,v)for(var H=v.length-1;0<=H;H--){var ne=d.g=v[H];U=gi(ne,b,!0,d)&&U}if(ne=d.g=a,U=gi(ne,b,!0,d)&&U,U=gi(ne,b,!1,d)&&U,v)for(H=0;H<v.length;H++)ne=d.g=v[H],U=gi(ne,b,!1,d)&&U}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var v=a.g[d],b=0;b<v.length;b++)ze(v[b]);delete a.g[d],a.h--}}this.F=null},Ke.prototype.K=function(a,d,v,b){return this.i.add(String(a),d,!1,v,b)},Ke.prototype.L=function(a,d,v,b){return this.i.add(String(a),d,!0,v,b)};function gi(a,d,v,b){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var U=!0,H=0;H<d.length;++H){var ne=d[H];if(ne&&!ne.da&&ne.capture==v){var Qe=ne.listener,tt=ne.ha||ne.src;ne.fa&&Vt(a.i,ne),U=Qe.call(tt,b)!==!1&&U}}return U&&!b.defaultPrevented}function So(a,d,v){if(typeof a=="function")v&&(a=O(a,v));else if(a&&typeof a.handleEvent=="function")a=O(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:h.setTimeout(a,d||0)}function gs(a){a.g=So(()=>{a.g=null,a.i&&(a.i=!1,gs(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ro extends Ae{constructor(d,v){super(),this.m=d,this.l=v,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gs(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hn(a){Ae.call(this),this.h=a,this.g={}}L(hn,Ae);var Zt=[];function En(a){J(a.g,function(d,v){this.g.hasOwnProperty(v)&&Fr(d)},a),a.g={}}hn.prototype.N=function(){hn.aa.N.call(this),En(this)},hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=h.JSON.stringify,ou=h.JSON.parse,mi=class{stringify(a){return h.JSON.stringify(a,void 0)}parse(a){return h.JSON.parse(a,void 0)}};function vi(){}vi.prototype.h=null;function ms(a){return a.h||(a.h=a.i())}function Po(){}var en={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){xe.call(this,"d")}L(Un,xe);function yi(){xe.call(this,"c")}L(yi,xe);var wn={},Ft=null;function vt(){return Ft=Ft||new Ke}wn.La="serverreachability";function _i(a){xe.call(this,wn.La,a)}L(_i,xe);function Ur(a){const d=vt();At(d,new _i(d))}wn.STAT_EVENT="statevent";function vs(a,d){xe.call(this,wn.STAT_EVENT,a),this.stat=d}L(vs,xe);function Tt(a){const d=vt();At(d,new vs(d,a))}wn.Ma="timingevent";function jn(a,d){xe.call(this,wn.Ma,a),this.size=d}L(jn,xe);function tn(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){a()},d)}function Bn(){this.g=!0}Bn.prototype.xa=function(){this.g=!1};function Ei(a,d,v,b,U,H){a.info(function(){if(a.g)if(H)for(var ne="",Qe=H.split("&"),tt=0;tt<Qe.length;tt++){var Pe=Qe[tt].split("=");if(1<Pe.length){var wt=Pe[0];Pe=Pe[1];var It=wt.split("_");ne=2<=It.length&&It[1]=="type"?ne+(wt+"="+Pe+"&"):ne+(wt+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+d+`
`+v+`
`+ne})}function au(a,d,v,b,U,H,ne){a.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+d+`
`+v+`
`+H+" "+ne})}function cr(a,d,v,b){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+ko(a,v)+(b?" "+b:"")})}function uu(a,d){a.info(function(){return"TIMEOUT: "+d})}Bn.prototype.info=function(){};function ko(a,d){if(!a.g)return d;if(!d)return null;try{var v=JSON.parse(d);if(v){for(a=0;a<v.length;a++)if(Array.isArray(v[a])){var b=v[a];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<U.length;ne++)U[ne]=""}}}}return Tn(v)}catch{return d}}var Ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},No={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function Ii(){}L(Ii,vi),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},wi=new Ii;function Ut(a,d,v,b){this.j=a,this.i=d,this.l=v,this.R=b||1,this.U=new hn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var bi={},jr={};function hr(a,d,v){a.L=1,a.v=In(rn(d)),a.m=v,a.P=!0,_s(a,null)}function _s(a,d){a.F=Date.now(),$r(a),a.A=rn(a.v);var v=a.A,b=a.R;Array.isArray(b)||(b=[String(b)]),As(v.i,"t",b),a.C=0,v=a.j.J,a.h=new ys,a.g=Xt(a.j,v?d:null,!a.m),0<a.O&&(a.M=new Ro(O(a.Y,a,a.g),a.O)),d=a.U,v=a.g,b=a.ca;var U="readystatechange";Array.isArray(U)||(U&&(Zt[0]=U.toString()),U=Zt);for(var H=0;H<U.length;H++){var ne=qt(v,U[H],b||d.handleEvent,!1,d.h||d);if(!ne)break;d.g[ne.key]=ne}d=a.H?C(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ur(),Ei(a.i,a.u,a.A,a.l,a.R,a.m)}Ut.prototype.ca=function(a){a=a.target;const d=this.M;d&&Qt(a)==3?d.j():this.Y(a)},Ut.prototype.Y=function(a){try{if(a==this.g)e:{const It=Qt(this.g);var d=this.g.Ba();const gr=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||It!=4||d==7||(d==8||0>=gr?Ur(3):Ur(2)),Ai(this);var v=this.g.Z();this.X=v;t:if(Do(this)){var b=qo(this.g);a="";var U=b.length,H=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$n(this),fr(this);var ne="";break t}this.h.i=new h.TextDecoder}for(d=0;d<U;d++)this.h.h=!0,a+=this.h.i.decode(b[d],{stream:!(H&&d==U-1)});b.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,au(this.i,this.u,this.A,this.l,this.R,It,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,tt=this.g;if((Qe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(Qe)){var Pe=Qe;break t}}Pe=null}if(v=Pe)cr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,v);else{this.o=!1,this.s=3,Tt(12),$n(this),fr(this);break e}}if(this.P){v=!0;let Ne;for(;!this.J&&this.C<ne.length;)if(Ne=Br(this,ne),Ne==jr){It==4&&(this.s=4,Tt(14),v=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==bi){this.s=4,Tt(15),cr(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else cr(this.i,this.l,Ne,null),qr(this,Ne);if(Do(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||ne.length!=0||this.h.h||(this.s=1,Tt(16),v=!1),this.o=this.o&&v,!v)cr(this.i,this.l,ne,"[Invalid Chunked Response]"),$n(this),fr(this);else if(0<ne.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),G(wt),wt.M=!0,Tt(11))}}else cr(this.i,this.l,ne,null),qr(this,ne);It==4&&$n(this),this.o&&!this.J&&(It==4?Ee(this.j,this):(this.o=!1,$r(this)))}else mu(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),$n(this),fr(this)}}}catch{}finally{}};function Do(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Br(a,d){var v=a.C,b=d.indexOf(`
`,v);return b==-1?jr:(v=Number(d.substring(v,b)),isNaN(v)?bi:(b+=1,b+v>d.length?jr:(d=d.slice(b,b+v),a.C=b+v,d)))}Ut.prototype.cancel=function(){this.J=!0,$n(this)};function $r(a){a.S=Date.now()+a.I,Es(a,a.I)}function Es(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=tn(O(a.ba,a),d)}function Ai(a){a.B&&(h.clearTimeout(a.B),a.B=null)}Ut.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uu(this.i,this.A),this.L!=2&&(Ur(),Tt(17)),$n(this),this.s=2,fr(this)):Es(this,this.S-a)};function fr(a){a.j.G==0||a.J||Ee(a.j,a)}function $n(a){Ai(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,En(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function qr(a,d){try{var v=a.j;if(v.G!=0&&(v.g==a||Hr(v.h,a))){if(!a.K&&Hr(v.h,a)&&v.G==3){try{var b=v.Da.g.parse(d)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<a.F)Z(v),f(v);else break e;W(v),Tt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=tn(O(v.Za,v),6e3));if(1>=ws(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Te(v,11)}else if((a.K||v.g==a)&&Z(v),!X(d))for(U=v.Da.g.parse(d),d=0;d<U.length;d++){let Pe=U[d];if(v.T=Pe[0],Pe=Pe[1],v.G==2)if(Pe[0]=="c"){v.K=Pe[1],v.ia=Pe[2];const wt=Pe[3];wt!=null&&(v.la=wt,v.j.info("VER="+v.la));const It=Pe[4];It!=null&&(v.Aa=It,v.j.info("SVER="+v.Aa));const gr=Pe[5];gr!=null&&typeof gr=="number"&&0<gr&&(b=1.5*gr,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Ne=a.g;if(Ne){const Gn=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var H=b.h;H.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Ci(H,H.h),H.h=null))}if(b.D){const jt=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;jt&&(b.ya=jt,Ze(b.I,b.D,jt))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-a.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var ne=a;if(b.qa=ut(b,b.J?b.ia:null,b.W),ne.K){Ct(b.h,ne);var Qe=ne,tt=b.L;tt&&(Qe.I=tt),Qe.B&&(Ai(Qe),$r(Qe)),b.g=ne}else M(b);0<v.i.length&&y(v)}else Pe[0]!="stop"&&Pe[0]!="close"||Te(v,7);else v.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Te(v,7):l(v):Pe[0]!="noop"&&v.l&&v.l.ta(Pe),v.v=0)}}Ur(4)}catch{}}var lu=class{constructor(a,d){this.g=a,this.map=d}};function Oo(a){this.l=a||10,h.PerformanceNavigationTiming?(a=h.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ts(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ws(a){return a.h?1:a.g?a.g.size:0}function Hr(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ci(a,d){a.g?a.g.add(d):a.h=d}function Ct(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Oo.prototype.cancel=function(){if(this.i=qn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function qn(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const v of a.g.values())d=d.concat(v.D);return d}return V(a.i)}function Si(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(g(a)){for(var d=[],v=a.length,b=0;b<v;b++)d.push(a[b]);return d}d=[],v=0;for(b in a)d[v++]=a[b];return d}function cu(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(g(a)||typeof a=="string"){var d=[];a=a.length;for(var v=0;v<a;v++)d.push(v);return d}d=[],v=0;for(const b in a)d[v++]=b;return d}}}function Lo(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(g(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var v=cu(a),b=Si(a),U=b.length,H=0;H<U;H++)d.call(void 0,b[H],v&&v[H],a)}var Ri=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xo(a,d){if(a){a=a.split("&");for(var v=0;v<a.length;v++){var b=a[v].indexOf("="),U=null;if(0<=b){var H=a[v].substring(0,b);U=a[v].substring(b+1)}else H=a[v];d(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function nn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof nn){this.h=a.h,Pi(this,a.j),this.o=a.o,this.g=a.g,ki(this,a.s),this.l=a.l;var d=a.i,v=new zn;v.i=d.i,d.g&&(v.g=new Map(d.g),v.h=d.h),Ht(this,v),this.m=a.m}else a&&(d=String(a).match(Ri))?(this.h=!1,Pi(this,d[1]||"",!0),this.o=zr(d[2]||""),this.g=zr(d[3]||"",!0),ki(this,d[4]),this.l=zr(d[5]||"",!0),Ht(this,d[6]||"",!0),this.m=zr(d[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}nn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Wr(d,bn,!0),":");var v=this.g;return(v||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Wr(d,bn,!0),"@"),a.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&a.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&a.push("/"),a.push(Wr(v,v.charAt(0)=="/"?hu:Is,!0))),(v=this.i.toString())&&a.push("?",v),(v=this.m)&&a.push("#",Wr(v,Vo)),a.join("")};function rn(a){return new nn(a)}function Pi(a,d,v){a.j=v?zr(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ki(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Ht(a,d,v){d instanceof zn?(a.i=d,fu(a.i,a.h)):(v||(d=Wr(d,Gr)),a.i=new zn(d,a.h))}function Ze(a,d,v){a.i.set(d,v)}function In(a){return Ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function zr(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Wr(a,d,v){return typeof a=="string"?(a=encodeURI(a).replace(d,Hn),v&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hn(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bn=/[#\/\?@]/g,Is=/[#\?:]/g,hu=/[#\?]/g,Gr=/[#\?@]/g,Vo=/#/g;function zn(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function fn(a){a.g||(a.g=new Map,a.h=0,a.i&&xo(a.i,function(d,v){a.add(decodeURIComponent(d.replace(/\+/g," ")),v)}))}n=zn.prototype,n.add=function(a,d){fn(this),this.i=null,a=dr(this,a);var v=this.g.get(a);return v||this.g.set(a,v=[]),v.push(d),this.h+=1,this};function bs(a,d){fn(a),d=dr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Mo(a,d){return fn(a),d=dr(a,d),a.g.has(d)}n.forEach=function(a,d){fn(this),this.g.forEach(function(v,b){v.forEach(function(U){a.call(d,U,b,this)},this)},this)},n.na=function(){fn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),v=[];for(let b=0;b<d.length;b++){const U=a[b];for(let H=0;H<U.length;H++)v.push(d[b])}return v},n.V=function(a){fn(this);let d=[];if(typeof a=="string")Mo(this,a)&&(d=d.concat(this.g.get(dr(this,a))));else{a=Array.from(this.g.values());for(let v=0;v<a.length;v++)d=d.concat(a[v])}return d},n.set=function(a,d){return fn(this),this.i=null,a=dr(this,a),Mo(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function As(a,d,v){bs(a,d),0<v.length&&(a.i=null,a.g.set(dr(a,d),V(v)),a.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var v=0;v<d.length;v++){var b=d[v];const H=encodeURIComponent(String(b)),ne=this.V(b);for(b=0;b<ne.length;b++){var U=H;ne[b]!==""&&(U+="="+encodeURIComponent(String(ne[b]))),a.push(U)}}return this.i=a.join("&")};function dr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function fu(a,d){d&&!a.j&&(fn(a),a.i=null,a.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(bs(this,b),As(this,U,v))},a)),a.j=d}function Cs(a,d){const v=new Bn;if(h.Image){const b=new Image;b.onload=F(An,v,"TestLoadImage: loaded",!0,d,b),b.onerror=F(An,v,"TestLoadImage: error",!1,d,b),b.onabort=F(An,v,"TestLoadImage: abort",!1,d,b),b.ontimeout=F(An,v,"TestLoadImage: timeout",!1,d,b),h.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=a}else d(!1)}function du(a,d){const v=new Bn,b=new AbortController,U=setTimeout(()=>{b.abort(),An(v,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?An(v,"TestPingServer: ok",!0,d):An(v,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(U),An(v,"TestPingServer: error",!1,d)})}function An(a,d,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function pu(){this.g=new mi}function gu(a,d,v){const b=v||"";try{Lo(a,function(U,H){let ne=U;m(U)&&(ne=Tn(U)),d.push(b+H+"="+encodeURIComponent(ne))})}catch(U){throw d.push(b+"type="+encodeURIComponent("_badmap")),U}}function Ni(a){this.l=a.Ub||null,this.j=a.eb||!1}L(Ni,vi),Ni.prototype.g=function(){return new Di(this.l,this.j)},Ni.prototype.i=function(a){return function(){return a}}({});function Di(a,d){Ke.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(Di,Ke),n=Di.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Wn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||h).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fo(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fo(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?pr(this):Wn(this),this.readyState==3&&Fo(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,pr(this))},n.Qa=function(a){this.g&&(this.response=a,pr(this))},n.ga=function(){this.g&&pr(this)};function pr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Wn(a)}n.setRequestHeader=function(a,d){this.u.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var v=d.next();!v.done;)v=v.value,a.push(v[0]+": "+v[1]),v=d.next();return a.join(`\r
`)};function Wn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ss(a){let d="";return J(a,function(v,b){d+=b,d+=":",d+=v,d+=`\r
`}),d}function Kr(a,d,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Ss(v),typeof a=="string"?v!=null&&encodeURIComponent(String(v)):Ze(a,d,v))}function it(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(it,Ke);var Uo=/^https?$/i,Rs=["POST","PUT"];n=it.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,d,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?ms(this.o):ms(wi),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(H){jo(this,H);return}if(a=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())v.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),U=h.FormData&&a instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Rs,d,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of v)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(a),this.u=!1}catch(H){jo(this,H)}};function jo(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Bo(a),Cn(a)}function Bo(a){a.A||(a.A=!0,At(a,"complete"),At(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,At(this,"complete"),At(this,"abort"),Cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?$o(this):this.bb())},n.bb=function(){$o(this)};function $o(a){if(a.h&&typeof u<"u"&&(!a.v[1]||Qt(a)!=4||a.Z()!=2)){if(a.u&&Qt(a)==4)So(a.Ea,0,a);else if(At(a,"readystatechange"),Qt(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var v;if(!(v=d)){var b;if(b=ne===0){var U=String(a.D).match(Ri)[1]||null;!U&&h.self&&h.self.location&&(U=h.self.location.protocol.slice(0,-1)),b=!Uo.test(U?U.toLowerCase():"")}v=b}if(v)At(a,"complete"),At(a,"success");else{a.m=6;try{var H=2<Qt(a)?a.g.statusText:""}catch{H=""}a.l=H+" ["+a.Z()+"]",Bo(a)}}finally{Cn(a)}}}}function Cn(a,d){if(a.g){Ps(a);const v=a.g,b=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||At(a,"ready");try{v.onreadystatechange=b}catch{}}}function Ps(a){a.I&&(h.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Qt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ou(d)}};function qo(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mu(a){const d={};a=(a.g&&2<=Qt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<a.length;b++){if(X(a[b]))continue;var v=R(a[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=d[U]||[];d[U]=H,H.push(v)}c(d,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qr(a,d,v){return v&&v.internalChannelParams&&v.internalChannelParams[a]||d}function s(a){this.Aa=0,this.i=[],this.j=new Bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qr("baseRetryDelayMs",5e3,a),this.cb=Qr("retryDelaySeedMs",1e4,a),this.Wa=Qr("forwardChannelMaxRetries",2,a),this.wa=Qr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Oo(a&&a.concurrentRequestLimit),this.Da=new pu,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=s.prototype,n.la=8,n.G=1,n.connect=function(a,d,v,b){Tt(0),this.W=a,this.H=d||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=ut(this,null,this.W),y(this)};function l(a){if(p(a),a.G==3){var d=a.U++,v=rn(a.I);if(Ze(v,"SID",a.K),Ze(v,"RID",d),Ze(v,"TYPE","terminate"),D(a,v),d=new Ut(a,a.j,d),d.L=2,d.v=In(rn(v)),v=!1,h.navigator&&h.navigator.sendBeacon)try{v=h.navigator.sendBeacon(d.v.toString(),"")}catch{}!v&&h.Image&&(new Image().src=d.v,v=!0),v||(d.g=Xt(d.j,null),d.g.ea(d.v)),d.F=Date.now(),$r(d)}gt(a)}function f(a){a.g&&(G(a),a.g.cancel(),a.g=null)}function p(a){f(a),a.u&&(h.clearTimeout(a.u),a.u=null),Z(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&h.clearTimeout(a.s),a.s=null)}function y(a){if(!Ts(a.h)&&!a.s){a.s=!0;var d=a.Ga;Se||ie(),he||(Se(),he=!0),ce.add(d,a),a.B=0}}function _(a,d){return ws(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=tn(O(a.Ga,a,d),Ve(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const U=new Ut(this,this.j,a);let H=this.o;if(this.S&&(H?(H=C(H),A(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var d=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(d+=b,4096<d){d=v;break e}if(d===4096||v===this.i.length-1){d=v+1;break e}}d=1e3}else d=1e3;d=k(this,U,d),v=rn(this.I),Ze(v,"RID",a),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),D(this,v),H&&(this.O?d="headers="+encodeURIComponent(String(Ss(H)))+"&"+d:this.m&&Kr(v,this.m,H)),Ci(this.h,U),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",d),Ze(v,"SID","null"),U.T=!0,hr(U,v,null)):hr(U,v,d),this.G=2}}else this.G==3&&(a?T(this,a):this.i.length==0||Ts(this.h)||T(this))};function T(a,d){var v;d?v=d.l:v=a.U++;const b=rn(a.I);Ze(b,"SID",a.K),Ze(b,"RID",v),Ze(b,"AID",a.T),D(a,b),a.m&&a.o&&Kr(b,a.m,a.o),v=new Ut(a,a.j,v,a.B+1),a.m===null&&(v.H=a.o),d&&(a.i=d.D.concat(a.i)),d=k(a,v,1e3),v.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ci(a.h,v),hr(v,b,d)}function D(a,d){a.H&&J(a.H,function(v,b){Ze(d,b,v)}),a.l&&Lo({},function(v,b){Ze(d,b,v)})}function k(a,d,v){v=Math.min(a.i.length,v);var b=a.l?O(a.l.Na,a.l,a):null;e:{var U=a.i;let H=-1;for(;;){const ne=["count="+v];H==-1?0<v?(H=U[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let Qe=!0;for(let tt=0;tt<v;tt++){let Pe=U[tt].g;const wt=U[tt].map;if(Pe-=H,0>Pe)H=Math.max(0,U[tt].g-100),Qe=!1;else try{gu(wt,ne,"req"+Pe+"_")}catch{b&&b(wt)}}if(Qe){b=ne.join("&");break e}}}return a=a.i.splice(0,v),d.D=a,b}function M(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Se||ie(),he||(Se(),he=!0),ce.add(d,a),a.v=0}}function W(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=tn(O(a.Fa,a),Ve(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,B(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=tn(O(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),f(this),B(this))};function G(a){a.A!=null&&(h.clearTimeout(a.A),a.A=null)}function B(a){a.g=new Ut(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=rn(a.qa);Ze(d,"RID","rpc"),Ze(d,"SID",a.K),Ze(d,"AID",a.T),Ze(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ze(d,"TO",a.ja),Ze(d,"TYPE","xmlhttp"),D(a,d),a.m&&a.o&&Kr(d,a.m,a.o),a.L&&(a.g.I=a.L);var v=a.g;a=a.ia,v.L=1,v.v=In(rn(d)),v.m=null,v.P=!0,_s(v,a)}n.Za=function(){this.C!=null&&(this.C=null,f(this),W(this),Tt(19))};function Z(a){a.C!=null&&(h.clearTimeout(a.C),a.C=null)}function Ee(a,d){var v=null;if(a.g==d){Z(a),G(a),a.g=null;var b=2}else if(Hr(a.h,d))v=d.D,Ct(a.h,d),b=1;else return;if(a.G!=0){if(d.o)if(b==1){v=d.m?d.m.length:0,d=Date.now()-d.F;var U=a.B;b=vt(),At(b,new jn(b,v)),y(a)}else M(a);else if(U=d.s,U==3||U==0&&0<d.X||!(b==1&&_(a,d)||b==2&&W(a)))switch(v&&0<v.length&&(d=a.h,d.i=d.i.concat(v)),U){case 1:Te(a,5);break;case 4:Te(a,10);break;case 3:Te(a,6);break;default:Te(a,2)}}}function Ve(a,d){let v=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(v*=2),v*d}function Te(a,d){if(a.j.info("Error code "+d),d==2){var v=O(a.fb,a),b=a.Xa;const U=!b;b=new nn(b||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Pi(b,"https"),In(b),U?Cs(b.toString(),v):du(b.toString(),v)}else Tt(2);a.G=0,a.l&&a.l.sa(d),gt(a),p(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function gt(a){if(a.G=0,a.ka=[],a.l){const d=qn(a.h);(d.length!=0||a.i.length!=0)&&(q(a.ka,d),q(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function ut(a,d,v){var b=v instanceof nn?rn(v):new nn(v);if(b.g!="")d&&(b.g=d+"."+b.g),ki(b,b.s);else{var U=h.location;b=U.protocol,d=d?d+"."+U.hostname:U.hostname,U=+U.port;var H=new nn(null);b&&Pi(H,b),d&&(H.g=d),U&&ki(H,U),v&&(H.l=v),b=H}return v=a.D,d=a.ya,v&&d&&Ze(b,v,d),Ze(b,"VER",a.la),D(a,b),b}function Xt(a,d,v){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new it(new Ni({eb:v})):new it(a.pa),d.Ha(a.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yt(){}n=Yt.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ke(){}ke.prototype.g=function(a,d){return new ht(a,d)};function ht(a,d){Ke.call(this),this.g=new s(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!X(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!X(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new sn(this)}L(ht,Ke),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){l(this.g)},ht.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var v={};v.__data__=a,a=v}else this.u&&(v={},v.__data__=Tn(a),a=v);d.i.push(new lu(d.Ya++,a)),d.G==3&&y(d)},ht.prototype.N=function(){this.g.l=null,delete this.j,l(this.g),delete this.g,ht.aa.N.call(this)};function Ue(a){Un.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const v in d){a=v;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}L(Ue,Un);function st(){yi.call(this),this.status=1}L(st,yi);function sn(a){this.g=a}L(sn,Yt),sn.prototype.ua=function(){At(this.g,"a")},sn.prototype.ta=function(a){At(this.g,new Ue(a))},sn.prototype.sa=function(a){At(this.g,new st)},sn.prototype.ra=function(){At(this.g,"b")},ke.prototype.createWebChannel=ke.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,ld=function(){return new ke},ud=function(){return vt()},ad=wn,Yu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,oa=Ti,No.COMPLETE="complete",od=No,Po.EventType=en,en.OPEN="a",en.CLOSE="b",en.ERROR="c",en.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Vs=Po,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,sd=it}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const ah="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new wl("@firebase/firestore");function Os(){return ui.logLevel}function fe(n,...e){if(ui.logLevel<=$e.DEBUG){const t=e.map(Vl);ui.debug(`Firestore (${us}): ${n}`,...t)}}function or(n,...e){if(ui.logLevel<=$e.ERROR){const t=e.map(Vl);ui.error(`Firestore (${us}): ${n}`,...t)}}function Yi(n,...e){if(ui.logLevel<=$e.WARN){const t=e.map(Vl);ui.warn(`Firestore (${us}): ${n}`,...t)}}function Vl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n="Unexpected state"){const e=`FIRESTORE (${us}) INTERNAL ASSERTION FAILED: `+n;throw or(e),new Error(e)}function ct(n,e){n||Oe()}function He(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends ur{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ot.UNAUTHENTICATED))}shutdown(){}}class u_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class l_{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ct(this.o===void 0);let r=this.i;const i=g=>this.i!==r?(r=this.i,t(g)):Promise.resolve();let o=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ni,e.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const g=o;e.enqueueRetryable(async()=>{await g.promise,await i(this.currentUser)})},h=g=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(g=>h(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?h(g):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ni)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ct(typeof r.accessToken=="string"),new cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ct(e===null||typeof e=="string"),new Ot(e)}}class c_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class h_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new c_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ct(this.o===void 0);const r=o=>{o.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,fe("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ct(typeof t.token=="string"),this.R=t.token,new f_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=p_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Xe(n,e){return n<e?-1:n>e?1:0}function Ji(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(oe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(oe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Gt.fromMillis(Date.now())}static fromDate(e){return Gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Gt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Xe(this.nanoseconds,e.nanoseconds):Xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Gt(0,0))}static max(){return new Re(new Gt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,r){t===void 0?t=0:t>e.length&&Oe(),r===void 0?r=e.length-t:r>e.length-t&&Oe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ks.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ks?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),u=t.get(i);if(o<u)return-1;if(o>u)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class lt extends Ks{construct(e,t,r){return new lt(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(oe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const m_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Ks{construct(e,t,r){return new $t(e,t,r)}static isValidIdentifier(e){return m_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ye(oe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;i<e.length;){const h=e[i];if(h==="\\"){if(i+1===e.length)throw new ye(oe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[i+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(oe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=g,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(r+=h,i++):(o(),i++)}if(o(),u)throw new ye(oe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.path=e}static fromPath(e){return new be(lt.fromString(e))}static fromName(e){return new be(lt.fromString(e).popFirst(5))}static empty(){return new be(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new be(new lt(e.slice()))}}function v_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(r===1e9?new Gt(t+1,0):new Gt(t,r));return new Rr(i,be.empty(),e)}function y_(n){return new Rr(n.readTime,n.key,-1)}class Rr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rr(Re.min(),be.empty(),-1)}static max(){return new Rr(Re.max(),be.empty(),-1)}}function __(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=be.comparator(n.documentKey,e.documentKey),t!==0?t:Xe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(n){if(n.code!==oe.FAILED_PRECONDITION||n.message!==E_)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,r)=>{t(e)})}static reject(e){return new te((t,r)=>{r(e)})}static waitFor(e){return new te((t,r)=>{let i=0,o=0,u=!1;e.forEach(h=>{++i,h.next(()=>{++o,u&&o===i&&t()},g=>r(g))}),u=!0,o===i&&t()})}static or(e){let t=te.resolve(!1);for(const r of e)t=t.next(i=>i?te.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new te((r,i)=>{const o=e.length,u=new Array(o);let h=0;for(let g=0;g<o;g++){const m=g;t(e[m]).next(E=>{u[m]=E,++h,h===o&&r(u)},E=>i(E))}})}static doWhile(e,t){return new te((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function w_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fl.oe=-1;function Ma(n){return n==null}function Ju(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function I_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=o??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new St(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Oe();const e=this.left.check();if(e!==this.right.check())throw Oe();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe()}get value(){throw Oe()}get color(){throw Oe()}get left(){throw Oe()}get right(){throw Oe()}copy(e,t,r,i,o){return this}insert(e,t,r){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lh(this.data.getIterator())}getIteratorFrom(e){return new lh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Rt(this.comparator);return t.data=e,t}}class lh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new wr([])}unionWith(e){let t=new Rt($t.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ji(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hd("Invalid base64 string: "+o):o}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const b_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(n){if(ct(!!n),typeof n=="string"){let e=0;const t=b_.exec(n);if(ct(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function li(n){return typeof n=="string"?Pt.fromBase64String(n):Pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function jl(n){const e=n.mapValue.fields.__previous_value__;return Ul(e)?jl(e):e}function Qs(n){const e=Pr(n.mapValue.fields.__local_write_time__.timestampValue);return new Gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,r,i,o,u,h,g,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=g,this.useFetchStreams=m}}class Xs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ul(n)?4:S_(n)?9007199254740991:C_(n)?10:11:Oe()}function Dn(n,e){if(n===e)return!0;const t=ci(n);if(t!==ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qs(n).isEqual(Qs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Pr(i.timestampValue),h=Pr(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return li(i.bytesValue).isEqual(li(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ft(i.geoPointValue.latitude)===ft(o.geoPointValue.latitude)&&ft(i.geoPointValue.longitude)===ft(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ft(i.integerValue)===ft(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=ft(i.doubleValue),h=ft(o.doubleValue);return u===h?Ju(u)===Ju(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return Ji(n.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(uh(u)!==uh(h))return!1;for(const g in u)if(u.hasOwnProperty(g)&&(h[g]===void 0||!Dn(u[g],h[g])))return!1;return!0}(n,e);default:return Oe()}}function Ys(n,e){return(n.values||[]).find(t=>Dn(t,e))!==void 0}function Zi(n,e){if(n===e)return 0;const t=ci(n),r=ci(e);if(t!==r)return Xe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Xe(n.booleanValue,e.booleanValue);case 2:return function(o,u){const h=ft(o.integerValue||o.doubleValue),g=ft(u.integerValue||u.doubleValue);return h<g?-1:h>g?1:h===g?0:isNaN(h)?isNaN(g)?0:-1:1}(n,e);case 3:return ch(n.timestampValue,e.timestampValue);case 4:return ch(Qs(n),Qs(e));case 5:return Xe(n.stringValue,e.stringValue);case 6:return function(o,u){const h=li(o),g=li(u);return h.compareTo(g)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const h=o.split("/"),g=u.split("/");for(let m=0;m<h.length&&m<g.length;m++){const E=Xe(h[m],g[m]);if(E!==0)return E}return Xe(h.length,g.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const h=Xe(ft(o.latitude),ft(u.latitude));return h!==0?h:Xe(ft(o.longitude),ft(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hh(n.arrayValue,e.arrayValue);case 10:return function(o,u){var h,g,m,E;const P=o.fields||{},O=u.fields||{},F=(h=P.value)===null||h===void 0?void 0:h.arrayValue,L=(g=O.value)===null||g===void 0?void 0:g.arrayValue,V=Xe(((m=F==null?void 0:F.values)===null||m===void 0?void 0:m.length)||0,((E=L==null?void 0:L.values)===null||E===void 0?void 0:E.length)||0);return V!==0?V:hh(F,L)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Yo.mapValue&&u===Yo.mapValue)return 0;if(o===Yo.mapValue)return 1;if(u===Yo.mapValue)return-1;const h=o.fields||{},g=Object.keys(h),m=u.fields||{},E=Object.keys(m);g.sort(),E.sort();for(let P=0;P<g.length&&P<E.length;++P){const O=Xe(g[P],E[P]);if(O!==0)return O;const F=Zi(h[g[P]],m[E[P]]);if(F!==0)return F}return Xe(g.length,E.length)}(n.mapValue,e.mapValue);default:throw Oe()}}function ch(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Xe(n,e);const t=Pr(n),r=Pr(e),i=Xe(t.seconds,r.seconds);return i!==0?i:Xe(t.nanos,r.nanos)}function hh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Zi(t[i],r[i]);if(o)return o}return Xe(t.length,r.length)}function es(n){return Zu(n)}function Zu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return li(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return be.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Zu(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${Zu(t.fields[u])}`;return i+"}"}(n.mapValue):Oe()}function el(n){return!!n&&"integerValue"in n}function Bl(n){return!!n&&"arrayValue"in n}function fh(n){return!!n&&"nullValue"in n}function dh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nu(n){return!!n&&"mapValue"in n}function C_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function js(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=js(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=js(n.arrayValue.values[t]);return e}return Object.assign({},n)}function S_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Nu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(t)}setAll(e){let t=$t.emptyPath(),r={},i=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const g=this.getFieldsMap(t);this.applyChanges(g,r,i),r={},i=[],t=h.popLast()}u?r[h.lastSegment()]=js(u):i.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Nu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Nu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Fa(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Pn(js(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,r,i,o,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(e){return new Lt(e,0,Re.min(),Re.min(),Re.min(),Pn.empty(),0)}static newFoundDocument(e,t,r,i){return new Lt(e,1,t,Re.min(),r,i,0)}static newNoDocument(e,t){return new Lt(e,2,t,Re.min(),Re.min(),Pn.empty(),0)}static newUnknownDocument(e,t){return new Lt(e,3,t,Re.min(),Re.min(),Pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.position=e,this.inclusive=t}}function ph(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],u=n.position[i];if(o.field.isKeyField()?r=be.comparator(be.fromName(u.referenceValue),t.key):r=Zi(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function gh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t="asc"){this.field=e,this.dir=t}}function R_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{}class yt extends fd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new k_(e,t,r):t==="array-contains"?new O_(e,r):t==="in"?new L_(e,r):t==="not-in"?new x_(e,r):t==="array-contains-any"?new V_(e,r):new yt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new N_(e,r):new D_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Zi(t,this.value)):t!==null&&ci(this.value)===ci(t)&&this.matchesComparison(Zi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends fd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new On(e,t)}matches(e){return dd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dd(n){return n.op==="and"}function pd(n){return P_(n)&&dd(n)}function P_(n){for(const e of n.filters)if(e instanceof On)return!1;return!0}function tl(n){if(n instanceof yt)return n.field.canonicalString()+n.op.toString()+es(n.value);if(pd(n))return n.filters.map(e=>tl(e)).join(",");{const e=n.filters.map(t=>tl(t)).join(",");return`${n.op}(${e})`}}function gd(n,e){return n instanceof yt?function(r,i){return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&Dn(r.value,i.value)}(n,e):n instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,h)=>o&&gd(u,i.filters[h]),!0):!1}(n,e):void Oe()}function md(n){return n instanceof yt?function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`}(n):n instanceof On?function(t){return t.op.toString()+" {"+t.getFilters().map(md).join(" ,")+"}"}(n):"Filter"}class k_ extends yt{constructor(e,t,r){super(e,t,r),this.key=be.fromName(r.referenceValue)}matches(e){const t=be.comparator(e.key,this.key);return this.matchesComparison(t)}}class N_ extends yt{constructor(e,t){super(e,"in",t),this.keys=vd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class D_ extends yt{constructor(e,t){super(e,"not-in",t),this.keys=vd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>be.fromName(r.referenceValue))}class O_ extends yt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bl(t)&&Ys(t.arrayValue,this.value)}}class L_ extends yt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ys(this.value.arrayValue,t)}}class x_ extends yt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ys(this.value.arrayValue,t)}}class V_ extends yt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t=null,r=[],i=[],o=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function mh(n,e=null,t=[],r=[],i=null,o=null,u=null){return new M_(n,e,t,r,i,o,u)}function $l(n){const e=He(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>tl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>es(r)).join(",")),e.ue=t}return e.ue}function ql(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!R_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gh(n.startAt,e.startAt)&&gh(n.endAt,e.endAt)}function nl(n){return be.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t=null,r=[],i=[],o=null,u="F",h=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function F_(n,e,t,r,i,o,u,h){return new Ua(n,e,t,r,i,o,u,h)}function yd(n){return new Ua(n)}function vh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function U_(n){return n.collectionGroup!==null}function Bs(n){const e=He(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new Rt($t.comparator);return u.filters.forEach(g=>{g.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ba(o,r))}),t.has($t.keyField().canonicalString())||e.ce.push(new ba($t.keyField(),r))}return e.ce}function Nn(n){const e=He(n);return e.le||(e.le=j_(e,Bs(n))),e.le}function j_(n,e){if(n.limitType==="F")return mh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ba(i.field,o)});const t=n.endAt?new Ia(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ia(n.startAt.position,n.startAt.inclusive):null;return mh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function rl(n,e,t){return new Ua(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ja(n,e){return ql(Nn(n),Nn(e))&&n.limitType===e.limitType}function _d(n){return`${$l(Nn(n))}|lt:${n.limitType}`}function xi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>md(i)).join(", ")}]`),Ma(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>es(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>es(i)).join(",")),`Target(${r})`}(Nn(n))}; limitType=${n.limitType})`}function Ba(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):be.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Bs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(u,h,g){const m=ph(u,h,g);return u.inclusive?m<=0:m<0}(r.startAt,Bs(r),i)||r.endAt&&!function(u,h,g){const m=ph(u,h,g);return u.inclusive?m>=0:m>0}(r.endAt,Bs(r),i))}(n,e)}function B_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ed(n){return(e,t)=>{let r=!1;for(const i of Bs(n)){const o=$_(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $_(n,e,t){const r=n.field.isKeyField()?be.comparator(e.key,t.key):function(o,u,h){const g=u.data.field(o),m=h.data.field(o);return g!==null&&m!==null?Zi(g,m):Oe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fa(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return I_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new dt(be.comparator);function kr(){return q_}const Td=new dt(be.comparator);function Ms(...n){let e=Td;for(const t of n)e=e.insert(t.key,t);return e}function H_(n){let e=Td;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ei(){return $s()}function wd(){return $s()}function $s(){return new ls(n=>n.toString(),(n,e)=>n.isEqual(e))}const z_=new Rt(be.comparator);function Ge(...n){let e=z_;for(const t of n)e=e.add(t);return e}const W_=new Rt(Xe);function G_(){return W_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function Q_(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this._=void 0}}function X_(n,e,t){return n instanceof il?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ul(o)&&(o=jl(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(t,e):n instanceof Aa?Id(n,e):n instanceof Ca?bd(n,e):function(i,o){const u=J_(i,o),h=yh(u)+yh(i.Pe);return el(u)&&el(i.Pe)?Q_(h):K_(i.serializer,h)}(n,e)}function Y_(n,e,t){return n instanceof Aa?Id(n,e):n instanceof Ca?bd(n,e):t}function J_(n,e){return n instanceof sl?function(r){return el(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class il extends $a{}class Aa extends $a{constructor(e){super(),this.elements=e}}function Id(n,e){const t=Ad(e);for(const r of n.elements)t.some(i=>Dn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ca extends $a{constructor(e){super(),this.elements=e}}function bd(n,e){let t=Ad(e);for(const r of n.elements)t=t.filter(i=>!Dn(i,r));return{arrayValue:{values:t}}}class sl extends $a{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function yh(n){return ft(n.integerValue||n.doubleValue)}function Ad(n){return Bl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Z_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Aa&&i instanceof Aa||r instanceof Ca&&i instanceof Ca?Ji(r.elements,i.elements,Dn):r instanceof sl&&i instanceof sl?Dn(r.Pe,i.Pe):r instanceof il&&i instanceof il}(n.transform,e.transform)}class ri{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ri}static exists(e){return new ri(void 0,e)}static updateTime(e){return new ri(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hl{}function Cd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tE(n.key,ri.none()):new zl(n.key,n.data,ri.none());{const t=n.data,r=Pn.empty();let i=new Rt($t.comparator);for(let o of e.fields)if(!i.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new qa(n.key,r,new wr(i.toArray()),ri.none())}}function eE(n,e,t){n instanceof zl?function(i,o,u){const h=i.value.clone(),g=Eh(i.fieldTransforms,o,u.transformResults);h.setAll(g),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof qa?function(i,o,u){if(!aa(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=Eh(i.fieldTransforms,o,u.transformResults),g=o.data;g.setAll(Sd(i)),g.setAll(h),o.convertToFoundDocument(u.version,g).setHasCommittedMutations()}(n,e,t):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function qs(n,e,t,r){return n instanceof zl?function(o,u,h,g){if(!aa(o.precondition,u))return h;const m=o.value.clone(),E=Th(o.fieldTransforms,g,u);return m.setAll(E),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof qa?function(o,u,h,g){if(!aa(o.precondition,u))return h;const m=Th(o.fieldTransforms,g,u),E=u.data;return E.setAll(Sd(o)),E.setAll(m),u.convertToFoundDocument(u.version,E).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(P=>P.field))}(n,e,t,r):function(o,u,h){return aa(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function _h(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ji(r,i,(o,u)=>Z_(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zl extends Hl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qa extends Hl{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Eh(n,e,t){const r=new Map;ct(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],u=o.transform,h=e.data.field(o.field);r.set(o.field,Y_(u,h,t[i]))}return r}function Th(n,e,t){const r=new Map;for(const i of n){const o=i.transform,u=t.data.field(i.field);r.set(i.field,X_(o,u,e))}return r}class tE extends Hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&eE(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wd();return this.mutations.forEach(i=>{const o=e.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=t.has(i.key)?null:h;const g=Cd(u,h);g!==null&&r.set(i.key,g),u.isValidDocument()||u.convertToNoDocument(Re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ge())}isEqual(e){return this.batchId===e.batchId&&Ji(this.mutations,e.mutations,(t,r)=>_h(t,r))&&Ji(this.baseMutations,e.baseMutations,(t,r)=>_h(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,qe;function Rd(n){if(n===void 0)return or("GRPC error has no .code"),oe.UNKNOWN;switch(n){case mt.OK:return oe.OK;case mt.CANCELLED:return oe.CANCELLED;case mt.UNKNOWN:return oe.UNKNOWN;case mt.DEADLINE_EXCEEDED:return oe.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return oe.RESOURCE_EXHAUSTED;case mt.INTERNAL:return oe.INTERNAL;case mt.UNAVAILABLE:return oe.UNAVAILABLE;case mt.UNAUTHENTICATED:return oe.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return oe.INVALID_ARGUMENT;case mt.NOT_FOUND:return oe.NOT_FOUND;case mt.ALREADY_EXISTS:return oe.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return oe.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return oe.FAILED_PRECONDITION;case mt.ABORTED:return oe.ABORTED;case mt.OUT_OF_RANGE:return oe.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return oe.UNIMPLEMENTED;case mt.DATA_LOSS:return oe.DATA_LOSS;default:return Oe()}}(qe=mt||(mt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new ti([4294967295,4294967295],0);function wh(n){const e=sE().encode(n),t=new id;return t.update(e),new Uint8Array(t.digest())}function Ih(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ti([t,r],0),new ti([i,o],0)]}class Wl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ti.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(ti.fromNumber(r)));return i.compare(oE)===1&&(i=new ti([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wh(e),[r,i]=Ih(t);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);if(!this.de(u))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new Wl(o,i,t);return r.forEach(h=>u.insert(h)),u}insert(e){if(this.Ie===0)return;const t=wh(e),[r,i]=Ih(t);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,i,o);this.Ae(u)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ha(Re.min(),i,new dt(Xe),kr(),Ge())}}class po{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new po(r,t,Ge(),Ge(),Ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Pd{constructor(e,t){this.targetId=e,this.me=t}}class kd{constructor(e,t,r=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class bh{constructor(){this.fe=0,this.ge=Ch(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ge(),t=Ge(),r=Ge();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Oe()}}),new po(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ch()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ct(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aE{constructor(e){this.Le=e,this.Be=new Map,this.ke=kr(),this.qe=Ah(),this.Qe=new dt(Xe)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Oe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(nl(o))if(r===0){const u=new be(o.path);this.Ue(t,u,Lt.newNoDocument(u,Re.min()))}else ct(r===1);else{const u=this.Ye(t);if(u!==r){const h=this.Ze(e),g=h?this.Xe(h,e,u):1;if(g!==0){this.je(t);const m=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,m)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let u,h;try{u=li(r).toUint8Array()}catch(g){if(g instanceof hd)return Yi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{h=new Wl(u,i,o)}catch(g){return Yi(g instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return h.Ie===0?null:h}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const u=this.Le.tt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,u)=>{const h=this.Je(u);if(h){if(o.current&&nl(h.target)){const g=new be(h.target.path);this.ke.get(g)!==null||this.it(u,g)||this.Ue(u,g,Lt.newNoDocument(g,e))}o.be&&(t.set(u,o.ve()),o.Ce())}});let r=Ge();this.qe.forEach((o,u)=>{let h=!0;u.forEachWhile(g=>{const m=this.Je(g);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(e));const i=new Ha(e,t,this.Qe,this.ke,r);return this.ke=kr(),this.qe=Ah(),this.Qe=new dt(Xe),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new bh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Rt(Xe),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ah(){return new dt(be.comparator)}function Ch(){return new dt(be.comparator)}const uE={asc:"ASCENDING",desc:"DESCENDING"},lE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cE={and:"AND",or:"OR"};class hE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ol(n,e){return n.useProto3Json||Ma(e)?e:{value:e}}function fE(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Hi(n){return ct(!!n),Re.fromTimestamp(function(t){const r=Pr(t);return new Gt(r.seconds,r.nanos)}(n))}function pE(n,e){return al(n,e).canonicalString()}function al(n,e){const t=function(i){return new lt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nd(n){const e=lt.fromString(n);return ct(Vd(e)),e}function Du(n,e){const t=Nd(e);if(t.get(1)!==n.databaseId.projectId)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ye(oe.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new be(Od(t))}function Dd(n,e){return pE(n.databaseId,e)}function gE(n){const e=Nd(n);return e.length===4?lt.emptyPath():Od(e)}function Sh(n){return new lt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Od(n){return ct(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(m,E){return m.useProto3Json?(ct(E===void 0||typeof E=="string"),Pt.fromBase64String(E||"")):(ct(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Pt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(m){const E=m.code===void 0?oe.UNKNOWN:Rd(m.code);return new ye(E,m.message||"")}(u);t=new kd(r,i,o,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Du(n,r.document.name),o=Hi(r.document.updateTime),u=r.document.createTime?Hi(r.document.createTime):Re.min(),h=new Pn({mapValue:{fields:r.document.fields}}),g=Lt.newFoundDocument(i,o,u,h),m=r.targetIds||[],E=r.removedTargetIds||[];t=new ua(m,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Du(n,r.document),o=r.readTime?Hi(r.readTime):Re.min(),u=Lt.newNoDocument(i,o),h=r.removedTargetIds||[];t=new ua([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Du(n,r.document),o=r.removedTargetIds||[];t=new ua([],o,i,null)}else{if(!("filter"in e))return Oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new iE(i,o),h=r.targetId;t=new Pd(h,u)}}return t}function vE(n,e){return{documents:[Dd(n,e.path)]}}function yE(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Dd(n,i);const o=function(m){if(m.length!==0)return xd(On.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(E=>function(O){return{field:Vi(O.field),direction:TE(O.dir)}}(E))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=ol(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{_t:t,parent:i}}function _E(n){let e=gE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ct(r===1);const E=t.from[0];E.allDescendants?i=E.collectionId:e=e.child(E.collectionId)}let o=[];t.where&&(o=function(P){const O=Ld(P);return O instanceof On&&pd(O)?O.getFilters():[O]}(t.where));let u=[];t.orderBy&&(u=function(P){return P.map(O=>function(L){return new ba(Mi(L.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(O))}(t.orderBy));let h=null;t.limit&&(h=function(P){let O;return O=typeof P=="object"?P.value:P,Ma(O)?null:O}(t.limit));let g=null;t.startAt&&(g=function(P){const O=!!P.before,F=P.values||[];return new Ia(F,O)}(t.startAt));let m=null;return t.endAt&&(m=function(P){const O=!P.before,F=P.values||[];return new Ia(F,O)}(t.endAt)),F_(e,i,u,o,h,"F",g,m)}function EE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ld(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mi(t.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(t.unaryFilter.field);return yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Mi(t.unaryFilter.field);return yt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Mi(t.unaryFilter.field);return yt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return Oe()}}(n):n.fieldFilter!==void 0?function(t){return yt.create(Mi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Oe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return On.create(t.compositeFilter.filters.map(r=>Ld(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Oe()}}(t.compositeFilter.op))}(n):Oe()}function TE(n){return uE[n]}function wE(n){return lE[n]}function IE(n){return cE[n]}function Vi(n){return{fieldPath:n.canonicalString()}}function Mi(n){return $t.fromServerFormat(n.fieldPath)}function xd(n){return n instanceof yt?function(t){if(t.op==="=="){if(dh(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NAN"}};if(fh(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dh(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NOT_NAN"}};if(fh(t.value))return{unaryFilter:{field:Vi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(t.field),op:wE(t.op),value:t.value}}}(n):n instanceof On?function(t){const r=t.getFilters().map(i=>xd(i));return r.length===1?r[0]:{compositeFilter:{op:IE(t.op),filters:r}}}(n):Oe()}function Vd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,r,i,o=Re.min(),u=Re.min(),h=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=g}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.ct=e}}function AE(n){const e=_E({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.un=new SE}addToCollectionParentIndex(e,t){return this.un.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(Rr.min())}updateCollectionGroup(e,t,r){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class SE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Rt(lt.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Rt(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ts(0)}static kn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(){this.changes=new ls(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?te.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qs(r.mutation,i,wr.empty(),Gt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ge()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ge()){const i=ei();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let u=Ms();return o.forEach((h,g)=>{u=u.insert(h,g.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ei();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ge()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,r,i){let o=kr();const u=$s(),h=function(){return $s()}();return t.forEach((g,m)=>{const E=r.get(m.key);i.has(m.key)&&(E===void 0||E.mutation instanceof qa)?o=o.insert(m.key,m):E!==void 0?(u.set(m.key,E.mutation.getFieldMask()),qs(E.mutation,m,E.mutation.getFieldMask(),Gt.now())):u.set(m.key,wr.empty())}),this.recalculateAndSaveOverlays(e,o).next(g=>(g.forEach((m,E)=>u.set(m,E)),t.forEach((m,E)=>{var P;return h.set(m,new PE(E,(P=u.get(m))!==null&&P!==void 0?P:null))}),h))}recalculateAndSaveOverlays(e,t){const r=$s();let i=new dt((u,h)=>u-h),o=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(g=>{const m=t.get(g);if(m===null)return;let E=r.get(g)||wr.empty();E=h.applyToLocalView(m,E),r.set(g,E);const P=(i.get(h.batchId)||Ge()).add(g);i=i.insert(h.batchId,P)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const g=h.getNext(),m=g.key,E=g.value,P=wd();E.forEach(O=>{if(!o.has(O)){const F=Cd(t.get(O),r.get(O));F!==null&&P.set(O,F),o=o.add(O)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,P))}return te.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(u){return be.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):U_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):te.resolve(ei());let h=-1,g=o;return u.next(m=>te.forEach(m,(E,P)=>(h<P.largestBatchId&&(h=P.largestBatchId),o.get(E)?te.resolve():this.remoteDocumentCache.getEntry(e,E).next(O=>{g=g.insert(E,O)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,g,m,Ge())).next(E=>({batchId:h,changes:H_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new be(t)).next(r=>{let i=Ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let u=Ms();return this.indexManager.getCollectionParents(e,o).next(h=>te.forEach(h,g=>{const m=function(P,O){return new Ua(O,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(t,g.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next(E=>{E.forEach((P,O)=>{u=u.insert(P,O)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(u=>{o.forEach((g,m)=>{const E=m.getKey();u.get(E)===null&&(u=u.insert(E,Lt.newInvalidDocument(E)))});let h=Ms();return u.forEach((g,m)=>{const E=o.get(g);E!==void 0&&qs(E.mutation,m,wr.empty(),Gt.now()),Ba(t,m)&&(h=h.insert(g,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return te.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Hi(i.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:AE(i.bundledQuery),readTime:Hi(i.readTime)}}(t)),te.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.overlays=new dt(be.comparator),this.Ir=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ei();return te.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),te.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),te.resolve()}getOverlaysForCollection(e,t,r){const i=ei(),o=t.length+1,u=new be(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const g=h.getNext().value,m=g.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&g.largestBatchId>r&&i.set(g.getKey(),g)}return te.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new dt((m,E)=>m-E);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let E=o.get(m.largestBatchId);E===null&&(E=ei(),o=o.insert(m.largestBatchId,E)),E.set(m.getKey(),m)}}const h=ei(),g=o.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((m,E)=>h.set(m,E)),!(h.size()>=i)););return te.resolve(h)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new rE(t,r));let o=this.Ir.get(t);o===void 0&&(o=Ge(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Tr=new Rt(bt.Er),this.dr=new Rt(bt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new bt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new bt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new be(new lt([])),r=new bt(t,e),i=new bt(t,e+1),o=[];return this.dr.forEachInRange([r,i],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new be(new lt([])),r=new bt(t,e),i=new bt(t,e+1);let o=Ge();return this.dr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new bt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class bt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return be.comparator(e.key,t.key)||Xe(e.wr,t.wr)}static Ar(e,t){return Xe(e.wr,t.wr)||be.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Rt(bt.Er)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new nE(o,t,r,i);this.mutationQueue.push(u);for(const h of i)this.br=this.br.add(new bt(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return te.resolve(u)}lookupMutationBatch(e,t){return te.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return te.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new bt(t,0),i=new bt(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],u=>{const h=this.Dr(u.wr);o.push(h)}),te.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Rt(Xe);return t.forEach(i=>{const o=new bt(i,0),u=new bt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],h=>{r=r.add(h.wr)})}),te.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;be.isDocumentKey(o)||(o=o.child(""));const u=new bt(new be(o),0);let h=new Rt(Xe);return this.br.forEachWhile(g=>{const m=g.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(h=h.add(g.wr)),!0)},u),te.resolve(this.Cr(h))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ct(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return te.forEach(t.mutations,i=>{const o=new bt(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new bt(t,0),i=this.br.firstAfterOrEqual(r);return te.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.Mr=e,this.docs=function(){return new dt(be.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,u=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return te.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(t))}getEntries(e,t){let r=kr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Lt.newInvalidDocument(i))}),te.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=kr();const u=t.path,h=new be(u.child("")),g=this.docs.getIteratorFrom(h);for(;g.hasNext();){const{key:m,value:{document:E}}=g.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||__(y_(E),r)<=0||(i.has(E.key)||Ba(t,E))&&(o=o.insert(E.key,E.mutableCopy()))}return te.resolve(o)}getAllFromCollectionGroup(e,t,r,i){Oe()}Or(e,t){return te.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new VE(this)}getSize(e){return te.resolve(this.size)}}class VE extends RE{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),te.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.persistence=e,this.Nr=new ls(t=>$l(t),ql),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gl,this.targetCount=0,this.kr=ts.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),te.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.Kn(t),te.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),i++)}),te.waitFor(o).next(()=>i)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return te.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),te.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(u=>{o.push(i.markPotentiallyOrphaned(e,u))}),te.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),te.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return te.resolve(r)}containsKey(e,t){return te.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Fl(0),this.Kr=!1,this.Kr=!0,this.$r=new OE,this.referenceDelegate=e(this),this.Ur=new ME(this),this.indexManager=new CE,this.remoteDocumentCache=function(i){return new xE(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new bE(t),this.Gr=new NE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new LE(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){fe("MemoryPersistence","Starting transaction:",e);const i=new UE(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return te.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class UE extends T_{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.Jr=new Gl,this.Yr=null}static Zr(e){return new Kl(e)}get Xr(){if(this.Yr)return this.Yr;throw Oe()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),te.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),te.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.Xr,r=>{const i=be.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,Re.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return te.or([()=>te.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=Ge(),i=Ge();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ql(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ug()?8:w_(xt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new jE;return this.Xi(e,t,u).next(h=>{if(o.result=h,this.zi)return this.es(e,t,u,h.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Os()<=$e.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",xi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),te.resolve()):(Os()<=$e.DEBUG&&fe("QueryEngine","Query:",xi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Os()<=$e.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",xi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(t))):te.resolve())}Yi(e,t){if(vh(t))return te.resolve(null);let r=Nn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=rl(t,null,"F"),r=Nn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Ge(...o);return this.Ji.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(g=>{const m=this.ts(t,h);return this.ns(t,m,u,g.readTime)?this.Yi(e,rl(t,null,"F")):this.rs(e,m,t,g)}))})))}Zi(e,t,r,i){return vh(t)||i.isEqual(Re.min())?te.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const u=this.ts(t,o);return this.ns(t,u,r,i)?te.resolve(null):(Os()<=$e.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(t)),this.rs(e,u,t,v_(i,-1)).next(h=>h))})}ts(e,t){let r=new Rt(Ed(e));return t.forEach((i,o)=>{Ba(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Os()<=$e.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",xi(t)),this.Ji.getDocumentsMatchingQuery(e,t,Rr.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new dt(Xe),this._s=new ls(o=>$l(o),ql),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function qE(n,e,t,r){return new $E(n,e,t,r)}async function Md(n,e){const t=He(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],h=[];let g=Ge();for(const m of i){u.push(m.batchId);for(const E of m.mutations)g=g.add(E.key)}for(const m of o){h.push(m.batchId);for(const E of m.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(r,g).next(m=>({hs:m,removedBatchIds:u,addedBatchIds:h}))})})}function Fd(n){const e=He(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function HE(n,e){const t=He(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const h=[];e.targetChanges.forEach((E,P)=>{const O=i.get(P);if(!O)return;h.push(t.Ur.removeMatchingKeys(o,E.removedDocuments,P).next(()=>t.Ur.addMatchingKeys(o,E.addedDocuments,P)));let F=O.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(P)!==null?F=F.withResumeToken(Pt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,r)),i=i.insert(P,F),function(V,q,$){return V.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(O,F,E)&&h.push(t.Ur.updateTargetData(o,F))});let g=kr(),m=Ge();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,E))}),h.push(zE(o,u,e.documentUpdates).next(E=>{g=E.Ps,m=E.Is})),!r.isEqual(Re.min())){const E=t.Ur.getLastRemoteSnapshotVersion(o).next(P=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(E)}return te.waitFor(h).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,g,m)).next(()=>g)}).then(o=>(t.os=i,o))}function zE(n,e,t){let r=Ge(),i=Ge();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=kr();return t.forEach((h,g)=>{const m=o.get(h);g.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(h)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(h,g.readTime),u=u.insert(h,g)):!m.isValidDocument()||g.version.compareTo(m.version)>0||g.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(g),u=u.insert(h,g)):fe("LocalStore","Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",g.version)}),{Ps:u,Is:i}})}function WE(n,e){const t=He(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,te.resolve(i)):t.Ur.allocateTargetId(r).next(u=>(i=new Ir(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function ul(n,e,t){const r=He(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!fo(u))throw u;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${u}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Rh(n,e,t){const r=He(n);let i=Re.min(),o=Ge();return r.persistence.runTransaction("Execute query","readwrite",u=>function(g,m,E){const P=He(g),O=P._s.get(E);return O!==void 0?te.resolve(P.os.get(O)):P.Ur.getTargetData(m,E)}(r,u,Nn(e)).next(h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(u,h.targetId).next(g=>{o=g})}).next(()=>r.ss.getDocumentsMatchingQuery(u,e,t?i:Re.min(),t?o:Ge())).next(h=>(GE(r,B_(e),h),{documents:h,Ts:o})))}function GE(n,e,t){let r=n.us.get(e)||Re.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Ph{constructor(){this.activeTargetIds=G_()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KE{constructor(){this.so=new Ph,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ph,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo=null;function Ou(){return Jo===null?Jo=function(){return 268435456+Math.round(2147483648*Math.random())}():Jo++,"0x"+Jo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class JE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,u){const h=Ou(),g=this.xo(t,r.toUriEncodedString());fe("RestConnection",`Sending RPC '${t}' ${h}:`,g,i);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,o,u),this.No(t,g,m,i).then(E=>(fe("RestConnection",`Received RPC '${t}' ${h}: `,E),E),E=>{throw Yi("RestConnection",`RPC '${t}' ${h} failed with error: `,E,"url: ",g,"request:",i),E})}Lo(t,r,i,o,u,h){return this.Mo(t,r,i,o,u)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+us}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>t[u]=o),i&&i.headers.forEach((o,u)=>t[u]=o)}xo(t,r){const i=XE[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=Ou();return new Promise((u,h)=>{const g=new sd;g.setWithCredentials(!0),g.listenOnce(od.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case oa.NO_ERROR:const E=g.getResponseJson();fe(Dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(E)),u(E);break;case oa.TIMEOUT:fe(Dt,`RPC '${e}' ${o} timed out`),h(new ye(oe.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const P=g.getStatus();if(fe(Dt,`RPC '${e}' ${o} failed with status:`,P,"response text:",g.getResponseText()),P>0){let O=g.getResponseJson();Array.isArray(O)&&(O=O[0]);const F=O==null?void 0:O.error;if(F&&F.status&&F.message){const L=function(q){const $=q.toLowerCase().replace(/_/g,"-");return Object.values(oe).indexOf($)>=0?$:oe.UNKNOWN}(F.status);h(new ye(L,F.message))}else h(new ye(oe.UNKNOWN,"Server responded with status "+g.getStatus()))}else h(new ye(oe.UNAVAILABLE,"Connection failed."));break;default:Oe()}}finally{fe(Dt,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(i);fe(Dt,`RPC '${e}' ${o} sending request:`,i),g.send(t,"POST",m,r,15)})}Bo(e,t,r){const i=Ou(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=ld(),h=ud(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(g.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,r),g.encodeInitMessageHeaders=!0;const E=o.join("");fe(Dt,`Creating RPC '${e}' stream ${i}: ${E}`,g);const P=u.createWebChannel(E,g);let O=!1,F=!1;const L=new YE({Io:q=>{F?fe(Dt,`Not sending because RPC '${e}' stream ${i} is closed:`,q):(O||(fe(Dt,`Opening RPC '${e}' stream ${i} transport.`),P.open(),O=!0),fe(Dt,`RPC '${e}' stream ${i} sending:`,q),P.send(q))},To:()=>P.close()}),V=(q,$,X)=>{q.listen($,Q=>{try{X(Q)}catch(Y){setTimeout(()=>{throw Y},0)}})};return V(P,Vs.EventType.OPEN,()=>{F||(fe(Dt,`RPC '${e}' stream ${i} transport opened.`),L.yo())}),V(P,Vs.EventType.CLOSE,()=>{F||(F=!0,fe(Dt,`RPC '${e}' stream ${i} transport closed`),L.So())}),V(P,Vs.EventType.ERROR,q=>{F||(F=!0,Yi(Dt,`RPC '${e}' stream ${i} transport errored:`,q),L.So(new ye(oe.UNAVAILABLE,"The operation could not be completed")))}),V(P,Vs.EventType.MESSAGE,q=>{var $;if(!F){const X=q.data[0];ct(!!X);const Q=X,Y=Q.error||(($=Q[0])===null||$===void 0?void 0:$.error);if(Y){fe(Dt,`RPC '${e}' stream ${i} received error:`,Y);const ee=Y.status;let J=function(w){const A=mt[w];if(A!==void 0)return Rd(A)}(ee),c=Y.message;J===void 0&&(J=oe.INTERNAL,c="Unknown error status: "+ee+" with message "+Y.message),F=!0,L.So(new ye(J,c)),P.close()}else fe(Dt,`RPC '${e}' stream ${i} received:`,X),L.bo(X)}}),V(h,ad.STAT_EVENT,q=>{q.stat===Yu.PROXY?fe(Dt,`RPC '${e}' stream ${i} detected buffering proxy`):q.stat===Yu.NOPROXY&&fe(Dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.wo()},0),L}}function Lu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n){return new hE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,t,r,i,o,u,h,g){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===oe.RESOURCE_EXHAUSTED?(or(t.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===oe.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new ye(oe.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eT extends ZE{constructor(e,t,r,i,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,u),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=mE(this.serializer,e),r=function(o){if(!("targetChange"in o))return Re.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?Hi(u.readTime):Re.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Sh(this.serializer),t.addTarget=function(o,u){let h;const g=u.target;if(h=nl(g)?{documents:vE(o,g)}:{query:yE(o,g)._t},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=dE(o,u.resumeToken);const m=ol(o,u.expectedCount);m!==null&&(h.expectedCount=m)}else if(u.snapshotVersion.compareTo(Re.min())>0){h.readTime=fE(o,u.snapshotVersion.toTimestamp());const m=ol(o,u.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,e);const r=EE(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Sh(this.serializer),t.removeTarget=e,this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(e,al(t,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ye(oe.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Lo(e,al(t,r),i,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===oe.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(oe.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(t),this.D_=!1):fe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{r.enqueueAndForget(async()=>{mo(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(g){const m=He(g);m.L_.add(4),await go(m),m.q_.set("Unknown"),m.L_.delete(4),await za(m)}(this))})}),this.q_=new nT(r,i)}}async function za(n){if(mo(n))for(const e of n.B_)await e(!0)}async function go(n){for(const e of n.B_)await e(!1)}function Bd(n,e){const t=He(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Zl(t)?Jl(t):cs(t).r_()&&Yl(t,e))}function Xl(n,e){const t=He(n),r=cs(t);t.N_.delete(e),r.r_()&&$d(t,e),t.N_.size===0&&(r.r_()?r.o_():mo(t)&&t.q_.set("Unknown"))}function Yl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cs(n).A_(e)}function $d(n,e){n.Q_.xe(e),cs(n).R_(e)}function Jl(n){n.Q_=new aE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),cs(n).start(),n.q_.v_()}function Zl(n){return mo(n)&&!cs(n).n_()&&n.N_.size>0}function mo(n){return He(n).L_.size===0}function qd(n){n.Q_=void 0}async function iT(n){n.q_.set("Online")}async function sT(n){n.N_.forEach((e,t)=>{Yl(n,e)})}async function oT(n,e){qd(n),Zl(n)?(n.q_.M_(e),Jl(n)):n.q_.set("Unknown")}async function aT(n,e,t){if(n.q_.set("Online"),e instanceof kd&&e.state===2&&e.cause)try{await async function(i,o){const u=o.cause;for(const h of o.targetIds)i.N_.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.N_.delete(h),i.Q_.removeTarget(h))}(n,e)}catch(r){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nh(n,r)}else if(e instanceof ua?n.Q_.Ke(e):e instanceof Pd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Re.min()))try{const r=await Fd(n.localStore);t.compareTo(r)>=0&&await function(o,u){const h=o.Q_.rt(u);return h.targetChanges.forEach((g,m)=>{if(g.resumeToken.approximateByteSize()>0){const E=o.N_.get(m);E&&o.N_.set(m,E.withResumeToken(g.resumeToken,u))}}),h.targetMismatches.forEach((g,m)=>{const E=o.N_.get(g);if(!E)return;o.N_.set(g,E.withResumeToken(Pt.EMPTY_BYTE_STRING,E.snapshotVersion)),$d(o,g);const P=new Ir(E.target,g,m,E.sequenceNumber);Yl(o,P)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){fe("RemoteStore","Failed to raise snapshot:",r),await Nh(n,r)}}async function Nh(n,e,t){if(!fo(e))throw e;n.L_.add(1),await go(n),n.q_.set("Offline"),t||(t=()=>Fd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await za(n)})}async function Dh(n,e){const t=He(n);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const r=mo(t);t.L_.add(3),await go(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await za(t)}async function uT(n,e){const t=He(n);e?(t.L_.delete(2),await za(t)):e||(t.L_.add(2),await go(t),t.q_.set("Unknown"))}function cs(n){return n.K_||(n.K_=function(t,r,i){const o=He(t);return o.w_(),new eT(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:iT.bind(null,n),Ro:sT.bind(null,n),mo:oT.bind(null,n),d_:aT.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Zl(n)?Jl(n):n.q_.set("Unknown")):(await n.K_.stop(),qd(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const u=Date.now()+r,h=new ec(e,t,u,i,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(oe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hd(n,e){if(or("AsyncQueue",`${e}: ${n}`),fo(n))return new ye(oe.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||be.comparator(t.key,r.key):(t,r)=>be.comparator(t.key,r.key),this.keyedMap=Ms(),this.sortedSet=new dt(this.comparator)}static emptySet(e){return new zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.W_=new dt(be.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Oe():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,i,o,u,h,g,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=g,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,i,o){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new ns(e,t,zi.emptySet(t),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cT{constructor(){this.queries=Lh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=He(t),o=i.queries;i.queries=Lh(),o.forEach((u,h)=>{for(const g of h.j_)g.onError(r)})})(this,new ye(oe.ABORTED,"Firestore shutting down"))}}function Lh(){return new ls(n=>_d(n),ja)}async function hT(n,e){const t=He(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new lT,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(u){const h=Hd(u,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(h)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&tc(t)}async function fT(n,e){const t=He(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const u=o.j_.indexOf(e);u>=0&&(o.j_.splice(u,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function dT(n,e){const t=He(n);let r=!1;for(const i of e){const o=i.query,u=t.queries.get(o);if(u){for(const h of u.j_)h.X_(i)&&(r=!0);u.z_=i}}r&&tc(t)}function pT(n,e,t){const r=He(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function tc(n){n.Y_.forEach(e=>{e.next()})}var ll,xh;(xh=ll||(ll={})).ea="default",xh.Cache="cache";class gT{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ll.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.key=e}}class Wd{constructor(e){this.key=e}}class mT{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ge(),this.mutatedKeys=Ge(),this.Aa=Ed(e),this.Ra=new zi(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Oh,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,u=i,h=!1;const g=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((E,P)=>{const O=i.get(E),F=Ba(this.query,P)?P:null,L=!!O&&this.mutatedKeys.has(O.key),V=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let q=!1;O&&F?O.data.isEqual(F.data)?L!==V&&(r.track({type:3,doc:F}),q=!0):this.ga(O,F)||(r.track({type:2,doc:F}),q=!0,(g&&this.Aa(F,g)>0||m&&this.Aa(F,m)<0)&&(h=!0)):!O&&F?(r.track({type:0,doc:F}),q=!0):O&&!F&&(r.track({type:1,doc:O}),q=!0,(g||m)&&(h=!0)),q&&(F?(u=u.add(F),o=V?o.add(E):o.delete(E)):(u=u.delete(E),o=o.delete(E)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const E=this.query.limitType==="F"?u.last():u.first();u=u.delete(E.key),o=o.delete(E.key),r.track({type:1,doc:E})}return{Ra:u,fa:r,ns:h,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const u=e.fa.G_();u.sort((E,P)=>function(F,L){const V=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe()}};return V(F)-V(L)}(E.type,P.type)||this.Aa(E.doc,P.doc)),this.pa(r),i=i!=null&&i;const h=t&&!i?this.ya():[],g=this.da.size===0&&this.current&&!i?1:0,m=g!==this.Ea;return this.Ea=g,u.length!==0||m?{snapshot:new ns(this.query,e.Ra,o,u,e.mutatedKeys,g===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:h}:{wa:h}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Oh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Wd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new zd(r))}),t}ba(e){this.Ta=e.Ts,this.da=Ge();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ns.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class yT{constructor(e){this.key=e,this.va=!1}}class _T{constructor(e,t,r,i,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new ls(h=>_d(h),ja),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(be.comparator),this.Na=new Map,this.La=new Gl,this.Ba={},this.ka=new Map,this.qa=ts.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ET(n,e,t=!0){const r=Yd(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Gd(r,e,t,!0),i}async function TT(n,e){const t=Yd(n);await Gd(t,e,!0,!1)}async function Gd(n,e,t,r){const i=await WE(n.localStore,Nn(e)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let h;return r&&(h=await wT(n,e,o,u==="current",i.resumeToken)),n.isPrimaryClient&&t&&Bd(n.remoteStore,i),h}async function wT(n,e,t,r,i){n.Ka=(P,O,F)=>async function(V,q,$,X){let Q=q.view.ma($);Q.ns&&(Q=await Rh(V.localStore,q.query,!1).then(({documents:c})=>q.view.ma(c,Q)));const Y=X&&X.targetChanges.get(q.targetId),ee=X&&X.targetMismatches.get(q.targetId)!=null,J=q.view.applyChanges(Q,V.isPrimaryClient,Y,ee);return Mh(V,q.targetId,J.wa),J.snapshot}(n,P,O,F);const o=await Rh(n.localStore,e,!0),u=new mT(e,o.Ts),h=u.ma(o.documents),g=po.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),m=u.applyChanges(h,n.isPrimaryClient,g);Mh(n,t,m.wa);const E=new vT(e,t,u);return n.Fa.set(e,E),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),m.snapshot}async function IT(n,e,t){const r=He(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(u=>!ja(u,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ul(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Xl(r.remoteStore,i.targetId),cl(r,i.targetId)}).catch(Ml)):(cl(r,i.targetId),await ul(r.localStore,i.targetId,!0))}async function bT(n,e){const t=He(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xl(t.remoteStore,r.targetId))}async function Kd(n,e){const t=He(n);try{const r=await HE(t.localStore,e);e.targetChanges.forEach((i,o)=>{const u=t.Na.get(o);u&&(ct(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.va=!0:i.modifiedDocuments.size>0?ct(u.va):i.removedDocuments.size>0&&(ct(u.va),u.va=!1))}),await Xd(t,r,e)}catch(r){await Ml(r)}}function Vh(n,e,t){const r=He(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,u)=>{const h=u.view.Z_(e);h.snapshot&&i.push(h.snapshot)}),function(u,h){const g=He(u);g.onlineState=h;let m=!1;g.queries.forEach((E,P)=>{for(const O of P.j_)O.Z_(h)&&(m=!0)}),m&&tc(g)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AT(n,e,t){const r=He(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let u=new dt(be.comparator);u=u.insert(o,Lt.newNoDocument(o,Re.min()));const h=Ge().add(o),g=new Ha(Re.min(),new Map,new dt(Xe),u,h);await Kd(r,g),r.Oa=r.Oa.remove(o),r.Na.delete(e),nc(r)}else await ul(r.localStore,e,!1).then(()=>cl(r,e,t)).catch(Ml)}function cl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Qd(n,r)})}function Qd(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Xl(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),nc(n))}function Mh(n,e,t){for(const r of t)r instanceof zd?(n.La.addReference(r.key,e),CT(n,r)):r instanceof Wd?(fe("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Qd(n,r.key)):Oe()}function CT(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(fe("SyncEngine","New document in limbo: "+t),n.xa.add(r),nc(n))}function nc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new be(lt.fromString(e)),r=n.qa.next();n.Na.set(r,new yT(t)),n.Oa=n.Oa.insert(t,r),Bd(n.remoteStore,new Ir(Nn(yd(t.path)),r,"TargetPurposeLimboResolution",Fl.oe))}}async function Xd(n,e,t){const r=He(n),i=[],o=[],u=[];r.Fa.isEmpty()||(r.Fa.forEach((h,g)=>{u.push(r.Ka(g,e,t).then(m=>{var E;if((m||t)&&r.isPrimaryClient){const P=m?!m.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(g.targetId,P?"current":"not-current")}if(m){i.push(m);const P=Ql.Wi(g.targetId,m);o.push(P)}}))}),await Promise.all(u),r.Ca.d_(i),await async function(g,m){const E=He(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>te.forEach(m,O=>te.forEach(O.$i,F=>E.persistence.referenceDelegate.addReference(P,O.targetId,F)).next(()=>te.forEach(O.Ui,F=>E.persistence.referenceDelegate.removeReference(P,O.targetId,F)))))}catch(P){if(!fo(P))throw P;fe("LocalStore","Failed to update sequence numbers: "+P)}for(const P of m){const O=P.targetId;if(!P.fromCache){const F=E.os.get(O),L=F.snapshotVersion,V=F.withLastLimboFreeSnapshotVersion(L);E.os=E.os.insert(O,V)}}}(r.localStore,o))}async function ST(n,e){const t=He(n);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const r=await Md(t.localStore,e);t.currentUser=e,function(o,u){o.ka.forEach(h=>{h.forEach(g=>{g.reject(new ye(oe.CANCELLED,u))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xd(t,r.hs)}}function RT(n,e){const t=He(n),r=t.Na.get(e);if(r&&r.va)return Ge().add(r.key);{let i=Ge();const o=t.Ma.get(e);if(!o)return i;for(const u of o){const h=t.Fa.get(u);i=i.unionWith(h.view.Va)}return i}}function Yd(n){const e=He(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AT.bind(null,e),e.Ca.d_=dT.bind(null,e.eventManager),e.Ca.$a=pT.bind(null,e.eventManager),e}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ud(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return qE(this.persistence,new BE,e.initialUser,this.serializer)}Ga(e){return new FE(Kl.Zr,this.serializer)}Wa(e){return new KE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sa.provider={build:()=>new Sa};class hl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ST.bind(null,this.syncEngine),await uT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cT}()}createDatastore(e){const t=Ud(e.databaseInfo.databaseId),r=function(o){return new JE(o)}(e.databaseInfo);return function(o,u,h,g){return new tT(o,u,h,g)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,u,h){return new rT(r,i,o,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>Vh(this.syncEngine,t,0),function(){return kh.D()?new kh:new QE}())}createSyncEngine(e,t){return function(i,o,u,h,g,m,E){const P=new _T(i,o,u,h,g,m);return E&&(P.Qa=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=He(i);fe("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await go(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hl.provider={build:()=>new hl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=g_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{fe("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(fe("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xu(n,e){n.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Md(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Fh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await NT(n);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Dh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Dh(e.remoteStore,i)),n._onlineComponents=e}async function NT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await xu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===oe.FAILED_PRECONDITION||i.code===oe.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Yi("Error using user provided cache. Falling back to memory cache: "+t),await xu(n,new Sa)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await xu(n,new Sa);return n._offlineComponents}async function DT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await Fh(n,n._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await Fh(n,new hl))),n._onlineComponents}async function OT(n){const e=await DT(n),t=e.eventManager;return t.onListen=ET.bind(null,e.syncEngine),t.onUnlisten=IT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=TT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=bT.bind(null,e.syncEngine),t}function LT(n,e,t={}){const r=new ni;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,g,m){const E=new PT({next:O=>{E.Za(),u.enqueueAndForget(()=>fT(o,P)),O.fromCache&&g.source==="server"?m.reject(new ye(oe.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(O)},error:O=>m.reject(O)}),P=new gT(h,E,{includeMetadataChanges:!0,_a:!0});return hT(o,P)}(await OT(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(n,e,t){if(!t)throw new ye(oe.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function VT(n,e,t,r){if(e===!0&&r===!0)throw new ye(oe.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jh(n){if(be.isDocumentKey(n))throw new ye(oe.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function MT(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Oe()}function fl(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ye(oe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=MT(n);throw new ye(oe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(oe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(oe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ye(oe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(oe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(oe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a_;switch(r.type){case"firstParty":return new h_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ye(oe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Uh.get(t);r&&(fe("ComponentProvider","Removing Datastore"),Uh.delete(t),r.terminate())}(this),Promise.resolve()}}function FT(n,e,t,r={}){var i;const o=(n=fl(n,rc))._getSettings(),u=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let h,g;if(typeof r.mockUserToken=="string")h=r.mockUserToken,g=Ot.MOCK_USER;else{h=tg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ye(oe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ot(m)}n._authCredentials=new u_(new cd(h,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wa(this.firestore,e,this._query)}}class hs{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hs(this.firestore,e,this._key)}}class Wi extends Wa{constructor(e,t,r){super(e,t,yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hs(this.firestore,null,new be(e))}withConverter(e){return new Wi(this.firestore,e,this._path)}}function tb(n,e,...t){if(n=vn(n),xT("collection","path",e),n instanceof rc){const r=lt.fromString(e,...t);return jh(r),new Wi(n,null,r)}{if(!(n instanceof hs||n instanceof Wi))throw new ye(oe.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(lt.fromString(e,...t));return jh(r),new Wi(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jd(this,"async_queue_retry"),this.Vu=()=>{const r=Lu();r&&fe("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Lu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Lu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ni;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!fo(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=ec.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Zd extends rc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $h,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $h(e),this._firestoreClient=void 0,await e}}}function nb(n,e){const t=typeof n=="object"?n:Ef(),r=typeof n=="string"?n:"(default)",i=bl(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Zp("firestore");o&&FT(i,...o)}return i}function UT(n){if(n._terminated)throw new ye(oe.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jT(n),n._firestoreClient}function jT(n){var e,t,r;const i=n._freezeSettings(),o=function(h,g,m,E){return new A_(h,g,m,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Jd(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new kT(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const g=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(g),_online:g}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ra(Pt.fromBase64String(e))}catch(t){throw new ye(oe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ra(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(oe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(oe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(oe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Xe(this._lat,e._lat)||Xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const qT=new RegExp("[~\\*/\\[\\]]");function HT(n,e,t){if(e.search(qT)>=0)throw qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ep(...e.split("."))._internalPath}catch{throw qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function qh(n,e,t,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let u="";return new ye(oe.INVALID_ARGUMENT,o+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new hs(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zT extends tp{data(){return super.data()}}function np(n,e){return typeof e=="string"?HT(n,e):e instanceof ep?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ye(oe.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GT{convertValue(e,t="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Oe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fa(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>ft(u.doubleValue));return new $T(o)}convertGeoPoint(e){return new BT(ft(e.latitude),ft(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=jl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const t=Pr(e);return new Gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=lt.fromString(e);ct(Vd(r));const i=new Xs(r.get(1),r.get(3)),o=new be(r.popFirst(5));return i.isEqual(t)||or(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KT extends tp{constructor(e,t,r,i,o,u){super(e,t,r,i,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class la extends KT{data(e={}){return super.data(e)}}class QT{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new la(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ye(oe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const g=new la(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Zo(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:g,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const g=new la(i._firestore,i._userDataWriter,h.doc.key,h.doc,new Zo(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,E=-1;return h.type!==0&&(m=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),E=u.indexOf(h.doc.key)),{type:XT(h.type),doc:g,oldIndex:m,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function XT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe()}}class YT extends GT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ra(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hs(this.firestore,null,t)}}function rb(n){n=fl(n,Wa);const e=fl(n.firestore,Zd),t=UT(e),r=new YT(e);return WT(n._query),LT(t,n._query).then(i=>new QT(e,r,n,i))}(function(e,t=!0){(function(i){us=i})(os),Qi(new si("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),h=new Zd(new l_(r.getProvider("auth-internal")),new d_(r.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ye(oe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(m.options.projectId,E)}(u,i),u);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Sr(ah,"4.7.3",e),Sr(ah,"4.7.3","esm2017")})();function JT(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function ZT(n,e,t){return e&&JT(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Hh="(prefers-reduced-motion: reduce)",ji=1,ew=2,rs=3,fs=4,vo=5,ca=6,Pa=7,tw={CREATED:ji,MOUNTED:ew,IDLE:rs,MOVING:fs,SCROLLING:vo,DRAGGING:ca,DESTROYED:Pa};function ar(n){n.length=0}function Vr(n,e,t){return Array.prototype.slice.call(n,e,t)}function rt(n){return n.bind.apply(n,[null].concat(Vr(arguments,1)))}var rp=setTimeout,dl=function(){};function zh(n){return requestAnimationFrame(n)}function Ga(n,e){return typeof e===n}function Js(n){return!sc(n)&&Ga("object",n)}var ic=Array.isArray,ip=rt(Ga,"function"),Nr=rt(Ga,"string"),yo=rt(Ga,"undefined");function sc(n){return n===null}function sp(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function _o(n){return ic(n)?n:[n]}function cn(n,e){_o(n).forEach(e)}function oc(n,e){return n.indexOf(e)>-1}function ha(n,e){return n.push.apply(n,_o(e)),n}function er(n,e,t){n&&cn(e,function(r){r&&n.classList[t?"add":"remove"](r)})}function Ln(n,e){er(n,Nr(e)?e.split(" "):e,!0)}function Eo(n,e){cn(e,n.appendChild.bind(n))}function ac(n,e){cn(n,function(t){var r=(e||t).parentNode;r&&r.insertBefore(t,e)})}function Zs(n,e){return sp(n)&&(n.msMatchesSelector||n.matches).call(n,e)}function op(n,e){var t=n?Vr(n.children):[];return e?t.filter(function(r){return Zs(r,e)}):t}function To(n,e){return e?op(n,e)[0]:n.firstElementChild}var eo=Object.keys;function ii(n,e,t){return n&&(t?eo(n).reverse():eo(n)).forEach(function(r){r!=="__proto__"&&e(n[r],r)}),n}function to(n){return Vr(arguments,1).forEach(function(e){ii(e,function(t,r){n[r]=e[r]})}),n}function br(n){return Vr(arguments,1).forEach(function(e){ii(e,function(t,r){ic(t)?n[r]=t.slice():Js(t)?n[r]=br({},Js(n[r])?n[r]:{},t):n[r]=t})}),n}function Wh(n,e){cn(e||eo(n),function(t){delete n[t]})}function xn(n,e){cn(n,function(t){cn(e,function(r){t&&t.removeAttribute(r)})})}function De(n,e,t){Js(e)?ii(e,function(r,i){De(n,i,r)}):cn(n,function(r){sc(t)||t===""?xn(r,e):r.setAttribute(e,String(t))})}function Gi(n,e,t){var r=document.createElement(n);return e&&(Nr(e)?Ln(r,e):De(r,e)),t&&Eo(t,r),r}function dn(n,e,t){if(yo(t))return getComputedStyle(n)[e];sc(t)||(n.style[e]=""+t)}function no(n,e){dn(n,"display",e)}function ap(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function gn(n,e){return n.getAttribute(e)}function Gh(n,e){return n&&n.classList.contains(e)}function an(n){return n.getBoundingClientRect()}function hi(n){cn(n,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function up(n){return To(new DOMParser().parseFromString(n,"text/html").body)}function Xn(n,e){n.preventDefault(),e&&(n.stopPropagation(),n.stopImmediatePropagation())}function lp(n,e){return n&&n.querySelector(e)}function uc(n,e){return e?Vr(n.querySelectorAll(e)):[]}function tr(n,e){er(n,e,!1)}function pl(n){return n.timeStamp}function Yr(n){return Nr(n)?n:n?n+"px":""}var wo="splide",lc="data-"+wo;function Hs(n,e){if(!n)throw new Error("["+wo+"] "+(e||""))}var Dr=Math.min,ka=Math.max,Na=Math.floor,ro=Math.ceil,Wt=Math.abs;function cp(n,e,t){return Wt(n-e)<t}function fa(n,e,t,r){var i=Dr(e,t),o=ka(e,t);return r?i<n&&n<o:i<=n&&n<=o}function Fi(n,e,t){var r=Dr(e,t),i=ka(e,t);return Dr(ka(r,n),i)}function gl(n){return+(n>0)-+(n<0)}function ml(n,e){return cn(e,function(t){n=n.replace("%s",""+t)}),n}function cc(n){return n<10?"0"+n:""+n}var Kh={};function nw(n){return""+n+cc(Kh[n]=(Kh[n]||0)+1)}function hp(){var n=[];function e(u,h,g,m){i(u,h,function(E,P,O){var F="addEventListener"in E,L=F?E.removeEventListener.bind(E,P,g,m):E.removeListener.bind(E,g);F?E.addEventListener(P,g,m):E.addListener(g),n.push([E,P,O,g,L])})}function t(u,h,g){i(u,h,function(m,E,P){n=n.filter(function(O){return O[0]===m&&O[1]===E&&O[2]===P&&(!g||O[3]===g)?(O[4](),!1):!0})})}function r(u,h,g){var m,E=!0;return typeof CustomEvent=="function"?m=new CustomEvent(h,{bubbles:E,detail:g}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(h,E,!1,g)),u.dispatchEvent(m),m}function i(u,h,g){cn(u,function(m){m&&cn(h,function(E){E.split(" ").forEach(function(P){var O=P.split(".");g(m,O[0],O[1])})})})}function o(){n.forEach(function(u){u[4]()}),ar(n)}return{bind:e,unbind:t,dispatch:r,destroy:o}}var di="mounted",Qh="ready",Or="move",Io="moved",fp="click",rw="active",iw="inactive",sw="visible",ow="hidden",_t="refresh",Kt="updated",io="resize",hc="resized",aw="drag",uw="dragging",lw="dragged",fc="scroll",ds="scrolled",cw="overflow",dp="destroy",hw="arrows:mounted",fw="arrows:updated",dw="pagination:mounted",pw="pagination:updated",pp="navigation:mounted",gp="autoplay:play",gw="autoplay:playing",mp="autoplay:pause",vp="lazyload:loaded",yp="sk",_p="sh",Da="ei";function at(n){var e=n?n.event.bus:document.createDocumentFragment(),t=hp();function r(o,u){t.bind(e,_o(o).join(" "),function(h){u.apply(u,ic(h.detail)?h.detail:[])})}function i(o){t.dispatch(e,o,Vr(arguments,1))}return n&&n.event.on(dp,t.destroy),to(t,{bus:e,on:r,off:rt(t.unbind,e),emit:i})}function Ka(n,e,t,r){var i=Date.now,o,u=0,h,g=!0,m=0;function E(){if(!g){if(u=n?Dr((i()-o)/n,1):1,t&&t(u),u>=1&&(e(),o=i(),r&&++m>=r))return O();h=zh(E)}}function P($){$||L(),o=i()-($?u*n:0),g=!1,h=zh(E)}function O(){g=!0}function F(){o=i(),u=0,t&&t(u)}function L(){h&&cancelAnimationFrame(h),u=0,h=0,g=!0}function V($){n=$}function q(){return g}return{start:P,rewind:F,pause:O,cancel:L,set:V,isPaused:q}}function mw(n){var e=n;function t(i){e=i}function r(i){return oc(_o(i),e)}return{set:t,is:r}}function vw(n,e){var t=Ka(0,n,null,1);return function(){t.isPaused()&&t.start()}}function yw(n,e,t){var r=n.state,i=t.breakpoints||{},o=t.reducedMotion||{},u=hp(),h=[];function g(){var L=t.mediaQuery==="min";eo(i).sort(function(V,q){return L?+V-+q:+q-+V}).forEach(function(V){E(i[V],"("+(L?"min":"max")+"-width:"+V+"px)")}),E(o,Hh),P()}function m(L){L&&u.destroy()}function E(L,V){var q=matchMedia(V);u.bind(q,"change",P),h.push([L,q])}function P(){var L=r.is(Pa),V=t.direction,q=h.reduce(function($,X){return br($,X[1].matches?X[0]:{})},{});Wh(t),F(q),t.destroy?n.destroy(t.destroy==="completely"):L?(m(!0),n.mount()):V!==t.direction&&n.refresh()}function O(L){matchMedia(Hh).matches&&(L?br(t,o):Wh(t,eo(o)))}function F(L,V,q){br(t,L),V&&br(Object.getPrototypeOf(t),L),(q||!r.is(ji))&&n.emit(Kt,t)}return{setup:g,destroy:m,reduce:O,set:F}}var Qa="Arrow",Xa=Qa+"Left",Ya=Qa+"Right",Ep=Qa+"Up",Tp=Qa+"Down",Xh="rtl",Ja="ttb",Vu={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Ep,Ya],ArrowRight:[Tp,Xa]};function _w(n,e,t){function r(o,u,h){h=h||t.direction;var g=h===Xh&&!u?1:h===Ja?0:-1;return Vu[o]&&Vu[o][g]||o.replace(/width|left|right/i,function(m,E){var P=Vu[m.toLowerCase()][g]||m;return E>0?P.charAt(0).toUpperCase()+P.slice(1):P})}function i(o){return o*(t.direction===Xh?1:-1)}return{resolve:r,orient:i}}var rr="role",Ki="tabindex",Ew="disabled",yn="aria-",bo=yn+"controls",wp=yn+"current",Yh=yn+"selected",un=yn+"label",dc=yn+"labelledby",Ip=yn+"hidden",pc=yn+"orientation",so=yn+"roledescription",Jh=yn+"live",Zh=yn+"busy",ef=yn+"atomic",gc=[rr,Ki,Ew,bo,wp,un,dc,Ip,pc,so],Vn=wo+"__",Mr="is-",Mu=wo,tf=Vn+"track",Tw=Vn+"list",Za=Vn+"slide",bp=Za+"--clone",ww=Za+"__container",mc=Vn+"arrows",eu=Vn+"arrow",Ap=eu+"--prev",Cp=eu+"--next",tu=Vn+"pagination",Sp=tu+"__page",Iw=Vn+"progress",bw=Iw+"__bar",Aw=Vn+"toggle",Cw=Vn+"spinner",Sw=Vn+"sr",Rw=Mr+"initialized",fi=Mr+"active",Rp=Mr+"prev",Pp=Mr+"next",vl=Mr+"visible",yl=Mr+"loading",kp=Mr+"focus-in",Np=Mr+"overflow",Pw=[fi,vl,Rp,Pp,yl,kp,Np],kw={slide:Za,clone:bp,arrows:mc,arrow:eu,prev:Ap,next:Cp,pagination:tu,page:Sp,spinner:Cw};function Nw(n,e){if(ip(n.closest))return n.closest(e);for(var t=n;t&&t.nodeType===1&&!Zs(t,e);)t=t.parentElement;return t}var Dw=5,nf=200,Dp="touchstart mousedown",Fu="touchmove mousemove",Uu="touchend touchcancel mouseup click";function Ow(n,e,t){var r=at(n),i=r.on,o=r.bind,u=n.root,h=t.i18n,g={},m=[],E=[],P=[],O,F,L;function V(){Q(),Y(),X()}function q(){i(_t,$),i(_t,V),i(Kt,X),o(document,Dp+" keydown",function(c){L=c.type==="keydown"},{capture:!0}),o(u,"focusin",function(){er(u,kp,!!L)})}function $(c){var C=gc.concat("style");ar(m),tr(u,E),tr(O,P),xn([O,F],C),xn(u,c?C:["style",so])}function X(){tr(u,E),tr(O,P),E=J(Mu),P=J(tf),Ln(u,E),Ln(O,P),De(u,un,t.label),De(u,dc,t.labelledby)}function Q(){O=ee("."+tf),F=To(O,"."+Tw),Hs(O&&F,"A track/list element is missing."),ha(m,op(F,"."+Za+":not(."+bp+")")),ii({arrows:mc,pagination:tu,prev:Ap,next:Cp,bar:bw,toggle:Aw},function(c,C){g[C]=ee("."+c)}),to(g,{root:u,track:O,list:F,slides:m})}function Y(){var c=u.id||nw(wo),C=t.role;u.id=c,O.id=O.id||c+"-track",F.id=F.id||c+"-list",!gn(u,rr)&&u.tagName!=="SECTION"&&C&&De(u,rr,C),De(u,so,h.carousel),De(F,rr,"presentation")}function ee(c){var C=lp(u,c);return C&&Nw(C,"."+Mu)===u?C:void 0}function J(c){return[c+"--"+t.type,c+"--"+t.direction,t.drag&&c+"--draggable",t.isNavigation&&c+"--nav",c===Mu&&fi]}return to(g,{setup:V,mount:q,destroy:$})}var is="slide",ps="loop",Ao="fade";function Lw(n,e,t,r){var i=at(n),o=i.on,u=i.emit,h=i.bind,g=n.Components,m=n.root,E=n.options,P=E.isNavigation,O=E.updateOnMove,F=E.i18n,L=E.pagination,V=E.slideFocus,q=g.Direction.resolve,$=gn(r,"style"),X=gn(r,un),Q=t>-1,Y=To(r,"."+ww),ee;function J(){Q||(r.id=m.id+"-slide"+cc(e+1),De(r,rr,L?"tabpanel":"group"),De(r,so,F.slide),De(r,un,X||ml(F.slideLabel,[e+1,n.length]))),c()}function c(){h(r,"click",rt(u,fp,he)),h(r,"keydown",rt(u,yp,he)),o([Io,_p,ds],R),o(pp,w),O&&o(Or,A)}function C(){ee=!0,i.destroy(),tr(r,Pw),xn(r,gc),De(r,"style",$),De(r,un,X||"")}function w(){var ce=n.splides.map(function(ie){var me=ie.splide.Components.Slides.getAt(e);return me?me.slide.id:""}).join(" ");De(r,un,ml(F.slideX,(Q?t:e)+1)),De(r,bo,ce),De(r,rr,V?"button":""),V&&xn(r,so)}function A(){ee||R()}function R(){if(!ee){var ce=n.index;N(),I(),er(r,Rp,e===ce-1),er(r,Pp,e===ce+1)}}function N(){var ce=_e();ce!==Gh(r,fi)&&(er(r,fi,ce),De(r,wp,P&&ce||""),u(ce?rw:iw,he))}function I(){var ce=Je(),ie=!ce&&(!_e()||Q);if(n.state.is([fs,vo])||De(r,Ip,ie||""),De(uc(r,E.focusableNodes||""),Ki,ie?-1:""),V&&De(r,Ki,ie?-1:0),ce!==Gh(r,vl)&&(er(r,vl,ce),u(ce?sw:ow,he)),!ce&&document.activeElement===r){var me=g.Slides.getAt(n.index);me&&ap(me.slide)}}function de(ce,ie,me){dn(me&&Y||r,ce,ie)}function _e(){var ce=n.index;return ce===e||E.cloneStatus&&ce===t}function Je(){if(n.is(Ao))return _e();var ce=an(g.Elements.track),ie=an(r),me=q("left",!0),Ae=q("right",!0);return Na(ce[me])<=ro(ie[me])&&Na(ie[Ae])<=ro(ce[Ae])}function Se(ce,ie){var me=Wt(ce-e);return!Q&&(E.rewind||n.is(ps))&&(me=Dr(me,n.length-me)),me<=ie}var he={index:e,slideIndex:t,slide:r,container:Y,isClone:Q,mount:J,destroy:C,update:R,style:de,isWithin:Se};return he}function xw(n,e,t){var r=at(n),i=r.on,o=r.emit,u=r.bind,h=e.Elements,g=h.slides,m=h.list,E=[];function P(){O(),i(_t,F),i(_t,O)}function O(){g.forEach(function(R,N){V(R,N,-1)})}function F(){ee(function(R){R.destroy()}),ar(E)}function L(){ee(function(R){R.update()})}function V(R,N,I){var de=Lw(n,N,I,R);de.mount(),E.push(de),E.sort(function(_e,Je){return _e.index-Je.index})}function q(R){return R?J(function(N){return!N.isClone}):E}function $(R){var N=e.Controller,I=N.toIndex(R),de=N.hasFocus()?1:t.perPage;return J(function(_e){return fa(_e.index,I,I+de-1)})}function X(R){return J(R)[0]}function Q(R,N){cn(R,function(I){if(Nr(I)&&(I=up(I)),sp(I)){var de=g[N];de?ac(I,de):Eo(m,I),Ln(I,t.classes.slide),C(I,rt(o,io))}}),o(_t)}function Y(R){hi(J(R).map(function(N){return N.slide})),o(_t)}function ee(R,N){q(N).forEach(R)}function J(R){return E.filter(ip(R)?R:function(N){return Nr(R)?Zs(N.slide,R):oc(_o(R),N.index)})}function c(R,N,I){ee(function(de){de.style(R,N,I)})}function C(R,N){var I=uc(R,"img"),de=I.length;de?I.forEach(function(_e){u(_e,"load error",function(){--de||N()})}):N()}function w(R){return R?g.length:E.length}function A(){return E.length>t.perPage}return{mount:P,destroy:F,update:L,register:V,get:q,getIn:$,getAt:X,add:Q,remove:Y,forEach:ee,filter:J,style:c,getLength:w,isEnough:A}}function Vw(n,e,t){var r=at(n),i=r.on,o=r.bind,u=r.emit,h=e.Slides,g=e.Direction.resolve,m=e.Elements,E=m.root,P=m.track,O=m.list,F=h.getAt,L=h.style,V,q,$;function X(){Q(),o(window,"resize load",vw(rt(u,io))),i([Kt,_t],Q),i(io,Y)}function Q(){V=t.direction===Ja,dn(E,"maxWidth",Yr(t.width)),dn(P,g("paddingLeft"),ee(!1)),dn(P,g("paddingRight"),ee(!0)),Y(!0)}function Y(he){var ce=an(E);(he||q.width!==ce.width||q.height!==ce.height)&&(dn(P,"height",J()),L(g("marginRight"),Yr(t.gap)),L("width",C()),L("height",w(),!0),q=ce,u(hc),$!==($=Se())&&(er(E,Np,$),u(cw,$)))}function ee(he){var ce=t.padding,ie=g(he?"right":"left");return ce&&Yr(ce[ie]||(Js(ce)?0:ce))||"0px"}function J(){var he="";return V&&(he=c(),Hs(he,"height or heightRatio is missing."),he="calc("+he+" - "+ee(!1)+" - "+ee(!0)+")"),he}function c(){return Yr(t.height||an(O).width*t.heightRatio)}function C(){return t.autoWidth?null:Yr(t.fixedWidth)||(V?"":A())}function w(){return Yr(t.fixedHeight)||(V?t.autoHeight?null:A():c())}function A(){var he=Yr(t.gap);return"calc((100%"+(he&&" + "+he)+")/"+(t.perPage||1)+(he&&" - "+he)+")"}function R(){return an(O)[g("width")]}function N(he,ce){var ie=F(he||0);return ie?an(ie.slide)[g("width")]+(ce?0:_e()):0}function I(he,ce){var ie=F(he);if(ie){var me=an(ie.slide)[g("right")],Ae=an(O)[g("left")];return Wt(me-Ae)+(ce?0:_e())}return 0}function de(he){return I(n.length-1)-I(0)+N(0,he)}function _e(){var he=F(0);return he&&parseFloat(dn(he.slide,g("marginRight")))||0}function Je(he){return parseFloat(dn(P,g("padding"+(he?"Right":"Left"))))||0}function Se(){return n.is(Ao)||de(!0)>R()}return{mount:X,resize:Y,listSize:R,slideSize:N,sliderSize:de,totalSize:I,getPadding:Je,isOverflow:Se}}var Mw=2;function Fw(n,e,t){var r=at(n),i=r.on,o=e.Elements,u=e.Slides,h=e.Direction.resolve,g=[],m;function E(){i(_t,P),i([Kt,io],F),(m=q())&&(L(m),e.Layout.resize(!0))}function P(){O(),E()}function O(){hi(g),ar(g),r.destroy()}function F(){var $=q();m!==$&&(m<$||!$)&&r.emit(_t)}function L($){var X=u.get().slice(),Q=X.length;if(Q){for(;X.length<$;)ha(X,X);ha(X.slice(-$),X.slice(0,$)).forEach(function(Y,ee){var J=ee<$,c=V(Y.slide,ee);J?ac(c,X[0].slide):Eo(o.list,c),ha(g,c),u.register(c,ee-$+(J?0:Q),Y.index)})}}function V($,X){var Q=$.cloneNode(!0);return Ln(Q,t.classes.clone),Q.id=n.root.id+"-clone"+cc(X+1),Q}function q(){var $=t.clones;if(!n.is(ps))$=0;else if(yo($)){var X=t[h("fixedWidth")]&&e.Layout.slideSize(0),Q=X&&ro(an(o.track)[h("width")]/X);$=Q||t[h("autoWidth")]&&n.length||t.perPage*Mw}return $}return{mount:E,destroy:O}}function Uw(n,e,t){var r=at(n),i=r.on,o=r.emit,u=n.state.set,h=e.Layout,g=h.slideSize,m=h.getPadding,E=h.totalSize,P=h.listSize,O=h.sliderSize,F=e.Direction,L=F.resolve,V=F.orient,q=e.Elements,$=q.list,X=q.track,Q;function Y(){Q=e.Transition,i([di,hc,Kt,_t],ee)}function ee(){e.Controller.isBusy()||(e.Scroll.cancel(),c(n.index),e.Slides.update())}function J(ie,me,Ae,xe){ie!==me&&he(ie>Ae)&&(R(),C(A(de(),ie>Ae),!0)),u(fs),o(Or,me,Ae,ie),Q.start(me,function(){u(rs),o(Io,me,Ae,ie),xe&&xe()})}function c(ie){C(I(ie,!0))}function C(ie,me){if(!n.is(Ao)){var Ae=me?ie:w(ie);dn($,"transform","translate"+L("X")+"("+Ae+"px)"),ie!==Ae&&o(_p)}}function w(ie){if(n.is(ps)){var me=N(ie),Ae=me>e.Controller.getEnd(),xe=me<0;(xe||Ae)&&(ie=A(ie,Ae))}return ie}function A(ie,me){var Ae=ie-Se(me),xe=O();return ie-=V(xe*(ro(Wt(Ae)/xe)||1))*(me?1:-1),ie}function R(){C(de(),!0),Q.cancel()}function N(ie){for(var me=e.Slides.get(),Ae=0,xe=1/0,ot=0;ot<me.length;ot++){var Et=me[ot].index,se=Wt(I(Et,!0)-ie);if(se<=xe)xe=se,Ae=Et;else break}return Ae}function I(ie,me){var Ae=V(E(ie-1)-Je(ie));return me?_e(Ae):Ae}function de(){var ie=L("left");return an($)[ie]-an(X)[ie]+V(m(!1))}function _e(ie){return t.trimSpace&&n.is(is)&&(ie=Fi(ie,0,V(O(!0)-P()))),ie}function Je(ie){var me=t.focus;return me==="center"?(P()-g(ie,!0))/2:+me*g(ie)||0}function Se(ie){return I(ie?e.Controller.getEnd():0,!!t.trimSpace)}function he(ie){var me=V(A(de(),ie));return ie?me>=0:me<=$[L("scrollWidth")]-an(X)[L("width")]}function ce(ie,me){me=yo(me)?de():me;var Ae=ie!==!0&&V(me)<V(Se(!1)),xe=ie!==!1&&V(me)>V(Se(!0));return Ae||xe}return{mount:Y,move:J,jump:c,translate:C,shift:A,cancel:R,toIndex:N,toPosition:I,getPosition:de,getLimit:Se,exceededLimit:ce,reposition:ee}}function jw(n,e,t){var r=at(n),i=r.on,o=r.emit,u=e.Move,h=u.getPosition,g=u.getLimit,m=u.toPosition,E=e.Slides,P=E.isEnough,O=E.getLength,F=t.omitEnd,L=n.is(ps),V=n.is(is),q=rt(de,!1),$=rt(de,!0),X=t.start||0,Q,Y=X,ee,J,c;function C(){w(),i([Kt,_t,Da],w),i(hc,A)}function w(){ee=O(!0),J=t.perMove,c=t.perPage,Q=he();var se=Fi(X,0,F?Q:ee-1);se!==X&&(X=se,u.reposition())}function A(){Q!==he()&&o(Da)}function R(se,je,pt){if(!Et()){var et=I(se),ze=Se(et);ze>-1&&(je||ze!==X)&&(Ae(ze),u.move(et,ze,Y,pt))}}function N(se,je,pt,et){e.Scroll.scroll(se,je,pt,function(){var ze=Se(u.toIndex(h()));Ae(F?Dr(ze,Q):ze),et&&et()})}function I(se){var je=X;if(Nr(se)){var pt=se.match(/([+\-<>])(\d+)?/)||[],et=pt[1],ze=pt[2];et==="+"||et==="-"?je=_e(X+ +(""+et+(+ze||1)),X):et===">"?je=ze?ce(+ze):q(!0):et==="<"&&(je=$(!0))}else je=L?se:Fi(se,0,Q);return je}function de(se,je){var pt=J||(ot()?1:c),et=_e(X+pt*(se?-1:1),X,!(J||ot()));return et===-1&&V&&!cp(h(),g(!se),1)?se?0:Q:je?et:Se(et)}function _e(se,je,pt){if(P()||ot()){var et=Je(se);et!==se&&(je=se,se=et,pt=!1),se<0||se>Q?!J&&(fa(0,se,je,!0)||fa(Q,je,se,!0))?se=ce(ie(se)):L?se=pt?se<0?-(ee%c||c):ee:se:t.rewind?se=se<0?Q:0:se=-1:pt&&se!==je&&(se=ce(ie(je)+(se<je?-1:1)))}else se=-1;return se}function Je(se){if(V&&t.trimSpace==="move"&&se!==X)for(var je=h();je===m(se,!0)&&fa(se,0,n.length-1,!t.rewind);)se<X?--se:++se;return se}function Se(se){return L?(se+ee)%ee||0:se}function he(){for(var se=ee-(ot()||L&&J?1:c);F&&se-- >0;)if(m(ee-1,!0)!==m(se,!0)){se++;break}return Fi(se,0,ee-1)}function ce(se){return Fi(ot()?se:c*se,0,Q)}function ie(se){return ot()?Dr(se,Q):Na((se>=Q?ee-1:se)/c)}function me(se){var je=u.toIndex(se);return V?Fi(je,0,Q):je}function Ae(se){se!==X&&(Y=X,X=se)}function xe(se){return se?Y:X}function ot(){return!yo(t.focus)||t.isNavigation}function Et(){return n.state.is([fs,vo])&&!!t.waitForTransition}return{mount:C,go:R,scroll:N,getNext:q,getPrev:$,getAdjacent:de,getEnd:he,setIndex:Ae,getIndex:xe,toIndex:ce,toPage:ie,toDest:me,hasFocus:ot,isBusy:Et}}var Bw="http://www.w3.org/2000/svg",$w="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",ea=40;function qw(n,e,t){var r=at(n),i=r.on,o=r.bind,u=r.emit,h=t.classes,g=t.i18n,m=e.Elements,E=e.Controller,P=m.arrows,O=m.track,F=P,L=m.prev,V=m.next,q,$,X={};function Q(){ee(),i(Kt,Y)}function Y(){J(),Q()}function ee(){var N=t.arrows;N&&!(L&&V)&&w(),L&&V&&(to(X,{prev:L,next:V}),no(F,N?"":"none"),Ln(F,$=mc+"--"+t.direction),N&&(c(),R(),De([L,V],bo,O.id),u(hw,L,V)))}function J(){r.destroy(),tr(F,$),q?(hi(P?[L,V]:F),L=V=null):xn([L,V],gc)}function c(){i([di,Io,_t,ds,Da],R),o(V,"click",rt(C,">")),o(L,"click",rt(C,"<"))}function C(N){E.go(N,!0)}function w(){F=P||Gi("div",h.arrows),L=A(!0),V=A(!1),q=!0,Eo(F,[L,V]),!P&&ac(F,O)}function A(N){var I='<button class="'+h.arrow+" "+(N?h.prev:h.next)+'" type="button"><svg xmlns="'+Bw+'" viewBox="0 0 '+ea+" "+ea+'" width="'+ea+'" height="'+ea+'" focusable="false"><path d="'+(t.arrowPath||$w)+'" />';return up(I)}function R(){if(L&&V){var N=n.index,I=E.getPrev(),de=E.getNext(),_e=I>-1&&N<I?g.last:g.prev,Je=de>-1&&N>de?g.first:g.next;L.disabled=I<0,V.disabled=de<0,De(L,un,_e),De(V,un,Je),u(fw,L,V,I,de)}}return{arrows:X,mount:Q,destroy:J,update:R}}var Hw=lc+"-interval";function zw(n,e,t){var r=at(n),i=r.on,o=r.bind,u=r.emit,h=Ka(t.interval,n.go.bind(n,">"),c),g=h.isPaused,m=e.Elements,E=e.Elements,P=E.root,O=E.toggle,F=t.autoplay,L,V,q=F==="pause";function $(){F&&(X(),O&&De(O,bo,m.track.id),q||Q(),J())}function X(){t.pauseOnHover&&o(P,"mouseenter mouseleave",function(w){L=w.type==="mouseenter",ee()}),t.pauseOnFocus&&o(P,"focusin focusout",function(w){V=w.type==="focusin",ee()}),O&&o(O,"click",function(){q?Q():Y(!0)}),i([Or,fc,_t],h.rewind),i(Or,C)}function Q(){g()&&e.Slides.isEnough()&&(h.start(!t.resetProgress),V=L=q=!1,J(),u(gp))}function Y(w){w===void 0&&(w=!0),q=!!w,J(),g()||(h.pause(),u(mp))}function ee(){q||(L||V?Y(!1):Q())}function J(){O&&(er(O,fi,!q),De(O,un,t.i18n[q?"play":"pause"]))}function c(w){var A=m.bar;A&&dn(A,"width",w*100+"%"),u(gw,w)}function C(w){var A=e.Slides.getAt(w);h.set(A&&+gn(A.slide,Hw)||t.interval)}return{mount:$,destroy:h.cancel,play:Q,pause:Y,isPaused:g}}function Ww(n,e,t){var r=at(n),i=r.on;function o(){t.cover&&(i(vp,rt(h,!0)),i([di,Kt,_t],rt(u,!0)))}function u(g){e.Slides.forEach(function(m){var E=To(m.container||m.slide,"img");E&&E.src&&h(g,E,m)})}function h(g,m,E){E.style("background",g?'center/cover no-repeat url("'+m.src+'")':"",!0),no(m,g?"none":"")}return{mount:o,destroy:rt(u,!1)}}var Gw=10,Kw=600,Qw=.6,Xw=1.5,Yw=800;function Jw(n,e,t){var r=at(n),i=r.on,o=r.emit,u=n.state.set,h=e.Move,g=h.getPosition,m=h.getLimit,E=h.exceededLimit,P=h.translate,O=n.is(is),F,L,V=1;function q(){i(Or,Y),i([Kt,_t],ee)}function $(c,C,w,A,R){var N=g();if(Y(),w&&(!O||!E())){var I=e.Layout.sliderSize(),de=gl(c)*I*Na(Wt(c)/I)||0;c=h.toPosition(e.Controller.toDest(c%I))+de}var _e=cp(N,c,1);V=1,C=_e?0:C||ka(Wt(c-N)/Xw,Yw),L=A,F=Ka(C,X,rt(Q,N,c,R),1),u(vo),o(fc),F.start()}function X(){u(rs),L&&L(),o(ds)}function Q(c,C,w,A){var R=g(),N=c+(C-c)*J(A),I=(N-R)*V;P(R+I),O&&!w&&E()&&(V*=Qw,Wt(I)<Gw&&$(m(E(!0)),Kw,!1,L,!0))}function Y(){F&&F.cancel()}function ee(){F&&!F.isPaused()&&(Y(),X())}function J(c){var C=t.easingFunc;return C?C(c):1-Math.pow(1-c,4)}return{mount:q,destroy:Y,scroll:$,cancel:ee}}var Ui={passive:!1,capture:!0};function Zw(n,e,t){var r=at(n),i=r.on,o=r.emit,u=r.bind,h=r.unbind,g=n.state,m=e.Move,E=e.Scroll,P=e.Controller,O=e.Elements.track,F=e.Media.reduce,L=e.Direction,V=L.resolve,q=L.orient,$=m.getPosition,X=m.exceededLimit,Q,Y,ee,J,c,C=!1,w,A,R;function N(){u(O,Fu,dl,Ui),u(O,Uu,dl,Ui),u(O,Dp,de,Ui),u(O,"click",Se,{capture:!0}),u(O,"dragstart",Xn),i([di,Kt],I)}function I(){var ae=t.drag;Vt(!ae),J=ae==="free"}function de(ae){if(w=!1,!A){var We=ze(ae);et(ae.target)&&(We||!ae.button)&&(P.isBusy()?Xn(ae,!0):(R=We?O:window,c=g.is([fs,vo]),ee=null,u(R,Fu,_e,Ui),u(R,Uu,Je,Ui),m.cancel(),E.cancel(),he(ae)))}}function _e(ae){if(g.is(ca)||(g.set(ca),o(aw)),ae.cancelable)if(c){m.translate(Q+pt(ot(ae)));var We=Et(ae)>nf,Mt=C!==(C=X());(We||Mt)&&he(ae),w=!0,o(uw),Xn(ae)}else me(ae)&&(c=ie(ae),Xn(ae))}function Je(ae){g.is(ca)&&(g.set(rs),o(lw)),c&&(ce(ae),Xn(ae)),h(R,Fu,_e),h(R,Uu,Je),c=!1}function Se(ae){!A&&w&&Xn(ae,!0)}function he(ae){ee=Y,Y=ae,Q=$()}function ce(ae){var We=Ae(ae),Mt=xe(We),qt=t.rewind&&t.rewindByDrag;F(!1),J?P.scroll(Mt,0,t.snap):n.is(Ao)?P.go(q(gl(We))<0?qt?"<":"-":qt?">":"+"):n.is(is)&&C&&qt?P.go(X(!0)?">":"<"):P.go(P.toDest(Mt),!0),F(!0)}function ie(ae){var We=t.dragMinThreshold,Mt=Js(We),qt=Mt&&We.mouse||0,Le=(Mt?We.touch:+We)||10;return Wt(ot(ae))>(ze(ae)?Le:qt)}function me(ae){return Wt(ot(ae))>Wt(ot(ae,!0))}function Ae(ae){if(n.is(ps)||!C){var We=Et(ae);if(We&&We<nf)return ot(ae)/We}return 0}function xe(ae){return $()+gl(ae)*Dr(Wt(ae)*(t.flickPower||600),J?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function ot(ae,We){return je(ae,We)-je(se(ae),We)}function Et(ae){return pl(ae)-pl(se(ae))}function se(ae){return Y===ae&&ee||Y}function je(ae,We){return(ze(ae)?ae.changedTouches[0]:ae)["page"+V(We?"Y":"X")]}function pt(ae){return ae/(C&&n.is(is)?Dw:1)}function et(ae){var We=t.noDrag;return!Zs(ae,"."+Sp+", ."+eu)&&(!We||!Zs(ae,We))}function ze(ae){return typeof TouchEvent<"u"&&ae instanceof TouchEvent}function _n(){return c}function Vt(ae){A=ae}return{mount:N,disable:Vt,isDragging:_n}}var eI={Spacebar:" ",Right:Ya,Left:Xa,Up:Ep,Down:Tp};function vc(n){return n=Nr(n)?n:n.key,eI[n]||n}var rf="keydown";function tI(n,e,t){var r=at(n),i=r.on,o=r.bind,u=r.unbind,h=n.root,g=e.Direction.resolve,m,E;function P(){O(),i(Kt,F),i(Kt,O),i(Or,V)}function O(){var $=t.keyboard;$&&(m=$==="global"?window:h,o(m,rf,q))}function F(){u(m,rf)}function L($){E=$}function V(){var $=E;E=!0,rp(function(){E=$})}function q($){if(!E){var X=vc($);X===g(Xa)?n.go("<"):X===g(Ya)&&n.go(">")}}return{mount:P,destroy:F,disable:L}}var zs=lc+"-lazy",da=zs+"-srcset",nI="["+zs+"], ["+da+"]";function rI(n,e,t){var r=at(n),i=r.on,o=r.off,u=r.bind,h=r.emit,g=t.lazyLoad==="sequential",m=[Io,ds],E=[];function P(){t.lazyLoad&&(O(),i(_t,O))}function O(){ar(E),F(),g?$():(o(m),i(m,L),L())}function F(){e.Slides.forEach(function(X){uc(X.slide,nI).forEach(function(Q){var Y=gn(Q,zs),ee=gn(Q,da);if(Y!==Q.src||ee!==Q.srcset){var J=t.classes.spinner,c=Q.parentElement,C=To(c,"."+J)||Gi("span",J,c);E.push([Q,X,C]),Q.src||no(Q,"none")}})})}function L(){E=E.filter(function(X){var Q=t.perPage*((t.preloadPages||1)+1)-1;return X[1].isWithin(n.index,Q)?V(X):!0}),E.length||o(m)}function V(X){var Q=X[0];Ln(X[1].slide,yl),u(Q,"load error",rt(q,X)),De(Q,"src",gn(Q,zs)),De(Q,"srcset",gn(Q,da)),xn(Q,zs),xn(Q,da)}function q(X,Q){var Y=X[0],ee=X[1];tr(ee.slide,yl),Q.type!=="error"&&(hi(X[2]),no(Y,""),h(vp,Y,ee),h(io)),g&&$()}function $(){E.length&&V(E.shift())}return{mount:P,destroy:rt(ar,E),check:L}}function iI(n,e,t){var r=at(n),i=r.on,o=r.emit,u=r.bind,h=e.Slides,g=e.Elements,m=e.Controller,E=m.hasFocus,P=m.getIndex,O=m.go,F=e.Direction.resolve,L=g.pagination,V=[],q,$;function X(){Q(),i([Kt,_t,Da],X);var A=t.pagination;L&&no(L,A?"":"none"),A&&(i([Or,fc,ds],w),Y(),w(),o(dw,{list:q,items:V},C(n.index)))}function Q(){q&&(hi(L?Vr(q.children):q),tr(q,$),ar(V),q=null),r.destroy()}function Y(){var A=n.length,R=t.classes,N=t.i18n,I=t.perPage,de=E()?m.getEnd()+1:ro(A/I);q=L||Gi("ul",R.pagination,g.track.parentElement),Ln(q,$=tu+"--"+c()),De(q,rr,"tablist"),De(q,un,N.select),De(q,pc,c()===Ja?"vertical":"");for(var _e=0;_e<de;_e++){var Je=Gi("li",null,q),Se=Gi("button",{class:R.page,type:"button"},Je),he=h.getIn(_e).map(function(ie){return ie.slide.id}),ce=!E()&&I>1?N.pageX:N.slideX;u(Se,"click",rt(ee,_e)),t.paginationKeyboard&&u(Se,"keydown",rt(J,_e)),De(Je,rr,"presentation"),De(Se,rr,"tab"),De(Se,bo,he.join(" ")),De(Se,un,ml(ce,_e+1)),De(Se,Ki,-1),V.push({li:Je,button:Se,page:_e})}}function ee(A){O(">"+A,!0)}function J(A,R){var N=V.length,I=vc(R),de=c(),_e=-1;I===F(Ya,!1,de)?_e=++A%N:I===F(Xa,!1,de)?_e=(--A+N)%N:I==="Home"?_e=0:I==="End"&&(_e=N-1);var Je=V[_e];Je&&(ap(Je.button),O(">"+_e),Xn(R,!0))}function c(){return t.paginationDirection||t.direction}function C(A){return V[m.toPage(A)]}function w(){var A=C(P(!0)),R=C(P());if(A){var N=A.button;tr(N,fi),xn(N,Yh),De(N,Ki,-1)}if(R){var I=R.button;Ln(I,fi),De(I,Yh,!0),De(I,Ki,"")}o(pw,{list:q,items:V},A,R)}return{items:V,mount:X,destroy:Q,getAt:C,update:w}}var sI=[" ","Enter"];function oI(n,e,t){var r=t.isNavigation,i=t.slideFocus,o=[];function u(){n.splides.forEach(function(L){L.isParent||(m(n,L.splide),m(L.splide,n))}),r&&E()}function h(){o.forEach(function(L){L.destroy()}),ar(o)}function g(){h(),u()}function m(L,V){var q=at(L);q.on(Or,function($,X,Q){V.go(V.is(ps)?Q:$)}),o.push(q)}function E(){var L=at(n),V=L.on;V(fp,O),V(yp,F),V([di,Kt],P),o.push(L),L.emit(pp,n.splides)}function P(){De(e.Elements.list,pc,t.direction===Ja?"vertical":"")}function O(L){n.go(L.index)}function F(L,V){oc(sI,vc(V))&&(O(L),Xn(V))}return{setup:rt(e.Media.set,{slideFocus:yo(i)?r:i},!0),mount:u,destroy:h,remount:g}}function aI(n,e,t){var r=at(n),i=r.bind,o=0;function u(){t.wheel&&i(e.Elements.track,"wheel",h,Ui)}function h(m){if(m.cancelable){var E=m.deltaY,P=E<0,O=pl(m),F=t.wheelMinThreshold||0,L=t.wheelSleep||0;Wt(E)>F&&O-o>L&&(n.go(P?"<":">"),o=O),g(P)&&Xn(m)}}function g(m){return!t.releaseWheel||n.state.is(fs)||e.Controller.getAdjacent(m)!==-1}return{mount:u}}var uI=90;function lI(n,e,t){var r=at(n),i=r.on,o=e.Elements.track,u=t.live&&!t.isNavigation,h=Gi("span",Sw),g=Ka(uI,rt(E,!1));function m(){u&&(O(!e.Autoplay.isPaused()),De(o,ef,!0),h.textContent="…",i(gp,rt(O,!0)),i(mp,rt(O,!1)),i([Io,ds],rt(E,!0)))}function E(F){De(o,Zh,F),F?(Eo(o,h),g.start()):(hi(h),g.cancel())}function P(){xn(o,[Jh,ef,Zh]),hi(h)}function O(F){u&&De(o,Jh,F?"off":"polite")}return{mount:m,disable:O,destroy:P}}var cI=Object.freeze({__proto__:null,Media:yw,Direction:_w,Elements:Ow,Slides:xw,Layout:Vw,Clones:Fw,Move:Uw,Controller:jw,Arrows:qw,Autoplay:zw,Cover:Ww,Scroll:Jw,Drag:Zw,Keyboard:tI,LazyLoad:rI,Pagination:iI,Sync:oI,Wheel:aI,Live:lI}),hI={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},fI={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:kw,i18n:hI,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function dI(n,e,t){var r=e.Slides;function i(){at(n).on([di,_t],o)}function o(){r.forEach(function(h){h.style("transform","translateX(-"+100*h.index+"%)")})}function u(h,g){r.style("transition","opacity "+t.speed+"ms "+t.easing),rp(g)}return{mount:i,start:u,cancel:dl}}function pI(n,e,t){var r=e.Move,i=e.Controller,o=e.Scroll,u=e.Elements.list,h=rt(dn,u,"transition"),g;function m(){at(n).bind(u,"transitionend",function(F){F.target===u&&g&&(P(),g())})}function E(F,L){var V=r.toPosition(F,!0),q=r.getPosition(),$=O(F);Wt(V-q)>=1&&$>=1?t.useScroll?o.scroll(V,$,!1,L):(h("transform "+$+"ms "+t.easing),r.translate(V,!0),g=L):(r.jump(F),L())}function P(){h(""),o.cancel()}function O(F){var L=t.rewindSpeed;if(n.is(is)&&L){var V=i.getIndex(!0),q=i.getEnd();if(V===0&&F>=q||V>=q&&F===0)return L}return t.speed}return{mount:m,start:E,cancel:P}}var gI=function(){function n(t,r){this.event=at(),this.Components={},this.state=mw(ji),this.splides=[],this._o={},this._E={};var i=Nr(t)?lp(document,t):t;Hs(i,i+" is invalid."),this.root=i,r=br({label:gn(i,un)||"",labelledby:gn(i,dc)||""},fI,n.defaults,r||{});try{br(r,JSON.parse(gn(i,lc)))}catch{Hs(!1,"Invalid JSON")}this._o=Object.create(br({},r))}var e=n.prototype;return e.mount=function(r,i){var o=this,u=this.state,h=this.Components;Hs(u.is([ji,Pa]),"Already mounted!"),u.set(ji),this._C=h,this._T=i||this._T||(this.is(Ao)?dI:pI),this._E=r||this._E;var g=to({},cI,this._E,{Transition:this._T});return ii(g,function(m,E){var P=m(o,h,o._o);h[E]=P,P.setup&&P.setup()}),ii(h,function(m){m.mount&&m.mount()}),this.emit(di),Ln(this.root,Rw),u.set(rs),this.emit(Qh),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(rs)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,i){return this.event.on(r,i),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(Vr(arguments,1))),this},e.add=function(r,i){return this._C.Slides.add(r,i),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(_t),this},e.destroy=function(r){r===void 0&&(r=!0);var i=this.event,o=this.state;return o.is(ji)?at(this).on(Qh,this.destroy.bind(this,r)):(ii(this._C,function(u){u.destroy&&u.destroy(r)},!0),i.emit(dp),i.destroy(),r&&ar(this.splides),o.set(Pa)),this},ZT(n,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),Op=gI;Op.defaults={};Op.STATES=tw;/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.4.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function mI(n){n.length=0}function yc(n,e,t){return Array.prototype.slice.call(n,e,t)}function nu(n){return n.bind.apply(n,[null].concat(yc(arguments,1)))}function _c(n,e){return typeof e===n}var Lp=Array.isArray;nu(_c,"function");nu(_c,"string");nu(_c,"undefined");function xp(n){return Lp(n)?n:[n]}function sf(n,e){xp(n).forEach(e)}var vI=Object.keys;function yI(n,e,t){if(n){var r=vI(n);r=r;for(var i=0;i<r.length;i++){var o=r[i];if(o!=="__proto__"&&e(n[o],o)===!1)break}}return n}function _I(n){return yc(arguments,1).forEach(function(e){yI(e,function(t,r){n[r]=e[r]})}),n}var Vp="splide";function EI(){var n=[];function e(u,h,g,m){i(u,h,function(E,P,O){var F="addEventListener"in E,L=F?E.removeEventListener.bind(E,P,g,m):E.removeListener.bind(E,g);F?E.addEventListener(P,g,m):E.addListener(g),n.push([E,P,O,g,L])})}function t(u,h,g){i(u,h,function(m,E,P){n=n.filter(function(O){return O[0]===m&&O[1]===E&&O[2]===P&&(!g||O[3]===g)?(O[4](),!1):!0})})}function r(u,h,g){var m,E=!0;return typeof CustomEvent=="function"?m=new CustomEvent(h,{bubbles:E,detail:g}):(m=document.createEvent("CustomEvent"),m.initCustomEvent(h,E,!1,g)),u.dispatchEvent(m),m}function i(u,h,g){sf(u,function(m){m&&sf(h,function(E){E.split(" ").forEach(function(P){var O=P.split(".");g(m,O[0],O[1])})})})}function o(){n.forEach(function(u){u[4]()}),mI(n)}return{bind:e,unbind:t,dispatch:r,destroy:o}}var TI="visible",wI="hidden",ju="refresh",II="updated",bI="destroy";function Mp(n){var e=n?n.event.bus:document.createDocumentFragment(),t=EI();function r(o,u){t.bind(e,xp(o).join(" "),function(h){u.apply(u,Lp(h.detail)?h.detail:[])})}function i(o){t.dispatch(e,o,yc(arguments,1))}return n&&n.event.on(bI,t.destroy),_I(t,{bus:e,on:r,off:nu(t.unbind,e),emit:i})}var AI=Vp,ru=Vp+"__slide",CI=ru+"__container";function of(n){n.length=0}function iu(n,e,t){return Array.prototype.slice.call(n,e,t)}function Ec(n){return n.bind(null,...iu(arguments,1))}function su(n,e){return typeof e===n}function SI(n){return!Ic(n)&&su("object",n)}const Tc=Array.isArray;Ec(su,"function");const wc=Ec(su,"string"),RI=Ec(su,"undefined");function Ic(n){return n===null}function PI(n){return n instanceof HTMLElement}function bc(n){return Tc(n)?n:[n]}function ss(n,e){bc(n).forEach(e)}function af(n,e){return n.push(...bc(e)),n}function Fp(n,e,t){n&&ss(e,r=>{r&&n.classList[t?"add":"remove"](r)})}function _l(n,e){Fp(n,wc(e)?e.split(" "):e,!0)}function pa(n,e){ss(e,n.appendChild.bind(n))}function kI(n,e){return PI(n)&&(n.msMatchesSelector||n.matches).call(n,e)}function NI(n,e){const t=n?iu(n.children):[];return e?t.filter(r=>kI(r,e)):t}function uf(n,e){return e?NI(n,e)[0]:n.firstElementChild}const Up=Object.keys;function jp(n,e,t){if(n){let r=Up(n);r=r;for(let i=0;i<r.length;i++){const o=r[i];if(o!=="__proto__"&&e(n[o],o)===!1)break}}return n}function DI(n){return iu(arguments,1).forEach(e=>{jp(e,(t,r)=>{n[r]=e[r]})}),n}function OI(n,e){bc(Up(n)).forEach(t=>{delete n[t]})}function El(n,e){ss(n,t=>{ss(e,r=>{t&&t.removeAttribute(r)})})}function Ac(n,e,t){SI(e)?jp(e,(r,i)=>{Ac(n,i,r)}):ss(n,r=>{Ic(t)||t===""?El(r,e):r.setAttribute(e,String(t))})}function lf(n,e,t){const r=document.createElement(n);return e&&(wc(e)?_l(r,e):Ac(r,e)),t&&pa(t,r),r}function Qn(n,e,t){if(RI(t))return getComputedStyle(n)[e];Ic(t)||(n.style[e]=`${t}`)}function LI(n,e){return n&&n.classList.contains(e)}function xI(n){ss(n,e=>{e&&e.parentNode&&e.parentNode.removeChild(e)})}function cf(n,e){return e?iu(n.querySelectorAll(e)):[]}function hf(n,e){Fp(n,e,!1)}function ta(n){return wc(n)?n:n?`${n}px`:""}const VI="splide";function MI(n,e){if(!n)throw new Error(`[${VI}] ${e}`)}const{min:FI,max:ib,floor:sb,ceil:ob,abs:ab}=Math;function UI(n){return n<10?`0${n}`:`${n}`}const Bp=`${ru}__row`,Tl=`${ru}--col`,jI={rows:1,cols:1,dimensions:[],gap:{}};function BI(n){function e(){const{rows:i,cols:o,dimensions:u}=n;return Tc(u)&&u.length?u:[[i,o]]}function t(i){const o=e();return o[FI(i,o.length-1)]}function r(i){const o=e();let u,h,g=0;for(let m=0;m<o.length;m++){const E=o[m];if(u=E[0]||1,h=E[1]||1,g+=u*h,i<g)break}return MI(u&&h,"Invalid dimension"),[u,h]}return{get:t,getAt:r}}function $I(n,e,t){const{on:r,destroy:i}=Mp(n),{Components:o,options:u}=n,{resolve:h}=o.Direction,{forEach:g}=o.Slides;function m(){P(),u.slideFocus&&(r(TI,X),r(wI,Q))}function E(){g(Y=>{const{slide:ee}=Y;$(ee,!1),V(ee).forEach(J=>{El(J,"style")}),q(ee).forEach(J=>{L(J,!0),El(J,"style")})}),i()}function P(){g(Y=>{const{slide:ee}=Y,[J,c]=t.get(Y.isClone?Y.slideIndex:Y.index);O(J,ee),F(c,ee),q(Y.slide).forEach((C,w)=>{C.id=`${Y.slide.id}-col${UI(w+1)}`,n.options.cover&&L(C)})})}function O(Y,ee){const{row:J}=e.gap,c=`calc(${100/Y}%${J?` - ${ta(J)} * ${(Y-1)/Y}`:""})`;V(ee).forEach((C,w,A)=>{Qn(C,"height",c),Qn(C,"display","flex"),Qn(C,"margin",`0 0 ${ta(J)} 0`),Qn(C,"padding",0),w===A.length-1&&Qn(C,"marginBottom",0)})}function F(Y,ee){const{col:J}=e.gap,c=`calc(${100/Y}%${J?` - ${ta(J)} * ${(Y-1)/Y}`:""})`;q(ee).forEach((C,w,A)=>{Qn(C,"width",c),w!==A.length-1&&Qn(C,h("marginRight"),ta(J))})}function L(Y,ee){const J=uf(Y,`.${CI}`),c=uf(J||Y,"img");c&&c.src&&(Qn(J||Y,"background",ee?"":`center/cover no-repeat url("${c.src}")`),Qn(c,"display",ee?"":"none"))}function V(Y){return cf(Y,`.${Bp}`)}function q(Y){return cf(Y,`.${Tl}`)}function $(Y,ee){q(Y).forEach(J=>{Ac(J,"tabindex",ee?0:null)})}function X(Y){$(Y.slide,!0)}function Q(Y){$(Y.slide,!1)}return{mount:m,destroy:E}}function ub(n,e,t){const{on:r,off:i}=Mp(n),{Elements:o}=e,u={},h=BI(u),g=$I(n,u,h),m=`${AI}--grid`,E=[];function P(){O(),r(II,O)}function O(){OI(u),DI(u,jI,t.grid||{}),Q()?(F(),af(E,o.slides),_l(n.root,m),pa(o.list,q()),i(ju),r(ju,V),L()):Y()&&(F(),L())}function F(){if(Y()){const{slides:ee}=o;g.destroy(),E.forEach(J=>{hf(J,Tl),pa(o.list,J)}),xI(ee),hf(n.root,m),of(ee),af(ee,E),of(E),i(ju)}}function L(){n.refresh()}function V(){Y()&&g.mount()}function q(){const ee=[];let J=0,c=0,C,w;return E.forEach((A,R)=>{const[N,I]=h.getAt(R);c||(J||(C=lf(A.tagName,ru),ee.push(C)),w=$(N,A,C)),X(I,A,w),++c>=I&&(c=0,J=++J>=N?0:J)}),ee}function $(ee,J,c){const C=J.tagName.toLowerCase()==="li"?"ul":"div";return lf(C,Bp,c)}function X(ee,J,c){return _l(J,Tl),pa(c,J),J}function Q(){if(t.grid){const{rows:ee,cols:J,dimensions:c}=u;return ee>1||J>1||Tc(c)&&c.length>0}return!1}function Y(){return LI(n.root,m)}return{mount:P,destroy:F}}export{ub as G,YI as J,Op as S,rb as a,_r as b,tb as c,KI as d,HI as e,qI as f,nb as g,QI as h,mm as i,WI as o,GI as s,XI as t,zI as u};
//# sourceMappingURL=vendor-DZUFF-U2.js.map
