var kh={};/**
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
 */const wd=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],u=r[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,u=a?r[i+1]:0,l=i+2<r.length,c=l?r[i+2]:0,f=s>>2,p=(s&3)<<4|u>>4;let g=(u&15)<<2|c>>6,S=c&63;l||(S=64,a||(g=64)),n.push(t[f],t[p],t[g],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(wd(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):xm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],u=i<r.length?t[r.charAt(i)]:0;++i;const c=i<r.length?t[r.charAt(i)]:64;++i;const p=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||u==null||c==null||p==null)throw new $m;const g=s<<2|u>>4;if(n.push(g),c!==64){const S=u<<4&240|c>>2;if(n.push(S),p!==64){const R=c<<6&192|p;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vm=function(r){const e=wd(r);return Rd.encodeByteArray(e,!0)},ra=function(r){return Vm(r).replace(/\./g,"")},Cd=function(r){try{return Rd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Um=()=>Fm().__FIREBASE_DEFAULTS__,Bm=()=>{if(typeof process>"u"||typeof kh>"u")return;const r=kh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Hm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Cd(r[1]);return e&&JSON.parse(e)},Ea=()=>{try{return Um()||Bm()||Hm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Pd=r=>{var e,t;return(t=(e=Ea())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Gm=r=>{const e=Pd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Dd=()=>{var r;return(r=Ea())===null||r===void 0?void 0:r.config},bd=r=>{var e;return(e=Ea())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Km(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ra(JSON.stringify(t)),ra(JSON.stringify(a)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Zm(){var r;const e=(r=Ea())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jm(){const r=rt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Qm(){return!Zm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Jm(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ev="FirebaseError";class lr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ev,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fi.prototype.create)}}class Fi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?tv(s,n):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new lr(i,u,n)}}function tv(r,e){return r.replace(rv,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const rv=/\{\$([^}]+)}/g;function nv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function na(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(xh(s)&&xh(a)){if(!na(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function xh(r){return r!==null&&typeof r=="object"}/**
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
 */function Ui(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function iv(r,e){const t=new sv(r,e);return t.subscribe.bind(t)}class sv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");av(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function av(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function oo(){}/**
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
 */function Mr(r){return r&&r._delegate?r._delegate:r}class Qr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kr="[DEFAULT]";/**
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
 */class ov{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qm;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lv(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);n===u&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:uv(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uv(r){return r===Kr?void 0:r}function lv(r){return r.instantiationMode==="EAGER"}/**
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
 */class cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ov(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ve||(ve={}));const hv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},fv=ve.INFO,dv={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},pv=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=dv[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=fv,this._logHandler=pv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const gv=(r,e)=>e.some(t=>r instanceof t);let $h,Vh;function mv(){return $h||($h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vv(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nd=new WeakMap,Oo=new WeakMap,Md=new WeakMap,uo=new WeakMap,ec=new WeakMap;function _v(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Ir(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nd.set(t,r)}).catch(()=>{}),ec.set(e,r),e}function yv(r){if(Oo.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});Oo.set(r,e)}let Lo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Oo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Md.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ir(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ev(r){Lo=r(Lo)}function Av(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(lo(this),e,...t);return Md.set(n,e.sort?e.sort():[e]),Ir(n)}:vv().includes(r)?function(...e){return r.apply(lo(this),e),Ir(Nd.get(this))}:function(...e){return Ir(r.apply(lo(this),e))}}function Iv(r){return typeof r=="function"?Av(r):(r instanceof IDBTransaction&&yv(r),gv(r,mv())?new Proxy(r,Lo):r)}function Ir(r){if(r instanceof IDBRequest)return _v(r);if(uo.has(r))return uo.get(r);const e=Iv(r);return e!==r&&(uo.set(r,e),ec.set(e,r)),e}const lo=r=>ec.get(r);function Tv(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),u=Ir(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Ir(a.result),l.oldVersion,l.newVersion,Ir(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const Sv=["get","getKey","getAll","getAllKeys","count"],wv=["put","add","delete","clear"],co=new Map;function Fh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(co.get(e))return co.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=wv.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Sv.includes(t)))return;const s=async function(a,...u){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(u.shift())),(await Promise.all([c[t](...u),i&&l.done]))[0]};return co.set(e,s),s}Ev(r=>({...r,get:(e,t,n)=>Fh(e,t)||r.get(e,t,n),has:(e,t)=>!!Fh(e,t)||r.has(e,t)}));/**
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
 */class Rv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Cv(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Cv(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ko="@firebase/app",Uh="0.10.10";/**
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
 */const ir=new Jl("@firebase/app"),Pv="@firebase/app-compat",Dv="@firebase/analytics-compat",bv="@firebase/analytics",Nv="@firebase/app-check-compat",Mv="@firebase/app-check",Ov="@firebase/auth",Lv="@firebase/auth-compat",kv="@firebase/database",xv="@firebase/database-compat",$v="@firebase/functions",Vv="@firebase/functions-compat",Fv="@firebase/installations",Uv="@firebase/installations-compat",Bv="@firebase/messaging",Hv="@firebase/messaging-compat",Gv="@firebase/performance",qv="@firebase/performance-compat",Kv="@firebase/remote-config",Wv="@firebase/remote-config-compat",Zv="@firebase/storage",zv="@firebase/storage-compat",Yv="@firebase/firestore",jv="@firebase/vertexai-preview",Qv="@firebase/firestore-compat",Xv="firebase",Jv="10.13.1";/**
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
 */const xo="[DEFAULT]",e_={[ko]:"fire-core",[Pv]:"fire-core-compat",[bv]:"fire-analytics",[Dv]:"fire-analytics-compat",[Mv]:"fire-app-check",[Nv]:"fire-app-check-compat",[Ov]:"fire-auth",[Lv]:"fire-auth-compat",[kv]:"fire-rtdb",[xv]:"fire-rtdb-compat",[$v]:"fire-fn",[Vv]:"fire-fn-compat",[Fv]:"fire-iid",[Uv]:"fire-iid-compat",[Bv]:"fire-fcm",[Hv]:"fire-fcm-compat",[Gv]:"fire-perf",[qv]:"fire-perf-compat",[Kv]:"fire-rc",[Wv]:"fire-rc-compat",[Zv]:"fire-gcs",[zv]:"fire-gcs-compat",[Yv]:"fire-fst",[Qv]:"fire-fst-compat",[jv]:"fire-vertex","fire-js":"fire-js",[Xv]:"fire-js-all"};/**
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
 */const ia=new Map,t_=new Map,$o=new Map;function Bh(r,e){try{r.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Mn(r){const e=r.name;if($o.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;$o.set(e,r);for(const t of ia.values())Bh(t,r);for(const t of t_.values())Bh(t,r);return!0}function tc(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Qt(r){return r.settings!==void 0}/**
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
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Fi("app","Firebase",r_);/**
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
 */class n_{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=Jv;function i_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:xo,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(t||(t=Dd()),!t)throw Tr.create("no-options");const s=ia.get(i);if(s){if(na(t,s.options)&&na(n,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const a=new cv(i);for(const l of $o.values())a.addComponent(l);const u=new n_(t,n,a);return ia.set(i,u),u}function Od(r=xo){const e=ia.get(r);if(!e&&r===xo&&Dd())return i_();if(!e)throw Tr.create("no-app",{appName:r});return e}function Sr(r,e,t){var n;let i=(n=e_[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(u.join(" "));return}Mn(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const s_="firebase-heartbeat-database",a_=1,Ri="firebase-heartbeat-store";let ho=null;function Ld(){return ho||(ho=Tv(s_,a_,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ri)}catch(t){console.warn(t)}}}}).catch(r=>{throw Tr.create("idb-open",{originalErrorMessage:r.message})})),ho}async function o_(r){try{const t=(await Ld()).transaction(Ri),n=await t.objectStore(Ri).get(kd(r));return await t.done,n}catch(e){if(e instanceof lr)ir.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function Hh(r,e){try{const n=(await Ld()).transaction(Ri,"readwrite");await n.objectStore(Ri).put(e,kd(r)),await n.done}catch(t){if(t instanceof lr)ir.warn(t.message);else{const n=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(n.message)}}}function kd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const u_=1024,l_=30*24*60*60*1e3;class c_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new f_(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=l_}),this._storage.overwrite(this._heartbeatsCache))}catch(n){ir.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gh(),{heartbeatsToSend:n,unsentEntries:i}=h_(this._heartbeatsCache.heartbeats),s=ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ir.warn(t),""}}}function Gh(){return new Date().toISOString().substring(0,10)}function h_(r,e=u_){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),qh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class f_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Jm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await o_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qh(r){return ra(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function d_(r){Mn(new Qr("platform-logger",e=>new Rv(e),"PRIVATE")),Mn(new Qr("heartbeat",e=>new c_(e),"PRIVATE")),Sr(ko,Uh,r),Sr(ko,Uh,"esm2017"),Sr("fire-js","")}d_("");var Kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zr,xd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function E(){}E.prototype=m.prototype,v.D=m.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(T,w,P){for(var I=Array(arguments.length-2),j=2;j<arguments.length;j++)I[j-2]=arguments[j];return m.prototype[w].apply(T,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,E){E||(E=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(E++)|m.charCodeAt(E++)<<8|m.charCodeAt(E++)<<16|m.charCodeAt(E++)<<24;else for(w=0;16>w;++w)T[w]=m[E++]|m[E++]<<8|m[E++]<<16|m[E++]<<24;m=v.g[0],E=v.g[1],w=v.g[2];var P=v.g[3],I=m+(P^E&(w^P))+T[0]+3614090360&4294967295;m=E+(I<<7&4294967295|I>>>25),I=P+(w^m&(E^w))+T[1]+3905402710&4294967295,P=m+(I<<12&4294967295|I>>>20),I=w+(E^P&(m^E))+T[2]+606105819&4294967295,w=P+(I<<17&4294967295|I>>>15),I=E+(m^w&(P^m))+T[3]+3250441966&4294967295,E=w+(I<<22&4294967295|I>>>10),I=m+(P^E&(w^P))+T[4]+4118548399&4294967295,m=E+(I<<7&4294967295|I>>>25),I=P+(w^m&(E^w))+T[5]+1200080426&4294967295,P=m+(I<<12&4294967295|I>>>20),I=w+(E^P&(m^E))+T[6]+2821735955&4294967295,w=P+(I<<17&4294967295|I>>>15),I=E+(m^w&(P^m))+T[7]+4249261313&4294967295,E=w+(I<<22&4294967295|I>>>10),I=m+(P^E&(w^P))+T[8]+1770035416&4294967295,m=E+(I<<7&4294967295|I>>>25),I=P+(w^m&(E^w))+T[9]+2336552879&4294967295,P=m+(I<<12&4294967295|I>>>20),I=w+(E^P&(m^E))+T[10]+4294925233&4294967295,w=P+(I<<17&4294967295|I>>>15),I=E+(m^w&(P^m))+T[11]+2304563134&4294967295,E=w+(I<<22&4294967295|I>>>10),I=m+(P^E&(w^P))+T[12]+1804603682&4294967295,m=E+(I<<7&4294967295|I>>>25),I=P+(w^m&(E^w))+T[13]+4254626195&4294967295,P=m+(I<<12&4294967295|I>>>20),I=w+(E^P&(m^E))+T[14]+2792965006&4294967295,w=P+(I<<17&4294967295|I>>>15),I=E+(m^w&(P^m))+T[15]+1236535329&4294967295,E=w+(I<<22&4294967295|I>>>10),I=m+(w^P&(E^w))+T[1]+4129170786&4294967295,m=E+(I<<5&4294967295|I>>>27),I=P+(E^w&(m^E))+T[6]+3225465664&4294967295,P=m+(I<<9&4294967295|I>>>23),I=w+(m^E&(P^m))+T[11]+643717713&4294967295,w=P+(I<<14&4294967295|I>>>18),I=E+(P^m&(w^P))+T[0]+3921069994&4294967295,E=w+(I<<20&4294967295|I>>>12),I=m+(w^P&(E^w))+T[5]+3593408605&4294967295,m=E+(I<<5&4294967295|I>>>27),I=P+(E^w&(m^E))+T[10]+38016083&4294967295,P=m+(I<<9&4294967295|I>>>23),I=w+(m^E&(P^m))+T[15]+3634488961&4294967295,w=P+(I<<14&4294967295|I>>>18),I=E+(P^m&(w^P))+T[4]+3889429448&4294967295,E=w+(I<<20&4294967295|I>>>12),I=m+(w^P&(E^w))+T[9]+568446438&4294967295,m=E+(I<<5&4294967295|I>>>27),I=P+(E^w&(m^E))+T[14]+3275163606&4294967295,P=m+(I<<9&4294967295|I>>>23),I=w+(m^E&(P^m))+T[3]+4107603335&4294967295,w=P+(I<<14&4294967295|I>>>18),I=E+(P^m&(w^P))+T[8]+1163531501&4294967295,E=w+(I<<20&4294967295|I>>>12),I=m+(w^P&(E^w))+T[13]+2850285829&4294967295,m=E+(I<<5&4294967295|I>>>27),I=P+(E^w&(m^E))+T[2]+4243563512&4294967295,P=m+(I<<9&4294967295|I>>>23),I=w+(m^E&(P^m))+T[7]+1735328473&4294967295,w=P+(I<<14&4294967295|I>>>18),I=E+(P^m&(w^P))+T[12]+2368359562&4294967295,E=w+(I<<20&4294967295|I>>>12),I=m+(E^w^P)+T[5]+4294588738&4294967295,m=E+(I<<4&4294967295|I>>>28),I=P+(m^E^w)+T[8]+2272392833&4294967295,P=m+(I<<11&4294967295|I>>>21),I=w+(P^m^E)+T[11]+1839030562&4294967295,w=P+(I<<16&4294967295|I>>>16),I=E+(w^P^m)+T[14]+4259657740&4294967295,E=w+(I<<23&4294967295|I>>>9),I=m+(E^w^P)+T[1]+2763975236&4294967295,m=E+(I<<4&4294967295|I>>>28),I=P+(m^E^w)+T[4]+1272893353&4294967295,P=m+(I<<11&4294967295|I>>>21),I=w+(P^m^E)+T[7]+4139469664&4294967295,w=P+(I<<16&4294967295|I>>>16),I=E+(w^P^m)+T[10]+3200236656&4294967295,E=w+(I<<23&4294967295|I>>>9),I=m+(E^w^P)+T[13]+681279174&4294967295,m=E+(I<<4&4294967295|I>>>28),I=P+(m^E^w)+T[0]+3936430074&4294967295,P=m+(I<<11&4294967295|I>>>21),I=w+(P^m^E)+T[3]+3572445317&4294967295,w=P+(I<<16&4294967295|I>>>16),I=E+(w^P^m)+T[6]+76029189&4294967295,E=w+(I<<23&4294967295|I>>>9),I=m+(E^w^P)+T[9]+3654602809&4294967295,m=E+(I<<4&4294967295|I>>>28),I=P+(m^E^w)+T[12]+3873151461&4294967295,P=m+(I<<11&4294967295|I>>>21),I=w+(P^m^E)+T[15]+530742520&4294967295,w=P+(I<<16&4294967295|I>>>16),I=E+(w^P^m)+T[2]+3299628645&4294967295,E=w+(I<<23&4294967295|I>>>9),I=m+(w^(E|~P))+T[0]+4096336452&4294967295,m=E+(I<<6&4294967295|I>>>26),I=P+(E^(m|~w))+T[7]+1126891415&4294967295,P=m+(I<<10&4294967295|I>>>22),I=w+(m^(P|~E))+T[14]+2878612391&4294967295,w=P+(I<<15&4294967295|I>>>17),I=E+(P^(w|~m))+T[5]+4237533241&4294967295,E=w+(I<<21&4294967295|I>>>11),I=m+(w^(E|~P))+T[12]+1700485571&4294967295,m=E+(I<<6&4294967295|I>>>26),I=P+(E^(m|~w))+T[3]+2399980690&4294967295,P=m+(I<<10&4294967295|I>>>22),I=w+(m^(P|~E))+T[10]+4293915773&4294967295,w=P+(I<<15&4294967295|I>>>17),I=E+(P^(w|~m))+T[1]+2240044497&4294967295,E=w+(I<<21&4294967295|I>>>11),I=m+(w^(E|~P))+T[8]+1873313359&4294967295,m=E+(I<<6&4294967295|I>>>26),I=P+(E^(m|~w))+T[15]+4264355552&4294967295,P=m+(I<<10&4294967295|I>>>22),I=w+(m^(P|~E))+T[6]+2734768916&4294967295,w=P+(I<<15&4294967295|I>>>17),I=E+(P^(w|~m))+T[13]+1309151649&4294967295,E=w+(I<<21&4294967295|I>>>11),I=m+(w^(E|~P))+T[4]+4149444226&4294967295,m=E+(I<<6&4294967295|I>>>26),I=P+(E^(m|~w))+T[11]+3174756917&4294967295,P=m+(I<<10&4294967295|I>>>22),I=w+(m^(P|~E))+T[2]+718787259&4294967295,w=P+(I<<15&4294967295|I>>>17),I=E+(P^(w|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+P&4294967295}n.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var E=m-this.blockSize,T=this.B,w=this.h,P=0;P<m;){if(w==0)for(;P<=E;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<m;)if(T[w++]=v.charCodeAt(P++),w==this.blockSize){i(this,T),w=0;break}}else for(;P<m;)if(T[w++]=v[P++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=m},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var E=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=E&255,E/=256;for(this.u(v),v=Array(16),m=E=0;4>m;++m)for(var T=0;32>T;T+=8)v[E++]=this.g[m]>>>T&255;return v};function s(v,m){var E=u;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=m(v)}function a(v,m){this.h=m;for(var E=[],T=!0,w=v.length-1;0<=w;w--){var P=v[w]|0;T&&P==m||(E[w]=P,T=!1)}this.g=E}var u={};function l(v){return-128<=v&&128>v?s(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return A(c(-v));for(var m=[],E=1,T=0;v>=E;T++)m[T]=v/E|0,E*=4294967296;return new a(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return A(f(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(m,8)),T=p,w=0;w<v.length;w+=8){var P=Math.min(8,v.length-w),I=parseInt(v.substring(w,w+P),m);8>P?(P=c(Math.pow(m,P)),T=T.j(P).add(c(I))):(T=T.j(E),T=T.add(c(I)))}return T}var p=l(0),g=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(_(this))return-A(this).m();for(var v=0,m=1,E=0;E<this.g.length;E++){var T=this.i(E);v+=(0<=T?T:4294967296+T)*m,m*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(_(this))return"-"+A(this).toString(v);for(var m=c(Math.pow(v,6)),E=this,T="";;){var w=O(E,m).g;E=b(E,w.j(m));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=w,R(E))return P+T;for(;6>P.length;)P="0"+P;T=P+T}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function _(v){return v.h==-1}r.l=function(v){return v=b(this,v),_(v)?-1:R(v)?0:1};function A(v){for(var m=v.g.length,E=[],T=0;T<m;T++)E[T]=~v.g[T];return new a(E,~v.h).add(g)}r.abs=function(){return _(this)?A(this):this},r.add=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],T=0,w=0;w<=m;w++){var P=T+(this.i(w)&65535)+(v.i(w)&65535),I=(P>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);T=I>>>16,P&=65535,I&=65535,E[w]=I<<16|P}return new a(E,E[E.length-1]&-2147483648?-1:0)};function b(v,m){return v.add(A(m))}r.j=function(v){if(R(this)||R(v))return p;if(_(this))return _(v)?A(this).j(A(v)):A(A(this).j(v));if(_(v))return A(this.j(A(v)));if(0>this.l(S)&&0>v.l(S))return c(this.m()*v.m());for(var m=this.g.length+v.g.length,E=[],T=0;T<2*m;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<v.g.length;w++){var P=this.i(T)>>>16,I=this.i(T)&65535,j=v.i(w)>>>16,X=v.i(w)&65535;E[2*T+2*w]+=I*X,D(E,2*T+2*w),E[2*T+2*w+1]+=P*X,D(E,2*T+2*w+1),E[2*T+2*w+1]+=I*j,D(E,2*T+2*w+1),E[2*T+2*w+2]+=P*j,D(E,2*T+2*w+2)}for(T=0;T<m;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=m;T<2*m;T++)E[T]=0;return new a(E,0)};function D(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function N(v,m){this.g=v,this.h=m}function O(v,m){if(R(m))throw Error("division by zero");if(R(v))return new N(p,p);if(_(v))return m=O(A(v),m),new N(A(m.g),A(m.h));if(_(m))return m=O(v,A(m)),new N(A(m.g),m.h);if(30<v.g.length){if(_(v)||_(m))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=m;0>=T.l(v);)E=L(E),T=L(T);var w=x(E,1),P=x(T,1);for(T=x(T,2),E=x(E,2);!R(T);){var I=P.add(T);0>=I.l(v)&&(w=w.add(E),P=I),T=x(T,1),E=x(E,1)}return m=b(v,w.j(m)),new N(w,m)}for(w=p;0<=v.l(m);){for(E=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),P=c(E),I=P.j(m);_(I)||0<I.l(v);)E-=T,P=c(E),I=P.j(m);R(P)&&(P=g),w=w.add(P),v=b(v,I)}return new N(w,v)}r.A=function(v){return O(this,v).h},r.and=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],T=0;T<m;T++)E[T]=this.i(T)&v.i(T);return new a(E,this.h&v.h)},r.or=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],T=0;T<m;T++)E[T]=this.i(T)|v.i(T);return new a(E,this.h|v.h)},r.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),E=[],T=0;T<m;T++)E[T]=this.i(T)^v.i(T);return new a(E,this.h^v.h)};function L(v){for(var m=v.g.length+1,E=[],T=0;T<m;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new a(E,v.h)}function x(v,m){var E=m>>5;m%=32;for(var T=v.g.length-E,w=[],P=0;P<T;P++)w[P]=0<m?v.i(P+E)>>>m|v.i(P+E+1)<<32-m:v.i(P+E);return new a(w,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,xd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=f,Zr=a}).apply(typeof Kh<"u"?Kh:typeof self<"u"?self:typeof window<"u"?window:{});var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $d,Vd,mi,Fd,Gs,Vo,Ud,Bd,Hd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ms=="object"&&Ms];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(o,h){if(h)e:{var d=n;o=o.split(".");for(var y=0;y<o.length-1;y++){var k=o[y];if(!(k in d))break e;d=d[k]}o=o[o.length-1],y=d[o],h=h(y),h!=y&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function s(o,h){o instanceof String&&(o+="");var d=0,y=!1,k={next:function(){if(!y&&d<o.length){var V=d++;return{value:h(V,o[V]),done:!1}}return y=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(o){return o||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function c(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function p(o,h,d){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,y),o.apply(h,k)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function S(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function R(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(y,k,V){for(var K=Array(arguments.length-2),we=2;we<arguments.length;we++)K[we-2]=arguments[we];return h.prototype[k].apply(y,K)}}function _(o){const h=o.length;if(0<h){const d=Array(h);for(let y=0;y<h;y++)d[y]=o[y];return d}return[]}function A(o,h){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(l(y)){const k=o.length||0,V=y.length||0;o.length=k+V;for(let K=0;K<V;K++)o[k+K]=y[K]}else o.push(y)}}class b{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(o){return/^[\s\xa0]*$/.test(o)}function N(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var L=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function x(o,h,d){for(const y in o)h.call(d,o[y],y,o)}function v(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function m(o){const h={};for(const d in o)h[d]=o[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,h){let d,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(d in y)o[d]=y[d];for(let V=0;V<E.length;V++)d=E[V],Object.prototype.hasOwnProperty.call(y,d)&&(o[d]=y[d])}}function w(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function P(o){u.setTimeout(()=>{throw o},0)}function I(){var o=ee;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class j{constructor(){this.h=this.g=null}add(h,d){const y=X.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var X=new b(()=>new ge,o=>o.reset());class ge{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,re=!1,ee=new j,W=()=>{const o=u.Promise.resolve(void 0);Ee=()=>{o.then(J)}};var J=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){P(d)}var h=X;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}re=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Me=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,h),u.removeEventListener("test",d,h)}catch{}return o}();function Ge(o,h){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(L){e:{try{O(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Z[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ge.aa.h.call(this)}}R(Ge,pe);var Z={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),Ve=0;function Re(o,h,d,y,k){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=k,this.key=++Ve,this.da=this.fa=!1}function Pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function bt(o){this.src=o,this.g={},this.h=0}bt.prototype.add=function(o,h,d,y,k){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var K=Y(o,h,y,k);return-1<K?(h=o[K],d||(h.fa=!1)):(h=new Re(h,this.src,V,!!y,k),h.fa=d,o.push(h)),h};function Nt(o,h){var d=h.type;if(d in o.g){var y=o.g[d],k=Array.prototype.indexOf.call(y,h,void 0),V;(V=0<=k)&&Array.prototype.splice.call(y,k,1),V&&(Pe(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Y(o,h,d,y){for(var k=0;k<o.length;++k){var V=o[k];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==y)return k}return-1}var ce="closure_lm_"+(1e6*Math.random()|0),je={};function nt(o,h,d,y,k){if(Array.isArray(h)){for(var V=0;V<h.length;V++)nt(o,h[V],d,y,k);return null}return d=ue(d),o&&o[me]?o.K(h,d,c(y)?!!y.capture:!!y,k):xr(o,h,d,!1,y,k)}function xr(o,h,d,y,k,V){if(!h)throw Error("Invalid event type");var K=c(k)?!!k.capture:!!k,we=q(o);if(we||(o[ce]=we=new bt(o)),d=we.add(h,d,y,K,V),d.proxy)return d;if(y=C(),d.proxy=y,y.src=o,y.listener=d,o.addEventListener)Me||(k=K),k===void 0&&(k=!1),o.addEventListener(h.toString(),y,k);else if(o.attachEvent)o.attachEvent(B(h.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function C(){function o(d){return h.call(o.src,o.listener,d)}const h=U;return o}function M(o,h,d,y,k){if(Array.isArray(h))for(var V=0;V<h.length;V++)M(o,h[V],d,y,k);else y=c(y)?!!y.capture:!!y,d=ue(d),o&&o[me]?(o=o.i,h=String(h).toString(),h in o.g&&(V=o.g[h],d=Y(V,d,y,k),-1<d&&(Pe(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete o.g[h],o.h--)))):o&&(o=q(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Y(h,d,y,k)),(d=-1<o?h[o]:null)&&$(d))}function $(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[me])Nt(h.i,o);else{var d=o.type,y=o.proxy;h.removeEventListener?h.removeEventListener(d,y,o.capture):h.detachEvent?h.detachEvent(B(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=q(h))?(Nt(d,o),d.h==0&&(d.src=null,h[ce]=null)):Pe(o)}}}function B(o){return o in je?je[o]:je[o]="on"+o}function U(o,h){if(o.da)o=!0;else{h=new Ge(h,this);var d=o.listener,y=o.ha||o.src;o.fa&&$(o),o=d.call(y,h)}return o}function q(o){return o=o[ce],o instanceof bt?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(o){return typeof o=="function"?o:(o[te]||(o[te]=function(h){return o.handleEvent(h)}),o[te])}function ie(){oe.call(this),this.i=new bt(this),this.M=this,this.F=null}R(ie,oe),ie.prototype[me]=!0,ie.prototype.removeEventListener=function(o,h,d,y){M(this,o,h,d,y)};function de(o,h){var d,y=o.F;if(y)for(d=[];y;y=y.F)d.push(y);if(o=o.M,y=h.type||h,typeof h=="string")h=new pe(h,o);else if(h instanceof pe)h.target=h.target||o;else{var k=h;h=new pe(y,o),T(h,k)}if(k=!0,d)for(var V=d.length-1;0<=V;V--){var K=h.g=d[V];k=vt(K,y,!0,h)&&k}if(K=h.g=o,k=vt(K,y,!0,h)&&k,k=vt(K,y,!1,h)&&k,d)for(V=0;V<d.length;V++)K=h.g=d[V],k=vt(K,y,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],y=0;y<d.length;y++)Pe(d[y]);delete o.g[h],o.h--}}this.F=null},ie.prototype.K=function(o,h,d,y){return this.i.add(String(o),h,!1,d,y)},ie.prototype.L=function(o,h,d,y){return this.i.add(String(o),h,!0,d,y)};function vt(o,h,d,y){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,V=0;V<h.length;++V){var K=h[V];if(K&&!K.da&&K.capture==d){var we=K.listener,We=K.ha||K.src;K.fa&&Nt(o.i,K),k=we.call(We,y)!==!1&&k}}return k&&!y.defaultPrevented}function _t(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(o,h||0)}function dt(o){o.g=_t(()=>{o.g=null,o.i&&(o.i=!1,dt(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class $r extends oe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Tt(o){oe.call(this),this.h=o,this.g={}}R(Tt,oe);var Mt=[];function Kt(o){x(o.g,function(h,d){this.g.hasOwnProperty(d)&&$(h)},o),o.g={}}Tt.prototype.N=function(){Tt.aa.N.call(this),Kt(this)},Tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=u.JSON.stringify,fs=u.JSON.parse,za=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function ri(){}ri.prototype.h=null;function ds(o){return o.h||(o.h=o.i())}function ps(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ni(){pe.call(this,"d")}R(ni,pe);function ii(){pe.call(this,"c")}R(ii,pe);var Wt={},gs=null;function un(){return gs=gs||new ie}Wt.La="serverreachability";function ms(o){pe.call(this,Wt.La,o)}R(ms,pe);function Fr(o){const h=un();de(h,new ms(h))}Wt.STAT_EVENT="statevent";function vs(o,h){pe.call(this,Wt.STAT_EVENT,o),this.stat=h}R(vs,pe);function Ke(o){const h=un();de(h,new vs(h,o))}Wt.Ma="timingevent";function si(o,h){pe.call(this,Wt.Ma,o),this.size=h}R(si,pe);function Ur(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},h)}function Br(){this.g=!0}Br.prototype.xa=function(){this.g=!1};function Ya(o,h,d,y,k,V){o.info(function(){if(o.g)if(V)for(var K="",we=V.split("&"),We=0;We<we.length;We++){var Ie=we[We].split("=");if(1<Ie.length){var Qe=Ie[0];Ie=Ie[1];var Xe=Qe.split("_");K=2<=Xe.length&&Xe[1]=="type"?K+(Qe+"="+Ie+"&"):K+(Qe+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+h+`
`+d+`
`+K})}function ja(o,h,d,y,k,V,K){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+h+`
`+d+`
`+V+" "+K})}function hr(o,h,d,y){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Xa(o,d)+(y?" "+y:"")})}function Qa(o,h){o.info(function(){return"TIMEOUT: "+h})}Br.prototype.info=function(){};function Xa(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var y=d[o];if(!(2>y.length)){var k=y[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return cr(d)}catch{return h}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_s={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ai;function cn(){}R(cn,ri),cn.prototype.g=function(){return new XMLHttpRequest},cn.prototype.i=function(){return{}},ai=new cn;function Ot(o,h,d,y){this.j=o,this.i=h,this.l=d,this.R=y||1,this.U=new Tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var Es={},hn={};function Lt(o,h,d){o.L=1,o.v=Ss(Zt(h)),o.m=d,o.P=!0,H(o,null)}function H(o,h){o.F=Date.now(),Se(o),o.A=Zt(o.v);var d=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),dh(d.i,"t",y),o.C=0,d=o.j.J,o.h=new ys,o.g=Nh(o.j,d?h:null,!o.m),0<o.O&&(o.M=new $r(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,y=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(Mt[0]=k.toString()),k=Mt);for(var V=0;V<k.length;V++){var K=nt(d,k[V],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Fr(),Ya(o.i,o.u,o.A,o.l,o.R,o.m)}Ot.prototype.ca=function(o){o=o.target;const h=this.M;h&&zt(o)==3?h.j():this.Y(o)},Ot.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=zt(this.g);var h=this.g.Ba();const gn=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Eh(this.g)))){this.J||Xe!=4||h==7||(h==8||0>=gn?Fr(3):Fr(2)),St(this);var d=this.g.Z();this.X=d;t:if(As(this)){var y=Eh(this.g);o="";var k=y.length,V=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wt(this),yt(this);var K="";break t}this.h.i=new u.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,o+=this.h.i.decode(y[h],{stream:!(V&&h==k-1)});y.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,ja(this.i,this.u,this.A,this.l,this.R,Xe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,We=this.g;if((we=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(we)){var Ie=we;break t}}Ie=null}if(d=Ie)hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kt(this,d);else{this.o=!1,this.s=3,Ke(12),wt(this),yt(this);break e}}if(this.P){d=!0;let Rt;for(;!this.J&&this.C<K.length;)if(Rt=Ja(this,K),Rt==hn){Xe==4&&(this.s=4,Ke(14),d=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==Es){this.s=4,Ke(15),hr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else hr(this.i,this.l,Rt,null),kt(this,Rt);if(As(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||K.length!=0||this.h.h||(this.s=1,Ke(16),d=!1),this.o=this.o&&d,!d)hr(this.i,this.l,K,"[Invalid Chunked Response]"),wt(this),yt(this);else if(0<K.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),so(Qe),Qe.M=!0,Ke(11))}}else hr(this.i,this.l,K,null),kt(this,K);Xe==4&&wt(this),this.o&&!this.J&&(Xe==4?Ch(this.j,this):(this.o=!1,Se(this)))}else Lm(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),wt(this),yt(this)}}}catch{}finally{}};function As(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ja(o,h){var d=o.C,y=h.indexOf(`
`,d);return y==-1?hn:(d=Number(h.substring(d,y)),isNaN(d)?Es:(y+=1,y+d>h.length?hn:(h=h.slice(y,y+d),o.C=y+d,h)))}Ot.prototype.cancel=function(){this.J=!0,wt(this)};function Se(o){o.S=Date.now()+o.I,pt(o,o.I)}function pt(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ur(g(o.ba,o),h)}function St(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Ot.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Qa(this.i,this.A),this.L!=2&&(Fr(),Ke(17)),wt(this),this.s=2,yt(this)):pt(this,this.S-o)};function yt(o){o.j.G==0||o.J||Ch(o.j,o)}function wt(o){St(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Kt(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function kt(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||eo(d.h,o))){if(!o.K&&eo(d.h,o)&&d.G==3){try{var y=d.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ds(d),Cs(d);else break e;io(d),Ke(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ur(g(d.Za,d),6e3));if(1>=ih(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Gr(d,11)}else if((o.K||d.g==o)&&Ds(d),!D(h))for(k=d.Da.g.parse(h),h=0;h<k.length;h++){let Ie=k[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const Qe=Ie[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Xe=Ie[4];Xe!=null&&(d.Aa=Xe,d.j.info("SVER="+d.Aa));const gn=Ie[5];gn!=null&&typeof gn=="number"&&0<gn&&(y=1.5*gn,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const Rt=o.g;if(Rt){const Ns=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var V=y.h;V.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(to(V,V.h),V.h=null))}if(y.D){const ao=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ao&&(y.ya=ao,De(y.I,y.D,ao))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var K=o;if(y.qa=bh(y,y.J?y.ia:null,y.W),K.K){sh(y.h,K);var we=K,We=y.L;We&&(we.I=We),we.B&&(St(we),Se(we)),y.g=K}else wh(y);0<d.i.length&&Ps(d)}else Ie[0]!="stop"&&Ie[0]!="close"||Gr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Gr(d,7):no(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Fr(4)}catch{}}var fn=class{constructor(o,h){this.g=o,this.map=h}};function rh(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ih(o){return o.h?1:o.g?o.g.size:0}function eo(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function to(o,h){o.g?o.g.add(h):o.h=h}function sh(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ah(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return _(o.i)}function ym(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var h=[],d=o.length,y=0;y<d;y++)h.push(o[y]);return h}h=[],d=0;for(y in o)h[d++]=o[y];return h}function Em(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const y in o)h[d++]=y;return h}}}function oh(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=Em(o),y=ym(o),k=y.length,V=0;V<k;V++)h.call(void 0,y[V],d&&d[V],o)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Am(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var y=o[d].indexOf("="),k=null;if(0<=y){var V=o[d].substring(0,y);k=o[d].substring(y+1)}else V=o[d];h(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Hr){this.h=o.h,Is(this,o.j),this.o=o.o,this.g=o.g,Ts(this,o.s),this.l=o.l;var h=o.i,d=new li;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),lh(this,d),this.m=o.m}else o&&(h=String(o).match(uh))?(this.h=!1,Is(this,h[1]||"",!0),this.o=oi(h[2]||""),this.g=oi(h[3]||"",!0),Ts(this,h[4]),this.l=oi(h[5]||"",!0),lh(this,h[6]||"",!0),this.m=oi(h[7]||"")):(this.h=!1,this.i=new li(null,this.h))}Hr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(ui(h,ch,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(ui(h,ch,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ui(d,d.charAt(0)=="/"?Sm:Tm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ui(d,Rm)),o.join("")};function Zt(o){return new Hr(o)}function Is(o,h,d){o.j=d?oi(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Ts(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function lh(o,h,d){h instanceof li?(o.i=h,Cm(o.i,o.h)):(d||(h=ui(h,wm)),o.i=new li(h,o.h))}function De(o,h,d){o.i.set(h,d)}function Ss(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function oi(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ui(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,Im),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Im(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ch=/[#\/\?@]/g,Tm=/[#\?:]/g,Sm=/[#\?]/g,wm=/[#\?@]/g,Rm=/#/g;function li(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function fr(o){o.g||(o.g=new Map,o.h=0,o.i&&Am(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}r=li.prototype,r.add=function(o,h){fr(this),this.i=null,o=dn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function hh(o,h){fr(o),h=dn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function fh(o,h){return fr(o),h=dn(o,h),o.g.has(h)}r.forEach=function(o,h){fr(this),this.g.forEach(function(d,y){d.forEach(function(k){o.call(h,k,y,this)},this)},this)},r.na=function(){fr(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let y=0;y<h.length;y++){const k=o[y];for(let V=0;V<k.length;V++)d.push(h[y])}return d},r.V=function(o){fr(this);let h=[];if(typeof o=="string")fh(this,o)&&(h=h.concat(this.g.get(dn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},r.set=function(o,h){return fr(this),this.i=null,o=dn(this,o),fh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},r.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function dh(o,h,d){hh(o,h),0<d.length&&(o.i=null,o.g.set(dn(o,h),_(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var y=h[d];const V=encodeURIComponent(String(y)),K=this.V(y);for(y=0;y<K.length;y++){var k=V;K[y]!==""&&(k+="="+encodeURIComponent(String(K[y]))),o.push(k)}}return this.i=o.join("&")};function dn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Cm(o,h){h&&!o.j&&(fr(o),o.i=null,o.g.forEach(function(d,y){var k=y.toLowerCase();y!=k&&(hh(this,y),dh(this,k,d))},o)),o.j=h}function Pm(o,h){const d=new Br;if(u.Image){const y=new Image;y.onload=S(dr,d,"TestLoadImage: loaded",!0,h,y),y.onerror=S(dr,d,"TestLoadImage: error",!1,h,y),y.onabort=S(dr,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=S(dr,d,"TestLoadImage: timeout",!1,h,y),u.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else h(!1)}function Dm(o,h){const d=new Br,y=new AbortController,k=setTimeout(()=>{y.abort(),dr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:y.signal}).then(V=>{clearTimeout(k),V.ok?dr(d,"TestPingServer: ok",!0,h):dr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),dr(d,"TestPingServer: error",!1,h)})}function dr(o,h,d,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(d)}catch{}}function bm(){this.g=new za}function Nm(o,h,d){const y=d||"";try{oh(o,function(k,V){let K=k;c(k)&&(K=cr(k)),h.push(y+V+"="+encodeURIComponent(K))})}catch(k){throw h.push(y+"type="+encodeURIComponent("_badmap")),k}}function ci(o){this.l=o.Ub||null,this.j=o.eb||!1}R(ci,ri),ci.prototype.g=function(){return new ws(this.l,this.j)},ci.prototype.i=function(o){return function(){return o}}({});function ws(o,h){ie.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ws,ie),r=ws.prototype,r.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,fi(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ph(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ph(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?hi(this):fi(this),this.readyState==3&&ph(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,hi(this))},r.Qa=function(o){this.g&&(this.response=o,hi(this))},r.ga=function(){this.g&&hi(this)};function hi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,fi(o)}r.setRequestHeader=function(o,h){this.u.append(o,h)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function fi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gh(o){let h="";return x(o,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function ro(o,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=gh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,h,d))}function Le(o){ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Le,ie);var Mm=/^https?$/i,Om=["POST","PUT"];r=Le.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ai.g(),this.v=this.o?ds(this.o):ds(ai),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(V){mh(this,V);return}if(o=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)d.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())d.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),k=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Om,h,void 0))||y||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of d)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yh(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){mh(this,V)}};function mh(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,vh(o),Rs(o)}function vh(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Rs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rs(this,!0)),Le.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_h(this):this.bb())},r.bb=function(){_h(this)};function _h(o){if(o.h&&typeof a<"u"&&(!o.v[1]||zt(o)!=4||o.Z()!=2)){if(o.u&&zt(o)==4)_t(o.Ea,0,o);else if(de(o,"readystatechange"),zt(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=K===0){var k=String(o.D).match(uh)[1]||null;!k&&u.self&&u.self.location&&(k=u.self.location.protocol.slice(0,-1)),y=!Mm.test(k?k.toLowerCase():"")}d=y}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var V=2<zt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",vh(o)}}finally{Rs(o)}}}}function Rs(o,h){if(o.g){yh(o);const d=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||de(o,"ready");try{d.onreadystatechange=y}catch{}}}function yh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function zt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),fs(h)}};function Eh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lm(o){const h={};o=(o.g&&2<=zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(D(o[y]))continue;var d=w(o[y]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[k]||[];h[k]=V,V.push(d)}v(h,function(y){return y.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Ah(o){this.Aa=0,this.i=[],this.j=new Br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=di("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=di("baseRetryDelayMs",5e3,o),this.cb=di("retryDelaySeedMs",1e4,o),this.Wa=di("forwardChannelMaxRetries",2,o),this.wa=di("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(o&&o.concurrentRequestLimit),this.Da=new bm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ah.prototype,r.la=8,r.G=1,r.connect=function(o,h,d,y){Ke(0),this.W=o,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=bh(this,null,this.W),Ps(this)};function no(o){if(Ih(o),o.G==3){var h=o.U++,d=Zt(o.I);if(De(d,"SID",o.K),De(d,"RID",h),De(d,"TYPE","terminate"),pi(o,d),h=new Ot(o,o.j,h),h.L=2,h.v=Ss(Zt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=h.v,d=!0),d||(h.g=Nh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Se(h)}Dh(o)}function Cs(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function Ih(o){Cs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ps(o){if(!nh(o.h)&&!o.s){o.s=!0;var h=o.Ga;Ee||W(),re||(Ee(),re=!0),ee.add(h,o),o.B=0}}function km(o,h){return ih(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ur(g(o.Ga,o,h),Ph(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Ot(this,this.j,o);let V=this.o;if(this.S&&(V?(V=m(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Sh(this,k,h),d=Zt(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),pi(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(gh(V)))+"&"+h:this.m&&ro(d,this.m,V)),to(this.h,k),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),k.T=!0,Lt(k,d,null)):Lt(k,d,h),this.G=2}}else this.G==3&&(o?Th(this,o):this.i.length==0||nh(this.h)||Th(this))};function Th(o,h){var d;h?d=h.l:d=o.U++;const y=Zt(o.I);De(y,"SID",o.K),De(y,"RID",d),De(y,"AID",o.T),pi(o,y),o.m&&o.o&&ro(y,o.m,o.o),d=new Ot(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Sh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),to(o.h,d),Lt(d,y,h)}function pi(o,h){o.H&&x(o.H,function(d,y){De(h,y,d)}),o.l&&oh({},function(d,y){De(h,y,d)})}function Sh(o,h,d){d=Math.min(o.i.length,d);var y=o.l?g(o.l.Na,o.l,o):null;e:{var k=o.i;let V=-1;for(;;){const K=["count="+d];V==-1?0<d?(V=k[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let we=!0;for(let We=0;We<d;We++){let Ie=k[We].g;const Qe=k[We].map;if(Ie-=V,0>Ie)V=Math.max(0,k[We].g-100),we=!1;else try{Nm(Qe,K,"req"+Ie+"_")}catch{y&&y(Qe)}}if(we){y=K.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,y}function wh(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Ee||W(),re||(Ee(),re=!0),ee.add(h,o),o.v=0}}function io(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ur(g(o.Fa,o),Ph(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ur(g(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Cs(this),Rh(this))};function so(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Rh(o){o.g=new Ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=Zt(o.qa);De(h,"RID","rpc"),De(h,"SID",o.K),De(h,"AID",o.T),De(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(h,"TO",o.ja),De(h,"TYPE","xmlhttp"),pi(o,h),o.m&&o.o&&ro(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ss(Zt(h)),d.m=null,d.P=!0,H(d,o)}r.Za=function(){this.C!=null&&(this.C=null,Cs(this),io(this),Ke(19))};function Ds(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ch(o,h){var d=null;if(o.g==h){Ds(o),so(o),o.g=null;var y=2}else if(eo(o.h,h))d=h.D,sh(o.h,h),y=1;else return;if(o.G!=0){if(h.o)if(y==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var k=o.B;y=un(),de(y,new si(y,d)),Ps(o)}else wh(o);else if(k=h.s,k==3||k==0&&0<h.X||!(y==1&&km(o,h)||y==2&&io(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),k){case 1:Gr(o,5);break;case 4:Gr(o,10);break;case 3:Gr(o,6);break;default:Gr(o,2)}}}function Ph(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function Gr(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),y=o.Xa;const k=!y;y=new Hr(y||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Is(y,"https"),Ss(y),k?Pm(y.toString(),d):Dm(y.toString(),d)}else Ke(2);o.G=0,o.l&&o.l.sa(h),Dh(o),Ih(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Dh(o){if(o.G=0,o.ka=[],o.l){const h=ah(o.h);(h.length!=0||o.i.length!=0)&&(A(o.ka,h),A(o.ka,o.i),o.h.i.length=0,_(o.i),o.i.length=0),o.l.ra()}}function bh(o,h,d){var y=d instanceof Hr?Zt(d):new Hr(d);if(y.g!="")h&&(y.g=h+"."+y.g),Ts(y,y.s);else{var k=u.location;y=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var V=new Hr(null);y&&Is(V,y),h&&(V.g=h),k&&Ts(V,k),d&&(V.l=d),y=V}return d=o.D,h=o.ya,d&&h&&De(y,d,h),De(y,"VER",o.la),pi(o,y),y}function Nh(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new Le(new ci({eb:d})):new Le(o.pa),h.Ha(o.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}r=Mh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function bs(){}bs.prototype.g=function(o,h){return new gt(o,h)};function gt(o,h){ie.call(this),this.g=new Ah(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!D(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!D(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new pn(this)}R(gt,ie),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){no(this.g)},gt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=cr(o),o=d);h.i.push(new fn(h.Ya++,o)),h.G==3&&Ps(h)},gt.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,gt.aa.N.call(this)};function Oh(o){ni.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}R(Oh,ni);function Lh(){ii.call(this),this.status=1}R(Lh,ii);function pn(o){this.g=o}R(pn,Mh),pn.prototype.ua=function(){de(this.g,"a")},pn.prototype.ta=function(o){de(this.g,new Oh(o))},pn.prototype.sa=function(o){de(this.g,new Lh)},pn.prototype.ra=function(){de(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Hd=function(){return new bs},Bd=function(){return un()},Ud=Wt,Vo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Gs=ln,_s.COMPLETE="complete",Fd=_s,ps.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",ie.prototype.listen=ie.prototype.K,mi=ps,Vd=ci,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,$d=Le}).apply(typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{});const Wh="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let qn="10.13.1";/**
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
 */const Xr=new Jl("@firebase/firestore");function gi(){return Xr.logLevel}function Q(r,...e){if(Xr.logLevel<=ve.DEBUG){const t=e.map(rc);Xr.debug(`Firestore (${qn}): ${r}`,...t)}}function sr(r,...e){if(Xr.logLevel<=ve.ERROR){const t=e.map(rc);Xr.error(`Firestore (${qn}): ${r}`,...t)}}function On(r,...e){if(Xr.logLevel<=ve.WARN){const t=e.map(rc);Xr.warn(`Firestore (${qn}): ${r}`,...t)}}function rc(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function fe(r="Unexpected state"){const e=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+r;throw sr(e),new Error(e)}function Ue(r,e){r||fe()}function ye(r,e){return r}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends lr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Gd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class g_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class m_{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ue(typeof n.accessToken=="string"),new Gd(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new et(e)}}class v_{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class __{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new v_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new y_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function A_(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class I_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=A_(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Te(r,e){return r<e?-1:r>e?1:0}function Ln(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
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
 */class lt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new lt(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new lt(0,0))}static max(){return new le(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ci{constructor(e,t,n){t===void 0?t=0:t>e.length&&fe(),n===void 0?n=e.length-t:n>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ke extends Ci{construct(e,t,n){return new ke(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ne(z.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ke(t)}static emptyPath(){return new ke([])}}const T_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ci{construct(e,t,n){return new st(e,t,n)}static isValidIdentifier(e){return T_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new ne(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(s(),i++)}if(s(),a)throw new ne(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(t)}static emptyPath(){return new st([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(ke.fromString(e))}static fromName(e){return new se(ke.fromString(e).popFirst(5))}static empty(){return new se(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new ke(e.slice()))}}function S_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=le.fromTimestamp(n===1e9?new lt(t+1,0):new lt(t,n));return new Rr(i,se.empty(),e)}function w_(r){return new Rr(r.readTime,r.key,-1)}class Rr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rr(le.min(),se.empty(),-1)}static max(){return new Rr(le.max(),se.empty(),-1)}}function R_(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(r.documentKey,e.documentKey),t!==0?t:Te(r.largestBatchId,e.largestBatchId))}/**
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
 */const C_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class P_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nc(r){if(r.code!==z.FAILED_PRECONDITION||r.message!==C_)throw r;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):F.reject(t)}static resolve(e){return new F((t,n)=>{t(e)})}static reject(e){return new F((t,n)=>{n(e)})}static waitFor(e){return new F((t,n)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>n(l))}),a=!0,s===i&&t()})}static or(e){let t=F.resolve(!1);for(const n of e)t=t.next(i=>i?F.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new F((n,i)=>{const s=e.length,a=new Array(s);let u=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next(f=>{a[c]=f,++u,u===s&&n(a)},f=>i(f))}})}static doWhile(e,t){return new F((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}function D_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Bi(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ic.oe=-1;function Aa(r){return r==null}function Fo(r){return r===0&&1/r==-1/0}/**
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
 */function Zh(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ia(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function b_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class $e{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new $e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ze.RED,this.left=i??Ze.EMPTY,this.right=s??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ze(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ze.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zh(this.data.getIterator())}getIteratorFrom(e){return new zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yr{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new yr([])}unionWith(e){let t=new ze(st.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new yr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ln(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qd("Invalid base64 string: "+s):s}}(e);return new Ye(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const N_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=N_.exec(r);if(Ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:xe(r.seconds),nanos:xe(r.nanos)}}function xe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jr(r){return typeof r=="string"?Ye.fromBase64String(r):Ye.fromUint8Array(r)}/**
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
 */function sc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ac(r){const e=r.mapValue.fields.__previous_value__;return sc(e)?ac(e):e}function Pi(r){const e=Cr(r.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */class M_{constructor(e,t,n,i,s,a,u,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=c}}class Di{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sc(r)?4:L_(r)?9007199254740991:O_(r)?10:11:fe()}function Ut(r,e){if(r===e)return!0;const t=en(r);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Pi(r).isEqual(Pi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Cr(i.timestampValue),u=Cr(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=xe(i.doubleValue),u=xe(s.doubleValue);return a===u?Fo(a)===Fo(u):isNaN(a)&&isNaN(u)}return!1}(r,e);case 9:return Ln(r.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Zh(a)!==Zh(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Ut(a[l],u[l])))return!1;return!0}(r,e);default:return fe()}}function bi(r,e){return(r.values||[]).find(t=>Ut(t,e))!==void 0}function kn(r,e){if(r===e)return 0;const t=en(r),n=en(e);if(t!==n)return Te(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(r.booleanValue,e.booleanValue);case 2:return function(s,a){const u=xe(s.integerValue||s.doubleValue),l=xe(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,e);case 3:return Yh(r.timestampValue,e.timestampValue);case 4:return Yh(Pi(r),Pi(e));case 5:return Te(r.stringValue,e.stringValue);case 6:return function(s,a){const u=Jr(s),l=Jr(a);return u.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),l=a.split("/");for(let c=0;c<u.length&&c<l.length;c++){const f=Te(u[c],l[c]);if(f!==0)return f}return Te(u.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,a){const u=Te(xe(s.latitude),xe(a.latitude));return u!==0?u:Te(xe(s.longitude),xe(a.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return jh(r.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,c,f;const p=s.fields||{},g=a.fields||{},S=(u=p.value)===null||u===void 0?void 0:u.arrayValue,R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,_=Te(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return _!==0?_:jh(S,R)}(r.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ls.mapValue&&a===Ls.mapValue)return 0;if(s===Ls.mapValue)return 1;if(a===Ls.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),c=a.fields||{},f=Object.keys(c);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Te(l[p],f[p]);if(g!==0)return g;const S=kn(u[l[p]],c[f[p]]);if(S!==0)return S}return Te(l.length,f.length)}(r.mapValue,e.mapValue);default:throw fe()}}function Yh(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Te(r,e);const t=Cr(r),n=Cr(e),i=Te(t.seconds,n.seconds);return i!==0?i:Te(t.nanos,n.nanos)}function jh(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=kn(t[i],n[i]);if(s)return s}return Te(t.length,n.length)}function xn(r){return Uo(r)}function Uo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Cr(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Jr(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return se.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Uo(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of n)s?s=!1:i+=",",i+=`${a}:${Uo(t.fields[a])}`;return i+"}"}(r.mapValue):fe()}function Bo(r){return!!r&&"integerValue"in r}function oc(r){return!!r&&"arrayValue"in r}function Qh(r){return!!r&&"nullValue"in r}function Xh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function fo(r){return!!r&&"mapValue"in r}function O_(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ia(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=yi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function L_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(t)}setAll(e){let t=st.emptyPath(),n={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=u.popLast()}a?n[u.lastSegment()]=yi(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ia(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new xt(yi(this.value))}}/**
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
 */class tt{constructor(e,t,n,i,s,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new tt(e,0,le.min(),le.min(),le.min(),xt.empty(),0)}static newFoundDocument(e,t,n,i){return new tt(e,1,t,le.min(),n,i,0)}static newNoDocument(e,t){return new tt(e,2,t,le.min(),le.min(),xt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,le.min(),le.min(),xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sa{constructor(e,t){this.position=e,this.inclusive=t}}function Jh(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],a=r.position[i];if(s.field.isKeyField()?n=se.comparator(se.fromName(a.referenceValue),t.key):n=kn(a,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function ef(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Ut(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class aa{constructor(e,t="asc"){this.field=e,this.dir=t}}function k_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Kd{}class Be extends Kd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new $_(e,t,n):t==="array-contains"?new U_(e,n):t==="in"?new B_(e,n):t==="not-in"?new H_(e,n):t==="array-contains-any"?new G_(e,n):new Be(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new V_(e,n):new F_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(kn(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends Kd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Bt(e,t)}matches(e){return Wd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wd(r){return r.op==="and"}function Zd(r){return x_(r)&&Wd(r)}function x_(r){for(const e of r.filters)if(e instanceof Bt)return!1;return!0}function Ho(r){if(r instanceof Be)return r.field.canonicalString()+r.op.toString()+xn(r.value);if(Zd(r))return r.filters.map(e=>Ho(e)).join(",");{const e=r.filters.map(t=>Ho(t)).join(",");return`${r.op}(${e})`}}function zd(r,e){return r instanceof Be?function(n,i){return i instanceof Be&&n.op===i.op&&n.field.isEqual(i.field)&&Ut(n.value,i.value)}(r,e):r instanceof Bt?function(n,i){return i instanceof Bt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,a,u)=>s&&zd(a,i.filters[u]),!0):!1}(r,e):void fe()}function Yd(r){return r instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${xn(t.value)}`}(r):r instanceof Bt?function(t){return t.op.toString()+" {"+t.getFilters().map(Yd).join(" ,")+"}"}(r):"Filter"}class $_ extends Be{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class V_ extends Be{constructor(e,t){super(e,"in",t),this.keys=jd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class F_ extends Be{constructor(e,t){super(e,"not-in",t),this.keys=jd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>se.fromName(n.referenceValue))}class U_ extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oc(t)&&bi(t.arrayValue,this.value)}}class B_ extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bi(this.value.arrayValue,t)}}class H_ extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!bi(this.value.arrayValue,t)}}class G_ extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>bi(this.value.arrayValue,n))}}/**
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
 */class q_{constructor(e,t=null,n=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function tf(r,e=null,t=[],n=[],i=null,s=null,a=null){return new q_(r,e,t,n,i,s,a)}function uc(r){const e=ye(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ho(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Aa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>xn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>xn(n)).join(",")),e.ue=t}return e.ue}function lc(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!k_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!zd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ef(r.startAt,e.startAt)&&ef(r.endAt,e.endAt)}function Go(r){return se.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ta{constructor(e,t=null,n=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function K_(r,e,t,n,i,s,a,u){return new Ta(r,e,t,n,i,s,a,u)}function Qd(r){return new Ta(r)}function rf(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function W_(r){return r.collectionGroup!==null}function Ei(r){const e=ye(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ze(st.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(u=u.add(c.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new aa(s,n))}),t.has(st.keyField().canonicalString())||e.ce.push(new aa(st.keyField(),n))}return e.ce}function $t(r){const e=ye(r);return e.le||(e.le=Z_(e,Ei(r))),e.le}function Z_(r,e){if(r.limitType==="F")return tf(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new aa(i.field,s)});const t=r.endAt?new sa(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new sa(r.startAt.position,r.startAt.inclusive):null;return tf(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function qo(r,e,t){return new Ta(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Sa(r,e){return lc($t(r),$t(e))&&r.limitType===e.limitType}function Xd(r){return`${uc($t(r))}|lt:${r.limitType}`}function mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>Yd(i)).join(", ")}]`),Aa(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>xn(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>xn(i)).join(",")),`Target(${n})`}($t(r))}; limitType=${r.limitType})`}function wa(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):se.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Ei(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(a,u,l){const c=Jh(a,u,l);return a.inclusive?c<=0:c<0}(n.startAt,Ei(n),i)||n.endAt&&!function(a,u,l){const c=Jh(a,u,l);return a.inclusive?c>=0:c>0}(n.endAt,Ei(n),i))}(r,e)}function z_(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Jd(r){return(e,t)=>{let n=!1;for(const i of Ei(r)){const s=Y_(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Y_(r,e,t){const n=r.field.isKeyField()?se.comparator(e.key,t.key):function(s,a,u){const l=a.data.field(s),c=u.data.field(s);return l!==null&&c!==null?kn(l,c):fe()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return fe()}}/**
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
 */class Kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ia(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const j_=new $e(se.comparator);function Pr(){return j_}const ep=new $e(se.comparator);function vi(...r){let e=ep;for(const t of r)e=e.insert(t.key,t);return e}function Q_(r){let e=ep;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Wr(){return Ai()}function tp(){return Ai()}function Ai(){return new Kn(r=>r.toString(),(r,e)=>r.isEqual(e))}const X_=new ze(se.comparator);function Ae(...r){let e=X_;for(const t of r)e=e.add(t);return e}const J_=new ze(Te);function e0(){return J_}/**
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
 */function t0(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function r0(r){return{integerValue:""+r}}/**
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
 */class Ra{constructor(){this._=void 0}}function n0(r,e,t){return r instanceof Ko?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sc(s)&&(s=ac(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):r instanceof oa?rp(r,e):r instanceof ua?np(r,e):function(i,s){const a=s0(i,s),u=nf(a)+nf(i.Pe);return Bo(a)&&Bo(i.Pe)?r0(u):t0(i.serializer,u)}(r,e)}function i0(r,e,t){return r instanceof oa?rp(r,e):r instanceof ua?np(r,e):t}function s0(r,e){return r instanceof Wo?function(n){return Bo(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Ko extends Ra{}class oa extends Ra{constructor(e){super(),this.elements=e}}function rp(r,e){const t=ip(e);for(const n of r.elements)t.some(i=>Ut(i,n))||t.push(n);return{arrayValue:{values:t}}}class ua extends Ra{constructor(e){super(),this.elements=e}}function np(r,e){let t=ip(e);for(const n of r.elements)t=t.filter(i=>!Ut(i,n));return{arrayValue:{values:t}}}class Wo extends Ra{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nf(r){return xe(r.integerValue||r.doubleValue)}function ip(r){return oc(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function a0(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof oa&&i instanceof oa||n instanceof ua&&i instanceof ua?Ln(n.elements,i.elements,Ut):n instanceof Wo&&i instanceof Wo?Ut(n.Pe,i.Pe):n instanceof Ko&&i instanceof Ko}(r.transform,e.transform)}class Yr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yr}static exists(e){return new Yr(void 0,e)}static updateTime(e){return new Yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class cc{}function sp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new u0(r.key,Yr.none()):new hc(r.key,r.data,Yr.none());{const t=r.data,n=xt.empty();let i=new ze(st.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?n.delete(s):n.set(s,a),i=i.add(s)}return new Ca(r.key,n,new yr(i.toArray()),Yr.none())}}function o0(r,e,t){r instanceof hc?function(i,s,a){const u=i.value.clone(),l=af(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,e,t):r instanceof Ca?function(i,s,a){if(!qs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=af(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(ap(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ii(r,e,t,n){return r instanceof hc?function(s,a,u,l){if(!qs(s.precondition,a))return u;const c=s.value.clone(),f=of(s.fieldTransforms,l,a);return c.setAll(f),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ca?function(s,a,u,l){if(!qs(s.precondition,a))return u;const c=of(s.fieldTransforms,l,a),f=a.data;return f.setAll(ap(s)),f.setAll(c),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(s,a,u){return qs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,e,t)}function sf(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ln(n,i,(s,a)=>a0(s,a))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class hc extends cc{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ca extends cc{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ap(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function af(r,e,t){const n=new Map;Ue(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],a=s.transform,u=e.data.field(s.field);n.set(s.field,i0(a,u,t[i]))}return n}function of(r,e,t){const n=new Map;for(const i of r){const s=i.transform,a=t.data.field(i.field);n.set(i.field,n0(s,a,e))}return n}class u0 extends cc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class l0{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&o0(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ii(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ii(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=tp();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const l=sp(a,u);l!==null&&n.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(le.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ln(this.mutations,e.mutations,(t,n)=>sf(t,n))&&Ln(this.baseMutations,e.baseMutations,(t,n)=>sf(t,n))}}/**
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
 */class c0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Fe,_e;function op(r){if(r===void 0)return sr("GRPC error has no .code"),z.UNKNOWN;switch(r){case Fe.OK:return z.OK;case Fe.CANCELLED:return z.CANCELLED;case Fe.UNKNOWN:return z.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return z.INTERNAL;case Fe.UNAVAILABLE:return z.UNAVAILABLE;case Fe.UNAUTHENTICATED:return z.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case Fe.NOT_FOUND:return z.NOT_FOUND;case Fe.ALREADY_EXISTS:return z.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return z.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case Fe.ABORTED:return z.ABORTED;case Fe.OUT_OF_RANGE:return z.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return z.UNIMPLEMENTED;case Fe.DATA_LOSS:return z.DATA_LOSS;default:return fe()}}(_e=Fe||(Fe={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function f0(){return new TextEncoder}/**
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
 */const d0=new Zr([4294967295,4294967295],0);function uf(r){const e=f0().encode(r),t=new xd;return t.update(e),new Uint8Array(t.digest())}function lf(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zr([t,n],0),new Zr([i,s],0)]}class fc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new _i(`Invalid padding: ${t}`);if(n<0)throw new _i(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new _i(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Zr.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Zr.fromNumber(n)));return i.compare(d0)===1&&(i=new Zr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=uf(e),[n,i]=lf(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);if(!this.de(a))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new fc(s,i,t);return n.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=uf(e),[n,i]=lf(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(n,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pa(le.min(),i,new $e(Te),Pr(),Ae())}}class Hi{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Hi(n,t,Ae(),Ae(),Ae())}}/**
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
 */class Ks{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class up{constructor(e,t){this.targetId=e,this.me=t}}class lp{constructor(e,t,n=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class cf{constructor(){this.fe=0,this.ge=ff(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),t=Ae(),n=Ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:fe()}}),new Hi(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ff()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class p0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pr(),this.qe=hf(),this.Qe=new $e(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Go(s))if(n===0){const a=new se(s.path);this.Ue(t,a,tt.newNoDocument(a,le.min()))}else Ue(n===1);else{const a=this.Ye(t);if(a!==n){const u=this.Ze(e),l=u?this.Xe(u,e,a):1;if(l!==0){this.je(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,c)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Jr(n).toUint8Array()}catch(l){if(l instanceof qd)return On("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new fc(a,i,s)}catch(l){return On(l instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const u=this.Je(a);if(u){if(s.current&&Go(u.target)){const l=new se(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,tt.newNoDocument(l,e))}s.be&&(t.set(a,s.ve()),s.Ce())}});let n=Ae();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Pa(e,t,this.Qe,this.ke,n);return this.ke=Pr(),this.qe=hf(),this.Qe=new $e(Te),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new cf,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ze(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function hf(){return new $e(se.comparator)}function ff(){return new $e(se.comparator)}const g0={asc:"ASCENDING",desc:"DESCENDING"},m0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v0={and:"AND",or:"OR"};class _0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zo(r,e){return r.useProto3Json||Aa(e)?e:{value:e}}function y0(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Sn(r){return Ue(!!r),le.fromTimestamp(function(t){const n=Cr(t);return new lt(n.seconds,n.nanos)}(r))}function A0(r,e){return zo(r,e).canonicalString()}function zo(r,e){const t=function(i){return new ke(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function cp(r){const e=ke.fromString(r);return Ue(gp(e)),e}function po(r,e){const t=cp(e);if(t.get(1)!==r.databaseId.projectId)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new se(fp(t))}function hp(r,e){return A0(r.databaseId,e)}function I0(r){const e=cp(r);return e.length===4?ke.emptyPath():fp(e)}function df(r){return new ke(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function fp(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function T0(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(Ue(f===void 0||typeof f=="string"),Ye.fromBase64String(f||"")):(Ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ye.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(c){const f=c.code===void 0?z.UNKNOWN:op(c.code);return new ne(f,c.message||"")}(a);t=new lp(n,i,s,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=po(r,n.document.name),s=Sn(n.document.updateTime),a=n.document.createTime?Sn(n.document.createTime):le.min(),u=new xt({mapValue:{fields:n.document.fields}}),l=tt.newFoundDocument(i,s,a,u),c=n.targetIds||[],f=n.removedTargetIds||[];t=new Ks(c,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=po(r,n.document),s=n.readTime?Sn(n.readTime):le.min(),a=tt.newNoDocument(i,s),u=n.removedTargetIds||[];t=new Ks([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=po(r,n.document),s=n.removedTargetIds||[];t=new Ks([],s,i,null)}else{if(!("filter"in e))return fe();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,a=new h0(i,s),u=n.targetId;t=new up(u,a)}}return t}function S0(r,e){return{documents:[hp(r,e.path)]}}function w0(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=hp(r,i);const s=function(c){if(c.length!==0)return pp(Bt.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:vn(g.field),direction:P0(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Zo(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:t,parent:i}}function R0(r){let e=I0(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){Ue(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const g=dp(p);return g instanceof Bt&&Zd(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(R){return new aa(_n(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(t.orderBy));let u=null;t.limit&&(u=function(p){let g;return g=typeof p=="object"?p.value:p,Aa(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,S=p.values||[];return new sa(S,g)}(t.startAt));let c=null;return t.endAt&&(c=function(p){const g=!p.before,S=p.values||[];return new sa(S,g)}(t.endAt)),K_(e,i,a,s,u,"F",l,c)}function C0(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=_n(t.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=_n(t.unaryFilter.field);return Be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(t.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return Be.create(a,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(r):r.fieldFilter!==void 0?function(t){return Be.create(_n(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Bt.create(t.compositeFilter.filters.map(n=>dp(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return fe()}}(t.compositeFilter.op))}(r):fe()}function P0(r){return g0[r]}function D0(r){return m0[r]}function b0(r){return v0[r]}function vn(r){return{fieldPath:r.canonicalString()}}function _n(r){return st.fromServerFormat(r.fieldPath)}function pp(r){return r instanceof Be?function(t){if(t.op==="=="){if(Xh(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(Qh(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xh(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(Qh(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:D0(t.op),value:t.value}}}(r):r instanceof Bt?function(t){const n=t.getFilters().map(i=>pp(i));return n.length===1?n[0]:{compositeFilter:{op:b0(t.op),filters:n}}}(r):fe()}function gp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Er{constructor(e,t,n,i,s=le.min(),a=le.min(),u=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class N0{constructor(e){this.ct=e}}function M0(r){const e=R0({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qo(e,e.limit,"L"):e}/**
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
 */class O0{constructor(){this.un=new L0}addToCollectionParentIndex(e,t){return this.un.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(Rr.min())}updateCollectionGroup(e,t,n){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class L0{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ze(ke.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ze(ke.comparator)).toArray()}}/**
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
 */class $n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new $n(0)}static kn(){return new $n(-1)}}/**
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
 */class k0{constructor(){this.changes=new Kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?F.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class x0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class $0{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Ii(n.mutation,i,yr.empty(),lt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Ae()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Ae()){const i=Wr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let a=vi();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const n=Wr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Ae()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,n,i){let s=Pr();const a=Ai(),u=function(){return Ai()}();return t.forEach((l,c)=>{const f=n.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ca)?s=s.insert(c.key,c):f!==void 0?(a.set(c.key,f.mutation.getFieldMask()),Ii(f.mutation,c,f.mutation.getFieldMask(),lt.now())):a.set(c.key,yr.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,f)=>a.set(c,f)),t.forEach((c,f)=>{var p;return u.set(c,new x0(f,(p=a.get(c))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,t){const n=Ai();let i=new $e((a,u)=>a-u),s=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let f=n.get(l)||yr.empty();f=u.applyToLocalView(c,f),n.set(l,f);const p=(i.get(u.batchId)||Ae()).add(l);i=i.insert(u.batchId,p)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),c=l.key,f=l.value,p=tp();f.forEach(g=>{if(!s.has(g)){const S=sp(t.get(g),n.get(g));S!==null&&p.set(g,S),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):W_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):F.resolve(Wr());let u=-1,l=s;return a.next(c=>F.forEach(c,(f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Ae())).next(f=>({batchId:u,changes:Q_(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(n=>{let i=vi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let a=vi();return this.indexManager.getCollectionParents(e,s).next(u=>F.forEach(u,l=>{const c=function(p,g){return new Ta(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,n,i).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(a=>{s.forEach((l,c)=>{const f=c.getKey();a.get(f)===null&&(a=a.insert(f,tt.newInvalidDocument(f)))});let u=vi();return a.forEach((l,c)=>{const f=s.get(l);f!==void 0&&Ii(f.mutation,c,yr.empty(),lt.now()),wa(t,c)&&(u=u.insert(l,c))}),u})}}/**
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
 */class V0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return F.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Sn(i.createTime)}}(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:M0(i.bundledQuery),readTime:Sn(i.readTime)}}(t)),F.resolve()}}/**
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
 */class F0{constructor(){this.overlays=new $e(se.comparator),this.Ir=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Wr();return F.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),F.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),F.resolve()}getOverlaysForCollection(e,t,n){const i=Wr(),s=t.length+1,a=new se(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new $e((c,f)=>c-f);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let f=s.get(c.largestBatchId);f===null&&(f=Wr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const u=Wr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,f)=>u.set(c,f)),!(u.size()>=i)););return F.resolve(u)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new c0(t,n));let s=this.Ir.get(t);s===void 0&&(s=Ae(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
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
 */class U0{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,F.resolve()}}/**
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
 */class dc{constructor(){this.Tr=new ze(qe.Er),this.dr=new ze(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new qe(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new qe(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new se(new ke([])),n=new qe(t,e),i=new qe(t,e+1),s=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new se(new ke([])),n=new qe(t,e),i=new qe(t,e+1);let s=Ae();return this.dr.forEachInRange([n,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new qe(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class qe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return se.comparator(e.key,t.key)||Te(e.wr,t.wr)}static Ar(e,t){return Te(e.wr,t.wr)||se.comparator(e.key,t.key)}}/**
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
 */class B0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ze(qe.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new l0(s,t,n,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new qe(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,t){return F.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new qe(t,0),i=new qe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],a=>{const u=this.Dr(a.wr);s.push(u)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ze(Te);return t.forEach(i=>{const s=new qe(i,0),a=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],u=>{n=n.add(u.wr)})}),F.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;se.isDocumentKey(s)||(s=s.child(""));const a=new qe(new se(s),0);let u=new ze(Te);return this.br.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===i&&(u=u.add(l.wr)),!0)},a),F.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ue(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return F.forEach(t.mutations,i=>{const s=new qe(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new qe(t,0),i=this.br.firstAfterOrEqual(n);return F.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class H0{constructor(e){this.Mr=e,this.docs=function(){return new $e(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return F.resolve(n?n.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let n=Pr();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),F.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Pr();const a=t.path,u=new se(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:c,value:{document:f}}=l.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||R_(w_(f),n)<=0||(i.has(f.key)||wa(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,t,n,i){fe()}Or(e,t){return F.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new G0(this)}getSize(e){return F.resolve(this.size)}}class G0 extends k0{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),F.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class q0{constructor(e){this.persistence=e,this.Nr=new Kn(t=>uc(t),lc),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new dc,this.targetCount=0,this.kr=$n.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),F.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.Kn(t),F.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return F.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),F.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return F.resolve(n)}containsKey(e,t){return F.resolve(this.Br.containsKey(t))}}/**
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
 */class K0{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ic(0),this.Kr=!1,this.Kr=!0,this.$r=new U0,this.referenceDelegate=e(this),this.Ur=new q0(this),this.indexManager=new O0,this.remoteDocumentCache=function(i){return new H0(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new N0(t),this.Gr=new V0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new F0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new B0(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){Q("MemoryPersistence","Starting transaction:",e);const i=new W0(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return F.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class W0 extends P_{constructor(e){super(),this.currentSequenceNumber=e}}class pc{constructor(e){this.persistence=e,this.Jr=new dc,this.Yr=null}static Zr(e){return new pc(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),F.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),F.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,n=>{const i=se.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,le.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return F.or([()=>F.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class gc{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=Ae(),i=Ae();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gc(e,t.fromCache,n,i)}}/**
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
 */class Z0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Qm()?8:D_(rt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Z0;return this.Xi(e,t,a).next(u=>{if(s.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(gi()<=ve.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(gi()<=ve.DEBUG&&Q("QueryEngine","Query:",mn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(gi()<=ve.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):F.resolve())}Yi(e,t){if(rf(t))return F.resolve(null);let n=$t(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=qo(t,null,"F"),n=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const a=Ae(...s);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,n).next(l=>{const c=this.ts(t,u);return this.ns(t,c,a,l.readTime)?this.Yi(e,qo(t,null,"F")):this.rs(e,c,t,l)}))})))}Zi(e,t,n,i){return rf(t)||i.isEqual(le.min())?F.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const a=this.ts(t,s);return this.ns(t,a,n,i)?F.resolve(null):(gi()<=ve.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.rs(e,a,t,S_(i,-1)).next(u=>u))})}ts(e,t){let n=new ze(Jd(e));return t.forEach((i,s)=>{wa(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return gi()<=ve.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",mn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Rr.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class Y0{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new $e(Te),this._s=new Kn(s=>uc(s),lc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function j0(r,e,t,n){return new Y0(r,e,t,n)}async function mp(r,e){const t=ye(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const a=[],u=[];let l=Ae();for(const c of i){a.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}for(const c of s){u.push(c.batchId);for(const f of c.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(c=>({hs:c,removedBatchIds:a,addedBatchIds:u}))})})}function vp(r){const e=ye(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Q0(r,e){const t=ye(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;u.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Ye.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),i=i.insert(p,S),function(_,A,b){return _.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(g,S,f)&&u.push(t.Ur.updateTargetData(s,S))});let l=Pr(),c=Ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(X0(s,a,e.documentUpdates).next(f=>{l=f.Ps,c=f.Is})),!n.isEqual(le.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(p=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));u.push(f)}return F.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(t.os=i,s))}function X0(r,e,t){let n=Ae(),i=Ae();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let a=Pr();return t.forEach((u,l)=>{const c=s.get(u);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):Q("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),{Ps:a,Is:i}})}function J0(r,e){const t=ye(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,F.resolve(i)):t.Ur.allocateTargetId(n).next(a=>(i=new Er(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Yo(r,e,t){const n=ye(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Bi(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function pf(r,e,t){const n=ye(r);let i=le.min(),s=Ae();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,c,f){const p=ye(l),g=p._s.get(f);return g!==void 0?F.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(n,a,$t(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>n.ss.getDocumentsMatchingQuery(a,e,t?i:le.min(),t?s:Ae())).next(u=>(ey(n,z_(e),u),{documents:u,Ts:s})))}function ey(r,e,t){let n=r.us.get(e)||le.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}class gf{constructor(){this.activeTargetIds=e0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ty{constructor(){this.so=new gf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ry{_o(e){}shutdown(){}}/**
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
 */class mf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ks=null;function go(){return ks===null?ks=function(){return 268435456+Math.round(2147483648*Math.random())}():ks++,"0x"+ks.toString(16)}/**
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
 */const ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iy{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Je="WebChannelConnection";class sy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,a){const u=go(),l=this.xo(t,n.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${u}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,a),this.No(t,l,c,i).then(f=>(Q("RestConnection",`Received RPC '${t}' ${u}: `,f),f),f=>{throw On("RestConnection",`RPC '${t}' ${u} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,n,i,s,a,u){return this.Mo(t,n,i,s,a)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}xo(t,n){const i=ny[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=go();return new Promise((a,u)=>{const l=new $d;l.setWithCredentials(!0),l.listenOnce(Fd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gs.NO_ERROR:const f=l.getResponseJson();Q(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Gs.TIMEOUT:Q(Je,`RPC '${e}' ${s} timed out`),u(new ne(z.DEADLINE_EXCEEDED,"Request time out"));break;case Gs.HTTP_ERROR:const p=l.getStatus();if(Q(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const R=function(A){const b=A.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(b)>=0?b:z.UNKNOWN}(S.status);u(new ne(R,S.message))}else u(new ne(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new ne(z.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{Q(Je,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Q(Je,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",c,n,15)})}Bo(e,t,n){const i=go(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Hd(),u=Bd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new Vd({})),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=s.join("");Q(Je,`Creating RPC '${e}' stream ${i}: ${f}`,l);const p=a.createWebChannel(f,l);let g=!1,S=!1;const R=new iy({Io:A=>{S?Q(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(g||(Q(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),Q(Je,`RPC '${e}' stream ${i} sending:`,A),p.send(A))},To:()=>p.close()}),_=(A,b,D)=>{A.listen(b,N=>{try{D(N)}catch(O){setTimeout(()=>{throw O},0)}})};return _(p,mi.EventType.OPEN,()=>{S||(Q(Je,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),_(p,mi.EventType.CLOSE,()=>{S||(S=!0,Q(Je,`RPC '${e}' stream ${i} transport closed`),R.So())}),_(p,mi.EventType.ERROR,A=>{S||(S=!0,On(Je,`RPC '${e}' stream ${i} transport errored:`,A),R.So(new ne(z.UNAVAILABLE,"The operation could not be completed")))}),_(p,mi.EventType.MESSAGE,A=>{var b;if(!S){const D=A.data[0];Ue(!!D);const N=D,O=N.error||((b=N[0])===null||b===void 0?void 0:b.error);if(O){Q(Je,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let x=function(E){const T=Fe[E];if(T!==void 0)return op(T)}(L),v=O.message;x===void 0&&(x=z.INTERNAL,v="Unknown error status: "+L+" with message "+O.message),S=!0,R.So(new ne(x,v)),p.close()}else Q(Je,`RPC '${e}' stream ${i} received:`,D),R.bo(D)}}),_(u,Ud.STAT_EVENT,A=>{A.stat===Vo.PROXY?Q(Je,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===Vo.NOPROXY&&Q(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function mo(){return typeof document<"u"?document:null}/**
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
 */function _p(r){return new _0(r,!0)}/**
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
 */class yp{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class ay{constructor(e,t,n,i,s,a,u,l){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new yp(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new ne(z.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oy extends ay{constructor(e,t,n,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,a),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=T0(this.serializer,e),n=function(s){if(!("targetChange"in s))return le.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Sn(a.readTime):le.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=df(this.serializer),t.addTarget=function(s,a){let u;const l=a.target;if(u=Go(l)?{documents:S0(s,l)}:{query:w0(s,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=E0(s,a.resumeToken);const c=Zo(s,a.expectedCount);c!==null&&(u.expectedCount=c)}else if(a.snapshotVersion.compareTo(le.min())>0){u.readTime=y0(s,a.snapshotVersion.toTimestamp());const c=Zo(s,a.expectedCount);c!==null&&(u.expectedCount=c)}return u}(this.serializer,e);const n=C0(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=df(this.serializer),t.removeTarget=e,this.a_(t)}}/**
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
 */class uy extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,zo(t,n),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(z.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,zo(t,n),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(z.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ly{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sr(t),this.D_=!1):Q("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class cy{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{n.enqueueAndForget(async()=>{qi(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ye(l);c.L_.add(4),await Gi(c),c.q_.set("Unknown"),c.L_.delete(4),await Da(c)}(this))})}),this.q_=new ly(n,i)}}async function Da(r){if(qi(r))for(const e of r.B_)await e(!0)}async function Gi(r){for(const e of r.B_)await e(!1)}function Ep(r,e){const t=ye(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),yc(t)?_c(t):Wn(t).r_()&&vc(t,e))}function mc(r,e){const t=ye(r),n=Wn(t);t.N_.delete(e),n.r_()&&Ap(t,e),t.N_.size===0&&(n.r_()?n.o_():qi(t)&&t.q_.set("Unknown"))}function vc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wn(r).A_(e)}function Ap(r,e){r.Q_.xe(e),Wn(r).R_(e)}function _c(r){r.Q_=new p0({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Wn(r).start(),r.q_.v_()}function yc(r){return qi(r)&&!Wn(r).n_()&&r.N_.size>0}function qi(r){return ye(r).L_.size===0}function Ip(r){r.Q_=void 0}async function hy(r){r.q_.set("Online")}async function fy(r){r.N_.forEach((e,t)=>{vc(r,e)})}async function dy(r,e){Ip(r),yc(r)?(r.q_.M_(e),_c(r)):r.q_.set("Unknown")}async function py(r,e,t){if(r.q_.set("Online"),e instanceof lp&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(r,e)}catch(n){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await vf(r,n)}else if(e instanceof Ks?r.Q_.Ke(e):e instanceof up?r.Q_.He(e):r.Q_.We(e),!t.isEqual(le.min()))try{const n=await vp(r.localStore);t.compareTo(n)>=0&&await function(s,a){const u=s.Q_.rt(a);return u.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,c)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),Ap(s,l);const p=new Er(f.target,l,c,f.sequenceNumber);vc(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(r,t)}catch(n){Q("RemoteStore","Failed to raise snapshot:",n),await vf(r,n)}}async function vf(r,e,t){if(!Bi(e))throw e;r.L_.add(1),await Gi(r),r.q_.set("Offline"),t||(t=()=>vp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Da(r)})}async function _f(r,e){const t=ye(r);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const n=qi(t);t.L_.add(3),await Gi(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Da(t)}async function gy(r,e){const t=ye(r);e?(t.L_.delete(2),await Da(t)):e||(t.L_.add(2),await Gi(t),t.q_.set("Unknown"))}function Wn(r){return r.K_||(r.K_=function(t,n,i){const s=ye(t);return s.w_(),new oy(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:hy.bind(null,r),Ro:fy.bind(null,r),mo:dy.bind(null,r),d_:py.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),yc(r)?_c(r):r.q_.set("Unknown")):(await r.K_.stop(),Ip(r))})),r.K_}/**
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
 */class Ec{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const a=Date.now()+n,u=new Ec(e,t,a,i,s);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(r,e){if(sr("AsyncQueue",`${e}: ${r}`),Bi(r))return new ne(z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(t,n)=>se.comparator(t.key,n.key),this.keyedMap=vi(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new wn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new wn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class yf{constructor(){this.W_=new $e(se.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Vn{constructor(e,t,n,i,s,a,u,l,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Vn(e,t,wn.emptySet(t),a,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class my{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vy{constructor(){this.queries=Ef(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=ye(t),s=i.queries;i.queries=Ef(),s.forEach((a,u)=>{for(const l of u.j_)l.onError(n)})})(this,new ne(z.ABORTED,"Firestore shutting down"))}}function Ef(){return new Kn(r=>Xd(r),Sa)}async function _y(r,e){const t=ye(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new my,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Tp(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&Ac(t)}async function yy(r,e){const t=ye(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Ey(r,e){const t=ye(r);let n=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.j_)u.X_(i)&&(n=!0);a.z_=i}}n&&Ac(t)}function Ay(r,e,t){const n=ye(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function Ac(r){r.Y_.forEach(e=>{e.next()})}var jo,Af;(Af=jo||(jo={})).ea="default",Af.Cache="cache";class Iy{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Vn(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==jo.Cache}}/**
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
 */class Sp{constructor(e){this.key=e}}class wp{constructor(e){this.key=e}}class Ty{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ae(),this.mutatedKeys=Ae(),this.Aa=Jd(e),this.Ra=new wn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new yf,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),S=wa(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),_=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;g&&S?g.data.isEqual(S.data)?R!==_&&(n.track({type:3,doc:S}),A=!0):this.ga(g,S)||(n.track({type:2,doc:S}),A=!0,(l&&this.Aa(S,l)>0||c&&this.Aa(S,c)<0)&&(u=!0)):!g&&S?(n.track({type:0,doc:S}),A=!0):g&&!S&&(n.track({type:1,doc:g}),A=!0,(l||c)&&(u=!0)),A&&(S?(a=a.add(S),s=_?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,p)=>function(S,R){const _=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return _(S)-_(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),i=i!=null&&i;const u=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,a.length!==0||c?{snapshot:new Vn(this.query,e.Ra,s,a,e.mutatedKeys,l===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new yf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ae(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new wp(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Sp(n))}),t}ba(e){this.Ta=e.Ts,this.da=Ae();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Vn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Sy{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class wy{constructor(e){this.key=e,this.va=!1}}class Ry{constructor(e,t,n,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Kn(u=>Xd(u),Sa),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(se.comparator),this.Na=new Map,this.La=new dc,this.Ba={},this.ka=new Map,this.qa=$n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cy(r,e,t=!0){const n=bp(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Rp(n,e,t,!0),i}async function Py(r,e){const t=bp(r);await Rp(t,e,!0,!1)}async function Rp(r,e,t,n){const i=await J0(r.localStore,$t(e)),s=i.targetId,a=t?r.sharedClientState.addLocalQueryTarget(s):"not-current";let u;return n&&(u=await Dy(r,e,s,a==="current",i.resumeToken)),r.isPrimaryClient&&t&&Ep(r.remoteStore,i),u}async function Dy(r,e,t,n,i){r.Ka=(p,g,S)=>async function(_,A,b,D){let N=A.view.ma(b);N.ns&&(N=await pf(_.localStore,A.query,!1).then(({documents:v})=>A.view.ma(v,N)));const O=D&&D.targetChanges.get(A.targetId),L=D&&D.targetMismatches.get(A.targetId)!=null,x=A.view.applyChanges(N,_.isPrimaryClient,O,L);return Tf(_,A.targetId,x.wa),x.snapshot}(r,p,g,S);const s=await pf(r.localStore,e,!0),a=new Ty(e,s.Ts),u=a.ma(s.documents),l=Hi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),c=a.applyChanges(u,r.isPrimaryClient,l);Tf(r,t,c.wa);const f=new Sy(e,t,a);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),c.snapshot}async function by(r,e,t){const n=ye(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(a=>!Sa(a,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yo(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&mc(n.remoteStore,i.targetId),Qo(n,i.targetId)}).catch(nc)):(Qo(n,i.targetId),await Yo(n.localStore,i.targetId,!0))}async function Ny(r,e){const t=ye(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),mc(t.remoteStore,n.targetId))}async function Cp(r,e){const t=ye(r);try{const n=await Q0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Na.get(s);a&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Ue(a.va):i.removedDocuments.size>0&&(Ue(a.va),a.va=!1))}),await Dp(t,n,e)}catch(n){await nc(n)}}function If(r,e,t){const n=ye(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const l=ye(a);l.onlineState=u;let c=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(u)&&(c=!0)}),c&&Ac(l)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function My(r,e,t){const n=ye(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let a=new $e(se.comparator);a=a.insert(s,tt.newNoDocument(s,le.min()));const u=Ae().add(s),l=new Pa(le.min(),new Map,new $e(Te),a,u);await Cp(n,l),n.Oa=n.Oa.remove(s),n.Na.delete(e),Ic(n)}else await Yo(n.localStore,e,!1).then(()=>Qo(n,e,t)).catch(nc)}function Qo(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Pp(r,n)})}function Pp(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(mc(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Ic(r))}function Tf(r,e,t){for(const n of t)n instanceof Sp?(r.La.addReference(n.key,e),Oy(r,n)):n instanceof wp?(Q("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Pp(r,n.key)):fe()}function Oy(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(Q("SyncEngine","New document in limbo: "+t),r.xa.add(n),Ic(r))}function Ic(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new se(ke.fromString(e)),n=r.qa.next();r.Na.set(n,new wy(t)),r.Oa=r.Oa.insert(t,n),Ep(r.remoteStore,new Er($t(Qd(t.path)),n,"TargetPurposeLimboResolution",ic.oe))}}async function Dp(r,e,t){const n=ye(r),i=[],s=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,l)=>{a.push(n.Ka(l,e,t).then(c=>{var f;if((c||t)&&n.isPrimaryClient){const p=c?!c.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(c){i.push(c);const p=gc.Wi(l.targetId,c);s.push(p)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(l,c){const f=ye(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,g=>F.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>F.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!Bi(p))throw p;Q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const S=f.os.get(g),R=S.snapshotVersion,_=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(g,_)}}}(n.localStore,s))}async function Ly(r,e){const t=ye(r);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const n=await mp(t.localStore,e);t.currentUser=e,function(s,a){s.ka.forEach(u=>{u.forEach(l=>{l.reject(new ne(z.CANCELLED,a))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Dp(t,n.hs)}}function ky(r,e){const t=ye(r),n=t.Na.get(e);if(n&&n.va)return Ae().add(n.key);{let i=Ae();const s=t.Ma.get(e);if(!s)return i;for(const a of s){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function bp(r){const e=ye(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ky.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=My.bind(null,e),e.Ca.d_=Ey.bind(null,e.eventManager),e.Ca.$a=Ay.bind(null,e.eventManager),e}class Sf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_p(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return j0(this.persistence,new z0,e.initialUser,this.serializer)}createPersistence(e){return new K0(pc.Zr,this.serializer)}createSharedClientState(e){return new ty}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>If(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ly.bind(null,this.syncEngine),await gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vy}()}createDatastore(e){const t=_p(e.databaseInfo.databaseId),n=function(s){return new sy(s)}(e.databaseInfo);return function(s,a,u,l){return new uy(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,a,u){return new cy(n,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>If(this.syncEngine,t,0),function(){return mf.D()?new mf:new ry}())}createSyncEngine(e,t){return function(i,s,a,u,l,c,f){const p=new Ry(i,s,a,u,l,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=ye(i);Q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Gi(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
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
 */class $y{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Vy{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=I_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tp(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function vo(r,e){r.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await mp(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function wf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Uy(r);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>_f(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>_f(e.remoteStore,i)),r._onlineComponents=e}function Fy(r){return r.name==="FirebaseError"?r.code===z.FAILED_PRECONDITION||r.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Uy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await vo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Fy(t))throw t;On("Error using user provided cache. Falling back to memory cache: "+t),await vo(r,new Sf)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await vo(r,new Sf);return r._offlineComponents}async function By(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await wf(r,r._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await wf(r,new xy))),r._onlineComponents}async function Hy(r){const e=await By(r),t=e.eventManager;return t.onListen=Cy.bind(null,e.syncEngine),t.onUnlisten=by.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Py.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ny.bind(null,e.syncEngine),t}function Gy(r,e,t={}){const n=new zr;return r.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,c){const f=new $y({next:g=>{a.enqueueAndForget(()=>yy(s,p)),g.fromCache&&l.source==="server"?c.reject(new ne(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new Iy(u,f,{includeMetadataChanges:!0,_a:!0});return _y(s,p)}(await Hy(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function Np(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const Rf=new Map;/**
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
 */function qy(r,e,t){if(!t)throw new ne(z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Ky(r,e,t,n){if(e===!0&&n===!0)throw new ne(z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Cf(r){if(se.isDocumentKey(r))throw new ne(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Wy(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe()}function Xo(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ne(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wy(r);throw new ne(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class Pf{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Np((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new p_;switch(n.type){case"firstParty":return new __(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Rf.get(t);n&&(Q("ComponentProvider","Removing Datastore"),Rf.delete(t),n.terminate())}(this),Promise.resolve()}}function Zy(r,e,t,n={}){var i;const s=(r=Xo(r,Tc))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let u,l;if(typeof n.mockUserToken=="string")u=n.mockUserToken,l=et.MOCK_USER;else{u=Km(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new ne(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new et(c)}r._authCredentials=new g_(new Gd(u,l))}}/**
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
 */class ba{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ba(this.firestore,e,this._query)}}class Zn{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zn(this.firestore,e,this._key)}}class Rn extends ba{constructor(e,t,n){super(e,t,Qd(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zn(this.firestore,null,new se(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Sw(r,e,...t){if(r=Mr(r),qy("collection","path",e),r instanceof Tc){const n=ke.fromString(e,...t);return Cf(n),new Rn(r,null,n)}{if(!(r instanceof Zn||r instanceof Rn))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ke.fromString(e,...t));return Cf(n),new Rn(r.firestore,null,n)}}/**
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
 */class zy{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new yp(this,"async_queue_retry"),this.Eu=()=>{const t=mo();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.t_.jo()};const e=mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const t=mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const t=new zr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!Bi(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const t=this.au.then(()=>(this.Pu=!0,e().catch(n=>{this.hu=n,this.Pu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw sr("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.Pu=!1,n))));return this.au=t,t}enqueueAfterDelay(e,t,n){this.du(),this.Tu.indexOf(e)>-1&&(t=0);const i=Ec.createAndSchedule(this,e,t,n,s=>this.Vu(s));return this.lu.push(i),i}du(){this.hu&&fe()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const t of this.lu)if(t.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.lu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const t=this.lu.indexOf(e);this.lu.splice(t,1)}}class Mp extends Tc{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=function(){return new zy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Op(this),this._firestoreClient.terminate()}}function ww(r,e){const t=typeof r=="object"?r:Od(),n=typeof r=="string"?r:"(default)",i=tc(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const s=Gm("firestore");s&&Zy(i,...s)}return i}function Yy(r){return r._firestoreClient||Op(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function Op(r){var e,t,n;const i=r._freezeSettings(),s=function(u,l,c,f){return new M_(u,l,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Np(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._firestoreClient=new Vy(r._authCredentials,r._appCheckCredentials,r._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(Ye.fromBase64String(e))}catch(t){throw new ne(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new la(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Lp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Qy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}const Xy=new RegExp("[~\\*/\\[\\]]");function Jy(r,e,t){if(e.search(Xy)>=0)throw Df(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Lp(...e.split("."))._internalPath}catch{throw Df(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function Df(r,e,t,n,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new ne(z.INVALID_ARGUMENT,s+r+a)}/**
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
 */class kp{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eE extends kp{data(){return super.data()}}function xp(r,e){return typeof e=="string"?Jy(r,e):e instanceof Lp?e._internalPath:e._delegate._internalPath}/**
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
 */function tE(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rE{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ia(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>xe(a.doubleValue));return new Qy(s)}convertGeoPoint(e){return new jy(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ac(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=Cr(e);return new lt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ke.fromString(e);Ue(gp(n));const i=new Di(n.get(1),n.get(3)),s=new se(n.popFirst(5));return i.isEqual(t)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class xs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nE extends kp{constructor(e,t,n,i,s,a){super(e,t,n,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ws extends nE{data(e={}){return super.data(e)}}class iE{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new xs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ws(this._firestore,this._userDataWriter,n.key,n,new xs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const l=new Ws(i._firestore,i._userDataWriter,u.doc.key,u.doc,new xs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const l=new Ws(i._firestore,i._userDataWriter,u.doc.key,u.doc,new xs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return u.type!==0&&(c=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:sE(u.type),doc:l,oldIndex:c,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}class aE extends rE{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zn(this.firestore,null,t)}}function Rw(r){r=Xo(r,ba);const e=Xo(r.firestore,Mp),t=Yy(e),n=new aE(e);return tE(r._query),Gy(t,r._query).then(i=>new iE(e,n,r,i))}(function(e,t=!0){(function(i){qn=i})(Gn),Mn(new Qr("firestore",(n,{instanceIdentifier:i,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new Mp(new m_(n.getProvider("auth-internal")),new E_(n.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ne(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(c.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Sr(Wh,"4.7.1",e),Sr(Wh,"4.7.1","esm2017")})();var oE="firebase",uE="10.13.1";/**
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
 */Sr(oE,uE,"app");function Sc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function $p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lE=$p,Vp=new Fi("auth","Firebase",$p());/**
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
 */const ca=new Jl("@firebase/auth");function cE(r,...e){ca.logLevel<=ve.WARN&&ca.warn(`Auth (${Gn}): ${r}`,...e)}function Zs(r,...e){ca.logLevel<=ve.ERROR&&ca.error(`Auth (${Gn}): ${r}`,...e)}/**
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
 */function ar(r,...e){throw wc(r,...e)}function Vt(r,...e){return wc(r,...e)}function Fp(r,e,t){const n=Object.assign(Object.assign({},lE()),{[e]:t});return new Fi("auth","Firebase",n).create(e,{appName:r.name})}function wr(r){return Fp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Vp.create(r,...e)}function ae(r,e,...t){if(!r)throw wc(e,...t)}function Xt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zs(e),new Error(e)}function or(r,e){r||Xt(e)}/**
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
 */function Jo(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function hE(){return bf()==="http:"||bf()==="https:"}function bf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function fE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hE()||zm()||"connection"in navigator)?navigator.onLine:!0}function dE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,or(t>e,"Short delay should be less than long delay!"),this.isMobile=Wm()||Ym()}get(){return fE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(r,e){or(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Up{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gE=new Ki(3e4,6e4);function Wi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Or(r,e,t,n,i={}){return Bp(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const u=Ui(Object.assign({key:r.config.apiKey},a)).slice(1),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),Up.fetch()(Gp(r,r.config.apiHost,t,u),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Bp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},pE),e);try{const i=new vE(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $s(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[l,c]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $s(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw $s(r,"user-disabled",a);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fp(r,f,c);ar(r,f)}}catch(i){if(i instanceof lr)throw i;ar(r,"network-request-failed",{message:String(i)})}}async function Hp(r,e,t,n,i={}){const s=await Or(r,e,t,n,i);return"mfaPendingCredential"in s&&ar(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Gp(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?Rc(r.config,i):`${r.config.apiScheme}://${i}`}function mE(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Vt(this.auth,"network-request-failed")),gE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $s(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Vt(r,e,n);return i.customData._tokenResponse=t,i}function Nf(r){return r!==void 0&&r.enterprise!==void 0}class _E{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function yE(r,e){return Or(r,"GET","/v2/recaptchaConfig",Wi(r,e))}/**
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
 */async function EE(r,e){return Or(r,"POST","/v1/accounts:delete",e)}async function qp(r,e){return Or(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ti(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AE(r,e=!1){const t=Mr(r),n=await t.getIdToken(e),i=Cc(n);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:Ti(_o(i.auth_time)),issuedAtTime:Ti(_o(i.iat)),expirationTime:Ti(_o(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _o(r){return Number(r)*1e3}function Cc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Cd(t);return i?JSON.parse(i):(Zs("Failed to decode base64 JWT payload"),null)}catch(i){return Zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mf(r){const e=Cc(r);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof lr&&IE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function IE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class TE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class eu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ha(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Fn(r,qp(t,{idToken:n}));ae(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kp(s.providerUserInfo):[],u=wE(r.providerData,a),l=r.isAnonymous,c=!(r.email&&s.passwordHash)&&!(u!=null&&u.length),f=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function SE(r){const e=Mr(r);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wE(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Kp(r){return r.map(e=>{var{providerId:t}=e,n=Sc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function RE(r,e){const t=await Bp(r,{},async()=>{const n=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Gp(r,i,"/v1/token",`key=${s}`),u=await r._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Up.fetch()(a,{method:"POST",headers:u,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CE(r,e){return Or(r,"POST","/v2/accounts:revokeToken",Wi(r,e))}/**
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
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=Mf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await RE(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new Cn;return n&&(ae(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(ae(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function pr(r,e){ae(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new eu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AE(this,e)}reload(){return SE(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ha(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await Fn(this,EE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,u,l,c,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,_=(u=t.tenantId)!==null&&u!==void 0?u:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=t.createdAt)!==null&&c!==void 0?c:void 0,D=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:N,emailVerified:O,isAnonymous:L,providerData:x,stsTokenManager:v}=t;ae(N&&v,e,"internal-error");const m=Cn.fromJSON(this.name,v);ae(typeof N=="string",e,"internal-error"),pr(p,e.name),pr(g,e.name),ae(typeof O=="boolean",e,"internal-error"),ae(typeof L=="boolean",e,"internal-error"),pr(S,e.name),pr(R,e.name),pr(_,e.name),pr(A,e.name),pr(b,e.name),pr(D,e.name);const E=new Jt({uid:N,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:L,photoURL:R,phoneNumber:S,tenantId:_,stsTokenManager:m,createdAt:b,lastLoginAt:D});return x&&Array.isArray(x)&&(E.providerData=x.map(T=>Object.assign({},T))),A&&(E._redirectEventId=A),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new Cn;i.updateFromServerResponse(t);const s=new Jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ha(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Cn;u.updateFromIdToken(n);const l=new Jt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new eu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Of=new Map;function er(r){or(r instanceof Function,"Expected a class definition");let e=Of.get(r);return e?(or(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Of.set(r,e),e)}/**
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
 */class Wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Wp.type="NONE";const Lf=Wp;/**
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
 */function zs(r,e,t){return`firebase:${r}:${e}:${t}`}class Pn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=zs(this.userKey,i.apiKey,s),this.fullPersistenceKey=zs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Pn(er(Lf),e,n);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||er(Lf);const a=zs(n,e.config.apiKey,e.name);let u=null;for(const c of t)try{const f=await c._get(a);if(f){const p=Jt._fromJSON(e,f);c!==s&&(u=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pn(s,e,n):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Pn(s,e,n))}}/**
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
 */function kf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xp(e))return"Blackberry";if(Jp(e))return"Webos";if(zp(e))return"Safari";if((e.includes("chrome/")||Yp(e))&&!e.includes("edge/"))return"Chrome";if(Qp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Zp(r=rt()){return/firefox\//i.test(r)}function zp(r=rt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yp(r=rt()){return/crios\//i.test(r)}function jp(r=rt()){return/iemobile/i.test(r)}function Qp(r=rt()){return/android/i.test(r)}function Xp(r=rt()){return/blackberry/i.test(r)}function Jp(r=rt()){return/webos/i.test(r)}function Pc(r=rt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function PE(r=rt()){var e;return Pc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DE(){return jm()&&document.documentMode===10}function eg(r=rt()){return Pc(r)||Qp(r)||Jp(r)||Xp(r)||/windows phone/i.test(r)||jp(r)}/**
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
 */function tg(r,e=[]){let t;switch(r){case"Browser":t=kf(rt());break;case"Worker":t=`${kf(rt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${n}`}/**
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
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,u)=>{try{const l=e(s);a(l)}catch(l){u(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function NE(r,e={}){return Or(r,"GET","/v2/passwordPolicy",Wi(r,e))}/**
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
 */const ME=6;class OE{constructor(e){var t,n,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ME,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class LE{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=er(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qp(this,{idToken:e}),n=await Jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(wr(this));const t=e?Mr(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NE(this),t=new OE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await CE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&er(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&cE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function zn(r){return Mr(r)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=iv(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kE(r){Na=r}function rg(r){return Na.loadJS(r)}function xE(){return Na.recaptchaEnterpriseScript}function $E(){return Na.gapiScript}function VE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const FE="recaptcha-enterprise",UE="NO_RECAPTCHA";class BE{constructor(e){this.type=FE,this.auth=zn(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{yE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const c=new _E(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){const l=window.grecaptcha;Nf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{a(c)}).catch(()=>{a(UE)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(u=>{if(!t&&Nf(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xE();l.length!==0&&(l+=u),rg(l).then(()=>{i(u,s,a)}).catch(c=>{a(c)})}}).catch(u=>{a(u)})})}}async function $f(r,e,t,n=!1){const i=new BE(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function HE(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $f(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $f(r,e,t,t==="getOobCode");return n(r,a)}else return Promise.reject(s)})}/**
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
 */function GE(r,e){const t=tc(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(na(s,e??{}))return i;ar(i,"already-initialized")}return t.initialize({options:e})}function qE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(er);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function KE(r,e,t){const n=zn(r);ae(n._canInitEmulator,n,"emulator-config-failed"),ae(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!1,s=ng(e),{host:a,port:u}=WE(e),l=u===null?"":`:${u}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZE()}function ng(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function WE(r){const e=ng(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Vf(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Vf(a)}}}function Vf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ZE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ig{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function Dn(r,e){return Hp(r,"POST","/v1/accounts:signInWithIdp",Wi(r,e))}/**
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
 */const zE="http://localhost";class tn extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ar("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Sc(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new tn(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Dn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:zE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ui(t)}return e}}/**
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
 */class sg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zi extends sg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends Zi{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tn._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mr.credential(t,n)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class vr extends Zi{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class _r extends Zi{constructor(){super("twitter.com")}static credential(e,t){return tn._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _r.credential(t,n)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */async function YE(r,e){return Hp(r,"POST","/v1/accounts:signUp",Wi(r,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Jt._fromIdTokenResponse(e,n,i),a=Ff(n);return new rn({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ff(n);return new rn({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ff(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class fa extends lr{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new fa(e,t,n,i)}}function ag(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(r,s,e,n):s})}async function jE(r,e,t=!1){const n=await Fn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return rn._forOperation(r,"link",n)}/**
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
 */async function QE(r,e,t=!1){const{auth:n}=r;if(Qt(n.app))return Promise.reject(wr(n));const i="reauthenticate";try{const s=await Fn(r,ag(n,i,e,r),t);ae(s.idToken,n,"internal-error");const a=Cc(s.idToken);ae(a,n,"internal-error");const{sub:u}=a;return ae(r.uid===u,n,"user-mismatch"),rn._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ar(n,"user-mismatch"),s}}/**
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
 */async function XE(r,e,t=!1){if(Qt(r.app))return Promise.reject(wr(r));const n="signIn",i=await ag(r,n,e),s=await rn._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}/**
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
 */async function JE(r){const e=zn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cw(r,e,t){if(Qt(r.app))return Promise.reject(wr(r));const n=zn(r),a=await HE(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YE).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&JE(r),l}),u=await rn._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(u.user),u}/**
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
 */async function eA(r,e){return Or(r,"POST","/v1/accounts:update",e)}/**
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
 */async function Pw(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Mr(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Fn(n,eA(n.auth,s));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const u=n.providerData.find(({providerId:l})=>l==="password");u&&(u.displayName=n.displayName,u.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}function tA(r,e,t,n){return Mr(r).onIdTokenChanged(e,t,n)}function rA(r,e,t){return Mr(r).beforeAuthStateChanged(e,t)}const da="__sak";/**
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
 */class og{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(da,"1"),this.storage.removeItem(da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const nA=1e3,iA=10;class ug extends og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);DE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iA):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ug.type="LOCAL";const sA=ug;/**
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
 */class lg extends og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lg.type="SESSION";const cg=lg;/**
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
 */function aA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Ma(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const u=Array.from(a).map(async c=>c(t.origin,s)),l=await aA(u);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function Dc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class oA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{const c=Dc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(g.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ft(){return window}function uA(r){Ft().location.href=r}/**
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
 */function hg(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function lA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function hA(){return hg()?self:null}/**
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
 */const fg="firebaseLocalStorageDb",fA=1,pa="firebaseLocalStorage",dg="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oa(r,e){return r.transaction([pa],e?"readwrite":"readonly").objectStore(pa)}function dA(){const r=indexedDB.deleteDatabase(fg);return new zi(r).toPromise()}function tu(){const r=indexedDB.open(fg,fA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(pa,{keyPath:dg})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(pa)?e(n):(n.close(),await dA(),e(await tu()))})})}async function Uf(r,e,t){const n=Oa(r,!0).put({[dg]:e,value:t});return new zi(n).toPromise()}async function pA(r,e){const t=Oa(r,!1).get(e),n=await new zi(t).toPromise();return n===void 0?null:n.value}function Bf(r,e){const t=Oa(r,!0).delete(e);return new zi(t).toPromise()}const gA=800,mA=3;class pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>mA)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(hA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lA(),!this.activeServiceWorker)return;this.sender=new oA(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tu();return await Uf(e,da,"1"),await Bf(e,da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>pA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oa(i,!1).getAll();return new zi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pg.type="LOCAL";const vA=pg;new Ki(3e4,6e4);/**
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
 */function _A(r,e){return e?er(e):(ae(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class bc extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yA(r){return XE(r.auth,new bc(r),r.bypassAuthState)}function EA(r){const{auth:e,user:t}=r;return ae(t,e,"internal-error"),QE(t,new bc(r),r.bypassAuthState)}async function AA(r){const{auth:e,user:t}=r;return ae(t,e,"internal-error"),jE(t,new bc(r),r.bypassAuthState)}/**
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
 */class gg{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yA;case"linkViaPopup":case"linkViaRedirect":return AA;case"reauthViaPopup":case"reauthViaRedirect":return EA;default:ar(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IA=new Ki(2e3,1e4);class In extends gg{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,In.currentPopupAction&&In.currentPopupAction.cancel(),In.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,In.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IA.get())};e()}}In.currentPopupAction=null;/**
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
 */const TA="pendingRedirect",Ys=new Map;class SA extends gg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const n=await wA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wA(r,e){const t=PA(e),n=CA(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function RA(r,e){Ys.set(r._key(),e)}function CA(r){return er(r._redirectPersistence)}function PA(r){return zs(TA,r.config.apiKey,r.name)}async function DA(r,e,t=!1){if(Qt(r.app))return Promise.reject(wr(r));const n=zn(r),i=_A(n,e),a=await new SA(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const bA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!mg(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Vt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hf(e))}saveEventToCache(e){this.cachedEventUids.add(Hf(e)),this.lastProcessedEventTime=Date.now()}}function Hf(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function mg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mg(r);default:return!1}}/**
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
 */async function OA(r,e={}){return Or(r,"GET","/v1/projects",e)}/**
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
 */const LA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kA=/^https?/;async function xA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OA(r);for(const t of e)try{if($A(t))return}catch{}ar(r,"unauthorized-domain")}function $A(r){const e=Jo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!kA.test(t))return!1;if(LA.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const VA=new Ki(3e4,6e4);function Gf(){const r=Ft().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function FA(r){return new Promise((e,t)=>{var n,i,s;function a(){Gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gf(),t(Vt(r,"network-request-failed"))},timeout:VA.get()})}if(!((i=(n=Ft().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ft().gapi)===null||s===void 0)&&s.load)a();else{const u=VE("iframefcb");return Ft()[u]=()=>{gapi.load?a():t(Vt(r,"network-request-failed"))},rg(`${$E()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw js=null,e})}let js=null;function UA(r){return js=js||FA(r),js}/**
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
 */const BA=new Ki(5e3,15e3),HA="__/auth/iframe",GA="emulator/auth/iframe",qA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WA(r){const e=r.config;ae(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Rc(e,GA):`https://${r.config.authDomain}/${HA}`,n={apiKey:e.apiKey,appName:r.name,v:Gn},i=KA.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Ui(n).slice(1)}`}async function ZA(r){const e=await UA(r),t=Ft().gapi;return ae(t,r,"internal-error"),e.open({where:document.body,url:WA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qA,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Vt(r,"network-request-failed"),u=Ft().setTimeout(()=>{s(a)},BA.get());function l(){Ft().clearTimeout(u),i(n)}n.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const zA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YA=500,jA=600,QA="_blank",XA="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JA(r,e,t,n=YA,i=jA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let u="";const l=Object.assign(Object.assign({},zA),{width:n.toString(),height:i.toString(),top:s,left:a}),c=rt().toLowerCase();t&&(u=Yp(c)?QA:t),Zp(c)&&(e=e||XA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[S,R])=>`${g}${S}=${R},`,"");if(PE(c)&&u!=="_self")return eI(e||"",u),new qf(null);const p=window.open(e||"",u,f);ae(p,r,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function eI(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const tI="__/auth/handler",rI="emulator/auth/handler",nI=encodeURIComponent("fac");async function Kf(r,e,t,n,i,s){ae(r.config.authDomain,r,"auth-domain-config-required"),ae(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Gn,eventId:i};if(e instanceof sg){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",nv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Zi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const l=await r._getAppCheckToken(),c=l?`#${nI}=${encodeURIComponent(l)}`:"";return`${iI(r)}?${Ui(u).slice(1)}${c}`}function iI({config:r}){return r.emulator?Rc(r,rI):`https://${r.authDomain}/${tI}`}/**
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
 */const yo="webStorageSupport";class sI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cg,this._completeRedirectFn=DA,this._overrideRedirectResult=RA}async _openPopup(e,t,n,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Kf(e,t,n,Jo(),i);return JA(e,a,Dc())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Kf(e,t,n,Jo(),i);return uA(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ZA(e),n=new NA(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yo,{type:yo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yo];a!==void 0&&t(!!a),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eg()||zp()||Pc()}}const aI=sI;var Wf="@firebase/auth",Zf="1.7.8";/**
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
 */class oI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lI(r){Mn(new Qr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=n.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:u,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(r)},c=new LE(n,i,s,l);return qE(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Mn(new Qr("auth-internal",e=>{const t=zn(e.getProvider("auth").getImmediate());return(n=>new oI(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sr(Wf,Zf,uI(r)),Sr(Wf,Zf,"esm2017")}/**
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
 */const cI=5*60,hI=bd("authIdTokenMaxAge")||cI;let zf=null;const fI=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>hI)return;const i=t==null?void 0:t.token;zf!==i&&(zf=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dw(r=Od()){const e=tc(r,"auth");if(e.isInitialized())return e.getImmediate();const t=GE(r,{popupRedirectResolver:aI,persistence:[vA,sA,cg]}),n=bd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=fI(s.toString());rA(t,a,()=>a(t.currentUser)),tA(t,u=>a(u))}}const i=Pd("auth");return i&&KE(t,`http://${i}`),t}function dI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}kE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Vt("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",dI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lI("Browser");function pI(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function gI(r,e,t){return e&&pI(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var Yf="(prefers-reduced-motion: reduce)",Tn=1,mI=2,Un=3,Yn=4,Yi=5,Qs=6,ga=7,vI={CREATED:Tn,MOUNTED:mI,IDLE:Un,MOVING:Yn,SCROLLING:Yi,DRAGGING:Qs,DESTROYED:ga};function ur(r){r.length=0}function Lr(r,e,t){return Array.prototype.slice.call(r,e,t)}function Ce(r){return r.bind.apply(r,[null].concat(Lr(arguments,1)))}var vg=setTimeout,ru=function(){};function jf(r){return requestAnimationFrame(r)}function La(r,e){return typeof e===r}function Ni(r){return!Mc(r)&&La("object",r)}var Nc=Array.isArray,_g=Ce(La,"function"),Dr=Ce(La,"string"),ji=Ce(La,"undefined");function Mc(r){return r===null}function yg(r){try{return r instanceof(r.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Qi(r){return Nc(r)?r:[r]}function It(r,e){Qi(r).forEach(e)}function Oc(r,e){return r.indexOf(e)>-1}function Xs(r,e){return r.push.apply(r,Qi(e)),r}function tr(r,e,t){r&&It(e,function(n){n&&r.classList[t?"add":"remove"](n)})}function Ht(r,e){tr(r,Dr(e)?e.split(" "):e,!0)}function Xi(r,e){It(e,r.appendChild.bind(r))}function Lc(r,e){It(r,function(t){var n=(e||t).parentNode;n&&n.insertBefore(t,e)})}function Mi(r,e){return yg(r)&&(r.msMatchesSelector||r.matches).call(r,e)}function Eg(r,e){var t=r?Lr(r.children):[];return e?t.filter(function(n){return Mi(n,e)}):t}function Ji(r,e){return e?Eg(r,e)[0]:r.firstElementChild}var Oi=Object.keys;function jr(r,e,t){return r&&(t?Oi(r).reverse():Oi(r)).forEach(function(n){n!=="__proto__"&&e(r[n],n)}),r}function Li(r){return Lr(arguments,1).forEach(function(e){jr(e,function(t,n){r[n]=e[n]})}),r}function Ar(r){return Lr(arguments,1).forEach(function(e){jr(e,function(t,n){Nc(t)?r[n]=t.slice():Ni(t)?r[n]=Ar({},Ni(r[n])?r[n]:{},t):r[n]=t})}),r}function Qf(r,e){It(e||Oi(r),function(t){delete r[t]})}function Gt(r,e){It(r,function(t){It(e,function(n){t&&t.removeAttribute(n)})})}function he(r,e,t){Ni(e)?jr(e,function(n,i){he(r,i,n)}):It(r,function(n){Mc(t)||t===""?Gt(n,e):n.setAttribute(e,String(t))})}function bn(r,e,t){var n=document.createElement(r);return e&&(Dr(e)?Ht(n,e):he(n,e)),t&&Xi(t,n),n}function Ct(r,e,t){if(ji(t))return getComputedStyle(r)[e];Mc(t)||(r.style[e]=""+t)}function ki(r,e){Ct(r,"display",e)}function Ag(r){r.setActive&&r.setActive()||r.focus({preventScroll:!0})}function Pt(r,e){return r.getAttribute(e)}function Xf(r,e){return r&&r.classList.contains(e)}function Et(r){return r.getBoundingClientRect()}function nn(r){It(r,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)})}function Ig(r){return Ji(new DOMParser().parseFromString(r,"text/html").body)}function jt(r,e){r.preventDefault(),e&&(r.stopPropagation(),r.stopImmediatePropagation())}function Tg(r,e){return r&&r.querySelector(e)}function kc(r,e){return e?Lr(r.querySelectorAll(e)):[]}function rr(r,e){tr(r,e,!1)}function nu(r){return r.timeStamp}function qr(r){return Dr(r)?r:r?r+"px":""}var es="splide",xc="data-"+es;function Si(r,e){if(!r)throw new Error("["+es+"] "+(e||""))}var br=Math.min,ma=Math.max,va=Math.floor,xi=Math.ceil,ut=Math.abs;function Sg(r,e,t){return ut(r-e)<t}function Js(r,e,t,n){var i=br(e,t),s=ma(e,t);return n?i<r&&r<s:i<=r&&r<=s}function yn(r,e,t){var n=br(e,t),i=ma(e,t);return br(ma(n,r),i)}function iu(r){return+(r>0)-+(r<0)}function su(r,e){return It(e,function(t){r=r.replace("%s",""+t)}),r}function $c(r){return r<10?"0"+r:""+r}var Jf={};function _I(r){return""+r+$c(Jf[r]=(Jf[r]||0)+1)}function wg(){var r=[];function e(a,u,l,c){i(a,u,function(f,p,g){var S="addEventListener"in f,R=S?f.removeEventListener.bind(f,p,l,c):f.removeListener.bind(f,l);S?f.addEventListener(p,l,c):f.addListener(l),r.push([f,p,g,l,R])})}function t(a,u,l){i(a,u,function(c,f,p){r=r.filter(function(g){return g[0]===c&&g[1]===f&&g[2]===p&&(!l||g[3]===l)?(g[4](),!1):!0})})}function n(a,u,l){var c,f=!0;return typeof CustomEvent=="function"?c=new CustomEvent(u,{bubbles:f,detail:l}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(u,f,!1,l)),a.dispatchEvent(c),c}function i(a,u,l){It(a,function(c){c&&It(u,function(f){f.split(" ").forEach(function(p){var g=p.split(".");l(c,g[0],g[1])})})})}function s(){r.forEach(function(a){a[4]()}),ur(r)}return{bind:e,unbind:t,dispatch:n,destroy:s}}var an="mounted",ed="ready",Nr="move",ts="moved",Rg="click",yI="active",EI="inactive",AI="visible",II="hidden",He="refresh",ct="updated",$i="resize",Vc="resized",TI="drag",SI="dragging",wI="dragged",Fc="scroll",jn="scrolled",RI="overflow",Cg="destroy",CI="arrows:mounted",PI="arrows:updated",DI="pagination:mounted",bI="pagination:updated",Pg="navigation:mounted",Dg="autoplay:play",NI="autoplay:playing",bg="autoplay:pause",Ng="lazyload:loaded",Mg="sk",Og="sh",_a="ei";function Oe(r){var e=r?r.event.bus:document.createDocumentFragment(),t=wg();function n(s,a){t.bind(e,Qi(s).join(" "),function(u){a.apply(a,Nc(u.detail)?u.detail:[])})}function i(s){t.dispatch(e,s,Lr(arguments,1))}return r&&r.event.on(Cg,t.destroy),Li(t,{bus:e,on:n,off:Ce(t.unbind,e),emit:i})}function ka(r,e,t,n){var i=Date.now,s,a=0,u,l=!0,c=0;function f(){if(!l){if(a=r?br((i()-s)/r,1):1,t&&t(a),a>=1&&(e(),s=i(),n&&++c>=n))return g();u=jf(f)}}function p(b){b||R(),s=i()-(b?a*r:0),l=!1,u=jf(f)}function g(){l=!0}function S(){s=i(),a=0,t&&t(a)}function R(){u&&cancelAnimationFrame(u),a=0,u=0,l=!0}function _(b){r=b}function A(){return l}return{start:p,rewind:S,pause:g,cancel:R,set:_,isPaused:A}}function MI(r){var e=r;function t(i){e=i}function n(i){return Oc(Qi(i),e)}return{set:t,is:n}}function OI(r,e){var t=ka(0,r,null,1);return function(){t.isPaused()&&t.start()}}function LI(r,e,t){var n=r.state,i=t.breakpoints||{},s=t.reducedMotion||{},a=wg(),u=[];function l(){var R=t.mediaQuery==="min";Oi(i).sort(function(_,A){return R?+_-+A:+A-+_}).forEach(function(_){f(i[_],"("+(R?"min":"max")+"-width:"+_+"px)")}),f(s,Yf),p()}function c(R){R&&a.destroy()}function f(R,_){var A=matchMedia(_);a.bind(A,"change",p),u.push([R,A])}function p(){var R=n.is(ga),_=t.direction,A=u.reduce(function(b,D){return Ar(b,D[1].matches?D[0]:{})},{});Qf(t),S(A),t.destroy?r.destroy(t.destroy==="completely"):R?(c(!0),r.mount()):_!==t.direction&&r.refresh()}function g(R){matchMedia(Yf).matches&&(R?Ar(t,s):Qf(t,Oi(s)))}function S(R,_,A){Ar(t,R),_&&Ar(Object.getPrototypeOf(t),R),(A||!n.is(Tn))&&r.emit(ct,t)}return{setup:l,destroy:c,reduce:g,set:S}}var xa="Arrow",$a=xa+"Left",Va=xa+"Right",Lg=xa+"Up",kg=xa+"Down",td="rtl",Fa="ttb",Eo={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Lg,Va],ArrowRight:[kg,$a]};function kI(r,e,t){function n(s,a,u){u=u||t.direction;var l=u===td&&!a?1:u===Fa?0:-1;return Eo[s]&&Eo[s][l]||s.replace(/width|left|right/i,function(c,f){var p=Eo[c.toLowerCase()][l]||c;return f>0?p.charAt(0).toUpperCase()+p.slice(1):p})}function i(s){return s*(t.direction===td?1:-1)}return{resolve:n,orient:i}}var nr="role",Nn="tabindex",xI="disabled",Dt="aria-",rs=Dt+"controls",xg=Dt+"current",rd=Dt+"selected",At=Dt+"label",Uc=Dt+"labelledby",$g=Dt+"hidden",Bc=Dt+"orientation",Vi=Dt+"roledescription",nd=Dt+"live",id=Dt+"busy",sd=Dt+"atomic",Hc=[nr,Nn,xI,rs,xg,At,Uc,$g,Bc,Vi],qt=es+"__",kr="is-",Ao=es,ad=qt+"track",$I=qt+"list",Ua=qt+"slide",Vg=Ua+"--clone",VI=Ua+"__container",Gc=qt+"arrows",Ba=qt+"arrow",Fg=Ba+"--prev",Ug=Ba+"--next",Ha=qt+"pagination",Bg=Ha+"__page",FI=qt+"progress",UI=FI+"__bar",BI=qt+"toggle",HI=qt+"spinner",GI=qt+"sr",qI=kr+"initialized",sn=kr+"active",Hg=kr+"prev",Gg=kr+"next",au=kr+"visible",ou=kr+"loading",qg=kr+"focus-in",Kg=kr+"overflow",KI=[sn,au,Hg,Gg,ou,qg,Kg],WI={slide:Ua,clone:Vg,arrows:Gc,arrow:Ba,prev:Fg,next:Ug,pagination:Ha,page:Bg,spinner:HI};function ZI(r,e){if(_g(r.closest))return r.closest(e);for(var t=r;t&&t.nodeType===1&&!Mi(t,e);)t=t.parentElement;return t}var zI=5,od=200,Wg="touchstart mousedown",Io="touchmove mousemove",To="touchend touchcancel mouseup click";function YI(r,e,t){var n=Oe(r),i=n.on,s=n.bind,a=r.root,u=t.i18n,l={},c=[],f=[],p=[],g,S,R;function _(){N(),O(),D()}function A(){i(He,b),i(He,_),i(ct,D),s(document,Wg+" keydown",function(v){R=v.type==="keydown"},{capture:!0}),s(a,"focusin",function(){tr(a,qg,!!R)})}function b(v){var m=Hc.concat("style");ur(c),rr(a,f),rr(g,p),Gt([g,S],m),Gt(a,v?m:["style",Vi])}function D(){rr(a,f),rr(g,p),f=x(Ao),p=x(ad),Ht(a,f),Ht(g,p),he(a,At,t.label),he(a,Uc,t.labelledby)}function N(){g=L("."+ad),S=Ji(g,"."+$I),Si(g&&S,"A track/list element is missing."),Xs(c,Eg(S,"."+Ua+":not(."+Vg+")")),jr({arrows:Gc,pagination:Ha,prev:Fg,next:Ug,bar:UI,toggle:BI},function(v,m){l[m]=L("."+v)}),Li(l,{root:a,track:g,list:S,slides:c})}function O(){var v=a.id||_I(es),m=t.role;a.id=v,g.id=g.id||v+"-track",S.id=S.id||v+"-list",!Pt(a,nr)&&a.tagName!=="SECTION"&&m&&he(a,nr,m),he(a,Vi,u.carousel),he(S,nr,"presentation")}function L(v){var m=Tg(a,v);return m&&ZI(m,"."+Ao)===a?m:void 0}function x(v){return[v+"--"+t.type,v+"--"+t.direction,t.drag&&v+"--draggable",t.isNavigation&&v+"--nav",v===Ao&&sn]}return Li(l,{setup:_,mount:A,destroy:b})}var Bn="slide",Qn="loop",ns="fade";function jI(r,e,t,n){var i=Oe(r),s=i.on,a=i.emit,u=i.bind,l=r.Components,c=r.root,f=r.options,p=f.isNavigation,g=f.updateOnMove,S=f.i18n,R=f.pagination,_=f.slideFocus,A=l.Direction.resolve,b=Pt(n,"style"),D=Pt(n,At),N=t>-1,O=Ji(n,"."+VI),L;function x(){N||(n.id=c.id+"-slide"+$c(e+1),he(n,nr,R?"tabpanel":"group"),he(n,Vi,S.slide),he(n,At,D||su(S.slideLabel,[e+1,r.length]))),v()}function v(){u(n,"click",Ce(a,Rg,re)),u(n,"keydown",Ce(a,Mg,re)),s([ts,Og,jn],w),s(Pg,E),g&&s(Nr,T)}function m(){L=!0,i.destroy(),rr(n,KI),Gt(n,Hc),he(n,"style",b),he(n,At,D||"")}function E(){var ee=r.splides.map(function(W){var J=W.splide.Components.Slides.getAt(e);return J?J.slide.id:""}).join(" ");he(n,At,su(S.slideX,(N?t:e)+1)),he(n,rs,ee),he(n,nr,_?"button":""),_&&Gt(n,Vi)}function T(){L||w()}function w(){if(!L){var ee=r.index;P(),I(),tr(n,Hg,e===ee-1),tr(n,Gg,e===ee+1)}}function P(){var ee=X();ee!==Xf(n,sn)&&(tr(n,sn,ee),he(n,xg,p&&ee||""),a(ee?yI:EI,re))}function I(){var ee=ge(),W=!ee&&(!X()||N);if(r.state.is([Yn,Yi])||he(n,$g,W||""),he(kc(n,f.focusableNodes||""),Nn,W?-1:""),_&&he(n,Nn,W?-1:0),ee!==Xf(n,au)&&(tr(n,au,ee),a(ee?AI:II,re)),!ee&&document.activeElement===n){var J=l.Slides.getAt(r.index);J&&Ag(J.slide)}}function j(ee,W,J){Ct(J&&O||n,ee,W)}function X(){var ee=r.index;return ee===e||f.cloneStatus&&ee===t}function ge(){if(r.is(ns))return X();var ee=Et(l.Elements.track),W=Et(n),J=A("left",!0),oe=A("right",!0);return va(ee[J])<=xi(W[J])&&va(W[oe])<=xi(ee[oe])}function Ee(ee,W){var J=ut(ee-e);return!N&&(f.rewind||r.is(Qn))&&(J=br(J,r.length-J)),J<=W}var re={index:e,slideIndex:t,slide:n,container:O,isClone:N,mount:x,destroy:m,update:w,style:j,isWithin:Ee};return re}function QI(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=n.bind,u=e.Elements,l=u.slides,c=u.list,f=[];function p(){g(),i(He,S),i(He,g)}function g(){l.forEach(function(w,P){_(w,P,-1)})}function S(){L(function(w){w.destroy()}),ur(f)}function R(){L(function(w){w.update()})}function _(w,P,I){var j=jI(r,P,I,w);j.mount(),f.push(j),f.sort(function(X,ge){return X.index-ge.index})}function A(w){return w?x(function(P){return!P.isClone}):f}function b(w){var P=e.Controller,I=P.toIndex(w),j=P.hasFocus()?1:t.perPage;return x(function(X){return Js(X.index,I,I+j-1)})}function D(w){return x(w)[0]}function N(w,P){It(w,function(I){if(Dr(I)&&(I=Ig(I)),yg(I)){var j=l[P];j?Lc(I,j):Xi(c,I),Ht(I,t.classes.slide),m(I,Ce(s,$i))}}),s(He)}function O(w){nn(x(w).map(function(P){return P.slide})),s(He)}function L(w,P){A(P).forEach(w)}function x(w){return f.filter(_g(w)?w:function(P){return Dr(w)?Mi(P.slide,w):Oc(Qi(w),P.index)})}function v(w,P,I){L(function(j){j.style(w,P,I)})}function m(w,P){var I=kc(w,"img"),j=I.length;j?I.forEach(function(X){a(X,"load error",function(){--j||P()})}):P()}function E(w){return w?l.length:f.length}function T(){return f.length>t.perPage}return{mount:p,destroy:S,update:R,register:_,get:A,getIn:b,getAt:D,add:N,remove:O,forEach:L,filter:x,style:v,getLength:E,isEnough:T}}function XI(r,e,t){var n=Oe(r),i=n.on,s=n.bind,a=n.emit,u=e.Slides,l=e.Direction.resolve,c=e.Elements,f=c.root,p=c.track,g=c.list,S=u.getAt,R=u.style,_,A,b;function D(){N(),s(window,"resize load",OI(Ce(a,$i))),i([ct,He],N),i($i,O)}function N(){_=t.direction===Fa,Ct(f,"maxWidth",qr(t.width)),Ct(p,l("paddingLeft"),L(!1)),Ct(p,l("paddingRight"),L(!0)),O(!0)}function O(re){var ee=Et(f);(re||A.width!==ee.width||A.height!==ee.height)&&(Ct(p,"height",x()),R(l("marginRight"),qr(t.gap)),R("width",m()),R("height",E(),!0),A=ee,a(Vc),b!==(b=Ee())&&(tr(f,Kg,b),a(RI,b)))}function L(re){var ee=t.padding,W=l(re?"right":"left");return ee&&qr(ee[W]||(Ni(ee)?0:ee))||"0px"}function x(){var re="";return _&&(re=v(),Si(re,"height or heightRatio is missing."),re="calc("+re+" - "+L(!1)+" - "+L(!0)+")"),re}function v(){return qr(t.height||Et(g).width*t.heightRatio)}function m(){return t.autoWidth?null:qr(t.fixedWidth)||(_?"":T())}function E(){return qr(t.fixedHeight)||(_?t.autoHeight?null:T():v())}function T(){var re=qr(t.gap);return"calc((100%"+(re&&" + "+re)+")/"+(t.perPage||1)+(re&&" - "+re)+")"}function w(){return Et(g)[l("width")]}function P(re,ee){var W=S(re||0);return W?Et(W.slide)[l("width")]+(ee?0:X()):0}function I(re,ee){var W=S(re);if(W){var J=Et(W.slide)[l("right")],oe=Et(g)[l("left")];return ut(J-oe)+(ee?0:X())}return 0}function j(re){return I(r.length-1)-I(0)+P(0,re)}function X(){var re=S(0);return re&&parseFloat(Ct(re.slide,l("marginRight")))||0}function ge(re){return parseFloat(Ct(p,l("padding"+(re?"Right":"Left"))))||0}function Ee(){return r.is(ns)||j(!0)>w()}return{mount:D,resize:O,listSize:w,slideSize:P,sliderSize:j,totalSize:I,getPadding:ge,isOverflow:Ee}}var JI=2;function e1(r,e,t){var n=Oe(r),i=n.on,s=e.Elements,a=e.Slides,u=e.Direction.resolve,l=[],c;function f(){i(He,p),i([ct,$i],S),(c=A())&&(R(c),e.Layout.resize(!0))}function p(){g(),f()}function g(){nn(l),ur(l),n.destroy()}function S(){var b=A();c!==b&&(c<b||!b)&&n.emit(He)}function R(b){var D=a.get().slice(),N=D.length;if(N){for(;D.length<b;)Xs(D,D);Xs(D.slice(-b),D.slice(0,b)).forEach(function(O,L){var x=L<b,v=_(O.slide,L);x?Lc(v,D[0].slide):Xi(s.list,v),Xs(l,v),a.register(v,L-b+(x?0:N),O.index)})}}function _(b,D){var N=b.cloneNode(!0);return Ht(N,t.classes.clone),N.id=r.root.id+"-clone"+$c(D+1),N}function A(){var b=t.clones;if(!r.is(Qn))b=0;else if(ji(b)){var D=t[u("fixedWidth")]&&e.Layout.slideSize(0),N=D&&xi(Et(s.track)[u("width")]/D);b=N||t[u("autoWidth")]&&r.length||t.perPage*JI}return b}return{mount:f,destroy:g}}function t1(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=r.state.set,u=e.Layout,l=u.slideSize,c=u.getPadding,f=u.totalSize,p=u.listSize,g=u.sliderSize,S=e.Direction,R=S.resolve,_=S.orient,A=e.Elements,b=A.list,D=A.track,N;function O(){N=e.Transition,i([an,Vc,ct,He],L)}function L(){e.Controller.isBusy()||(e.Scroll.cancel(),v(r.index),e.Slides.update())}function x(W,J,oe,pe){W!==J&&re(W>oe)&&(w(),m(T(j(),W>oe),!0)),a(Yn),s(Nr,J,oe,W),N.start(J,function(){a(Un),s(ts,J,oe,W),pe&&pe()})}function v(W){m(I(W,!0))}function m(W,J){if(!r.is(ns)){var oe=J?W:E(W);Ct(b,"transform","translate"+R("X")+"("+oe+"px)"),W!==oe&&s(Og)}}function E(W){if(r.is(Qn)){var J=P(W),oe=J>e.Controller.getEnd(),pe=J<0;(pe||oe)&&(W=T(W,oe))}return W}function T(W,J){var oe=W-Ee(J),pe=g();return W-=_(pe*(xi(ut(oe)/pe)||1))*(J?1:-1),W}function w(){m(j(),!0),N.cancel()}function P(W){for(var J=e.Slides.get(),oe=0,pe=1/0,Me=0;Me<J.length;Me++){var Ge=J[Me].index,Z=ut(I(Ge,!0)-W);if(Z<=pe)pe=Z,oe=Ge;else break}return oe}function I(W,J){var oe=_(f(W-1)-ge(W));return J?X(oe):oe}function j(){var W=R("left");return Et(b)[W]-Et(D)[W]+_(c(!1))}function X(W){return t.trimSpace&&r.is(Bn)&&(W=yn(W,0,_(g(!0)-p()))),W}function ge(W){var J=t.focus;return J==="center"?(p()-l(W,!0))/2:+J*l(W)||0}function Ee(W){return I(W?e.Controller.getEnd():0,!!t.trimSpace)}function re(W){var J=_(T(j(),W));return W?J>=0:J<=b[R("scrollWidth")]-Et(D)[R("width")]}function ee(W,J){J=ji(J)?j():J;var oe=W!==!0&&_(J)<_(Ee(!1)),pe=W!==!1&&_(J)>_(Ee(!0));return oe||pe}return{mount:O,move:x,jump:v,translate:m,shift:T,cancel:w,toIndex:P,toPosition:I,getPosition:j,getLimit:Ee,exceededLimit:ee,reposition:L}}function r1(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=e.Move,u=a.getPosition,l=a.getLimit,c=a.toPosition,f=e.Slides,p=f.isEnough,g=f.getLength,S=t.omitEnd,R=r.is(Qn),_=r.is(Bn),A=Ce(j,!1),b=Ce(j,!0),D=t.start||0,N,O=D,L,x,v;function m(){E(),i([ct,He,_a],E),i(Vc,T)}function E(){L=g(!0),x=t.perMove,v=t.perPage,N=re();var Z=yn(D,0,S?N:L-1);Z!==D&&(D=Z,a.reposition())}function T(){N!==re()&&s(_a)}function w(Z,me,Ve){if(!Ge()){var Re=I(Z),Pe=Ee(Re);Pe>-1&&(me||Pe!==D)&&(oe(Pe),a.move(Re,Pe,O,Ve))}}function P(Z,me,Ve,Re){e.Scroll.scroll(Z,me,Ve,function(){var Pe=Ee(a.toIndex(u()));oe(S?br(Pe,N):Pe),Re&&Re()})}function I(Z){var me=D;if(Dr(Z)){var Ve=Z.match(/([+\-<>])(\d+)?/)||[],Re=Ve[1],Pe=Ve[2];Re==="+"||Re==="-"?me=X(D+ +(""+Re+(+Pe||1)),D):Re===">"?me=Pe?ee(+Pe):A(!0):Re==="<"&&(me=b(!0))}else me=R?Z:yn(Z,0,N);return me}function j(Z,me){var Ve=x||(Me()?1:v),Re=X(D+Ve*(Z?-1:1),D,!(x||Me()));return Re===-1&&_&&!Sg(u(),l(!Z),1)?Z?0:N:me?Re:Ee(Re)}function X(Z,me,Ve){if(p()||Me()){var Re=ge(Z);Re!==Z&&(me=Z,Z=Re,Ve=!1),Z<0||Z>N?!x&&(Js(0,Z,me,!0)||Js(N,me,Z,!0))?Z=ee(W(Z)):R?Z=Ve?Z<0?-(L%v||v):L:Z:t.rewind?Z=Z<0?N:0:Z=-1:Ve&&Z!==me&&(Z=ee(W(me)+(Z<me?-1:1)))}else Z=-1;return Z}function ge(Z){if(_&&t.trimSpace==="move"&&Z!==D)for(var me=u();me===c(Z,!0)&&Js(Z,0,r.length-1,!t.rewind);)Z<D?--Z:++Z;return Z}function Ee(Z){return R?(Z+L)%L||0:Z}function re(){for(var Z=L-(Me()||R&&x?1:v);S&&Z-- >0;)if(c(L-1,!0)!==c(Z,!0)){Z++;break}return yn(Z,0,L-1)}function ee(Z){return yn(Me()?Z:v*Z,0,N)}function W(Z){return Me()?br(Z,N):va((Z>=N?L-1:Z)/v)}function J(Z){var me=a.toIndex(Z);return _?yn(me,0,N):me}function oe(Z){Z!==D&&(O=D,D=Z)}function pe(Z){return Z?O:D}function Me(){return!ji(t.focus)||t.isNavigation}function Ge(){return r.state.is([Yn,Yi])&&!!t.waitForTransition}return{mount:m,go:w,scroll:P,getNext:A,getPrev:b,getAdjacent:j,getEnd:re,setIndex:oe,getIndex:pe,toIndex:ee,toPage:W,toDest:J,hasFocus:Me,isBusy:Ge}}var n1="http://www.w3.org/2000/svg",i1="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Vs=40;function s1(r,e,t){var n=Oe(r),i=n.on,s=n.bind,a=n.emit,u=t.classes,l=t.i18n,c=e.Elements,f=e.Controller,p=c.arrows,g=c.track,S=p,R=c.prev,_=c.next,A,b,D={};function N(){L(),i(ct,O)}function O(){x(),N()}function L(){var P=t.arrows;P&&!(R&&_)&&E(),R&&_&&(Li(D,{prev:R,next:_}),ki(S,P?"":"none"),Ht(S,b=Gc+"--"+t.direction),P&&(v(),w(),he([R,_],rs,g.id),a(CI,R,_)))}function x(){n.destroy(),rr(S,b),A?(nn(p?[R,_]:S),R=_=null):Gt([R,_],Hc)}function v(){i([an,ts,He,jn,_a],w),s(_,"click",Ce(m,">")),s(R,"click",Ce(m,"<"))}function m(P){f.go(P,!0)}function E(){S=p||bn("div",u.arrows),R=T(!0),_=T(!1),A=!0,Xi(S,[R,_]),!p&&Lc(S,g)}function T(P){var I='<button class="'+u.arrow+" "+(P?u.prev:u.next)+'" type="button"><svg xmlns="'+n1+'" viewBox="0 0 '+Vs+" "+Vs+'" width="'+Vs+'" height="'+Vs+'" focusable="false"><path d="'+(t.arrowPath||i1)+'" />';return Ig(I)}function w(){if(R&&_){var P=r.index,I=f.getPrev(),j=f.getNext(),X=I>-1&&P<I?l.last:l.prev,ge=j>-1&&P>j?l.first:l.next;R.disabled=I<0,_.disabled=j<0,he(R,At,X),he(_,At,ge),a(PI,R,_,I,j)}}return{arrows:D,mount:N,destroy:x,update:w}}var a1=xc+"-interval";function o1(r,e,t){var n=Oe(r),i=n.on,s=n.bind,a=n.emit,u=ka(t.interval,r.go.bind(r,">"),v),l=u.isPaused,c=e.Elements,f=e.Elements,p=f.root,g=f.toggle,S=t.autoplay,R,_,A=S==="pause";function b(){S&&(D(),g&&he(g,rs,c.track.id),A||N(),x())}function D(){t.pauseOnHover&&s(p,"mouseenter mouseleave",function(E){R=E.type==="mouseenter",L()}),t.pauseOnFocus&&s(p,"focusin focusout",function(E){_=E.type==="focusin",L()}),g&&s(g,"click",function(){A?N():O(!0)}),i([Nr,Fc,He],u.rewind),i(Nr,m)}function N(){l()&&e.Slides.isEnough()&&(u.start(!t.resetProgress),_=R=A=!1,x(),a(Dg))}function O(E){E===void 0&&(E=!0),A=!!E,x(),l()||(u.pause(),a(bg))}function L(){A||(R||_?O(!1):N())}function x(){g&&(tr(g,sn,!A),he(g,At,t.i18n[A?"play":"pause"]))}function v(E){var T=c.bar;T&&Ct(T,"width",E*100+"%"),a(NI,E)}function m(E){var T=e.Slides.getAt(E);u.set(T&&+Pt(T.slide,a1)||t.interval)}return{mount:b,destroy:u.cancel,play:N,pause:O,isPaused:l}}function u1(r,e,t){var n=Oe(r),i=n.on;function s(){t.cover&&(i(Ng,Ce(u,!0)),i([an,ct,He],Ce(a,!0)))}function a(l){e.Slides.forEach(function(c){var f=Ji(c.container||c.slide,"img");f&&f.src&&u(l,f,c)})}function u(l,c,f){f.style("background",l?'center/cover no-repeat url("'+c.src+'")':"",!0),ki(c,l?"none":"")}return{mount:s,destroy:Ce(a,!1)}}var l1=10,c1=600,h1=.6,f1=1.5,d1=800;function p1(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=r.state.set,u=e.Move,l=u.getPosition,c=u.getLimit,f=u.exceededLimit,p=u.translate,g=r.is(Bn),S,R,_=1;function A(){i(Nr,O),i([ct,He],L)}function b(v,m,E,T,w){var P=l();if(O(),E&&(!g||!f())){var I=e.Layout.sliderSize(),j=iu(v)*I*va(ut(v)/I)||0;v=u.toPosition(e.Controller.toDest(v%I))+j}var X=Sg(P,v,1);_=1,m=X?0:m||ma(ut(v-P)/f1,d1),R=T,S=ka(m,D,Ce(N,P,v,w),1),a(Yi),s(Fc),S.start()}function D(){a(Un),R&&R(),s(jn)}function N(v,m,E,T){var w=l(),P=v+(m-v)*x(T),I=(P-w)*_;p(w+I),g&&!E&&f()&&(_*=h1,ut(I)<l1&&b(c(f(!0)),c1,!1,R,!0))}function O(){S&&S.cancel()}function L(){S&&!S.isPaused()&&(O(),D())}function x(v){var m=t.easingFunc;return m?m(v):1-Math.pow(1-v,4)}return{mount:A,destroy:O,scroll:b,cancel:L}}var En={passive:!1,capture:!0};function g1(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=n.bind,u=n.unbind,l=r.state,c=e.Move,f=e.Scroll,p=e.Controller,g=e.Elements.track,S=e.Media.reduce,R=e.Direction,_=R.resolve,A=R.orient,b=c.getPosition,D=c.exceededLimit,N,O,L,x,v,m=!1,E,T,w;function P(){a(g,Io,ru,En),a(g,To,ru,En),a(g,Wg,j,En),a(g,"click",Ee,{capture:!0}),a(g,"dragstart",jt),i([an,ct],I)}function I(){var Y=t.drag;Nt(!Y),x=Y==="free"}function j(Y){if(E=!1,!T){var ce=Pe(Y);Re(Y.target)&&(ce||!Y.button)&&(p.isBusy()?jt(Y,!0):(w=ce?g:window,v=l.is([Yn,Yi]),L=null,a(w,Io,X,En),a(w,To,ge,En),c.cancel(),f.cancel(),re(Y)))}}function X(Y){if(l.is(Qs)||(l.set(Qs),s(TI)),Y.cancelable)if(v){c.translate(N+Ve(Me(Y)));var ce=Ge(Y)>od,je=m!==(m=D());(ce||je)&&re(Y),E=!0,s(SI),jt(Y)}else J(Y)&&(v=W(Y),jt(Y))}function ge(Y){l.is(Qs)&&(l.set(Un),s(wI)),v&&(ee(Y),jt(Y)),u(w,Io,X),u(w,To,ge),v=!1}function Ee(Y){!T&&E&&jt(Y,!0)}function re(Y){L=O,O=Y,N=b()}function ee(Y){var ce=oe(Y),je=pe(ce),nt=t.rewind&&t.rewindByDrag;S(!1),x?p.scroll(je,0,t.snap):r.is(ns)?p.go(A(iu(ce))<0?nt?"<":"-":nt?">":"+"):r.is(Bn)&&m&&nt?p.go(D(!0)?">":"<"):p.go(p.toDest(je),!0),S(!0)}function W(Y){var ce=t.dragMinThreshold,je=Ni(ce),nt=je&&ce.mouse||0,xr=(je?ce.touch:+ce)||10;return ut(Me(Y))>(Pe(Y)?xr:nt)}function J(Y){return ut(Me(Y))>ut(Me(Y,!0))}function oe(Y){if(r.is(Qn)||!m){var ce=Ge(Y);if(ce&&ce<od)return Me(Y)/ce}return 0}function pe(Y){return b()+iu(Y)*br(ut(Y)*(t.flickPower||600),x?1/0:e.Layout.listSize()*(t.flickMaxPages||1))}function Me(Y,ce){return me(Y,ce)-me(Z(Y),ce)}function Ge(Y){return nu(Y)-nu(Z(Y))}function Z(Y){return O===Y&&L||O}function me(Y,ce){return(Pe(Y)?Y.changedTouches[0]:Y)["page"+_(ce?"Y":"X")]}function Ve(Y){return Y/(m&&r.is(Bn)?zI:1)}function Re(Y){var ce=t.noDrag;return!Mi(Y,"."+Bg+", ."+Ba)&&(!ce||!Mi(Y,ce))}function Pe(Y){return typeof TouchEvent<"u"&&Y instanceof TouchEvent}function bt(){return v}function Nt(Y){T=Y}return{mount:P,disable:Nt,isDragging:bt}}var m1={Spacebar:" ",Right:Va,Left:$a,Up:Lg,Down:kg};function qc(r){return r=Dr(r)?r:r.key,m1[r]||r}var ud="keydown";function v1(r,e,t){var n=Oe(r),i=n.on,s=n.bind,a=n.unbind,u=r.root,l=e.Direction.resolve,c,f;function p(){g(),i(ct,S),i(ct,g),i(Nr,_)}function g(){var b=t.keyboard;b&&(c=b==="global"?window:u,s(c,ud,A))}function S(){a(c,ud)}function R(b){f=b}function _(){var b=f;f=!0,vg(function(){f=b})}function A(b){if(!f){var D=qc(b);D===l($a)?r.go("<"):D===l(Va)&&r.go(">")}}return{mount:p,destroy:S,disable:R}}var wi=xc+"-lazy",ea=wi+"-srcset",_1="["+wi+"], ["+ea+"]";function y1(r,e,t){var n=Oe(r),i=n.on,s=n.off,a=n.bind,u=n.emit,l=t.lazyLoad==="sequential",c=[ts,jn],f=[];function p(){t.lazyLoad&&(g(),i(He,g))}function g(){ur(f),S(),l?b():(s(c),i(c,R),R())}function S(){e.Slides.forEach(function(D){kc(D.slide,_1).forEach(function(N){var O=Pt(N,wi),L=Pt(N,ea);if(O!==N.src||L!==N.srcset){var x=t.classes.spinner,v=N.parentElement,m=Ji(v,"."+x)||bn("span",x,v);f.push([N,D,m]),N.src||ki(N,"none")}})})}function R(){f=f.filter(function(D){var N=t.perPage*((t.preloadPages||1)+1)-1;return D[1].isWithin(r.index,N)?_(D):!0}),f.length||s(c)}function _(D){var N=D[0];Ht(D[1].slide,ou),a(N,"load error",Ce(A,D)),he(N,"src",Pt(N,wi)),he(N,"srcset",Pt(N,ea)),Gt(N,wi),Gt(N,ea)}function A(D,N){var O=D[0],L=D[1];rr(L.slide,ou),N.type!=="error"&&(nn(D[2]),ki(O,""),u(Ng,O,L),u($i)),l&&b()}function b(){f.length&&_(f.shift())}return{mount:p,destroy:Ce(ur,f),check:R}}function E1(r,e,t){var n=Oe(r),i=n.on,s=n.emit,a=n.bind,u=e.Slides,l=e.Elements,c=e.Controller,f=c.hasFocus,p=c.getIndex,g=c.go,S=e.Direction.resolve,R=l.pagination,_=[],A,b;function D(){N(),i([ct,He,_a],D);var T=t.pagination;R&&ki(R,T?"":"none"),T&&(i([Nr,Fc,jn],E),O(),E(),s(DI,{list:A,items:_},m(r.index)))}function N(){A&&(nn(R?Lr(A.children):A),rr(A,b),ur(_),A=null),n.destroy()}function O(){var T=r.length,w=t.classes,P=t.i18n,I=t.perPage,j=f()?c.getEnd()+1:xi(T/I);A=R||bn("ul",w.pagination,l.track.parentElement),Ht(A,b=Ha+"--"+v()),he(A,nr,"tablist"),he(A,At,P.select),he(A,Bc,v()===Fa?"vertical":"");for(var X=0;X<j;X++){var ge=bn("li",null,A),Ee=bn("button",{class:w.page,type:"button"},ge),re=u.getIn(X).map(function(W){return W.slide.id}),ee=!f()&&I>1?P.pageX:P.slideX;a(Ee,"click",Ce(L,X)),t.paginationKeyboard&&a(Ee,"keydown",Ce(x,X)),he(ge,nr,"presentation"),he(Ee,nr,"tab"),he(Ee,rs,re.join(" ")),he(Ee,At,su(ee,X+1)),he(Ee,Nn,-1),_.push({li:ge,button:Ee,page:X})}}function L(T){g(">"+T,!0)}function x(T,w){var P=_.length,I=qc(w),j=v(),X=-1;I===S(Va,!1,j)?X=++T%P:I===S($a,!1,j)?X=(--T+P)%P:I==="Home"?X=0:I==="End"&&(X=P-1);var ge=_[X];ge&&(Ag(ge.button),g(">"+X),jt(w,!0))}function v(){return t.paginationDirection||t.direction}function m(T){return _[c.toPage(T)]}function E(){var T=m(p(!0)),w=m(p());if(T){var P=T.button;rr(P,sn),Gt(P,rd),he(P,Nn,-1)}if(w){var I=w.button;Ht(I,sn),he(I,rd,!0),he(I,Nn,"")}s(bI,{list:A,items:_},T,w)}return{items:_,mount:D,destroy:N,getAt:m,update:E}}var A1=[" ","Enter"];function I1(r,e,t){var n=t.isNavigation,i=t.slideFocus,s=[];function a(){r.splides.forEach(function(R){R.isParent||(c(r,R.splide),c(R.splide,r))}),n&&f()}function u(){s.forEach(function(R){R.destroy()}),ur(s)}function l(){u(),a()}function c(R,_){var A=Oe(R);A.on(Nr,function(b,D,N){_.go(_.is(Qn)?N:b)}),s.push(A)}function f(){var R=Oe(r),_=R.on;_(Rg,g),_(Mg,S),_([an,ct],p),s.push(R),R.emit(Pg,r.splides)}function p(){he(e.Elements.list,Bc,t.direction===Fa?"vertical":"")}function g(R){r.go(R.index)}function S(R,_){Oc(A1,qc(_))&&(g(R),jt(_))}return{setup:Ce(e.Media.set,{slideFocus:ji(i)?n:i},!0),mount:a,destroy:u,remount:l}}function T1(r,e,t){var n=Oe(r),i=n.bind,s=0;function a(){t.wheel&&i(e.Elements.track,"wheel",u,En)}function u(c){if(c.cancelable){var f=c.deltaY,p=f<0,g=nu(c),S=t.wheelMinThreshold||0,R=t.wheelSleep||0;ut(f)>S&&g-s>R&&(r.go(p?"<":">"),s=g),l(p)&&jt(c)}}function l(c){return!t.releaseWheel||r.state.is(Yn)||e.Controller.getAdjacent(c)!==-1}return{mount:a}}var S1=90;function w1(r,e,t){var n=Oe(r),i=n.on,s=e.Elements.track,a=t.live&&!t.isNavigation,u=bn("span",GI),l=ka(S1,Ce(f,!1));function c(){a&&(g(!e.Autoplay.isPaused()),he(s,sd,!0),u.textContent="…",i(Dg,Ce(g,!0)),i(bg,Ce(g,!1)),i([ts,jn],Ce(f,!0)))}function f(S){he(s,id,S),S?(Xi(s,u),l.start()):(nn(u),l.cancel())}function p(){Gt(s,[nd,sd,id]),nn(u)}function g(S){a&&he(s,nd,S?"off":"polite")}return{mount:c,disable:g,destroy:p}}var R1=Object.freeze({__proto__:null,Media:LI,Direction:kI,Elements:YI,Slides:QI,Layout:XI,Clones:e1,Move:t1,Controller:r1,Arrows:s1,Autoplay:o1,Cover:u1,Scroll:p1,Drag:g1,Keyboard:v1,LazyLoad:y1,Pagination:E1,Sync:I1,Wheel:T1,Live:w1}),C1={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},P1={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:WI,i18n:C1,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function D1(r,e,t){var n=e.Slides;function i(){Oe(r).on([an,He],s)}function s(){n.forEach(function(u){u.style("transform","translateX(-"+100*u.index+"%)")})}function a(u,l){n.style("transition","opacity "+t.speed+"ms "+t.easing),vg(l)}return{mount:i,start:a,cancel:ru}}function b1(r,e,t){var n=e.Move,i=e.Controller,s=e.Scroll,a=e.Elements.list,u=Ce(Ct,a,"transition"),l;function c(){Oe(r).bind(a,"transitionend",function(S){S.target===a&&l&&(p(),l())})}function f(S,R){var _=n.toPosition(S,!0),A=n.getPosition(),b=g(S);ut(_-A)>=1&&b>=1?t.useScroll?s.scroll(_,b,!1,R):(u("transform "+b+"ms "+t.easing),n.translate(_,!0),l=R):(n.jump(S),R())}function p(){u(""),s.cancel()}function g(S){var R=t.rewindSpeed;if(r.is(Bn)&&R){var _=i.getIndex(!0),A=i.getEnd();if(_===0&&S>=A||_>=A&&S===0)return R}return t.speed}return{mount:c,start:f,cancel:p}}var N1=function(){function r(t,n){this.event=Oe(),this.Components={},this.state=MI(Tn),this.splides=[],this._o={},this._E={};var i=Dr(t)?Tg(document,t):t;Si(i,i+" is invalid."),this.root=i,n=Ar({label:Pt(i,At)||"",labelledby:Pt(i,Uc)||""},P1,r.defaults,n||{});try{Ar(n,JSON.parse(Pt(i,xc)))}catch{Si(!1,"Invalid JSON")}this._o=Object.create(Ar({},n))}var e=r.prototype;return e.mount=function(n,i){var s=this,a=this.state,u=this.Components;Si(a.is([Tn,ga]),"Already mounted!"),a.set(Tn),this._C=u,this._T=i||this._T||(this.is(ns)?D1:b1),this._E=n||this._E;var l=Li({},R1,this._E,{Transition:this._T});return jr(l,function(c,f){var p=c(s,u,s._o);u[f]=p,p.setup&&p.setup()}),jr(u,function(c){c.mount&&c.mount()}),this.emit(an),Ht(this.root,qI),a.set(Un),this.emit(ed),this},e.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(Un)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},e.go=function(n){return this._C.Controller.go(n),this},e.on=function(n,i){return this.event.on(n,i),this},e.off=function(n){return this.event.off(n),this},e.emit=function(n){var i;return(i=this.event).emit.apply(i,[n].concat(Lr(arguments,1))),this},e.add=function(n,i){return this._C.Slides.add(n,i),this},e.remove=function(n){return this._C.Slides.remove(n),this},e.is=function(n){return this._o.type===n},e.refresh=function(){return this.emit(He),this},e.destroy=function(n){n===void 0&&(n=!0);var i=this.event,s=this.state;return s.is(Tn)?Oe(this).on(ed,this.destroy.bind(this,n)):(jr(this._C,function(a){a.destroy&&a.destroy(n)},!0),i.emit(Cg),i.destroy(),n&&ur(this.splides),s.set(ga)),this},gI(r,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),r}(),Zg=N1;Zg.defaults={};Zg.STATES=vI;/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.4.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function M1(r){r.length=0}function Kc(r,e,t){return Array.prototype.slice.call(r,e,t)}function Ga(r){return r.bind.apply(r,[null].concat(Kc(arguments,1)))}function Wc(r,e){return typeof e===r}var zg=Array.isArray;Ga(Wc,"function");Ga(Wc,"string");Ga(Wc,"undefined");function Yg(r){return zg(r)?r:[r]}function ld(r,e){Yg(r).forEach(e)}var O1=Object.keys;function L1(r,e,t){if(r){var n=O1(r);n=n;for(var i=0;i<n.length;i++){var s=n[i];if(s!=="__proto__"&&e(r[s],s)===!1)break}}return r}function k1(r){return Kc(arguments,1).forEach(function(e){L1(e,function(t,n){r[n]=e[n]})}),r}var jg="splide";function x1(){var r=[];function e(a,u,l,c){i(a,u,function(f,p,g){var S="addEventListener"in f,R=S?f.removeEventListener.bind(f,p,l,c):f.removeListener.bind(f,l);S?f.addEventListener(p,l,c):f.addListener(l),r.push([f,p,g,l,R])})}function t(a,u,l){i(a,u,function(c,f,p){r=r.filter(function(g){return g[0]===c&&g[1]===f&&g[2]===p&&(!l||g[3]===l)?(g[4](),!1):!0})})}function n(a,u,l){var c,f=!0;return typeof CustomEvent=="function"?c=new CustomEvent(u,{bubbles:f,detail:l}):(c=document.createEvent("CustomEvent"),c.initCustomEvent(u,f,!1,l)),a.dispatchEvent(c),c}function i(a,u,l){ld(a,function(c){c&&ld(u,function(f){f.split(" ").forEach(function(p){var g=p.split(".");l(c,g[0],g[1])})})})}function s(){r.forEach(function(a){a[4]()}),M1(r)}return{bind:e,unbind:t,dispatch:n,destroy:s}}var $1="visible",V1="hidden",So="refresh",F1="updated",U1="destroy";function Qg(r){var e=r?r.event.bus:document.createDocumentFragment(),t=x1();function n(s,a){t.bind(e,Yg(s).join(" "),function(u){a.apply(a,zg(u.detail)?u.detail:[])})}function i(s){t.dispatch(e,s,Kc(arguments,1))}return r&&r.event.on(U1,t.destroy),k1(t,{bus:e,on:n,off:Ga(t.unbind,e),emit:i})}var B1=jg,qa=jg+"__slide",H1=qa+"__container";function cd(r){r.length=0}function Ka(r,e,t){return Array.prototype.slice.call(r,e,t)}function Zc(r){return r.bind(null,...Ka(arguments,1))}function Wa(r,e){return typeof e===r}function G1(r){return!jc(r)&&Wa("object",r)}const zc=Array.isArray;Zc(Wa,"function");const Yc=Zc(Wa,"string"),q1=Zc(Wa,"undefined");function jc(r){return r===null}function K1(r){return r instanceof HTMLElement}function Qc(r){return zc(r)?r:[r]}function Hn(r,e){Qc(r).forEach(e)}function hd(r,e){return r.push(...Qc(e)),r}function Xg(r,e,t){r&&Hn(e,n=>{n&&r.classList[t?"add":"remove"](n)})}function uu(r,e){Xg(r,Yc(e)?e.split(" "):e,!0)}function ta(r,e){Hn(e,r.appendChild.bind(r))}function W1(r,e){return K1(r)&&(r.msMatchesSelector||r.matches).call(r,e)}function Z1(r,e){const t=r?Ka(r.children):[];return e?t.filter(n=>W1(n,e)):t}function fd(r,e){return e?Z1(r,e)[0]:r.firstElementChild}const Jg=Object.keys;function em(r,e,t){if(r){let n=Jg(r);n=n;for(let i=0;i<n.length;i++){const s=n[i];if(s!=="__proto__"&&e(r[s],s)===!1)break}}return r}function z1(r){return Ka(arguments,1).forEach(e=>{em(e,(t,n)=>{r[n]=e[n]})}),r}function Y1(r,e){Qc(Jg(r)).forEach(t=>{delete r[t]})}function lu(r,e){Hn(r,t=>{Hn(e,n=>{t&&t.removeAttribute(n)})})}function Xc(r,e,t){G1(e)?em(e,(n,i)=>{Xc(r,i,n)}):Hn(r,n=>{jc(t)||t===""?lu(n,e):n.setAttribute(e,String(t))})}function dd(r,e,t){const n=document.createElement(r);return e&&(Yc(e)?uu(n,e):Xc(n,e)),t&&ta(t,n),n}function Yt(r,e,t){if(q1(t))return getComputedStyle(r)[e];jc(t)||(r.style[e]=`${t}`)}function j1(r,e){return r&&r.classList.contains(e)}function Q1(r){Hn(r,e=>{e&&e.parentNode&&e.parentNode.removeChild(e)})}function pd(r,e){return e?Ka(r.querySelectorAll(e)):[]}function gd(r,e){Xg(r,e,!1)}function Fs(r){return Yc(r)?r:r?`${r}px`:""}const X1="splide";function J1(r,e){if(!r)throw new Error(`[${X1}] ${e}`)}const{min:eT,max:bw,floor:Nw,ceil:Mw,abs:Ow}=Math;function tT(r){return r<10?`0${r}`:`${r}`}const tm=`${qa}__row`,cu=`${qa}--col`,rT={rows:1,cols:1,dimensions:[],gap:{}};function nT(r){function e(){const{rows:i,cols:s,dimensions:a}=r;return zc(a)&&a.length?a:[[i,s]]}function t(i){const s=e();return s[eT(i,s.length-1)]}function n(i){const s=e();let a,u,l=0;for(let c=0;c<s.length;c++){const f=s[c];if(a=f[0]||1,u=f[1]||1,l+=a*u,i<l)break}return J1(a&&u,"Invalid dimension"),[a,u]}return{get:t,getAt:n}}function iT(r,e,t){const{on:n,destroy:i}=Qg(r),{Components:s,options:a}=r,{resolve:u}=s.Direction,{forEach:l}=s.Slides;function c(){p(),a.slideFocus&&(n($1,D),n(V1,N))}function f(){l(O=>{const{slide:L}=O;b(L,!1),_(L).forEach(x=>{lu(x,"style")}),A(L).forEach(x=>{R(x,!0),lu(x,"style")})}),i()}function p(){l(O=>{const{slide:L}=O,[x,v]=t.get(O.isClone?O.slideIndex:O.index);g(x,L),S(v,L),A(O.slide).forEach((m,E)=>{m.id=`${O.slide.id}-col${tT(E+1)}`,r.options.cover&&R(m)})})}function g(O,L){const{row:x}=e.gap,v=`calc(${100/O}%${x?` - ${Fs(x)} * ${(O-1)/O}`:""})`;_(L).forEach((m,E,T)=>{Yt(m,"height",v),Yt(m,"display","flex"),Yt(m,"margin",`0 0 ${Fs(x)} 0`),Yt(m,"padding",0),E===T.length-1&&Yt(m,"marginBottom",0)})}function S(O,L){const{col:x}=e.gap,v=`calc(${100/O}%${x?` - ${Fs(x)} * ${(O-1)/O}`:""})`;A(L).forEach((m,E,T)=>{Yt(m,"width",v),E!==T.length-1&&Yt(m,u("marginRight"),Fs(x))})}function R(O,L){const x=fd(O,`.${H1}`),v=fd(x||O,"img");v&&v.src&&(Yt(x||O,"background",L?"":`center/cover no-repeat url("${v.src}")`),Yt(v,"display",L?"":"none"))}function _(O){return pd(O,`.${tm}`)}function A(O){return pd(O,`.${cu}`)}function b(O,L){A(O).forEach(x=>{Xc(x,"tabindex",L?0:null)})}function D(O){b(O.slide,!0)}function N(O){b(O.slide,!1)}return{mount:c,destroy:f}}function Lw(r,e,t){const{on:n,off:i}=Qg(r),{Elements:s}=e,a={},u=nT(a),l=iT(r,a,u),c=`${B1}--grid`,f=[];function p(){g(),n(F1,g)}function g(){Y1(a),z1(a,rT,t.grid||{}),N()?(S(),hd(f,s.slides),uu(r.root,c),ta(s.list,A()),i(So),n(So,_),R()):O()&&(S(),R())}function S(){if(O()){const{slides:L}=s;l.destroy(),f.forEach(x=>{gd(x,cu),ta(s.list,x)}),Q1(L),gd(r.root,c),cd(L),hd(L,f),cd(f),i(So)}}function R(){r.refresh()}function _(){O()&&l.mount()}function A(){const L=[];let x=0,v=0,m,E;return f.forEach((T,w)=>{const[P,I]=u.getAt(w);v||(x||(m=dd(T.tagName,qa),L.push(m)),E=b(P,T,m)),D(I,T,E),++v>=I&&(v=0,x=++x>=P?0:x)}),L}function b(L,x,v){const m=x.tagName.toLowerCase()==="li"?"ul":"div";return dd(m,tm,v)}function D(L,x,v){return uu(x,cu),ta(v,x),x}function N(){if(t.grid){const{rows:L,cols:x,dimensions:v}=a;return L>1||x>1||zc(v)&&v.length>0}return!1}function O(){return j1(r.root,c)}return{mount:p,destroy:S}}var hu={exports:{}},fu={exports:{}},du={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function t(i){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},t(i)}function n(i){var s=typeof i=="string"||i instanceof String;if(!s){var a=t(i);throw i===null?a="null":a==="object"&&(a=i.constructor.name),new TypeError("Expected a string but received a ".concat(a))}}r.exports=e.default,r.exports.default=e.default})(du,du.exports);var G=du.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s),s=Date.parse(s),isNaN(s)?null:new Date(s)}r.exports=e.default,r.exports.default=e.default})(fu,fu.exports);var Jc=fu.exports,pu={exports:{}},Xn={},be={};Object.defineProperty(be,"__esModule",{value:!0});be.farsiLocales=be.englishLocales=be.dotDecimal=be.decimal=be.commaDecimal=be.bengaliLocales=be.arabicLocales=be.alphanumeric=be.alpha=void 0;var ht=be.alpha={"en-US":/^[A-Z]+$/i,"az-AZ":/^[A-VXYZÇƏĞİıÖŞÜ]+$/i,"bg-BG":/^[А-Я]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"el-GR":/^[Α-ώ]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fa-IR":/^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,"fi-FI":/^[A-ZÅÄÖ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[A-ZÀÉÈÌÎÓÒÙ]+$/i,"ja-JP":/^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,"nb-NO":/^[A-ZÆØÅ]+$/i,"nl-NL":/^[A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[A-ZÆØÅ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"kk-KZ":/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,"sl-SI":/^[A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[A-ZÅÄÖ]+$/i,"th-TH":/^[ก-๐\s]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЩЬЮЯЄIЇҐі]+$/i,"vi-VN":/^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,"ko-KR":/^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,"ku-IQ":/^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[א-ת]+$/,fa:/^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,bn:/^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,eo:/^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,"hi-IN":/^[\u0900-\u0961]+[\u0972-\u097F]*$/i,"si-LK":/^[\u0D80-\u0DFF]+$/},ft=be.alphanumeric={"en-US":/^[0-9A-Z]+$/i,"az-AZ":/^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,"bg-BG":/^[0-9А-Я]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"el-GR":/^[0-9Α-ω]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fi-FI":/^[0-9A-ZÅÄÖ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,"ja-JP":/^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nb-NO":/^[0-9A-ZÆØÅ]+$/i,"nl-NL":/^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[0-9A-ZÆØÅ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"kk-KZ":/^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,"sl-SI":/^[0-9A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[0-9A-ZÅÄÖ]+$/i,"th-TH":/^[ก-๙\s]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,"ko-KR":/^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,"ku-IQ":/^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,"vi-VN":/^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[0-9א-ת]+$/,fa:/^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,bn:/^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,eo:/^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,"hi-IN":/^[\u0900-\u0963]+[\u0966-\u097F]*$/i,"si-LK":/^[0-9\u0D80-\u0DFF]+$/},at=be.decimal={"en-US":".",ar:"٫"},md=be.englishLocales=["AU","GB","HK","IN","NZ","ZA","ZM"];for(var Us,wo=0;wo<md.length;wo++)Us="en-".concat(md[wo]),ht[Us]=ht["en-US"],ft[Us]=ft["en-US"],at[Us]=at["en-US"];var vd=be.arabicLocales=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"];for(var Bs,Ro=0;Ro<vd.length;Ro++)Bs="ar-".concat(vd[Ro]),ht[Bs]=ht.ar,ft[Bs]=ft.ar,at[Bs]=at.ar;var _d=be.farsiLocales=["IR","AF"];for(var Co,Po=0;Po<_d.length;Po++)Co="fa-".concat(_d[Po]),ft[Co]=ft.fa,at[Co]=at.ar;var yd=be.bengaliLocales=["BD","IN"];for(var Hs,Do=0;Do<yd.length;Do++)Hs="bn-".concat(yd[Do]),ht[Hs]=ht.bn,ft[Hs]=ft.bn,at[Hs]=at["en-US"];var Ed=be.dotDecimal=["ar-EG","ar-LB","ar-LY"],Ad=be.commaDecimal=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","en-ZM","eo","es-ES","fr-CA","fr-FR","id-ID","it-IT","ku-IQ","hi-IN","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","kk-KZ","si-LK","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA","vi-VN"];for(var bo=0;bo<Ed.length;bo++)at[Ed[bo]]=at["en-US"];for(var No=0;No<Ad.length;No++)at[Ad[No]]=",";ht["fr-CA"]=ht["fr-FR"];ft["fr-CA"]=ft["fr-FR"];ht["pt-BR"]=ht["pt-PT"];ft["pt-BR"]=ft["pt-PT"];at["pt-BR"]=at["pt-PT"];ht["pl-Pl"]=ht["pl-PL"];ft["pl-Pl"]=ft["pl-PL"];at["pl-Pl"]=at["pl-PL"];ht["fa-AF"]=ht.fa;Object.defineProperty(Xn,"__esModule",{value:!0});Xn.default=oT;Xn.locales=void 0;var sT=aT(G),rm=be;function aT(r){return r&&r.__esModule?r:{default:r}}function oT(r,e){(0,sT.default)(r),e=e||{};var t=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale?rm.decimal[e.locale]:".","[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));if(r===""||r==="."||r===","||r==="-"||r==="+")return!1;var n=parseFloat(r.replace(",","."));return t.test(r)&&(!e.hasOwnProperty("min")||n>=e.min)&&(!e.hasOwnProperty("max")||n<=e.max)&&(!e.hasOwnProperty("lt")||n<e.lt)&&(!e.hasOwnProperty("gt")||n>e.gt)}Xn.locales=Object.keys(rm.decimal);(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(Xn);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s)?parseFloat(s):NaN}r.exports=e.default,r.exports.default=e.default})(pu,pu.exports);var nm=pu.exports,gu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){return(0,t.default)(s),parseInt(s,a||10)}r.exports=e.default,r.exports.default=e.default})(gu,gu.exports);var uT=gu.exports,mu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){return(0,t.default)(s),a?s==="1"||/^true$/i.test(s):s!=="0"&&!/^false$/i.test(s)&&s!==""}r.exports=e.default,r.exports.default=e.default})(mu,mu.exports);var lT=mu.exports,vu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){return(0,t.default)(s),s===a}r.exports=e.default,r.exports.default=e.default})(vu,vu.exports);var cT=vu.exports,_u={exports:{}},yu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function t(i){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},t(i)}function n(i){return t(i)==="object"&&i!==null?typeof i.toString=="function"?i=i.toString():i="[object Object]":(i===null||typeof i>"u"||isNaN(i)&&!i.length)&&(i=""),String(i)}r.exports=e.default,r.exports.default=e.default})(yu,yu.exports);var im=yu.exports,Eu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;for(var s in i)typeof n[s]>"u"&&(n[s]=i[s]);return n}r.exports=e.default,r.exports.default=e.default})(Eu,Eu.exports);var ot=Eu.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=s(G),n=s(im),i=s(ot);function s(l){return l&&l.__esModule?l:{default:l}}var a={ignoreCase:!1,minOccurrences:1};function u(l,c,f){return(0,t.default)(l),f=(0,i.default)(f,a),f.ignoreCase?l.toLowerCase().split((0,n.default)(c).toLowerCase()).length>f.minOccurrences:l.split((0,n.default)(c)).length>f.minOccurrences}r.exports=e.default,r.exports.default=e.default})(_u,_u.exports);var hT=_u.exports,Au={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a,u){return(0,t.default)(s),Object.prototype.toString.call(a)!=="[object RegExp]"&&(a=new RegExp(a,u)),!!s.match(a)}r.exports=e.default,r.exports.default=e.default})(Au,Au.exports);var fT=Au.exports,Iu={exports:{}},Tu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}function i(a){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i(a)}function s(a,u){(0,t.default)(a);var l,c;i(u)==="object"?(l=u.min||0,c=u.max):(l=arguments[1],c=arguments[2]);var f=encodeURI(a).split(/%..|./).length-1;return f>=l&&(typeof c>"u"||f<=c)}r.exports=e.default,r.exports.default=e.default})(Tu,Tu.exports);var sm=Tu.exports,Su={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=i(ot);function i(u){return u&&u.__esModule?u:{default:u}}var s={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function a(u,l){(0,t.default)(u),l=(0,n.default)(l,s),l.allow_trailing_dot&&u[u.length-1]==="."&&(u=u.substring(0,u.length-1)),l.allow_wildcard===!0&&u.indexOf("*.")===0&&(u=u.substring(2));var c=u.split("."),f=c[c.length-1];return l.require_tld&&(c.length<2||!l.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(f)||/\s/.test(f))||!l.allow_numeric_tld&&/^\d+$/.test(f)?!1:c.every(function(p){return!(p.length>63&&!l.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(p)||/[\uff01-\uff5e]/.test(p)||/^-|-$/.test(p)||!l.allow_underscores&&/_/.test(p))})}r.exports=e.default,r.exports.default=e.default})(Su,Su.exports);var eh=Su.exports,wu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var t=n(G);function n(f){return f&&f.__esModule?f:{default:f}}var i="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",s="(".concat(i,"[.]){3}").concat(i),a=new RegExp("^".concat(s,"$")),u="(?:[0-9a-fA-F]{1,4})",l=new RegExp("^("+"(?:".concat(u,":){7}(?:").concat(u,"|:)|")+"(?:".concat(u,":){6}(?:").concat(s,"|:").concat(u,"|:)|")+"(?:".concat(u,":){5}(?::").concat(s,"|(:").concat(u,"){1,2}|:)|")+"(?:".concat(u,":){4}(?:(:").concat(u,"){0,1}:").concat(s,"|(:").concat(u,"){1,3}|:)|")+"(?:".concat(u,":){3}(?:(:").concat(u,"){0,2}:").concat(s,"|(:").concat(u,"){1,4}|:)|")+"(?:".concat(u,":){2}(?:(:").concat(u,"){0,3}:").concat(s,"|(:").concat(u,"){1,5}|:)|")+"(?:".concat(u,":){1}(?:(:").concat(u,"){0,4}:").concat(s,"|(:").concat(u,"){1,6}|:)|")+"(?::((?::".concat(u,"){0,5}:").concat(s,"|(?::").concat(u,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function c(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,t.default)(f),p=String(p),p?p==="4"?a.test(f):p==="6"?l.test(f):!1:c(f,4)||c(f,6)}r.exports=e.default,r.exports.default=e.default})(wu,wu.exports);var Za=wu.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var t=u(G),n=u(sm),i=u(eh),s=u(Za),a=u(ot);function u(D){return D&&D.__esModule?D:{default:D}}var l={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},c=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,p=/^[a-z\d]+$/,g=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,S=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,R=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,_=254;function A(D){var N=D.replace(/^"(.+)"$/,"$1");if(!N.trim())return!1;var O=/[\.";<>]/.test(N);if(O){if(N===D)return!1;var L=N.split('"').length===N.split('\\"').length;if(!L)return!1}return!0}function b(D,N){if((0,t.default)(D),N=(0,a.default)(N,l),N.require_display_name||N.allow_display_name){var O=D.match(c);if(O){var L=O[1];if(D=D.replace(L,"").replace(/(^<|>$)/g,""),L.endsWith(" ")&&(L=L.slice(0,-1)),!A(L))return!1}else if(N.require_display_name)return!1}if(!N.ignore_max_length&&D.length>_)return!1;var x=D.split("@"),v=x.pop(),m=v.toLowerCase();if(N.host_blacklist.includes(m)||N.host_whitelist.length>0&&!N.host_whitelist.includes(m))return!1;var E=x.join("@");if(N.domain_specific_validation&&(m==="gmail.com"||m==="googlemail.com")){E=E.toLowerCase();var T=E.split("+")[0];if(!(0,n.default)(T.replace(/\./g,""),{min:6,max:30}))return!1;for(var w=T.split("."),P=0;P<w.length;P++)if(!p.test(w[P]))return!1}if(N.ignore_max_length===!1&&(!(0,n.default)(E,{max:64})||!(0,n.default)(v,{max:254})))return!1;if(!(0,i.default)(v,{require_tld:N.require_tld,ignore_max_length:N.ignore_max_length,allow_underscores:N.allow_underscores})){if(!N.allow_ip_domain)return!1;if(!(0,s.default)(v)){if(!v.startsWith("[")||!v.endsWith("]"))return!1;var I=v.slice(1,-1);if(I.length===0||!(0,s.default)(I))return!1}}if(E[0]==='"')return E=E.slice(1,E.length-1),N.allow_utf8_local_part?R.test(E):g.test(E);for(var j=N.allow_utf8_local_part?S:f,X=E.split("."),ge=0;ge<X.length;ge++)if(!j.test(X[ge]))return!1;return!(N.blacklisted_chars&&E.search(new RegExp("[".concat(N.blacklisted_chars,"]+"),"g"))!==-1)}r.exports=e.default,r.exports.default=e.default})(Iu,Iu.exports);var am=Iu.exports,Ru={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var t=a(G),n=a(eh),i=a(Za),s=a(ot);function a(D){return D&&D.__esModule?D:{default:D}}function u(D,N){return g(D)||p(D,N)||c(D,N)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c(D,N){if(D){if(typeof D=="string")return f(D,N);var O=Object.prototype.toString.call(D).slice(8,-1);if(O==="Object"&&D.constructor&&(O=D.constructor.name),O==="Map"||O==="Set")return Array.from(D);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return f(D,N)}}function f(D,N){(N==null||N>D.length)&&(N=D.length);for(var O=0,L=new Array(N);O<N;O++)L[O]=D[O];return L}function p(D,N){var O=D==null?null:typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"];if(O!=null){var L,x,v,m,E=[],T=!0,w=!1;try{if(v=(O=O.call(D)).next,N!==0)for(;!(T=(L=v.call(O)).done)&&(E.push(L.value),E.length!==N);T=!0);}catch(P){w=!0,x=P}finally{try{if(!T&&O.return!=null&&(m=O.return(),Object(m)!==m))return}finally{if(w)throw x}}return E}}function g(D){if(Array.isArray(D))return D}var S={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},R=/^\[([^\]]+)\](?::([0-9]+))?$/;function _(D){return Object.prototype.toString.call(D)==="[object RegExp]"}function A(D,N){for(var O=0;O<N.length;O++){var L=N[O];if(D===L||_(L)&&L.test(D))return!0}return!1}function b(D,N){if((0,t.default)(D),!D||/[\s<>]/.test(D)||D.indexOf("mailto:")===0||(N=(0,s.default)(N,S),N.validate_length&&D.length>=2083)||!N.allow_fragments&&D.includes("#")||!N.allow_query_components&&(D.includes("?")||D.includes("&")))return!1;var O,L,x,v,m,E,T,w;if(T=D.split("#"),D=T.shift(),T=D.split("?"),D=T.shift(),T=D.split("://"),T.length>1){if(O=T.shift().toLowerCase(),N.require_valid_protocol&&N.protocols.indexOf(O)===-1)return!1}else{if(N.require_protocol)return!1;if(D.slice(0,2)==="//"){if(!N.allow_protocol_relative_urls)return!1;T[0]=D.slice(2)}}if(D=T.join("://"),D==="")return!1;if(T=D.split("/"),D=T.shift(),D===""&&!N.require_host)return!0;if(T=D.split("@"),T.length>1){if(N.disallow_auth||T[0]===""||(L=T.shift(),L.indexOf(":")>=0&&L.split(":").length>2))return!1;var P=L.split(":"),I=u(P,2),j=I[0],X=I[1];if(j===""&&X==="")return!1}v=T.join("@"),E=null,w=null;var ge=v.match(R);if(ge?(x="",w=ge[1],E=ge[2]||null):(T=v.split(":"),x=T.shift(),T.length&&(E=T.join(":"))),E!==null&&E.length>0){if(m=parseInt(E,10),!/^[0-9]+$/.test(E)||m<=0||m>65535)return!1}else if(N.require_port)return!1;return N.host_whitelist?A(x,N.host_whitelist):x===""&&!N.require_host?!0:!(!(0,i.default)(x)&&!(0,n.default)(x,N)&&(!w||!(0,i.default)(w,6))||(x=x||w,N.host_blacklist&&A(x,N.host_blacklist)))}r.exports=e.default,r.exports.default=e.default})(Ru,Ru.exports);var dT=Ru.exports,Cu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var t=n(G);function n(p){return p&&p.__esModule?p:{default:p}}var i=/^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/,s=/^([0-9a-fA-F]){12}$/,a=/^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/,u=/^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/,l=/^([0-9a-fA-F]){16}$/,c=/^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;function f(p,g){return(0,t.default)(p),g!=null&&g.eui&&(g.eui=String(g.eui)),g!=null&&g.no_colons||g!=null&&g.no_separators?g.eui==="48"?s.test(p):g.eui==="64"?l.test(p):s.test(p)||l.test(p):(g==null?void 0:g.eui)==="48"?i.test(p)||a.test(p):(g==null?void 0:g.eui)==="64"?u.test(p)||c.test(p):f(p,{eui:"48"})||f(p,{eui:"64"})}r.exports=e.default,r.exports.default=e.default})(Cu,Cu.exports);var pT=Cu.exports,Pu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var t=i(G),n=i(Za);function i(c){return c&&c.__esModule?c:{default:c}}var s=/^\d{1,3}$/,a=32,u=128;function l(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";(0,t.default)(c);var p=c.split("/");if(p.length!==2||!s.test(p[1])||p[1].length>1&&p[1].startsWith("0"))return!1;var g=(0,n.default)(p[0],f);if(!g)return!1;var S=null;switch(String(f)){case"4":S=a;break;case"6":S=u;break;default:S=(0,n.default)(p[0],"6")?u:a}return p[1]<=S&&p[1]>=0}r.exports=e.default,r.exports.default=e.default})(Pu,Pu.exports);var gT=Pu.exports,Du={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=R;var t=n(ot);function n(_){return _&&_.__esModule?_:{default:_}}function i(_,A){return u(_)||a(_,A)||c(_,A)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(_,A){var b=_==null?null:typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(b!=null){var D,N,O,L,x=[],v=!0,m=!1;try{if(O=(b=b.call(_)).next,A!==0)for(;!(v=(D=O.call(b)).done)&&(x.push(D.value),x.length!==A);v=!0);}catch(E){m=!0,N=E}finally{try{if(!v&&b.return!=null&&(L=b.return(),Object(L)!==L))return}finally{if(m)throw N}}return x}}function u(_){if(Array.isArray(_))return _}function l(_,A){var b=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(!b){if(Array.isArray(_)||(b=c(_))||A){b&&(_=b);var D=0,N=function(){};return{s:N,n:function(){return D>=_.length?{done:!0}:{done:!1,value:_[D++]}},e:function(m){throw m},f:N}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,L=!1,x;return{s:function(){b=b.call(_)},n:function(){var m=b.next();return O=m.done,m},e:function(m){L=!0,x=m},f:function(){try{!O&&b.return!=null&&b.return()}finally{if(L)throw x}}}}function c(_,A){if(_){if(typeof _=="string")return f(_,A);var b=Object.prototype.toString.call(_).slice(8,-1);if(b==="Object"&&_.constructor&&(b=_.constructor.name),b==="Map"||b==="Set")return Array.from(_);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return f(_,A)}}function f(_,A){(A==null||A>_.length)&&(A=_.length);for(var b=0,D=new Array(A);b<A;b++)D[b]=_[b];return D}var p={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1};function g(_){return/(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(_)}function S(_,A){for(var b=[],D=Math.min(_.length,A.length),N=0;N<D;N++)b.push([_[N],A[N]]);return b}function R(_,A){if(typeof A=="string"?A=(0,t.default)({format:A},p):A=(0,t.default)(A,p),typeof _=="string"&&g(A.format)){var b=A.delimiters.find(function(X){return A.format.indexOf(X)!==-1}),D=A.strictMode?b:A.delimiters.find(function(X){return _.indexOf(X)!==-1}),N=S(_.split(D),A.format.toLowerCase().split(b)),O={},L=l(N),x;try{for(L.s();!(x=L.n()).done;){var v=i(x.value,2),m=v[0],E=v[1];if(m.length!==E.length)return!1;O[E.charAt(0)]=m}}catch(X){L.e(X)}finally{L.f()}var T=O.y;if(T.startsWith("-"))return!1;if(O.y.length===2){var w=parseInt(O.y,10);if(isNaN(w))return!1;var P=new Date().getFullYear()%100;w<P?T="20".concat(O.y):T="19".concat(O.y)}var I=O.m;O.m.length===1&&(I="0".concat(O.m));var j=O.d;return O.d.length===1&&(j="0".concat(O.d)),new Date("".concat(T,"-").concat(I,"-").concat(j,"T00:00:00.000Z")).getUTCDate()===+O.d}return A.strictMode?!1:Object.prototype.toString.call(_)==="[object Date]"&&isFinite(_)}r.exports=e.default,r.exports.default=e.default})(Du,Du.exports);var om=Du.exports,bu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=n(ot);function n(u){return u&&u.__esModule?u:{default:u}}var i={hourFormat:"hour24",mode:"default"},s={hour24:{default:/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,withSeconds:/^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/},hour12:{default:/^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,withSeconds:/^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/}};function a(u,l){return l=(0,t.default)(l,i),typeof u!="string"?!1:s[l.hourFormat][l.mode].test(u)}r.exports=e.default,r.exports.default=e.default})(bu,bu.exports);var mT=bu.exports,Nu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=n(G);function n(l){return l&&l.__esModule?l:{default:l}}var i={loose:!1},s=["true","false","1","0"],a=[].concat(s,["yes","no"]);function u(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i;return(0,t.default)(l),c.loose?a.includes(l.toLowerCase()):s.includes(l)}r.exports=e.default,r.exports.default=e.default})(Nu,Nu.exports);var vT=Nu.exports,Mu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=D;var t=n(G);function n(N){return N&&N.__esModule?N:{default:N}}var i="([A-Za-z]{3}(-[A-Za-z]{3}){0,2})",s="(([a-zA-Z]{2,3}(-".concat(i,")?)|([a-zA-Z]{5,8}))"),a="([A-Za-z]{4})",u="([A-Za-z]{2}|\\d{3})",l="([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))",c="(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])",f="(".concat(c,"(-[A-Za-z0-9]{2,8})+)"),p="(x(-[A-Za-z0-9]{1,8})+)",g="((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))",S="((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))",R="(".concat(g,"|").concat(S,")"),_="(-|_)",A="".concat(s,"(").concat(_).concat(a,")?(").concat(_).concat(u,")?(").concat(_).concat(l,")*(").concat(_).concat(f,")*(").concat(_).concat(p,")?"),b=new RegExp("(^".concat(p,"$)|(^").concat(R,"$)|(^").concat(A,"$)"));function D(N){return(0,t.default)(N),b.test(N)}r.exports=e.default,r.exports.default=e.default})(Mu,Mu.exports);var _T=Mu.exports,Ou={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;function s(a){if((0,t.default)(a),!i.test(a))return!1;for(var u=0,l=0;l<a.length;l++)l%3===0?u+=a[l]*3:l%3===1?u+=a[l]*7:u+=a[l]*1;return u%10===0}r.exports=e.default,r.exports.default=e.default})(Ou,Ou.exports);var yT=Ou.exports,is={};Object.defineProperty(is,"__esModule",{value:!0});is.default=IT;is.locales=void 0;var ET=AT(G),Lu=be;function AT(r){return r&&r.__esModule?r:{default:r}}function IT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en-US",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,ET.default)(r);var n=r,i=t.ignore;if(i)if(i instanceof RegExp)n=n.replace(i,"");else if(typeof i=="string")n=n.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g,"\\$&"),"]"),"g"),"");else throw new Error("ignore should be instance of a String or RegExp");if(e in Lu.alpha)return Lu.alpha[e].test(n);throw new Error("Invalid locale '".concat(e,"'"))}is.locales=Object.keys(Lu.alpha);var ss={};Object.defineProperty(ss,"__esModule",{value:!0});ss.default=wT;ss.locales=void 0;var TT=ST(G),ku=be;function ST(r){return r&&r.__esModule?r:{default:r}}function wT(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en-US",t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,TT.default)(r);var n=r,i=t.ignore;if(i)if(i instanceof RegExp)n=n.replace(i,"");else if(typeof i=="string")n=n.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g,"\\$&"),"]"),"g"),"");else throw new Error("ignore should be instance of a String or RegExp");if(e in ku.alphanumeric)return ku.alphanumeric[e].test(n);throw new Error("Invalid locale '".concat(e,"'"))}ss.locales=Object.keys(ku.alphanumeric);var xu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=be;function i(u){return u&&u.__esModule?u:{default:u}}var s=/^[0-9]+$/;function a(u,l){return(0,t.default)(u),l&&l.no_symbols?s.test(u):new RegExp("^[+-]?([0-9]*[".concat((l||{}).locale?n.decimal[l.locale]:".","])?[0-9]+$")).test(u)}r.exports=e.default,r.exports.default=e.default})(xu,xu.exports);var RT=xu.exports,$u={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i={AM:/^[A-Z]{2}\d{7}$/,AR:/^[A-Z]{3}\d{6}$/,AT:/^[A-Z]\d{7}$/,AU:/^[A-Z]\d{7}$/,AZ:/^[A-Z]{1}\d{8}$/,BE:/^[A-Z]{2}\d{6}$/,BG:/^\d{9}$/,BR:/^[A-Z]{2}\d{6}$/,BY:/^[A-Z]{2}\d{7}$/,CA:/^[A-Z]{2}\d{6}$/,CH:/^[A-Z]\d{7}$/,CN:/^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,CY:/^[A-Z](\d{6}|\d{8})$/,CZ:/^\d{8}$/,DE:/^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,DK:/^\d{9}$/,DZ:/^\d{9}$/,EE:/^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,ES:/^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,FI:/^[A-Z]{2}\d{7}$/,FR:/^\d{2}[A-Z]{2}\d{5}$/,GB:/^\d{9}$/,GR:/^[A-Z]{2}\d{7}$/,HR:/^\d{9}$/,HU:/^[A-Z]{2}(\d{6}|\d{7})$/,IE:/^[A-Z0-9]{2}\d{7}$/,IN:/^[A-Z]{1}-?\d{7}$/,ID:/^[A-C]\d{7}$/,IR:/^[A-Z]\d{8}$/,IS:/^(A)\d{7}$/,IT:/^[A-Z0-9]{2}\d{7}$/,JM:/^[Aa]\d{7}$/,JP:/^[A-Z]{2}\d{7}$/,KR:/^[MS]\d{8}$/,KZ:/^[a-zA-Z]\d{7}$/,LI:/^[a-zA-Z]\d{5}$/,LT:/^[A-Z0-9]{8}$/,LU:/^[A-Z0-9]{8}$/,LV:/^[A-Z0-9]{2}\d{7}$/,LY:/^[A-Z0-9]{8}$/,MT:/^\d{7}$/,MZ:/^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,MY:/^[AHK]\d{8}$/,MX:/^\d{10,11}$/,NL:/^[A-Z]{2}[A-Z0-9]{6}\d$/,NZ:/^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,PH:/^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,PK:/^[A-Z]{2}\d{7}$/,PL:/^[A-Z]{2}\d{7}$/,PT:/^[A-Z]\d{6}$/,RO:/^\d{8,9}$/,RU:/^\d{9}$/,SE:/^\d{8}$/,SL:/^(P)[A-Z]\d{7}$/,SK:/^[0-9A-Z]\d{7}$/,TH:/^[A-Z]{1,2}\d{6,7}$/,TR:/^[A-Z]\d{8}$/,UA:/^[A-Z]{2}\d{6}$/,US:/^\d{9}$/,ZA:/^[TAMD]\d{8}$/};function s(a,u){(0,t.default)(a);var l=a.replace(/\s/g,"").toUpperCase();return u.toUpperCase()in i&&i[u].test(l)}r.exports=e.default,r.exports.default=e.default})($u,$u.exports);var CT=$u.exports,Vu={exports:{}},Fu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=n(G);function n(u){return u&&u.__esModule?u:{default:u}}var i=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,s=/^[-+]?[0-9]+$/;function a(u,l){(0,t.default)(u),l=l||{};var c=l.allow_leading_zeroes===!1?i:s,f=!l.hasOwnProperty("min")||u>=l.min,p=!l.hasOwnProperty("max")||u<=l.max,g=!l.hasOwnProperty("lt")||u<l.lt,S=!l.hasOwnProperty("gt")||u>l.gt;return c.test(u)&&f&&p&&g&&S}r.exports=e.default,r.exports.default=e.default})(Fu,Fu.exports);var th=Fu.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(th);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s,{allow_leading_zeroes:!1,min:0,max:65535})}r.exports=e.default,r.exports.default=e.default})(Vu,Vu.exports);var PT=Vu.exports,Uu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s),s===s.toLowerCase()}r.exports=e.default,r.exports.default=e.default})(Uu,Uu.exports);var DT=Uu.exports,Bu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s),s===s.toUpperCase()}r.exports=e.default,r.exports.default=e.default})(Bu,Bu.exports);var bT=Bu.exports,Hu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=n(G);function n(u){return u&&u.__esModule?u:{default:u}}var i=/^[0-9]{15}$/,s=/^\d{2}-\d{6}-\d{6}-\d{1}$/;function a(u,l){(0,t.default)(u),l=l||{};var c=i;if(l.allow_hyphens&&(c=s),!c.test(u))return!1;u=u.replace(/-/g,"");for(var f=0,p=2,g=14,S=0;S<g;S++){var R=u.substring(g-S-1,g-S),_=parseInt(R,10)*p;_>=10?f+=_%10+1:f+=_,p===1?p+=1:p-=1}var A=(10-f%10)%10;return A===parseInt(u.substring(14,15),10)}r.exports=e.default,r.exports.default=e.default})(Hu,Hu.exports);var NT=Hu.exports,Gu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[\x00-\x7F]+$/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(Gu,Gu.exports);var MT=Gu.exports,Jn={};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.default=xT;Jn.fullWidth=void 0;var OT=LT(G);function LT(r){return r&&r.__esModule?r:{default:r}}var kT=Jn.fullWidth=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;function xT(r){return(0,OT.default)(r),kT.test(r)}var ei={};Object.defineProperty(ei,"__esModule",{value:!0});ei.default=UT;ei.halfWidth=void 0;var $T=VT(G);function VT(r){return r&&r.__esModule?r:{default:r}}var FT=ei.halfWidth=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;function UT(r){return(0,$T.default)(r),FT.test(r)}var qu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=s(G),n=Jn,i=ei;function s(u){return u&&u.__esModule?u:{default:u}}function a(u){return(0,t.default)(u),n.fullWidth.test(u)&&i.halfWidth.test(u)}r.exports=e.default,r.exports.default=e.default})(qu,qu.exports);var BT=qu.exports,Ku={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/[^\x00-\x7F]/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(Ku,Ku.exports);var HT=Ku.exports,Wu={exports:{}},Zu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function t(n,i){var s=n.join("");return new RegExp(s,i)}r.exports=e.default,r.exports.default=e.default})(Zu,Zu.exports);var GT=Zu.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=i(GT);function i(u){return u&&u.__esModule?u:{default:u}}var s=(0,n.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)","(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))","?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"],"i");function a(u){return(0,t.default)(u),s.test(u)}r.exports=e.default,r.exports.default=e.default})(Wu,Wu.exports);var qT=Wu.exports,zu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(zu,zu.exports);var KT=zu.exports,Yu={exports:{}},ju={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(i,s){return i.some(function(a){return s===a})};e.default=t,r.exports=e.default,r.exports.default=e.default})(ju,ju.exports);var WT=ju.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var t=a(ot),n=a(G),i=a(WT),s=be;function a(p){return p&&p.__esModule?p:{default:p}}function u(p){var g=new RegExp("^[-+]?([0-9]+)?(\\".concat(s.decimal[p.locale],"[0-9]{").concat(p.decimal_digits,"})").concat(p.force_decimal?"":"?","$"));return g}var l={force_decimal:!1,decimal_digits:"1,",locale:"en-US"},c=["","-","+"];function f(p,g){if((0,n.default)(p),g=(0,t.default)(g,l),g.locale in s.decimal)return!(0,i.default)(c,p.replace(/ /g,""))&&u(g).test(p);throw new Error("Invalid locale '".concat(g.locale,"'"))}r.exports=e.default,r.exports.default=e.default})(Yu,Yu.exports);var ZT=Yu.exports,Qu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^(0x|0h)?[0-9A-F]+$/i;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(Qu,Qu.exports);var um=Qu.exports,Xu={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^(0o)?[0-7]+$/i;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(Xu,Xu.exports);var zT=Xu.exports,Ju={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(G),n=i(nm);function i(a){return a&&a.__esModule?a:{default:a}}function s(a,u){return(0,t.default)(a),(0,n.default)(a)%parseInt(u,10)===0}r.exports=e.default,r.exports.default=e.default})(Ju,Ju.exports);var YT=Ju.exports,el={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(el,el.exports);var jT=el.exports,tl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var t=n(G);function n(c){return c&&c.__esModule?c:{default:c}}var i=/^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/,s=/^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/,a=/^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/,u=/^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;function l(c){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return(0,t.default)(c),f?i.test(c)||s.test(c)||a.test(c)||u.test(c):i.test(c)||s.test(c)}r.exports=e.default,r.exports.default=e.default})(tl,tl.exports);var QT=tl.exports,rl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=n(G);function n(u){return u&&u.__esModule?u:{default:u}}var i=/^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i,s=/^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;function a(u){(0,t.default)(u);var l=u.replace(/\s+/g," ").replace(/\s?(hsla?\(|\)|,)\s?/ig,"$1");return l.indexOf(",")!==-1?i.test(l):s.test(l)}r.exports=e.default,r.exports.default=e.default})(rl,rl.exports);var XT=rl.exports,nl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(nl,nl.exports);var JT=nl.exports,as={};Object.defineProperty(as,"__esModule",{value:!0});as.default=sS;as.locales=void 0;var eS=tS(G);function tS(r){return r&&r.__esModule?r:{default:r}}var ya={AD:/^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,AE:/^(AE[0-9]{2})\d{3}\d{16}$/,AL:/^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,AT:/^(AT[0-9]{2})\d{16}$/,AZ:/^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,BA:/^(BA[0-9]{2})\d{16}$/,BE:/^(BE[0-9]{2})\d{12}$/,BG:/^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,BH:/^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,BR:/^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,BY:/^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,CH:/^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,CR:/^(CR[0-9]{2})\d{18}$/,CY:/^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,CZ:/^(CZ[0-9]{2})\d{20}$/,DE:/^(DE[0-9]{2})\d{18}$/,DK:/^(DK[0-9]{2})\d{14}$/,DO:/^(DO[0-9]{2})[A-Z]{4}\d{20}$/,DZ:/^(DZ\d{24})$/,EE:/^(EE[0-9]{2})\d{16}$/,EG:/^(EG[0-9]{2})\d{25}$/,ES:/^(ES[0-9]{2})\d{20}$/,FI:/^(FI[0-9]{2})\d{14}$/,FO:/^(FO[0-9]{2})\d{14}$/,FR:/^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,GB:/^(GB[0-9]{2})[A-Z]{4}\d{14}$/,GE:/^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,GI:/^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,GL:/^(GL[0-9]{2})\d{14}$/,GR:/^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,GT:/^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,HR:/^(HR[0-9]{2})\d{17}$/,HU:/^(HU[0-9]{2})\d{24}$/,IE:/^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,IL:/^(IL[0-9]{2})\d{19}$/,IQ:/^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,IR:/^(IR[0-9]{2})0\d{2}0\d{18}$/,IS:/^(IS[0-9]{2})\d{22}$/,IT:/^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,JO:/^(JO[0-9]{2})[A-Z]{4}\d{22}$/,KW:/^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,KZ:/^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,LB:/^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,LC:/^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,LI:/^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,LT:/^(LT[0-9]{2})\d{16}$/,LU:/^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,LV:/^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,MA:/^(MA[0-9]{26})$/,MC:/^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,MD:/^(MD[0-9]{2})[A-Z0-9]{20}$/,ME:/^(ME[0-9]{2})\d{18}$/,MK:/^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,MR:/^(MR[0-9]{2})\d{23}$/,MT:/^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,MU:/^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,MZ:/^(MZ[0-9]{2})\d{21}$/,NL:/^(NL[0-9]{2})[A-Z]{4}\d{10}$/,NO:/^(NO[0-9]{2})\d{11}$/,PK:/^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,PL:/^(PL[0-9]{2})\d{24}$/,PS:/^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,PT:/^(PT[0-9]{2})\d{21}$/,QA:/^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,RO:/^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,RS:/^(RS[0-9]{2})\d{18}$/,SA:/^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,SC:/^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,SE:/^(SE[0-9]{2})\d{20}$/,SI:/^(SI[0-9]{2})\d{15}$/,SK:/^(SK[0-9]{2})\d{20}$/,SM:/^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,SV:/^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,TL:/^(TL[0-9]{2})\d{19}$/,TN:/^(TN[0-9]{2})\d{20}$/,TR:/^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,UA:/^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,VA:/^(VA[0-9]{2})\d{18}$/,VG:/^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,XK:/^(XK[0-9]{2})\d{16}$/};function rS(r){var e=r.filter(function(t){return!(t in ya)});return!(e.length>0)}function nS(r,e){var t=r.replace(/[\s\-]+/gi,"").toUpperCase(),n=t.slice(0,2).toUpperCase(),i=n in ya;if(e.whitelist){if(!rS(e.whitelist))return!1;var s=e.whitelist.includes(n);if(!s)return!1}if(e.blacklist){var a=e.blacklist.includes(n);if(a)return!1}return i&&ya[n].test(t)}function iS(r){var e=r.replace(/[^A-Z0-9]+/gi,"").toUpperCase(),t=e.slice(4)+e.slice(0,4),n=t.replace(/[A-Z]/g,function(s){return s.charCodeAt(0)-55}),i=n.match(/\d{1,7}/g).reduce(function(s,a){return Number(s+a)%97},"");return i===1}function sS(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(0,eS.default)(r),nS(r,e)&&iS(r)}as.locales=Object.keys(ya);var il={exports:{}},ti={};Object.defineProperty(ti,"__esModule",{value:!0});ti.CountryCodes=void 0;ti.default=uS;var aS=oS(G);function oS(r){return r&&r.__esModule?r:{default:r}}var lm=new Set(["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"]);function uS(r){return(0,aS.default)(r),lm.has(r.toUpperCase())}ti.CountryCodes=lm;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=ti;function i(u){return u&&u.__esModule?u:{default:u}}var s=/^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;function a(u){(0,t.default)(u);var l=u.slice(4,6).toUpperCase();return!n.CountryCodes.has(l)&&l!=="XK"?!1:s.test(u)}r.exports=e.default,r.exports.default=e.default})(il,il.exports);var lS=il.exports,sl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[a-f0-9]{32}$/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(sl,sl.exports);var cS=sl.exports,al={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i={md5:32,md4:32,sha1:40,sha256:64,sha384:96,sha512:128,ripemd128:32,ripemd160:40,tiger128:32,tiger160:40,tiger192:48,crc32:8,crc32b:8};function s(a,u){(0,t.default)(a);var l=new RegExp("^[a-fA-F0-9]{".concat(i[u],"}$"));return l.test(a)}r.exports=e.default,r.exports.default=e.default})(al,al.exports);var hS=al.exports,ol={exports:{}},ul={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var t=i(G),n=i(ot);function i(c){return c&&c.__esModule?c:{default:c}}var s=/[^A-Z0-9+\/=]/i,a=/^[A-Z0-9_\-]*$/i,u={urlSafe:!1};function l(c,f){(0,t.default)(c),f=(0,n.default)(f,u);var p=c.length;if(f.urlSafe)return a.test(c);if(p%4!==0||s.test(c))return!1;var g=c.indexOf("=");return g===-1||g===p-1||g===p-2&&c[p-1]==="="}r.exports=e.default,r.exports.default=e.default})(ul,ul.exports);var cm=ul.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(G),n=i(cm);function i(a){return a&&a.__esModule?a:{default:a}}function s(a){(0,t.default)(a);var u=a.split("."),l=u.length;return l!==3?!1:u.reduce(function(c,f){return c&&(0,n.default)(f,{urlSafe:!0})},!0)}r.exports=e.default,r.exports.default=e.default})(ol,ol.exports);var fS=ol.exports,ll={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=i(G),n=i(ot);function i(l){return l&&l.__esModule?l:{default:l}}function s(l){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},s(l)}var a={allow_primitives:!1};function u(l,c){(0,t.default)(l);try{c=(0,n.default)(c,a);var f=[];c.allow_primitives&&(f=[null,!1,!0]);var p=JSON.parse(l);return f.includes(p)||!!p&&s(p)==="object"}catch{}return!1}r.exports=e.default,r.exports.default=e.default})(ll,ll.exports);var dS=ll.exports,cl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=i(ot);function i(u){return u&&u.__esModule?u:{default:u}}var s={ignore_whitespace:!1};function a(u,l){return(0,t.default)(u),l=(0,n.default)(l,s),(l.ignore_whitespace?u.trim().length:u.length)===0}r.exports=e.default,r.exports.default=e.default})(cl,cl.exports);var pS=cl.exports,hl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}function i(a){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i(a)}function s(a,u){(0,t.default)(a);var l,c;i(u)==="object"?(l=u.min||0,c=u.max):(l=arguments[1]||0,c=arguments[2]);var f=a.match(/(\uFE0F|\uFE0E)/g)||[],p=a.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],g=a.length-f.length-p.length;return g>=l&&(typeof c>"u"||g<=c)}r.exports=e.default,r.exports.default=e.default})(hl,hl.exports);var gS=hl.exports,fl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i={1:/^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,2:/^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,7:/^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};function s(a,u){(0,t.default)(a);var l=i[[void 0,null].includes(u)?"all":u];return!!l&&l.test(a)}r.exports=e.default,r.exports.default=e.default})(fl,fl.exports);var mS=fl.exports,dl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(G),n=i(um);function i(a){return a&&a.__esModule?a:{default:a}}function s(a){return(0,t.default)(a),(0,n.default)(a)&&a.length===24}r.exports=e.default,r.exports.default=e.default})(dl,dl.exports);var vS=dl.exports,pl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(Jc);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){var u=(a==null?void 0:a.comparisonDate)||a||Date().toString(),l=(0,t.default)(u),c=(0,t.default)(s);return!!(c&&l&&c>l)}r.exports=e.default,r.exports.default=e.default})(pl,pl.exports);var _S=pl.exports,gl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(G),n=i(Jc);function i(a){return a&&a.__esModule?a:{default:a}}function s(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:String(new Date);(0,t.default)(a);var l=(0,n.default)(u),c=(0,n.default)(a);return!!(c&&l&&c<l)}r.exports=e.default,r.exports.default=e.default})(gl,gl.exports);var yS=gl.exports,ml={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=i(im);function i(u){return u&&u.__esModule?u:{default:u}}function s(u){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},s(u)}function a(u,l){(0,t.default)(u);var c;if(Object.prototype.toString.call(l)==="[object Array]"){var f=[];for(c in l)({}).hasOwnProperty.call(l,c)&&(f[c]=(0,n.default)(l[c]));return f.indexOf(u)>=0}else{if(s(l)==="object")return l.hasOwnProperty(u);if(l&&typeof l.indexOf=="function")return l.indexOf(u)>=0}return!1}r.exports=e.default,r.exports.default=e.default})(ml,ml.exports);var ES=ml.exports,vl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){(0,t.default)(s);for(var a=s.replace(/[- ]+/g,""),u=0,l,c,f,p=a.length-1;p>=0;p--)l=a.substring(p,p+1),c=parseInt(l,10),f?(c*=2,c>=10?u+=c%10+1:u+=c):u+=c,f=!f;return!!(u%10===0&&a)}r.exports=e.default,r.exports.default=e.default})(vl,vl.exports);var hm=vl.exports,_l={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=i(G),n=i(hm);function i(l){return l&&l.__esModule?l:{default:l}}var s={amex:/^3[47][0-9]{13}$/,dinersclub:/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,discover:/^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,jcb:/^(?:2131|1800|35\d{3})\d{11}$/,mastercard:/^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,unionpay:/^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,visa:/^(?:4[0-9]{12})(?:[0-9]{3,6})?$/},a=function(){var l=[];for(var c in s)s.hasOwnProperty(c)&&l.push(s[c]);return l}();function u(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(0,t.default)(l);var f=c.provider,p=l.replace(/[- ]+/g,"");if(f&&f.toLowerCase()in s){if(!s[f.toLowerCase()].test(p))return!1}else{if(f&&!(f.toLowerCase()in s))throw new Error("".concat(f," is not a valid credit card provider."));if(!a.some(function(g){return g.test(p)}))return!1}return(0,n.default)(l)}r.exports=e.default,r.exports.default=e.default})(_l,_l.exports);var AS=_l.exports,yl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=i(G),n=i(th);function i(u){return u&&u.__esModule?u:{default:u}}var s={PL:function(l){(0,t.default)(l);var c={1:1,2:3,3:7,4:9,5:1,6:3,7:7,8:9,9:1,10:3,11:0};if(l!=null&&l.length===11&&(0,n.default)(l,{allow_leading_zeroes:!0})){var f=l.split("").slice(0,-1),p=f.reduce(function(R,_,A){return R+Number(_)*c[A+1]},0),g=p%10,S=Number(l.charAt(l.length-1));if(g===0&&S===0||S===10-g)return!0}return!1},ES:function(l){(0,t.default)(l);var c=/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/,f={X:0,Y:1,Z:2},p=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"],g=l.trim().toUpperCase();if(!c.test(g))return!1;var S=g.slice(0,-1).replace(/[X,Y,Z]/g,function(R){return f[R]});return g.endsWith(p[S%23])},FI:function(l){if((0,t.default)(l),l.length!==11||!l.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))return!1;var c="0123456789ABCDEFHJKLMNPRSTUVWXY",f=parseInt(l.slice(0,6),10)*1e3+parseInt(l.slice(7,10),10),p=f%31,g=c[p];return g===l.slice(10,11)},IN:function(l){var c=/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/,f=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],p=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],g=l.trim();if(!c.test(g))return!1;var S=0,R=g.replace(/\s/g,"").split("").map(Number).reverse();return R.forEach(function(_,A){S=f[S][p[A%8][_]]}),S===0},IR:function(l){if(!l.match(/^\d{10}$/)||(l="0000".concat(l).slice(l.length-6),parseInt(l.slice(3,9),10)===0))return!1;for(var c=parseInt(l.slice(9,10),10),f=0,p=0;p<9;p++)f+=parseInt(l.slice(p,p+1),10)*(10-p);return f%=11,f<2&&c===f||f>=2&&c===11-f},IT:function(l){return l.length!==9||l==="CA00000AA"?!1:l.search(/C[A-Z]\d{5}[A-Z]{2}/i)>-1},NO:function(l){var c=l.trim();if(isNaN(Number(c))||c.length!==11||c==="00000000000")return!1;var f=c.split("").map(Number),p=(11-(3*f[0]+7*f[1]+6*f[2]+1*f[3]+8*f[4]+9*f[5]+4*f[6]+5*f[7]+2*f[8])%11)%11,g=(11-(5*f[0]+4*f[1]+3*f[2]+2*f[3]+7*f[4]+6*f[5]+5*f[6]+4*f[7]+3*f[8]+2*p)%11)%11;return!(p!==f[9]||g!==f[10])},TH:function(l){if(!l.match(/^[1-8]\d{12}$/))return!1;for(var c=0,f=0;f<12;f++)c+=parseInt(l[f],10)*(13-f);return l[12]===((11-c%11)%10).toString()},LK:function(l){var c=/^[1-9]\d{8}[vx]$/i,f=/^[1-9]\d{11}$/i;return l.length===10&&c.test(l)?!0:!!(l.length===12&&f.test(l))},"he-IL":function(l){var c=/^\d{9}$/,f=l.trim();if(!c.test(f))return!1;for(var p=f,g=0,S,R=0;R<p.length;R++)S=Number(p[R])*(R%2+1),g+=S>9?S-9:S;return g%10===0},"ar-LY":function(l){var c=/^(1|2)\d{11}$/,f=l.trim();return!!c.test(f)},"ar-TN":function(l){var c=/^\d{8}$/,f=l.trim();return!!c.test(f)},"zh-CN":function(l){var c=["11","12","13","14","15","21","22","23","31","32","33","34","35","36","37","41","42","43","44","45","46","50","51","52","53","54","61","62","63","64","65","71","81","82","91"],f=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],p=["1","0","X","9","8","7","6","5","4","3","2"],g=function(O){return c.includes(O)},S=function(O){var L=parseInt(O.substring(0,4),10),x=parseInt(O.substring(4,6),10),v=parseInt(O.substring(6),10),m=new Date(L,x-1,v);return m>new Date?!1:m.getFullYear()===L&&m.getMonth()===x-1&&m.getDate()===v},R=function(O){for(var L=O.substring(0,17),x=0,v=0;v<17;v++)x+=parseInt(L.charAt(v),10)*parseInt(f[v],10);var m=x%11;return p[m]},_=function(O){return R(O)===O.charAt(17).toUpperCase()},A=function(O){var L=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(O);if(!L)return!1;var x=O.substring(0,2);if(L=g(x),!L)return!1;var v="19".concat(O.substring(6,12));return L=S(v),!!L},b=function(O){var L=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(O);if(!L)return!1;var x=O.substring(0,2);if(L=g(x),!L)return!1;var v=O.substring(6,14);return L=S(v),L?_(O):!1},D=function(O){var L=/^\d{15}|(\d{17}(\d|x|X))$/.test(O);return L?O.length===15?A(O):b(O):!1};return D(l)},"zh-HK":function(l){l=l.trim();var c=/^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/,f=/^[0-9]$/;if(l=l.toUpperCase(),!c.test(l))return!1;l=l.replace(/\[|\]|\(|\)/g,""),l.length===8&&(l="3".concat(l));for(var p=0,g=0;g<=7;g++){var S=void 0;f.test(l[g])?S=l[g]:S=(l[g].charCodeAt(0)-55)%11,p+=S*(9-g)}p%=11;var R;return p===0?R="0":p===1?R="A":R=String(11-p),R===l[l.length-1]},"zh-TW":function(l){var c={A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:34,J:18,K:19,L:20,M:21,N:22,O:35,P:23,Q:24,R:25,S:26,T:27,U:28,V:29,W:32,X:30,Y:31,Z:33},f=l.trim().toUpperCase();return/^[A-Z][0-9]{9}$/.test(f)?Array.from(f).reduce(function(p,g,S){if(S===0){var R=c[g];return R%10*9+Math.floor(R/10)}return S===9?(10-p%10-Number(g))%10===0:p+Number(g)*(9-S)},0):!1}};function a(u,l){if((0,t.default)(u),l in s)return s[l](u);if(l==="any"){for(var c in s)if(s.hasOwnProperty(c)){var f=s[c];if(f(u))return!0}return!1}throw new Error("Invalid locale '".concat(l,"'"))}r.exports=e.default,r.exports.default=e.default})(yl,yl.exports);var IS=yl.exports,El={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var t=n(G);function n(f){return f&&f.__esModule?f:{default:f}}var i=8,s=14,a=/^(\d{8}|\d{13}|\d{14})$/;function u(f,p){return f===i||f===s?p%2===0?3:1:p%2===0?1:3}function l(f){var p=f.slice(0,-1).split("").map(function(S,R){return Number(S)*u(f.length,R)}).reduce(function(S,R){return S+R},0),g=10-p%10;return g<10?g:0}function c(f){(0,t.default)(f);var p=Number(f.slice(-1));return a.test(f)&&p===l(f)}r.exports=e.default,r.exports.default=e.default})(El,El.exports);var TS=El.exports,Al={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;function s(a){if((0,t.default)(a),!i.test(a))return!1;for(var u=!0,l=0,c=a.length-2;c>=0;c--)if(a[c]>="A"&&a[c]<="Z")for(var f=a[c].charCodeAt(0)-55,p=f%10,g=Math.trunc(f/10),S=0,R=[p,g];S<R.length;S++){var _=R[S];u?_>=5?l+=1+(_-5)*2:l+=_*2:l+=_,u=!u}else{var A=a[c].charCodeAt(0)-48;u?A>=5?l+=1+(A-5)*2:l+=A*2:l+=A,u=!u}var b=Math.trunc((l+9)/10)*10-l;return+a[a.length-1]===b}r.exports=e.default,r.exports.default=e.default})(Al,Al.exports);var SS=Al.exports,Il={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=n(G);function n(l){return l&&l.__esModule?l:{default:l}}var i=/^(?:[0-9]{9}X|[0-9]{10})$/,s=/^(?:[0-9]{13})$/,a=[1,3];function u(l,c){(0,t.default)(l);var f=String((c==null?void 0:c.version)||c);if(!(c!=null&&c.version||c))return u(l,{version:10})||u(l,{version:13});var p=l.replace(/[\s-]+/g,""),g=0;if(f==="10"){if(!i.test(p))return!1;for(var S=0;S<f-1;S++)g+=(S+1)*p.charAt(S);if(p.charAt(9)==="X"?g+=10*10:g+=10*p.charAt(9),g%11===0)return!0}else if(f==="13"){if(!s.test(p))return!1;for(var R=0;R<12;R++)g+=a[R%2]*p.charAt(R);if(p.charAt(12)-(10-g%10)%10===0)return!0}return!1}r.exports=e.default,r.exports.default=e.default})(Il,Il.exports);var wS=Il.exports,Tl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i="^\\d{4}-?\\d{3}[\\dX]$";function s(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(0,t.default)(a);var l=i;if(l=u.require_hyphen?l.replace("?",""):l,l=u.case_sensitive?new RegExp(l):new RegExp(l,"i"),!l.test(a))return!1;for(var c=a.replace("-","").toUpperCase(),f=0,p=0;p<c.length;p++){var g=c[p];f+=(g==="X"?10:+g)*(8-p)}return f%11===0}r.exports=e.default,r.exports.default=e.default})(Tl,Tl.exports);var RS=Tl.exports,Sl={exports:{}},on={};Object.defineProperty(on,"__esModule",{value:!0});on.iso7064Check=CS;on.luhnCheck=PS;on.reverseMultiplyAndSum=DS;on.verhoeffCheck=bS;function CS(r){for(var e=10,t=0;t<r.length-1;t++)e=(parseInt(r[t],10)+e)%10===0?10*2%11:(parseInt(r[t],10)+e)%10*2%11;return e=e===1?0:11-e,e===parseInt(r[10],10)}function PS(r){for(var e=0,t=!1,n=r.length-1;n>=0;n--){if(t){var i=parseInt(r[n],10)*2;i>9?e+=i.toString().split("").map(function(s){return parseInt(s,10)}).reduce(function(s,a){return s+a},0):e+=i}else e+=parseInt(r[n],10);t=!t}return e%10===0}function DS(r,e){for(var t=0,n=0;n<r.length;n++)t+=r[n]*(e-n);return t}function bS(r){for(var e=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],t=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]],n=r.split("").reverse().join(""),i=0,s=0;s<n.length;s++)i=e[i][t[s%8][parseInt(n[s],10)]];return i===0}(function(r,e){function t(C){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(M){return typeof M}:function(M){return M&&typeof Symbol=="function"&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M},t(C)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=xr;var n=l(G),i=u(on),s=l(om);function a(C){if(typeof WeakMap!="function")return null;var M=new WeakMap,$=new WeakMap;return(a=function(U){return U?$:M})(C)}function u(C,M){if(C&&C.__esModule)return C;if(C===null||t(C)!="object"&&typeof C!="function")return{default:C};var $=a(M);if($&&$.has(C))return $.get(C);var B={__proto__:null},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var q in C)if(q!=="default"&&{}.hasOwnProperty.call(C,q)){var te=U?Object.getOwnPropertyDescriptor(C,q):null;te&&(te.get||te.set)?Object.defineProperty(B,q,te):B[q]=C[q]}return B.default=C,$&&$.set(C,B),B}function l(C){return C&&C.__esModule?C:{default:C}}function c(C){return S(C)||g(C)||p(C)||f()}function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(C,M){if(C){if(typeof C=="string")return R(C,M);var $=Object.prototype.toString.call(C).slice(8,-1);if($==="Object"&&C.constructor&&($=C.constructor.name),$==="Map"||$==="Set")return Array.from(C);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return R(C,M)}}function g(C){if(typeof Symbol<"u"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function S(C){if(Array.isArray(C))return R(C)}function R(C,M){(M==null||M>C.length)&&(M=C.length);for(var $=0,B=new Array(M);$<M;$++)B[$]=C[$];return B}function _(C){var M=C.slice(0,2),$=parseInt(C.slice(2,4),10);$>40?($-=40,M="20".concat(M)):$>20?($-=20,M="18".concat(M)):M="19".concat(M),$<10&&($="0".concat($));var B="".concat(M,"/").concat($,"/").concat(C.slice(4,6));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1;for(var U=C.split("").map(function(ie){return parseInt(ie,10)}),q=[2,4,8,5,10,9,7,3,6],te=0,ue=0;ue<q.length;ue++)te+=U[ue]*q[ue];return te=te%11===10?0:te%11,te===U[9]}function A(C){var M=C.split(""),$=M.filter(function(U,q){return q%2}).map(function(U){return Number(U)*2}).join("").split(""),B=M.filter(function(U,q){return!(q%2)}).concat($).map(function(U){return Number(U)}).reduce(function(U,q){return U+q});return B%10===0}function b(C){C=C.replace(/\W/,"");var M=parseInt(C.slice(0,2),10);if(C.length===10)M<54?M="20".concat(M):M="19".concat(M);else{if(C.slice(6)==="000")return!1;if(M<54)M="19".concat(M);else return!1}M.length===3&&(M=[M.slice(0,2),"0",M.slice(2)].join(""));var $=parseInt(C.slice(2,4),10);if($>50&&($-=50),$>20){if(parseInt(M,10)<2004)return!1;$-=20}$<10&&($="0".concat($));var B="".concat(M,"/").concat($,"/").concat(C.slice(4,6));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1;if(C.length===10&&parseInt(C,10)%11!==0){var U=parseInt(C.slice(0,9),10)%11;if(parseInt(M,10)<1986&&U===10){if(parseInt(C.slice(9),10)!==0)return!1}else return!1}return!0}function D(C){return i.luhnCheck(C)}function N(C){for(var M=C.split("").map(function(ie){return parseInt(ie,10)}),$=[],B=0;B<M.length-1;B++){$.push("");for(var U=0;U<M.length-1;U++)M[B]===M[U]&&($[B]+=U)}if($=$.filter(function(ie){return ie.length>1}),$.length!==2&&$.length!==3)return!1;if($[0].length===3){for(var q=$[0].split("").map(function(ie){return parseInt(ie,10)}),te=0,ue=0;ue<q.length-1;ue++)q[ue]+1===q[ue+1]&&(te+=1);if(te===2)return!1}return i.iso7064Check(C)}function O(C){C=C.replace(/\W/,"");var M=parseInt(C.slice(4,6),10),$=C.slice(6,7);switch($){case"0":case"1":case"2":case"3":M="19".concat(M);break;case"4":case"9":M<37?M="20".concat(M):M="19".concat(M);break;default:if(M<37)M="20".concat(M);else if(M>58)M="18".concat(M);else return!1;break}M.length===3&&(M=[M.slice(0,2),"0",M.slice(2)].join(""));var B="".concat(M,"/").concat(C.slice(2,4),"/").concat(C.slice(0,2));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1;for(var U=C.split("").map(function(ie){return parseInt(ie,10)}),q=0,te=4,ue=0;ue<9;ue++)q+=U[ue]*te,te-=1,te===1&&(te=7);return q%=11,q===1?!1:q===0?U[9]===0:U[9]===11-q}function L(C){for(var M=C.slice(0,8).split("").map(function(q){return parseInt(q,10)}),$=0,B=1;B<M.length;B+=2)$+=M[B];for(var U=0;U<M.length;U+=2)M[U]<2?$+=1-M[U]:($+=2*(M[U]-2)+5,M[U]>4&&($+=2));return String.fromCharCode($%26+65)===C.charAt(8)}function x(C){for(var M=C.split("").map(function(U){return parseInt(U,10)}),$=0,B=0;B<8;B++)$+=M[B]*Math.pow(2,8-B);return $%11%10===M[8]}function v(C){var M=i.reverseMultiplyAndSum(C.split("").slice(0,7).map(function($){return parseInt($,10)}),8);return C.length===9&&C[8]!=="W"&&(M+=(C[8].charCodeAt(0)-64)*9),M%=23,M===0?C[7].toUpperCase()==="W":C[7].toUpperCase()===String.fromCharCode(64+M)}var m={andover:["10","12"],atlanta:["60","67"],austin:["50","53"],brookhaven:["01","02","03","04","05","06","11","13","14","16","21","22","23","25","34","51","52","54","55","56","57","58","59","65"],cincinnati:["30","32","35","36","37","38","61"],fresno:["15","24"],internet:["20","26","27","45","46","47"],kansas:["40","44"],memphis:["94","95"],ogden:["80","90"],philadelphia:["33","39","41","42","43","46","48","62","63","64","66","68","71","72","73","74","75","76","77","81","82","83","84","85","86","87","88","91","92","93","98","99"],sba:["31"]};function E(){var C=[];for(var M in m)m.hasOwnProperty(M)&&C.push.apply(C,c(m[M]));return C}function T(C){return E().indexOf(C.slice(0,2))!==-1}function w(C){for(var M=0,$=C.split(""),B=parseInt($.pop(),10),U=0;U<$.length;U++)M+=$[9-U]*(2+U%6);var q=11-M%11;return q===11?q=0:q===10&&(q=9),B===q}function P(C){var M=C.toUpperCase().split("");if(isNaN(parseInt(M[0],10))&&M.length>1){var $=0;switch(M[0]){case"Y":$=1;break;case"Z":$=2;break}M.splice(0,1,$)}else for(;M.length<9;)M.unshift(0);var B=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];M=M.join("");var U=parseInt(M.slice(0,8),10)%23;return M[8]===B[U]}function I(C){var M=C.slice(1,3),$=C.slice(0,1);switch($){case"1":case"2":M="18".concat(M);break;case"3":case"4":M="19".concat(M);break;default:M="20".concat(M);break}var B="".concat(M,"/").concat(C.slice(3,5),"/").concat(C.slice(5,7));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1;for(var U=C.split("").map(function(de){return parseInt(de,10)}),q=0,te=1,ue=0;ue<10;ue++)q+=U[ue]*te,te+=1,te===10&&(te=1);if(q%11===10){q=0,te=3;for(var ie=0;ie<10;ie++)q+=U[ie]*te,te+=1,te===10&&(te=1);if(q%11===10)return U[10]===0}return q%11===U[10]}function j(C){var M=C.slice(4,6),$=C.slice(6,7);switch($){case"+":M="18".concat(M);break;case"-":M="19".concat(M);break;default:M="20".concat(M);break}var B="".concat(M,"/").concat(C.slice(2,4),"/").concat(C.slice(0,2));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1;var U=parseInt(C.slice(0,6)+C.slice(7,10),10)%31;if(U<10)return U===parseInt(C.slice(10),10);U-=10;var q=["A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];return q[U]===C.slice(10)}function X(C){if(C.slice(2,4)!=="00"||C.slice(4,6)!=="00"){var M="".concat(C.slice(0,2),"/").concat(C.slice(2,4),"/").concat(C.slice(4,6));if(!(0,s.default)(M,"YY/MM/DD"))return!1}var $=97-parseInt(C.slice(0,9),10)%97,B=parseInt(C.slice(9,11),10);return!($!==B&&($=97-parseInt("2".concat(C.slice(0,9)),10)%97,$!==B))}function ge(C){C=C.replace(/\s/g,"");var M=parseInt(C.slice(0,10),10)%511,$=parseInt(C.slice(10,13),10);return M===$}function Ee(C){var M="".concat(C.slice(0,4),"/").concat(C.slice(4,6),"/").concat(C.slice(6,8));return!(0,s.default)(M,"YYYY/MM/DD")||!i.luhnCheck(C.slice(0,12))?!1:i.verhoeffCheck("".concat(C.slice(0,11)).concat(C[12]))}function re(C){return i.iso7064Check(C)}function ee(C){for(var M=C.split("").map(function(U){return parseInt(U,10)}),$=8,B=1;B<9;B++)$+=M[B]*(B+1);return $%11===M[9]}function W(C){for(var M=!1,$=!1,B=0;B<3;B++)if(!M&&/[AEIOU]/.test(C[B]))M=!0;else if(!$&&M&&C[B]==="X")$=!0;else if(B>0&&(M&&!$&&!/[AEIOU]/.test(C[B])||$&&!/X/.test(C[B])))return!1;return!0}function J(C){var M=C.toUpperCase().split("");if(!W(M.slice(0,3))||!W(M.slice(3,6)))return!1;for(var $=[6,7,9,10,12,13,14],B={L:"0",M:"1",N:"2",P:"3",Q:"4",R:"5",S:"6",T:"7",U:"8",V:"9"},U=0,q=$;U<q.length;U++){var te=q[U];M[te]in B&&M.splice(te,1,B[M[te]])}var ue={A:"01",B:"02",C:"03",D:"04",E:"05",H:"06",L:"07",M:"08",P:"09",R:"10",S:"11",T:"12"},ie=ue[M[8]],de=parseInt(M[9]+M[10],10);de>40&&(de-=40),de<10&&(de="0".concat(de));var vt="".concat(M[6]).concat(M[7],"/").concat(ie,"/").concat(de);if(!(0,s.default)(vt,"YY/MM/DD"))return!1;for(var _t=0,dt=1;dt<M.length-1;dt+=2){var $r=parseInt(M[dt],10);isNaN($r)&&($r=M[dt].charCodeAt(0)-65),_t+=$r}for(var Tt={A:1,B:0,C:5,D:7,E:9,F:13,G:15,H:17,I:19,J:21,K:2,L:4,M:18,N:20,O:11,P:3,Q:6,R:8,S:12,T:14,U:16,V:10,W:22,X:25,Y:24,Z:23,0:1,1:0},Mt=0;Mt<M.length-1;Mt+=2){var Kt=0;if(M[Mt]in Tt)Kt=Tt[M[Mt]];else{var cr=parseInt(M[Mt],10);Kt=2*cr+1,cr>4&&(Kt+=2)}_t+=Kt}return String.fromCharCode(65+_t%26)===M[15]}function oe(C){C=C.replace(/\W/,"");var M=C.slice(0,2);if(M!=="32"){var $=C.slice(2,4);if($!=="00"){var B=C.slice(4,6);switch(C[6]){case"0":B="18".concat(B);break;case"1":B="19".concat(B);break;default:B="20".concat(B);break}var U="".concat(B,"/").concat(C.slice(2,4),"/").concat(M);if(!(0,s.default)(U,"YYYY/MM/DD"))return!1}for(var q=1101,te=[1,6,3,7,9,10,5,8,4,2],ue=0;ue<C.length-1;ue++)q-=parseInt(C[ue],10)*te[ue];return parseInt(C[10],10)===q%11}return!0}function pe(C){if(C.length!==9){for(var M=C.toUpperCase().split("");M.length<8;)M.unshift(0);switch(C[7]){case"A":case"P":if(parseInt(M[6],10)===0)return!1;break;default:{var $=parseInt(M.join("").slice(0,5),10);if($>32e3)return!1;var B=parseInt(M.join("").slice(5,7),10);if($===B)return!1}}}return!0}function Me(C){return i.reverseMultiplyAndSum(C.split("").slice(0,8).map(function(M){return parseInt(M,10)}),9)%11===parseInt(C[8],10)}function Ge(C){if(C.length===10){for(var M=[6,5,7,2,3,4,5,6,7],$=0,B=0;B<M.length;B++)$+=parseInt(C[B],10)*M[B];return $%=11,$===10?!1:$===parseInt(C[9],10)}var U=C.slice(0,2),q=parseInt(C.slice(2,4),10);q>80?(U="18".concat(U),q-=80):q>60?(U="22".concat(U),q-=60):q>40?(U="21".concat(U),q-=40):q>20?(U="20".concat(U),q-=20):U="19".concat(U),q<10&&(q="0".concat(q));var te="".concat(U,"/").concat(q,"/").concat(C.slice(4,6));if(!(0,s.default)(te,"YYYY/MM/DD"))return!1;for(var ue=0,ie=1,de=0;de<C.length-1;de++)ue+=parseInt(C[de],10)*ie%10,ie+=2,ie>10?ie=1:ie===5&&(ie+=2);return ue=10-ue%10,ue===parseInt(C[10],10)}function Z(C){if(C.length===11){var M,$;if(M=0,C==="11111111111"||C==="22222222222"||C==="33333333333"||C==="44444444444"||C==="55555555555"||C==="66666666666"||C==="77777777777"||C==="88888888888"||C==="99999999999"||C==="00000000000")return!1;for(var B=1;B<=9;B++)M+=parseInt(C.substring(B-1,B),10)*(11-B);if($=M*10%11,$===10&&($=0),$!==parseInt(C.substring(9,10),10))return!1;M=0;for(var U=1;U<=10;U++)M+=parseInt(C.substring(U-1,U),10)*(12-U);return $=M*10%11,$===10&&($=0),$===parseInt(C.substring(10,11),10)}if(C==="00000000000000"||C==="11111111111111"||C==="22222222222222"||C==="33333333333333"||C==="44444444444444"||C==="55555555555555"||C==="66666666666666"||C==="77777777777777"||C==="88888888888888"||C==="99999999999999")return!1;for(var q=C.length-2,te=C.substring(0,q),ue=C.substring(q),ie=0,de=q-7,vt=q;vt>=1;vt--)ie+=te.charAt(q-vt)*de,de-=1,de<2&&(de=9);var _t=ie%11<2?0:11-ie%11;if(_t!==parseInt(ue.charAt(0),10))return!1;q+=1,te=C.substring(0,q),ie=0,de=q-7;for(var dt=q;dt>=1;dt--)ie+=te.charAt(q-dt)*de,de-=1,de<2&&(de=9);return _t=ie%11<2?0:11-ie%11,_t===parseInt(ue.charAt(1),10)}function me(C){var M=11-i.reverseMultiplyAndSum(C.split("").slice(0,8).map(function($){return parseInt($,10)}),9)%11;return M>9?parseInt(C[8],10)===0:M===parseInt(C[8],10)}function Ve(C){if(C.slice(0,4)!=="9000"){var M=C.slice(1,3);switch(C[0]){case"1":case"2":M="19".concat(M);break;case"3":case"4":M="18".concat(M);break;case"5":case"6":M="20".concat(M);break}var $="".concat(M,"/").concat(C.slice(3,5),"/").concat(C.slice(5,7));if($.length===8){if(!(0,s.default)($,"YY/MM/DD"))return!1}else if(!(0,s.default)($,"YYYY/MM/DD"))return!1;for(var B=C.split("").map(function(ue){return parseInt(ue,10)}),U=[2,7,9,1,4,6,3,5,8,2,7,9],q=0,te=0;te<U.length;te++)q+=B[te]*U[te];return q%11===10?B[12]===1:B[12]===q%11}return!0}function Re(C){if(C.length===9){if(C=C.replace(/\W/,""),C.slice(6)==="000")return!1;var M=parseInt(C.slice(0,2),10);if(M>53)return!1;M<10?M="190".concat(M):M="19".concat(M);var $=parseInt(C.slice(2,4),10);$>50&&($-=50),$<10&&($="0".concat($));var B="".concat(M,"/").concat($,"/").concat(C.slice(4,6));if(!(0,s.default)(B,"YYYY/MM/DD"))return!1}return!0}function Pe(C){var M=11-i.reverseMultiplyAndSum(C.split("").slice(0,7).map(function($){return parseInt($,10)}),8)%11;return M===10?parseInt(C[7],10)===0:M===parseInt(C[7],10)}function bt(C){var M=C.slice(0);C.length>11&&(M=M.slice(2));var $="",B=M.slice(2,4),U=parseInt(M.slice(4,6),10);if(C.length>11)$=C.slice(0,4);else if($=C.slice(0,2),C.length===11&&U<60){var q=new Date().getFullYear().toString(),te=parseInt(q.slice(0,2),10);if(q=parseInt(q,10),C[6]==="-")parseInt("".concat(te).concat($),10)>q?$="".concat(te-1).concat($):$="".concat(te).concat($);else if($="".concat(te-1).concat($),q-parseInt($,10)<100)return!1}U>60&&(U-=60),U<10&&(U="0".concat(U));var ue="".concat($,"/").concat(B,"/").concat(U);if(ue.length===8){if(!(0,s.default)(ue,"YY/MM/DD"))return!1}else if(!(0,s.default)(ue,"YYYY/MM/DD"))return!1;return i.luhnCheck(C.replace(/\W/,""))}function Nt(C){for(var M=C.split("").map(function(q){return parseInt(q,10)}),$=[-1,5,7,9,4,6,10,5,7],B=0,U=0;U<$.length;U++)B+=M[U]*$[U];return B%11===10?M[9]===0:M[9]===B%11}var Y={"bg-BG":/^\d{10}$/,"cs-CZ":/^\d{6}\/{0,1}\d{3,4}$/,"de-AT":/^\d{9}$/,"de-DE":/^[1-9]\d{10}$/,"dk-DK":/^\d{6}-{0,1}\d{4}$/,"el-CY":/^[09]\d{7}[A-Z]$/,"el-GR":/^([0-4]|[7-9])\d{8}$/,"en-CA":/^\d{9}$/,"en-GB":/^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,"en-IE":/^\d{7}[A-W][A-IW]{0,1}$/i,"en-US":/^\d{2}[- ]{0,1}\d{7}$/,"es-AR":/(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,"es-ES":/^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,"et-EE":/^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,"fi-FI":/^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,"fr-BE":/^\d{11}$/,"fr-FR":/^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,"fr-LU":/^\d{13}$/,"hr-HR":/^\d{11}$/,"hu-HU":/^8\d{9}$/,"it-IT":/^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,"lv-LV":/^\d{6}-{0,1}\d{5}$/,"mt-MT":/^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,"nl-NL":/^\d{9}$/,"pl-PL":/^\d{10,11}$/,"pt-BR":/(?:^\d{11}$)|(?:^\d{14}$)/,"pt-PT":/^\d{9}$/,"ro-RO":/^\d{13}$/,"sk-SK":/^\d{6}\/{0,1}\d{3,4}$/,"sl-SI":/^[1-9]\d{7}$/,"sv-SE":/^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,"uk-UA":/^\d{10}$/};Y["lb-LU"]=Y["fr-LU"],Y["lt-LT"]=Y["et-EE"],Y["nl-BE"]=Y["fr-BE"],Y["fr-CA"]=Y["en-CA"];var ce={"bg-BG":_,"cs-CZ":b,"de-AT":D,"de-DE":N,"dk-DK":O,"el-CY":L,"el-GR":x,"en-CA":A,"en-IE":v,"en-US":T,"es-AR":w,"es-ES":P,"et-EE":I,"fi-FI":j,"fr-BE":X,"fr-FR":ge,"fr-LU":Ee,"hr-HR":re,"hu-HU":ee,"it-IT":J,"lv-LV":oe,"mt-MT":pe,"nl-NL":Me,"pl-PL":Ge,"pt-BR":Z,"pt-PT":me,"ro-RO":Ve,"sk-SK":Re,"sl-SI":Pe,"sv-SE":bt,"uk-UA":Nt};ce["lb-LU"]=ce["fr-LU"],ce["lt-LT"]=ce["et-EE"],ce["nl-BE"]=ce["fr-BE"],ce["fr-CA"]=ce["en-CA"];var je=/[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g,nt={"de-AT":je,"de-DE":/[\/\\]/g,"fr-BE":je};nt["nl-BE"]=nt["fr-BE"];function xr(C){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en-US";(0,n.default)(C);var $=C.slice(0);if(M in Y)return M in nt&&($=$.replace(nt[M],"")),Y[M].test($)?M in ce?ce[M]($):!0:!1;throw new Error("Invalid locale '".concat(M,"'"))}r.exports=e.default,r.exports.default=e.default})(Sl,Sl.exports);var NS=Sl.exports,os={};Object.defineProperty(os,"__esModule",{value:!0});os.default=LS;os.locales=void 0;var MS=OS(G);function OS(r){return r&&r.__esModule?r:{default:r}}var Ne={"am-AM":/^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-BH":/^(\+?973)?(3|6)\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-LB":/^(\+?961)?((3|81)\d{6}|7\d{7})$/,"ar-EG":/^((\+?20)|0)?1[0125]\d{8}$/,"ar-IQ":/^(\+?964|0)?7[0-9]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-KW":/^(\+?965)([569]\d{7}|41\d{6})$/,"ar-LY":/^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,"ar-MA":/^(?:(?:\+|00)212|0)[5-7]\d{8}$/,"ar-OM":/^((\+|00)968)?(9[1-9])\d{6}$/,"ar-PS":/^(\+?970|0)5[6|9](\d{7})$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SD":/^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-TN":/^(\+?216)?[2459]\d{7}$/,"az-AZ":/^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,"bs-BA":/^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"bn-BD":/^(\+?880|0)1[13456789][0-9]{8}$/,"ca-AD":/^(\+376)?[346]\d{5}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,"de-AT":/^(\+43|0)\d{1,4}\d{3,12}$/,"de-CH":/^(\+41|0)([1-9])\d{1,9}$/,"de-LU":/^(\+352)?((6\d1)\d{6})$/,"dv-MV":/^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,"el-GR":/^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,"el-CY":/^(\+?357?)?(9(9|6)\d{6})$/,"en-AI":/^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-AG":/^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,"en-BM":/^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,"en-BS":/^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-GG":/^(\+?44|0)1481\d{6}$/,"en-GH":/^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,"en-GY":/^(\+592|0)6\d{6}$/,"en-HK":/^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,"en-MO":/^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,"en-IE":/^(\+?353|0)8[356789]\d{7}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-JM":/^(\+?876)?\d{7}$/,"en-KE":/^(\+?254|0)(7|1)\d{8}$/,"fr-CF":/^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,"en-SS":/^(\+?211|0)(9[1257])\d{7}$/,"en-KI":/^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,"en-KN":/^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,"en-LS":/^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,"en-MT":/^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,"en-MU":/^(\+?230|0)?\d{8}$/,"en-MW":/^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,"en-NA":/^(\+?264|0)(6|8)\d{7}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)[28]\d{7,9}$/,"en-PG":/^(\+?675|0)?(7\d|8[18])\d{6}$/,"en-PK":/^((00|\+)?92|0)3[0-6]\d{8}$/,"en-PH":/^(09|\+639)\d{9}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[3689]\d{7}$/,"en-SL":/^(\+?232|0)\d{8}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"en-ZW":/^(\+263)[0-9]{9}$/,"en-BW":/^(\+?267)?(7[1-8]{1})\d{6}$/,"es-AR":/^\+?549(11|[2368]\d)\d{8}$/,"es-BO":/^(\+?591)?(6|7)\d{7}$/,"es-CO":/^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,"es-CL":/^(\+?56|0)[2-9]\d{1}\d{7}$/,"es-CR":/^(\+506)?[2-8]\d{7}$/,"es-CU":/^(\+53|0053)?5\d{7}$/,"es-DO":/^(\+?1)?8[024]9\d{7}$/,"es-HN":/^(\+?504)?[9|8|3|2]\d{7}$/,"es-EC":/^(\+?593|0)([2-7]|9[2-9])\d{7}$/,"es-ES":/^(\+?34)?[6|7]\d{8}$/,"es-PE":/^(\+?51)?9\d{8}$/,"es-MX":/^(\+?52)?(1|01)?\d{10,11}$/,"es-NI":/^(\+?505)\d{7,8}$/,"es-PA":/^(\+?507)\d{7,8}$/,"es-PY":/^(\+?595|0)9[9876]\d{7}$/,"es-SV":/^(\+?503)?[67]\d{7}$/,"es-UY":/^(\+598|0)9[1-9][\d]{6}$/,"es-VE":/^(\+?58)?(2|4)\d{9}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,"fj-FJ":/^(\+?679)?\s?\d{3}\s?\d{4}$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-BF":/^(\+226|0)[67]\d{7}$/,"fr-BJ":/^(\+229)\d{8}$/,"fr-CD":/^(\+?243|0)?(8|9)\d{8}$/,"fr-CM":/^(\+?237)6[0-9]{8}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"fr-GF":/^(\+?594|0|00594)[67]\d{8}$/,"fr-GP":/^(\+?590|0|00590)[67]\d{8}$/,"fr-MQ":/^(\+?596|0|00596)[67]\d{8}$/,"fr-PF":/^(\+?689)?8[789]\d{6}$/,"fr-RE":/^(\+?262|0|00262)[67]\d{8}$/,"fr-WF":/^(\+681)?\d{6}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,"hu-HU":/^(\+?36|06)(20|30|31|50|70)\d{7}$/,"id-ID":/^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,"ir-IR":/^(\+98|0)?9\d{9}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"it-SM":/^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,"ja-JP":/^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,"ka-GE":/^(\+?995)?(79\d{7}|5\d{8})$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"ky-KG":/^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"lv-LV":/^(\+?371)2\d{7}$/,"mg-MG":/^((\+?261|0)(2|3)\d)?\d{7}$/,"mn-MN":/^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,"my-MM":/^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,"ms-MY":/^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,"mz-MZ":/^(\+?258)?8[234567]\d{7}$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"ne-NP":/^(\+?977)?9[78]\d{8}$/,"nl-BE":/^(\+?32|0)4\d{8}$/,"nl-NL":/^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,"nl-AW":/^(\+)?297(56|59|64|73|74|99)\d{5}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"pt-AO":/^(\+244)\d{9}$/,"ro-MD":/^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,"ro-RO":/^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"si-LK":/^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,"sl-SI":/^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"so-SO":/^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,"sq-AL":/^(\+355|0)6[789]\d{6}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"sv-SE":/^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,"tg-TJ":/^(\+?992)?[5][5]\d{7}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"tk-TM":/^(\+993|993|8)\d{8}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"uz-UZ":/^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,"vi-VN":/^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,"zh-CN":/^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/,"dz-BT":/^(\+?975|0)?(17|16|77|02)\d{6}$/,"ar-YE":/^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,"ar-EH":/^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,"fa-AF":/^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/};Ne["en-CA"]=Ne["en-US"];Ne["fr-CA"]=Ne["en-CA"];Ne["fr-BE"]=Ne["nl-BE"];Ne["zh-HK"]=Ne["en-HK"];Ne["zh-MO"]=Ne["en-MO"];Ne["ga-IE"]=Ne["en-IE"];Ne["fr-CH"]=Ne["de-CH"];Ne["it-CH"]=Ne["fr-CH"];function LS(r,e,t){if((0,MS.default)(r),t&&t.strictMode&&!r.startsWith("+"))return!1;if(Array.isArray(e))return e.some(function(s){if(Ne.hasOwnProperty(s)){var a=Ne[s];if(a.test(r))return!0}return!1});if(e in Ne)return Ne[e].test(r);if(!e||e==="any"){for(var n in Ne)if(Ne.hasOwnProperty(n)){var i=Ne[n];if(i.test(r))return!0}return!1}throw new Error("Invalid locale '".concat(e,"'"))}os.locales=Object.keys(Ne);var wl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^(0x)[0-9a-f]{40}$/i;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(wl,wl.exports);var kS=wl.exports,Rl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=i(ot),n=i(G);function i(l){return l&&l.__esModule?l:{default:l}}function s(l){var c="\\d{".concat(l.digits_after_decimal[0],"}");l.digits_after_decimal.forEach(function(D,N){N!==0&&(c="".concat(c,"|\\d{").concat(D,"}"))});var f="(".concat(l.symbol.replace(/\W/,function(D){return"\\".concat(D)}),")").concat(l.require_symbol?"":"?"),p="-?",g="[1-9]\\d*",S="[1-9]\\d{0,2}(\\".concat(l.thousands_separator,"\\d{3})*"),R=["0",g,S],_="(".concat(R.join("|"),")?"),A="(\\".concat(l.decimal_separator,"(").concat(c,"))").concat(l.require_decimal?"":"?"),b=_+(l.allow_decimal||l.require_decimal?A:"");return l.allow_negatives&&!l.parens_for_negatives&&(l.negative_sign_after_digits?b+=p:l.negative_sign_before_digits&&(b=p+b)),l.allow_negative_sign_placeholder?b="( (?!\\-))?".concat(b):l.allow_space_after_symbol?b=" ?".concat(b):l.allow_space_after_digits&&(b+="( (?!$))?"),l.symbol_after_digits?b+=f:b=f+b,l.allow_negatives&&(l.parens_for_negatives?b="(\\(".concat(b,"\\)|").concat(b,")"):l.negative_sign_before_digits||l.negative_sign_after_digits||(b=p+b)),new RegExp("^(?!-? )(?=.*\\d)".concat(b,"$"))}var a={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_decimal:!0,require_decimal:!1,digits_after_decimal:[2],allow_space_after_digits:!1};function u(l,c){return(0,n.default)(l),c=(0,t.default)(c,a),s(c).test(l)}r.exports=e.default,r.exports.default=e.default})(Rl,Rl.exports);var xS=Rl.exports,Cl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var t=n(G);function n(u){return u&&u.__esModule?u:{default:u}}var i=/^(bc1)[a-z0-9]{25,39}$/,s=/^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;function a(u){return(0,t.default)(u),i.test(u)||s.test(u)}r.exports=e.default,r.exports.default=e.default})(Cl,Cl.exports);var $S=Cl.exports,us={};Object.defineProperty(us,"__esModule",{value:!0});us.isFreightContainerID=void 0;us.isISO6346=fm;var VS=FS(G);function FS(r){return r&&r.__esModule?r:{default:r}}var US=/^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/,BS=/^[0-9]$/;function fm(r){if((0,VS.default)(r),r=r.toUpperCase(),!US.test(r))return!1;if(r.length===11){for(var e=0,t=0;t<r.length-1;t++)if(BS.test(r[t]))e+=r[t]*Math.pow(2,t);else{var n=void 0,i=r.charCodeAt(t)-55;i<11?n=i:i>=11&&i<=20?n=12+i%11:i>=21&&i<=30?n=23+i%21:n=34+i%31,e+=n*Math.pow(2,t)}var s=e%11;return Number(r[r.length-1])===s}return!0}us.isFreightContainerID=fm;var Pl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=new Set(["aa","ab","ae","af","ak","am","an","ar","as","av","ay","az","az","ba","be","bg","bh","bi","bm","bn","bo","br","bs","ca","ce","ch","co","cr","cs","cu","cv","cy","da","de","dv","dz","ee","el","en","eo","es","et","eu","fa","ff","fi","fj","fo","fr","fy","ga","gd","gl","gn","gu","gv","ha","he","hi","ho","hr","ht","hu","hy","hz","ia","id","ie","ig","ii","ik","io","is","it","iu","ja","jv","ka","kg","ki","kj","kk","kl","km","kn","ko","kr","ks","ku","kv","kw","ky","la","lb","lg","li","ln","lo","lt","lu","lv","mg","mh","mi","mk","ml","mn","mr","ms","mt","my","na","nb","nd","ne","ng","nl","nn","no","nr","nv","ny","oc","oj","om","or","os","pa","pi","pl","ps","pt","qu","rm","rn","ro","ru","rw","sa","sc","sd","se","sg","si","sk","sl","sm","sn","so","sq","sr","ss","st","su","sv","sw","ta","te","tg","th","ti","tk","tl","tn","to","tr","ts","tt","tw","ty","ug","uk","ur","uz","ve","vi","vo","wa","wo","xh","yi","yo","za","zh","zu"]);function s(a){return(0,t.default)(a),i.has(a)}r.exports=e.default,r.exports.default=e.default})(Pl,Pl.exports);var HS=Pl.exports,Dl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=n(G);function n(l){return l&&l.__esModule?l:{default:l}}var i=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,s=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,a=function(c){var f=c.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(f){var p=Number(f[1]),g=Number(f[2]);return p%4===0&&p%100!==0||p%400===0?g<=366:g<=365}var S=c.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),R=S[1],_=S[2],A=S[3],b=_&&"0".concat(_).slice(-2),D=A&&"0".concat(A).slice(-2),N=new Date("".concat(R,"-").concat(b||"01","-").concat(D||"01"));return _&&A?N.getUTCFullYear()===R&&N.getUTCMonth()+1===_&&N.getUTCDate()===A:!0};function u(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(0,t.default)(l);var f=c.strictSeparator?s.test(l):i.test(l);return f&&c.strict?a(l):f}r.exports=e.default,r.exports.default=e.default})(Dl,Dl.exports);var GS=Dl.exports,bl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var t=n(G);function n(D){return D&&D.__esModule?D:{default:D}}var i=/[0-9]{4}/,s=/(0[1-9]|1[0-2])/,a=/([12]\d|0[1-9]|3[01])/,u=/([01][0-9]|2[0-3])/,l=/[0-5][0-9]/,c=/([0-5][0-9]|60)/,f=/(\.[0-9]+)?/,p=new RegExp("[-+]".concat(u.source,":").concat(l.source)),g=new RegExp("([zZ]|".concat(p.source,")")),S=new RegExp("".concat(u.source,":").concat(l.source,":").concat(c.source).concat(f.source)),R=new RegExp("".concat(i.source,"-").concat(s.source,"-").concat(a.source)),_=new RegExp("".concat(S.source).concat(g.source)),A=new RegExp("^".concat(R.source,"[ tT]").concat(_.source,"$"));function b(D){return(0,t.default)(D),A.test(D)}r.exports=e.default,r.exports.default=e.default})(bl,bl.exports);var qS=bl.exports,Nl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=new Set(["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR","BFA","BDI","KHM","CMR","CAN","CPV","CYM","CAF","TCD","CHL","CHN","CXR","CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CUW","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB","VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"]);function s(a){return(0,t.default)(a),i.has(a.toUpperCase())}r.exports=e.default,r.exports.default=e.default})(Nl,Nl.exports);var KS=Nl.exports,ls={};Object.defineProperty(ls,"__esModule",{value:!0});ls.CurrencyCodes=void 0;ls.default=zS;var WS=ZS(G);function ZS(r){return r&&r.__esModule?r:{default:r}}var dm=new Set(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UYW","UZS","VES","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMW","ZWL"]);function zS(r){return(0,WS.default)(r),dm.has(r.toUpperCase())}ls.CurrencyCodes=dm;var Ml={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var t=i(G),n=i(ot);function i(c){return c&&c.__esModule?c:{default:c}}var s=/^[A-Z2-7]+=*$/,a=/^[A-HJKMNP-TV-Z0-9]+$/,u={crockford:!1};function l(c,f){if((0,t.default)(c),f=(0,n.default)(f,u),f.crockford)return a.test(c);var p=c.length;return!!(p%8===0&&s.test(c))}r.exports=e.default,r.exports.default=e.default})(Ml,Ml.exports);var YS=Ml.exports,Ol={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[A-HJ-NP-Za-km-z1-9]*$/;function s(a){return(0,t.default)(a),!!i.test(a)}r.exports=e.default,r.exports.default=e.default})(Ol,Ol.exports);var jS=Ol.exports,Ll={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=n(G);function n(l){return l&&l.__esModule?l:{default:l}}var i=/^[a-z]+\/[a-z0-9\-\+\._]+$/i,s=/^[a-z\-]+=[a-z0-9\-]+$/i,a=/^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;function u(l){(0,t.default)(l);var c=l.split(",");if(c.length<2)return!1;var f=c.shift().trim().split(";"),p=f.shift();if(p.slice(0,5)!=="data:")return!1;var g=p.slice(5);if(g!==""&&!i.test(g))return!1;for(var S=0;S<f.length;S++)if(!(S===f.length-1&&f[S].toLowerCase()==="base64")&&!s.test(f[S]))return!1;for(var R=0;R<c.length;R++)if(!a.test(c[R]))return!1;return!0}r.exports=e.default,r.exports.default=e.default})(Ll,Ll.exports);var QS=Ll.exports,kl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;function s(a){return(0,t.default)(a),a.indexOf("magnet:?")!==0?!1:i.test(a)}r.exports=e.default,r.exports.default=e.default})(kl,kl.exports);var XS=kl.exports,xl={exports:{}},$l={exports:{}},Vl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){if((0,t.default)(s),a){var u=new RegExp("[".concat(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"]+$"),"g");return s.replace(u,"")}for(var l=s.length-1;/\s/.test(s.charAt(l));)l-=1;return s.slice(0,l+1)}r.exports=e.default,r.exports.default=e.default})(Vl,Vl.exports);var pm=Vl.exports,Fl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){(0,t.default)(s);var u=a?new RegExp("^[".concat(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"]+"),"g"):/^\s+/g;return s.replace(u,"")}r.exports=e.default,r.exports.default=e.default})(Fl,Fl.exports);var gm=Fl.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(pm),n=i(gm);function i(a){return a&&a.__esModule?a:{default:a}}function s(a,u){return(0,t.default)((0,n.default)(a,u),u)}r.exports=e.default,r.exports.default=e.default})($l,$l.exports);var mm=$l.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=R;var t=s(mm),n=s(am),i=s(G);function s(_){return _&&_.__esModule?_:{default:_}}function a(_,A){return c(_)||l(_,A)||p(_,A)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l(_,A){var b=_==null?null:typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(b!=null){var D,N,O,L,x=[],v=!0,m=!1;try{if(O=(b=b.call(_)).next,A!==0)for(;!(v=(D=O.call(b)).done)&&(x.push(D.value),x.length!==A);v=!0);}catch(E){m=!0,N=E}finally{try{if(!v&&b.return!=null&&(L=b.return(),Object(L)!==L))return}finally{if(m)throw N}}return x}}function c(_){if(Array.isArray(_))return _}function f(_,A){var b=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(!b){if(Array.isArray(_)||(b=p(_))||A){b&&(_=b);var D=0,N=function(){};return{s:N,n:function(){return D>=_.length?{done:!0}:{done:!1,value:_[D++]}},e:function(m){throw m},f:N}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O=!0,L=!1,x;return{s:function(){b=b.call(_)},n:function(){var m=b.next();return O=m.done,m},e:function(m){L=!0,x=m},f:function(){try{!O&&b.return!=null&&b.return()}finally{if(L)throw x}}}}function p(_,A){if(_){if(typeof _=="string")return g(_,A);var b=Object.prototype.toString.call(_).slice(8,-1);if(b==="Object"&&_.constructor&&(b=_.constructor.name),b==="Map"||b==="Set")return Array.from(_);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return g(_,A)}}function g(_,A){(A==null||A>_.length)&&(A=_.length);for(var b=0,D=new Array(A);b<A;b++)D[b]=_[b];return D}function S(_){var A=new Set(["subject","body","cc","bcc"]),b={cc:"",bcc:""},D=!1,N=_.split("&");if(N.length>4)return!1;var O=f(N),L;try{for(O.s();!(L=O.n()).done;){var x=L.value,v=x.split("="),m=a(v,2),E=m[0],T=m[1];if(E&&!A.has(E)){D=!0;break}T&&(E==="cc"||E==="bcc")&&(b[E]=T),E&&A.delete(E)}}catch(w){O.e(w)}finally{O.f()}return D?!1:b}function R(_,A){if((0,i.default)(_),_.indexOf("mailto:")!==0)return!1;var b=_.replace("mailto:","").split("?"),D=a(b,2),N=D[0],O=D[1],L=O===void 0?"":O;if(!N&&!L)return!0;var x=S(L);return x?"".concat(N,",").concat(x.cc,",").concat(x.bcc).split(",").every(function(v){return v=(0,t.default)(v," "),v?(0,n.default)(v,A):!0}):!1}r.exports=e.default,r.exports.default=e.default})(xl,xl.exports);var JS=xl.exports,Ul={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var t=n(G);function n(l){return l&&l.__esModule?l:{default:l}}var i=/^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i,s=/^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,a=/^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;function u(l){return(0,t.default)(l),i.test(l)||s.test(l)||a.test(l)}r.exports=e.default,r.exports.default=e.default})(Ul,Ul.exports);var ew=Ul.exports,Bl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var t=i(G),n=i(ot);function i(p){return p&&p.__esModule?p:{default:p}}var s=/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,a=/^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,u=/^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i,l=/^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i,c={checkDMS:!1};function f(p,g){if((0,t.default)(p),g=(0,n.default)(g,c),!p.includes(","))return!1;var S=p.split(",");return S[0].startsWith("(")&&!S[1].endsWith(")")||S[1].endsWith(")")&&!S[0].startsWith("(")?!1:g.checkDMS?u.test(S[0])&&l.test(S[1]):s.test(S[0])&&a.test(S[1])}r.exports=e.default,r.exports.default=e.default})(Bl,Bl.exports);var tw=Bl.exports,cs={};Object.defineProperty(cs,"__esModule",{value:!0});cs.default=iw;cs.locales=void 0;var rw=nw(G);function nw(r){return r&&r.__esModule?r:{default:r}}var Id=/^\d{3}$/,mt=/^\d{4}$/,it=/^\d{5}$/,Mo=/^\d{6}$/,An={AD:/^AD\d{3}$/,AT:mt,AU:mt,AZ:/^AZ\d{4}$/,BA:/^([7-8]\d{4}$)/,BE:mt,BG:mt,BR:/^\d{5}-\d{3}$/,BY:/^2[1-4]\d{4}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:mt,CN:/^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,CZ:/^\d{3}\s?\d{2}$/,DE:it,DK:mt,DO:it,DZ:it,EE:it,ES:/^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,FI:it,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HT:/^HT\d{4}$/,HU:mt,ID:it,IE:/^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,IL:/^(\d{5}|\d{7})$/,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IR:/^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,IS:Id,IT:it,JP:/^\d{3}\-\d{4}$/,KE:it,KR:/^(\d{5}|\d{6})$/,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:mt,LV:/^LV\-\d{4}$/,LK:it,MG:Id,MX:it,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,MY:it,NL:/^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,NO:mt,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:mt,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:Mo,RU:Mo,SA:it,SE:/^[1-9]\d{2}\s?\d{2}$/,SG:Mo,SI:mt,SK:/^\d{3}\s?\d{2}$/,TH:it,TN:mt,TW:/^\d{3}(\d{2})?$/,UA:it,US:/^\d{5}(-\d{4})?$/,ZA:mt,ZM:it};cs.locales=Object.keys(An);function iw(r,e){if((0,rw.default)(r),e in An)return An[e].test(r);if(e==="any"){for(var t in An)if(An.hasOwnProperty(t)){var n=An[t];if(n.test(r))return!0}return!1}throw new Error("Invalid locale '".concat(e,"'"))}var Hl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s),s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")}r.exports=e.default,r.exports.default=e.default})(Hl,Hl.exports);var sw=Hl.exports,Gl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s){return(0,t.default)(s),s.replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`").replace(/&amp;/g,"&")}r.exports=e.default,r.exports.default=e.default})(Gl,Gl.exports);var aw=Gl.exports,ql={exports:{}},Kl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){return(0,t.default)(s),s.replace(new RegExp("[".concat(a,"]+"),"g"),"")}r.exports=e.default,r.exports.default=e.default})(Kl,Kl.exports);var vm=Kl.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=i(G),n=i(vm);function i(a){return a&&a.__esModule?a:{default:a}}function s(a,u){(0,t.default)(a);var l=u?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F";return(0,n.default)(a,l)}r.exports=e.default,r.exports.default=e.default})(ql,ql.exports);var ow=ql.exports,Wl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){return(0,t.default)(s),s.replace(new RegExp("[^".concat(a,"]+"),"g"),"")}r.exports=e.default,r.exports.default=e.default})(Wl,Wl.exports);var uw=Wl.exports,Zl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var t=n(G);function n(s){return s&&s.__esModule?s:{default:s}}function i(s,a){(0,t.default)(s);for(var u=s.length-1;u>=0;u--)if(a.indexOf(s[u])===-1)return!1;return!0}r.exports=e.default,r.exports.default=e.default})(Zl,Zl.exports);var lw=Zl.exports,zl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var t=n(ot);function n(p){return p&&p.__esModule?p:{default:p}}var i={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,yandex_lowercase:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},s=["icloud.com","me.com"],a=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],u=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"],l=["yandex.ru","yandex.ua","yandex.kz","yandex.com","yandex.by","ya.ru"];function c(p){return p.length>1?p:""}function f(p,g){g=(0,t.default)(g,i);var S=p.split("@"),R=S.pop(),_=S.join("@"),A=[_,R];if(A[1]=A[1].toLowerCase(),A[1]==="gmail.com"||A[1]==="googlemail.com"){if(g.gmail_remove_subaddress&&(A[0]=A[0].split("+")[0]),g.gmail_remove_dots&&(A[0]=A[0].replace(/\.+/g,c)),!A[0].length)return!1;(g.all_lowercase||g.gmail_lowercase)&&(A[0]=A[0].toLowerCase()),A[1]=g.gmail_convert_googlemaildotcom?"gmail.com":A[1]}else if(s.indexOf(A[1])>=0){if(g.icloud_remove_subaddress&&(A[0]=A[0].split("+")[0]),!A[0].length)return!1;(g.all_lowercase||g.icloud_lowercase)&&(A[0]=A[0].toLowerCase())}else if(a.indexOf(A[1])>=0){if(g.outlookdotcom_remove_subaddress&&(A[0]=A[0].split("+")[0]),!A[0].length)return!1;(g.all_lowercase||g.outlookdotcom_lowercase)&&(A[0]=A[0].toLowerCase())}else if(u.indexOf(A[1])>=0){if(g.yahoo_remove_subaddress){var b=A[0].split("-");A[0]=b.length>1?b.slice(0,-1).join("-"):b[0]}if(!A[0].length)return!1;(g.all_lowercase||g.yahoo_lowercase)&&(A[0]=A[0].toLowerCase())}else l.indexOf(A[1])>=0?((g.all_lowercase||g.yandex_lowercase)&&(A[0]=A[0].toLowerCase()),A[1]="yandex.ru"):g.all_lowercase&&(A[0]=A[0].toLowerCase());return A.join("@")}r.exports=e.default,r.exports.default=e.default})(zl,zl.exports);var cw=zl.exports,Yl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i=/^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;function s(a){return(0,t.default)(a),i.test(a)}r.exports=e.default,r.exports.default=e.default})(Yl,Yl.exports);var hw=Yl.exports,jl={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var t=n(G);function n(a){return a&&a.__esModule?a:{default:a}}var i={"cs-CZ":function(u){return/^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(u)},"de-DE":function(u){return/^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(u)},"de-LI":function(u){return/^FL[- ]?\d{1,5}[UZ]?$/.test(u)},"en-IN":function(u){return/^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(u)},"es-AR":function(u){return/^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(u)},"fi-FI":function(u){return/^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(u)},"hu-HU":function(u){return/^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(u)},"pt-BR":function(u){return/^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(u)},"pt-PT":function(u){return/^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(u)},"sq-AL":function(u){return/^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(u)},"sv-SE":function(u){return/^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(u.trim())},"en-PK":function(u){return/(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(u.trim())}};function s(a,u){if((0,t.default)(a),u in i)return i[u](a);if(u==="any"){for(var l in i){var c=i[l];if(c(a))return!0}return!1}throw new Error("Invalid locale '".concat(u,"'"))}r.exports=e.default,r.exports.default=e.default})(jl,jl.exports);var fw=jl.exports,Ql={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=S;var t=i(ot),n=i(G);function i(R){return R&&R.__esModule?R:{default:R}}var s=/^[A-Z]$/,a=/^[a-z]$/,u=/^[0-9]$/,l=/^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/,c={minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1,returnScore:!1,pointsPerUnique:1,pointsPerRepeat:.5,pointsForContainingLower:10,pointsForContainingUpper:10,pointsForContainingNumber:10,pointsForContainingSymbol:10};function f(R){var _={};return Array.from(R).forEach(function(A){var b=_[A];b?_[A]+=1:_[A]=1}),_}function p(R){var _=f(R),A={length:R.length,uniqueChars:Object.keys(_).length,uppercaseCount:0,lowercaseCount:0,numberCount:0,symbolCount:0};return Object.keys(_).forEach(function(b){s.test(b)?A.uppercaseCount+=_[b]:a.test(b)?A.lowercaseCount+=_[b]:u.test(b)?A.numberCount+=_[b]:l.test(b)&&(A.symbolCount+=_[b])}),A}function g(R,_){var A=0;return A+=R.uniqueChars*_.pointsPerUnique,A+=(R.length-R.uniqueChars)*_.pointsPerRepeat,R.lowercaseCount>0&&(A+=_.pointsForContainingLower),R.uppercaseCount>0&&(A+=_.pointsForContainingUpper),R.numberCount>0&&(A+=_.pointsForContainingNumber),R.symbolCount>0&&(A+=_.pointsForContainingSymbol),A}function S(R){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;(0,n.default)(R);var A=p(R);return _=(0,t.default)(_||{},c),_.returnScore?g(A,_):A.length>=_.minLength&&A.lowercaseCount>=_.minLowercase&&A.uppercaseCount>=_.minUppercase&&A.numberCount>=_.minNumbers&&A.symbolCount>=_.minSymbols}r.exports=e.default,r.exports.default=e.default})(Ql,Ql.exports);var dw=Ql.exports,hs={};function Xl(r){"@babel/helpers - typeof";return Xl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xl(r)}Object.defineProperty(hs,"__esModule",{value:!0});hs.default=Ew;hs.vatMatchers=void 0;var Td=mw(G),pw=gw(on);function _m(r){if(typeof WeakMap!="function")return null;var e=new WeakMap,t=new WeakMap;return(_m=function(i){return i?t:e})(r)}function gw(r,e){if(r&&r.__esModule)return r;if(r===null||Xl(r)!="object"&&typeof r!="function")return{default:r};var t=_m(e);if(t&&t.has(r))return t.get(r);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in r)if(s!=="default"&&{}.hasOwnProperty.call(r,s)){var a=i?Object.getOwnPropertyDescriptor(r,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=r[s]}return n.default=r,t&&t.set(r,n),n}function mw(r){return r&&r.__esModule?r:{default:r}}var vw=function(e){var t=e.match(/^(AU)?(\d{11})$/);if(!t)return!1;var n=[10,1,3,5,7,9,11,13,15,17,19];e=e.replace(/^AU/,"");for(var i=(parseInt(e.slice(0,1),10)-1).toString()+e.slice(1),s=0,a=0;a<11;a++)s+=n[a]*i.charAt(a);return s!==0&&s%89===0},_w=function(e){var t=function(i){var s=i.pop(),a=[5,4,3,2,7,6,5,4],u=(11-i.reduce(function(l,c,f){return l+c*a[f]},0)%11)%11;return s===u};return/^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(e)&&t(e.match(/\d/g).map(function(n){return+n}))},yw=function(e){var t=e.match(/^(PT)?(\d{9})$/);if(!t)return!1;var n=t[2],i=11-pw.reverseMultiplyAndSum(n.split("").slice(0,8).map(function(s){return parseInt(s,10)}),9)%11;return i>9?parseInt(n[8],10)===0:i===parseInt(n[8],10)},Sd=hs.vatMatchers={AT:function(e){return/^(AT)?U\d{8}$/.test(e)},BE:function(e){return/^(BE)?\d{10}$/.test(e)},BG:function(e){return/^(BG)?\d{9,10}$/.test(e)},HR:function(e){return/^(HR)?\d{11}$/.test(e)},CY:function(e){return/^(CY)?\w{9}$/.test(e)},CZ:function(e){return/^(CZ)?\d{8,10}$/.test(e)},DK:function(e){return/^(DK)?\d{8}$/.test(e)},EE:function(e){return/^(EE)?\d{9}$/.test(e)},FI:function(e){return/^(FI)?\d{8}$/.test(e)},FR:function(e){return/^(FR)?\w{2}\d{9}$/.test(e)},DE:function(e){return/^(DE)?\d{9}$/.test(e)},EL:function(e){return/^(EL)?\d{9}$/.test(e)},HU:function(e){return/^(HU)?\d{8}$/.test(e)},IE:function(e){return/^(IE)?\d{7}\w{1}(W)?$/.test(e)},IT:function(e){return/^(IT)?\d{11}$/.test(e)},LV:function(e){return/^(LV)?\d{11}$/.test(e)},LT:function(e){return/^(LT)?\d{9,12}$/.test(e)},LU:function(e){return/^(LU)?\d{8}$/.test(e)},MT:function(e){return/^(MT)?\d{8}$/.test(e)},NL:function(e){return/^(NL)?\d{9}B\d{2}$/.test(e)},PL:function(e){return/^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(e)},PT:yw,RO:function(e){return/^(RO)?\d{2,10}$/.test(e)},SK:function(e){return/^(SK)?\d{10}$/.test(e)},SI:function(e){return/^(SI)?\d{8}$/.test(e)},ES:function(e){return/^(ES)?\w\d{7}[A-Z]$/.test(e)},SE:function(e){return/^(SE)?\d{12}$/.test(e)},AL:function(e){return/^(AL)?\w{9}[A-Z]$/.test(e)},MK:function(e){return/^(MK)?\d{13}$/.test(e)},AU:vw,BY:function(e){return/^(УНП )?\d{9}$/.test(e)},CA:function(e){return/^(CA)?\d{9}$/.test(e)},IS:function(e){return/^(IS)?\d{5,6}$/.test(e)},IN:function(e){return/^(IN)?\d{15}$/.test(e)},ID:function(e){return/^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(e)},IL:function(e){return/^(IL)?\d{9}$/.test(e)},KZ:function(e){return/^(KZ)?\d{12}$/.test(e)},NZ:function(e){return/^(NZ)?\d{9}$/.test(e)},NG:function(e){return/^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(e)},NO:function(e){return/^(NO)?\d{9}MVA$/.test(e)},PH:function(e){return/^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(e)},RU:function(e){return/^(RU)?(\d{10}|\d{12})$/.test(e)},SM:function(e){return/^(SM)?\d{5}$/.test(e)},SA:function(e){return/^(SA)?\d{15}$/.test(e)},RS:function(e){return/^(RS)?\d{9}$/.test(e)},CH:_w,TR:function(e){return/^(TR)?\d{10}$/.test(e)},UA:function(e){return/^(UA)?\d{12}$/.test(e)},GB:function(e){return/^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(e)},UZ:function(e){return/^(UZ)?\d{9}$/.test(e)},AR:function(e){return/^(AR)?\d{11}$/.test(e)},BO:function(e){return/^(BO)?\d{7}$/.test(e)},BR:function(e){return/^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(e)},CL:function(e){return/^(CL)?\d{8}-\d{1}$/.test(e)},CO:function(e){return/^(CO)?\d{10}$/.test(e)},CR:function(e){return/^(CR)?\d{9,12}$/.test(e)},EC:function(e){return/^(EC)?\d{13}$/.test(e)},SV:function(e){return/^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(e)},GT:function(e){return/^(GT)?\d{7}-\d{1}$/.test(e)},HN:function(e){return/^(HN)?$/.test(e)},MX:function(e){return/^(MX)?\w{3,4}\d{6}\w{3}$/.test(e)},NI:function(e){return/^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(e)},PA:function(e){return/^(PA)?$/.test(e)},PY:function(e){return/^(PY)?\d{6,8}-\d{1}$/.test(e)},PE:function(e){return/^(PE)?\d{11}$/.test(e)},DO:function(e){return/^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(e)},UY:function(e){return/^(UY)?\d{12}$/.test(e)},VE:function(e){return/^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(e)}};function Ew(r,e){if((0,Td.default)(r),(0,Td.default)(e),e in Sd)return Sd[e](r);throw new Error("Invalid country code: '".concat(e,"'"))}(function(r,e){function t(Se){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(pt){return typeof pt}:function(pt){return pt&&typeof Symbol=="function"&&pt.constructor===Symbol&&pt!==Symbol.prototype?"symbol":typeof pt},t(Se)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=H(Jc),i=H(nm),s=H(uT),a=H(lT),u=H(cT),l=H(hT),c=H(fT),f=H(am),p=H(dT),g=H(pT),S=H(Za),R=H(gT),_=H(eh),A=H(om),b=H(mT),D=H(vT),N=H(_T),O=H(yT),L=Lt(is),x=Lt(ss),v=H(RT),m=H(CT),E=H(PT),T=H(DT),w=H(bT),P=H(NT),I=H(MT),j=H(Jn),X=H(ei),ge=H(BT),Ee=H(HT),re=H(qT),ee=H(KT),W=H(th),J=Lt(Xn),oe=H(ZT),pe=H(um),Me=H(zT),Ge=H(YT),Z=H(jT),me=H(QT),Ve=H(XT),Re=H(JT),Pe=Lt(as),bt=H(lS),Nt=H(cS),Y=H(hS),ce=H(fS),je=H(dS),nt=H(pS),xr=H(gS),C=H(sm),M=H(mS),$=H(vS),B=H(_S),U=H(yS),q=H(ES),te=H(hm),ue=H(AS),ie=H(IS),de=H(TS),vt=H(SS),_t=H(wS),dt=H(RS),$r=H(NS),Tt=Lt(os),Mt=H(kS),Kt=H(xS),cr=H($S),fs=us,za=H(HS),ri=H(GS),ds=H(qS),ps=H(ti),Vr=H(KS),ni=H(ls),ii=H(YS),Wt=H(jS),gs=H(cm),un=H(QS),ms=H(XS),Fr=H(JS),vs=H(ew),Ke=H(tw),si=Lt(cs),Ur=H(gm),Br=H(pm),Ya=H(mm),ja=H(sw),hr=H(aw),Qa=H(ow),Xa=H(uw),ln=H(vm),_s=H(lw),ai=H(cw),cn=H(hw),Ot=H(fw),ys=H(dw),Es=H(hs);function hn(Se){if(typeof WeakMap!="function")return null;var pt=new WeakMap,St=new WeakMap;return(hn=function(wt){return wt?St:pt})(Se)}function Lt(Se,pt){if(Se&&Se.__esModule)return Se;if(Se===null||t(Se)!="object"&&typeof Se!="function")return{default:Se};var St=hn(pt);if(St&&St.has(Se))return St.get(Se);var yt={__proto__:null},wt=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var kt in Se)if(kt!=="default"&&{}.hasOwnProperty.call(Se,kt)){var fn=wt?Object.getOwnPropertyDescriptor(Se,kt):null;fn&&(fn.get||fn.set)?Object.defineProperty(yt,kt,fn):yt[kt]=Se[kt]}return yt.default=Se,St&&St.set(Se,yt),yt}function H(Se){return Se&&Se.__esModule?Se:{default:Se}}var As="13.12.0",Ja={version:As,toDate:n.default,toFloat:i.default,toInt:s.default,toBoolean:a.default,equals:u.default,contains:l.default,matches:c.default,isEmail:f.default,isURL:p.default,isMACAddress:g.default,isIP:S.default,isIPRange:R.default,isFQDN:_.default,isBoolean:D.default,isIBAN:Pe.default,isBIC:bt.default,isAbaRouting:O.default,isAlpha:L.default,isAlphaLocales:L.locales,isAlphanumeric:x.default,isAlphanumericLocales:x.locales,isNumeric:v.default,isPassportNumber:m.default,isPort:E.default,isLowercase:T.default,isUppercase:w.default,isAscii:I.default,isFullWidth:j.default,isHalfWidth:X.default,isVariableWidth:ge.default,isMultibyte:Ee.default,isSemVer:re.default,isSurrogatePair:ee.default,isInt:W.default,isIMEI:P.default,isFloat:J.default,isFloatLocales:J.locales,isDecimal:oe.default,isHexadecimal:pe.default,isOctal:Me.default,isDivisibleBy:Ge.default,isHexColor:Z.default,isRgbColor:me.default,isHSL:Ve.default,isISRC:Re.default,isMD5:Nt.default,isHash:Y.default,isJWT:ce.default,isJSON:je.default,isEmpty:nt.default,isLength:xr.default,isLocale:N.default,isByteLength:C.default,isUUID:M.default,isMongoId:$.default,isAfter:B.default,isBefore:U.default,isIn:q.default,isLuhnNumber:te.default,isCreditCard:ue.default,isIdentityCard:ie.default,isEAN:de.default,isISIN:vt.default,isISBN:_t.default,isISSN:dt.default,isMobilePhone:Tt.default,isMobilePhoneLocales:Tt.locales,isPostalCode:si.default,isPostalCodeLocales:si.locales,isEthereumAddress:Mt.default,isCurrency:Kt.default,isBtcAddress:cr.default,isISO6346:fs.isISO6346,isFreightContainerID:fs.isFreightContainerID,isISO6391:za.default,isISO8601:ri.default,isRFC3339:ds.default,isISO31661Alpha2:ps.default,isISO31661Alpha3:Vr.default,isISO4217:ni.default,isBase32:ii.default,isBase58:Wt.default,isBase64:gs.default,isDataURI:un.default,isMagnetURI:ms.default,isMailtoURI:Fr.default,isMimeType:vs.default,isLatLong:Ke.default,ltrim:Ur.default,rtrim:Br.default,trim:Ya.default,escape:ja.default,unescape:hr.default,stripLow:Qa.default,whitelist:Xa.default,blacklist:ln.default,isWhitelisted:_s.default,normalizeEmail:ai.default,toString,isSlug:cn.default,isStrongPassword:ys.default,isTaxID:$r.default,isDate:A.default,isTime:b.default,isLicensePlate:Ot.default,isVAT:Es.default,ibanLocales:Pe.locales};e.default=Ja,r.exports=e.default,r.exports.default=e.default})(hu,hu.exports);var kw=hu.exports;export{Lw as G,Zg as S,Rw as a,Cw as b,Sw as c,Dw as d,ww as g,i_ as i,Pw as u,kw as v};
//# sourceMappingURL=vendor-F-QY0OwA.js.map
