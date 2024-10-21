var ja={};/**
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
 */const ic=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ch=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,d=o>>2,A=(o&3)<<4|c>>4;let I=(c&15)<<2|f>>6,w=f&63;h||(w=64,a||(I=64)),r.push(e[d],e[A],e[I],e[w])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ic(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ch(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||A==null)throw new Ph;const I=o<<2|c>>4;if(r.push(I),f!==64){const w=c<<4&240|f>>2;if(r.push(w),A!==64){const R=f<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bh=function(n){const t=ic(n);return sc.encodeByteArray(t,!0)},ai=function(n){return bh(n).replace(/\./g,"")},Vh=function(n){try{return sc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Dh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nh=()=>Dh().__FIREBASE_DEFAULTS__,Lh=()=>{if(typeof process>"u"||typeof ja>"u")return;const n=ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Oh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Vh(n[1]);return t&&JSON.parse(t)},Js=()=>{try{return Nh()||Lh()||Oh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kh=n=>{var t,e;return(e=(t=Js())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Mh=n=>{const t=kh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},oc=()=>{var n;return(n=Js())===null||n===void 0?void 0:n.config};/**
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
 */class xh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Fh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ai(JSON.stringify(e)),ai(JSON.stringify(a)),""].join(".")}/**
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
 */function Uh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bh(){var n;const t=(n=Js())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $h(){return!Bh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qh(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const zh="FirebaseError";class Rn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=zh,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ac.prototype.create)}}class ac{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Gh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,c,r)}}function Gh(n,t){return n.replace(Kh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Kh=/\{\$([^}]+)}/g;function As(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(za(o)&&za(a)){if(!As(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function za(n){return n!==null&&typeof n=="object"}/**
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
 */function Hh(n){return n&&n._delegate?n._delegate:n}class rr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ue="[DEFAULT]";/**
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
 */class Wh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new xh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xh(t))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ue){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ue){return this.instances.has(t)}getOptions(t=Ue){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ue){return this.component?this.component.multipleInstances?t:Ue:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qh(n){return n===Ue?void 0:n}function Xh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(rt||(rt={}));const Jh={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},Zh=rt.INFO,tf={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},ef=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=tf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uc{constructor(t){this.name=t,this._logLevel=Zh,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const nf=(n,t)=>t.some(e=>n instanceof e);let Ga,Ka;function rf(){return Ga||(Ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sf(){return Ka||(Ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cc=new WeakMap,Is=new WeakMap,lc=new WeakMap,us=new WeakMap,Zs=new WeakMap;function of(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(we(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&cc.set(e,n)}).catch(()=>{}),Zs.set(t,n),t}function af(n){if(Is.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Is.set(n,t)}let ws={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Is.get(n);if(t==="objectStoreNames")return n.objectStoreNames||lc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return we(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function uf(n){ws=n(ws)}function cf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(cs(this),t,...e);return lc.set(r,t.sort?t.sort():[t]),we(r)}:sf().includes(n)?function(...t){return n.apply(cs(this),t),we(cc.get(this))}:function(...t){return we(n.apply(cs(this),t))}}function lf(n){return typeof n=="function"?cf(n):(n instanceof IDBTransaction&&af(n),nf(n,rf())?new Proxy(n,ws):n)}function we(n){if(n instanceof IDBRequest)return of(n);if(us.has(n))return us.get(n);const t=lf(n);return t!==n&&(us.set(n,t),Zs.set(t,n)),t}const cs=n=>Zs.get(n);function hf(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=we(a);return r&&a.addEventListener("upgradeneeded",h=>{r(we(a.result),h.oldVersion,h.newVersion,we(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const ff=["get","getKey","getAll","getAllKeys","count"],df=["put","add","delete","clear"],ls=new Map;function Ha(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=df.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ff.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ls.set(t,o),o}uf(n=>({...n,get:(t,e,r)=>Ha(t,e)||n.get(t,e,r),has:(t,e)=>!!Ha(t,e)||n.has(t,e)}));/**
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
 */class gf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mf(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function mf(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rs="@firebase/app",Wa="0.10.10";/**
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
 */const ge=new uc("@firebase/app"),pf="@firebase/app-compat",_f="@firebase/analytics-compat",vf="@firebase/analytics",yf="@firebase/app-check-compat",Ef="@firebase/app-check",Tf="@firebase/auth",Af="@firebase/auth-compat",If="@firebase/database",wf="@firebase/database-compat",Rf="@firebase/functions",Sf="@firebase/functions-compat",Cf="@firebase/installations",Pf="@firebase/installations-compat",bf="@firebase/messaging",Vf="@firebase/messaging-compat",Df="@firebase/performance",Nf="@firebase/performance-compat",Lf="@firebase/remote-config",Of="@firebase/remote-config-compat",kf="@firebase/storage",Mf="@firebase/storage-compat",xf="@firebase/firestore",Ff="@firebase/vertexai-preview",Uf="@firebase/firestore-compat",Bf="firebase",$f="10.13.1";/**
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
 */const Ss="[DEFAULT]",qf={[Rs]:"fire-core",[pf]:"fire-core-compat",[vf]:"fire-analytics",[_f]:"fire-analytics-compat",[Ef]:"fire-app-check",[yf]:"fire-app-check-compat",[Tf]:"fire-auth",[Af]:"fire-auth-compat",[If]:"fire-rtdb",[wf]:"fire-rtdb-compat",[Rf]:"fire-fn",[Sf]:"fire-fn-compat",[Cf]:"fire-iid",[Pf]:"fire-iid-compat",[bf]:"fire-fcm",[Vf]:"fire-fcm-compat",[Df]:"fire-perf",[Nf]:"fire-perf-compat",[Lf]:"fire-rc",[Of]:"fire-rc-compat",[kf]:"fire-gcs",[Mf]:"fire-gcs-compat",[xf]:"fire-fst",[Uf]:"fire-fst-compat",[Ff]:"fire-vertex","fire-js":"fire-js",[Bf]:"fire-js-all"};/**
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
 */const ui=new Map,jf=new Map,Cs=new Map;function Qa(n,t){try{n.container.addComponent(t)}catch(e){ge.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ci(n){const t=n.name;if(Cs.has(t))return ge.debug(`There were multiple attempts to register component ${t}.`),!1;Cs.set(t,n);for(const e of ui.values())Qa(e,n);for(const e of jf.values())Qa(e,n);return!0}function zf(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Gf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Re=new ac("app","Firebase",Gf);/**
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
 */class Kf{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}/**
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
 */const Hf=$f;function Wf(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ss,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Re.create("bad-app-name",{appName:String(s)});if(e||(e=oc()),!e)throw Re.create("no-options");const o=ui.get(s);if(o){if(As(e,o.options)&&As(r,o.config))return o;throw Re.create("duplicate-app",{appName:s})}const a=new Yh(s);for(const h of Cs.values())a.addComponent(h);const c=new Kf(e,r,a);return ui.set(s,c),c}function Qf(n=Ss){const t=ui.get(n);if(!t&&n===Ss&&oc())return Wf();if(!t)throw Re.create("no-app",{appName:n});return t}function ln(n,t,e){var r;let s=(r=qf[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ge.warn(c.join(" "));return}ci(new rr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Xf="firebase-heartbeat-database",Yf=1,ir="firebase-heartbeat-store";let hs=null;function hc(){return hs||(hs=hf(Xf,Yf,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ir)}catch(e){console.warn(e)}}}}).catch(n=>{throw Re.create("idb-open",{originalErrorMessage:n.message})})),hs}async function Jf(n){try{const e=(await hc()).transaction(ir),r=await e.objectStore(ir).get(fc(n));return await e.done,r}catch(t){if(t instanceof Rn)ge.warn(t.message);else{const e=Re.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ge.warn(e.message)}}}async function Xa(n,t){try{const r=(await hc()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,fc(n)),await r.done}catch(e){if(e instanceof Rn)ge.warn(e.message);else{const r=Re.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ge.warn(r.message)}}}function fc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zf=1024,td=30*24*60*60*1e3;class ed{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new rd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ya();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=td}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ge.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ya(),{heartbeatsToSend:r,unsentEntries:s}=nd(this._heartbeatsCache.heartbeats),o=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ge.warn(e),""}}}function Ya(){return new Date().toISOString().substring(0,10)}function nd(n,t=Zf){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ja(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ja(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class rd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qh()?jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Jf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ja(n){return ai(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function id(n){ci(new rr("platform-logger",t=>new gf(t),"PRIVATE")),ci(new rr("heartbeat",t=>new ed(t),"PRIVATE")),ln(Rs,Wa,n),ln(Rs,Wa,"esm2017"),ln("fire-js","")}id("");var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $e,dc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,m){function v(){}v.prototype=m.prototype,_.D=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.C=function(E,y,T){for(var p=Array(arguments.length-2),G=2;G<arguments.length;G++)p[G-2]=arguments[G];return m.prototype[y].apply(E,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,m,v){v||(v=0);var E=Array(16);if(typeof m=="string")for(var y=0;16>y;++y)E[y]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(y=0;16>y;++y)E[y]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],y=_.g[2];var T=_.g[3],p=m+(T^v&(y^T))+E[0]+3614090360&4294967295;m=v+(p<<7&4294967295|p>>>25),p=T+(y^m&(v^y))+E[1]+3905402710&4294967295,T=m+(p<<12&4294967295|p>>>20),p=y+(v^T&(m^v))+E[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=v+(m^y&(T^m))+E[3]+3250441966&4294967295,v=y+(p<<22&4294967295|p>>>10),p=m+(T^v&(y^T))+E[4]+4118548399&4294967295,m=v+(p<<7&4294967295|p>>>25),p=T+(y^m&(v^y))+E[5]+1200080426&4294967295,T=m+(p<<12&4294967295|p>>>20),p=y+(v^T&(m^v))+E[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=v+(m^y&(T^m))+E[7]+4249261313&4294967295,v=y+(p<<22&4294967295|p>>>10),p=m+(T^v&(y^T))+E[8]+1770035416&4294967295,m=v+(p<<7&4294967295|p>>>25),p=T+(y^m&(v^y))+E[9]+2336552879&4294967295,T=m+(p<<12&4294967295|p>>>20),p=y+(v^T&(m^v))+E[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=v+(m^y&(T^m))+E[11]+2304563134&4294967295,v=y+(p<<22&4294967295|p>>>10),p=m+(T^v&(y^T))+E[12]+1804603682&4294967295,m=v+(p<<7&4294967295|p>>>25),p=T+(y^m&(v^y))+E[13]+4254626195&4294967295,T=m+(p<<12&4294967295|p>>>20),p=y+(v^T&(m^v))+E[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=v+(m^y&(T^m))+E[15]+1236535329&4294967295,v=y+(p<<22&4294967295|p>>>10),p=m+(y^T&(v^y))+E[1]+4129170786&4294967295,m=v+(p<<5&4294967295|p>>>27),p=T+(v^y&(m^v))+E[6]+3225465664&4294967295,T=m+(p<<9&4294967295|p>>>23),p=y+(m^v&(T^m))+E[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=v+(T^m&(y^T))+E[0]+3921069994&4294967295,v=y+(p<<20&4294967295|p>>>12),p=m+(y^T&(v^y))+E[5]+3593408605&4294967295,m=v+(p<<5&4294967295|p>>>27),p=T+(v^y&(m^v))+E[10]+38016083&4294967295,T=m+(p<<9&4294967295|p>>>23),p=y+(m^v&(T^m))+E[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=v+(T^m&(y^T))+E[4]+3889429448&4294967295,v=y+(p<<20&4294967295|p>>>12),p=m+(y^T&(v^y))+E[9]+568446438&4294967295,m=v+(p<<5&4294967295|p>>>27),p=T+(v^y&(m^v))+E[14]+3275163606&4294967295,T=m+(p<<9&4294967295|p>>>23),p=y+(m^v&(T^m))+E[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=v+(T^m&(y^T))+E[8]+1163531501&4294967295,v=y+(p<<20&4294967295|p>>>12),p=m+(y^T&(v^y))+E[13]+2850285829&4294967295,m=v+(p<<5&4294967295|p>>>27),p=T+(v^y&(m^v))+E[2]+4243563512&4294967295,T=m+(p<<9&4294967295|p>>>23),p=y+(m^v&(T^m))+E[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=v+(T^m&(y^T))+E[12]+2368359562&4294967295,v=y+(p<<20&4294967295|p>>>12),p=m+(v^y^T)+E[5]+4294588738&4294967295,m=v+(p<<4&4294967295|p>>>28),p=T+(m^v^y)+E[8]+2272392833&4294967295,T=m+(p<<11&4294967295|p>>>21),p=y+(T^m^v)+E[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=v+(y^T^m)+E[14]+4259657740&4294967295,v=y+(p<<23&4294967295|p>>>9),p=m+(v^y^T)+E[1]+2763975236&4294967295,m=v+(p<<4&4294967295|p>>>28),p=T+(m^v^y)+E[4]+1272893353&4294967295,T=m+(p<<11&4294967295|p>>>21),p=y+(T^m^v)+E[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=v+(y^T^m)+E[10]+3200236656&4294967295,v=y+(p<<23&4294967295|p>>>9),p=m+(v^y^T)+E[13]+681279174&4294967295,m=v+(p<<4&4294967295|p>>>28),p=T+(m^v^y)+E[0]+3936430074&4294967295,T=m+(p<<11&4294967295|p>>>21),p=y+(T^m^v)+E[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=v+(y^T^m)+E[6]+76029189&4294967295,v=y+(p<<23&4294967295|p>>>9),p=m+(v^y^T)+E[9]+3654602809&4294967295,m=v+(p<<4&4294967295|p>>>28),p=T+(m^v^y)+E[12]+3873151461&4294967295,T=m+(p<<11&4294967295|p>>>21),p=y+(T^m^v)+E[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=v+(y^T^m)+E[2]+3299628645&4294967295,v=y+(p<<23&4294967295|p>>>9),p=m+(y^(v|~T))+E[0]+4096336452&4294967295,m=v+(p<<6&4294967295|p>>>26),p=T+(v^(m|~y))+E[7]+1126891415&4294967295,T=m+(p<<10&4294967295|p>>>22),p=y+(m^(T|~v))+E[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=v+(T^(y|~m))+E[5]+4237533241&4294967295,v=y+(p<<21&4294967295|p>>>11),p=m+(y^(v|~T))+E[12]+1700485571&4294967295,m=v+(p<<6&4294967295|p>>>26),p=T+(v^(m|~y))+E[3]+2399980690&4294967295,T=m+(p<<10&4294967295|p>>>22),p=y+(m^(T|~v))+E[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=v+(T^(y|~m))+E[1]+2240044497&4294967295,v=y+(p<<21&4294967295|p>>>11),p=m+(y^(v|~T))+E[8]+1873313359&4294967295,m=v+(p<<6&4294967295|p>>>26),p=T+(v^(m|~y))+E[15]+4264355552&4294967295,T=m+(p<<10&4294967295|p>>>22),p=y+(m^(T|~v))+E[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=v+(T^(y|~m))+E[13]+1309151649&4294967295,v=y+(p<<21&4294967295|p>>>11),p=m+(y^(v|~T))+E[4]+4149444226&4294967295,m=v+(p<<6&4294967295|p>>>26),p=T+(v^(m|~y))+E[11]+3174756917&4294967295,T=m+(p<<10&4294967295|p>>>22),p=y+(m^(T|~v))+E[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=v+(T^(y|~m))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,_.g[2]=_.g[2]+y&4294967295,_.g[3]=_.g[3]+T&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var v=m-this.blockSize,E=this.B,y=this.h,T=0;T<m;){if(y==0)for(;T<=v;)s(this,_,T),T+=this.blockSize;if(typeof _=="string"){for(;T<m;)if(E[y++]=_.charCodeAt(T++),y==this.blockSize){s(this,E),y=0;break}}else for(;T<m;)if(E[y++]=_[T++],y==this.blockSize){s(this,E),y=0;break}}this.h=y,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var v=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=v&255,v/=256;for(this.u(_),_=Array(16),m=v=0;4>m;++m)for(var E=0;32>E;E+=8)_[v++]=this.g[m]>>>E&255;return _};function o(_,m){var v=c;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function a(_,m){this.h=m;for(var v=[],E=!0,y=_.length-1;0<=y;y--){var T=_[y]|0;E&&T==m||(v[y]=T,E=!1)}this.g=v}var c={};function h(_){return-128<=_&&128>_?o(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function f(_){if(isNaN(_)||!isFinite(_))return A;if(0>_)return P(f(-_));for(var m=[],v=1,E=0;_>=v;E++)m[E]=_/v|0,v*=4294967296;return new a(m,0)}function d(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return P(d(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(m,8)),E=A,y=0;y<_.length;y+=8){var T=Math.min(8,_.length-y),p=parseInt(_.substring(y,y+T),m);8>T?(T=f(Math.pow(m,T)),E=E.j(T).add(f(p))):(E=E.j(v),E=E.add(f(p)))}return E}var A=h(0),I=h(1),w=h(16777216);n=a.prototype,n.m=function(){if(C(this))return-P(this).m();for(var _=0,m=1,v=0;v<this.g.length;v++){var E=this.i(v);_+=(0<=E?E:4294967296+E)*m,m*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(C(this))return"-"+P(this).toString(_);for(var m=f(Math.pow(_,6)),v=this,E="";;){var y=O(v,m).g;v=N(v,y.j(m));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(_);if(v=y,R(v))return T+E;for(;6>T.length;)T="0"+T;E=T+E}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function C(_){return _.h==-1}n.l=function(_){return _=N(this,_),C(_)?-1:R(_)?0:1};function P(_){for(var m=_.g.length,v=[],E=0;E<m;E++)v[E]=~_.g[E];return new a(v,~_.h).add(I)}n.abs=function(){return C(this)?P(this):this},n.add=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],E=0,y=0;y<=m;y++){var T=E+(this.i(y)&65535)+(_.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(_.i(y)>>>16);E=p>>>16,T&=65535,p&=65535,v[y]=p<<16|T}return new a(v,v[v.length-1]&-2147483648?-1:0)};function N(_,m){return _.add(P(m))}n.j=function(_){if(R(this)||R(_))return A;if(C(this))return C(_)?P(this).j(P(_)):P(P(this).j(_));if(C(_))return P(this.j(P(_)));if(0>this.l(w)&&0>_.l(w))return f(this.m()*_.m());for(var m=this.g.length+_.g.length,v=[],E=0;E<2*m;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var y=0;y<_.g.length;y++){var T=this.i(E)>>>16,p=this.i(E)&65535,G=_.i(y)>>>16,Q=_.i(y)&65535;v[2*E+2*y]+=p*Q,D(v,2*E+2*y),v[2*E+2*y+1]+=T*Q,D(v,2*E+2*y+1),v[2*E+2*y+1]+=p*G,D(v,2*E+2*y+1),v[2*E+2*y+2]+=T*G,D(v,2*E+2*y+2)}for(E=0;E<m;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=m;E<2*m;E++)v[E]=0;return new a(v,0)};function D(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function V(_,m){this.g=_,this.h=m}function O(_,m){if(R(m))throw Error("division by zero");if(R(_))return new V(A,A);if(C(_))return m=O(P(_),m),new V(P(m.g),P(m.h));if(C(m))return m=O(_,P(m)),new V(P(m.g),m.h);if(30<_.g.length){if(C(_)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var v=I,E=m;0>=E.l(_);)v=M(v),E=M(E);var y=k(v,1),T=k(E,1);for(E=k(E,2),v=k(v,2);!R(E);){var p=T.add(E);0>=p.l(_)&&(y=y.add(v),T=p),E=k(E,1),v=k(v,1)}return m=N(_,y.j(m)),new V(y,m)}for(y=A;0<=_.l(m);){for(v=Math.max(1,Math.floor(_.m()/m.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),T=f(v),p=T.j(m);C(p)||0<p.l(_);)v-=E,T=f(v),p=T.j(m);R(T)&&(T=I),y=y.add(T),_=N(_,p)}return new V(y,_)}n.A=function(_){return O(this,_).h},n.and=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)&_.i(E);return new a(v,this.h&_.h)},n.or=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)|_.i(E);return new a(v,this.h|_.h)},n.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)^_.i(E);return new a(v,this.h^_.h)};function M(_){for(var m=_.g.length+1,v=[],E=0;E<m;E++)v[E]=_.i(E)<<1|_.i(E-1)>>>31;return new a(v,_.h)}function k(_,m){var v=m>>5;m%=32;for(var E=_.g.length-v,y=[],T=0;T<E;T++)y[T]=0<m?_.i(T+v)>>>m|_.i(T+v+1)<<32-m:_.i(T+v);return new a(y,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,$e=a}).apply(typeof Za<"u"?Za:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gc,mc,Wn,pc,Jr,Ps,_c,vc,yc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var g=0;g<i.length-1;g++){var S=i[g];if(!(S in l))break t;l=l[S]}i=i[i.length-1],g=l[i],u=u(g),u!=g&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,g=!1,S={next:function(){if(!g&&l<i.length){var b=l++;return{value:u(b,i[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function d(i,u,l){return i.call.apply(i.bind,arguments)}function A(i,u,l){if(!i)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),i.apply(u,S)}}return function(){return i.apply(u,arguments)}}function I(i,u,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:A,I.apply(null,arguments)}function w(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var g=l.slice();return g.push.apply(g,arguments),i.apply(this,g)}}function R(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(g,S,b){for(var x=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)x[lt-2]=arguments[lt];return u.prototype[S].apply(g,x)}}function C(i){const u=i.length;if(0<u){const l=Array(u);for(let g=0;g<u;g++)l[g]=i[g];return l}return[]}function P(i,u){for(let l=1;l<arguments.length;l++){const g=arguments[l];if(h(g)){const S=i.length||0,b=g.length||0;i.length=S+b;for(let x=0;x<b;x++)i[S+x]=g[x]}else i.push(g)}}class N{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(i){return/^[\s\xa0]*$/.test(i)}function V(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function O(i){return O[" "](i),i}O[" "]=function(){};var M=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function k(i,u,l){for(const g in i)u.call(l,i[g],g,i)}function _(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function m(i){const u={};for(const l in i)u[l]=i[l];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,u){let l,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(l in g)i[l]=g[l];for(let b=0;b<v.length;b++)l=v[b],Object.prototype.hasOwnProperty.call(g,l)&&(i[l]=g[l])}}function y(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function T(i){c.setTimeout(()=>{throw i},0)}function p(){var i=j;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,l){const g=Q.get();g.set(u,l),this.h?this.h.next=g:this.g=g,this.h=g}}var Q=new N(()=>new dt,i=>i.reset());class dt{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,H=!1,j=new G,U=()=>{const i=c.Promise.resolve(void 0);ut=()=>{i.then(z)}};var z=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){T(l)}var u=Q;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}H=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function nt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var It=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function $t(i,u){if(nt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,g=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(M){t:{try{O(u.nodeName);var S=!0;break t}catch{}S=!1}S||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:B[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&$t.aa.h.call(this)}}R($t,nt);var B={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),Dt=0;function mt(i,u,l,g,S){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!g,this.ha=S,this.key=++Dt,this.da=this.fa=!1}function Et(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ye(i){this.src=i,this.g={},this.h=0}Ye.prototype.add=function(i,u,l,g,S){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var x=$(i,u,g,S);return-1<x?(u=i[x],l||(u.fa=!1)):(u=new mt(u,this.src,b,!!g,S),u.fa=l,i.push(u)),u};function Je(i,u){var l=u.type;if(l in i.g){var g=i.g[l],S=Array.prototype.indexOf.call(g,u,void 0),b;(b=0<=S)&&Array.prototype.splice.call(g,S,1),b&&(Et(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function $(i,u,l,g){for(var S=0;S<i.length;++S){var b=i[S];if(!b.da&&b.listener==u&&b.capture==!!l&&b.ha==g)return S}return-1}var ct="closure_lm_"+(1e6*Math.random()|0),Qt={};function _e(i,u,l,g,S){if(Array.isArray(u)){for(var b=0;b<u.length;b++)_e(i,u[b],l,g,S);return null}return l=Ho(l),i&&i[ot]?i.K(u,l,f(g)?!!g.capture:!!g,S):qi(i,u,l,!1,g,S)}function qi(i,u,l,g,S,b){if(!u)throw Error("Invalid event type");var x=f(S)?!!S.capture:!!S,lt=zi(i);if(lt||(i[ct]=lt=new Ye(i)),l=lt.add(u,l,g,x,b),l.proxy)return l;if(g=Zl(),l.proxy=g,g.src=i,g.listener=l,i.addEventListener)It||(S=x),S===void 0&&(S=!1),i.addEventListener(u.toString(),g,S);else if(i.attachEvent)i.attachEvent(Ko(u.toString()),g);else if(i.addListener&&i.removeListener)i.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Zl(){function i(l){return u.call(i.src,i.listener,l)}const u=th;return i}function Go(i,u,l,g,S){if(Array.isArray(u))for(var b=0;b<u.length;b++)Go(i,u[b],l,g,S);else g=f(g)?!!g.capture:!!g,l=Ho(l),i&&i[ot]?(i=i.i,u=String(u).toString(),u in i.g&&(b=i.g[u],l=$(b,l,g,S),-1<l&&(Et(b[l]),Array.prototype.splice.call(b,l,1),b.length==0&&(delete i.g[u],i.h--)))):i&&(i=zi(i))&&(u=i.g[u.toString()],i=-1,u&&(i=$(u,l,g,S)),(l=-1<i?u[i]:null)&&ji(l))}function ji(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[ot])Je(u.i,i);else{var l=i.type,g=i.proxy;u.removeEventListener?u.removeEventListener(l,g,i.capture):u.detachEvent?u.detachEvent(Ko(l),g):u.addListener&&u.removeListener&&u.removeListener(g),(l=zi(u))?(Je(l,i),l.h==0&&(l.src=null,u[ct]=null)):Et(i)}}}function Ko(i){return i in Qt?Qt[i]:Qt[i]="on"+i}function th(i,u){if(i.da)i=!0;else{u=new $t(u,this);var l=i.listener,g=i.ha||i.src;i.fa&&ji(i),i=l.call(g,u)}return i}function zi(i){return i=i[ct],i instanceof Ye?i:null}var Gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(i){return typeof i=="function"?i:(i[Gi]||(i[Gi]=function(u){return i.handleEvent(u)}),i[Gi])}function Nt(){Z.call(this),this.i=new Ye(this),this.M=this,this.F=null}R(Nt,Z),Nt.prototype[ot]=!0,Nt.prototype.removeEventListener=function(i,u,l,g){Go(this,i,u,l,g)};function Ft(i,u){var l,g=i.F;if(g)for(l=[];g;g=g.F)l.push(g);if(i=i.M,g=u.type||u,typeof u=="string")u=new nt(u,i);else if(u instanceof nt)u.target=u.target||i;else{var S=u;u=new nt(g,i),E(u,S)}if(S=!0,l)for(var b=l.length-1;0<=b;b--){var x=u.g=l[b];S=Vr(x,g,!0,u)&&S}if(x=u.g=i,S=Vr(x,g,!0,u)&&S,S=Vr(x,g,!1,u)&&S,l)for(b=0;b<l.length;b++)x=u.g=l[b],S=Vr(x,g,!1,u)&&S}Nt.prototype.N=function(){if(Nt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],g=0;g<l.length;g++)Et(l[g]);delete i.g[u],i.h--}}this.F=null},Nt.prototype.K=function(i,u,l,g){return this.i.add(String(i),u,!1,l,g)},Nt.prototype.L=function(i,u,l,g){return this.i.add(String(i),u,!0,l,g)};function Vr(i,u,l,g){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,b=0;b<u.length;++b){var x=u[b];if(x&&!x.da&&x.capture==l){var lt=x.listener,Ct=x.ha||x.src;x.fa&&Je(i.i,x),S=lt.call(Ct,g)!==!1&&S}}return S&&!g.defaultPrevented}function Wo(i,u,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Qo(i){i.g=Wo(()=>{i.g=null,i.i&&(i.i=!1,Qo(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class eh extends Z{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Qo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(i){Z.call(this),this.h=i,this.g={}}R(Ln,Z);var Xo=[];function Yo(i){k(i.g,function(u,l){this.g.hasOwnProperty(l)&&ji(u)},i),i.g={}}Ln.prototype.N=function(){Ln.aa.N.call(this),Yo(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ki=c.JSON.stringify,nh=c.JSON.parse,rh=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Hi(){}Hi.prototype.h=null;function Jo(i){return i.h||(i.h=i.i())}function Zo(){}var On={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){nt.call(this,"d")}R(Wi,nt);function Qi(){nt.call(this,"c")}R(Qi,nt);var Oe={},ta=null;function Dr(){return ta=ta||new Nt}Oe.La="serverreachability";function ea(i){nt.call(this,Oe.La,i)}R(ea,nt);function kn(i){const u=Dr();Ft(u,new ea(u))}Oe.STAT_EVENT="statevent";function na(i,u){nt.call(this,Oe.STAT_EVENT,i),this.stat=u}R(na,nt);function Ut(i){const u=Dr();Ft(u,new na(u,i))}Oe.Ma="timingevent";function ra(i,u){nt.call(this,Oe.Ma,i),this.size=u}R(ra,nt);function Mn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function ih(i,u,l,g,S,b){i.info(function(){if(i.g)if(b)for(var x="",lt=b.split("&"),Ct=0;Ct<lt.length;Ct++){var st=lt[Ct].split("=");if(1<st.length){var Lt=st[0];st=st[1];var Ot=Lt.split("_");x=2<=Ot.length&&Ot[1]=="type"?x+(Lt+"="+st+"&"):x+(Lt+"=redacted&")}}else x=null;else x=b;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+l+`
`+x})}function sh(i,u,l,g,S,b,x){i.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+l+`
`+b+" "+x})}function Ze(i,u,l,g){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+ah(i,l)+(g?" "+g:"")})}function oh(i,u){i.info(function(){return"TIMEOUT: "+u})}xn.prototype.info=function(){};function ah(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var g=l[i];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var b=S[0];if(b!="noop"&&b!="stop"&&b!="close")for(var x=1;x<S.length;x++)S[x]=""}}}}return Ki(l)}catch{return u}}var Nr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ia={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xi;function Lr(){}R(Lr,Hi),Lr.prototype.g=function(){return new XMLHttpRequest},Lr.prototype.i=function(){return{}},Xi=new Lr;function ve(i,u,l,g){this.j=i,this.i=u,this.l=l,this.R=g||1,this.U=new Ln(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sa}function sa(){this.i=null,this.g="",this.h=!1}var oa={},Yi={};function Ji(i,u,l){i.L=1,i.v=xr(ae(u)),i.m=l,i.P=!0,aa(i,null)}function aa(i,u){i.F=Date.now(),Or(i),i.A=ae(i.v);var l=i.A,g=i.R;Array.isArray(g)||(g=[String(g)]),Ta(l.i,"t",g),i.C=0,l=i.j.J,i.h=new sa,i.g=Ua(i.j,l?u:null,!i.m),0<i.O&&(i.M=new eh(I(i.Y,i,i.g),i.O)),u=i.U,l=i.g,g=i.ca;var S="readystatechange";Array.isArray(S)||(S&&(Xo[0]=S.toString()),S=Xo);for(var b=0;b<S.length;b++){var x=_e(l,S[b],g||u.handleEvent,!1,u.h||u);if(!x)break;u.g[x.key]=x}u=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),kn(),ih(i.i,i.u,i.A,i.l,i.R,i.m)}ve.prototype.ca=function(i){i=i.target;const u=this.M;u&&ue(i)==3?u.j():this.Y(i)},ve.prototype.Y=function(i){try{if(i==this.g)t:{const Ot=ue(this.g);var u=this.g.Ba();const nn=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||Pa(this.g)))){this.J||Ot!=4||u==7||(u==8||0>=nn?kn(3):kn(2)),Zi(this);var l=this.g.Z();this.X=l;e:if(ua(this)){var g=Pa(this.g);i="";var S=g.length,b=ue(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Fn(this);var x="";break e}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,i+=this.h.i.decode(g[u],{stream:!(b&&u==S-1)});g.length=0,this.h.g+=i,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=l==200,sh(this.i,this.u,this.A,this.l,this.R,Ot,l),this.o){if(this.T&&!this.K){e:{if(this.g){var lt,Ct=this.g;if((lt=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(lt)){var st=lt;break e}}st=null}if(l=st)Ze(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,l);else{this.o=!1,this.s=3,Ut(12),ke(this),Fn(this);break t}}if(this.P){l=!0;let Xt;for(;!this.J&&this.C<x.length;)if(Xt=uh(this,x),Xt==Yi){Ot==4&&(this.s=4,Ut(14),l=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==oa){this.s=4,Ut(15),Ze(this.i,this.l,x,"[Invalid Chunk]"),l=!1;break}else Ze(this.i,this.l,Xt,null),ts(this,Xt);if(ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||x.length!=0||this.h.h||(this.s=1,Ut(16),l=!1),this.o=this.o&&l,!l)Ze(this.i,this.l,x,"[Invalid Chunked Response]"),ke(this),Fn(this);else if(0<x.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),os(Lt),Lt.M=!0,Ut(11))}}else Ze(this.i,this.l,x,null),ts(this,x);Ot==4&&ke(this),this.o&&!this.J&&(Ot==4?ka(this.j,this):(this.o=!1,Or(this)))}else Rh(this.g),l==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ke(this),Fn(this)}}}catch{}finally{}};function ua(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function uh(i,u){var l=i.C,g=u.indexOf(`
`,l);return g==-1?Yi:(l=Number(u.substring(l,g)),isNaN(l)?oa:(g+=1,g+l>u.length?Yi:(u=u.slice(g,g+l),i.C=g+l,u)))}ve.prototype.cancel=function(){this.J=!0,ke(this)};function Or(i){i.S=Date.now()+i.I,ca(i,i.I)}function ca(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Mn(I(i.ba,i),u)}function Zi(i){i.B&&(c.clearTimeout(i.B),i.B=null)}ve.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(oh(this.i,this.A),this.L!=2&&(kn(),Ut(17)),ke(this),this.s=2,Fn(this)):ca(this,this.S-i)};function Fn(i){i.j.G==0||i.J||ka(i.j,i)}function ke(i){Zi(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Yo(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ts(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||es(l.h,i))){if(!i.K&&es(l.h,i)&&l.G==3){try{var g=l.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)qr(l),Br(l);else break t;ss(l),Ut(18)}}else l.za=S[1],0<l.za-l.T&&37500>S[2]&&l.F&&l.v==0&&!l.C&&(l.C=Mn(I(l.Za,l),6e3));if(1>=fa(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else xe(l,11)}else if((i.K||l.g==i)&&qr(l),!D(u))for(S=l.Da.g.parse(u),u=0;u<S.length;u++){let st=S[u];if(l.T=st[0],st=st[1],l.G==2)if(st[0]=="c"){l.K=st[1],l.ia=st[2];const Lt=st[3];Lt!=null&&(l.la=Lt,l.j.info("VER="+l.la));const Ot=st[4];Ot!=null&&(l.Aa=Ot,l.j.info("SVER="+l.Aa));const nn=st[5];nn!=null&&typeof nn=="number"&&0<nn&&(g=1.5*nn,l.L=g,l.j.info("backChannelRequestTimeoutMs_="+g)),g=l;const Xt=i.g;if(Xt){const zr=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zr){var b=g.h;b.g||zr.indexOf("spdy")==-1&&zr.indexOf("quic")==-1&&zr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ns(b,b.h),b.h=null))}if(g.D){const as=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(g.ya=as,ft(g.I,g.D,as))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),g=l;var x=i;if(g.qa=Fa(g,g.J?g.ia:null,g.W),x.K){da(g.h,x);var lt=x,Ct=g.L;Ct&&(lt.I=Ct),lt.B&&(Zi(lt),Or(lt)),g.g=x}else La(g);0<l.i.length&&$r(l)}else st[0]!="stop"&&st[0]!="close"||xe(l,7);else l.G==3&&(st[0]=="stop"||st[0]=="close"?st[0]=="stop"?xe(l,7):is(l):st[0]!="noop"&&l.l&&l.l.ta(st),l.v=0)}}kn(4)}catch{}}var ch=class{constructor(i,u){this.g=i,this.map=u}};function la(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ha(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function fa(i){return i.h?1:i.g?i.g.size:0}function es(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ns(i,u){i.g?i.g.add(u):i.h=u}function da(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}la.prototype.cancel=function(){if(this.i=ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ga(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return C(i.i)}function lh(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,g=0;g<l;g++)u.push(i[g]);return u}u=[],l=0;for(g in i)u[l++]=i[g];return u}function hh(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const g in i)u[l++]=g;return u}}}function ma(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=hh(i),g=lh(i),S=g.length,b=0;b<S;b++)u.call(void 0,g[b],l&&l[b],i)}var pa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fh(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var g=i[l].indexOf("="),S=null;if(0<=g){var b=i[l].substring(0,g);S=i[l].substring(g+1)}else b=i[l];u(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Me(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Me){this.h=i.h,kr(this,i.j),this.o=i.o,this.g=i.g,Mr(this,i.s),this.l=i.l;var u=i.i,l=new $n;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),_a(this,l),this.m=i.m}else i&&(u=String(i).match(pa))?(this.h=!1,kr(this,u[1]||"",!0),this.o=Un(u[2]||""),this.g=Un(u[3]||"",!0),Mr(this,u[4]),this.l=Un(u[5]||"",!0),_a(this,u[6]||"",!0),this.m=Un(u[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}Me.prototype.toString=function(){var i=[],u=this.j;u&&i.push(Bn(u,va,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(Bn(u,va,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Bn(l,l.charAt(0)=="/"?mh:gh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Bn(l,_h)),i.join("")};function ae(i){return new Me(i)}function kr(i,u,l){i.j=l?Un(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Mr(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function _a(i,u,l){u instanceof $n?(i.i=u,vh(i.i,i.h)):(l||(u=Bn(u,ph)),i.i=new $n(u,i.h))}function ft(i,u,l){i.i.set(u,l)}function xr(i){return ft(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Un(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Bn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,dh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function dh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var va=/[#\/\?@]/g,gh=/[#\?:]/g,mh=/[#\?]/g,ph=/[#\?@]/g,_h=/#/g;function $n(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ye(i){i.g||(i.g=new Map,i.h=0,i.i&&fh(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=$n.prototype,n.add=function(i,u){ye(this),this.i=null,i=tn(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function ya(i,u){ye(i),u=tn(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function Ea(i,u){return ye(i),u=tn(i,u),i.g.has(u)}n.forEach=function(i,u){ye(this),this.g.forEach(function(l,g){l.forEach(function(S){i.call(u,S,g,this)},this)},this)},n.na=function(){ye(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let g=0;g<u.length;g++){const S=i[g];for(let b=0;b<S.length;b++)l.push(u[g])}return l},n.V=function(i){ye(this);let u=[];if(typeof i=="string")Ea(this,i)&&(u=u.concat(this.g.get(tn(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return ye(this),this.i=null,i=tn(this,i),Ea(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Ta(i,u,l){ya(i,u),0<l.length&&(i.i=null,i.g.set(tn(i,u),C(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var g=u[l];const b=encodeURIComponent(String(g)),x=this.V(g);for(g=0;g<x.length;g++){var S=b;x[g]!==""&&(S+="="+encodeURIComponent(String(x[g]))),i.push(S)}}return this.i=i.join("&")};function tn(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function vh(i,u){u&&!i.j&&(ye(i),i.i=null,i.g.forEach(function(l,g){var S=g.toLowerCase();g!=S&&(ya(this,g),Ta(this,S,l))},i)),i.j=u}function yh(i,u){const l=new xn;if(c.Image){const g=new Image;g.onload=w(Ee,l,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Ee,l,"TestLoadImage: error",!1,u,g),g.onabort=w(Ee,l,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Ee,l,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=i}else u(!1)}function Eh(i,u){const l=new xn,g=new AbortController,S=setTimeout(()=>{g.abort(),Ee(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:g.signal}).then(b=>{clearTimeout(S),b.ok?Ee(l,"TestPingServer: ok",!0,u):Ee(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Ee(l,"TestPingServer: error",!1,u)})}function Ee(i,u,l,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(l)}catch{}}function Th(){this.g=new rh}function Ah(i,u,l){const g=l||"";try{ma(i,function(S,b){let x=S;f(S)&&(x=Ki(S)),u.push(g+b+"="+encodeURIComponent(x))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function qn(i){this.l=i.Ub||null,this.j=i.eb||!1}R(qn,Hi),qn.prototype.g=function(){return new Fr(this.l,this.j)},qn.prototype.i=function(i){return function(){return i}}({});function Fr(i,u){Nt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Fr,Nt),n=Fr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,zn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Aa(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Aa(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?jn(this):zn(this),this.readyState==3&&Aa(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,jn(this))},n.Qa=function(i){this.g&&(this.response=i,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,zn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function zn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ia(i){let u="";return k(i,function(l,g){u+=g,u+=":",u+=l,u+=`\r
`}),u}function rs(i,u,l){t:{for(g in l){var g=!1;break t}g=!0}g||(l=Ia(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):ft(i,u,l))}function pt(i){Nt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(pt,Nt);var Ih=/^https?$/i,wh=["POST","PUT"];n=pt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xi.g(),this.v=this.o?Jo(this.o):Jo(Xi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(b){wa(this,b);return}if(i=l||"",l=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)l.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())l.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),S=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wh,u,void 0))||g||S||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of l)this.g.setRequestHeader(b,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ca(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){wa(this,b)}};function wa(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,Ra(i),Ur(i)}function Ra(i){i.A||(i.A=!0,Ft(i,"complete"),Ft(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Ft(this,"complete"),Ft(this,"abort"),Ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ur(this,!0)),pt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sa(this):this.bb())},n.bb=function(){Sa(this)};function Sa(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ue(i)!=4||i.Z()!=2)){if(i.u&&ue(i)==4)Wo(i.Ea,0,i);else if(Ft(i,"readystatechange"),ue(i)==4){i.h=!1;try{const x=i.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var g;if(g=x===0){var S=String(i.D).match(pa)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Ih.test(S?S.toLowerCase():"")}l=g}if(l)Ft(i,"complete"),Ft(i,"success");else{i.m=6;try{var b=2<ue(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Ra(i)}}finally{Ur(i)}}}}function Ur(i,u){if(i.g){Ca(i);const l=i.g,g=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Ft(i,"ready");try{l.onreadystatechange=g}catch{}}}function Ca(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ue(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ue(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),nh(u)}};function Pa(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Rh(i){const u={};i=(i.g&&2<=ue(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<i.length;g++){if(D(i[g]))continue;var l=y(i[g]);const S=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=u[S]||[];u[S]=b,b.push(l)}_(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function ba(i){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,i),this.cb=Gn("retryDelaySeedMs",1e4,i),this.Wa=Gn("forwardChannelMaxRetries",2,i),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new la(i&&i.concurrentRequestLimit),this.Da=new Th,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ba.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,g){Ut(0),this.W=i,this.H=u||{},l&&g!==void 0&&(this.H.OSID=l,this.H.OAID=g),this.F=this.X,this.I=Fa(this,null,this.W),$r(this)};function is(i){if(Va(i),i.G==3){var u=i.U++,l=ae(i.I);if(ft(l,"SID",i.K),ft(l,"RID",u),ft(l,"TYPE","terminate"),Kn(i,l),u=new ve(i,i.j,u),u.L=2,u.v=xr(ae(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Ua(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Or(u)}xa(i)}function Br(i){i.g&&(os(i),i.g.cancel(),i.g=null)}function Va(i){Br(i),i.u&&(c.clearTimeout(i.u),i.u=null),qr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function $r(i){if(!ha(i.h)&&!i.s){i.s=!0;var u=i.Ga;ut||U(),H||(ut(),H=!0),j.add(u,i),i.B=0}}function Sh(i,u){return fa(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Mn(I(i.Ga,i,u),Ma(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const S=new ve(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(S.H=b,b=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var g=this.i[l];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Na(this,S,u),l=ae(this.I),ft(l,"RID",i),ft(l,"CVER",22),this.D&&ft(l,"X-HTTP-Session-Id",this.D),Kn(this,l),b&&(this.O?u="headers="+encodeURIComponent(String(Ia(b)))+"&"+u:this.m&&rs(l,this.m,b)),ns(this.h,S),this.Ua&&ft(l,"TYPE","init"),this.P?(ft(l,"$req",u),ft(l,"SID","null"),S.T=!0,Ji(S,l,null)):Ji(S,l,u),this.G=2}}else this.G==3&&(i?Da(this,i):this.i.length==0||ha(this.h)||Da(this))};function Da(i,u){var l;u?l=u.l:l=i.U++;const g=ae(i.I);ft(g,"SID",i.K),ft(g,"RID",l),ft(g,"AID",i.T),Kn(i,g),i.m&&i.o&&rs(g,i.m,i.o),l=new ve(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Na(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ns(i.h,l),Ji(l,g,u)}function Kn(i,u){i.H&&k(i.H,function(l,g){ft(u,g,l)}),i.l&&ma({},function(l,g){ft(u,g,l)})}function Na(i,u,l){l=Math.min(i.i.length,l);var g=i.l?I(i.l.Na,i.l,i):null;t:{var S=i.i;let b=-1;for(;;){const x=["count="+l];b==-1?0<l?(b=S[0].g,x.push("ofs="+b)):b=0:x.push("ofs="+b);let lt=!0;for(let Ct=0;Ct<l;Ct++){let st=S[Ct].g;const Lt=S[Ct].map;if(st-=b,0>st)b=Math.max(0,S[Ct].g-100),lt=!1;else try{Ah(Lt,x,"req"+st+"_")}catch{g&&g(Lt)}}if(lt){g=x.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,g}function La(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;ut||U(),H||(ut(),H=!0),j.add(u,i),i.v=0}}function ss(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Mn(I(i.Fa,i),Ma(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Oa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Mn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Br(this),Oa(this))};function os(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Oa(i){i.g=new ve(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=ae(i.qa);ft(u,"RID","rpc"),ft(u,"SID",i.K),ft(u,"AID",i.T),ft(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&ft(u,"TO",i.ja),ft(u,"TYPE","xmlhttp"),Kn(i,u),i.m&&i.o&&rs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=xr(ae(u)),l.m=null,l.P=!0,aa(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Br(this),ss(this),Ut(19))};function qr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function ka(i,u){var l=null;if(i.g==u){qr(i),os(i),i.g=null;var g=2}else if(es(i.h,u))l=u.D,da(i.h,u),g=1;else return;if(i.G!=0){if(u.o)if(g==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var S=i.B;g=Dr(),Ft(g,new ra(g,l)),$r(i)}else La(i);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&Sh(i,u)||g==2&&ss(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),S){case 1:xe(i,5);break;case 4:xe(i,10);break;case 3:xe(i,6);break;default:xe(i,2)}}}function Ma(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function xe(i,u){if(i.j.info("Error code "+u),u==2){var l=I(i.fb,i),g=i.Xa;const S=!g;g=new Me(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||kr(g,"https"),xr(g),S?yh(g.toString(),l):Eh(g.toString(),l)}else Ut(2);i.G=0,i.l&&i.l.sa(u),xa(i),Va(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function xa(i){if(i.G=0,i.ka=[],i.l){const u=ga(i.h);(u.length!=0||i.i.length!=0)&&(P(i.ka,u),P(i.ka,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.ra()}}function Fa(i,u,l){var g=l instanceof Me?ae(l):new Me(l);if(g.g!="")u&&(g.g=u+"."+g.g),Mr(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var b=new Me(null);g&&kr(b,g),u&&(b.g=u),S&&Mr(b,S),l&&(b.l=l),g=b}return l=i.D,u=i.ya,l&&u&&ft(g,l,u),ft(g,"VER",i.la),Kn(i,g),g}function Ua(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new pt(new qn({eb:l})):new pt(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ba(){}n=Ba.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jr(){}jr.prototype.g=function(i,u){return new Gt(i,u)};function Gt(i,u){Nt.call(this),this.g=new ba(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!D(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new en(this)}R(Gt,Nt),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){is(this.g)},Gt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Ki(i),i=l);u.i.push(new ch(u.Ya++,i)),u.G==3&&$r(u)},Gt.prototype.N=function(){this.g.l=null,delete this.j,is(this.g),delete this.g,Gt.aa.N.call(this)};function $a(i){Wi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}R($a,Wi);function qa(){Qi.call(this),this.status=1}R(qa,Qi);function en(i){this.g=i}R(en,Ba),en.prototype.ua=function(){Ft(this.g,"a")},en.prototype.ta=function(i){Ft(this.g,new $a(i))},en.prototype.sa=function(i){Ft(this.g,new qa)},en.prototype.ra=function(){Ft(this.g,"b")},jr.prototype.createWebChannel=jr.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,yc=function(){return new jr},vc=function(){return Dr()},_c=Oe,Ps={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nr.NO_ERROR=0,Nr.TIMEOUT=8,Nr.HTTP_ERROR=6,Jr=Nr,ia.COMPLETE="complete",pc=ia,Zo.EventType=On,On.OPEN="a",On.CLOSE="b",On.ERROR="c",On.MESSAGE="d",Nt.prototype.listen=Nt.prototype.K,Wn=Zo,mc=qn,pt.prototype.listenOnce=pt.prototype.L,pt.prototype.getLastError=pt.prototype.Ka,pt.prototype.getLastErrorCode=pt.prototype.Ba,pt.prototype.getStatus=pt.prototype.Z,pt.prototype.getResponseJson=pt.prototype.Oa,pt.prototype.getResponseText=pt.prototype.oa,pt.prototype.send=pt.prototype.ea,pt.prototype.setWithCredentials=pt.prototype.Ha,gc=pt}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});const tu="@firebase/firestore";/**
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
 */class Mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Sn="10.13.1";/**
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
 */const Ge=new uc("@firebase/firestore");function Hn(){return Ge.logLevel}function q(n,...t){if(Ge.logLevel<=rt.DEBUG){const e=t.map(to);Ge.debug(`Firestore (${Sn}): ${n}`,...e)}}function me(n,...t){if(Ge.logLevel<=rt.ERROR){const e=t.map(to);Ge.error(`Firestore (${Sn}): ${n}`,...e)}}function pn(n,...t){if(Ge.logLevel<=rt.WARN){const e=t.map(to);Ge.warn(`Firestore (${Sn}): ${n}`,...e)}}function to(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function J(n="Unexpected state"){const t=`FIRESTORE (${Sn}) INTERNAL ASSERTION FAILED: `+n;throw me(t),new Error(t)}function At(n,t){n||J()}function et(n,t){return n}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Rn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ec{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Mt.UNAUTHENTICATED))}shutdown(){}}class od{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ad{constructor(t){this.t=t,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new qe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new qe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(At(typeof r.accessToken=="string"),new Ec(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return At(t===null||typeof t=="string"),new Mt(t)}}class ud{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ud(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ld{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(At(typeof e.token=="string"),this.R=e.token,new ld(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class dd{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=fd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function at(n,t){return n<t?-1:n>t?1:0}function _n(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class jt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return jt.fromMillis(Date.now())}static fromDate(t){return jt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new jt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?at(this.nanoseconds,t.nanoseconds):at(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(t){this.timestamp=t}static fromTimestamp(t){return new X(t)}static min(){return new X(new jt(0,0))}static max(){return new X(new jt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sr{constructor(t,e,r){e===void 0?e=0:e>t.length&&J(),r===void 0?r=t.length-e:r>t.length-e&&J(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return sr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class _t extends sr{construct(t,e,r){return new _t(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new _t(e)}static emptyPath(){return new _t([])}}const gd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends sr{construct(t,e,r){return new Bt(t,e,r)}static isValidIdentifier(t){return gd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Bt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Bt(e)}static emptyPath(){return new Bt([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(_t.fromString(t))}static fromName(t){return new W(_t.fromString(t).popFirst(5))}static empty(){return new W(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&_t.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return _t.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new _t(t.slice()))}}function md(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new jt(e+1,0):new jt(e,r));return new Se(s,W.empty(),t)}function pd(n){return new Se(n.readTime,n.key,-1)}class Se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Se(X.min(),W.empty(),-1)}static max(){return new Se(X.max(),W.empty(),-1)}}function _d(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:at(n.largestBatchId,t.largestBatchId))}/**
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
 */const vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function eo(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==vd)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new L((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof L?e:L.resolve(e)}catch(e){return L.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):L.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):L.reject(e)}static resolve(t){return new L((e,r)=>{e(t)})}static reject(t){return new L((e,r)=>{r(t)})}static waitFor(t){return new L((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=L.resolve(!1);for(const r of t)e=e.next(s=>s?L.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new L((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(d=>{a[f]=d,++c,c===o&&r(a)},d=>s(d))}})}static doWhile(t,e){return new L((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Ed(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class no{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}no.oe=-1;function yi(n){return n==null}function bs(n){return n===0&&1/n==-1/0}/**
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
 */function eu(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ei(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Td(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||Pt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Kr(this.root,t,this.comparator,!0)}}class Kr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=o??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Pt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const t=this.left.check();if(t!==this.right.check())throw J();return t+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class bt{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(t){return new nu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new bt(this.comparator);return e.data=t,e}}class nu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(t){this.fields=t,t.sort(Bt.comparator)}static empty(){return new Te([])}unionWith(t){let e=new bt(Bt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _n(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Tc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tc("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return at(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Ad=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ce(n){if(At(!!n),typeof n=="string"){let t=0;const e=Ad.exec(n);if(At(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vt(n.seconds),nanos:vt(n.nanos)}}function vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ke(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
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
 */function ro(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function io(n){const t=n.mapValue.fields.__previous_value__;return ro(t)?io(t):t}function or(n){const t=Ce(n.mapValue.fields.__local_write_time__.timestampValue);return new jt(t.seconds,t.nanos)}/**
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
 */class Id{constructor(t,e,r,s,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class ar{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ar&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function He(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ro(n)?4:Rd(n)?9007199254740991:wd(n)?10:11:J()}function ne(n,t){if(n===t)return!0;const e=He(n);if(e!==He(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return or(n).isEqual(or(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ce(s.timestampValue),c=Ce(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ke(s.bytesValue).isEqual(Ke(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return vt(s.geoPointValue.latitude)===vt(o.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return vt(s.integerValue)===vt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=vt(s.doubleValue),c=vt(o.doubleValue);return a===c?bs(a)===bs(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return _n(n.arrayValue.values||[],t.arrayValue.values||[],ne);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(eu(a)!==eu(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!ne(a[h],c[h])))return!1;return!0}(n,t);default:return J()}}function ur(n,t){return(n.values||[]).find(e=>ne(e,t))!==void 0}function vn(n,t){if(n===t)return 0;const e=He(n),r=He(t);if(e!==r)return at(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return at(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=vt(o.integerValue||o.doubleValue),h=vt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ru(n.timestampValue,t.timestampValue);case 4:return ru(or(n),or(t));case 5:return at(n.stringValue,t.stringValue);case 6:return function(o,a){const c=Ke(o),h=Ke(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const d=at(c[f],h[f]);if(d!==0)return d}return at(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=at(vt(o.latitude),vt(a.latitude));return c!==0?c:at(vt(o.longitude),vt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return iu(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,d;const A=o.fields||{},I=a.fields||{},w=(c=A.value)===null||c===void 0?void 0:c.arrayValue,R=(h=I.value)===null||h===void 0?void 0:h.arrayValue,C=at(((f=w==null?void 0:w.values)===null||f===void 0?void 0:f.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:iu(w,R)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Hr.mapValue&&a===Hr.mapValue)return 0;if(o===Hr.mapValue)return 1;if(a===Hr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},d=Object.keys(f);h.sort(),d.sort();for(let A=0;A<h.length&&A<d.length;++A){const I=at(h[A],d[A]);if(I!==0)return I;const w=vn(c[h[A]],f[d[A]]);if(w!==0)return w}return at(h.length,d.length)}(n.mapValue,t.mapValue);default:throw J()}}function ru(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return at(n,t);const e=Ce(n),r=Ce(t),s=at(e.seconds,r.seconds);return s!==0?s:at(e.nanos,r.nanos)}function iu(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=vn(e[s],r[s]);if(o)return o}return at(e.length,r.length)}function yn(n){return Vs(n)}function Vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ce(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ke(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return W.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Vs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Vs(e.fields[a])}`;return s+"}"}(n.mapValue):J()}function Ds(n){return!!n&&"integerValue"in n}function so(n){return!!n&&"arrayValue"in n}function su(n){return!!n&&"nullValue"in n}function ou(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fs(n){return!!n&&"mapValue"in n}function wd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Yn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ei(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Yn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Yn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Rd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class te{constructor(t){this.value=t}static empty(){return new te({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!fs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yn(e)}setAll(t){let e=Bt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Yn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());fs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ne(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ei(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new te(Yn(this.value))}}/**
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
 */class xt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new xt(t,0,X.min(),X.min(),X.min(),te.empty(),0)}static newFoundDocument(t,e,r,s){return new xt(t,1,e,X.min(),r,s,0)}static newNoDocument(t,e){return new xt(t,2,e,X.min(),X.min(),te.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,X.min(),X.min(),te.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=te.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class li{constructor(t,e){this.position=t,this.inclusive=e}}function au(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),e.key):r=vn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ne(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class hi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Sd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ac{}class wt extends Ac{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Pd(t,e,r):e==="array-contains"?new Dd(t,r):e==="in"?new Nd(t,r):e==="not-in"?new Ld(t,r):e==="array-contains-any"?new Od(t,r):new wt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bd(t,r):new Vd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(vn(e,this.value)):e!==null&&He(this.value)===He(e)&&this.matchesComparison(vn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Ac{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new re(t,e)}matches(t){return Ic(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ic(n){return n.op==="and"}function wc(n){return Cd(n)&&Ic(n)}function Cd(n){for(const t of n.filters)if(t instanceof re)return!1;return!0}function Ns(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+yn(n.value);if(wc(n))return n.filters.map(t=>Ns(t)).join(",");{const t=n.filters.map(e=>Ns(e)).join(",");return`${n.op}(${t})`}}function Rc(n,t){return n instanceof wt?function(r,s){return s instanceof wt&&r.op===s.op&&r.field.isEqual(s.field)&&ne(r.value,s.value)}(n,t):n instanceof re?function(r,s){return s instanceof re&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Rc(a,s.filters[c]),!0):!1}(n,t):void J()}function Sc(n){return n instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${yn(e.value)}`}(n):n instanceof re?function(e){return e.op.toString()+" {"+e.getFilters().map(Sc).join(" ,")+"}"}(n):"Filter"}class Pd extends wt{constructor(t,e,r){super(t,e,r),this.key=W.fromName(r.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class bd extends wt{constructor(t,e){super(t,"in",e),this.keys=Cc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vd extends wt{constructor(t,e){super(t,"not-in",e),this.keys=Cc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>W.fromName(r.referenceValue))}class Dd extends wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return so(e)&&ur(e.arrayValue,this.value)}}class Nd extends wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ur(this.value.arrayValue,e)}}class Ld extends wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ur(this.value.arrayValue,e)}}class Od extends wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!so(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ur(this.value.arrayValue,r))}}/**
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
 */class kd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function cu(n,t=null,e=[],r=[],s=null,o=null,a=null){return new kd(n,t,e,r,s,o,a)}function oo(n){const t=et(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ns(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),yi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>yn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>yn(r)).join(",")),t.ue=e}return t.ue}function ao(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Sd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Rc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uu(n.startAt,t.startAt)&&uu(n.endAt,t.endAt)}function Ls(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ti{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Md(n,t,e,r,s,o,a,c){return new Ti(n,t,e,r,s,o,a,c)}function Pc(n){return new Ti(n)}function lu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xd(n){return n.collectionGroup!==null}function Jn(n){const t=et(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new bt(Bt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new hi(o,r))}),e.has(Bt.keyField().canonicalString())||t.ce.push(new hi(Bt.keyField(),r))}return t.ce}function ee(n){const t=et(n);return t.le||(t.le=Fd(t,Jn(n))),t.le}function Fd(n,t){if(n.limitType==="F")return cu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new hi(s.field,o)});const e=n.endAt?new li(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new li(n.startAt.position,n.startAt.inclusive):null;return cu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Os(n,t,e){return new Ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ai(n,t){return ao(ee(n),ee(t))&&n.limitType===t.limitType}function bc(n){return`${oo(ee(n))}|lt:${n.limitType}`}function rn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Sc(s)).join(", ")}]`),yi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>yn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>yn(s)).join(",")),`Target(${r})`}(ee(n))}; limitType=${n.limitType})`}function Ii(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):W.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Jn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=au(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,Jn(r),s)||r.endAt&&!function(a,c,h){const f=au(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,Jn(r),s))}(n,t)}function Ud(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vc(n){return(t,e)=>{let r=!1;for(const s of Jn(n)){const o=Bd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Bd(n,t,e){const r=n.field.isKeyField()?W.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?vn(h,f):J()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Cn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ei(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Td(this.inner)}size(){return this.innerSize}}/**
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
 */const $d=new yt(W.comparator);function Pe(){return $d}const Dc=new yt(W.comparator);function Qn(...n){let t=Dc;for(const e of n)t=t.insert(e.key,e);return t}function qd(n){let t=Dc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Be(){return Zn()}function Nc(){return Zn()}function Zn(){return new Cn(n=>n.toString(),(n,t)=>n.isEqual(t))}const jd=new bt(W.comparator);function it(...n){let t=jd;for(const e of n)t=t.add(e);return t}const zd=new bt(at);function Gd(){return zd}/**
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
 */function Kd(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bs(t)?"-0":t}}function Hd(n){return{integerValue:""+n}}/**
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
 */class wi{constructor(){this._=void 0}}function Wd(n,t,e){return n instanceof ks?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ro(o)&&(o=io(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof fi?Lc(n,t):n instanceof di?Oc(n,t):function(s,o){const a=Xd(s,o),c=hu(a)+hu(s.Pe);return Ds(a)&&Ds(s.Pe)?Hd(c):Kd(s.serializer,c)}(n,t)}function Qd(n,t,e){return n instanceof fi?Lc(n,t):n instanceof di?Oc(n,t):e}function Xd(n,t){return n instanceof Ms?function(r){return Ds(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ks extends wi{}class fi extends wi{constructor(t){super(),this.elements=t}}function Lc(n,t){const e=kc(t);for(const r of n.elements)e.some(s=>ne(s,r))||e.push(r);return{arrayValue:{values:e}}}class di extends wi{constructor(t){super(),this.elements=t}}function Oc(n,t){let e=kc(t);for(const r of n.elements)e=e.filter(s=>!ne(s,r));return{arrayValue:{values:e}}}class Ms extends wi{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function hu(n){return vt(n.integerValue||n.doubleValue)}function kc(n){return so(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof fi&&s instanceof fi||r instanceof di&&s instanceof di?_n(r.elements,s.elements,ne):r instanceof Ms&&s instanceof Ms?ne(r.Pe,s.Pe):r instanceof ks&&s instanceof ks}(n.transform,t.transform)}class je{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new je}static exists(t){return new je(void 0,t)}static updateTime(t){return new je(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class uo{}function Mc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Zd(n.key,je.none()):new co(n.key,n.data,je.none());{const e=n.data,r=te.empty();let s=new bt(Bt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Ri(n.key,r,new Te(s.toArray()),je.none())}}function Jd(n,t,e){n instanceof co?function(s,o,a){const c=s.value.clone(),h=du(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Ri?function(s,o,a){if(!Zr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=du(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(xc(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function tr(n,t,e,r){return n instanceof co?function(o,a,c,h){if(!Zr(o.precondition,a))return c;const f=o.value.clone(),d=gu(o.fieldTransforms,h,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ri?function(o,a,c,h){if(!Zr(o.precondition,a))return c;const f=gu(o.fieldTransforms,h,a),d=a.data;return d.setAll(xc(o)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,a,c){return Zr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function fu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_n(r,s,(o,a)=>Yd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class co extends uo{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ri extends uo{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function xc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function du(n,t,e){const r=new Map;At(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Qd(a,c,e[s]))}return r}function gu(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Wd(o,a,t))}return r}class Zd extends uo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Jd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=tr(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=tr(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Nc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Mc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),it())}isEqual(t){return this.batchId===t.batchId&&_n(this.mutations,t.mutations,(e,r)=>fu(e,r))&&_n(this.baseMutations,t.baseMutations,(e,r)=>fu(e,r))}}/**
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
 */class eg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ng{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Tt,tt;function Fc(n){if(n===void 0)return me("GRPC error has no .code"),F.UNKNOWN;switch(n){case Tt.OK:return F.OK;case Tt.CANCELLED:return F.CANCELLED;case Tt.UNKNOWN:return F.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return F.INTERNAL;case Tt.UNAVAILABLE:return F.UNAVAILABLE;case Tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Tt.NOT_FOUND:return F.NOT_FOUND;case Tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Tt.ABORTED:return F.ABORTED;case Tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Tt.DATA_LOSS:return F.DATA_LOSS;default:return J()}}(tt=Tt||(Tt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rg(){return new TextEncoder}/**
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
 */const ig=new $e([4294967295,4294967295],0);function mu(n){const t=rg().encode(n),e=new dc;return e.update(t),new Uint8Array(e.digest())}function pu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new $e([e,r],0),new $e([s,o],0)]}class lo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Xn(`Invalid padding: ${e}`);if(r<0)throw new Xn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Xn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Xn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=$e.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply($e.fromNumber(r)));return s.compare(ig)===1&&(s=new $e([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=mu(t),[r,s]=pu(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new lo(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=mu(t),[r,s]=pu(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Xn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Si{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,vr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Si(X.min(),s,new yt(at),Pe(),it())}}class vr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new vr(r,e,it(),it(),it())}}/**
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
 */class ti{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Uc{constructor(t,e){this.targetId=t,this.me=e}}class Bc{constructor(t,e,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class _u{constructor(){this.fe=0,this.ge=yu(),this.pe=Vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=it(),e=it(),r=it();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:J()}}),new vr(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=yu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,At(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sg{constructor(t){this.Le=t,this.Be=new Map,this.ke=Pe(),this.qe=vu(),this.Qe=new yt(at)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:J()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ls(o))if(r===0){const a=new W(o.path);this.Ue(e,a,xt.newNoDocument(a,X.min()))}else At(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),h=c?this.Xe(c,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=Ke(r).toUint8Array()}catch(h){if(h instanceof Tc)return pn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new lo(a,s,o)}catch(h){return pn(h instanceof Xn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Je(a);if(c){if(o.current&&Ls(c.target)){const h=new W(c.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,xt.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=it();this.qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Si(t,e,this.Qe,this.ke,r);return this.ke=Pe(),this.qe=vu(),this.Qe=new yt(at),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new _u,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new bt(at),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new _u),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function vu(){return new yt(W.comparator)}function yu(){return new yt(W.comparator)}const og={asc:"ASCENDING",desc:"DESCENDING"},ag={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ug={and:"AND",or:"OR"};class cg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function xs(n,t){return n.useProto3Json||yi(t)?t:{value:t}}function lg(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hn(n){return At(!!n),X.fromTimestamp(function(e){const r=Ce(e);return new jt(r.seconds,r.nanos)}(n))}function fg(n,t){return Fs(n,t).canonicalString()}function Fs(n,t){const e=function(s){return new _t(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function $c(n){const t=_t.fromString(n);return At(Kc(t)),t}function ds(n,t){const e=$c(t);if(e.get(1)!==n.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(jc(e))}function qc(n,t){return fg(n.databaseId,t)}function dg(n){const t=$c(n);return t.length===4?_t.emptyPath():jc(t)}function Eu(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jc(n){return At(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function gg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:J()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,d){return f.useProto3Json?(At(d===void 0||typeof d=="string"),Vt.fromBase64String(d||"")):(At(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Vt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const d=f.code===void 0?F.UNKNOWN:Fc(f.code);return new K(d,f.message||"")}(a);e=new Bc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ds(n,r.document.name),o=hn(r.document.updateTime),a=r.document.createTime?hn(r.document.createTime):X.min(),c=new te({mapValue:{fields:r.document.fields}}),h=xt.newFoundDocument(s,o,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];e=new ti(f,d,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ds(n,r.document),o=r.readTime?hn(r.readTime):X.min(),a=xt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new ti([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ds(n,r.document),o=r.removedTargetIds||[];e=new ti([],o,s,null)}else{if(!("filter"in t))return J();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new ng(s,o),c=r.targetId;e=new Uc(c,a)}}return e}function mg(n,t){return{documents:[qc(n,t.path)]}}function pg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=qc(n,s);const o=function(f){if(f.length!==0)return Gc(re.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(d=>function(I){return{field:sn(I.field),direction:yg(I.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=xs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function _g(n){let t=dg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){At(r===1);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let o=[];e.where&&(o=function(A){const I=zc(A);return I instanceof re&&wc(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(A){return A.map(I=>function(R){return new hi(on(R.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(I))}(e.orderBy));let c=null;e.limit&&(c=function(A){let I;return I=typeof A=="object"?A.value:A,yi(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(A){const I=!!A.before,w=A.values||[];return new li(w,I)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const I=!A.before,w=A.values||[];return new li(w,I)}(e.endAt)),Md(t,s,a,o,c,"F",h,f)}function vg(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function zc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=on(e.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=on(e.unaryFilter.field);return wt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=on(e.unaryFilter.field);return wt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(e.unaryFilter.field);return wt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(n):n.fieldFilter!==void 0?function(e){return wt.create(on(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return re.create(e.compositeFilter.filters.map(r=>zc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(n):J()}function yg(n){return og[n]}function Eg(n){return ag[n]}function Tg(n){return ug[n]}function sn(n){return{fieldPath:n.canonicalString()}}function on(n){return Bt.fromServerFormat(n.fieldPath)}function Gc(n){return n instanceof wt?function(e){if(e.op==="=="){if(ou(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NAN"}};if(su(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ou(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NAN"}};if(su(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(e.field),op:Eg(e.op),value:e.value}}}(n):n instanceof re?function(e){const r=e.getFilters().map(s=>Gc(s));return r.length===1?r[0]:{compositeFilter:{op:Tg(e.op),filters:r}}}(n):J()}function Kc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ae{constructor(t,e,r,s,o=X.min(),a=X.min(),c=Vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Ag{constructor(t){this.ct=t}}function Ig(n){const t=_g({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class wg{constructor(){this.un=new Rg}addToCollectionParentIndex(t,e){return this.un.add(e),L.resolve()}getCollectionParents(t,e){return L.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return L.resolve()}deleteFieldIndex(t,e){return L.resolve()}deleteAllFieldIndexes(t){return L.resolve()}createTargetIndexes(t,e){return L.resolve()}getDocumentsMatchingTarget(t,e){return L.resolve(null)}getIndexType(t,e){return L.resolve(0)}getFieldIndexes(t,e){return L.resolve([])}getNextCollectionGroupToUpdate(t){return L.resolve(null)}getMinOffset(t,e){return L.resolve(Se.min())}getMinOffsetFromCollectionGroup(t,e){return L.resolve(Se.min())}updateCollectionGroup(t,e,r){return L.resolve()}updateIndexEntries(t,e){return L.resolve()}}class Rg{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new bt(_t.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new bt(_t.comparator)).toArray()}}/**
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
 */class En{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new En(0)}static kn(){return new En(-1)}}/**
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
 */class Sg{constructor(){this.changes=new Cn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?L.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Cg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Pg{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&tr(r.mutation,s,Te.empty(),jt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,it()).next(()=>r))}getLocalViewOfDocuments(t,e,r=it()){const s=Be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=Qn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,it()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Pe();const a=Zn(),c=function(){return Zn()}();return e.forEach((h,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Ri)?o=o.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),tr(d.mutation,f,d.mutation.getFieldMask(),jt.now())):a.set(f.key,Te.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var A;return c.set(f,new Cg(d,(A=a.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Zn();let s=new yt((a,c)=>a-c),o=it();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let d=r.get(h)||Te.empty();d=c.applyToLocalView(f,d),r.set(h,d);const A=(s.get(c.batchId)||it()).add(h);s=s.insert(c.batchId,A)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,d=h.value,A=Nc();d.forEach(I=>{if(!o.has(I)){const w=Mc(e.get(I),r.get(I));w!==null&&A.set(I,w),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,A))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):L.resolve(Be());let c=-1,h=o;return a.next(f=>L.forEach(f,(d,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(d)?L.resolve():this.remoteDocumentCache.getEntry(t,d).next(I=>{h=h.insert(d,I)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,it())).next(d=>({batchId:c,changes:qd(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next(r=>{let s=Qn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=Qn();return this.indexManager.getCollectionParents(t,o).next(c=>L.forEach(c,h=>{const f=function(A,I){return new Ti(I,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((A,I)=>{a=a.insert(A,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,xt.newInvalidDocument(d)))});let c=Qn();return a.forEach((h,f)=>{const d=o.get(h);d!==void 0&&tr(d.mutation,f,Te.empty(),jt.now()),Ii(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class bg{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return L.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(e)),L.resolve()}getNamedQuery(t,e){return L.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Ig(s.bundledQuery),readTime:hn(s.readTime)}}(e)),L.resolve()}}/**
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
 */class Vg{constructor(){this.overlays=new yt(W.comparator),this.Ir=new Map}getOverlay(t,e){return L.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Be();return L.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),L.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(t,e,r){const s=Be(),o=e.length+1,a=new W(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return L.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new yt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=o.get(f.largestBatchId);d===null&&(d=Be(),o=o.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=Be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,d)=>c.set(f,d)),!(c.size()>=s)););return L.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new eg(e,r));let o=this.Ir.get(e);o===void 0&&(o=it(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
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
 */class Dg{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return L.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,L.resolve()}}/**
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
 */class ho{constructor(){this.Tr=new bt(St.Er),this.dr=new bt(St.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new St(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new St(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new W(new _t([])),r=new St(e,t),s=new St(e,t+1),o=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new W(new _t([])),r=new St(e,t),s=new St(e,t+1);let o=it();return this.dr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new St(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return W.comparator(t.key,e.key)||at(t.wr,e.wr)}static Ar(t,e){return at(t.wr,e.wr)||W.comparator(t.key,e.key)}}/**
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
 */class Ng{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new bt(St.Er)}checkEmpty(t){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tg(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new St(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(t,e){return L.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),s=new St(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);o.push(c)}),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new bt(at);return e.forEach(s=>{const o=new St(s,0),a=new St(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],c=>{r=r.add(c.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;W.isDocumentKey(o)||(o=o.child(""));const a=new St(new W(o),0);let c=new bt(at);return this.br.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.wr)),!0)},a),L.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){At(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(e.mutations,s=>{const o=new St(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new St(e,0),s=this.br.firstAfterOrEqual(r);return L.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,L.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Lg{constructor(t){this.Mr=t,this.docs=function(){return new yt(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return L.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=Pe();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Pe();const a=e.path,c=new W(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:d}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||_d(pd(d),r)<=0||(s.has(d.key)||Ii(e,d))&&(o=o.insert(d.key,d.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(t,e,r,s){J()}Or(t,e){return L.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Og(this)}getSize(t){return L.resolve(this.size)}}class Og extends Sg{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),L.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class kg{constructor(t){this.persistence=t,this.Nr=new Cn(e=>oo(e),ao),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ho,this.targetCount=0,this.kr=En.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),L.resolve()}getLastRemoteSnapshotVersion(t){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return L.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),L.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new En(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,L.resolve()}updateTargetData(t,e){return this.Kn(e),L.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,L.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),L.waitFor(o).next(()=>s)}getTargetCount(t){return L.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return L.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),L.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),L.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),L.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return L.resolve(r)}containsKey(t,e){return L.resolve(this.Br.containsKey(e))}}/**
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
 */class Mg{constructor(t,e){this.qr={},this.overlays={},this.Qr=new no(0),this.Kr=!1,this.Kr=!0,this.$r=new Dg,this.referenceDelegate=t(this),this.Ur=new kg(this),this.indexManager=new wg,this.remoteDocumentCache=function(s){return new Lg(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ag(e),this.Gr=new bg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Vg,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new Ng(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){q("MemoryPersistence","Starting transaction:",t);const s=new xg(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class xg extends yd{constructor(t){super(),this.currentSequenceNumber=t}}class fo{constructor(t){this.persistence=t,this.Jr=new ho,this.Yr=null}static Zr(t){return new fo(t)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),L.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),L.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,X.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return L.or([()=>L.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class go{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=it(),s=it();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new go(t,e.fromCache,r,s)}}/**
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
 */class Fg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ug{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return $h()?8:Ed(Uh())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fg;return this.Xi(t,e,a).next(c=>{if(o.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(Hn()<=rt.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",rn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Hn()<=rt.DEBUG&&q("QueryEngine","Query:",rn(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Hn()<=rt.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",rn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ee(e))):L.resolve())}Yi(t,e){if(lu(e))return L.resolve(null);let r=ee(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Os(e,null,"F"),r=ee(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=it(...o);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.ts(e,c);return this.ns(e,f,a,h.readTime)?this.Yi(t,Os(e,null,"F")):this.rs(t,f,e,h)}))})))}Zi(t,e,r,s){return lu(e)||s.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const a=this.ts(e,o);return this.ns(e,a,r,s)?L.resolve(null):(Hn()<=rt.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rn(e)),this.rs(t,a,e,md(s,-1)).next(c=>c))})}ts(t,e){let r=new bt(Vc(t));return e.forEach((s,o)=>{Ii(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return Hn()<=rt.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",rn(e)),this.Ji.getDocumentsMatchingQuery(t,e,Se.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class Bg{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new yt(at),this._s=new Cn(o=>oo(o),ao),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function $g(n,t,e,r){return new Bg(n,t,e,r)}async function Hc(n,t){const e=et(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=it();for(const f of s){a.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}for(const f of o){c.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}return e.localDocuments.getDocuments(r,h).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function Wc(n){const t=et(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function qg(n,t){const e=et(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((d,A)=>{const I=s.get(A);if(!I)return;c.push(e.Ur.removeMatchingKeys(o,d.removedDocuments,A).next(()=>e.Ur.addMatchingKeys(o,d.addedDocuments,A)));let w=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?w=w.withResumeToken(Vt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(A,w),function(C,P,N){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(I,w,d)&&c.push(e.Ur.updateTargetData(o,w))});let h=Pe(),f=it();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,d))}),c.push(jg(o,a,t.documentUpdates).next(d=>{h=d.Ps,f=d.Is})),!r.isEqual(X.min())){const d=e.Ur.getLastRemoteSnapshotVersion(o).next(A=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(d)}return L.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.os=s,o))}function jg(n,t,e){let r=it(),s=it();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Pe();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(X.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Ps:a,Is:s}})}function zg(n,t){const e=et(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(o=>o?(s=o,L.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new Ae(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function Us(n,t,e){const r=et(n),s=r.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!_r(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Tu(n,t,e){const r=et(n);let s=X.min(),o=it();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,d){const A=et(h),I=A._s.get(d);return I!==void 0?L.resolve(A.os.get(I)):A.Ur.getTargetData(f,d)}(r,a,ee(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:X.min(),e?o:it())).next(c=>(Gg(r,Ud(t),c),{documents:c,Ts:o})))}function Gg(n,t,e){let r=n.us.get(t)||X.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(t,r)}class Au{constructor(){this.activeTargetIds=Gd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kg{constructor(){this.so=new Au,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Au,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Hg{_o(t){}shutdown(){}}/**
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
 */class Iu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wr=null;function gs(){return Wr===null?Wr=function(){return 268435456+Math.round(2147483648*Math.random())}():Wr++,"0x"+Wr.toString(16)}/**
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
 */const Wg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Qg{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const kt="WebChannelConnection";class Xg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,a){const c=gs(),h=this.xo(e,r.toUriEncodedString());q("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,a),this.No(e,h,f,s).then(d=>(q("RestConnection",`Received RPC '${e}' ${c}: `,d),d),d=>{throw pn("RestConnection",`RPC '${e}' ${c} failed with error: `,d,"url: ",h,"request:",s),d})}Lo(e,r,s,o,a,c){return this.Mo(e,r,s,o,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}xo(e,r){const s=Wg[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=gs();return new Promise((a,c)=>{const h=new gc;h.setWithCredentials(!0),h.listenOnce(pc.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Jr.NO_ERROR:const d=h.getResponseJson();q(kt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case Jr.TIMEOUT:q(kt,`RPC '${t}' ${o} timed out`),c(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case Jr.HTTP_ERROR:const A=h.getStatus();if(q(kt,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const w=I==null?void 0:I.error;if(w&&w.status&&w.message){const R=function(P){const N=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(N)>=0?N:F.UNKNOWN}(w.status);c(new K(R,w.message))}else c(new K(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new K(F.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(kt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);q(kt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=gs(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=yc(),c=vc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new mc({})),this.Oo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const d=o.join("");q(kt,`Creating RPC '${t}' stream ${s}: ${d}`,h);const A=a.createWebChannel(d,h);let I=!1,w=!1;const R=new Qg({Io:P=>{w?q(kt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(I||(q(kt,`Opening RPC '${t}' stream ${s} transport.`),A.open(),I=!0),q(kt,`RPC '${t}' stream ${s} sending:`,P),A.send(P))},To:()=>A.close()}),C=(P,N,D)=>{P.listen(N,V=>{try{D(V)}catch(O){setTimeout(()=>{throw O},0)}})};return C(A,Wn.EventType.OPEN,()=>{w||(q(kt,`RPC '${t}' stream ${s} transport opened.`),R.yo())}),C(A,Wn.EventType.CLOSE,()=>{w||(w=!0,q(kt,`RPC '${t}' stream ${s} transport closed`),R.So())}),C(A,Wn.EventType.ERROR,P=>{w||(w=!0,pn(kt,`RPC '${t}' stream ${s} transport errored:`,P),R.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),C(A,Wn.EventType.MESSAGE,P=>{var N;if(!w){const D=P.data[0];At(!!D);const V=D,O=V.error||((N=V[0])===null||N===void 0?void 0:N.error);if(O){q(kt,`RPC '${t}' stream ${s} received error:`,O);const M=O.status;let k=function(v){const E=Tt[v];if(E!==void 0)return Fc(E)}(M),_=O.message;k===void 0&&(k=F.INTERNAL,_="Unknown error status: "+M+" with message "+O.message),w=!0,R.So(new K(k,_)),A.close()}else q(kt,`RPC '${t}' stream ${s} received:`,D),R.bo(D)}}),C(c,_c.STAT_EVENT,P=>{P.stat===Ps.PROXY?q(kt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ps.NOPROXY&&q(kt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function ms(){return typeof document<"u"?document:null}/**
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
 */function Qc(n){return new cg(n,!0)}/**
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
 */class Xc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Yg{constructor(t,e,r,s,o,a,c,h){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Xc(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===F.RESOURCE_EXHAUSTED?(me(e.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jg extends Yg{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=gg(this.serializer,t),r=function(o){if(!("targetChange"in o))return X.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?hn(a.readTime):X.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=Eu(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ls(h)?{documents:mg(o,h)}:{query:pg(o,h)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=hg(o,a.resumeToken);const f=xs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(X.min())>0){c.readTime=lg(o,a.snapshotVersion.toTimestamp());const f=xs(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=vg(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=Eu(this.serializer),e.removeTarget=t,this.a_(e)}}/**
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
 */class Zg extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Fs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,Fs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(F.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class tm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(me(e),this.D_=!1):q("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class em{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Er(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=et(h);f.L_.add(4),await yr(f),f.q_.set("Unknown"),f.L_.delete(4),await Ci(f)}(this))})}),this.q_=new tm(r,s)}}async function Ci(n){if(Er(n))for(const t of n.B_)await t(!0)}async function yr(n){for(const t of n.B_)await t(!1)}function Yc(n,t){const e=et(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),vo(e)?_o(e):Pn(e).r_()&&po(e,t))}function mo(n,t){const e=et(n),r=Pn(e);e.N_.delete(t),r.r_()&&Jc(e,t),e.N_.size===0&&(r.r_()?r.o_():Er(e)&&e.q_.set("Unknown"))}function po(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(X.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Pn(n).A_(t)}function Jc(n,t){n.Q_.xe(t),Pn(n).R_(t)}function _o(n){n.Q_=new sg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Pn(n).start(),n.q_.v_()}function vo(n){return Er(n)&&!Pn(n).n_()&&n.N_.size>0}function Er(n){return et(n).L_.size===0}function Zc(n){n.Q_=void 0}async function nm(n){n.q_.set("Online")}async function rm(n){n.N_.forEach((t,e)=>{po(n,t)})}async function im(n,t){Zc(n),vo(n)?(n.q_.M_(t),_o(n)):n.q_.set("Unknown")}async function sm(n,t,e){if(n.q_.set("Online"),t instanceof Bc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await wu(n,r)}else if(t instanceof ti?n.Q_.Ke(t):t instanceof Uc?n.Q_.He(t):n.Q_.We(t),!e.isEqual(X.min()))try{const r=await Wc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.Q_.rt(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const d=o.N_.get(f);d&&o.N_.set(f,d.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const d=o.N_.get(h);if(!d)return;o.N_.set(h,d.withResumeToken(Vt.EMPTY_BYTE_STRING,d.snapshotVersion)),Jc(o,h);const A=new Ae(d.target,h,f,d.sequenceNumber);po(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await wu(n,r)}}async function wu(n,t,e){if(!_r(t))throw t;n.L_.add(1),await yr(n),n.q_.set("Offline"),e||(e=()=>Wc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Ci(n)})}async function Ru(n,t){const e=et(n);e.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Er(e);e.L_.add(3),await yr(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Ci(e)}async function om(n,t){const e=et(n);t?(e.L_.delete(2),await Ci(e)):t||(e.L_.add(2),await yr(e),e.q_.set("Unknown"))}function Pn(n){return n.K_||(n.K_=function(e,r,s){const o=et(e);return o.w_(),new Jg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:nm.bind(null,n),Ro:rm.bind(null,n),mo:im.bind(null,n),d_:sm.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),vo(n)?_o(n):n.q_.set("Unknown")):(await n.K_.stop(),Zc(n))})),n.K_}/**
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
 */class yo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new yo(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tl(n,t){if(me("AsyncQueue",`${t}: ${n}`),_r(n))return new K(F.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class fn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||W.comparator(e.key,r.key):(e,r)=>W.comparator(e.key,r.key),this.keyedMap=Qn(),this.sortedSet=new yt(this.comparator)}static emptySet(t){return new fn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new fn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Su{constructor(){this.W_=new yt(W.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):J():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Tn{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Tn(t,e,fn.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ai(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class am{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class um{constructor(){this.queries=Cu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=et(e),o=s.queries;s.queries=Cu(),o.forEach((a,c)=>{for(const h of c.j_)h.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function Cu(){return new Cn(n=>bc(n),Ai)}async function cm(n,t){const e=et(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(r=2):(o=new am,r=t.J_()?0:1);try{switch(r){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=tl(a,`Initialization of query '${rn(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&Eo(e)}async function lm(n,t){const e=et(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function hm(n,t){const e=et(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&Eo(e)}function fm(n,t,e){const r=et(n),s=r.queries.get(t);if(s)for(const o of s.j_)o.onError(e);r.queries.delete(t)}function Eo(n){n.Y_.forEach(t=>{t.next()})}var Bs,Pu;(Pu=Bs||(Bs={})).ea="default",Pu.Cache="cache";class dm{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Tn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=Tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Bs.Cache}}/**
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
 */class el{constructor(t){this.key=t}}class nl{constructor(t){this.key=t}}class gm{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=it(),this.mutatedKeys=it(),this.Aa=Vc(t),this.Ra=new fn(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Su,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,A)=>{const I=s.get(d),w=Ii(this.query,A)?A:null,R=!!I&&this.mutatedKeys.has(I.key),C=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;I&&w?I.data.isEqual(w.data)?R!==C&&(r.track({type:3,doc:w}),P=!0):this.ga(I,w)||(r.track({type:2,doc:w}),P=!0,(h&&this.Aa(w,h)>0||f&&this.Aa(w,f)<0)&&(c=!0)):!I&&w?(r.track({type:0,doc:w}),P=!0):I&&!w&&(r.track({type:1,doc:I}),P=!0,(h||f)&&(c=!0)),P&&(w?(a=a.add(w),o=C?o.add(d):o.delete(d)):(a=a.delete(d),o=o.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),o=o.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:c,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((d,A)=>function(w,R){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return C(w)-C(R)}(d.type,A.type)||this.Aa(d.doc,A.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],h=this.da.size===0&&this.current&&!s?1:0,f=h!==this.Ea;return this.Ea=h,a.length!==0||f?{snapshot:new Tn(this.query,t.Ra,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Su,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=it(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new nl(r))}),this.da.forEach(r=>{t.has(r)||e.push(new el(r))}),e}ba(t){this.Ta=t.Ts,this.da=it();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return Tn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class pm{constructor(t){this.key=t,this.va=!1}}class _m{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Cn(c=>bc(c),Ai),this.Ma=new Map,this.xa=new Set,this.Oa=new yt(W.comparator),this.Na=new Map,this.La=new ho,this.Ba={},this.ka=new Map,this.qa=En.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vm(n,t,e=!0){const r=al(n);let s;const o=r.Fa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await rl(r,t,e,!0),s}async function ym(n,t){const e=al(n);await rl(e,t,!0,!1)}async function rl(n,t,e,r){const s=await zg(n.localStore,ee(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await Em(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Yc(n.remoteStore,s),c}async function Em(n,t,e,r,s){n.Ka=(A,I,w)=>async function(C,P,N,D){let V=P.view.ma(N);V.ns&&(V=await Tu(C.localStore,P.query,!1).then(({documents:_})=>P.view.ma(_,V)));const O=D&&D.targetChanges.get(P.targetId),M=D&&D.targetMismatches.get(P.targetId)!=null,k=P.view.applyChanges(V,C.isPrimaryClient,O,M);return Vu(C,P.targetId,k.wa),k.snapshot}(n,A,I,w);const o=await Tu(n.localStore,t,!0),a=new gm(t,o.Ts),c=a.ma(o.documents),h=vr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);Vu(n,e,f.wa);const d=new mm(t,e,a);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function Tm(n,t,e){const r=et(n),s=r.Fa.get(t),o=r.Ma.get(s.targetId);if(o.length>1)return r.Ma.set(s.targetId,o.filter(a=>!Ai(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Us(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&mo(r.remoteStore,s.targetId),$s(r,s.targetId)}).catch(eo)):($s(r,s.targetId),await Us(r.localStore,s.targetId,!0))}async function Am(n,t){const e=et(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),mo(e.remoteStore,r.targetId))}async function il(n,t){const e=et(n);try{const r=await qg(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Na.get(o);a&&(At(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?At(a.va):s.removedDocuments.size>0&&(At(a.va),a.va=!1))}),await ol(e,r,t)}catch(r){await eo(r)}}function bu(n,t,e){const r=et(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=et(a);h.onlineState=c;let f=!1;h.queries.forEach((d,A)=>{for(const I of A.j_)I.Z_(c)&&(f=!0)}),f&&Eo(h)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Im(n,t,e){const r=et(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),o=s&&s.key;if(o){let a=new yt(W.comparator);a=a.insert(o,xt.newNoDocument(o,X.min()));const c=it().add(o),h=new Si(X.min(),new Map,new yt(at),a,c);await il(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(t),To(r)}else await Us(r.localStore,t,!1).then(()=>$s(r,t,e)).catch(eo)}function $s(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||sl(n,r)})}function sl(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(mo(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),To(n))}function Vu(n,t,e){for(const r of e)r instanceof el?(n.La.addReference(r.key,t),wm(n,r)):r instanceof nl?(q("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||sl(n,r.key)):J()}function wm(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(q("SyncEngine","New document in limbo: "+e),n.xa.add(r),To(n))}function To(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new W(_t.fromString(t)),r=n.qa.next();n.Na.set(r,new pm(e)),n.Oa=n.Oa.insert(e,r),Yc(n.remoteStore,new Ae(ee(Pc(e.path)),r,"TargetPurposeLimboResolution",no.oe))}}async function ol(n,t,e){const r=et(n),s=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,h)=>{a.push(r.Ka(h,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const A=f?!f.fromCache:(d=e==null?void 0:e.targetChanges.get(h.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(f){s.push(f);const A=go.Wi(h.targetId,f);o.push(A)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(h,f){const d=et(h);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>L.forEach(f,I=>L.forEach(I.$i,w=>d.persistence.referenceDelegate.addReference(A,I.targetId,w)).next(()=>L.forEach(I.Ui,w=>d.persistence.referenceDelegate.removeReference(A,I.targetId,w)))))}catch(A){if(!_r(A))throw A;q("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const I=A.targetId;if(!A.fromCache){const w=d.os.get(I),R=w.snapshotVersion,C=w.withLastLimboFreeSnapshotVersion(R);d.os=d.os.insert(I,C)}}}(r.localStore,o))}async function Rm(n,t){const e=et(n);if(!e.currentUser.isEqual(t)){q("SyncEngine","User change. New user:",t.toKey());const r=await Hc(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new K(F.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ol(e,r.hs)}}function Sm(n,t){const e=et(n),r=e.Na.get(t);if(r&&r.va)return it().add(r.key);{let s=it();const o=e.Ma.get(t);if(!o)return s;for(const a of o){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function al(n){const t=et(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=il.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Im.bind(null,t),t.Ca.d_=hm.bind(null,t.eventManager),t.Ca.$a=fm.bind(null,t.eventManager),t}class Du{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Qc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $g(this.persistence,new Ug,t.initialUser,this.serializer)}createPersistence(t){return new Mg(fo.Zr,this.serializer)}createSharedClientState(t){return new Kg}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rm.bind(null,this.syncEngine),await om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new um}()}createDatastore(t){const e=Qc(t.databaseInfo.databaseId),r=function(o){return new Xg(o)}(t.databaseInfo);return function(o,a,c,h){return new Zg(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new em(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>bu(this.syncEngine,e,0),function(){return Iu.D()?new Iu:new Hg}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,d){const A=new _m(s,o,a,c,h,f);return d&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=et(s);q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await yr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Pm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ga(this.observer.next,t)}error(t){this.observer.error?this.Ga(this.observer.error,t):me("Uncaught Error in snapshot listener:",t.toString())}za(){this.muted=!0}Ga(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class bm{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Mt.UNAUTHENTICATED,this.clientId=dd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=tl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ps(n,t){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Nu(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Dm(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ru(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ru(t.remoteStore,s)),n._onlineComponents=t}function Vm(n){return n.name==="FirebaseError"?n.code===F.FAILED_PRECONDITION||n.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Dm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ps(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Vm(e))throw e;pn("Error using user provided cache. Falling back to memory cache: "+e),await ps(n,new Du)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await ps(n,new Du);return n._offlineComponents}async function Nm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Nu(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Nu(n,new Cm))),n._onlineComponents}async function Lm(n){const t=await Nm(n),e=t.eventManager;return e.onListen=vm.bind(null,t.syncEngine),e.onUnlisten=Tm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ym.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Am.bind(null,t.syncEngine),e}function Om(n,t,e={}){const r=new qe;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const d=new Pm({next:I=>{a.enqueueAndForget(()=>lm(o,A)),I.fromCache&&h.source==="server"?f.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(I)},error:I=>f.reject(I)}),A=new dm(c,d,{includeMetadataChanges:!0,_a:!0});return cm(o,A)}(await Lm(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function ul(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Lu=new Map;function km(n,t,e,r){if(t===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ou(n){if(W.isDocumentKey(n))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":J()}function qs(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Mm(n);throw new K(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ku{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}km("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ul((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ao{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sd;switch(r.type){case"firstParty":return new cd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Lu.get(e);r&&(q("ComponentProvider","Removing Datastore"),Lu.delete(e),r.terminate())}(this),Promise.resolve()}}function xm(n,t,e,r={}){var s;const o=(n=qs(n,Ao))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=Mt.MOCK_USER;else{c=Fh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Mt(f)}n._authCredentials=new od(new Ec(c,h))}}/**
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
 */class Pi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pi(this.firestore,t,this._query)}}class bn{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bn(this.firestore,t,this._key)}}class dn extends Pi{constructor(t,e,r){super(t,e,Pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bn(this.firestore,null,new W(t))}withConverter(t){return new dn(this.firestore,t,this._path)}}function H_(n,t,...e){if(n=Hh(n),n instanceof Ao){const r=_t.fromString(t,...e);return Ou(r),new dn(n,null,r)}{if(!(n instanceof bn||n instanceof dn))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_t.fromString(t,...e));return Ou(r),new dn(n.firestore,null,r)}}/**
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
 */class Fm{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Xc(this,"async_queue_retry"),this.Eu=()=>{const e=ms();e&&q("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=ms();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=ms();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new qe;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!_r(t))throw t;q("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw me("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=e,e}enqueueAfterDelay(t,e,r){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=yo.createAndSchedule(this,t,e,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&J()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class cl extends Ao{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Fm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ll(this),this._firestoreClient.terminate()}}function W_(n,t){const e=typeof n=="object"?n:Qf(),r=typeof n=="string"?n:"(default)",s=zf(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Mh("firestore");o&&xm(s,...o)}return s}function Um(n){return n._firestoreClient||ll(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ll(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,d){return new Id(c,h,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ul(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new bm(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class gi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gi(Vt.fromBase64String(t))}catch(e){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new gi(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class hl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Bm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return at(this._lat,t._lat)||at(this._long,t._long)}}/**
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
 */class $m{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}const qm=new RegExp("[~\\*/\\[\\]]");function jm(n,t,e){if(t.search(qm)>=0)throw Mu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new hl(...t.split("."))._internalPath}catch{throw Mu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Mu(n,t,e,r,s){let o=`Function ${t}() called with invalid data`;o+=". ";let a="";return new K(F.INVALID_ARGUMENT,o+n+a)}/**
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
 */class fl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new zm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class zm extends fl{data(){return super.data()}}function dl(n,t){return typeof t=="string"?jm(n,t):t instanceof hl?t._internalPath:t._delegate._internalPath}/**
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
 */function Gm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Km{convertValue(t,e="none"){switch(He(t)){case 0:return null;case 1:return t.booleanValue;case 2:return vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ke(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw J()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ei(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>vt(a.doubleValue));return new $m(o)}convertGeoPoint(t){return new Bm(vt(t.latitude),vt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=io(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(or(t));default:return null}}convertTimestamp(t){const e=Ce(t);return new jt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=_t.fromString(t);At(Kc(r));const s=new ar(r.get(1),r.get(3)),o=new W(r.popFirst(5));return s.isEqual(e)||me(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Qr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hm extends fl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(dl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ei extends Hm{data(t={}){return super.data(t)}}class Wm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Qr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ei(this._firestore,this._userDataWriter,r.key,r,new Qr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new ei(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ei(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Qm(c.type),doc:h,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Qm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class Xm extends Km{constructor(t){super(),this.firestore=t}convertBytes(t){return new gi(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bn(this.firestore,null,e)}}function Q_(n){n=qs(n,Pi);const t=qs(n.firestore,cl),e=Um(t),r=new Xm(t);return Gm(n._query),Om(e,n._query).then(s=>new Wm(t,r,n,s))}(function(t,e=!0){(function(s){Sn=s})(Hf),ci(new rr("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new cl(new ad(r.getProvider("auth-internal")),new hd(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ln(tu,"4.7.1",t),ln(tu,"4.7.1","esm2017")})();var Ym="firebase",Jm="10.13.1";/**
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
 */ln(Ym,Jm,"app");function Zm(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function tp(n,t,e){return t&&Zm(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */var xu="(prefers-reduced-motion: reduce)",cn=1,ep=2,An=3,Vn=4,Tr=5,ni=6,mi=7,np={CREATED:cn,MOUNTED:ep,IDLE:An,MOVING:Vn,SCROLLING:Tr,DRAGGING:ni,DESTROYED:mi};function pe(n){n.length=0}function Ne(n,t,e){return Array.prototype.slice.call(n,t,e)}function ht(n){return n.bind.apply(n,[null].concat(Ne(arguments,1)))}var gl=setTimeout,js=function(){};function Fu(n){return requestAnimationFrame(n)}function bi(n,t){return typeof t===n}function cr(n){return!wo(n)&&bi("object",n)}var Io=Array.isArray,ml=ht(bi,"function"),be=ht(bi,"string"),Ar=ht(bi,"undefined");function wo(n){return n===null}function pl(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Ir(n){return Io(n)?n:[n]}function Wt(n,t){Ir(n).forEach(t)}function Ro(n,t){return n.indexOf(t)>-1}function ri(n,t){return n.push.apply(n,Ir(t)),n}function he(n,t,e){n&&Wt(t,function(r){r&&n.classList[e?"add":"remove"](r)})}function ie(n,t){he(n,be(t)?t.split(" "):t,!0)}function wr(n,t){Wt(t,n.appendChild.bind(n))}function So(n,t){Wt(n,function(e){var r=(t||e).parentNode;r&&r.insertBefore(e,t)})}function lr(n,t){return pl(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function _l(n,t){var e=n?Ne(n.children):[];return t?e.filter(function(r){return lr(r,t)}):e}function Rr(n,t){return t?_l(n,t)[0]:n.firstElementChild}var hr=Object.keys;function ze(n,t,e){return n&&(e?hr(n).reverse():hr(n)).forEach(function(r){r!=="__proto__"&&t(n[r],r)}),n}function fr(n){return Ne(arguments,1).forEach(function(t){ze(t,function(e,r){n[r]=t[r]})}),n}function Ie(n){return Ne(arguments,1).forEach(function(t){ze(t,function(e,r){Io(e)?n[r]=e.slice():cr(e)?n[r]=Ie({},cr(n[r])?n[r]:{},e):n[r]=e})}),n}function Uu(n,t){Wt(t||hr(n),function(e){delete n[e]})}function se(n,t){Wt(n,function(e){Wt(t,function(r){e&&e.removeAttribute(r)})})}function Y(n,t,e){cr(t)?ze(t,function(r,s){Y(n,s,r)}):Wt(n,function(r){wo(e)||e===""?se(r,t):r.setAttribute(t,String(e))})}function gn(n,t,e){var r=document.createElement(n);return t&&(be(t)?ie(r,t):Y(r,t)),e&&wr(e,r),r}function Yt(n,t,e){if(Ar(e))return getComputedStyle(n)[t];wo(e)||(n.style[t]=""+e)}function dr(n,t){Yt(n,"display",t)}function vl(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function Jt(n,t){return n.getAttribute(t)}function Bu(n,t){return n&&n.classList.contains(t)}function Kt(n){return n.getBoundingClientRect()}function We(n){Wt(n,function(t){t&&t.parentNode&&t.parentNode.removeChild(t)})}function yl(n){return Rr(new DOMParser().parseFromString(n,"text/html").body)}function le(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function El(n,t){return n&&n.querySelector(t)}function Co(n,t){return t?Ne(n.querySelectorAll(t)):[]}function fe(n,t){he(n,t,!1)}function zs(n){return n.timeStamp}function Fe(n){return be(n)?n:n?n+"px":""}var Sr="splide",Po="data-"+Sr;function er(n,t){if(!n)throw new Error("["+Sr+"] "+(t||""))}var Ve=Math.min,pi=Math.max,_i=Math.floor,gr=Math.ceil,qt=Math.abs;function Tl(n,t,e){return qt(n-t)<e}function ii(n,t,e,r){var s=Ve(t,e),o=pi(t,e);return r?s<n&&n<o:s<=n&&n<=o}function an(n,t,e){var r=Ve(t,e),s=pi(t,e);return Ve(pi(r,n),s)}function Gs(n){return+(n>0)-+(n<0)}function Ks(n,t){return Wt(t,function(e){n=n.replace("%s",""+e)}),n}function bo(n){return n<10?"0"+n:""+n}var $u={};function rp(n){return""+n+bo($u[n]=($u[n]||0)+1)}function Al(){var n=[];function t(a,c,h,f){s(a,c,function(d,A,I){var w="addEventListener"in d,R=w?d.removeEventListener.bind(d,A,h,f):d.removeListener.bind(d,h);w?d.addEventListener(A,h,f):d.addListener(h),n.push([d,A,I,h,R])})}function e(a,c,h){s(a,c,function(f,d,A){n=n.filter(function(I){return I[0]===f&&I[1]===d&&I[2]===A&&(!h||I[3]===h)?(I[4](),!1):!0})})}function r(a,c,h){var f,d=!0;return typeof CustomEvent=="function"?f=new CustomEvent(c,{bubbles:d,detail:h}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(c,d,!1,h)),a.dispatchEvent(f),f}function s(a,c,h){Wt(a,function(f){f&&Wt(c,function(d){d.split(" ").forEach(function(A){var I=A.split(".");h(f,I[0],I[1])})})})}function o(){n.forEach(function(a){a[4]()}),pe(n)}return{bind:t,unbind:e,dispatch:r,destroy:o}}var Xe="mounted",qu="ready",De="move",Cr="moved",Il="click",ip="active",sp="inactive",op="visible",ap="hidden",Rt="refresh",zt="updated",mr="resize",Vo="resized",up="drag",cp="dragging",lp="dragged",Do="scroll",Dn="scrolled",hp="overflow",wl="destroy",fp="arrows:mounted",dp="arrows:updated",gp="pagination:mounted",mp="pagination:updated",Rl="navigation:mounted",Sl="autoplay:play",pp="autoplay:playing",Cl="autoplay:pause",Pl="lazyload:loaded",bl="sk",Vl="sh",vi="ei";function gt(n){var t=n?n.event.bus:document.createDocumentFragment(),e=Al();function r(o,a){e.bind(t,Ir(o).join(" "),function(c){a.apply(a,Io(c.detail)?c.detail:[])})}function s(o){e.dispatch(t,o,Ne(arguments,1))}return n&&n.event.on(wl,e.destroy),fr(e,{bus:t,on:r,off:ht(e.unbind,t),emit:s})}function Vi(n,t,e,r){var s=Date.now,o,a=0,c,h=!0,f=0;function d(){if(!h){if(a=n?Ve((s()-o)/n,1):1,e&&e(a),a>=1&&(t(),o=s(),r&&++f>=r))return I();c=Fu(d)}}function A(N){N||R(),o=s()-(N?a*n:0),h=!1,c=Fu(d)}function I(){h=!0}function w(){o=s(),a=0,e&&e(a)}function R(){c&&cancelAnimationFrame(c),a=0,c=0,h=!0}function C(N){n=N}function P(){return h}return{start:A,rewind:w,pause:I,cancel:R,set:C,isPaused:P}}function _p(n){var t=n;function e(s){t=s}function r(s){return Ro(Ir(s),t)}return{set:e,is:r}}function vp(n,t){var e=Vi(0,n,null,1);return function(){e.isPaused()&&e.start()}}function yp(n,t,e){var r=n.state,s=e.breakpoints||{},o=e.reducedMotion||{},a=Al(),c=[];function h(){var R=e.mediaQuery==="min";hr(s).sort(function(C,P){return R?+C-+P:+P-+C}).forEach(function(C){d(s[C],"("+(R?"min":"max")+"-width:"+C+"px)")}),d(o,xu),A()}function f(R){R&&a.destroy()}function d(R,C){var P=matchMedia(C);a.bind(P,"change",A),c.push([R,P])}function A(){var R=r.is(mi),C=e.direction,P=c.reduce(function(N,D){return Ie(N,D[1].matches?D[0]:{})},{});Uu(e),w(P),e.destroy?n.destroy(e.destroy==="completely"):R?(f(!0),n.mount()):C!==e.direction&&n.refresh()}function I(R){matchMedia(xu).matches&&(R?Ie(e,o):Uu(e,hr(o)))}function w(R,C,P){Ie(e,R),C&&Ie(Object.getPrototypeOf(e),R),(P||!r.is(cn))&&n.emit(zt,e)}return{setup:h,destroy:f,reduce:I,set:w}}var Di="Arrow",Ni=Di+"Left",Li=Di+"Right",Dl=Di+"Up",Nl=Di+"Down",ju="rtl",Oi="ttb",_s={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Dl,Li],ArrowRight:[Nl,Ni]};function Ep(n,t,e){function r(o,a,c){c=c||e.direction;var h=c===ju&&!a?1:c===Oi?0:-1;return _s[o]&&_s[o][h]||o.replace(/width|left|right/i,function(f,d){var A=_s[f.toLowerCase()][h]||f;return d>0?A.charAt(0).toUpperCase()+A.slice(1):A})}function s(o){return o*(e.direction===ju?1:-1)}return{resolve:r,orient:s}}var de="role",mn="tabindex",Tp="disabled",Zt="aria-",Pr=Zt+"controls",Ll=Zt+"current",zu=Zt+"selected",Ht=Zt+"label",No=Zt+"labelledby",Ol=Zt+"hidden",Lo=Zt+"orientation",pr=Zt+"roledescription",Gu=Zt+"live",Ku=Zt+"busy",Hu=Zt+"atomic",Oo=[de,mn,Tp,Pr,Ll,Ht,No,Ol,Lo,pr],oe=Sr+"__",Le="is-",vs=Sr,Wu=oe+"track",Ap=oe+"list",ki=oe+"slide",kl=ki+"--clone",Ip=ki+"__container",ko=oe+"arrows",Mi=oe+"arrow",Ml=Mi+"--prev",xl=Mi+"--next",xi=oe+"pagination",Fl=xi+"__page",wp=oe+"progress",Rp=wp+"__bar",Sp=oe+"toggle",Cp=oe+"spinner",Pp=oe+"sr",bp=Le+"initialized",Qe=Le+"active",Ul=Le+"prev",Bl=Le+"next",Hs=Le+"visible",Ws=Le+"loading",$l=Le+"focus-in",ql=Le+"overflow",Vp=[Qe,Hs,Ul,Bl,Ws,$l,ql],Dp={slide:ki,clone:kl,arrows:ko,arrow:Mi,prev:Ml,next:xl,pagination:xi,page:Fl,spinner:Cp};function Np(n,t){if(ml(n.closest))return n.closest(t);for(var e=n;e&&e.nodeType===1&&!lr(e,t);)e=e.parentElement;return e}var Lp=5,Qu=200,jl="touchstart mousedown",ys="touchmove mousemove",Es="touchend touchcancel mouseup click";function Op(n,t,e){var r=gt(n),s=r.on,o=r.bind,a=n.root,c=e.i18n,h={},f=[],d=[],A=[],I,w,R;function C(){V(),O(),D()}function P(){s(Rt,N),s(Rt,C),s(zt,D),o(document,jl+" keydown",function(_){R=_.type==="keydown"},{capture:!0}),o(a,"focusin",function(){he(a,$l,!!R)})}function N(_){var m=Oo.concat("style");pe(f),fe(a,d),fe(I,A),se([I,w],m),se(a,_?m:["style",pr])}function D(){fe(a,d),fe(I,A),d=k(vs),A=k(Wu),ie(a,d),ie(I,A),Y(a,Ht,e.label),Y(a,No,e.labelledby)}function V(){I=M("."+Wu),w=Rr(I,"."+Ap),er(I&&w,"A track/list element is missing."),ri(f,_l(w,"."+ki+":not(."+kl+")")),ze({arrows:ko,pagination:xi,prev:Ml,next:xl,bar:Rp,toggle:Sp},function(_,m){h[m]=M("."+_)}),fr(h,{root:a,track:I,list:w,slides:f})}function O(){var _=a.id||rp(Sr),m=e.role;a.id=_,I.id=I.id||_+"-track",w.id=w.id||_+"-list",!Jt(a,de)&&a.tagName!=="SECTION"&&m&&Y(a,de,m),Y(a,pr,c.carousel),Y(w,de,"presentation")}function M(_){var m=El(a,_);return m&&Np(m,"."+vs)===a?m:void 0}function k(_){return[_+"--"+e.type,_+"--"+e.direction,e.drag&&_+"--draggable",e.isNavigation&&_+"--nav",_===vs&&Qe]}return fr(h,{setup:C,mount:P,destroy:N})}var In="slide",Nn="loop",br="fade";function kp(n,t,e,r){var s=gt(n),o=s.on,a=s.emit,c=s.bind,h=n.Components,f=n.root,d=n.options,A=d.isNavigation,I=d.updateOnMove,w=d.i18n,R=d.pagination,C=d.slideFocus,P=h.Direction.resolve,N=Jt(r,"style"),D=Jt(r,Ht),V=e>-1,O=Rr(r,"."+Ip),M;function k(){V||(r.id=f.id+"-slide"+bo(t+1),Y(r,de,R?"tabpanel":"group"),Y(r,pr,w.slide),Y(r,Ht,D||Ks(w.slideLabel,[t+1,n.length]))),_()}function _(){c(r,"click",ht(a,Il,H)),c(r,"keydown",ht(a,bl,H)),o([Cr,Vl,Dn],y),o(Rl,v),I&&o(De,E)}function m(){M=!0,s.destroy(),fe(r,Vp),se(r,Oo),Y(r,"style",N),Y(r,Ht,D||"")}function v(){var j=n.splides.map(function(U){var z=U.splide.Components.Slides.getAt(t);return z?z.slide.id:""}).join(" ");Y(r,Ht,Ks(w.slideX,(V?e:t)+1)),Y(r,Pr,j),Y(r,de,C?"button":""),C&&se(r,pr)}function E(){M||y()}function y(){if(!M){var j=n.index;T(),p(),he(r,Ul,t===j-1),he(r,Bl,t===j+1)}}function T(){var j=Q();j!==Bu(r,Qe)&&(he(r,Qe,j),Y(r,Ll,A&&j||""),a(j?ip:sp,H))}function p(){var j=dt(),U=!j&&(!Q()||V);if(n.state.is([Vn,Tr])||Y(r,Ol,U||""),Y(Co(r,d.focusableNodes||""),mn,U?-1:""),C&&Y(r,mn,U?-1:0),j!==Bu(r,Hs)&&(he(r,Hs,j),a(j?op:ap,H)),!j&&document.activeElement===r){var z=h.Slides.getAt(n.index);z&&vl(z.slide)}}function G(j,U,z){Yt(z&&O||r,j,U)}function Q(){var j=n.index;return j===t||d.cloneStatus&&j===e}function dt(){if(n.is(br))return Q();var j=Kt(h.Elements.track),U=Kt(r),z=P("left",!0),Z=P("right",!0);return _i(j[z])<=gr(U[z])&&_i(U[Z])<=gr(j[Z])}function ut(j,U){var z=qt(j-t);return!V&&(d.rewind||n.is(Nn))&&(z=Ve(z,n.length-z)),z<=U}var H={index:t,slideIndex:e,slide:r,container:O,isClone:V,mount:k,destroy:m,update:y,style:G,isWithin:ut};return H}function Mp(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=r.bind,c=t.Elements,h=c.slides,f=c.list,d=[];function A(){I(),s(Rt,w),s(Rt,I)}function I(){h.forEach(function(y,T){C(y,T,-1)})}function w(){M(function(y){y.destroy()}),pe(d)}function R(){M(function(y){y.update()})}function C(y,T,p){var G=kp(n,T,p,y);G.mount(),d.push(G),d.sort(function(Q,dt){return Q.index-dt.index})}function P(y){return y?k(function(T){return!T.isClone}):d}function N(y){var T=t.Controller,p=T.toIndex(y),G=T.hasFocus()?1:e.perPage;return k(function(Q){return ii(Q.index,p,p+G-1)})}function D(y){return k(y)[0]}function V(y,T){Wt(y,function(p){if(be(p)&&(p=yl(p)),pl(p)){var G=h[T];G?So(p,G):wr(f,p),ie(p,e.classes.slide),m(p,ht(o,mr))}}),o(Rt)}function O(y){We(k(y).map(function(T){return T.slide})),o(Rt)}function M(y,T){P(T).forEach(y)}function k(y){return d.filter(ml(y)?y:function(T){return be(y)?lr(T.slide,y):Ro(Ir(y),T.index)})}function _(y,T,p){M(function(G){G.style(y,T,p)})}function m(y,T){var p=Co(y,"img"),G=p.length;G?p.forEach(function(Q){a(Q,"load error",function(){--G||T()})}):T()}function v(y){return y?h.length:d.length}function E(){return d.length>e.perPage}return{mount:A,destroy:w,update:R,register:C,get:P,getIn:N,getAt:D,add:V,remove:O,forEach:M,filter:k,style:_,getLength:v,isEnough:E}}function xp(n,t,e){var r=gt(n),s=r.on,o=r.bind,a=r.emit,c=t.Slides,h=t.Direction.resolve,f=t.Elements,d=f.root,A=f.track,I=f.list,w=c.getAt,R=c.style,C,P,N;function D(){V(),o(window,"resize load",vp(ht(a,mr))),s([zt,Rt],V),s(mr,O)}function V(){C=e.direction===Oi,Yt(d,"maxWidth",Fe(e.width)),Yt(A,h("paddingLeft"),M(!1)),Yt(A,h("paddingRight"),M(!0)),O(!0)}function O(H){var j=Kt(d);(H||P.width!==j.width||P.height!==j.height)&&(Yt(A,"height",k()),R(h("marginRight"),Fe(e.gap)),R("width",m()),R("height",v(),!0),P=j,a(Vo),N!==(N=ut())&&(he(d,ql,N),a(hp,N)))}function M(H){var j=e.padding,U=h(H?"right":"left");return j&&Fe(j[U]||(cr(j)?0:j))||"0px"}function k(){var H="";return C&&(H=_(),er(H,"height or heightRatio is missing."),H="calc("+H+" - "+M(!1)+" - "+M(!0)+")"),H}function _(){return Fe(e.height||Kt(I).width*e.heightRatio)}function m(){return e.autoWidth?null:Fe(e.fixedWidth)||(C?"":E())}function v(){return Fe(e.fixedHeight)||(C?e.autoHeight?null:E():_())}function E(){var H=Fe(e.gap);return"calc((100%"+(H&&" + "+H)+")/"+(e.perPage||1)+(H&&" - "+H)+")"}function y(){return Kt(I)[h("width")]}function T(H,j){var U=w(H||0);return U?Kt(U.slide)[h("width")]+(j?0:Q()):0}function p(H,j){var U=w(H);if(U){var z=Kt(U.slide)[h("right")],Z=Kt(I)[h("left")];return qt(z-Z)+(j?0:Q())}return 0}function G(H){return p(n.length-1)-p(0)+T(0,H)}function Q(){var H=w(0);return H&&parseFloat(Yt(H.slide,h("marginRight")))||0}function dt(H){return parseFloat(Yt(A,h("padding"+(H?"Right":"Left"))))||0}function ut(){return n.is(br)||G(!0)>y()}return{mount:D,resize:O,listSize:y,slideSize:T,sliderSize:G,totalSize:p,getPadding:dt,isOverflow:ut}}var Fp=2;function Up(n,t,e){var r=gt(n),s=r.on,o=t.Elements,a=t.Slides,c=t.Direction.resolve,h=[],f;function d(){s(Rt,A),s([zt,mr],w),(f=P())&&(R(f),t.Layout.resize(!0))}function A(){I(),d()}function I(){We(h),pe(h),r.destroy()}function w(){var N=P();f!==N&&(f<N||!N)&&r.emit(Rt)}function R(N){var D=a.get().slice(),V=D.length;if(V){for(;D.length<N;)ri(D,D);ri(D.slice(-N),D.slice(0,N)).forEach(function(O,M){var k=M<N,_=C(O.slide,M);k?So(_,D[0].slide):wr(o.list,_),ri(h,_),a.register(_,M-N+(k?0:V),O.index)})}}function C(N,D){var V=N.cloneNode(!0);return ie(V,e.classes.clone),V.id=n.root.id+"-clone"+bo(D+1),V}function P(){var N=e.clones;if(!n.is(Nn))N=0;else if(Ar(N)){var D=e[c("fixedWidth")]&&t.Layout.slideSize(0),V=D&&gr(Kt(o.track)[c("width")]/D);N=V||e[c("autoWidth")]&&n.length||e.perPage*Fp}return N}return{mount:d,destroy:I}}function Bp(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=n.state.set,c=t.Layout,h=c.slideSize,f=c.getPadding,d=c.totalSize,A=c.listSize,I=c.sliderSize,w=t.Direction,R=w.resolve,C=w.orient,P=t.Elements,N=P.list,D=P.track,V;function O(){V=t.Transition,s([Xe,Vo,zt,Rt],M)}function M(){t.Controller.isBusy()||(t.Scroll.cancel(),_(n.index),t.Slides.update())}function k(U,z,Z,nt){U!==z&&H(U>Z)&&(y(),m(E(G(),U>Z),!0)),a(Vn),o(De,z,Z,U),V.start(z,function(){a(An),o(Cr,z,Z,U),nt&&nt()})}function _(U){m(p(U,!0))}function m(U,z){if(!n.is(br)){var Z=z?U:v(U);Yt(N,"transform","translate"+R("X")+"("+Z+"px)"),U!==Z&&o(Vl)}}function v(U){if(n.is(Nn)){var z=T(U),Z=z>t.Controller.getEnd(),nt=z<0;(nt||Z)&&(U=E(U,Z))}return U}function E(U,z){var Z=U-ut(z),nt=I();return U-=C(nt*(gr(qt(Z)/nt)||1))*(z?1:-1),U}function y(){m(G(),!0),V.cancel()}function T(U){for(var z=t.Slides.get(),Z=0,nt=1/0,It=0;It<z.length;It++){var $t=z[It].index,B=qt(p($t,!0)-U);if(B<=nt)nt=B,Z=$t;else break}return Z}function p(U,z){var Z=C(d(U-1)-dt(U));return z?Q(Z):Z}function G(){var U=R("left");return Kt(N)[U]-Kt(D)[U]+C(f(!1))}function Q(U){return e.trimSpace&&n.is(In)&&(U=an(U,0,C(I(!0)-A()))),U}function dt(U){var z=e.focus;return z==="center"?(A()-h(U,!0))/2:+z*h(U)||0}function ut(U){return p(U?t.Controller.getEnd():0,!!e.trimSpace)}function H(U){var z=C(E(G(),U));return U?z>=0:z<=N[R("scrollWidth")]-Kt(D)[R("width")]}function j(U,z){z=Ar(z)?G():z;var Z=U!==!0&&C(z)<C(ut(!1)),nt=U!==!1&&C(z)>C(ut(!0));return Z||nt}return{mount:O,move:k,jump:_,translate:m,shift:E,cancel:y,toIndex:T,toPosition:p,getPosition:G,getLimit:ut,exceededLimit:j,reposition:M}}function $p(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=t.Move,c=a.getPosition,h=a.getLimit,f=a.toPosition,d=t.Slides,A=d.isEnough,I=d.getLength,w=e.omitEnd,R=n.is(Nn),C=n.is(In),P=ht(G,!1),N=ht(G,!0),D=e.start||0,V,O=D,M,k,_;function m(){v(),s([zt,Rt,vi],v),s(Vo,E)}function v(){M=I(!0),k=e.perMove,_=e.perPage,V=H();var B=an(D,0,w?V:M-1);B!==D&&(D=B,a.reposition())}function E(){V!==H()&&o(vi)}function y(B,ot,Dt){if(!$t()){var mt=p(B),Et=ut(mt);Et>-1&&(ot||Et!==D)&&(Z(Et),a.move(mt,Et,O,Dt))}}function T(B,ot,Dt,mt){t.Scroll.scroll(B,ot,Dt,function(){var Et=ut(a.toIndex(c()));Z(w?Ve(Et,V):Et),mt&&mt()})}function p(B){var ot=D;if(be(B)){var Dt=B.match(/([+\-<>])(\d+)?/)||[],mt=Dt[1],Et=Dt[2];mt==="+"||mt==="-"?ot=Q(D+ +(""+mt+(+Et||1)),D):mt===">"?ot=Et?j(+Et):P(!0):mt==="<"&&(ot=N(!0))}else ot=R?B:an(B,0,V);return ot}function G(B,ot){var Dt=k||(It()?1:_),mt=Q(D+Dt*(B?-1:1),D,!(k||It()));return mt===-1&&C&&!Tl(c(),h(!B),1)?B?0:V:ot?mt:ut(mt)}function Q(B,ot,Dt){if(A()||It()){var mt=dt(B);mt!==B&&(ot=B,B=mt,Dt=!1),B<0||B>V?!k&&(ii(0,B,ot,!0)||ii(V,ot,B,!0))?B=j(U(B)):R?B=Dt?B<0?-(M%_||_):M:B:e.rewind?B=B<0?V:0:B=-1:Dt&&B!==ot&&(B=j(U(ot)+(B<ot?-1:1)))}else B=-1;return B}function dt(B){if(C&&e.trimSpace==="move"&&B!==D)for(var ot=c();ot===f(B,!0)&&ii(B,0,n.length-1,!e.rewind);)B<D?--B:++B;return B}function ut(B){return R?(B+M)%M||0:B}function H(){for(var B=M-(It()||R&&k?1:_);w&&B-- >0;)if(f(M-1,!0)!==f(B,!0)){B++;break}return an(B,0,M-1)}function j(B){return an(It()?B:_*B,0,V)}function U(B){return It()?Ve(B,V):_i((B>=V?M-1:B)/_)}function z(B){var ot=a.toIndex(B);return C?an(ot,0,V):ot}function Z(B){B!==D&&(O=D,D=B)}function nt(B){return B?O:D}function It(){return!Ar(e.focus)||e.isNavigation}function $t(){return n.state.is([Vn,Tr])&&!!e.waitForTransition}return{mount:m,go:y,scroll:T,getNext:P,getPrev:N,getAdjacent:G,getEnd:H,setIndex:Z,getIndex:nt,toIndex:j,toPage:U,toDest:z,hasFocus:It,isBusy:$t}}var qp="http://www.w3.org/2000/svg",jp="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",Xr=40;function zp(n,t,e){var r=gt(n),s=r.on,o=r.bind,a=r.emit,c=e.classes,h=e.i18n,f=t.Elements,d=t.Controller,A=f.arrows,I=f.track,w=A,R=f.prev,C=f.next,P,N,D={};function V(){M(),s(zt,O)}function O(){k(),V()}function M(){var T=e.arrows;T&&!(R&&C)&&v(),R&&C&&(fr(D,{prev:R,next:C}),dr(w,T?"":"none"),ie(w,N=ko+"--"+e.direction),T&&(_(),y(),Y([R,C],Pr,I.id),a(fp,R,C)))}function k(){r.destroy(),fe(w,N),P?(We(A?[R,C]:w),R=C=null):se([R,C],Oo)}function _(){s([Xe,Cr,Rt,Dn,vi],y),o(C,"click",ht(m,">")),o(R,"click",ht(m,"<"))}function m(T){d.go(T,!0)}function v(){w=A||gn("div",c.arrows),R=E(!0),C=E(!1),P=!0,wr(w,[R,C]),!A&&So(w,I)}function E(T){var p='<button class="'+c.arrow+" "+(T?c.prev:c.next)+'" type="button"><svg xmlns="'+qp+'" viewBox="0 0 '+Xr+" "+Xr+'" width="'+Xr+'" height="'+Xr+'" focusable="false"><path d="'+(e.arrowPath||jp)+'" />';return yl(p)}function y(){if(R&&C){var T=n.index,p=d.getPrev(),G=d.getNext(),Q=p>-1&&T<p?h.last:h.prev,dt=G>-1&&T>G?h.first:h.next;R.disabled=p<0,C.disabled=G<0,Y(R,Ht,Q),Y(C,Ht,dt),a(dp,R,C,p,G)}}return{arrows:D,mount:V,destroy:k,update:y}}var Gp=Po+"-interval";function Kp(n,t,e){var r=gt(n),s=r.on,o=r.bind,a=r.emit,c=Vi(e.interval,n.go.bind(n,">"),_),h=c.isPaused,f=t.Elements,d=t.Elements,A=d.root,I=d.toggle,w=e.autoplay,R,C,P=w==="pause";function N(){w&&(D(),I&&Y(I,Pr,f.track.id),P||V(),k())}function D(){e.pauseOnHover&&o(A,"mouseenter mouseleave",function(v){R=v.type==="mouseenter",M()}),e.pauseOnFocus&&o(A,"focusin focusout",function(v){C=v.type==="focusin",M()}),I&&o(I,"click",function(){P?V():O(!0)}),s([De,Do,Rt],c.rewind),s(De,m)}function V(){h()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),C=R=P=!1,k(),a(Sl))}function O(v){v===void 0&&(v=!0),P=!!v,k(),h()||(c.pause(),a(Cl))}function M(){P||(R||C?O(!1):V())}function k(){I&&(he(I,Qe,!P),Y(I,Ht,e.i18n[P?"play":"pause"]))}function _(v){var E=f.bar;E&&Yt(E,"width",v*100+"%"),a(pp,v)}function m(v){var E=t.Slides.getAt(v);c.set(E&&+Jt(E.slide,Gp)||e.interval)}return{mount:N,destroy:c.cancel,play:V,pause:O,isPaused:h}}function Hp(n,t,e){var r=gt(n),s=r.on;function o(){e.cover&&(s(Pl,ht(c,!0)),s([Xe,zt,Rt],ht(a,!0)))}function a(h){t.Slides.forEach(function(f){var d=Rr(f.container||f.slide,"img");d&&d.src&&c(h,d,f)})}function c(h,f,d){d.style("background",h?'center/cover no-repeat url("'+f.src+'")':"",!0),dr(f,h?"none":"")}return{mount:o,destroy:ht(a,!1)}}var Wp=10,Qp=600,Xp=.6,Yp=1.5,Jp=800;function Zp(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=n.state.set,c=t.Move,h=c.getPosition,f=c.getLimit,d=c.exceededLimit,A=c.translate,I=n.is(In),w,R,C=1;function P(){s(De,O),s([zt,Rt],M)}function N(_,m,v,E,y){var T=h();if(O(),v&&(!I||!d())){var p=t.Layout.sliderSize(),G=Gs(_)*p*_i(qt(_)/p)||0;_=c.toPosition(t.Controller.toDest(_%p))+G}var Q=Tl(T,_,1);C=1,m=Q?0:m||pi(qt(_-T)/Yp,Jp),R=E,w=Vi(m,D,ht(V,T,_,y),1),a(Tr),o(Do),w.start()}function D(){a(An),R&&R(),o(Dn)}function V(_,m,v,E){var y=h(),T=_+(m-_)*k(E),p=(T-y)*C;A(y+p),I&&!v&&d()&&(C*=Xp,qt(p)<Wp&&N(f(d(!0)),Qp,!1,R,!0))}function O(){w&&w.cancel()}function M(){w&&!w.isPaused()&&(O(),D())}function k(_){var m=e.easingFunc;return m?m(_):1-Math.pow(1-_,4)}return{mount:P,destroy:O,scroll:N,cancel:M}}var un={passive:!1,capture:!0};function t_(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=r.bind,c=r.unbind,h=n.state,f=t.Move,d=t.Scroll,A=t.Controller,I=t.Elements.track,w=t.Media.reduce,R=t.Direction,C=R.resolve,P=R.orient,N=f.getPosition,D=f.exceededLimit,V,O,M,k,_,m=!1,v,E,y;function T(){a(I,ys,js,un),a(I,Es,js,un),a(I,jl,G,un),a(I,"click",ut,{capture:!0}),a(I,"dragstart",le),s([Xe,zt],p)}function p(){var $=e.drag;Je(!$),k=$==="free"}function G($){if(v=!1,!E){var ct=Et($);mt($.target)&&(ct||!$.button)&&(A.isBusy()?le($,!0):(y=ct?I:window,_=h.is([Vn,Tr]),M=null,a(y,ys,Q,un),a(y,Es,dt,un),f.cancel(),d.cancel(),H($)))}}function Q($){if(h.is(ni)||(h.set(ni),o(up)),$.cancelable)if(_){f.translate(V+Dt(It($)));var ct=$t($)>Qu,Qt=m!==(m=D());(ct||Qt)&&H($),v=!0,o(cp),le($)}else z($)&&(_=U($),le($))}function dt($){h.is(ni)&&(h.set(An),o(lp)),_&&(j($),le($)),c(y,ys,Q),c(y,Es,dt),_=!1}function ut($){!E&&v&&le($,!0)}function H($){M=O,O=$,V=N()}function j($){var ct=Z($),Qt=nt(ct),_e=e.rewind&&e.rewindByDrag;w(!1),k?A.scroll(Qt,0,e.snap):n.is(br)?A.go(P(Gs(ct))<0?_e?"<":"-":_e?">":"+"):n.is(In)&&m&&_e?A.go(D(!0)?">":"<"):A.go(A.toDest(Qt),!0),w(!0)}function U($){var ct=e.dragMinThreshold,Qt=cr(ct),_e=Qt&&ct.mouse||0,qi=(Qt?ct.touch:+ct)||10;return qt(It($))>(Et($)?qi:_e)}function z($){return qt(It($))>qt(It($,!0))}function Z($){if(n.is(Nn)||!m){var ct=$t($);if(ct&&ct<Qu)return It($)/ct}return 0}function nt($){return N()+Gs($)*Ve(qt($)*(e.flickPower||600),k?1/0:t.Layout.listSize()*(e.flickMaxPages||1))}function It($,ct){return ot($,ct)-ot(B($),ct)}function $t($){return zs($)-zs(B($))}function B($){return O===$&&M||O}function ot($,ct){return(Et($)?$.changedTouches[0]:$)["page"+C(ct?"Y":"X")]}function Dt($){return $/(m&&n.is(In)?Lp:1)}function mt($){var ct=e.noDrag;return!lr($,"."+Fl+", ."+Mi)&&(!ct||!lr($,ct))}function Et($){return typeof TouchEvent<"u"&&$ instanceof TouchEvent}function Ye(){return _}function Je($){E=$}return{mount:T,disable:Je,isDragging:Ye}}var e_={Spacebar:" ",Right:Li,Left:Ni,Up:Dl,Down:Nl};function Mo(n){return n=be(n)?n:n.key,e_[n]||n}var Xu="keydown";function n_(n,t,e){var r=gt(n),s=r.on,o=r.bind,a=r.unbind,c=n.root,h=t.Direction.resolve,f,d;function A(){I(),s(zt,w),s(zt,I),s(De,C)}function I(){var N=e.keyboard;N&&(f=N==="global"?window:c,o(f,Xu,P))}function w(){a(f,Xu)}function R(N){d=N}function C(){var N=d;d=!0,gl(function(){d=N})}function P(N){if(!d){var D=Mo(N);D===h(Ni)?n.go("<"):D===h(Li)&&n.go(">")}}return{mount:A,destroy:w,disable:R}}var nr=Po+"-lazy",si=nr+"-srcset",r_="["+nr+"], ["+si+"]";function i_(n,t,e){var r=gt(n),s=r.on,o=r.off,a=r.bind,c=r.emit,h=e.lazyLoad==="sequential",f=[Cr,Dn],d=[];function A(){e.lazyLoad&&(I(),s(Rt,I))}function I(){pe(d),w(),h?N():(o(f),s(f,R),R())}function w(){t.Slides.forEach(function(D){Co(D.slide,r_).forEach(function(V){var O=Jt(V,nr),M=Jt(V,si);if(O!==V.src||M!==V.srcset){var k=e.classes.spinner,_=V.parentElement,m=Rr(_,"."+k)||gn("span",k,_);d.push([V,D,m]),V.src||dr(V,"none")}})})}function R(){d=d.filter(function(D){var V=e.perPage*((e.preloadPages||1)+1)-1;return D[1].isWithin(n.index,V)?C(D):!0}),d.length||o(f)}function C(D){var V=D[0];ie(D[1].slide,Ws),a(V,"load error",ht(P,D)),Y(V,"src",Jt(V,nr)),Y(V,"srcset",Jt(V,si)),se(V,nr),se(V,si)}function P(D,V){var O=D[0],M=D[1];fe(M.slide,Ws),V.type!=="error"&&(We(D[2]),dr(O,""),c(Pl,O,M),c(mr)),h&&N()}function N(){d.length&&C(d.shift())}return{mount:A,destroy:ht(pe,d),check:R}}function s_(n,t,e){var r=gt(n),s=r.on,o=r.emit,a=r.bind,c=t.Slides,h=t.Elements,f=t.Controller,d=f.hasFocus,A=f.getIndex,I=f.go,w=t.Direction.resolve,R=h.pagination,C=[],P,N;function D(){V(),s([zt,Rt,vi],D);var E=e.pagination;R&&dr(R,E?"":"none"),E&&(s([De,Do,Dn],v),O(),v(),o(gp,{list:P,items:C},m(n.index)))}function V(){P&&(We(R?Ne(P.children):P),fe(P,N),pe(C),P=null),r.destroy()}function O(){var E=n.length,y=e.classes,T=e.i18n,p=e.perPage,G=d()?f.getEnd()+1:gr(E/p);P=R||gn("ul",y.pagination,h.track.parentElement),ie(P,N=xi+"--"+_()),Y(P,de,"tablist"),Y(P,Ht,T.select),Y(P,Lo,_()===Oi?"vertical":"");for(var Q=0;Q<G;Q++){var dt=gn("li",null,P),ut=gn("button",{class:y.page,type:"button"},dt),H=c.getIn(Q).map(function(U){return U.slide.id}),j=!d()&&p>1?T.pageX:T.slideX;a(ut,"click",ht(M,Q)),e.paginationKeyboard&&a(ut,"keydown",ht(k,Q)),Y(dt,de,"presentation"),Y(ut,de,"tab"),Y(ut,Pr,H.join(" ")),Y(ut,Ht,Ks(j,Q+1)),Y(ut,mn,-1),C.push({li:dt,button:ut,page:Q})}}function M(E){I(">"+E,!0)}function k(E,y){var T=C.length,p=Mo(y),G=_(),Q=-1;p===w(Li,!1,G)?Q=++E%T:p===w(Ni,!1,G)?Q=(--E+T)%T:p==="Home"?Q=0:p==="End"&&(Q=T-1);var dt=C[Q];dt&&(vl(dt.button),I(">"+Q),le(y,!0))}function _(){return e.paginationDirection||e.direction}function m(E){return C[f.toPage(E)]}function v(){var E=m(A(!0)),y=m(A());if(E){var T=E.button;fe(T,Qe),se(T,zu),Y(T,mn,-1)}if(y){var p=y.button;ie(p,Qe),Y(p,zu,!0),Y(p,mn,"")}o(mp,{list:P,items:C},E,y)}return{items:C,mount:D,destroy:V,getAt:m,update:v}}var o_=[" ","Enter"];function a_(n,t,e){var r=e.isNavigation,s=e.slideFocus,o=[];function a(){n.splides.forEach(function(R){R.isParent||(f(n,R.splide),f(R.splide,n))}),r&&d()}function c(){o.forEach(function(R){R.destroy()}),pe(o)}function h(){c(),a()}function f(R,C){var P=gt(R);P.on(De,function(N,D,V){C.go(C.is(Nn)?V:N)}),o.push(P)}function d(){var R=gt(n),C=R.on;C(Il,I),C(bl,w),C([Xe,zt],A),o.push(R),R.emit(Rl,n.splides)}function A(){Y(t.Elements.list,Lo,e.direction===Oi?"vertical":"")}function I(R){n.go(R.index)}function w(R,C){Ro(o_,Mo(C))&&(I(R),le(C))}return{setup:ht(t.Media.set,{slideFocus:Ar(s)?r:s},!0),mount:a,destroy:c,remount:h}}function u_(n,t,e){var r=gt(n),s=r.bind,o=0;function a(){e.wheel&&s(t.Elements.track,"wheel",c,un)}function c(f){if(f.cancelable){var d=f.deltaY,A=d<0,I=zs(f),w=e.wheelMinThreshold||0,R=e.wheelSleep||0;qt(d)>w&&I-o>R&&(n.go(A?"<":">"),o=I),h(A)&&le(f)}}function h(f){return!e.releaseWheel||n.state.is(Vn)||t.Controller.getAdjacent(f)!==-1}return{mount:a}}var c_=90;function l_(n,t,e){var r=gt(n),s=r.on,o=t.Elements.track,a=e.live&&!e.isNavigation,c=gn("span",Pp),h=Vi(c_,ht(d,!1));function f(){a&&(I(!t.Autoplay.isPaused()),Y(o,Hu,!0),c.textContent="…",s(Sl,ht(I,!0)),s(Cl,ht(I,!1)),s([Cr,Dn],ht(d,!0)))}function d(w){Y(o,Ku,w),w?(wr(o,c),h.start()):(We(c),h.cancel())}function A(){se(o,[Gu,Hu,Ku]),We(c)}function I(w){a&&Y(o,Gu,w?"off":"polite")}return{mount:f,disable:I,destroy:A}}var h_=Object.freeze({__proto__:null,Media:yp,Direction:Ep,Elements:Op,Slides:Mp,Layout:xp,Clones:Up,Move:Bp,Controller:$p,Arrows:zp,Autoplay:Kp,Cover:Hp,Scroll:Zp,Drag:t_,Keyboard:n_,LazyLoad:i_,Pagination:s_,Sync:a_,Wheel:u_,Live:l_}),f_={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},d_={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Dp,i18n:f_,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function g_(n,t,e){var r=t.Slides;function s(){gt(n).on([Xe,Rt],o)}function o(){r.forEach(function(c){c.style("transform","translateX(-"+100*c.index+"%)")})}function a(c,h){r.style("transition","opacity "+e.speed+"ms "+e.easing),gl(h)}return{mount:s,start:a,cancel:js}}function m_(n,t,e){var r=t.Move,s=t.Controller,o=t.Scroll,a=t.Elements.list,c=ht(Yt,a,"transition"),h;function f(){gt(n).bind(a,"transitionend",function(w){w.target===a&&h&&(A(),h())})}function d(w,R){var C=r.toPosition(w,!0),P=r.getPosition(),N=I(w);qt(C-P)>=1&&N>=1?e.useScroll?o.scroll(C,N,!1,R):(c("transform "+N+"ms "+e.easing),r.translate(C,!0),h=R):(r.jump(w),R())}function A(){c(""),o.cancel()}function I(w){var R=e.rewindSpeed;if(n.is(In)&&R){var C=s.getIndex(!0),P=s.getEnd();if(C===0&&w>=P||C>=P&&w===0)return R}return e.speed}return{mount:f,start:d,cancel:A}}var p_=function(){function n(e,r){this.event=gt(),this.Components={},this.state=_p(cn),this.splides=[],this._o={},this._E={};var s=be(e)?El(document,e):e;er(s,s+" is invalid."),this.root=s,r=Ie({label:Jt(s,Ht)||"",labelledby:Jt(s,No)||""},d_,n.defaults,r||{});try{Ie(r,JSON.parse(Jt(s,Po)))}catch{er(!1,"Invalid JSON")}this._o=Object.create(Ie({},r))}var t=n.prototype;return t.mount=function(r,s){var o=this,a=this.state,c=this.Components;er(a.is([cn,mi]),"Already mounted!"),a.set(cn),this._C=c,this._T=s||this._T||(this.is(br)?g_:m_),this._E=r||this._E;var h=fr({},h_,this._E,{Transition:this._T});return ze(h,function(f,d){var A=f(o,c,o._o);c[d]=A,A.setup&&A.setup()}),ze(c,function(f){f.mount&&f.mount()}),this.emit(Xe),ie(this.root,bp),a.set(An),this.emit(qu),this},t.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(An)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},t.go=function(r){return this._C.Controller.go(r),this},t.on=function(r,s){return this.event.on(r,s),this},t.off=function(r){return this.event.off(r),this},t.emit=function(r){var s;return(s=this.event).emit.apply(s,[r].concat(Ne(arguments,1))),this},t.add=function(r,s){return this._C.Slides.add(r,s),this},t.remove=function(r){return this._C.Slides.remove(r),this},t.is=function(r){return this._o.type===r},t.refresh=function(){return this.emit(Rt),this},t.destroy=function(r){r===void 0&&(r=!0);var s=this.event,o=this.state;return o.is(cn)?gt(this).on(qu,this.destroy.bind(this,r)):(ze(this._C,function(a){a.destroy&&a.destroy(r)},!0),s.emit(wl),s.destroy(),r&&pe(this.splides),o.set(mi)),this},tp(n,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),zl=p_;zl.defaults={};zl.STATES=np;/*!
 * @splidejs/splide-extension-grid
 * Version  : 0.4.1
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */function __(n){n.length=0}function xo(n,t,e){return Array.prototype.slice.call(n,t,e)}function Fi(n){return n.bind.apply(n,[null].concat(xo(arguments,1)))}function Fo(n,t){return typeof t===n}var Gl=Array.isArray;Fi(Fo,"function");Fi(Fo,"string");Fi(Fo,"undefined");function Kl(n){return Gl(n)?n:[n]}function Yu(n,t){Kl(n).forEach(t)}var v_=Object.keys;function y_(n,t,e){if(n){var r=v_(n);r=r;for(var s=0;s<r.length;s++){var o=r[s];if(o!=="__proto__"&&t(n[o],o)===!1)break}}return n}function E_(n){return xo(arguments,1).forEach(function(t){y_(t,function(e,r){n[r]=t[r]})}),n}var Hl="splide";function T_(){var n=[];function t(a,c,h,f){s(a,c,function(d,A,I){var w="addEventListener"in d,R=w?d.removeEventListener.bind(d,A,h,f):d.removeListener.bind(d,h);w?d.addEventListener(A,h,f):d.addListener(h),n.push([d,A,I,h,R])})}function e(a,c,h){s(a,c,function(f,d,A){n=n.filter(function(I){return I[0]===f&&I[1]===d&&I[2]===A&&(!h||I[3]===h)?(I[4](),!1):!0})})}function r(a,c,h){var f,d=!0;return typeof CustomEvent=="function"?f=new CustomEvent(c,{bubbles:d,detail:h}):(f=document.createEvent("CustomEvent"),f.initCustomEvent(c,d,!1,h)),a.dispatchEvent(f),f}function s(a,c,h){Yu(a,function(f){f&&Yu(c,function(d){d.split(" ").forEach(function(A){var I=A.split(".");h(f,I[0],I[1])})})})}function o(){n.forEach(function(a){a[4]()}),__(n)}return{bind:t,unbind:e,dispatch:r,destroy:o}}var A_="visible",I_="hidden",Ts="refresh",w_="updated",R_="destroy";function Wl(n){var t=n?n.event.bus:document.createDocumentFragment(),e=T_();function r(o,a){e.bind(t,Kl(o).join(" "),function(c){a.apply(a,Gl(c.detail)?c.detail:[])})}function s(o){e.dispatch(t,o,xo(arguments,1))}return n&&n.event.on(R_,e.destroy),E_(e,{bus:t,on:r,off:Fi(e.unbind,t),emit:s})}var S_=Hl,Ui=Hl+"__slide",C_=Ui+"__container";function Ju(n){n.length=0}function Bi(n,t,e){return Array.prototype.slice.call(n,t,e)}function Uo(n){return n.bind(null,...Bi(arguments,1))}function $i(n,t){return typeof t===n}function P_(n){return!qo(n)&&$i("object",n)}const Bo=Array.isArray;Uo($i,"function");const $o=Uo($i,"string"),b_=Uo($i,"undefined");function qo(n){return n===null}function V_(n){return n instanceof HTMLElement}function jo(n){return Bo(n)?n:[n]}function wn(n,t){jo(n).forEach(t)}function Zu(n,t){return n.push(...jo(t)),n}function Ql(n,t,e){n&&wn(t,r=>{r&&n.classList[e?"add":"remove"](r)})}function Qs(n,t){Ql(n,$o(t)?t.split(" "):t,!0)}function oi(n,t){wn(t,n.appendChild.bind(n))}function D_(n,t){return V_(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function N_(n,t){const e=n?Bi(n.children):[];return t?e.filter(r=>D_(r,t)):e}function tc(n,t){return t?N_(n,t)[0]:n.firstElementChild}const Xl=Object.keys;function Yl(n,t,e){if(n){let r=Xl(n);r=r;for(let s=0;s<r.length;s++){const o=r[s];if(o!=="__proto__"&&t(n[o],o)===!1)break}}return n}function L_(n){return Bi(arguments,1).forEach(t=>{Yl(t,(e,r)=>{n[r]=t[r]})}),n}function O_(n,t){jo(Xl(n)).forEach(e=>{delete n[e]})}function Xs(n,t){wn(n,e=>{wn(t,r=>{e&&e.removeAttribute(r)})})}function zo(n,t,e){P_(t)?Yl(t,(r,s)=>{zo(n,s,r)}):wn(n,r=>{qo(e)||e===""?Xs(r,t):r.setAttribute(t,String(e))})}function ec(n,t,e){const r=document.createElement(n);return t&&($o(t)?Qs(r,t):zo(r,t)),e&&oi(e,r),r}function ce(n,t,e){if(b_(e))return getComputedStyle(n)[t];qo(e)||(n.style[t]=`${e}`)}function k_(n,t){return n&&n.classList.contains(t)}function M_(n){wn(n,t=>{t&&t.parentNode&&t.parentNode.removeChild(t)})}function nc(n,t){return t?Bi(n.querySelectorAll(t)):[]}function rc(n,t){Ql(n,t,!1)}function Yr(n){return $o(n)?n:n?`${n}px`:""}const x_="splide";function F_(n,t){if(!n)throw new Error(`[${x_}] ${t}`)}const{min:U_,max:X_,floor:Y_,ceil:J_,abs:Z_}=Math;function B_(n){return n<10?`0${n}`:`${n}`}const Jl=`${Ui}__row`,Ys=`${Ui}--col`,$_={rows:1,cols:1,dimensions:[],gap:{}};function q_(n){function t(){const{rows:s,cols:o,dimensions:a}=n;return Bo(a)&&a.length?a:[[s,o]]}function e(s){const o=t();return o[U_(s,o.length-1)]}function r(s){const o=t();let a,c,h=0;for(let f=0;f<o.length;f++){const d=o[f];if(a=d[0]||1,c=d[1]||1,h+=a*c,s<h)break}return F_(a&&c,"Invalid dimension"),[a,c]}return{get:e,getAt:r}}function j_(n,t,e){const{on:r,destroy:s}=Wl(n),{Components:o,options:a}=n,{resolve:c}=o.Direction,{forEach:h}=o.Slides;function f(){A(),a.slideFocus&&(r(A_,D),r(I_,V))}function d(){h(O=>{const{slide:M}=O;N(M,!1),C(M).forEach(k=>{Xs(k,"style")}),P(M).forEach(k=>{R(k,!0),Xs(k,"style")})}),s()}function A(){h(O=>{const{slide:M}=O,[k,_]=e.get(O.isClone?O.slideIndex:O.index);I(k,M),w(_,M),P(O.slide).forEach((m,v)=>{m.id=`${O.slide.id}-col${B_(v+1)}`,n.options.cover&&R(m)})})}function I(O,M){const{row:k}=t.gap,_=`calc(${100/O}%${k?` - ${Yr(k)} * ${(O-1)/O}`:""})`;C(M).forEach((m,v,E)=>{ce(m,"height",_),ce(m,"display","flex"),ce(m,"margin",`0 0 ${Yr(k)} 0`),ce(m,"padding",0),v===E.length-1&&ce(m,"marginBottom",0)})}function w(O,M){const{col:k}=t.gap,_=`calc(${100/O}%${k?` - ${Yr(k)} * ${(O-1)/O}`:""})`;P(M).forEach((m,v,E)=>{ce(m,"width",_),v!==E.length-1&&ce(m,c("marginRight"),Yr(k))})}function R(O,M){const k=tc(O,`.${C_}`),_=tc(k||O,"img");_&&_.src&&(ce(k||O,"background",M?"":`center/cover no-repeat url("${_.src}")`),ce(_,"display",M?"":"none"))}function C(O){return nc(O,`.${Jl}`)}function P(O){return nc(O,`.${Ys}`)}function N(O,M){P(O).forEach(k=>{zo(k,"tabindex",M?0:null)})}function D(O){N(O.slide,!0)}function V(O){N(O.slide,!1)}return{mount:f,destroy:d}}function tv(n,t,e){const{on:r,off:s}=Wl(n),{Elements:o}=t,a={},c=q_(a),h=j_(n,a,c),f=`${S_}--grid`,d=[];function A(){I(),r(w_,I)}function I(){O_(a),L_(a,$_,e.grid||{}),V()?(w(),Zu(d,o.slides),Qs(n.root,f),oi(o.list,P()),s(Ts),r(Ts,C),R()):O()&&(w(),R())}function w(){if(O()){const{slides:M}=o;h.destroy(),d.forEach(k=>{rc(k,Ys),oi(o.list,k)}),M_(M),rc(n.root,f),Ju(M),Zu(M,d),Ju(d),s(Ts)}}function R(){n.refresh()}function C(){O()&&h.mount()}function P(){const M=[];let k=0,_=0,m,v;return d.forEach((E,y)=>{const[T,p]=c.getAt(y);_||(k||(m=ec(E.tagName,Ui),M.push(m)),v=N(T,E,m)),D(p,E,v),++_>=p&&(_=0,k=++k>=T?0:k)}),M}function N(M,k,_){const m=k.tagName.toLowerCase()==="li"?"ul":"div";return ec(m,Jl,_)}function D(M,k,_){return Qs(k,Ys),oi(_,k),k}function V(){if(e.grid){const{rows:M,cols:k,dimensions:_}=a;return M>1||k>1||Bo(_)&&_.length>0}return!1}function O(){return k_(n.root,f)}return{mount:A,destroy:w}}export{tv as G,zl as S,Q_ as a,H_ as c,W_ as g,Wf as i};
//# sourceMappingURL=vendor-DQgSH63-.js.map
