var vc={};/**
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
 */const Zu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let I=(l&15)<<2|d>>6,A=d&63;u||(A=64,a||(I=64)),r.push(t[f],t[y],t[I],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new ip;const I=s<<2|l>>4;if(r.push(I),d!==64){const A=l<<4&240|d>>2;if(r.push(A),y!==64){const b=d<<6&192|y;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(n){const e=Zu(n);return eh.encodeByteArray(e,!0)},ss=function(n){return sp(n).replace(/\./g,"")},th=function(n){try{return eh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ap=()=>op().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof vc>"u")return;const n=vc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&th(n[1]);return e&&JSON.parse(e)},ws=()=>{try{return ap()||lp()||cp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nh=n=>{var e,t;return(t=(e=ws())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},up=n=>{const e=nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},rh=()=>{var n;return(n=ws())===null||n===void 0?void 0:n.config},ih=n=>{var e;return(e=ws())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function dp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ss(JSON.stringify(t)),ss(JSON.stringify(a)),""].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function pp(){var n;const e=(n=ws())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vp(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yp(){return!pp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ep(){try{return typeof indexedDB=="object"}catch{return!1}}function Tp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ip="FirebaseError";class Lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ip,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?wp(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Lt(i,l,r)}}function wp(n,e){return n.replace(Ap,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function bp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(yc(s)&&yc(a)){if(!os(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function yc(n){return n!==null&&typeof n=="object"}/**
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
 */function ri(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Nr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Sp(n,e){const t=new Cp(n,e);return t.subscribe.bind(t)}class Cp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_o),i.error===void 0&&(i.error=_o),i.complete===void 0&&(i.complete=_o);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _o(){}/**
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
 */function ot(n){return n&&n._delegate?n._delegate:n}class yn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dn="[DEFAULT]";/**
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
 */class Pp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Np(e))try{this.getOrInitializeService({instanceIdentifier:dn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dn){return this.instances.has(e)}getOptions(e=dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dn){return this.component?this.component.multipleInstances?e:dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kp(n){return n===dn?void 0:n}function Np(n){return n.instantiationMode==="EAGER"}/**
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
 */class Dp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Lp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Vp=ne.INFO,Op={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Mp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Op[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=Vp,this._logHandler=Mp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Fp=(n,e)=>e.some(t=>n instanceof t);let Ec,Tc;function xp(){return Ec||(Ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Up(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,Oo=new WeakMap,oh=new WeakMap,vo=new WeakMap,_a=new WeakMap;function $p(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Kt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sh.set(t,n)}).catch(()=>{}),_a.set(e,n),e}function Bp(n){if(Oo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Oo.set(n,e)}let Mo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function jp(n){Mo=n(Mo)}function qp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yo(this),e,...t);return oh.set(r,e.sort?e.sort():[e]),Kt(r)}:Up().includes(n)?function(...e){return n.apply(yo(this),e),Kt(sh.get(this))}:function(...e){return Kt(n.apply(yo(this),e))}}function zp(n){return typeof n=="function"?qp(n):(n instanceof IDBTransaction&&Bp(n),Fp(n,xp())?new Proxy(n,Mo):n)}function Kt(n){if(n instanceof IDBRequest)return $p(n);if(vo.has(n))return vo.get(n);const e=zp(n);return e!==n&&(vo.set(n,e),_a.set(e,n)),e}const yo=n=>_a.get(n);function Gp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Kt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Kt(a.result),u.oldVersion,u.newVersion,Kt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Hp=["get","getKey","getAll","getAllKeys","count"],Kp=["put","add","delete","clear"],Eo=new Map;function Ic(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Eo.get(e))return Eo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Kp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hp.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return Eo.set(e,s),s}jp(n=>({...n,get:(e,t,r)=>Ic(e,t)||n.get(e,t,r),has:(e,t)=>!!Ic(e,t)||n.has(e,t)}));/**
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
 */class Wp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fo="@firebase/app",wc="0.10.13";/**
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
 */const Pt=new ma("@firebase/app"),Yp="@firebase/app-compat",Xp="@firebase/analytics-compat",Jp="@firebase/analytics",Zp="@firebase/app-check-compat",eg="@firebase/app-check",tg="@firebase/auth",ng="@firebase/auth-compat",rg="@firebase/database",ig="@firebase/data-connect",sg="@firebase/database-compat",og="@firebase/functions",ag="@firebase/functions-compat",lg="@firebase/installations",cg="@firebase/installations-compat",ug="@firebase/messaging",hg="@firebase/messaging-compat",dg="@firebase/performance",fg="@firebase/performance-compat",pg="@firebase/remote-config",gg="@firebase/remote-config-compat",mg="@firebase/storage",_g="@firebase/storage-compat",vg="@firebase/firestore",yg="@firebase/vertexai-preview",Eg="@firebase/firestore-compat",Tg="firebase",Ig="10.14.1";/**
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
 */const xo="[DEFAULT]",wg={[Fo]:"fire-core",[Yp]:"fire-core-compat",[Jp]:"fire-analytics",[Xp]:"fire-analytics-compat",[eg]:"fire-app-check",[Zp]:"fire-app-check-compat",[tg]:"fire-auth",[ng]:"fire-auth-compat",[rg]:"fire-rtdb",[ig]:"fire-data-connect",[sg]:"fire-rtdb-compat",[og]:"fire-fn",[ag]:"fire-fn-compat",[lg]:"fire-iid",[cg]:"fire-iid-compat",[ug]:"fire-fcm",[hg]:"fire-fcm-compat",[dg]:"fire-perf",[fg]:"fire-perf-compat",[pg]:"fire-rc",[gg]:"fire-rc-compat",[mg]:"fire-gcs",[_g]:"fire-gcs-compat",[vg]:"fire-fst",[Eg]:"fire-fst-compat",[yg]:"fire-vertex","fire-js":"fire-js",[Tg]:"fire-js-all"};/**
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
 */const as=new Map,Ag=new Map,Uo=new Map;function Ac(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wn(n){const e=n.name;if(Uo.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,n);for(const t of as.values())Ac(t,n);for(const t of Ag.values())Ac(t,n);return!0}function va(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rt(n){return n.settings!==void 0}/**
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
 */const bg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new ni("app","Firebase",bg);/**
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
 */class Sg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=Ig;function Cg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=rh()),!t)throw Wt.create("no-options");const s=as.get(i);if(s){if(os(t,s.options)&&os(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const a=new Dp(i);for(const u of Uo.values())a.addComponent(u);const l=new Sg(t,r,a);return as.set(i,l),l}function ah(n=xo){const e=as.get(n);if(!e&&n===xo&&rh())return Cg();if(!e)throw Wt.create("no-app",{appName:n});return e}function Qt(n,e,t){var r;let i=(r=wg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(l.join(" "));return}Wn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rg="firebase-heartbeat-database",Pg=1,jr="firebase-heartbeat-store";let To=null;function lh(){return To||(To=Gp(Rg,Pg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),To}async function kg(n){try{const t=(await lh()).transaction(jr),r=await t.objectStore(jr).get(ch(n));return await t.done,r}catch(e){if(e instanceof Lt)Pt.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function bc(n,e){try{const r=(await lh()).transaction(jr,"readwrite");await r.objectStore(jr).put(e,ch(n)),await r.done}catch(t){if(t instanceof Lt)Pt.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(r.message)}}}function ch(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ng=1024,Dg=30*24*60*60*1e3;class Lg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Og(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Dg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sc(),{heartbeatsToSend:r,unsentEntries:i}=Vg(this._heartbeatsCache.heartbeats),s=ss(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Pt.warn(t),""}}}function Sc(){return new Date().toISOString().substring(0,10)}function Vg(n,e=Ng){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Cc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Cc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ep()?Tp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return bc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return bc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cc(n){return ss(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Mg(n){Wn(new yn("platform-logger",e=>new Wp(e),"PRIVATE")),Wn(new yn("heartbeat",e=>new Lg(e),"PRIVATE")),Qt(Fo,wc,n),Qt(Fo,wc,"esm2017"),Qt("fire-js","")}Mg("");function ya(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function uh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fg=uh,hh=new ni("auth","Firebase",uh());/**
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
 */const ls=new ma("@firebase/auth");function xg(n,...e){ls.logLevel<=ne.WARN&&ls.warn(`Auth (${sr}): ${n}`,...e)}function Hi(n,...e){ls.logLevel<=ne.ERROR&&ls.error(`Auth (${sr}): ${n}`,...e)}/**
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
 */function Je(n,...e){throw Ta(n,...e)}function st(n,...e){return Ta(n,...e)}function Ea(n,e,t){const r=Object.assign(Object.assign({},Fg()),{[e]:t});return new ni("auth","Firebase",r).create(e,{appName:n.name})}function Ct(n){return Ea(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ug(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(n,"argument-error"),Ea(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return hh.create(n,...e)}function W(n,e,...t){if(!n)throw Ta(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Hi(e),new Error(e)}function kt(n,e){n||It(e)}/**
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
 */function $o(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $g(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($g()||mp()||"connection"in navigator)?navigator.onLine:!0}function jg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ii{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=fp()||_p()}get(){return Bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ia(n,e){kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zg=new ii(3e4,6e4);function nn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vt(n,e,t,r,i={}){return fh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=ri(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},s);return gp()||(d.referrerPolicy="no-referrer"),dh.fetch()(ph(n,n.config.apiHost,t,l),d)})}async function fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qg),e);try{const i=new Hg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Fi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Fi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Fi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ea(n,f,d);Je(n,f)}}catch(i){if(i instanceof Lt)throw i;Je(n,"network-request-failed",{message:String(i)})}}async function si(n,e,t,r,i={}){const s=await Vt(n,e,t,r,i);return"mfaPendingCredential"in s&&Je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ph(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ia(n.config,i):`${n.config.apiScheme}://${i}`}function Gg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(st(this.auth,"network-request-failed")),zg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=st(n,e,r);return i.customData._tokenResponse=t,i}function Pc(n){return n!==void 0&&n.enterprise!==void 0}class Kg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Wg(n,e){return Vt(n,"GET","/v2/recaptchaConfig",nn(n,e))}/**
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
 */async function Qg(n,e){return Vt(n,"POST","/v1/accounts:delete",e)}async function gh(n,e){return Vt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yg(n,e=!1){const t=ot(n),r=await t.getIdToken(e),i=wa(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Or(Io(i.auth_time)),issuedAtTime:Or(Io(i.iat)),expirationTime:Or(Io(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Io(n){return Number(n)*1e3}function wa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=th(t);return i?JSON.parse(i):(Hi("Failed to decode base64 JWT payload"),null)}catch(i){return Hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(n){const e=wa(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Lt&&Xg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Qn(n,gh(t,{idToken:r}));W(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mh(s.providerUserInfo):[],l=em(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Bo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,y)}async function Zg(n){const e=ot(n);await cs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function em(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mh(n){return n.map(e=>{var{providerId:t}=e,r=ya(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tm(n,e){const t=await fh(n,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=ph(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",dh.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function nm(n,e){return Vt(n,"POST","/v2/accounts:revokeToken",nn(n,e))}/**
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
 */class $n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=kc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await tm(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new $n;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $n,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Ut(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ya(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Qn(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yg(this,e)}reload(){return Zg(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await Qn(this,Qg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,d,f;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,R=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,N=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:L,isAnonymous:M,providerData:V,stsTokenManager:_}=t;W(k&&_,e,"internal-error");const g=$n.fromJSON(this.name,_);W(typeof k=="string",e,"internal-error"),Ut(y,e.name),Ut(I,e.name),W(typeof L=="boolean",e,"internal-error"),W(typeof M=="boolean",e,"internal-error"),Ut(A,e.name),Ut(b,e.name),Ut(C,e.name),Ut(R,e.name),Ut(D,e.name),Ut(N,e.name);const v=new wt({uid:k,auth:e,email:I,emailVerified:L,displayName:y,isAnonymous:M,photoURL:b,phoneNumber:A,tenantId:C,stsTokenManager:g,createdAt:D,lastLoginAt:N});return V&&Array.isArray(V)&&(v.providerData=V.map(T=>Object.assign({},T))),R&&(v._redirectEventId=R),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new $n;i.updateFromServerResponse(t);const s=new wt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cs(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $n;l.updateFromIdToken(r);const u=new wt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Bo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const Nc=new Map;function At(n){kt(n instanceof Function,"Expected a class definition");let e=Nc.get(n);return e?(kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nc.set(n,e),e)}/**
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
 */class _h{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_h.type="NONE";const Dc=_h;/**
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
 */function Ki(n,e,t){return`firebase:${n}:${e}:${t}`}class Bn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ki("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bn(At(Dc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||At(Dc);const a=Ki(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const y=wt._fromJSON(e,f);d!==s&&(l=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Bn(s,e,r))}}/**
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
 */function Lc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ah(e))return"Webos";if(yh(e))return"Safari";if((e.includes("chrome/")||Eh(e))&&!e.includes("edge/"))return"Chrome";if(Ih(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vh(n=Be()){return/firefox\//i.test(n)}function yh(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eh(n=Be()){return/crios\//i.test(n)}function Th(n=Be()){return/iemobile/i.test(n)}function Ih(n=Be()){return/android/i.test(n)}function wh(n=Be()){return/blackberry/i.test(n)}function Ah(n=Be()){return/webos/i.test(n)}function Aa(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rm(n=Be()){var e;return Aa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function im(){return vp()&&document.documentMode===10}function bh(n=Be()){return Aa(n)||Ih(n)||Ah(n)||wh(n)||/windows phone/i.test(n)||Th(n)}/**
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
 */function Sh(n,e=[]){let t;switch(n){case"Browser":t=Lc(Be());break;case"Worker":t=`${Lc(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sr}/${r}`}/**
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
 */class sm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function om(n,e={}){return Vt(n,"GET","/v2/passwordPolicy",nn(n,e))}/**
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
 */const am=6;class lm{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:am,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class cm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vc(this),this.idTokenSubscription=new Vc(this),this.beforeStateQueue=new sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gh(this,{idToken:e}),r=await wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await cs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(Ct(this));const t=e?ot(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await om(this),t=new lm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await nm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function rn(n){return ot(n)}class Vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sp(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let As={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function um(n){As=n}function Ch(n){return As.loadJS(n)}function hm(){return As.recaptchaEnterpriseScript}function dm(){return As.gapiScript}function fm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const pm="recaptcha-enterprise",gm="NO_RECAPTCHA";class mm{constructor(e){this.type=pm,this.auth=rn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Wg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Kg(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Pc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(gm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Pc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hm();u.length!==0&&(u+=l),Ch(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Oc(n,e,t,r=!1){const i=new mm(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function jo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Oc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Oc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function _m(n,e){const t=va(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(os(s,e??{}))return i;Je(i,"already-initialized")}return t.initialize({options:e})}function vm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ym(n,e,t){const r=rn(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Rh(e),{host:a,port:l}=Em(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Tm()}function Rh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Em(n){const e=Rh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Mc(a)}}}function Mc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Tm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function Im(n,e){return Vt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wm(n,e){return si(n,"POST","/v1/accounts:signInWithPassword",nn(n,e))}/**
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
 */async function Am(n,e){return si(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}async function bm(n,e){return si(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}/**
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
 */class qr extends ba{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jo(e,t,"signInWithPassword",wm);case"emailLink":return Am(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jo(e,r,"signUpPassword",Im);case"emailLink":return bm(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(n,e){return si(n,"POST","/v1/accounts:signInWithIdp",nn(n,e))}/**
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
 */const Sm="http://localhost";class En extends ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new En(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ya(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new En(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:Sm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ri(t)}return e}}/**
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
 */function Cm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rm(n){const e=kr(Nr(n)).link,t=e?kr(Nr(e)).deep_link_id:null,r=kr(Nr(n)).deep_link_id;return(r?kr(Nr(r)).link:null)||r||t||e||n}class Sa{constructor(e){var t,r,i,s,a,l;const u=kr(Nr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=Cm((i=u.mode)!==null&&i!==void 0?i:null);W(d&&f&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Rm(e);try{return new Sa(t)}catch{return null}}}/**
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
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,t){return qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Sa.parseLink(t);return W(r,"argument-error"),qr._fromEmailAndCode(e,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oi extends Ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends oi{constructor(){super("facebook.com")}static credential(e){return En._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return En._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class jt extends oi{constructor(){super("github.com")}static credential(e){return En._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class qt extends oi{constructor(){super("twitter.com")}static credential(e,t){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */async function Pm(n,e){return si(n,"POST","/v1/accounts:signUp",nn(n,e))}/**
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
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await wt._fromIdTokenResponse(e,r,i),a=Fc(r);return new Tn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Fc(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class us extends Lt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,us.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new us(e,t,r,i)}}function Ph(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?us._fromErrorAndOperation(n,s,e,r):s})}async function km(n,e,t=!1){const r=await Qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Tn._forOperation(n,"link",r)}/**
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
 */async function Nm(n,e,t=!1){const{auth:r}=n;if(rt(r.app))return Promise.reject(Ct(r));const i="reauthenticate";try{const s=await Qn(n,Ph(r,i,e,n),t);W(s.idToken,r,"internal-error");const a=wa(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),Tn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),s}}/**
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
 */async function kh(n,e,t=!1){if(rt(n.app))return Promise.reject(Ct(n));const r="signIn",i=await Ph(n,r,e),s=await Tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Dm(n,e){return kh(rn(n),e)}/**
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
 */async function Nh(n){const e=rn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YI(n,e,t){if(rt(n.app))return Promise.reject(Ct(n));const r=rn(n),a=await jo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pm).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Nh(n),u}),l=await Tn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function XI(n,e,t){return rt(n.app)?Promise.reject(Ct(n)):Dm(ot(n),or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Nh(n),r})}/**
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
 */async function Lm(n,e){return Vt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function JI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ot(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Qn(r,Lm(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Vm(n,e,t,r){return ot(n).onIdTokenChanged(e,t,r)}function Om(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}function ZI(n,e,t,r){return ot(n).onAuthStateChanged(e,t,r)}function ew(n){return ot(n).signOut()}const hs="__sak";/**
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
 */class Dh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mm=1e3,Fm=10;class Lh extends Dh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);im()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lh.type="LOCAL";const xm=Lh;/**
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
 */class Vh extends Dh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vh.type="SESSION";const Oh=Vh;/**
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
 */function Um(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,s)),u=await Um(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bs.receivers=[];/**
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
 */function Ra(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $m{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Ra("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(I.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ut(){return window}function Bm(n){ut().location.href=n}/**
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
 */function Mh(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function jm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zm(){return Mh()?self:null}/**
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
 */const Fh="firebaseLocalStorageDb",Gm=1,ds="firebaseLocalStorage",xh="fbase_key";class ai{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ss(n,e){return n.transaction([ds],e?"readwrite":"readonly").objectStore(ds)}function Hm(){const n=indexedDB.deleteDatabase(Fh);return new ai(n).toPromise()}function qo(){const n=indexedDB.open(Fh,Gm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ds,{keyPath:xh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ds)?e(r):(r.close(),await Hm(),e(await qo()))})})}async function xc(n,e,t){const r=Ss(n,!0).put({[xh]:e,value:t});return new ai(r).toPromise()}async function Km(n,e){const t=Ss(n,!1).get(e),r=await new ai(t).toPromise();return r===void 0?null:r.value}function Uc(n,e){const t=Ss(n,!0).delete(e);return new ai(t).toPromise()}const Wm=800,Qm=3;class Uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bs._getInstance(zm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jm(),!this.activeServiceWorker)return;this.sender=new $m(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await xc(e,hs,"1"),await Uc(e,hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Km(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ss(i,!1).getAll();return new ai(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uh.type="LOCAL";const Ym=Uh;new ii(3e4,6e4);/**
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
 */function $h(n,e){return e?At(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Pa extends ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xm(n){return kh(n.auth,new Pa(n),n.bypassAuthState)}function Jm(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Nm(t,new Pa(n),n.bypassAuthState)}async function Zm(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),km(t,new Pa(n),n.bypassAuthState)}/**
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
 */class Bh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xm;case"linkViaPopup":case"linkViaRedirect":return Zm;case"reauthViaPopup":case"reauthViaRedirect":return Jm;default:Je(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const e_=new ii(2e3,1e4);async function tw(n,e,t){if(rt(n.app))return Promise.reject(st(n,"operation-not-supported-in-this-environment"));const r=rn(n);Ug(n,e,Ca);const i=$h(r,t);return new fn(r,"signInViaPopup",e,i).executeNotNull()}class fn extends Bh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=Ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e_.get())};e()}}fn.currentPopupAction=null;/**
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
 */const t_="pendingRedirect",Wi=new Map;class n_ extends Bh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const r=await r_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r_(n,e){const t=o_(e),r=s_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function i_(n,e){Wi.set(n._key(),e)}function s_(n){return At(n._redirectPersistence)}function o_(n){return Ki(t_,n.config.apiKey,n.name)}async function a_(n,e,t=!1){if(rt(n.app))return Promise.reject(Ct(n));const r=rn(n),i=$h(r,e),a=await new n_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const l_=10*60*1e3;class c_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(st(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has($c(e))}saveEventToCache(e){this.cachedEventUids.add($c(e)),this.lastProcessedEventTime=Date.now()}}function $c(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jh(n);default:return!1}}/**
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
 */async function h_(n,e={}){return Vt(n,"GET","/v1/projects",e)}/**
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
 */const d_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f_=/^https?/;async function p_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await h_(n);for(const t of e)try{if(g_(t))return}catch{}Je(n,"unauthorized-domain")}function g_(n){const e=$o(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!f_.test(t))return!1;if(d_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const m_=new ii(3e4,6e4);function Bc(){const n=ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function __(n){return new Promise((e,t)=>{var r,i,s;function a(){Bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bc(),t(st(n,"network-request-failed"))},timeout:m_.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)a();else{const l=fm("iframefcb");return ut()[l]=()=>{gapi.load?a():t(st(n,"network-request-failed"))},Ch(`${dm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function v_(n){return Qi=Qi||__(n),Qi}/**
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
 */const y_=new ii(5e3,15e3),E_="__/auth/iframe",T_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A_(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ia(e,T_):`https://${n.config.authDomain}/${E_}`,r={apiKey:e.apiKey,appName:n.name,v:sr},i=w_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ri(r).slice(1)}`}async function b_(n){const e=await v_(n),t=ut().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:A_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=st(n,"network-request-failed"),l=ut().setTimeout(()=>{s(a)},y_.get());function u(){ut().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const S_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C_=500,R_=600,P_="_blank",k_="http://localhost";class jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N_(n,e,t,r=C_,i=R_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},S_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Be().toLowerCase();t&&(l=Eh(d)?P_:t),vh(d)&&(e=e||k_,u.scrollbars="yes");const f=Object.entries(u).reduce((I,[A,b])=>`${I}${A}=${b},`,"");if(rm(d)&&l!=="_self")return D_(e||"",l),new jc(null);const y=window.open(e||"",l,f);W(y,n,"popup-blocked");try{y.focus()}catch{}return new jc(y)}function D_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const L_="__/auth/handler",V_="emulator/auth/handler",O_=encodeURIComponent("fac");async function qc(n,e,t,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sr,eventId:i};if(e instanceof Ca){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",bp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof oi){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),d=u?`#${O_}=${encodeURIComponent(u)}`:"";return`${M_(n)}?${ri(l).slice(1)}${d}`}function M_({config:n}){return n.emulator?Ia(n,V_):`https://${n.authDomain}/${L_}`}/**
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
 */const wo="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oh,this._completeRedirectFn=a_,this._overrideRedirectResult=i_}async _openPopup(e,t,r,i){var s;kt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await qc(e,t,r,$o(),i);return N_(e,a,Ra())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await qc(e,t,r,$o(),i);return Bm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(kt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await b_(e),r=new c_(e);return t.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wo,{type:wo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wo];a!==void 0&&t(!!a),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=p_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bh()||yh()||Aa()}}const x_=F_;var zc="@firebase/auth",Gc="1.7.9";/**
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
 */class U_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B_(n){Wn(new yn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sh(n)},d=new cm(r,i,s,u);return vm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new yn("auth-internal",e=>{const t=rn(e.getProvider("auth").getImmediate());return(r=>new U_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(zc,Gc,$_(n)),Qt(zc,Gc,"esm2017")}/**
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
 */const j_=5*60,q_=ih("authIdTokenMaxAge")||j_;let Hc=null;const z_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>q_)return;const i=t==null?void 0:t.token;Hc!==i&&(Hc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nw(n=ah()){const e=va(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_m(n,{popupRedirectResolver:x_,persistence:[Ym,xm,Oh]}),r=ih("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=z_(s.toString());Om(t,a,()=>a(t.currentUser)),Vm(t,l=>a(l))}}const i=nh("auth");return i&&ym(t,`http://${i}`),t}function G_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}um({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=st("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",G_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B_("Browser");var H_="firebase",K_="10.14.1";/**
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
 */Qt(H_,K_,"app");var W_=Object.defineProperty,Q_=(n,e,t)=>e in n?W_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ue=(n,e,t)=>(Q_(n,typeof e!="symbol"?e+"":e,t),t);const Y_=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,X_=/^-?[0-9]\d*$/,J_=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,Z_=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,ev=n=>{let e=n;return typeof n=="string"&&(e=n.trim()),!e},tv=n=>Y_.test(n),nv=(n,e)=>n.length>e,rv=(n,e)=>n.length<e,iv=n=>typeof n!="string"?!1:!isNaN(+n)&&!isNaN(parseFloat(n)),sv=n=>X_.test(n),ov=n=>J_.test(n),av=n=>Z_.test(n),lv=(n,e)=>n>e,cv=(n,e)=>n<e,yt=n=>typeof n!="string"||n==="";var te=(n=>(n.Required="required",n.Email="email",n.MinLength="minLength",n.MaxLength="maxLength",n.Password="password",n.Number="number",n.Integer="integer",n.MaxNumber="maxNumber",n.MinNumber="minNumber",n.StrongPassword="strongPassword",n.CustomRegexp="customRegexp",n.MinFilesCount="minFilesCount",n.MaxFilesCount="maxFilesCount",n.Files="files",n))(te||{}),zo=(n=>(n.Required="required",n))(zo||{}),qh=(n=>(n.Label="label",n.LabelArrow="labelArrow",n))(qh||{});const Kc=[{key:te.Required,dict:{en:"The field is required"}},{key:te.Email,dict:{en:"Email has invalid format"}},{key:te.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:te.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:te.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:te.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:te.Number,dict:{en:"Value should be a number"}},{key:te.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:te.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:te.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:te.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:te.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],uv="Value is incorrect",Cr=n=>typeof n=="object"&&n!==null&&"then"in n&&typeof n.then=="function",hv=n=>{let e=n;const t=[];for(;e;)t.unshift(e),e=e.parentNode;return t},dv=(n,e)=>{const t=[...e].reverse();for(let r=0,i=t.length;r<i;++r){const s=t[r];for(const a in n){const l=n[a];if(l.groupElem===s)return[a,l]}}return null},lt=n=>Array.isArray(n)?n.filter(e=>e.length>0):typeof n=="string"&&n.trim()?[...n.split(" ").filter(e=>e.length>0)]:[],Rr=n=>n instanceof Element||n instanceof HTMLDocument,fv=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",xi=5,Ao={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class rw{constructor(e,t,r){ue(this,"form",null),ue(this,"fields",{}),ue(this,"groupFields",{}),ue(this,"errors",{}),ue(this,"isValid",!1),ue(this,"isSubmitted",!1),ue(this,"globalConfig",Ao),ue(this,"errorLabels",{}),ue(this,"successLabels",{}),ue(this,"eventListeners",[]),ue(this,"dictLocale",Kc),ue(this,"currentLocale","en"),ue(this,"customStyleTags",{}),ue(this,"onSuccessCallback"),ue(this,"onFailCallback"),ue(this,"onValidateCallback"),ue(this,"tooltips",[]),ue(this,"lastScrollPosition"),ue(this,"isScrollTick"),ue(this,"fieldIds",new Map),ue(this,"getKeyByFieldSelector",i=>this.fieldIds.get(i)),ue(this,"getFieldSelectorByKey",i=>{for(const[s,a]of this.fieldIds)if(i===a)return s}),ue(this,"getCompatibleFields",()=>{const i={};return Object.keys(this.fields).forEach(s=>{let a=s;const l=this.getFieldSelectorByKey(s);typeof l=="string"&&(a=l),i[a]={...this.fields[s]}}),i}),ue(this,"setKeyByFieldSelector",i=>{if(this.fieldIds.has(i))return this.fieldIds.get(i);const s=String(this.fieldIds.size+1);return this.fieldIds.set(i,s),s}),ue(this,"refreshAllTooltips",()=>{this.tooltips.forEach(i=>{i.refresh()})}),ue(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),ue(this,"formSubmitHandler",i=>{i.preventDefault(),this.isSubmitted=!0,this.validateHandler(i)}),ue(this,"handleFieldChange",i=>{let s;for(const a in this.fields)if(this.fields[a].elem===i){s=a;break}s&&(this.fields[s].touched=!0,this.validateField(s,!0))}),ue(this,"handleGroupChange",i=>{let s;for(const a in this.groupFields)if(this.groupFields[a].elems.find(u=>u===i)){s=a;break}s&&(this.groupFields[s].touched=!0,this.validateGroup(s,!0))}),ue(this,"handlerChange",i=>{i.target&&(this.handleFieldChange(i.target),this.handleGroupChange(i.target),this.renderErrors())}),this.initialize(e,t,r)}initialize(e,t,r){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=Ao,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const i=document.querySelector(e);if(!i)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(i)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...Ao,...t},r&&(this.dictLocale=[...r,...Kc]),this.isTooltip()){const i=document.createElement("style");i.textContent=fv,this.customStyleTags[qh.Label]=document.head.appendChild(i),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,r){var i;const s=r??e;let a=(i=this.dictLocale.find(l=>l.key===s))==null?void 0:i.dict[this.currentLocale];if(a||r&&(a=r),a&&t!==void 0)switch(e){case te.MaxLength:case te.MinLength:case te.MaxNumber:case te.MinNumber:case te.MinFilesCount:case te.MaxFilesCount:a=a.replace(":value",String(t))}return a||r||uv}getFieldErrorMessage(e,t){const r=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,r)}getFieldSuccessMessage(e,t){const r=typeof e=="function"?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,r)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,t!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,r){switch(r.rule){case zo.Required:t.every(i=>!i.checked)?this.setGroupInvalid(e,r):this.setGroupValid(e,r)}}validateFieldRule(e,t,r,i=!1){const s=r.value,a=this.getElemValue(t);if(r.plugin){r.plugin(a,this.getCompatibleFields())||this.setFieldInvalid(e,r);return}switch(r.rule){case te.Required:{ev(a)&&this.setFieldInvalid(e,r);break}case te.Email:{if(yt(a))break;tv(a)||this.setFieldInvalid(e,r);break}case te.MaxLength:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(yt(a))break;nv(a,s)&&this.setFieldInvalid(e,r);break}case te.MinLength:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(yt(a))break;rv(a,s)&&this.setFieldInvalid(e,r);break}case te.Password:{if(yt(a))break;ov(a)||this.setFieldInvalid(e,r);break}case te.StrongPassword:{if(yt(a))break;av(a)||this.setFieldInvalid(e,r);break}case te.Number:{if(yt(a))break;iv(a)||this.setFieldInvalid(e,r);break}case te.Integer:{if(yt(a))break;sv(a)||this.setFieldInvalid(e,r);break}case te.MaxNumber:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(yt(a))break;const l=+a;(Number.isNaN(l)||lv(l,s))&&this.setFieldInvalid(e,r);break}case te.MinNumber:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(yt(a))break;const l=+a;(Number.isNaN(l)||cv(l,s))&&this.setFieldInvalid(e,r);break}case te.CustomRegexp:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);return}let l;try{l=new RegExp(s)}catch{console.error(`Value for ${r.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,r);break}const u=String(a);u!==""&&!l.test(u)&&this.setFieldInvalid(e,r);break}case te.MinFilesCount:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length<s){this.setFieldInvalid(e,r);break}break}case te.MaxFilesCount:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);break}if(typeof s!="number"){console.error(`Value for ${r.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,r);break}if(Number.isFinite(a==null?void 0:a.length)&&a.length>s){this.setFieldInvalid(e,r);break}break}case te.Files:{if(s===void 0){console.error(`Value for ${r.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,r);return}if(typeof s!="object"){console.error(`Value for ${r.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const l=s.files;if(typeof l!="object"){console.error(`Value for ${r.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const u=(d,f)=>{const y=Number.isFinite(f.minSize)&&d.size<f.minSize,I=Number.isFinite(f.maxSize)&&d.size>f.maxSize,A=Array.isArray(f.names)&&!f.names.includes(d.name),b=Array.isArray(f.extensions)&&!f.extensions.includes(d.name.split(".")[d.name.split(".").length-1]),C=Array.isArray(f.types)&&!f.types.includes(d.type);return y||I||A||b||C};if(typeof a=="object"&&a!==null)for(let d=0,f=a.length;d<f;++d){const y=a.item(d);if(!y){this.setFieldInvalid(e,r);break}if(u(y,l)){this.setFieldInvalid(e,r);break}}break}default:{if(typeof r.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,r);return}const l=r.validator(a,this.getCompatibleFields());if(typeof l!="boolean"&&typeof l!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof l=="function")if(i)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const u=l();if(!Cr(u)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,r);return}return u.then(d=>{d||this.setFieldInvalid(e,r)}).catch(()=>{this.setFieldInvalid(e,r)})}l||this.setFieldInvalid(e,r)}}}isFormValid(){let e=!0;for(let t=0,r=Object.values(this.fields).length;t<r;++t){const i=Object.values(this.fields)[t];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}for(let t=0,r=Object.values(this.groupFields).length;t<r;++t){const i=Object.values(this.groupFields)[t];if(i.isValid===void 0){e=void 0;break}if(i.isValid===!1){e=!1;break}}return e}validateField(e,t=!1){var r;const i=this.fields[e];i.isValid=!0;const s=[];return[...i.rules].reverse().forEach(a=>{const l=this.validateFieldRule(e,i.elem,a,t);Cr(l)&&s.push(l)}),i.isValid&&this.setFieldValid(e,(r=i.config)==null?void 0:r.successMessage),Promise.allSettled(s).finally(()=>{var a;t&&((a=this.onValidateCallback)==null||a.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!Rr(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.fields[t]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(r=>{this.validateField(t,!0).finally(()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t,!0),r(!!this.fields[t].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!Rr(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(r=>{this.validateGroup(t).finally(()=>{this.clearFieldLabel(t),this.renderGroupError(t,!0),r(!!this.groupFields[t].isValid)})})}validateGroup(e,t=!1){const r=this.groupFields[e],i=[];return[...r.rules].reverse().forEach(s=>{const a=this.validateGroupRule(e,r.elems,s);Cr(a)&&i.push(a)}),Promise.allSettled(i).finally(()=>{var s;t&&((s=this.onValidateCallback)==null||s.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout(()=>t.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(t=>{const r=[];Object.keys(this.fields).forEach(i=>{const s=this.validateField(i);Cr(s)&&r.push(s)}),Object.keys(this.groupFields).forEach(i=>{const s=this.validateGroup(i);Cr(s)&&r.push(s)}),Promise.allSettled(r).then(()=>{var i;this.afterSubmitValidation(e),(i=this.onValidateCallback)==null||i.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),t(!!r.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally(()=>{var r,i,s;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((r=this.onSuccessCallback)==null||r.call(this,e),this.globalConfig.submitFormAutomatically&&((i=e==null?void 0:e.currentTarget)==null||i.submit())):(s=this.onFailCallback)==null||s.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,r){t.addEventListener(e,r),this.eventListeners.push({type:e,elem:t,func:r})}removeListener(e,t,r){t.removeEventListener(e,r),this.eventListeners=this.eventListeners.filter(i=>i.type!==e||i.elem!==t)}addField(e,t,r){if(typeof e!="string"&&!Rr(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let i;if(typeof e=="string"?i=this.form.querySelector(e):i=e,!i)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach(a=>{if(!("rule"in a||"validator"in a||"plugin"in a))throw Error("Rules argument must contain at least one rule or validator property.");if(!a.validator&&!a.plugin&&(!a.rule||!Object.values(te).includes(a.rule)))throw Error(`Rule should be one of these types: ${Object.values(te).join(", ")}. Provided value: ${a.rule}`)});const s=this.setKeyByFieldSelector(e);return this.fields[s]={elem:i,rules:t,isValid:void 0,touched:!1,config:r},this.setListeners(i),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(s),this}removeField(e){if(typeof e!="string"&&!Rr(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const r=this.getListenerType(this.fields[t].elem.type);return this.removeListener(r,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[t].elems.forEach(r=>{const i=this.getListenerType(r.type);this.removeListener(i,r,this.handlerChange)}),this.clearErrors(),delete this.groupFields[t],this)}addRequiredGroup(e,t,r,i){if(typeof e!="string"&&!Rr(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(typeof e=="string"?s=this.form.querySelector(e):s=e,!s)throw Error("Group selector not found! Please check the group selector.");const a=s.querySelectorAll("input"),l=Array.from(a).filter(d=>{const f=dv(this.groupFields,hv(d));return f?f[1].elems.find(y=>y!==d):!0}),u=this.setKeyByFieldSelector(e);return this.groupFields[u]={rules:[{rule:zo.Required,errorMessage:t,successMessage:i}],groupElem:s,elems:l,touched:!1,isValid:void 0,config:r},a.forEach(d=>{this.setListeners(d)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,r;(t=this.errorLabels[e])==null||t.remove(),(r=this.successLabels[e])==null||r.remove()}clearFieldStyle(e){var t,r,i,s;const a=this.fields[e],l=((t=a.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(l).forEach(d=>{a.elem.style[d]=""});const u=((r=a.config)==null?void 0:r.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(u).forEach(d=>{a.elem.style[d]=""}),a.elem.classList.remove(...lt(((i=a.config)==null?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...lt(((s=a.config)==null?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach(r=>this.errorLabels[r].remove()),Object.keys(this.successLabels).forEach(r=>this.successLabels[r].remove());for(const r in this.fields)this.clearFieldStyle(r);for(const r in this.groupFields){const i=this.groupFields[r],s=((e=i.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(s).forEach(l=>{i.elems.forEach(u=>{var d;u.style[l]="",u.classList.remove(...lt(((d=i.config)==null?void 0:d.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const a=((t=i.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach(l=>{i.elems.forEach(u=>{var d;u.style[l]="",u.classList.remove(...lt(((d=i.config)==null?void 0:d.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,r=e.length;t<r;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,r=e.length;t<r;++t)e[t].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,r){var i;const{top:s,left:a,width:l,height:u}=e.getBoundingClientRect(),d=t.getBoundingClientRect(),f=r||((i=this.globalConfig.tooltip)==null?void 0:i.position);switch(f){case"left":{t.style.top=`${s+u/2-d.height/2}px`,t.style.left=`${a-d.width-xi}px`;break}case"top":{t.style.top=`${s-d.height-xi}px`,t.style.left=`${a+l/2-d.width/2}px`;break}case"right":{t.style.top=`${s+u/2-d.height/2}px`,t.style.left=`${a+l+xi}px`;break}case"bottom":{t.style.top=`${s+u+xi}px`,t.style.left=`${a+l/2-d.width/2}px`;break}}return t.dataset.direction=f,{refresh:()=>{this.renderTooltip(e,t,r)}}}createErrorLabelElem(e,t,r){const i=document.createElement("div");i.innerHTML=t;const s=this.isTooltip()?r==null?void 0:r.errorLabelStyle:(r==null?void 0:r.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(i.style,s),i.classList.add(...lt((r==null?void 0:r.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(i.dataset.tooltip="true"),this.globalConfig.testingMode&&(i.dataset.testId=`error-label-${e}`),this.errorLabels[e]=i,i}createSuccessLabelElem(e,t,r){if(t===void 0)return null;const i=document.createElement("div");i.innerHTML=t;const s=(r==null?void 0:r.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(i.style,s),i.classList.add(...lt((r==null?void 0:r.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(i.dataset.testId=`success-label-${e}`),this.successLabels[e]=i,i}renderErrorsContainer(e,t){const r=t||this.globalConfig.errorsContainer;if(typeof r=="string"){const i=this.form.querySelector(r);if(i)return i.appendChild(e),!0;console.error(`Error container with ${r} selector not found. Errors will be rendered as usual`)}return r instanceof Element?(r.appendChild(e),!0):(r!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,r,i){!i&&this.renderErrorsContainer(t,r)||e.appendChild(t)}renderFieldLabel(e,t,r,i){var s,a,l,u,d,f,y;if(!(!i&&this.renderErrorsContainer(t,r)))if(e.type==="checkbox"||e.type==="radio"){const I=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((a=(s=e.parentElement)==null?void 0:s.tagName)==null?void 0:a.toLowerCase())==="label"?(u=(l=e.parentElement)==null?void 0:l.parentElement)==null||u.appendChild(t):I?(d=I.parentElement)==null||d.appendChild(t):(f=e.parentElement)==null||f.appendChild(t)}else(y=e.parentElement)==null||y.appendChild(t)}showLabels(e,t){Object.keys(e).forEach((r,i)=>{const s=e[r],a=this.getKeyByFieldSelector(r);if(!a||!this.fields[a]){console.error("Field not found. Check the field selector.");return}const l=this.fields[a];l.isValid=!t,this.clearFieldStyle(a),this.clearFieldLabel(a),this.renderFieldError(a,!1,s),i===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>l.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t=!1,r){var i,s,a,l,u,d;const f=this.fields[e];if(f.isValid===!1&&(this.isValid=!1),f.isValid===void 0||!t&&!this.isSubmitted&&!f.touched&&r===void 0)return;if(f.isValid){if(!f.asyncCheckPending){const I=this.createSuccessLabelElem(e,r!==void 0?r:f.successMessage,f.config);I&&this.renderFieldLabel(f.elem,I,(i=f.config)==null?void 0:i.errorsContainer,!0),f.elem.classList.add(...lt(((s=f.config)==null?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}f.elem.classList.add(...lt(((a=f.config)==null?void 0:a.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const y=this.createErrorLabelElem(e,r!==void 0?r:f.errorMessage,f.config);this.renderFieldLabel(f.elem,y,(l=f.config)==null?void 0:l.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(f.elem,y,(d=(u=f.config)==null?void 0:u.tooltip)==null?void 0:d.position))}renderGroupError(e,t=!0){var r,i,s,a;const l=this.groupFields[e];if(l.isValid===!1&&(this.isValid=!1),l.isValid===void 0||!t&&!this.isSubmitted&&!l.touched)return;if(l.isValid){l.elems.forEach(f=>{var y,I;Object.assign(f.style,((y=l.config)==null?void 0:y.successFieldStyle)||this.globalConfig.successFieldStyle),f.classList.add(...lt(((I=l.config)==null?void 0:I.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const d=this.createSuccessLabelElem(e,l.successMessage,l.config);d&&this.renderGroupLabel(l.groupElem,d,(r=l.config)==null?void 0:r.errorsContainer,!0);return}this.isValid=!1,l.elems.forEach(d=>{var f,y;Object.assign(d.style,((f=l.config)==null?void 0:f.errorFieldStyle)||this.globalConfig.errorFieldStyle),d.classList.add(...lt(((y=l.config)==null?void 0:y.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const u=this.createErrorLabelElem(e,l.errorMessage,l.config);this.renderGroupLabel(l.groupElem,u,(i=l.config)==null?void 0:i.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(l.groupElem,u,(a=(s=l.config)==null?void 0:s.tooltip)==null?void 0:a.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const t in this.groupFields)this.renderGroupError(t);for(const t in this.fields)this.renderFieldError(t)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gn,zh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function v(){}v.prototype=g.prototype,_.D=g.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(T,E,w){for(var m=Array(arguments.length-2),G=2;G<arguments.length;G++)m[G-2]=arguments[G];return g.prototype[E].apply(T,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)T[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)T[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=_.g[0],v=_.g[1],E=_.g[2];var w=_.g[3],m=g+(w^v&(E^w))+T[0]+3614090360&4294967295;g=v+(m<<7&4294967295|m>>>25),m=w+(E^g&(v^E))+T[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(v^w&(g^v))+T[2]+606105819&4294967295,E=w+(m<<17&4294967295|m>>>15),m=v+(g^E&(w^g))+T[3]+3250441966&4294967295,v=E+(m<<22&4294967295|m>>>10),m=g+(w^v&(E^w))+T[4]+4118548399&4294967295,g=v+(m<<7&4294967295|m>>>25),m=w+(E^g&(v^E))+T[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(v^w&(g^v))+T[6]+2821735955&4294967295,E=w+(m<<17&4294967295|m>>>15),m=v+(g^E&(w^g))+T[7]+4249261313&4294967295,v=E+(m<<22&4294967295|m>>>10),m=g+(w^v&(E^w))+T[8]+1770035416&4294967295,g=v+(m<<7&4294967295|m>>>25),m=w+(E^g&(v^E))+T[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(v^w&(g^v))+T[10]+4294925233&4294967295,E=w+(m<<17&4294967295|m>>>15),m=v+(g^E&(w^g))+T[11]+2304563134&4294967295,v=E+(m<<22&4294967295|m>>>10),m=g+(w^v&(E^w))+T[12]+1804603682&4294967295,g=v+(m<<7&4294967295|m>>>25),m=w+(E^g&(v^E))+T[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(v^w&(g^v))+T[14]+2792965006&4294967295,E=w+(m<<17&4294967295|m>>>15),m=v+(g^E&(w^g))+T[15]+1236535329&4294967295,v=E+(m<<22&4294967295|m>>>10),m=g+(E^w&(v^E))+T[1]+4129170786&4294967295,g=v+(m<<5&4294967295|m>>>27),m=w+(v^E&(g^v))+T[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^v&(w^g))+T[11]+643717713&4294967295,E=w+(m<<14&4294967295|m>>>18),m=v+(w^g&(E^w))+T[0]+3921069994&4294967295,v=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(v^E))+T[5]+3593408605&4294967295,g=v+(m<<5&4294967295|m>>>27),m=w+(v^E&(g^v))+T[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^v&(w^g))+T[15]+3634488961&4294967295,E=w+(m<<14&4294967295|m>>>18),m=v+(w^g&(E^w))+T[4]+3889429448&4294967295,v=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(v^E))+T[9]+568446438&4294967295,g=v+(m<<5&4294967295|m>>>27),m=w+(v^E&(g^v))+T[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^v&(w^g))+T[3]+4107603335&4294967295,E=w+(m<<14&4294967295|m>>>18),m=v+(w^g&(E^w))+T[8]+1163531501&4294967295,v=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(v^E))+T[13]+2850285829&4294967295,g=v+(m<<5&4294967295|m>>>27),m=w+(v^E&(g^v))+T[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^v&(w^g))+T[7]+1735328473&4294967295,E=w+(m<<14&4294967295|m>>>18),m=v+(w^g&(E^w))+T[12]+2368359562&4294967295,v=E+(m<<20&4294967295|m>>>12),m=g+(v^E^w)+T[5]+4294588738&4294967295,g=v+(m<<4&4294967295|m>>>28),m=w+(g^v^E)+T[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^v)+T[11]+1839030562&4294967295,E=w+(m<<16&4294967295|m>>>16),m=v+(E^w^g)+T[14]+4259657740&4294967295,v=E+(m<<23&4294967295|m>>>9),m=g+(v^E^w)+T[1]+2763975236&4294967295,g=v+(m<<4&4294967295|m>>>28),m=w+(g^v^E)+T[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^v)+T[7]+4139469664&4294967295,E=w+(m<<16&4294967295|m>>>16),m=v+(E^w^g)+T[10]+3200236656&4294967295,v=E+(m<<23&4294967295|m>>>9),m=g+(v^E^w)+T[13]+681279174&4294967295,g=v+(m<<4&4294967295|m>>>28),m=w+(g^v^E)+T[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^v)+T[3]+3572445317&4294967295,E=w+(m<<16&4294967295|m>>>16),m=v+(E^w^g)+T[6]+76029189&4294967295,v=E+(m<<23&4294967295|m>>>9),m=g+(v^E^w)+T[9]+3654602809&4294967295,g=v+(m<<4&4294967295|m>>>28),m=w+(g^v^E)+T[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^v)+T[15]+530742520&4294967295,E=w+(m<<16&4294967295|m>>>16),m=v+(E^w^g)+T[2]+3299628645&4294967295,v=E+(m<<23&4294967295|m>>>9),m=g+(E^(v|~w))+T[0]+4096336452&4294967295,g=v+(m<<6&4294967295|m>>>26),m=w+(v^(g|~E))+T[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~v))+T[14]+2878612391&4294967295,E=w+(m<<15&4294967295|m>>>17),m=v+(w^(E|~g))+T[5]+4237533241&4294967295,v=E+(m<<21&4294967295|m>>>11),m=g+(E^(v|~w))+T[12]+1700485571&4294967295,g=v+(m<<6&4294967295|m>>>26),m=w+(v^(g|~E))+T[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~v))+T[10]+4293915773&4294967295,E=w+(m<<15&4294967295|m>>>17),m=v+(w^(E|~g))+T[1]+2240044497&4294967295,v=E+(m<<21&4294967295|m>>>11),m=g+(E^(v|~w))+T[8]+1873313359&4294967295,g=v+(m<<6&4294967295|m>>>26),m=w+(v^(g|~E))+T[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~v))+T[6]+2734768916&4294967295,E=w+(m<<15&4294967295|m>>>17),m=v+(w^(E|~g))+T[13]+1309151649&4294967295,v=E+(m<<21&4294967295|m>>>11),m=g+(E^(v|~w))+T[4]+4149444226&4294967295,g=v+(m<<6&4294967295|m>>>26),m=w+(v^(g|~E))+T[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~v))+T[2]+718787259&4294967295,E=w+(m<<15&4294967295|m>>>17),m=v+(w^(E|~g))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,_.g[2]=_.g[2]+E&4294967295,_.g[3]=_.g[3]+w&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var v=g-this.blockSize,T=this.B,E=this.h,w=0;w<g;){if(E==0)for(;w<=v;)i(this,_,w),w+=this.blockSize;if(typeof _=="string"){for(;w<g;)if(T[E++]=_.charCodeAt(w++),E==this.blockSize){i(this,T),E=0;break}}else for(;w<g;)if(T[E++]=_[w++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var v=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=v&255,v/=256;for(this.u(_),_=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)_[v++]=this.g[g]>>>T&255;return _};function s(_,g){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=g(_)}function a(_,g){this.h=g;for(var v=[],T=!0,E=_.length-1;0<=E;E--){var w=_[E]|0;T&&w==g||(v[E]=w,T=!1)}this.g=v}var l={};function u(_){return-128<=_&&128>_?s(_,function(g){return new a([g|0],0>g?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return R(d(-_));for(var g=[],v=1,T=0;_>=v;T++)g[T]=_/v|0,v*=4294967296;return new a(g,0)}function f(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return R(f(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),T=y,E=0;E<_.length;E+=8){var w=Math.min(8,_.length-E),m=parseInt(_.substring(E,E+w),g);8>w?(w=d(Math.pow(g,w)),T=T.j(w).add(d(m))):(T=T.j(v),T=T.add(d(m)))}return T}var y=u(0),I=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-R(this).m();for(var _=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);_+=(0<=T?T:4294967296+T)*g,g*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b(this))return"0";if(C(this))return"-"+R(this).toString(_);for(var g=d(Math.pow(_,6)),v=this,T="";;){var E=L(v,g).g;v=D(v,E.j(g));var w=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=E,b(v))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function b(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function C(_){return _.h==-1}n.l=function(_){return _=D(this,_),C(_)?-1:b(_)?0:1};function R(_){for(var g=_.g.length,v=[],T=0;T<g;T++)v[T]=~_.g[T];return new a(v,~_.h).add(I)}n.abs=function(){return C(this)?R(this):this},n.add=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],T=0,E=0;E<=g;E++){var w=T+(this.i(E)&65535)+(_.i(E)&65535),m=(w>>>16)+(this.i(E)>>>16)+(_.i(E)>>>16);T=m>>>16,w&=65535,m&=65535,v[E]=m<<16|w}return new a(v,v[v.length-1]&-2147483648?-1:0)};function D(_,g){return _.add(R(g))}n.j=function(_){if(b(this)||b(_))return y;if(C(this))return C(_)?R(this).j(R(_)):R(R(this).j(_));if(C(_))return R(this.j(R(_)));if(0>this.l(A)&&0>_.l(A))return d(this.m()*_.m());for(var g=this.g.length+_.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<_.g.length;E++){var w=this.i(T)>>>16,m=this.i(T)&65535,G=_.i(E)>>>16,Y=_.i(E)&65535;v[2*T+2*E]+=m*Y,N(v,2*T+2*E),v[2*T+2*E+1]+=w*Y,N(v,2*T+2*E+1),v[2*T+2*E+1]+=m*G,N(v,2*T+2*E+1),v[2*T+2*E+2]+=w*G,N(v,2*T+2*E+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function N(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function k(_,g){this.g=_,this.h=g}function L(_,g){if(b(g))throw Error("division by zero");if(b(_))return new k(y,y);if(C(_))return g=L(R(_),g),new k(R(g.g),R(g.h));if(C(g))return g=L(_,R(g)),new k(R(g.g),g.h);if(30<_.g.length){if(C(_)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,T=g;0>=T.l(_);)v=M(v),T=M(T);var E=V(v,1),w=V(T,1);for(T=V(T,2),v=V(v,2);!b(T);){var m=w.add(T);0>=m.l(_)&&(E=E.add(v),w=m),T=V(T,1),v=V(v,1)}return g=D(_,E.j(g)),new k(E,g)}for(E=y;0<=_.l(g);){for(v=Math.max(1,Math.floor(_.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=d(v),m=w.j(g);C(m)||0<m.l(_);)v-=T,w=d(v),m=w.j(g);b(w)&&(w=I),E=E.add(w),_=D(_,m)}return new k(E,_)}n.A=function(_){return L(this,_).h},n.and=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&_.i(T);return new a(v,this.h&_.h)},n.or=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|_.i(T);return new a(v,this.h|_.h)},n.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^_.i(T);return new a(v,this.h^_.h)};function M(_){for(var g=_.g.length+1,v=[],T=0;T<g;T++)v[T]=_.i(T)<<1|_.i(T-1)>>>31;return new a(v,_.h)}function V(_,g){var v=g>>5;g%=32;for(var T=_.g.length-v,E=[],w=0;w<T;w++)E[w]=0<g?_.i(w+v)>>>g|_.i(w+v+1)<<32-g:_.i(w+v);return new a(E,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,gn=a}).apply(typeof Wc<"u"?Wc:typeof self<"u"?self:typeof window<"u"?window:{});var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gh,Dr,Hh,Yi,Go,Kh,Wh,Qh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in h))break e;h=h[S]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,S={next:function(){if(!p&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,I.apply(null,arguments)}function A(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function b(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,S,P){for(var F=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)F[fe-2]=arguments[fe];return c.prototype[S].apply(p,F)}}function C(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function R(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const S=o.length||0,P=p.length||0;o.length=S+P;for(let F=0;F<P;F++)o[S+F]=p[F]}else o.push(p)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(o){return/^[\s\xa0]*$/.test(o)}function k(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var M=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function V(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function _(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(h in p)o[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function w(o){l.setTimeout(()=>{throw o},0)}function m(){var o=q;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,h){const p=Y.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Y=new D(()=>new me,o=>o.reset());class me{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,K=!1,q=new G,U=()=>{const o=l.Promise.resolve(void 0);he=()=>{o.then(z)}};var z=()=>{for(var o;o=m();){try{o.h.call(o.g)}catch(h){w(h)}var c=Y;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}K=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Ge(o,c){if(se.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(M){e:{try{L(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ge.aa.h.call(this)}}b(Ge,se);var $={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Ve=0;function ve(o,c,h,p,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=S,this.key=++Ve,this.da=this.fa=!1}function Ae(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Rn(o){this.src=o,this.g={},this.h=0}Rn.prototype.add=function(o,c,h,p,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var F=B(o,c,p,S);return-1<F?(c=o[F],h||(c.fa=!1)):(c=new ve(c,this.src,P,!!p,S),c.fa=h,o.push(c)),c};function Pn(o,c){var h=c.type;if(h in o.g){var p=o.g[h],S=Array.prototype.indexOf.call(p,c,void 0),P;(P=0<=S)&&Array.prototype.splice.call(p,S,1),P&&(Ae(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function B(o,c,h,p){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==p)return S}return-1}var de="closure_lm_"+(1e6*Math.random()|0),et={};function Ot(o,c,h,p,S){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Ot(o,c[P],h,p,S);return null}return h=Il(h),o&&o[le]?o.K(c,h,d(p)?!!p.capture:!!p,S):Ys(o,c,h,!1,p,S)}function Ys(o,c,h,p,S,P){if(!c)throw Error("Invalid event type");var F=d(S)?!!S.capture:!!S,fe=Js(o);if(fe||(o[de]=fe=new Rn(o)),h=fe.add(c,h,p,F,P),h.proxy)return h;if(p=Pf(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Se||(S=F),S===void 0&&(S=!1),o.addEventListener(c.toString(),p,S);else if(o.attachEvent)o.attachEvent(Tl(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Pf(){function o(h){return c.call(o.src,o.listener,h)}const c=kf;return o}function El(o,c,h,p,S){if(Array.isArray(c))for(var P=0;P<c.length;P++)El(o,c[P],h,p,S);else p=d(p)?!!p.capture:!!p,h=Il(h),o&&o[le]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=B(P,h,p,S),-1<h&&(Ae(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Js(o))&&(c=o.g[c.toString()],o=-1,c&&(o=B(c,h,p,S)),(h=-1<o?c[o]:null)&&Xs(h))}function Xs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[le])Pn(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Tl(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Js(c))?(Pn(h,o),h.h==0&&(h.src=null,c[de]=null)):Ae(o)}}}function Tl(o){return o in et?et[o]:et[o]="on"+o}function kf(o,c){if(o.da)o=!0;else{c=new Ge(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Xs(o),o=h.call(p,c)}return o}function Js(o){return o=o[de],o instanceof Rn?o:null}var Zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Il(o){return typeof o=="function"?o:(o[Zs]||(o[Zs]=function(c){return o.handleEvent(c)}),o[Zs])}function Oe(){ee.call(this),this.i=new Rn(this),this.M=this,this.F=null}b(Oe,ee),Oe.prototype[le]=!0,Oe.prototype.removeEventListener=function(o,c,h,p){El(this,o,c,h,p)};function je(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new se(c,o);else if(c instanceof se)c.target=c.target||o;else{var S=c;c=new se(p,o),T(c,S)}if(S=!0,h)for(var P=h.length-1;0<=P;P--){var F=c.g=h[P];S=Ti(F,p,!0,c)&&S}if(F=c.g=o,S=Ti(F,p,!0,c)&&S,S=Ti(F,p,!1,c)&&S,h)for(P=0;P<h.length;P++)F=c.g=h[P],S=Ti(F,p,!1,c)&&S}Oe.prototype.N=function(){if(Oe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)Ae(h[p]);delete o.g[c],o.h--}}this.F=null},Oe.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Oe.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Ti(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,P=0;P<c.length;++P){var F=c[P];if(F&&!F.da&&F.capture==h){var fe=F.listener,ke=F.ha||F.src;F.fa&&Pn(o.i,F),S=fe.call(ke,p)!==!1&&S}}return S&&!p.defaultPrevented}function wl(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Al(o){o.g=wl(()=>{o.g=null,o.i&&(o.i=!1,Al(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Nf extends ee{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Al(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(o){ee.call(this),this.h=o,this.g={}}b(pr,ee);var bl=[];function Sl(o){V(o.g,function(c,h){this.g.hasOwnProperty(h)&&Xs(c)},o),o.g={}}pr.prototype.N=function(){pr.aa.N.call(this),Sl(this)},pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eo=l.JSON.stringify,Df=l.JSON.parse,Lf=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function to(){}to.prototype.h=null;function Cl(o){return o.h||(o.h=o.i())}function Rl(){}var gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function no(){se.call(this,"d")}b(no,se);function ro(){se.call(this,"c")}b(ro,se);var an={},Pl=null;function Ii(){return Pl=Pl||new Oe}an.La="serverreachability";function kl(o){se.call(this,an.La,o)}b(kl,se);function mr(o){const c=Ii();je(c,new kl(c))}an.STAT_EVENT="statevent";function Nl(o,c){se.call(this,an.STAT_EVENT,o),this.stat=c}b(Nl,se);function qe(o){const c=Ii();je(c,new Nl(c,o))}an.Ma="timingevent";function Dl(o,c){se.call(this,an.Ma,o),this.size=c}b(Dl,se);function _r(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function vr(){this.g=!0}vr.prototype.xa=function(){this.g=!1};function Vf(o,c,h,p,S,P){o.info(function(){if(o.g)if(P)for(var F="",fe=P.split("&"),ke=0;ke<fe.length;ke++){var ae=fe[ke].split("=");if(1<ae.length){var Me=ae[0];ae=ae[1];var Fe=Me.split("_");F=2<=Fe.length&&Fe[1]=="type"?F+(Me+"="+ae+"&"):F+(Me+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+c+`
`+h+`
`+F})}function Of(o,c,h,p,S,P,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+c+`
`+h+`
`+P+" "+F})}function kn(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ff(o,h)+(p?" "+p:"")})}function Mf(o,c){o.info(function(){return"TIMEOUT: "+c})}vr.prototype.info=function(){};function Ff(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return eo(h)}catch{return c}}var wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ll={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},io;function Ai(){}b(Ai,to),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},io=new Ai;function Mt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var Ol={},so={};function oo(o,c,h){o.L=1,o.v=Ri(_t(c)),o.m=h,o.P=!0,Ml(o,null)}function Ml(o,c){o.F=Date.now(),bi(o),o.A=_t(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Yl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Vl,o.g=pc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Nf(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(bl[0]=S.toString()),S=bl);for(var P=0;P<S.length;P++){var F=Ot(h,S[P],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),mr(),Vf(o.i,o.u,o.A,o.l,o.R,o.m)}Mt.prototype.ca=function(o){o=o.target;const c=this.M;c&&vt(o)==3?c.j():this.Y(o)},Mt.prototype.Y=function(o){try{if(o==this.g)e:{const Fe=vt(this.g);var c=this.g.Ba();const Ln=this.g.Z();if(!(3>Fe)&&(Fe!=3||this.g&&(this.h.h||this.g.oa()||rc(this.g)))){this.J||Fe!=4||c==7||(c==8||0>=Ln?mr(3):mr(2)),ao(this);var h=this.g.Z();this.X=h;t:if(Fl(this)){var p=rc(this.g);o="";var S=p.length,P=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),yr(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(P&&c==S-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Of(this.i,this.u,this.A,this.l,this.R,Fe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,ke=this.g;if((fe=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(fe)){var ae=fe;break t}}ae=null}if(h=ae)kn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lo(this,h);else{this.o=!1,this.s=3,qe(12),ln(this),yr(this);break e}}if(this.P){h=!0;let tt;for(;!this.J&&this.C<F.length;)if(tt=xf(this,F),tt==so){Fe==4&&(this.s=4,qe(14),h=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Ol){this.s=4,qe(15),kn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else kn(this.i,this.l,tt,null),lo(this,tt);if(Fl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Fe!=4||F.length!=0||this.h.h||(this.s=1,qe(16),h=!1),this.o=this.o&&h,!h)kn(this.i,this.l,F,"[Invalid Chunked Response]"),ln(this),yr(this);else if(0<F.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),go(Me),Me.M=!0,qe(11))}}else kn(this.i,this.l,F,null),lo(this,F);Fe==4&&ln(this),this.o&&!this.J&&(Fe==4?uc(this.j,this):(this.o=!1,bi(this)))}else tp(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),ln(this),yr(this)}}}catch{}finally{}};function Fl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function xf(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?so:(h=Number(c.substring(h,p)),isNaN(h)?Ol:(p+=1,p+h>c.length?so:(c=c.slice(p,p+h),o.C=p+h,c)))}Mt.prototype.cancel=function(){this.J=!0,ln(this)};function bi(o){o.S=Date.now()+o.I,xl(o,o.I)}function xl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_r(I(o.ba,o),c)}function ao(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Mt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Mf(this.i,this.A),this.L!=2&&(mr(),qe(17)),ln(this),this.s=2,yr(this)):xl(this,this.S-o)};function yr(o){o.j.G==0||o.J||uc(o.j,o)}function ln(o){ao(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Sl(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function lo(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||co(h.h,o))){if(!o.K&&co(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Vi(h),Di(h);else break e;po(h),qe(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=_r(I(h.Za,h),6e3));if(1>=Bl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else un(h,11)}else if((o.K||h.g==o)&&Vi(h),!N(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let ae=S[c];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];const Me=ae[3];Me!=null&&(h.la=Me,h.j.info("VER="+h.la));const Fe=ae[4];Fe!=null&&(h.Aa=Fe,h.j.info("SVER="+h.Aa));const Ln=ae[5];Ln!=null&&typeof Ln=="number"&&0<Ln&&(p=1.5*Ln,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const tt=o.g;if(tt){const Mi=tt.g?tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var P=p.h;P.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(uo(P,P.h),P.h=null))}if(p.D){const mo=tt.g?tt.g.getResponseHeader("X-HTTP-Session-Id"):null;mo&&(p.ya=mo,ge(p.I,p.D,mo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=o;if(p.qa=fc(p,p.J?p.ia:null,p.W),F.K){jl(p.h,F);var fe=F,ke=p.L;ke&&(fe.I=ke),fe.B&&(ao(fe),bi(fe)),p.g=F}else lc(p);0<h.i.length&&Li(h)}else ae[0]!="stop"&&ae[0]!="close"||un(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?un(h,7):fo(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}mr(4)}catch{}}var Uf=class{constructor(o,c){this.g=o,this.map=c}};function Ul(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $l(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bl(o){return o.h?1:o.g?o.g.size:0}function co(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function uo(o,c){o.g?o.g.add(c):o.h=c}function jl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ul.prototype.cancel=function(){if(this.i=ql(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ql(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return C(o.i)}function $f(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Bf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function zl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Bf(o),p=$f(o),S=p.length,P=0;P<S;P++)c.call(void 0,p[P],h&&h[P],o)}var Gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),S=null;if(0<=p){var P=o[h].substring(0,p);S=o[h].substring(p+1)}else P=o[h];c(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function cn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cn){this.h=o.h,Si(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var c=o.i,h=new Ir;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Hl(this,h),this.m=o.m}else o&&(c=String(o).match(Gl))?(this.h=!1,Si(this,c[1]||"",!0),this.o=Er(c[2]||""),this.g=Er(c[3]||"",!0),Ci(this,c[4]),this.l=Er(c[5]||"",!0),Hl(this,c[6]||"",!0),this.m=Er(c[7]||"")):(this.h=!1,this.i=new Ir(null,this.h))}cn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Tr(c,Kl,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Tr(c,Kl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Tr(h,h.charAt(0)=="/"?Gf:zf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Tr(h,Kf)),o.join("")};function _t(o){return new cn(o)}function Si(o,c,h){o.j=h?Er(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Hl(o,c,h){c instanceof Ir?(o.i=c,Wf(o.i,o.h)):(h||(c=Tr(c,Hf)),o.i=new Ir(c,o.h))}function ge(o,c,h){o.i.set(c,h)}function Ri(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Er(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Tr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,qf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Kl=/[#\/\?@]/g,zf=/[#\?:]/g,Gf=/[#\?]/g,Hf=/[#\?@]/g,Kf=/#/g;function Ir(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ft(o){o.g||(o.g=new Map,o.h=0,o.i&&jf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Ir.prototype,n.add=function(o,c){Ft(this),this.i=null,o=Nn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Wl(o,c){Ft(o),c=Nn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Ql(o,c){return Ft(o),c=Nn(o,c),o.g.has(c)}n.forEach=function(o,c){Ft(this),this.g.forEach(function(h,p){h.forEach(function(S){o.call(c,S,p,this)},this)},this)},n.na=function(){Ft(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const S=o[p];for(let P=0;P<S.length;P++)h.push(c[p])}return h},n.V=function(o){Ft(this);let c=[];if(typeof o=="string")Ql(this,o)&&(c=c.concat(this.g.get(Nn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Ft(this),this.i=null,o=Nn(this,o),Ql(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Yl(o,c,h){Wl(o,c),0<h.length&&(o.i=null,o.g.set(Nn(o,c),C(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const P=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var S=P;F[p]!==""&&(S+="="+encodeURIComponent(String(F[p]))),o.push(S)}}return this.i=o.join("&")};function Nn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Wf(o,c){c&&!o.j&&(Ft(o),o.i=null,o.g.forEach(function(h,p){var S=p.toLowerCase();p!=S&&(Wl(this,p),Yl(this,S,h))},o)),o.j=c}function Qf(o,c){const h=new vr;if(l.Image){const p=new Image;p.onload=A(xt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=A(xt,h,"TestLoadImage: error",!1,c,p),p.onabort=A(xt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(xt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Yf(o,c){const h=new vr,p=new AbortController,S=setTimeout(()=>{p.abort(),xt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(S),P.ok?xt(h,"TestPingServer: ok",!0,c):xt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),xt(h,"TestPingServer: error",!1,c)})}function xt(o,c,h,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(h)}catch{}}function Xf(){this.g=new Lf}function Jf(o,c,h){const p=h||"";try{zl(o,function(S,P){let F=S;d(S)&&(F=eo(S)),c.push(p+P+"="+encodeURIComponent(F))})}catch(S){throw c.push(p+"type="+encodeURIComponent("_badmap")),S}}function Pi(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Pi,to),Pi.prototype.g=function(){return new ki(this.l,this.j)},Pi.prototype.i=function(o){return function(){return o}}({});function ki(o,c){Oe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(ki,Oe),n=ki.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ar(this)),this.g&&(this.readyState=3,Ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?wr(this):Ar(this),this.readyState==3&&Xl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Qa=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ar(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Jl(o){let c="";return V(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function ho(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Jl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ge(o,c,h))}function ye(o){Oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ye,Oe);var Zf=/^https?$/i,ep=["POST","PUT"];n=ye.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():io.g(),this.v=this.o?Cl(this.o):Cl(io),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Zl(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)h.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ep,c,void 0))||p||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of h)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Zl(this,P)}};function Zl(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ec(o),Ni(o)}function ec(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),Ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tc(this):this.bb())},n.bb=function(){tc(this)};function tc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||vt(o)!=4||o.Z()!=2)){if(o.u&&vt(o)==4)wl(o.Ea,0,o);else if(je(o,"readystatechange"),vt(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=F===0){var S=String(o.D).match(Gl)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Zf.test(S?S.toLowerCase():"")}h=p}if(h)je(o,"complete"),je(o,"success");else{o.m=6;try{var P=2<vt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",ec(o)}}finally{Ni(o)}}}}function Ni(o,c){if(o.g){nc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||je(o,"ready");try{h.onreadystatechange=p}catch{}}}function nc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function vt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Df(c)}};function rc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function tp(o){const c={};o=(o.g&&2<=vt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(N(o[p]))continue;var h=E(o[p]);const S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[S]||[];c[S]=P,P.push(h)}_(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function br(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ic(o){this.Aa=0,this.i=[],this.j=new vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=br("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=br("baseRetryDelayMs",5e3,o),this.cb=br("retryDelaySeedMs",1e4,o),this.Wa=br("forwardChannelMaxRetries",2,o),this.wa=br("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ul(o&&o.concurrentRequestLimit),this.Da=new Xf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ic.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){qe(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=fc(this,null,this.W),Li(this)};function fo(o){if(sc(o),o.G==3){var c=o.U++,h=_t(o.I);if(ge(h,"SID",o.K),ge(h,"RID",c),ge(h,"TYPE","terminate"),Sr(o,h),c=new Mt(o,o.j,c),c.L=2,c.v=Ri(_t(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=pc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),bi(c)}dc(o)}function Di(o){o.g&&(go(o),o.g.cancel(),o.g=null)}function sc(o){Di(o),o.u&&(l.clearTimeout(o.u),o.u=null),Vi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Li(o){if(!$l(o.h)&&!o.s){o.s=!0;var c=o.Ga;he||U(),K||(he(),K=!0),q.add(c,o),o.B=0}}function np(o,c){return Bl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_r(I(o.Ga,o,c),hc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new Mt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ac(this,S,c),h=_t(this.I),ge(h,"RID",o),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),Sr(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(Jl(P)))+"&"+c:this.m&&ho(h,this.m,P)),uo(this.h,S),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",c),ge(h,"SID","null"),S.T=!0,oo(S,h,null)):oo(S,h,c),this.G=2}}else this.G==3&&(o?oc(this,o):this.i.length==0||$l(this.h)||oc(this))};function oc(o,c){var h;c?h=c.l:h=o.U++;const p=_t(o.I);ge(p,"SID",o.K),ge(p,"RID",h),ge(p,"AID",o.T),Sr(o,p),o.m&&o.o&&ho(p,o.m,o.o),h=new Mt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ac(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),uo(o.h,h),oo(h,p,c)}function Sr(o,c){o.H&&V(o.H,function(h,p){ge(c,p,h)}),o.l&&zl({},function(h,p){ge(c,p,h)})}function ac(o,c,h){h=Math.min(o.i.length,h);var p=o.l?I(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const F=["count="+h];P==-1?0<h?(P=S[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let fe=!0;for(let ke=0;ke<h;ke++){let ae=S[ke].g;const Me=S[ke].map;if(ae-=P,0>ae)P=Math.max(0,S[ke].g-100),fe=!1;else try{Jf(Me,F,"req"+ae+"_")}catch{p&&p(Me)}}if(fe){p=F.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function lc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;he||U(),K||(he(),K=!0),q.add(c,o),o.v=0}}function po(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_r(I(o.Fa,o),hc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_r(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Di(this),cc(this))};function go(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function cc(o){o.g=new Mt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=_t(o.qa);ge(c,"RID","rpc"),ge(c,"SID",o.K),ge(c,"AID",o.T),ge(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(c,"TO",o.ja),ge(c,"TYPE","xmlhttp"),Sr(o,c),o.m&&o.o&&ho(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ri(_t(c)),h.m=null,h.P=!0,Ml(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Di(this),po(this),qe(19))};function Vi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function uc(o,c){var h=null;if(o.g==c){Vi(o),go(o),o.g=null;var p=2}else if(co(o.h,c))h=c.D,jl(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;p=Ii(),je(p,new Dl(p,h)),Li(o)}else lc(o);else if(S=c.s,S==3||S==0&&0<c.X||!(p==1&&np(o,c)||p==2&&po(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function hc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function un(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),p=o.Xa;const S=!p;p=new cn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Si(p,"https"),Ri(p),S?Qf(p.toString(),h):Yf(p.toString(),h)}else qe(2);o.G=0,o.l&&o.l.sa(c),dc(o),sc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function dc(o){if(o.G=0,o.ka=[],o.l){const c=ql(o.h);(c.length!=0||o.i.length!=0)&&(R(o.ka,c),R(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function fc(o,c,h){var p=h instanceof cn?_t(h):new cn(h);if(p.g!="")c&&(p.g=c+"."+p.g),Ci(p,p.s);else{var S=l.location;p=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var P=new cn(null);p&&Si(P,p),c&&(P.g=c),S&&Ci(P,S),h&&(P.l=h),p=P}return h=o.D,c=o.ya,h&&c&&ge(p,h,c),ge(p,"VER",o.la),Sr(o,p),p}function pc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ye(new Pi({eb:h})):new ye(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gc(){}n=gc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Oi(){}Oi.prototype.g=function(o,c){return new Qe(o,c)};function Qe(o,c){Oe.call(this),this.g=new ic(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!N(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!N(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Dn(this)}b(Qe,Oe),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){fo(this.g)},Qe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=eo(o),o=h);c.i.push(new Uf(c.Ya++,o)),c.G==3&&Li(c)},Qe.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,Qe.aa.N.call(this)};function mc(o){no.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}b(mc,no);function _c(){ro.call(this),this.status=1}b(_c,ro);function Dn(o){this.g=o}b(Dn,gc),Dn.prototype.ua=function(){je(this.g,"a")},Dn.prototype.ta=function(o){je(this.g,new mc(o))},Dn.prototype.sa=function(o){je(this.g,new _c)},Dn.prototype.ra=function(){je(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Qh=function(){return new Oi},Wh=function(){return Ii()},Kh=an,Go={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wi.NO_ERROR=0,wi.TIMEOUT=8,wi.HTTP_ERROR=6,Yi=wi,Ll.COMPLETE="complete",Hh=Ll,Rl.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.K,Dr=Rl,ye.prototype.listenOnce=ye.prototype.L,ye.prototype.getLastError=ye.prototype.Ka,ye.prototype.getLastErrorCode=ye.prototype.Ba,ye.prototype.getStatus=ye.prototype.Z,ye.prototype.getResponseJson=ye.prototype.Oa,ye.prototype.getResponseText=ye.prototype.oa,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Ha,Gh=ye}).apply(typeof Ui<"u"?Ui:typeof self<"u"?self:typeof window<"u"?window:{});const Qc="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let ar="10.14.0";/**
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
 */const In=new ma("@firebase/firestore");function Pr(){return In.logLevel}function j(n,...e){if(In.logLevel<=ne.DEBUG){const t=e.map(ka);In.debug(`Firestore (${ar}): ${n}`,...t)}}function Nt(n,...e){if(In.logLevel<=ne.ERROR){const t=e.map(ka);In.error(`Firestore (${ar}): ${n}`,...t)}}function Yn(n,...e){if(In.logLevel<=ne.WARN){const t=e.map(ka);In.warn(`Firestore (${ar}): ${n}`,...t)}}function ka(n){if(typeof n=="string")return n;try{/**
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
 */function Z(n="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+n;throw Nt(e),new Error(e)}function Te(n,e){n||Z()}function ie(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Yh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}}class gv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mv{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new Yh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Ue(e)}}class _v{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new _v(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ev{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Te(this.o===void 0);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Te(typeof t.token=="string"),this.R=t.token,new yv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Iv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Tv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Xn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class Ke{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ke(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ke(0,0))}static max(){return new X(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(),r===void 0?r=e.length-t:r>e.length-t&&Z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ee extends zr{construct(e,t,r){return new Ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ee(t)}static emptyPath(){return new Ee([])}}const wv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends zr{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return wv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new H(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ee.fromString(e))}static fromName(e){return new Q(Ee.fromString(e).popFirst(5))}static empty(){return new Q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ee(e.slice()))}}function Av(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ke(t+1,0):new Ke(t,r));return new Yt(i,Q.empty(),e)}function bv(n){return new Yt(n.readTime,n.key,-1)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(X.min(),Q.empty(),-1)}static max(){return new Yt(X.max(),Q.empty(),-1)}}function Sv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const Cv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Na(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Cv)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new O((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Pv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function li(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Da.oe=-1;function Cs(n){return n==null}function Ho(n){return n===0&&1/n==-1/0}/**
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
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class we{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ne.RED,this.left=i??Ne.EMPTY,this.right=s??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ne(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ne.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new zt([])}unionWith(e){let t=new De(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new zt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Xh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Xh("Invalid base64 string: "+s):s}}(e);return new Le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Nv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(Te(!!n),typeof n=="string"){let e=0;const t=Nv.exec(n);if(Te(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
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
 */function La(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Va(n){const e=n.mapValue.fields.__previous_value__;return La(e)?Va(e):e}function Gr(n){const e=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class Dv{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Hr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function An(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?La(n)?4:Vv(n)?9007199254740991:Lv(n)?10:11:Z()}function dt(n,e){if(n===e)return!0;const t=An(n);if(t!==An(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Gr(n).isEqual(Gr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Xt(i.timestampValue),l=Xt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return wn(i.bytesValue).isEqual(wn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ie(i.doubleValue),l=Ie(s.doubleValue);return a===l?Ho(a)===Ho(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Xn(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Yc(a)!==Yc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!dt(a[u],l[u])))return!1;return!0}(n,e);default:return Z()}}function Kr(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function Jn(n,e){if(n===e)return 0;const t=An(n),r=An(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ie(s.integerValue||s.doubleValue),u=Ie(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Jc(n.timestampValue,e.timestampValue);case 4:return Jc(Gr(n),Gr(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(s,a){const l=wn(s),u=wn(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ce(l[d],u[d]);if(f!==0)return f}return ce(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ce(Ie(s.latitude),Ie(a.latitude));return l!==0?l:ce(Ie(s.longitude),Ie(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zc(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const y=s.fields||{},I=a.fields||{},A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,b=(u=I.value)===null||u===void 0?void 0:u.arrayValue,C=ce(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Zc(A,b)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Bi.mapValue&&a===Bi.mapValue)return 0;if(s===Bi.mapValue)return 1;if(a===Bi.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const I=ce(u[y],f[y]);if(I!==0)return I;const A=Jn(l[u[y]],d[f[y]]);if(A!==0)return A}return ce(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Z()}}function Jc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Xt(n),r=Xt(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function Zc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Jn(t[i],r[i]);if(s)return s}return ce(t.length,r.length)}function Zn(n){return Ko(n)}function Ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return wn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ko(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ko(t.fields[a])}`;return i+"}"}(n.mapValue):Z()}function Wo(n){return!!n&&"integerValue"in n}function Oa(n){return!!n&&"arrayValue"in n}function eu(n){return!!n&&"nullValue"in n}function tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bo(n){return!!n&&"mapValue"in n}function Lv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Mr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Mr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!bo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mr(t)}setAll(e){let t=ze.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Mr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());bo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];bo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Rs(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Mr(this.value))}}/**
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
 */class $e{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new $e(e,0,X.min(),X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,t,r,i){return new $e(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new $e(e,2,t,X.min(),X.min(),ct.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,X.min(),X.min(),ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fs{constructor(e,t){this.position=e,this.inclusive=t}}function nu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=Jn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ru(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ov(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Jh{}class Ce extends Jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Fv(e,t,r):t==="array-contains"?new $v(e,r):t==="in"?new Bv(e,r):t==="not-in"?new jv(e,r):t==="array-contains-any"?new qv(e,r):new Ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new xv(e,r):new Uv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jn(t,this.value)):t!==null&&An(this.value)===An(t)&&this.matchesComparison(Jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends Jh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ft(e,t)}matches(e){return Zh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zh(n){return n.op==="and"}function ed(n){return Mv(n)&&Zh(n)}function Mv(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function Qo(n){if(n instanceof Ce)return n.field.canonicalString()+n.op.toString()+Zn(n.value);if(ed(n))return n.filters.map(e=>Qo(e)).join(",");{const e=n.filters.map(t=>Qo(t)).join(",");return`${n.op}(${e})`}}function td(n,e){return n instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&td(a,i.filters[l]),!0):!1}(n,e):void Z()}function nd(n){return n instanceof Ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Zn(t.value)}`}(n):n instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(nd).join(" ,")+"}"}(n):"Filter"}class Fv extends Ce{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class xv extends Ce{constructor(e,t){super(e,"in",t),this.keys=rd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Uv extends Ce{constructor(e,t){super(e,"not-in",t),this.keys=rd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}class $v extends Ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oa(t)&&Kr(t.arrayValue,this.value)}}class Bv extends Ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Kr(this.value.arrayValue,t)}}class jv extends Ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Kr(this.value.arrayValue,t)}}class qv extends Ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Kr(this.value.arrayValue,r))}}/**
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
 */class zv{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function iu(n,e=null,t=[],r=[],i=null,s=null,a=null){return new zv(n,e,t,r,i,s,a)}function Ma(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Zn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Zn(r)).join(",")),e.ue=t}return e.ue}function Fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ov(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!td(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ru(n.startAt,e.startAt)&&ru(n.endAt,e.endAt)}function Yo(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ps{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gv(n,e,t,r,i,s,a,l){return new Ps(n,e,t,r,i,s,a,l)}function id(n){return new Ps(n)}function su(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hv(n){return n.collectionGroup!==null}function Fr(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new De(ze.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ps(s,r))}),t.has(ze.keyField().canonicalString())||e.ce.push(new ps(ze.keyField(),r))}return e.ce}function ht(n){const e=ie(n);return e.le||(e.le=Kv(e,Fr(n))),e.le}function Kv(n,e){if(n.limitType==="F")return iu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ps(i.field,s)});const t=n.endAt?new fs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fs(n.startAt.position,n.startAt.inclusive):null;return iu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xo(n,e,t){return new Ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ks(n,e){return Fa(ht(n),ht(e))&&n.limitType===e.limitType}function sd(n){return`${Ma(ht(n))}|lt:${n.limitType}`}function Vn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>nd(i)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Zn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Zn(i)).join(",")),`Target(${r})`}(ht(n))}; limitType=${n.limitType})`}function Ns(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Fr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=nu(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Fr(r),i)||r.endAt&&!function(a,l,u){const d=nu(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Fr(r),i))}(n,e)}function Wv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function od(n){return(e,t)=>{let r=!1;for(const i of Fr(n)){const s=Qv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qv(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Jn(u,d):Z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kv(this.inner)}size(){return this.innerSize}}/**
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
 */const Yv=new we(Q.comparator);function Jt(){return Yv}const ad=new we(Q.comparator);function Lr(...n){let e=ad;for(const t of n)e=e.insert(t.key,t);return e}function Xv(n){let e=ad;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function pn(){return xr()}function ld(){return xr()}function xr(){return new lr(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jv=new De(Q.comparator);function oe(...n){let e=Jv;for(const t of n)e=e.add(t);return e}const Zv=new De(ce);function ey(){return Zv}/**
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
 */function ty(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function ny(n){return{integerValue:""+n}}/**
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
 */class Ds{constructor(){this._=void 0}}function ry(n,e,t){return n instanceof Jo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&La(s)&&(s=Va(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof gs?cd(n,e):n instanceof ms?ud(n,e):function(i,s){const a=sy(i,s),l=ou(a)+ou(i.Pe);return Wo(a)&&Wo(i.Pe)?ny(l):ty(i.serializer,l)}(n,e)}function iy(n,e,t){return n instanceof gs?cd(n,e):n instanceof ms?ud(n,e):t}function sy(n,e){return n instanceof Zo?function(r){return Wo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jo extends Ds{}class gs extends Ds{constructor(e){super(),this.elements=e}}function cd(n,e){const t=hd(e);for(const r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}class ms extends Ds{constructor(e){super(),this.elements=e}}function ud(n,e){let t=hd(e);for(const r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}class Zo extends Ds{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ou(n){return Ie(n.integerValue||n.doubleValue)}function hd(n){return Oa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function oy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof gs&&i instanceof gs||r instanceof ms&&i instanceof ms?Xn(r.elements,i.elements,dt):r instanceof Zo&&i instanceof Zo?dt(r.Pe,i.Pe):r instanceof Jo&&i instanceof Jo}(n.transform,e.transform)}class _n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xa{}function dd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ly(n.key,_n.none()):new Ua(n.key,n.data,_n.none());{const t=n.data,r=ct.empty();let i=new De(ze.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ls(n.key,r,new zt(i.toArray()),_n.none())}}function ay(n,e,t){n instanceof Ua?function(i,s,a){const l=i.value.clone(),u=lu(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ls?function(i,s,a){if(!Xi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=lu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(fd(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ur(n,e,t,r){return n instanceof Ua?function(s,a,l,u){if(!Xi(s.precondition,a))return l;const d=s.value.clone(),f=cu(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ls?function(s,a,l,u){if(!Xi(s.precondition,a))return l;const d=cu(s.fieldTransforms,u,a),f=a.data;return f.setAll(fd(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,l){return Xi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xn(r,i,(s,a)=>oy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ua extends xa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ls extends xa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function lu(n,e,t){const r=new Map;Te(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,iy(a,l,t[i]))}return r}function cu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,ry(s,a,e))}return r}class ly extends xa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ay(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ld();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=dd(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&Xn(this.mutations,e.mutations,(t,r)=>au(t,r))&&Xn(this.baseMutations,e.baseMutations,(t,r)=>au(t,r))}}/**
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
 */class uy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var be,re;function pd(n){if(n===void 0)return Nt("GRPC error has no .code"),x.UNKNOWN;switch(n){case be.OK:return x.OK;case be.CANCELLED:return x.CANCELLED;case be.UNKNOWN:return x.UNKNOWN;case be.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case be.INTERNAL:return x.INTERNAL;case be.UNAVAILABLE:return x.UNAVAILABLE;case be.UNAUTHENTICATED:return x.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case be.NOT_FOUND:return x.NOT_FOUND;case be.ALREADY_EXISTS:return x.ALREADY_EXISTS;case be.PERMISSION_DENIED:return x.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case be.ABORTED:return x.ABORTED;case be.OUT_OF_RANGE:return x.OUT_OF_RANGE;case be.UNIMPLEMENTED:return x.UNIMPLEMENTED;case be.DATA_LOSS:return x.DATA_LOSS;default:return Z()}}(re=be||(be={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dy(){return new TextEncoder}/**
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
 */const fy=new gn([4294967295,4294967295],0);function uu(n){const e=dy().encode(n),t=new zh;return t.update(e),new Uint8Array(t.digest())}function hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gn([t,r],0),new gn([i,s],0)]}class $a{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Vr(`Invalid padding: ${t}`);if(r<0)throw new Vr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Vr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=gn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(gn.fromNumber(r)));return i.compare(fy)===1&&(i=new gn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=uu(e),[r,i]=hu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new $a(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=uu(e),[r,i]=hu(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vs{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vs(X.min(),i,new we(ce),Jt(),oe())}}class ci{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ci(r,t,oe(),oe(),oe())}}/**
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
 */class Ji{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class gd{constructor(e,t){this.targetId=e,this.me=t}}class md{constructor(e,t,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class du{constructor(){this.fe=0,this.ge=pu(),this.pe=Le.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),t=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new ci(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=pu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class py{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jt(),this.qe=fu(),this.Qe=new we(ce)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Yo(s))if(r===0){const a=new Q(s.path);this.Ue(t,a,$e.newNoDocument(a,X.min()))}else Te(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=wn(r).toUint8Array()}catch(u){if(u instanceof Xh)return Yn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new $a(a,i,s)}catch(u){return Yn(u instanceof Vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Yo(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,$e.newNoDocument(u,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let r=oe();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Vs(e,t,this.Qe,this.ke,r);return this.ke=Jt(),this.qe=fu(),this.Qe=new we(ce),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new du,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new De(ce),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new du),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function fu(){return new we(Q.comparator)}function pu(){return new we(Q.comparator)}const gy={asc:"ASCENDING",desc:"DESCENDING"},my={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_y={and:"AND",or:"OR"};class vy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ea(n,e){return n.useProto3Json||Cs(e)?e:{value:e}}function yy(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ey(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qn(n){return Te(!!n),X.fromTimestamp(function(t){const r=Xt(t);return new Ke(r.seconds,r.nanos)}(n))}function Ty(n,e){return ta(n,e).canonicalString()}function ta(n,e){const t=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _d(n){const e=Ee.fromString(n);return Te(Id(e)),e}function So(n,e){const t=_d(e);if(t.get(1)!==n.databaseId.projectId)throw new H(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(yd(t))}function vd(n,e){return Ty(n.databaseId,e)}function Iy(n){const e=_d(n);return e.length===4?Ee.emptyPath():yd(e)}function gu(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yd(n){return Te(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(Te(f===void 0||typeof f=="string"),Le.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Le.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?x.UNKNOWN:pd(d.code);return new H(f,d.message||"")}(a);t=new md(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=So(n,r.document.name),s=qn(r.document.updateTime),a=r.document.createTime?qn(r.document.createTime):X.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=$e.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Ji(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=So(n,r.document),s=r.readTime?qn(r.readTime):X.min(),a=$e.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Ji([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=So(n,r.document),s=r.removedTargetIds||[];t=new Ji([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new hy(i,s),l=r.targetId;t=new gd(l,a)}}return t}function Ay(n,e){return{documents:[vd(n,e.path)]}}function by(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vd(n,i);const s=function(d){if(d.length!==0)return Td(ft.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(I){return{field:On(I.field),direction:Ry(I.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ea(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Sy(n){let e=Iy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Te(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const I=Ed(y);return I instanceof ft&&ed(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(b){return new ps(Mn(b.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(y){let I;return I=typeof y=="object"?y.value:y,Cs(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(y){const I=!!y.before,A=y.values||[];return new fs(A,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const I=!y.before,A=y.values||[];return new fs(A,I)}(t.endAt)),Gv(e,i,a,s,l,"F",u,d)}function Cy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ed(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mn(t.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mn(t.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mn(t.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mn(t.unaryFilter.field);return Ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(n):n.fieldFilter!==void 0?function(t){return Ce.create(Mn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(r=>Ed(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(t.compositeFilter.op))}(n):Z()}function Ry(n){return gy[n]}function Py(n){return my[n]}function ky(n){return _y[n]}function On(n){return{fieldPath:n.canonicalString()}}function Mn(n){return ze.fromServerFormat(n.fieldPath)}function Td(n){return n instanceof Ce?function(t){if(t.op==="=="){if(tu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NAN"}};if(eu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NAN"}};if(eu(t.value))return{unaryFilter:{field:On(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:On(t.field),op:Py(t.op),value:t.value}}}(n):n instanceof ft?function(t){const r=t.getFilters().map(i=>Td(i));return r.length===1?r[0]:{compositeFilter:{op:ky(t.op),filters:r}}}(n):Z()}function Id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Gt{constructor(e,t,r,i,s=X.min(),a=X.min(),l=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ny{constructor(e){this.ct=e}}function Dy(n){const e=Sy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xo(e,e.limit,"L"):e}/**
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
 */class Ly{constructor(){this.un=new Vy}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Yt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Vy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new De(Ee.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(Ee.comparator)).toArray()}}/**
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
 */class er{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new er(0)}static kn(){return new er(-1)}}/**
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
 */class Oy{constructor(){this.changes=new lr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class My{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Fy{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ur(r.mutation,i,zt.empty(),Ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const i=pn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Lr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Jt();const a=xr(),l=function(){return xr()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Ls)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Ur(f.mutation,d,f.mutation.getFieldMask(),Ke.now())):a.set(d.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var y;return l.set(d,new My(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=xr();let i=new we((a,l)=>a-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const y=(i.get(l.batchId)||oe()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,y=ld();f.forEach(I=>{if(!s.has(I)){const A=dd(t.get(I),r.get(I));A!==null&&y.set(I,A),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):O.resolve(pn());let l=-1,u=s;return a.next(d=>O.forEach(d,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(I=>{u=u.insert(f,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,oe())).next(f=>({batchId:l,changes:Xv(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let i=Lr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Lr();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const d=function(y,I){return new Ps(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,$e.newInvalidDocument(f)))});let l=Lr();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Ur(f.mutation,d,zt.empty(),Ke.now()),Ns(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class xy{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qn(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Dy(i.bundledQuery),readTime:qn(i.readTime)}}(t)),O.resolve()}}/**
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
 */class Uy{constructor(){this.overlays=new we(Q.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pn();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=pn(),s=t.length+1,a=new Q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new we((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=pn(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=pn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uy(t,r));let s=this.Ir.get(t);s===void 0&&(s=oe(),this.Ir.set(t,s)),this.Ir.set(t,s.add(r.key))}}/**
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
 */class $y{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ba{constructor(){this.Tr=new De(Pe.Er),this.dr=new De(Pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new Pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new Pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new Q(new Ee([])),r=new Pe(t,e),i=new Pe(t,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Q(new Ee([])),r=new Pe(t,e),i=new Pe(t,e+1);let s=oe();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Q.comparator(e.key,t.key)||ce(e.wr,t.wr)}static Ar(e,t){return ce(e.wr,t.wr)||Q.comparator(e.key,t.key)}}/**
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
 */class By{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new De(Pe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cy(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Pe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Pe(t,0),i=new Pe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new De(ce);return t.forEach(i=>{const s=new Pe(i,0),a=new Pe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const a=new Pe(new Q(s),0);let l=new De(ce);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Te(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,i=>{const s=new Pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new Pe(t,0),i=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jy{constructor(e){this.Mr=e,this.docs=function(){return new we(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let r=Jt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Jt();const a=t.path,l=new Q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Sv(bv(f),r)<=0||(i.has(f.key)||Ns(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Z()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qy(this)}getSize(e){return O.resolve(this.size)}}class qy extends Oy{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class zy{constructor(e){this.persistence=e,this.Nr=new lr(t=>Ma(t),Fa),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ba,this.targetCount=0,this.kr=er.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new er(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
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
 */class Gy{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Da(0),this.Kr=!1,this.Kr=!0,this.$r=new $y,this.referenceDelegate=e(this),this.Ur=new zy(this),this.indexManager=new Ly,this.remoteDocumentCache=function(i){return new jy(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ny(t),this.Gr=new xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new By(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new Hy(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class Hy extends Rv{constructor(e){super(),this.currentSequenceNumber=e}}class ja{constructor(e){this.persistence=e,this.Jr=new Ba,this.Yr=null}static Zr(e){return new ja(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class qa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=oe(),i=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qa(e,t.fromCache,r,i)}}/**
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
 */class Ky{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wy{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yp()?8:Pv(Be())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Ky;return this.Xi(e,t,a).next(l=>{if(s.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>s.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Pr()<=ne.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Vn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Pr()<=ne.DEBUG&&j("QueryEngine","Query:",Vn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Pr()<=ne.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Vn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ht(t))):O.resolve())}Yi(e,t){if(su(t))return O.resolve(null);let r=ht(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Xo(t,null,"F"),r=ht(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=oe(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,Xo(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,i){return su(t)||i.isEqual(X.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(t,s);return this.ns(t,a,r,i)?O.resolve(null):(Pr()<=ne.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vn(t)),this.rs(e,a,t,Av(i,-1)).next(l=>l))})}ts(e,t){let r=new De(od(e));return t.forEach((i,s)=>{Ns(e,s)&&(r=r.add(s))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,r){return Pr()<=ne.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Vn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Yt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Qy{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new we(ce),this._s=new lr(s=>Ma(s),Fa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fy(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Yy(n,e,t,r){return new Qy(n,e,t,r)}async function wd(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=oe();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function Ad(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Xy(n,e){const t=ie(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((f,y)=>{const I=i.get(y);if(!I)return;l.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,y)));let A=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(Le.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(y,A),function(C,R,D){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(I,A,f)&&l.push(t.Ur.updateTargetData(s,A))});let u=Jt(),d=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Jy(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(X.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(y=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.os=i,s))}function Jy(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Jt();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Zy(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function na(n,e,t){const r=ie(n),i=r.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!li(a))throw a;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function mu(n,e,t){const r=ie(n);let i=X.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const y=ie(u),I=y._s.get(f);return I!==void 0?O.resolve(y.os.get(I)):y.Ur.getTargetData(d,f)}(r,a,ht(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:X.min(),t?s:oe())).next(l=>(eE(r,Wv(e),l),{documents:l,Ts:s})))}function eE(n,e,t){let r=n.us.get(e)||X.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.us.set(e,r)}class _u{constructor(){this.activeTargetIds=ey()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tE{constructor(){this.so=new _u,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new _u,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nE{_o(e){}shutdown(){}}/**
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
 */class vu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ji=null;function Co(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
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
 */const rE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const xe="WebChannelConnection";class sE extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,r,i,s,a){const l=Co(),u=this.xo(t,r.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(t,u,d,i).then(f=>(j("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Yn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(t,r,i,s,a,l){return this.Mo(t,r,i,s,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,r){const i=rE[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const s=Co();return new Promise((a,l)=>{const u=new Gh;u.setWithCredentials(!0),u.listenOnce(Hh.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Yi.NO_ERROR:const f=u.getResponseJson();j(xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Yi.TIMEOUT:j(xe,`RPC '${e}' ${s} timed out`),l(new H(x.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const y=u.getStatus();if(j(xe,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const b=function(R){const D=R.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(D)>=0?D:x.UNKNOWN}(A.status);l(new H(b,A.message))}else l(new H(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(x.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{j(xe,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);j(xe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Co(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qh(),l=Wh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");j(xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let I=!1,A=!1;const b=new iE({Io:R=>{A?j(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(I||(j(xe,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),j(xe,`RPC '${e}' stream ${i} sending:`,R),y.send(R))},To:()=>y.close()}),C=(R,D,N)=>{R.listen(D,k=>{try{N(k)}catch(L){setTimeout(()=>{throw L},0)}})};return C(y,Dr.EventType.OPEN,()=>{A||(j(xe,`RPC '${e}' stream ${i} transport opened.`),b.yo())}),C(y,Dr.EventType.CLOSE,()=>{A||(A=!0,j(xe,`RPC '${e}' stream ${i} transport closed`),b.So())}),C(y,Dr.EventType.ERROR,R=>{A||(A=!0,Yn(xe,`RPC '${e}' stream ${i} transport errored:`,R),b.So(new H(x.UNAVAILABLE,"The operation could not be completed")))}),C(y,Dr.EventType.MESSAGE,R=>{var D;if(!A){const N=R.data[0];Te(!!N);const k=N,L=k.error||((D=k[0])===null||D===void 0?void 0:D.error);if(L){j(xe,`RPC '${e}' stream ${i} received error:`,L);const M=L.status;let V=function(v){const T=be[v];if(T!==void 0)return pd(T)}(M),_=L.message;V===void 0&&(V=x.INTERNAL,_="Unknown error status: "+M+" with message "+L.message),A=!0,b.So(new H(V,_)),y.close()}else j(xe,`RPC '${e}' stream ${i} received:`,N),b.bo(N)}}),C(l,Kh.STAT_EVENT,R=>{R.stat===Go.PROXY?j(xe,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===Go.NOPROXY&&j(xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Ro(){return typeof document<"u"?document:null}/**
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
 */function bd(n){return new vy(n,!0)}/**
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
 */class Sd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class oE{constructor(e,t,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Sd(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Nt(t.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new H(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aE extends oE{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=wy(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?qn(a.readTime):X.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=gu(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Yo(u)?{documents:Ay(s,u)}:{query:by(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ey(s,a.resumeToken);const d=ea(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){l.readTime=yy(s,a.snapshotVersion.toTimestamp());const d=ea(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Cy(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=gu(this.serializer),t.removeTarget=e,this.a_(t)}}/**
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
 */class lE extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,ta(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(x.UNKNOWN,s.toString())})}Lo(e,t,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ta(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(x.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nt(t),this.D_=!1):j("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class uE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{hi(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.L_.add(4),await ui(d),d.q_.set("Unknown"),d.L_.delete(4),await Os(d)}(this))})}),this.q_=new cE(r,i)}}async function Os(n){if(hi(n))for(const e of n.B_)await e(!0)}async function ui(n){for(const e of n.B_)await e(!1)}function Cd(n,e){const t=ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Ka(t)?Ha(t):cr(t).r_()&&Ga(t,e))}function za(n,e){const t=ie(n),r=cr(t);t.N_.delete(e),r.r_()&&Rd(t,e),t.N_.size===0&&(r.r_()?r.o_():hi(t)&&t.q_.set("Unknown"))}function Ga(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}cr(n).A_(e)}function Rd(n,e){n.Q_.xe(e),cr(n).R_(e)}function Ha(n){n.Q_=new py({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),cr(n).start(),n.q_.v_()}function Ka(n){return hi(n)&&!cr(n).n_()&&n.N_.size>0}function hi(n){return ie(n).L_.size===0}function Pd(n){n.Q_=void 0}async function hE(n){n.q_.set("Online")}async function dE(n){n.N_.forEach((e,t)=>{Ga(n,e)})}async function fE(n,e){Pd(n),Ka(n)?(n.q_.M_(e),Ha(n)):n.q_.set("Unknown")}async function pE(n,e,t){if(n.q_.set("Online"),e instanceof md&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yu(n,r)}else if(e instanceof Ji?n.Q_.Ke(e):e instanceof gd?n.Q_.He(e):n.Q_.We(e),!t.isEqual(X.min()))try{const r=await Ad(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),Rd(s,u);const y=new Gt(f.target,u,d,f.sequenceNumber);Ga(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await yu(n,r)}}async function yu(n,e,t){if(!li(e))throw e;n.L_.add(1),await ui(n),n.q_.set("Offline"),t||(t=()=>Ad(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Os(n)})}async function Eu(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=hi(t);t.L_.add(3),await ui(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Os(t)}async function gE(n,e){const t=ie(n);e?(t.L_.delete(2),await Os(t)):e||(t.L_.add(2),await ui(t),t.q_.set("Unknown"))}function cr(n){return n.K_||(n.K_=function(t,r,i){const s=ie(t);return s.w_(),new aE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Eo:hE.bind(null,n),Ro:dE.bind(null,n),mo:fE.bind(null,n),d_:pE.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Ka(n)?Ha(n):n.q_.set("Unknown")):(await n.K_.stop(),Pd(n))})),n.K_}/**
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
 */class Wa{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Wa(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kd(n,e){if(Nt("AsyncQueue",`${e}: ${n}`),li(n))return new H(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class zn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Lr(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Tu{constructor(){this.W_=new we(Q.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class tr{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new tr(e,t,zn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class mE{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _E{constructor(){this.queries=Iu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=ie(t),s=i.queries;i.queries=Iu(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(x.ABORTED,"Firestore shutting down"))}}function Iu(){return new lr(n=>sd(n),ks)}async function vE(n,e){const t=ie(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new mE,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=kd(a,`Initialization of query '${Vn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Qa(t)}async function yE(n,e){const t=ie(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function EE(n,e){const t=ie(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Qa(t)}function TE(n,e,t){const r=ie(n),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(t);r.queries.delete(e)}function Qa(n){n.Y_.forEach(e=>{e.next()})}var ra,wu;(wu=ra||(ra={})).ea="default",wu.Cache="cache";class IE{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new tr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ra.Cache}}/**
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
 */class Nd{constructor(e){this.key=e}}class Dd{constructor(e){this.key=e}}class wE{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=od(e),this.Ra=new zn(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Tu,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const I=i.get(f),A=Ns(this.query,y)?y:null,b=!!I&&this.mutatedKeys.has(I.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;I&&A?I.data.isEqual(A.data)?b!==C&&(r.track({type:3,doc:A}),R=!0):this.ga(I,A)||(r.track({type:2,doc:A}),R=!0,(u&&this.Aa(A,u)>0||d&&this.Aa(A,d)<0)&&(l=!0)):!I&&A?(r.track({type:0,doc:A}),R=!0):I&&!A&&(r.track({type:1,doc:I}),R=!0,(u||d)&&(l=!0)),R&&(A?(a=a.add(A),s=C?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(A,b){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return C(A)-C(b)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new tr(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Tu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Dd(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Nd(r))}),t}ba(e){this.Ta=e.Ts,this.da=oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return tr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class AE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bE{constructor(e){this.key=e,this.va=!1}}class SE{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new lr(l=>sd(l),ks),this.Ma=new Map,this.xa=new Set,this.Oa=new we(Q.comparator),this.Na=new Map,this.La=new Ba,this.Ba={},this.ka=new Map,this.qa=er.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function CE(n,e,t=!0){const r=Fd(n);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Ld(r,e,t,!0),i}async function RE(n,e){const t=Fd(n);await Ld(t,e,!0,!1)}async function Ld(n,e,t,r){const i=await Zy(n.localStore,ht(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await PE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Cd(n.remoteStore,i),l}async function PE(n,e,t,r,i){n.Ka=(y,I,A)=>async function(C,R,D,N){let k=R.view.ma(D);k.ns&&(k=await mu(C.localStore,R.query,!1).then(({documents:_})=>R.view.ma(_,k)));const L=N&&N.targetChanges.get(R.targetId),M=N&&N.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(k,C.isPrimaryClient,L,M);return bu(C,R.targetId,V.wa),V.snapshot}(n,y,I,A);const s=await mu(n.localStore,e,!0),a=new wE(e,s.Ts),l=a.ma(s.documents),u=ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);bu(n,t,d.wa);const f=new AE(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function kE(n,e,t){const r=ie(n),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!ks(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await na(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&za(r.remoteStore,i.targetId),ia(r,i.targetId)}).catch(Na)):(ia(r,i.targetId),await na(r.localStore,i.targetId,!0))}async function NE(n,e){const t=ie(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),za(t.remoteStore,r.targetId))}async function Vd(n,e){const t=ie(n);try{const r=await Xy(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Te(a.va):i.removedDocuments.size>0&&(Te(a.va),a.va=!1))}),await Md(t,r,e)}catch(r){await Na(r)}}function Au(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=ie(a);u.onlineState=l;let d=!1;u.queries.forEach((f,y)=>{for(const I of y.j_)I.Z_(l)&&(d=!0)}),d&&Qa(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DE(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new we(Q.comparator);a=a.insert(s,$e.newNoDocument(s,X.min()));const l=oe().add(s),u=new Vs(X.min(),new Map,new we(ce),a,l);await Vd(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ya(r)}else await na(r.localStore,e,!1).then(()=>ia(r,e,t)).catch(Na)}function ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Od(n,r)})}function Od(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(za(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Ya(n))}function bu(n,e,t){for(const r of t)r instanceof Nd?(n.La.addReference(r.key,e),LE(n,r)):r instanceof Dd?(j("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Od(n,r.key)):Z()}function LE(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(j("SyncEngine","New document in limbo: "+t),n.xa.add(r),Ya(n))}function Ya(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new Q(Ee.fromString(e)),r=n.qa.next();n.Na.set(r,new bE(t)),n.Oa=n.Oa.insert(t,r),Cd(n.remoteStore,new Gt(ht(id(t.path)),r,"TargetPurposeLimboResolution",Da.oe))}}async function Md(n,e,t){const r=ie(n),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=qa.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=ie(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>O.forEach(d,I=>O.forEach(I.$i,A=>f.persistence.referenceDelegate.addReference(y,I.targetId,A)).next(()=>O.forEach(I.Ui,A=>f.persistence.referenceDelegate.removeReference(y,I.targetId,A)))))}catch(y){if(!li(y))throw y;j("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const A=f.os.get(I),b=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(b);f.os=f.os.insert(I,C)}}}(r.localStore,s))}async function VE(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await wd(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(x.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Md(t,r.hs)}}function OE(n,e){const t=ie(n),r=t.Na.get(e);if(r&&r.va)return oe().add(r.key);{let i=oe();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function Fd(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DE.bind(null,e),e.Ca.d_=EE.bind(null,e.eventManager),e.Ca.$a=TE.bind(null,e.eventManager),e}class _s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Yy(this.persistence,new Wy,e.initialUser,this.serializer)}Ga(e){return new Gy(ja.Zr,this.serializer)}Wa(e){return new tE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_s.provider={build:()=>new _s};class sa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Au(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await gE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _E}()}createDatastore(e){const t=bd(e.databaseInfo.databaseId),r=function(s){return new sE(s)}(e.databaseInfo);return function(s,a,l,u){return new lE(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new uE(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Au(this.syncEngine,t,0),function(){return vu.D()?new vu:new nE}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,f){const y=new SE(i,s,a,l,u,d);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ie(i);j("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ui(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}sa.provider={build:()=>new sa};/**
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
 */class ME{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class FE{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ue.UNAUTHENTICATED,this.clientId=Iv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{j("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=kd(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Po(n,e){n.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Su(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xE(n);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Eu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Eu(e.remoteStore,i)),n._onlineComponents=e}async function xE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Yn("Error using user provided cache. Falling back to memory cache: "+t),await Po(n,new _s)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Po(n,new _s);return n._offlineComponents}async function UE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Su(n,new sa))),n._onlineComponents}async function $E(n){const e=await UE(n),t=e.eventManager;return t.onListen=CE.bind(null,e.syncEngine),t.onUnlisten=kE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NE.bind(null,e.syncEngine),t}function BE(n,e,t={}){const r=new mn;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new ME({next:I=>{f.Za(),a.enqueueAndForget(()=>yE(s,y)),I.fromCache&&u.source==="server"?d.reject(new H(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new IE(l,f,{includeMetadataChanges:!0,_a:!0});return vE(s,y)}(await $E(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function xd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Cu=new Map;/**
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
 */function jE(n,e,t){if(!t)throw new H(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qE(n,e,t,r){if(e===!0&&r===!0)throw new H(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ru(n){if(Q.isDocumentKey(n))throw new H(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function zE(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z()}function oa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zE(n);throw new H(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Pu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pv;switch(r.type){case"firstParty":return new vv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cu.get(t);r&&(j("ComponentProvider","Removing Datastore"),Cu.delete(t),r.terminate())}(this),Promise.resolve()}}function GE(n,e,t,r={}){var i;const s=(n=oa(n,Xa))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ue.MOCK_USER;else{l=dp(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ue(d)}n._authCredentials=new gv(new Yh(l,u))}}/**
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
 */class Ms{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ms(this.firestore,e,this._query)}}class ur{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ur(this.firestore,e,this._key)}}class Gn extends Ms{constructor(e,t,r){super(e,t,id(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ur(this.firestore,null,new Q(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function aw(n,e,...t){if(n=ot(n),jE("collection","path",e),n instanceof Xa){const r=Ee.fromString(e,...t);return Ru(r),new Gn(n,null,r)}{if(!(n instanceof ur||n instanceof Gn))throw new H(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return Ru(r),new Gn(n.firestore,null,r)}}/**
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
 */class ku{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Sd(this,"async_queue_retry"),this.Vu=()=>{const r=Ro();r&&j("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ro();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ro();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new mn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!li(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Nt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Wa.createAndSchedule(this,e,t,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ud extends Xa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ku,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ku(e),this._firestoreClient=void 0,await e}}}function lw(n,e){const t=typeof n=="object"?n:ah(),r=typeof n=="string"?n:"(default)",i=va(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=up("firestore");s&&GE(i,...s)}return i}function HE(n){if(n._terminated)throw new H(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KE(n),n._firestoreClient}function KE(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new Dv(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new FE(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vs(Le.fromBase64String(e))}catch(t){throw new H(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vs(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $d{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class WE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class QE{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const YE=new RegExp("[~\\*/\\[\\]]");function XE(n,e,t){if(e.search(YE)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new $d(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Nu(n,e,t,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new H(x.INVALID_ARGUMENT,s+n+a)}/**
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
 */class Bd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ur(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class JE extends Bd{data(){return super.data()}}function jd(n,e){return typeof e=="string"?XE(n,e):e instanceof $d?e._internalPath:e._delegate._internalPath}/**
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
 */function ZE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eT{convertValue(e,t="none"){switch(An(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Ie(a.doubleValue));return new QE(s)}convertGeoPoint(e){return new WE(Ie(e.latitude),Ie(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Va(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Gr(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ee.fromString(e);Te(Id(r));const i=new Hr(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(t)||Nt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class qi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tT extends Bd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends tT{data(e={}){return super.data(e)}}class nT{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Zi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Zi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new qi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:rT(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class iT extends eT{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ur(this.firestore,null,t)}}function cw(n){n=oa(n,Ms);const e=oa(n.firestore,Ud),t=HE(e),r=new iT(e);return ZE(n._query),BE(t,n._query).then(i=>new nT(e,r,n,i))}(function(e,t=!0){(function(i){ar=i})(sr),Wn(new yn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ud(new mv(r.getProvider("auth-internal")),new Ev(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Qt(Qc,"4.7.3",e),Qt(Qc,"4.7.3","esm2017")})();function sT(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function oT(n,e,t){return e&&sT(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Du="(prefers-reduced-motion: reduce)",Un=1,aT=2,nr=3,hr=4,di=5,es=6,ys=7,lT={CREATED:Un,MOUNTED:aT,IDLE:nr,MOVING:hr,SCROLLING:di,DRAGGING:es,DESTROYED:ys};function Dt(n){n.length=0}function sn(n,e,t){return Array.prototype.slice.call(n,e,t)}function pe(n){return n.bind.apply(n,[null].concat(sn(arguments,1)))}var qd=setTimeout,aa=function(){};function Lu(n){return requestAnimationFrame(n)}function Fs(n,e){return typeof e===n}function Wr(n){return!Za(n)&&Fs("object",n)}var Ja=Array.isArray,zd=pe(Fs,"function"),Zt=pe(Fs,"string"),fi=pe(Fs,"undefined");function Za(n){return n===null}function Gd(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function pi(n){return Ja(n)?n:[n]}function Ze(n,e){pi(n).forEach(e)}function el(n,e){return n.indexOf(e)>-1}function ts(n,e){return n.push.apply(n,pi(e)),n}function bt(n,e,t){n&&Ze(e,function(r){r&&n.classList[t?"add":"remove"](r)})}function pt(n,e){bt(n,Zt(e)?e.split(" "):e,!0)}function gi(n,e){Ze(e,n.appendChild.bind(n))}function tl(n,e){Ze(n,function(t){var r=(e||t).parentNode;r&&r.insertBefore(t,e)})}function Qr(n,e){return Gd(n)&&(n.msMatchesSelector||n.matches).call(n,e)}function Hd(n,e){var t=n?sn(n.children):[];return e?t.filter(function(r){return Qr(r,e)}):t}function mi(n,e){return e?Hd(n,e)[0]:n.firstElementChild}var Yr=Object.keys;function vn(n,e,t){return n&&(t?Yr(n).reverse():Yr(n)).forEach(function(r){r!=="__proto__"&&e(n[r],r)}),n}function Xr(n){return sn(arguments,1).forEach(function(e){vn(e,function(t,r){n[r]=e[r]})}),n}function Ht(n){return sn(arguments,1).forEach(function(e){vn(e,function(t,r){Ja(t)?n[r]=t.slice():Wr(t)?n[r]=Ht({},Wr(n[r])?n[r]:{},t):n[r]=t})}),n}function Vu(n,e){Ze(e||Yr(n),function(t){delete n[t]})}function gt(n,e){Ze(n,function(t){Ze(e,function(r){t&&t.removeAttribute(r)})})}function J(n,e,t){Wr(e)?vn(e,function(r,i){J(n,i,r)}):Ze(n,function(r){Za(t)||t===""?gt(r,e):r.setAttribute(e,String(t))})}function Hn(n,e,t){var r=document.createElement(n);return e&&(Zt(e)?pt(r,e):J(r,e)),t&&gi(t,r),r}function nt(n,e,t){if(fi(t))return getComputedStyle(n)[e];Za(t)||(n.style[e]=""+t)}function Jr(n,e){nt(n,"display",e)}function Kd(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function it(n,e){return n.getAttribute(e)}function Ou(n,e){return n&&n.classList.contains(e)}function Ye(n){return n.getBoundingClientRect()}function bn(n){Ze(n,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Wd(n){return mi(new DOMParser().parseFromString(n,"text/html").body)}function Tt(n,e){n.preventDefault(),e&&(n.stopPropagation(),n.stopImmediatePropagation())}function Qd(n,e){return n&&n.querySelector(e)}function nl(n,e){return e?sn(n.querySelectorAll(e)):[]}function St(n,e){bt(n,e,!1)}function la(n){return n.timeStamp}function hn(n){return Zt(n)?n:n?n+"px":""}var _i="splide",rl="data-"+_i;function $r(n,e){if(!n)throw new Error("["+_i+"] "+(e||""))}var en=Math.min,Es=Math.max,Ts=Math.floor,Zr=Math.ceil,He=Math.abs;function Yd(n,e,t){return He(n-e)<t}function ns(n,e,t,r){var i=en(e,t),s=Es(e,t);return r?i<n&&n<s:i<=n&&n<=s}function Fn(n,e,t){var r=en(e,t),i=Es(e,t);return en(Es(r,n),i)}function ca(n){return+(n>0)-+(n<0)}function ua(n,e){return Ze(e,function(t){n=n.replace("%s",""+t)}),n}function il(n){return n<10?"0"+n:""+n}var Mu={};function cT(n){return""+n+il(Mu[n]=(Mu[n]||0)+1)}function Xd(){var n=[];function e(a,l,u,d){i(a,l,function(f,y,I){var A="addEventListener"in f,b=A?f.removeEventListener.bind(f,y,u,d):f.removeListener.bind(f,u);A?f.addEventListener(y,u,d):f.addListener(u),n.push([f,y,I,u,b])})}function t(a,l,u){i(a,l,function(d,f,y){n=n.filter(function(I){return I[0]===d&&I[1]===f&&I[2]===y&&(!u||I[3]===u)?(I[4](),!1):!0})})}function r(a,l,u){var d,f=!0;return typeof CustomEvent=="function"?d=new CustomEvent(l,{bubbles:f,detail:u}):(d=document.createEvent("CustomEvent"),d.initCustomEvent(l,f,!1,u)),a.dispatchEvent(d),d}function i(a,l,u){Ze(a,function(d){d&&Ze(l,function(f){f.split(" ").forEach(function(y){var I=y.split(".");u(d,I[0],I[1])})})})}function s(){n.forEach(function(a){a[4]()}),Dt(n)}return{bind:e,unbind:t,dispatch:r,destroy:s}}var Cn="mounted",Fu="ready",tn="move",vi="moved",Jd="click",uT="active",hT="inactive",dT="visible",fT="hidden",Re="refresh",We="updated",ei="resize",sl="resized",pT="drag",gT="dragging",mT="dragged",ol="scroll",dr="scrolled",_T="overflow",Zd="destroy",vT="arrows:mounted",yT="arrows:updated",ET="pagination:mounted",TT="pagination:updated",ef="navigation:mounted",tf="autoplay:play",IT="autoplay:playing",nf="autoplay:pause",rf="lazyload:loaded",sf="sk",of="sh",Is="ei";function _e(n){var e=n?n.event.bus:document.createDocumentFragment(),t=Xd();function r(s,a){t.bind(e,pi(s).join(" "),function(l){a.apply(a,Ja(l.detail)?l.detail:[])})}function i(s){t.dispatch(e,s,sn(arguments,1))}return n&&n.event.on(Zd,t.destroy),Xr(t,{bus:e,on:r,off:pe(t.unbind,e),emit:i})}function xs(n,e,t,r){var i=Date.now,s,a=0,l,u=!0,d=0;function f(){if(!u){if(a=n?en((i()-s)/n,1):1,t&&t(a),a>=1&&(e(),s=i(),r&&++d>=r))return I();l=Lu(f)}}function y(D){D||b(),s=i()-(D?a*n:0),u=!1,l=Lu(f)}function I(){u=!0}function A(){s=i(),a=0,t&&t(a)}function b(){l&&cancelAnimationFrame(l),a=0,l=0,u=!0}function C(D){n=D}function R(){return u}return{start:y,rewind:A,pause:I,cancel:b,set:C,isPaused:R}}function wT(n){var e=n;function t(i){e=i}function r(i){return el(pi(i),e)}return{set:t,is:r}}function AT(n,e){var t=xs(0,n,null,1);return function(){t.isPaused()&&t.start()}}function bT(n,e,t){var r=n.state,i=t.breakpoints||{},s=t.reducedMotion||{},a=Xd(),l=[];function u(){var b=t.mediaQuery==="min";Yr(i).sort(function(C,R){return b?+C-+R:+R-+C}).forEach(function(C){f(i[C],"("+(b?"min":"max")+"-width:"+C+"px)")}),f(s,Du),y()}function d(b){b&&a.destroy()}function f(b,C){var R=matchMedia(C);a.bind(R,"change",y),l.push([b,R])}function y(){var b=r.is(ys),C=t.direction,R=l.reduce(function(D,N){return Ht(D,N[1].matches?N[0]:{})},{});Vu(t),A(R),t.destroy?n.destroy(t.destroy==="completely"):b?(d(!0),n.mount()):C!==t.direction&&n.refresh()}function I(b){matchMedia(Du).matches&&(b?Ht(t,s):Vu(t,Yr(s)))}function A(b,C,R){Ht(t,b),C&&Ht(Object.getPrototypeOf(t),b),(R||!r.is(Un))&&n.emit(We,t)}return{setup:u,destroy:d,reduce:I,set:A}}var Us="Arrow",$s=Us+"Left",Bs=Us+"Right",af=Us+"Up",lf=Us+"Down",xu="rtl",js="ttb",ko={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[af,Bs],ArrowRight:[lf,$s]};function ST(n,e,t){function r(s,a,l){l=l||t.direction;var u=l===xu&&!a?1:l===js?0:-1;return ko[s]&&ko[s][u]||s.replace(/width|left|right/i,function(d,f){var y=ko[d.toLowerCase()][u]||d;return f>0?y.charAt(0).toUpperCase()+y.slice(1):y})}function i(s){return s*(t.direction===xu?1:-1)}return{resolve:r,orient:i}}var Rt="role",Kn="tabindex",CT="disabled",at="aria-",yi=at+"controls",cf=at+"current",Uu=at+"selected",Xe=at+"label",al=at+"labelledby",uf=at+"hidden",ll=at+"orientation",ti=at+"roledescription",$u=at+"live",Bu=at+"busy",ju=at+"atomic",cl=[Rt,Kn,CT,yi,cf,Xe,al,uf,ll,ti],mt=_i+"__",on="is-",No=_i,qu=mt+"track",RT=mt+"list",qs=mt+"slide",hf=qs+"--clone",PT=qs+"__container",ul=mt+"arrows",zs=mt+"arrow",df=zs+"--prev",ff=zs+"--next",Gs=mt+"pagination",pf=Gs+"__page",kT=mt+"progress",NT=kT+"__bar",DT=mt+"toggle",LT=mt+"spinner",VT=mt+"sr",OT=on+"initialized",Sn=on+"active",gf=on+"prev",mf=on+"next",ha=on+"visible",da=on+"loading",_f=on+"focus-in",vf=on+"overflow",MT=[Sn,ha,gf,mf,da,_f,vf],FT={slide:qs,clone:hf,arrows:ul,arrow:zs,prev:df,next:ff,pagination:Gs,page:pf,spinner:LT};function xT(n,e){if(zd(n.closest))return n.closest(e);for(var t=n;t&&t.nodeType===1&&!Qr(t,e);)t=t.parentElement;return t}var UT=5,zu=200,yf="touchstart mousedown",Do="touchmove mousemove",Lo="touchend touchcancel mouseup click";function $T(n,e,t){var r=_e(n),i=r.on,s=r.bind,a=n.root,l=t.i18n,u={},d=[],f=[],y=[],I,A,b;function C(){k(),L(),N()}function R(){i(Re,D),i(Re,C),i(We,N),s(document,yf+" keydown",function(_){b=_.type==="keydown"},{capture:!0}),s(a,"focusin",function(){bt(a,_f,!!b)})}function D(_){var g=cl.concat("style");Dt(d),St(a,f),St(I,y),gt([I,A],g),gt(a,_?g:["style",ti])}function N(){St(a,f),St(I,y),f=V(No),y=V(qu),pt(a,f),pt(I,y),J(a,Xe,t.label),J(a,al,t.labelledby)}function k(){I=M("."+qu),A=mi(I,"."+RT),$r(I&&A,"A track/list element is missing."),ts(d,Hd(A,"."+qs+":not(."+hf+")")),vn({arrows:ul,pagination:Gs,prev:df,next:ff,bar:NT,toggle:DT},function(_,g){u[g]=M("."+_)}),Xr(u,{root:a,track:I,list:A,slides:d})}function L(){var _=a.id||cT(_i),g=t.role;a.id=_,I.id=I.id||_+"-track",A.id=A.id||_+"-list",!it(a,Rt)&&a.tagName!=="SECTION"&&g&&J(a,Rt,g),J(a,ti,l.carousel),J(A,Rt,"presentation")}function M(_){var g=Qd(a,_);return g&&xT(g,"."+No)===a?g:void 0}function V(_){return[_+"--"+t.type,_+"--"+t.direction,t.drag&&_+"--draggable",t.isNavigation&&_+"--nav",_===No&&Sn]}return Xr(u,{setup:C,mount:R,destroy:D})}var rr="slide",fr="loop",Ei="fade";function BT(n,e,t,r){var i=_e(n),s=i.on,a=i.emit,l=i.bind,u=n.Components,d=n.root,f=n.options,y=f.isNavigation,I=f.updateOnMove,A=f.i18n,b=f.pagination,C=f.slideFocus,R=u.Direction.resolve,D=it(r,"style"),N=it(r,Xe),k=t>-1,L=mi(r,"."+PT),M;function V(){k||(r.id=d.id+"-slide"+il(e+1),J(r,Rt,b?"tabpanel":"group"),J(r,ti,A.slide),J(r,Xe,N||ua(A.slideLabel,[e+1,n.length]))),_()}function _(){l(r,"click",pe(a,Jd,K)),l(r,"keydown",pe(a,sf,K)),s([vi,of,dr],E),s(ef,v),I&&s(tn,T)}function g(){M=!0,i.destroy(),St(r,MT),gt(r,cl),J(r,"style",D),J(r,Xe,N||"")}function v(){var q=n.splides.map(function(U){var z=U.splide.Components.Slides.getAt(e);return z?z.slide.id:""}).join(" ");J(r,Xe,ua(A.slideX,(k?t:e)+1)),J(r,yi,q),J(r,Rt,C?"button":""),C&&gt(r,ti)}function T(){M||E()}function E(){if(!M){var q=n.index;w(),m(),bt(r,gf,e===q-1),bt(r,mf,e===q+1)}}function w(){var q=Y();q!==Ou(r,Sn)&&(bt(r,Sn,q),J(r,cf,y&&q||""),a(q?uT:hT,K))}function m(){var q=me(),U=!q&&(!Y()||k);if(n.state.is([hr,di])||J(r,uf,U||""),J(nl(r,f.focusableNodes||""),Kn,U?-1:""),C&&J(r,Kn,U?-1:0),q!==Ou(r,ha)&&(bt(r,ha,q),a(q?dT:fT,K)),!q&&document.activeElement===r){var z=u.Slides.getAt(n.index);z&&Kd(z.slide)}}function G(q,U,z){nt(z&&L||r,q,U)}function Y(){var q=n.index;return q===e||f.cloneStatus&&q===t}function me(){if(n.is(Ei))return Y();var q=Ye(u.Elements.track),U=Ye(r),z=R("left",!0),ee=R("right",!0);return Ts(q[z])<=Zr(U[z])&&Ts(U[ee])<=Zr(q[ee])}function he(q,U){var z=He(q-e);return!k&&(f.rewind||n.is(fr))&&(z=en(z,n.length-z)),z<=U}var K={index:e,slideIndex:t,slide:r,container:L,isClone:k,mount:V,destroy:g,update:E,style:G,isWithin:he};return K}function jT(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=r.bind,l=e.Elements,u=l.slides,d=l.list,f=[];function y(){I(),i(Re,A),i(Re,I)}function I(){u.forEach(function(E,w){C(E,w,-1)})}function A(){M(function(E){E.destroy()}),Dt(f)}function b(){M(function(E){E.update()})}function C(E,w,m){var G=BT(n,w,m,E);G.mount(),f.push(G),f.sort(function(Y,me){return Y.index-me.index})}function R(E){return E?V(function(w){return!w.isClone}):f}function D(E){var w=e.Controller,m=w.toIndex(E),G=w.hasFocus()?1:t.perPage;return V(function(Y){return ns(Y.index,m,m+G-1)})}function N(E){return V(E)[0]}function k(E,w){Ze(E,function(m){if(Zt(m)&&(m=Wd(m)),Gd(m)){var G=u[w];G?tl(m,G):gi(d,m),pt(m,t.classes.slide),g(m,pe(s,ei))}}),s(Re)}function L(E){bn(V(E).map(function(w){return w.slide})),s(Re)}function M(E,w){R(w).forEach(E)}function V(E){return f.filter(zd(E)?E:function(w){return Zt(E)?Qr(w.slide,E):el(pi(E),w.index)})}function _(E,w,m){M(function(G){G.style(E,w,m)})}function g(E,w){var m=nl(E,"img"),G=m.length;G?m.forEach(function(Y){a(Y,"load error",function(){--G||w()})}):w()}function v(E){return E?u.length:f.length}function T(){return f.length>t.perPage}return{mount:y,destroy:A,update:b,register:C,get:R,getIn:D,getAt:N,add:k,remove:L,forEach:M,filter:V,style:_,getLength:v,isEnough:T}}function qT(n,e,t){var r=_e(n),i=r.on,s=r.bind,a=r.emit,l=e.Slides,u=e.Direction.resolve,d=e.Elements,f=d.root,y=d.track,I=d.list,A=l.getAt,b=l.style,C,R,D;function N(){k(),s(window,"resize load",AT(pe(a,ei))),i([We,Re],k),i(ei,L)}function k(){C=t.direction===js,nt(f,"maxWidth",hn(t.width)),nt(y,u("paddingLeft"),M(!1)),nt(y,u("paddingRight"),M(!0)),L(!0)}function L(K){var q=Ye(f);(K||R.width!==q.width||R.height!==q.height)&&(nt(y,"height",V()),b(u("marginRight"),hn(t.gap)),b("width",g()),b("height",v(),!0),R=q,a(sl),D!==(D=he())&&(bt(f,vf,D),a(_T,D)))}function M(K){var q=t.padding,U=u(K?"right":"left");return q&&hn(q[U]||(Wr(q)?0:q))||"0px"}function V(){var K="";return C&&(K=_(),$r(K,"height or heightRatio is missing."),K="calc("+K+" - "+M(!1)+" - "+M(!0)+")"),K}function _(){return hn(t.height||Ye(I).width*t.heightRatio)}function g(){return t.autoWidth?null:hn(t.fixedWidth)||(C?"":T())}function v(){return hn(t.fixedHeight)||(C?t.autoHeight?null:T():_())}function T(){var K=hn(t.gap);return"calc((100%"+(K&&" + "+K)+")/"+(t.perPage||1)+(K&&" - "+K)+")"}function E(){return Ye(I)[u("width")]}function w(K,q){var U=A(K||0);return U?Ye(U.slide)[u("width")]+(q?0:Y()):0}function m(K,q){var U=A(K);if(U){var z=Ye(U.slide)[u("right")],ee=Ye(I)[u("left")];return He(z-ee)+(q?0:Y())}return 0}function G(K){return m(n.length-1)-m(0)+w(0,K)}function Y(){var K=A(0);return K&&parseFloat(nt(K.slide,u("marginRight")))||0}function me(K){return parseFloat(nt(y,u("padding"+(K?"Right":"Left"))))||0}function he(){return n.is(Ei)||G(!0)>E()}return{mount:N,resize:L,listSize:E,slideSize:w,sliderSize:G,totalSize:m,getPadding:me,isOverflow:he}}var zT=2;function GT(n,e,t){var r=_e(n),i=r.on,s=e.Elements,a=e.Slides,l=e.Direction.resolve,u=[],d;function f(){i(Re,y),i([We,ei],A),(d=R())&&(b(d),e.Layout.resize(!0))}function y(){I(),f()}function I(){bn(u),Dt(u),r.destroy()}function A(){var D=R();d!==D&&(d<D||!D)&&r.emit(Re)}function b(D){var N=a.get().slice(),k=N.length;if(k){for(;N.length<D;)ts(N,N);ts(N.slice(-D),N.slice(0,D)).forEach(function(L,M){var V=M<D,_=C(L.slide,M);V?tl(_,N[0].slide):gi(s.list,_),ts(u,_),a.register(_,M-D+(V?0:k),L.index)})}}function C(D,N){var k=D.cloneNode(!0);return pt(k,t.classes.clone),k.id=n.root.id+"-clone"+il(N+1),k}function R(){var D=t.clones;if(!n.is(fr))D=0;else if(fi(D)){var N=t[l("fixedWidth")]&&e.Layout.slideSize(0),k=N&&Zr(Ye(s.track)[l("width")]/N);D=k||t[l("autoWidth")]&&n.length||t.perPage*zT}return D}return{mount:f,destroy:I}}function HT(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=n.state.set,l=e.Layout,u=l.slideSize,d=l.getPadding,f=l.totalSize,y=l.listSize,I=l.sliderSize,A=e.Direction,b=A.resolve,C=A.orient,R=e.Elements,D=R.list,N=R.track,k;function L(){k=e.Transition,i([Cn,sl,We,Re],M)}function M(){e.Controller.isBusy()||(e.Scroll.cancel(),_(n.index),e.Slides.update())}function V(U,z,ee,se){U!==z&&K(U>ee)&&(E(),g(T(G(),U>ee),!0)),a(hr),s(tn,z,ee,U),k.start(z,function(){a(nr),s(vi,z,ee,U),se&&se()})}function _(U){g(m(U,!0))}function g(U,z){if(!n.is(Ei)){var ee=z?U:v(U);nt(D,"transform","translate"+b("X")+"("+ee+"px)"),U!==ee&&s(of)}}function v(U){if(n.is(fr)){var z=w(U),ee=z>e.Controller.getEnd(),se=z<0;(se||ee)&&(U=T(U,ee))}return U}function T(U,z){var ee=U-he(z),se=I();return U-=C(se*(Zr(He(ee)/se)||1))*(z?1:-1),U}function E(){g(G(),!0),k.cancel()}function w(U){for(var z=e.Slides.get(),ee=0,se=1/0,Se=0;Se<z.length;Se++){var Ge=z[Se].index,$=He(m(Ge,!0)-U);if($<=se)se=$,ee=Ge;else break}return ee}function m(U,z){var ee=C(f(U-1)-me(U));return z?Y(ee):ee}function G(){var U=b("left");return Ye(D)[U]-Ye(N)[U]+C(d(!1))}function Y(U){return t.trimSpace&&n.is(rr)&&(U=Fn(U,0,C(I(!0)-y()))),U}function me(U){var z=t.focus;return z==="center"?(y()-u(U,!0))/2:+z*u(U)||0}function he(U){return m(U?e.Controller.getEnd():0,!!t.trimSpace)}function K(U){var z=C(T(G(),U));return U?z>=0:z<=D[b("scrollWidth")]-Ye(N)[b("width")]}function q(U,z){z=fi(z)?G():z;var ee=U!==!0&&C(z)<C(he(!1)),se=U!==!1&&C(z)>C(he(!0));return ee||se}return{mount:L,move:V,jump:_,translate:g,shift:T,cancel:E,toIndex:w,toPosition:m,getPosition:G,getLimit:he,exceededLimit:q,reposition:M}}function KT(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=e.Move,l=a.getPosition,u=a.getLimit,d=a.toPosition,f=e.Slides,y=f.isEnough,I=f.getLength,A=t.omitEnd,b=n.is(fr),C=n.is(rr),R=pe(G,!1),D=pe(G,!0),N=t.start||0,k,L=N,M,V,_;function g(){v(),i([We,Re,Is],v),i(sl,T)}function v(){M=I(!0),V=t.perMove,_=t.perPage,k=K();var $=Fn(N,0,A?k:M-1);$!==N&&(N=$,a.reposition())}function T(){k!==K()&&s(Is)}function E($,le,Ve){if(!Ge()){var ve=m($),Ae=he(ve);Ae>-1&&(le||Ae!==N)&&(ee(Ae),a.move(ve,Ae,L,Ve))}}function w($,le,Ve,ve){e.Scroll.scroll($,le,Ve,function(){var Ae=he(a.toIndex(l()));ee(A?en(Ae,k):Ae),ve&&ve()})}function m($){var le=N;if(Zt($)){var Ve=$.match(/([+\-<>])(\d+)?/)||[],ve=Ve[1],Ae=Ve[2];ve==="+"||ve==="-"?le=Y(N+ +(""+ve+(+Ae||1)),N):ve===">"?le=Ae?q(+Ae):R(!0):ve==="<"&&(le=D(!0))}else le=b?$:Fn($,0,k);return le}function G($,le){var Ve=V||(Se()?1:_),ve=Y(N+Ve*($?-1:1),N,!(V||Se()));return ve===-1&&C&&!Yd(l(),u(!$),1)?$?0:k:le?ve:he(ve)}function Y($,le,Ve){if(y()||Se()){var ve=me($);ve!==$&&(le=$,$=ve,Ve=!1),$<0||$>k?!V&&(ns(0,$,le,!0)||ns(k,le,$,!0))?$=q(U($)):b?$=Ve?$<0?-(M%_||_):M:$:t.rewind?$=$<0?k:0:$=-1:Ve&&$!==le&&($=q(U(le)+($<le?-1:1)))}else $=-1;return $}function me($){if(C&&t.trimSpace==="move"&&$!==N)for(var le=l();le===d($,!0)&&ns($,0,n.length-1,!t.rewind);)$<N?--$:++$;return $}function he($){return b?($+M)%M||0:$}function K(){for(var $=M-(Se()||b&&V?1:_);A&&$-- >0;)if(d(M-1,!0)!==d($,!0)){$++;break}return Fn($,0,M-1)}function q($){return Fn(Se()?$:_*$,0,k)}function U($){return Se()?en($,k):Ts(($>=k?M-1:$)/_)}function z($){var le=a.toIndex($);return C?Fn(le,0,k):le}function ee($){$!==N&&(L=N,N=$)}function se($){return $?L:N}function Se(){return!fi(t.focus)||t.isNavigation}function Ge(){return n.state.is([hr,di])&&!!t.waitForTransition}return{mount:g,go:E,scroll:w,getNext:R,getPrev:D,getAdjacent:G,getEnd:K,setIndex:ee,getIndex:se,toIndex:q,toPage:U,toDest:z,hasFocus:Se,isBusy:Ge}}var WT="http://www.w3.org/2000/svg",QT="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",zi=40;function YT(n,e,t){var r=_e(n),i=r.on,s=r.bind,a=r.emit,l=t.classes,u=t.i18n,d=e.Elements,f=e.Controller,y=d.arrows,I=d.track,A=y,b=d.prev,C=d.next,R,D,N={};function k(){M(),i(We,L)}function L(){V(),k()}function M(){var w=t.arrows;w&&!(b&&C)&&v(),b&&C&&(Xr(N,{prev:b,next:C}),Jr(A,w?"":"none"),pt(A,D=ul+"--"+t.direction),w&&(_(),E(),J([b,C],yi,I.id),a(vT,b,C)))}function V(){r.destroy(),St(A,D),R?(bn(y?[b,C]:A),b=C=null):gt([b,C],cl)}function _(){i([Cn,vi,Re,dr,Is],E),s(C,"click",pe(g,">")),s(b,"click",pe(g,"<"))}function g(w){f.go(w,!0)}function v(){A=y||Hn("div",l.arrows),b=T(!0),C=T(!1),R=!0,gi(A,[b,C]),!y&&tl(A,I)}function T(w){var m='<button class="'+l.arrow+" "+(w?l.prev:l.next)+'" type="button"><svg xmlns="'+WT+'" viewBox="0 0 '+zi+" "+zi+'" width="'+zi+'" height="'+zi+'" focusable="false"><path d="'+(t.arrowPath||QT)+'" />';return Wd(m)}function E(){if(b&&C){var w=n.index,m=f.getPrev(),G=f.getNext(),Y=m>-1&&w<m?u.last:u.prev,me=G>-1&&w>G?u.first:u.next;b.disabled=m<0,C.disabled=G<0,J(b,Xe,Y),J(C,Xe,me),a(yT,b,C,m,G)}}return{arrows:N,mount:k,destroy:V,update:E}}var XT=rl+"-interval";function JT(n,e,t){var r=_e(n),i=r.on,s=r.bind,a=r.emit,l=xs(t.interval,n.go.bind(n,">"),_),u=l.isPaused,d=e.Elements,f=e.Elements,y=f.root,I=f.toggle,A=t.autoplay,b,C,R=A==="pause";function D(){A&&(N(),I&&J(I,yi,d.track.id),R||k(),V())}function N(){t.pauseOnHover&&s(y,"mouseenter mouseleave",function(v){b=v.type==="mouseenter",M()}),t.pauseOnFocus&&s(y,"focusin focusout",function(v){C=v.type==="focusin",M()}),I&&s(I,"click",function(){R?k():L(!0)}),i([tn,ol,Re],l.rewind),i(tn,g)}function k(){u()&&e.Slides.isEnough()&&(l.start(!t.resetProgress),C=b=R=!1,V(),a(tf))}function L(v){v===void 0&&(v=!0),R=!!v,V(),u()||(l.pause(),a(nf))}function M(){R||(b||C?L(!1):k())}function V(){I&&(bt(I,Sn,!R),J(I,Xe,t.i18n[R?"play":"pause"]))}function _(v){var T=d.bar;T&&nt(T,"width",v*100+"%"),a(IT,v)}function g(v){var T=e.Slides.getAt(v);l.set(T&&+it(T.slide,XT)||t.interval)}return{mount:D,destroy:l.cancel,play:k,pause:L,isPaused:u}}function ZT(n,e,t){var r=_e(n),i=r.on;function s(){t.cover&&(i(rf,pe(l,!0)),i([Cn,We,Re],pe(a,!0)))}function a(u){e.Slides.forEach(function(d){var f=mi(d.container||d.slide,"img");f&&f.src&&l(u,f,d)})}function l(u,d,f){f.style("background",u?'center/cover no-repeat url("'+d.src+'")':"",!0),Jr(d,u?"none":"")}return{mount:s,destroy:pe(a,!1)}}var eI=10,tI=600,nI=.6,rI=1.5,iI=800;function sI(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=n.state.set,l=e.Move,u=l.getPosition,d=l.getLimit,f=l.exceededLimit,y=l.translate,I=n.is(rr),A,b,C=1;function R(){i(tn,L),i([We,Re],M)}function D(_,g,v,T,E){var w=u();if(L(),v&&(!I||!f())){var m=e.Layout.sliderSize(),G=ca(_)*m*Ts(He(_)/m)||0;_=l.toPosition(e.Controller.toDest(_%m))+G}var Y=Yd(w,_,1);C=1,g=Y?0:g||Es(He(_-w)/rI,iI),b=T,A=xs(g,N,pe(k,w,_,E),1),a(di),s(ol),A.start()}function N(){a(nr),b&&b(),s(dr)}function k(_,g,v,T){var E=u(),w=_+(g-_)*V(T),m=(w-E)*C;y(E+m),I&&!v&&f()&&(C*=nI,He(m)<eI&&D(d(f(!0)),tI,!1,b,!0))}function L(){A&&A.cancel()}function M(){A&&!A.isPaused()&&(L(),N())}function V(_){var g=t.easingFunc;return g?g(_):1-Math.pow(1-_,4)}return{mount:R,destroy:L,scroll:D,cancel:M}}var xn={passive:!1,capture:!0};function oI(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=r.bind,l=r.unbind,u=n.state,d=e.Move,f=e.Scroll,y=e.Controller,I=e.Elements.track,A=e.Media.reduce,b=e.Direction,C=b.resolve,R=b.orient,D=d.getPosition,N=d.exceededLimit,k,L,M,V,_,g=!1,v,T,E;function w(){a(I,Do,aa,xn),a(I,Lo,aa,xn),a(I,yf,G,xn),a(I,"click",he,{capture:!0}),a(I,"dragstart",Tt),i([Cn,We],m)}function m(){var B=t.drag;Pn(!B),V=B==="free"}function G(B){if(v=!1,!T){var de=Ae(B);ve(B.target)&&(de||!B.button)&&(y.isBusy()?Tt(B,!0):(E=de?I:window,_=u.is([hr,di]),M=null,a(E,Do,Y,xn),a(E,Lo,me,xn),d.cancel(),f.cancel(),K(B)))}}function Y(B){if(u.is(es)||(u.set(es),s(pT)),B.cancelable)if(_){d.translate(k+Ve(Se(B)));var de=Ge(B)>zu,et=g!==(g=N());(de||et)&&K(B),v=!0,s(gT),Tt(B)}else z(B)&&(_=U(B),Tt(B))}function me(B){u.is(es)&&(u.set(nr),s(mT)),_&&(q(B),Tt(B)),l(E,Do,Y),l(E,Lo,me),_=!1}function he(B){!T&&v&&Tt(B,!0)}function K(B){M=L,L=B,k=D()}function q(B){var de=ee(B),et=se(de),Ot=t.rewind&&t.rewindByDrag;A(!1),V?y.scroll(et,0,t.snap):n.is(Ei)?y.go(R(ca(de))<0?Ot?"<":"-":Ot?">":"+"):n.is(rr)&&g&&Ot?y.go(N(!0)?">":"<"):y.go(y.toDest(et),!0),A(!0)}function U(B){var de=t.dragMinThreshold,et=Wr(de),Ot=et&&de.mouse||0,Ys=(et?de.touch:+de)||10;return He(Se(B))>(Ae(B)?Ys:Ot)}function z(B){return He(Se(B))>He(Se(B,!0))}function ee(B){if(n.is(fr)||!g){var de=Ge(B);if(de&&de<zu)return Se(B)/de}return 0}function se(B){return D()+ca(B)*en(He(B)*(t.flickPower||600),V?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function Se(B,de){return le(B,de)-le($(B),de)}function Ge(B){return la(B)-la($(B))}function $(B){return L===B&&M||L}function le(B,de){return(Ae(B)?B.changedTouches[0]:B)["page"+C(de?"Y":"X")]}function Ve(B){return B/(g&&n.is(rr)?UT:1)}function ve(B){var de=t.noDrag;return!Qr(B,"."+pf+", ."+zs)&&(!de||!Qr(B,de))}function Ae(B){return typeof TouchEvent<"u"&&B instanceof TouchEvent}function Rn(){return _}function Pn(B){T=B}return{mount:w,disable:Pn,isDragging:Rn}}var aI={Spacebar:" ",Right:Bs,Left:$s,Up:af,Down:lf};function hl(n){return n=Zt(n)?n:n.key,aI[n]||n}var Gu="keydown";function lI(n,e,t){var r=_e(n),i=r.on,s=r.bind,a=r.unbind,l=n.root,u=e.Direction.resolve,d,f;function y(){I(),i(We,A),i(We,I),i(tn,C)}function I(){var D=t.keyboard;D&&(d=D==="global"?window:l,s(d,Gu,R))}function A(){a(d,Gu)}function b(D){f=D}function C(){var D=f;f=!0,qd(function(){f=D})}function R(D){if(!f){var N=hl(D);N===u($s)?n.go("<"):N===u(Bs)&&n.go(">")}}return{mount:y,destroy:A,disable:b}}var Br=rl+"-lazy",rs=Br+"-srcset",cI="["+Br+"], ["+rs+"]";function uI(n,e,t){var r=_e(n),i=r.on,s=r.off,a=r.bind,l=r.emit,u=t.lazyLoad==="sequential",d=[vi,dr],f=[];function y(){t.lazyLoad&&(I(),i(Re,I))}function I(){Dt(f),A(),u?D():(s(d),i(d,b),b())}function A(){e.Slides.forEach(function(N){nl(N.slide,cI).forEach(function(k){var L=it(k,Br),M=it(k,rs);if(L!==k.src||M!==k.srcset){var V=t.classes.spinner,_=k.parentElement,g=mi(_,"."+V)||Hn("span",V,_);f.push([k,N,g]),k.src||Jr(k,"none")}})})}function b(){f=f.filter(function(N){var k=t.perPage*((t.preloadPages||1)+1)-1;return N[1].isWithin(n.index,k)?C(N):!0}),f.length||s(d)}function C(N){var k=N[0];pt(N[1].slide,da),a(k,"load error",pe(R,N)),J(k,"src",it(k,Br)),J(k,"srcset",it(k,rs)),gt(k,Br),gt(k,rs)}function R(N,k){var L=N[0],M=N[1];St(M.slide,da),k.type!=="error"&&(bn(N[2]),Jr(L,""),l(rf,L,M),l(ei)),u&&D()}function D(){f.length&&C(f.shift())}return{mount:y,destroy:pe(Dt,f),check:b}}function hI(n,e,t){var r=_e(n),i=r.on,s=r.emit,a=r.bind,l=e.Slides,u=e.Elements,d=e.Controller,f=d.hasFocus,y=d.getIndex,I=d.go,A=e.Direction.resolve,b=u.pagination,C=[],R,D;function N(){k(),i([We,Re,Is],N);var T=t.pagination;b&&Jr(b,T?"":"none"),T&&(i([tn,ol,dr],v),L(),v(),s(ET,{list:R,items:C},g(n.index)))}function k(){R&&(bn(b?sn(R.children):R),St(R,D),Dt(C),R=null),r.destroy()}function L(){var T=n.length,E=t.classes,w=t.i18n,m=t.perPage,G=f()?d.getEnd()+1:Zr(T/m);R=b||Hn("ul",E.pagination,u.track.parentElement),pt(R,D=Gs+"--"+_()),J(R,Rt,"tablist"),J(R,Xe,w.select),J(R,ll,_()===js?"vertical":"");for(var Y=0;Y<G;Y++){var me=Hn("li",null,R),he=Hn("button",{class:E.page,type:"button"},me),K=l.getIn(Y).map(function(U){return U.slide.id}),q=!f()&&m>1?w.pageX:w.slideX;a(he,"click",pe(M,Y)),t.paginationKeyboard&&a(he,"keydown",pe(V,Y)),J(me,Rt,"presentation"),J(he,Rt,"tab"),J(he,yi,K.join(" ")),J(he,Xe,ua(q,Y+1)),J(he,Kn,-1),C.push({li:me,button:he,page:Y})}}function M(T){I(">"+T,!0)}function V(T,E){var w=C.length,m=hl(E),G=_(),Y=-1;m===A(Bs,!1,G)?Y=++T%w:m===A($s,!1,G)?Y=(--T+w)%w:m==="Home"?Y=0:m==="End"&&(Y=w-1);var me=C[Y];me&&(Kd(me.button),I(">"+Y),Tt(E,!0))}function _(){return t.paginationDirection||t.direction}function g(T){return C[d.toPage(T)]}function v(){var T=g(y(!0)),E=g(y());if(T){var w=T.button;St(w,Sn),gt(w,Uu),J(w,Kn,-1)}if(E){var m=E.button;pt(m,Sn),J(m,Uu,!0),J(m,Kn,"")}s(TT,{list:R,items:C},T,E)}return{items:C,mount:N,destroy:k,getAt:g,update:v}}var dI=[" ","Enter"];function fI(n,e,t){var r=t.isNavigation,i=t.slideFocus,s=[];function a(){n.splides.forEach(function(b){b.isParent||(d(n,b.splide),d(b.splide,n))}),r&&f()}function l(){s.forEach(function(b){b.destroy()}),Dt(s)}function u(){l(),a()}function d(b,C){var R=_e(b);R.on(tn,function(D,N,k){C.go(C.is(fr)?k:D)}),s.push(R)}function f(){var b=_e(n),C=b.on;C(Jd,I),C(sf,A),C([Cn,We],y),s.push(b),b.emit(ef,n.splides)}function y(){J(e.Elements.list,ll,t.direction===js?"vertical":"")}function I(b){n.go(b.index)}function A(b,C){el(dI,hl(C))&&(I(b),Tt(C))}return{setup:pe(e.Media.set,{slideFocus:fi(i)?r:i},!0),mount:a,destroy:l,remount:u}}function pI(n,e,t){var r=_e(n),i=r.bind,s=0;function a(){t.wheel&&i(e.Elements.track,"wheel",l,xn)}function l(d){if(d.cancelable){var f=d.deltaY,y=f<0,I=la(d),A=t.wheelMinThreshold||0,b=t.wheelSleep||0;He(f)>A&&I-s>b&&(n.go(y?"<":">"),s=I),u(y)&&Tt(d)}}function u(d){return!t.releaseWheel||n.state.is(hr)||e.Controller.getAdjacent(d)!==-1}return{mount:a}}var gI=90;function mI(n,e,t){var r=_e(n),i=r.on,s=e.Elements.track,a=t.live&&!t.isNavigation,l=Hn("span",VT),u=xs(gI,pe(f,!1));function d(){a&&(I(!e.Autoplay.isPaused()),J(s,ju,!0),l.textContent="…",i(tf,pe(I,!0)),i(nf,pe(I,!1)),i([vi,dr],pe(f,!0)))}function f(A){J(s,Bu,A),A?(gi(s,l),u.start()):(bn(l),u.cancel())}function y(){gt(s,[$u,ju,Bu]),bn(l)}function I(A){a&&J(s,$u,A?"off":"polite")}return{mount:d,disable:I,destroy:y}}var _I=Object.freeze({__proto__:null,Media:bT,Direction:ST,Elements:$T,Slides:jT,Layout:qT,Clones:GT,Move:HT,Controller:KT,Arrows:YT,Autoplay:JT,Cover:ZT,Scroll:sI,Drag:oI,Keyboard:lI,LazyLoad:uI,Pagination:hI,Sync:fI,Wheel:pI,Live:mI}),vI={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},yI={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:FT,i18n:vI,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function EI(n,e,t){var r=e.Slides;function i(){_e(n).on([Cn,Re],s)}function s(){r.forEach(function(l){l.style("transform","translateX(-"+100*l.index+"%)")})}function a(l,u){r.style("transition","opacity "+t.speed+"ms "+t.easing),qd(u)}return{mount:i,start:a,cancel:aa}}function TI(n,e,t){var r=e.Move,i=e.Controller,s=e.Scroll,a=e.Elements.list,l=pe(nt,a,"transition"),u;function d(){_e(n).bind(a,"transitionend",function(A){A.target===a&&u&&(y(),u())})}function f(A,b){var C=r.toPosition(A,!0),R=r.getPosition(),D=I(A);He(C-R)>=1&&D>=1?t.useScroll?s.scroll(C,D,!1,b):(l("transform "+D+"ms "+t.easing),r.translate(C,!0),u=b):(r.jump(A),b())}function y(){l(""),s.cancel()}function I(A){var b=t.rewindSpeed;if(n.is(rr)&&b){var C=i.getIndex(!0),R=i.getEnd();if(C===0&&A>=R||C>=R&&A===0)return b}return t.speed}return{mount:d,start:f,cancel:y}}var II=function(){function n(t,r){this.event=_e(),this.Components={},this.state=wT(Un),this.splides=[],this._o={},this._E={};var i=Zt(t)?Qd(document,t):t;$r(i,i+" is invalid."),this.root=i,r=Ht({label:it(i,Xe)||"",labelledby:it(i,al)||""},yI,n.defaults,r||{});try{Ht(r,JSON.parse(it(i,rl)))}catch{$r(!1,"Invalid JSON")}this._o=Object.create(Ht({},r))}var e=n.prototype;return e.mount=function(r,i){var s=this,a=this.state,l=this.Components;$r(a.is([Un,ys]),"Already mounted!"),a.set(Un),this._C=l,this._T=i||this._T||(this.is(Ei)?EI:TI),this._E=r||this._E;var u=Xr({},_I,this._E,{Transition:this._T});return vn(u,function(d,f){var y=d(s,l,s._o);l[f]=y,y.setup&&y.setup()}),vn(l,function(d){d.mount&&d.mount()}),this.emit(Cn),pt(this.root,OT),a.set(nr),this.emit(Fu),this},e.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(nr)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},e.go=function(r){return this._C.Controller.go(r),this},e.on=function(r,i){return this.event.on(r,i),this},e.off=function(r){return this.event.off(r),this},e.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(sn(arguments,1))),this},e.add=function(r,i){return this._C.Slides.add(r,i),this},e.remove=function(r){return this._C.Slides.remove(r),this},e.is=function(r){return this._o.type===r},e.refresh=function(){return this.emit(Re),this},e.destroy=function(r){r===void 0&&(r=!0);var i=this.event,s=this.state;return s.is(Un)?_e(this).on(Fu,this.destroy.bind(this,r)):(vn(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(Zd),i.destroy(),r&&Dt(this.splides),s.set(ys)),this},oT(n,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),Ef=II;Ef.defaults={};Ef.STATES=lT;/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.4.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function wI(n){n.length=0}function dl(n,e,t){return Array.prototype.slice.call(n,e,t)}function Hs(n){return n.bind.apply(n,[null].concat(dl(arguments,1)))}function fl(n,e){return typeof e===n}var Tf=Array.isArray;Hs(fl,"function");Hs(fl,"string");Hs(fl,"undefined");function If(n){return Tf(n)?n:[n]}function Hu(n,e){If(n).forEach(e)}var AI=Object.keys;function bI(n,e,t){if(n){var r=AI(n);r=r;for(var i=0;i<r.length;i++){var s=r[i];if(s!=="__proto__"&&e(n[s],s)===!1)break}}return n}function SI(n){return dl(arguments,1).forEach(function(e){bI(e,function(t,r){n[r]=e[r]})}),n}var wf="splide";function CI(){var n=[];function e(a,l,u,d){i(a,l,function(f,y,I){var A="addEventListener"in f,b=A?f.removeEventListener.bind(f,y,u,d):f.removeListener.bind(f,u);A?f.addEventListener(y,u,d):f.addListener(u),n.push([f,y,I,u,b])})}function t(a,l,u){i(a,l,function(d,f,y){n=n.filter(function(I){return I[0]===d&&I[1]===f&&I[2]===y&&(!u||I[3]===u)?(I[4](),!1):!0})})}function r(a,l,u){var d,f=!0;return typeof CustomEvent=="function"?d=new CustomEvent(l,{bubbles:f,detail:u}):(d=document.createEvent("CustomEvent"),d.initCustomEvent(l,f,!1,u)),a.dispatchEvent(d),d}function i(a,l,u){Hu(a,function(d){d&&Hu(l,function(f){f.split(" ").forEach(function(y){var I=y.split(".");u(d,I[0],I[1])})})})}function s(){n.forEach(function(a){a[4]()}),wI(n)}return{bind:e,unbind:t,dispatch:r,destroy:s}}var RI="visible",PI="hidden",Vo="refresh",kI="updated",NI="destroy";function Af(n){var e=n?n.event.bus:document.createDocumentFragment(),t=CI();function r(s,a){t.bind(e,If(s).join(" "),function(l){a.apply(a,Tf(l.detail)?l.detail:[])})}function i(s){t.dispatch(e,s,dl(arguments,1))}return n&&n.event.on(NI,t.destroy),SI(t,{bus:e,on:r,off:Hs(t.unbind,e),emit:i})}var DI=wf,Ks=wf+"__slide",LI=Ks+"__container";function Ku(n){n.length=0}function Ws(n,e,t){return Array.prototype.slice.call(n,e,t)}function pl(n){return n.bind(null,...Ws(arguments,1))}function Qs(n,e){return typeof e===n}function VI(n){return!_l(n)&&Qs("object",n)}const gl=Array.isArray;pl(Qs,"function");const ml=pl(Qs,"string"),OI=pl(Qs,"undefined");function _l(n){return n===null}function MI(n){return n instanceof HTMLElement}function vl(n){return gl(n)?n:[n]}function ir(n,e){vl(n).forEach(e)}function Wu(n,e){return n.push(...vl(e)),n}function bf(n,e,t){n&&ir(e,r=>{r&&n.classList[t?"add":"remove"](r)})}function fa(n,e){bf(n,ml(e)?e.split(" "):e,!0)}function is(n,e){ir(e,n.appendChild.bind(n))}function FI(n,e){return MI(n)&&(n.msMatchesSelector||n.matches).call(n,e)}function xI(n,e){const t=n?Ws(n.children):[];return e?t.filter(r=>FI(r,e)):t}function Qu(n,e){return e?xI(n,e)[0]:n.firstElementChild}const Sf=Object.keys;function Cf(n,e,t){if(n){let r=Sf(n);r=r;for(let i=0;i<r.length;i++){const s=r[i];if(s!=="__proto__"&&e(n[s],s)===!1)break}}return n}function UI(n){return Ws(arguments,1).forEach(e=>{Cf(e,(t,r)=>{n[r]=e[r]})}),n}function $I(n,e){vl(Sf(n)).forEach(t=>{delete n[t]})}function pa(n,e){ir(n,t=>{ir(e,r=>{t&&t.removeAttribute(r)})})}function yl(n,e,t){VI(e)?Cf(e,(r,i)=>{yl(n,i,r)}):ir(n,r=>{_l(t)||t===""?pa(r,e):r.setAttribute(e,String(t))})}function Yu(n,e,t){const r=document.createElement(n);return e&&(ml(e)?fa(r,e):yl(r,e)),t&&is(t,r),r}function Et(n,e,t){if(OI(t))return getComputedStyle(n)[e];_l(t)||(n.style[e]=`${t}`)}function BI(n,e){return n&&n.classList.contains(e)}function jI(n){ir(n,e=>{e&&e.parentNode&&e.parentNode.removeChild(e)})}function Xu(n,e){return e?Ws(n.querySelectorAll(e)):[]}function Ju(n,e){bf(n,e,!1)}function Gi(n){return ml(n)?n:n?`${n}px`:""}const qI="splide";function zI(n,e){if(!n)throw new Error(`[${qI}] ${e}`)}const{min:GI,max:uw,floor:hw,ceil:dw,abs:fw}=Math;function HI(n){return n<10?`0${n}`:`${n}`}const Rf=`${Ks}__row`,ga=`${Ks}--col`,KI={rows:1,cols:1,dimensions:[],gap:{}};function WI(n){function e(){const{rows:i,cols:s,dimensions:a}=n;return gl(a)&&a.length?a:[[i,s]]}function t(i){const s=e();return s[GI(i,s.length-1)]}function r(i){const s=e();let a,l,u=0;for(let d=0;d<s.length;d++){const f=s[d];if(a=f[0]||1,l=f[1]||1,u+=a*l,i<u)break}return zI(a&&l,"Invalid dimension"),[a,l]}return{get:t,getAt:r}}function QI(n,e,t){const{on:r,destroy:i}=Af(n),{Components:s,options:a}=n,{resolve:l}=s.Direction,{forEach:u}=s.Slides;function d(){y(),a.slideFocus&&(r(RI,N),r(PI,k))}function f(){u(L=>{const{slide:M}=L;D(M,!1),C(M).forEach(V=>{pa(V,"style")}),R(M).forEach(V=>{b(V,!0),pa(V,"style")})}),i()}function y(){u(L=>{const{slide:M}=L,[V,_]=t.get(L.isClone?L.slideIndex:L.index);I(V,M),A(_,M),R(L.slide).forEach((g,v)=>{g.id=`${L.slide.id}-col${HI(v+1)}`,n.options.cover&&b(g)})})}function I(L,M){const{row:V}=e.gap,_=`calc(${100/L}%${V?` - ${Gi(V)} * ${(L-1)/L}`:""})`;C(M).forEach((g,v,T)=>{Et(g,"height",_),Et(g,"display","flex"),Et(g,"margin",`0 0 ${Gi(V)} 0`),Et(g,"padding",0),v===T.length-1&&Et(g,"marginBottom",0)})}function A(L,M){const{col:V}=e.gap,_=`calc(${100/L}%${V?` - ${Gi(V)} * ${(L-1)/L}`:""})`;R(M).forEach((g,v,T)=>{Et(g,"width",_),v!==T.length-1&&Et(g,l("marginRight"),Gi(V))})}function b(L,M){const V=Qu(L,`.${LI}`),_=Qu(V||L,"img");_&&_.src&&(Et(V||L,"background",M?"":`center/cover no-repeat url("${_.src}")`),Et(_,"display",M?"":"none"))}function C(L){return Xu(L,`.${Rf}`)}function R(L){return Xu(L,`.${ga}`)}function D(L,M){R(L).forEach(V=>{yl(V,"tabindex",M?0:null)})}function N(L){D(L.slide,!0)}function k(L){D(L.slide,!1)}return{mount:d,destroy:f}}function pw(n,e,t){const{on:r,off:i}=Af(n),{Elements:s}=e,a={},l=WI(a),u=QI(n,a,l),d=`${DI}--grid`,f=[];function y(){I(),r(kI,I)}function I(){$I(a),UI(a,KI,t.grid||{}),k()?(A(),Wu(f,s.slides),fa(n.root,d),is(s.list,R()),i(Vo),r(Vo,C),b()):L()&&(A(),b())}function A(){if(L()){const{slides:M}=s;u.destroy(),f.forEach(V=>{Ju(V,ga),is(s.list,V)}),jI(M),Ju(n.root,d),Ku(M),Wu(M,f),Ku(f),i(Vo)}}function b(){n.refresh()}function C(){L()&&u.mount()}function R(){const M=[];let V=0,_=0,g,v;return f.forEach((T,E)=>{const[w,m]=l.getAt(E);_||(V||(g=Yu(T.tagName,Ks),M.push(g)),v=D(w,T,g)),N(m,T,v),++_>=m&&(_=0,V=++V>=w?0:V)}),M}function D(M,V,_){const g=V.tagName.toLowerCase()==="li"?"ul":"div";return Yu(g,Rf,_)}function N(M,V,_){return fa(V,ga),is(_,V),V}function k(){if(t.grid){const{rows:M,cols:V,dimensions:_}=a;return M>1||V>1||gl(_)&&_.length>0}return!1}function L(){return BI(n.root,d)}return{mount:y,destroy:A}}export{pw as G,rw as J,Ef as S,cw as a,Bt as b,aw as c,tw as d,XI as e,YI as f,lw as g,nw as h,Cg as i,ZI as o,ew as s,JI as u};
//# sourceMappingURL=vendor-xTsNb-oV.js.map
