module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e){t.exports=require("uxp")},function(t,e,r){const{RootNode:n,Rectangle:o}=r(2),a=(r(3),r(0));t.exports.commands={myCommand:async function(t,e){console.log("My Plugin");const r=a.storage.File,n=a.storage.Folder;console.log(r,n);let o=a.storage.localFileSystem.getDataFolder;console.log(o instanceof n,o instanceof r)}}},function(t,e){t.exports=require("scenegraph")},function(t,e,r){const n=r(0).storage,o=n.localFileSystem;let a;t.exports=class{static async init(){let t=await o.getDataFolder();try{let e=await t.getEntry("storage.json");return a=JSON.parse((await e.read({format:n.formats.utf8})).toString()),e}catch(e){const r=await t.createEntry("storage.json",{type:n.types.file,overwrite:!0});if(r.isFile)return await r.write("{}",{append:!1}),a={},r;throw new Error("Storage file storage.json was not a file.")}}static async get(t,e){if(!a){const t=await this.init();a=JSON.parse((await t.read({format:n.formats.utf8})).toString())}return void 0===a[t]?(await this.set(t,e),e):a[t]}static async set(t,e){const r=await this.init();return a[t]=e,await r.write(JSON.stringify(a),{append:!1,format:n.formats.utf8})}static async delete(t){return await this.set(t,void 0)}static async reset(){const t=await this.init();return await t.write("{}",{append:!1,format:n.formats.utf8})}}}]);