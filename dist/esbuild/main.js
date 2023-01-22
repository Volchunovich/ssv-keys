"use strict";(()=>{var Yr=Object.create;var lr=Object.defineProperty;var Ar=Object.getOwnPropertyDescriptor;var Ur=Object.getOwnPropertyNames;var Hr=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty;var c=(s=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(s,{get:(r,e)=>(typeof require!="undefined"?require:r)[e]}):s)(function(s){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+s+'" is not supported')});var Xr=(s,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Ur(r))!jr.call(s,i)&&i!==e&&lr(s,i,{get:()=>r[i],enumerable:!(t=Ar(r,i))||t.enumerable});return s};var I=(s,r,e)=>(e=s!=null?Yr(Hr(s)):{},Xr(r||!s||!s.__esModule?lr(e,"default",{value:s,enumerable:!0}):e,s));var n=(s,r,e,t)=>{for(var i=t>1?void 0:t?Ar(r,e):r,a=s.length-1,o;a>=0;a--)(o=s[a])&&(i=(t?o(r,e,i):o(i))||i);return t&&i&&lr(r,e,i),i};var u=(s,r,e)=>new Promise((t,i)=>{var a=p=>{try{l(e.next(p))}catch(y){i(y)}},o=p=>{try{l(e.throw(p))}catch(y){i(y)}},l=p=>p.done?t(p.value):Promise.resolve(p.value).then(a,o);l((e=e.apply(s,r)).next())});var Br=I(c("atob")),Kr=c("js-base64");var h=c("class-validator");var Nr=I(c("underscore")),d=c("class-validator");var f=c("class-validator");var W=c("class-validator");var wr=c("js-base64");var yr;try{window.crypto,yr=c("jsencrypt").JSEncrypt}catch(s){yr=c("node-jsencrypt")}var C=yr;var F=c("js-base64");var x=class extends Error{constructor(e,t){super(t);this.operator=e}},D=class{constructor(r,e){this.RAW_OPERATOR_PUBLIC_KEY_SIGNATURE=RegExp(/------BEGIN RSA PUBLIC KEY-----/,"gmi");this.operators=r.map(t=>this.RAW_OPERATOR_PUBLIC_KEY_SIGNATURE.test(t)?t:(0,F.decode)(t)),this.shares=e}encrypt(){let r=[];return Object.keys(this.operators).forEach(e=>{let t=new C({});try{t.setPublicKey(this.operators[e])}catch(o){throw new x({rsa:this.operators[e],base64:(0,F.encode)(this.operators[e])},`Operator is not valid RSA Public Key: ${o}`)}let i=t.encrypt(this.shares[e].privateKey),a={operatorPublicKey:this.operators[e],privateKey:String(i),publicKey:this.shares[e].publicKey};return r.push(a),a}),r}};var xr=s=>{try{let r="Invalid operator key format, make sure the operator exists in the network",e=(0,wr.decode)(s);if(s.length<98)throw Error("The length of the operator public key must be at least 98 characters.");if(!e.startsWith("-----BEGIN RSA PUBLIC KEY-----"))throw Error(r);let t=new C({});try{t.setPublicKey(e)}catch(i){throw new x({rsa:e,base64:s},r)}return!0}catch(r){let{message:e}=r;return e}};var $=class extends Error{constructor(e,t){super(t);this.operator=e}},M=class extends Error{constructor(e,t){super(t);this.operator=e}},N=class extends Error{constructor(e,t,i){super(i);this.listOne=e,this.listTwo=t}},J=class extends Error{constructor(e,t){super(t);this.publicKey=e}};var T=class{validate(r){let e=xr(r);if(e!==!0)throw new J(r,`${e}`);return!0}defaultMessage(){return"Invalid operator public key"}};T=n([(0,W.ValidatorConstraint)({name:"operatorPublicKey",async:!1})],T);function Dr(s){return function(r,e){(0,W.registerDecorator)({target:r.constructor,propertyName:e,options:s,constraints:[],validator:T})}}var O=class{setData(r){r.id&&(this.id=r.id),r.publicKey&&(this.publicKey=r.publicKey)}validate(){(0,f.validateSync)(this)}};n([(0,f.IsNotEmpty)({message:"The operator id is null"}),(0,f.IsDefined)({message:"The operator id is undefined"}),(0,f.IsInt)({message:"The operator id must be an integer"})],O.prototype,"id",2),n([(0,f.IsNotEmpty)({message:"The operator public key is null"}),(0,f.IsDefined)({message:"The operator public key is undefined"}),(0,f.IsString)({message:"The operator public key must be a string"}),Dr()],O.prototype,"publicKey",2);var E=c("class-validator");var z=c("class-validator");var B=class{validate(r,e){let[t,i]=e.constraints,a=e.object[t].length;if(!Array.isArray(r))Object.values(r).forEach(o=>{if(a!==o.length)throw new N(e.object[t],r,i.message)});else if(a!==r.length)throw new N(e.object[t],r,i.message);return!0}defaultMessage(){return"The length of the entries lists are not equal"}};B=n([(0,z.ValidatorConstraint)({name:"matchLength",async:!1})],B);function q(s,r){return function(e,t){(0,z.registerDecorator)({target:e.constructor,propertyName:t,options:r,constraints:[s,r],validator:B})}}var ur;try{window.crypto,ur=c("bls-eth-wasm/browser")}catch(s){ur=c("bls-eth-wasm")}var m=ur;var Q=c("class-validator");var G=class extends Error{constructor(e,t){super(t);this.publicKey=e}};var L=class{validate(r){return u(this,null,function*(){try{yield m.init(m.BLS12_381),typeof r=="string"?m.deserializeHexStrToPublicKey(r.replace("0x","")):r.forEach(e=>m.deserializeHexStrToPublicKey(e.replace("0x","")))}catch(e){throw new G(r,"Failed to BLS deserialize validator public key")}return!0})}defaultMessage(){return"Invalid public key"}};L=n([(0,Q.ValidatorConstraint)({name:"publicKey",async:!0})],L);function Z(s){return function(r,e){(0,Q.registerDecorator)({target:r.constructor,propertyName:e,options:s,constraints:[],validator:L})}}var rr=c("class-validator"),kr=c("js-base64");var Or=I(c("web3")),_=new Or.default,_r=(s,r)=>s.map(e=>{let t=r?Object(e)[r]:e;return String(t).startsWith("0x")?t:_.eth.abi.encodeParameter("string",t)});var Y=class{validate(r){let e="";try{(Array.isArray(r)?r:[r]).forEach(i=>{e=i,(0,kr.decode)(i.startsWith("0x")?_.eth.abi.decodeParameter("string",i):i)})}catch(t){throw Error(`Filed ABI decode shares encrypted key: ${e}. Error: ${t.message}`)}return!0}defaultMessage(){return"Filed ABI decode shares encrypted key"}};Y=n([(0,rr.ValidatorConstraint)({name:"encryptedKey",async:!1})],Y);function Rr(s){return function(r,e){(0,rr.registerDecorator)({target:r.constructor,propertyName:e,options:s,constraints:[],validator:Y})}}var k=class{setData(r){r.publicKeys&&(this.publicKeys=r.publicKeys),r.encryptedKeys&&(this.encryptedKeys=r.encryptedKeys)}validate(){(0,E.validateSync)(this)}};n([(0,E.IsArray)(),(0,E.MinLength)(98,{each:!0}),Z({each:!0})],k.prototype,"publicKeys",2),n([(0,E.IsArray)(),(0,E.MinLength)(98,{each:!0}),q("publicKeys",{message:"Length of encrypted and public keys should be equal."}),Rr()],k.prototype,"encryptedKeys",2);var er=c("class-validator");var U=class{validate(r){let e=new Set,t=new Set;for(let i of r||[]){if(e.has(i.id))throw new $(i,"Operator ID already exists");if(e.add(i.id),t.has(i.publicKey))throw new M(i,"Operator public key already exists");t.add(i.publicKey)}return!0}defaultMessage(){return"The list of operators contains duplicate entries"}};U=n([(0,er.ValidatorConstraint)({name:"uniqueList",async:!1})],U);function Vr(s){return function(r,e){(0,er.registerDecorator)({target:r.constructor,propertyName:e,options:s,constraints:[],validator:U})}}var K=class{constructor(){this.publicKey=null;this.operators=null;this.shares=null}setData(r){if(r.publicKey&&(this.publicKey=r.publicKey),r.operators&&(this.operators=r.operators.map(e=>{let t=new O;return t.setData(e),t})),r.shares){let e=new k;Nr.default.isArray(r.shares)?e.setData({publicKeys:r.shares.map(t=>t.publicKey),encryptedKeys:r.shares.map(t=>t.privateKey)}):e.setData(r.shares),this.shares=e}}validate(){return u(this,null,function*(){(0,d.validateSync)(this)})}get sharesPublicKeys(){var r;return((r=this.shares)==null?void 0:r.publicKeys)||[]}get sharesEncryptedKeys(){var r;return((r=this.shares)==null?void 0:r.encryptedKeys)||[]}get operatorIds(){var r;return(r=this.operators)!=null&&r.length?this.operators.map(e=>parseInt(String(e.id),10)):[]}get operatorPublicKeys(){var r;return(r=this.operators)!=null&&r.length?this.operators.map(e=>String(e.publicKey)):[]}};n([(0,d.IsOptional)(),(0,d.IsString)(),(0,d.Length)(98,98),Z()],K.prototype,"publicKey",2),n([(0,d.IsOptional)(),(0,d.ValidateNested)({each:!0}),Vr()],K.prototype,"operators",2),n([(0,d.IsOptional)(),(0,d.ValidateNested)(),q("operators",{message:"Length of operators and shares should be equal."})],K.prototype,"shares",2);var hr=I(c("underscore"));var v=c("class-validator");var P=class{constructor(){this.readable=null;this.raw=null}build(r){return[r.validatorPublicKey,r.operatorsIds.join(","),r.encryptedShares.map(e=>e.publicKey),_r(r.encryptedShares,"privateKey"),r.ssvAmount]}setData(r){if(!r===null){this.raw=null,this.readable=null;return}if(hr.default.isArray(r)){this.raw=this.toRaw(r),this.readable=this.toReadable(r);return}hr.default.isObject(r)&&(r.readable&&(this.readable=r.readable),r.raw&&(this.raw=r.raw))}toRaw(r){return r.join(",")}toReadable(r){return{validatorPublicKey:r[P.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY],operatorIds:r[P.PAYLOAD_INDEX_OPERATOR_IDS],sharePublicKeys:r[P.PAYLOAD_INDEX_SHARE_PUBLIC_KEYS],sharePrivateKey:r[P.PAYLOAD_INDEX_SHARE_PRIVATE_KEYS],ssvAmount:r[P.PAYLOAD_INDEX_SSV_AMOUNT]}}validate(){return u(this,null,function*(){})}},g=P;g.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY=0,g.PAYLOAD_INDEX_OPERATOR_IDS=1,g.PAYLOAD_INDEX_SHARE_PUBLIC_KEYS=2,g.PAYLOAD_INDEX_SHARE_PRIVATE_KEYS=3,g.PAYLOAD_INDEX_SSV_AMOUNT=4,n([(0,v.IsOptional)(),(0,v.IsObject)()],g.prototype,"readable",2),n([(0,v.IsOptional)(),(0,v.IsString)()],g.prototype,"raw",2);var tr=class extends K{};var mr=I(c("underscore")),sr=I(c("ethers")),A=c("class-validator");var R=class{constructor(){this.readable=null;this.raw=null}decodeRSAShares(r){return r.map(e=>"0x"+Buffer.from(e,"base64").toString("hex"))}sharesToBytes(r,e){let t=this.decodeRSAShares(e),i=new Uint8Array(r.map(y=>[...sr.utils.arrayify(y)]).flat()),a=new Uint8Array(t.map(y=>[...sr.utils.arrayify(y)]).flat()),o=sr.utils.hexlify(i),l=String(o.length.toString(16)).padStart(4,"0"),p=Buffer.concat([i,a]);return`0x${l}${p.toString("hex")}`}build(r){return[r.validatorPublicKey,r.operatorsIds.join(","),this.sharesToBytes(r.encryptedShares.map(e=>e.publicKey),r.encryptedShares.map(e=>e.privateKey)),r.ssvAmount]}setData(r){if(!r===null){this.raw=null,this.readable=null;return}if(mr.default.isArray(r)){this.raw=this.toRaw(r),this.readable=this.toReadable(r);return}mr.default.isObject(r)&&(r.readable&&(this.readable=r.readable),r.raw&&(this.raw=r.raw))}toRaw(r){return r.join(",")}toReadable(r){return{validatorPublicKey:r[R.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY],operatorIds:r[R.PAYLOAD_INDEX_OPERATOR_IDS],shares:r[R.PAYLOAD_INDEX_SHARES_KEYS],ssvAmount:r[R.PAYLOAD_INDEX_SSV_AMOUNT]}}validate(){}},b=R;b.PAYLOAD_INDEX_VALIDATOR_PUBLIC_KEY=0,b.PAYLOAD_INDEX_OPERATOR_IDS=1,b.PAYLOAD_INDEX_SHARES_KEYS=2,b.PAYLOAD_INDEX_SSV_AMOUNT=3,n([(0,A.IsOptional)(),(0,A.IsObject)()],b.prototype,"readable",2),n([(0,A.IsOptional)(),(0,A.IsString)()],b.prototype,"raw",2);var V=class{constructor({version:r}){this.byVersion={payload:{[V.VERSION_V2]:g,[V.VERSION_V3]:b},data:{[V.VERSION_V2]:K,[V.VERSION_V3]:tr}};this.version=r,this.data=this.getByVersion("data",r),this.payload=this.getByVersion("payload",r)}generateContractPayload(r){var t;let e=this.payload.build(r);return(t=this.payload)==null||t.setData(e),this.payload}setData(r){!r||(this.data.setData(r),this.validate())}getByVersion(r,e){if(!this.byVersion[r])throw Error(`"${r}" is unknown entity`);if(!this.byVersion[r][e])throw Error(`"${r}" is not supported in version of key shares: ${e}`);return new this.byVersion[r][e]}validate(){(0,h.validateSync)(this)}fromJson(r){return typeof r=="string"&&(r=JSON.parse(r)),this.setData(r.data),this}toJson(){return JSON.stringify({version:this.version,data:this.data||null,payload:this.payload||null,createdAt:new Date().toISOString()},null,"  ")}},S=V;S.VERSION_V2="v2",S.VERSION_V3="v3",n([(0,h.IsString)(),(0,h.IsDefined)(),(0,h.IsNotEmpty)()],S.prototype,"version",2),n([(0,h.IsOptional)(),(0,h.ValidateNested)()],S.prototype,"data",2),n([(0,h.IsOptional)(),(0,h.ValidateNested)()],S.prototype,"payload",2);var dr=class extends Error{constructor(e,t){super(t);this.operators=e}},fr=class extends Error{constructor(e,t){super(t);this.operator=e}},gr=class{constructor(){this.shares=[]}static get DEFAULT_THRESHOLD_NUMBER(){return 3}create(r,e){return u(this,null,function*(){e.map(l=>{if(!Number.isInteger(l))throw new fr(l,`Operator must be integer. Got: ${String(l)}`)});let t=(e.length-1)/3;if(!Number.isInteger(t))throw new dr(e,"Invalid operators length. It should satisfy conditions: \u2016 Operators \u2016 := 3 * F + 1 ; F \u2208 \u2115");yield m.init(m.BLS12_381);let i=[],a=[];this.validatorPrivateKey=m.deserializeHexStrToSecretKey(r),this.validatorPublicKey=this.validatorPrivateKey.getPublicKey(),i.push(this.validatorPrivateKey),a.push(this.validatorPublicKey);for(let l=1;l<e.length-t;l+=1){let p=new m.SecretKey;p.setByCSPRNG(),i.push(p);let y=p.getPublicKey();a.push(y)}for(let l of e){let p=new m.Id;p.setInt(l);let y=new m.SecretKey;y.share(i,p);let w=new m.PublicKey;w.share(a,p),this.shares.push({privateKey:`0x${y.serializeToHexStr()}`,publicKey:`0x${w.serializeToHexStr()}`,id:p})}return{validatorPrivateKey:`0x${this.validatorPrivateKey.serializeToHexStr()}`,validatorPublicKey:`0x${this.validatorPublicKey.serializeToHexStr()}`,shares:this.shares}})}},ir=gr;var br=I(c("crypto")),Tr=c("scrypt-js"),ar=I(c("ethereumjs-wallet")),nr=c("ethereumjs-util");var Sr=class{constructor(r){this.privateKey="";if(!r)throw new Error("Key store data should be JSON or string");if(typeof r=="string"?this.keyStoreData=JSON.parse(r):this.keyStoreData=r,!this.keyStoreData.version)throw new Error("Invalid keystore file")}getPublicKey(){var r;if(this.keyStoreData)switch((r=this.keyStoreData.version)!=null?r:this.keyStoreData.Version){case 1:return this.keyStoreData.Address;case 3:return this.keyStoreData.id;case 4:return this.keyStoreData.pubkey}return""}getPrivateKey(r=""){return u(this,null,function*(){if(this.privateKey)return this.privateKey;switch(this.keyStoreData.version){case 1:this.wallet=yield ar.default.fromV1(this.keyStoreData,r);break;case 3:this.wallet=yield ar.default.fromV3(this.keyStoreData,r,!0);break;case 4:this.wallet=yield this.fromV4(this.keyStoreData,r);break}if(this.wallet&&(this.privateKey=this.wallet.getPrivateKey().toString("hex"),!this.privateKey))throw new Error("Invalid password");return this.privateKey})}fromV4(r,e){return u(this,null,function*(){let t=typeof r=="object"?r:JSON.parse(r);if(t.version!==4)throw new Error("Not a V4 wallet");let i,a;if(t.crypto.kdf.function==="scrypt")a=t.crypto.kdf.params,i=(0,Tr.syncScrypt)(Buffer.from(e),Buffer.from(a.salt,"hex"),a.n,a.r,a.p,a.dklen);else if(t.crypto.kdf.function==="pbkdf2"){if(a=t.crypto.kdf.params,a.prf!=="hmac-sha256")throw new Error("Unsupported parameters to PBKDF2");i=br.default.pbkdf2Sync(Buffer.from(e),Buffer.from(a.salt,"hex"),a.c,a.dklen,"sha256")}else throw new Error("Unsupported key derivation scheme");let o=Buffer.from(t.crypto.cipher.message,"hex"),l=Buffer.concat([Buffer.from(i.slice(16,32)),o]),y={keccak256:nr.keccak256,sha256:nr.sha256}[t.crypto.checksum.function];if(y(l).toString("hex")!==t.crypto.checksum.message)throw new Error("Invalid password");let j=br.default.createDecipheriv(t.crypto.cipher.function,i.slice(0,16),Buffer.from(t.crypto.cipher.params.iv,"hex")),X=this.runCipherBuffer(j,o);return new ar.default(X)})}runCipherBuffer(r,e){return Buffer.concat([r.update(e),r.final()])}static toHexString(r){return Array.from(r,e=>`0${(e&255).toString(16)}`.slice(-2)).join("")}},or=Sr;var cr=class{constructor(r){if(!Object.values(cr.VERSION).includes(r))throw Error("Version is not supported");this.version=r,this.keySharesInstance=new S({version:this.version})}get keyShares(){return this.keySharesInstance}getPrivateKeyFromKeystoreData(r,e){return u(this,null,function*(){try{return new or(r).getPrivateKey(e)}catch(t){return t}})}createThreshold(r,e){return u(this,null,function*(){return this.threshold=yield new ir().create(r,e),this.threshold})}encryptShares(r,e,t=""){return u(this,null,function*(){try{let i=r.map(o=>String((0,Kr.encode)((0,Br.default)(o))));return new D(i,e).encrypt().map(o=>(o.operatorPublicKey=(0,Kr.encode)(o.operatorPublicKey),t===cr.SHARES_FORMAT_ABI&&(o.operatorPublicKey=_.eth.abi.encodeParameter("string",o.operatorPublicKey),o.privateKey=_.eth.abi.encodeParameter("string",o.privateKey)),o))}catch(i){return i}})}buildShares(r,e,t){return u(this,null,function*(){let i=yield this.createThreshold(r,e);return this.encryptShares(t,i.shares)})}getThreshold(){return this.threshold}getValidatorPublicKey(){var r;return((r=this.getThreshold())==null?void 0:r.validatorPublicKey)||""}buildPayload(r,e,t,i){return this.keyShares.generateContractPayload({validatorPublicKey:r,operatorsIds:e,encryptedShares:t,ssvAmount:i})}buildPayloadFromKeyShares(r,e){var l,p,y,w,j,X,Ir,Er,Pr,vr;let t=((p=(l=r.data)==null?void 0:l.shares)==null?void 0:p.publicKeys)||[],i=(y=r.data)==null?void 0:y.publicKey,a=((j=(w=r.data)==null?void 0:w.shares)==null?void 0:j.encryptedKeys)||[],o=((X=r.data)==null?void 0:X.operatorPublicKeys)||[];if(t.length!==a.length||t.length!==o.length||a.length!==o.length||!a.length||!o.length||!t.length)throw Error("Operator public keys and shares public/encrypted keys length does not match or have zero length.");return this.keyShares.generateContractPayload({validatorPublicKey:i,operatorsIds:(Er=(Ir=r.data)==null?void 0:Ir.operators)==null?void 0:Er.map(pr=>pr.id),encryptedShares:t.map((pr,Lr)=>({publicKey:pr,privateKey:a[Lr]})),ssvAmount:e||((vr=(Pr=r.payload)==null?void 0:Pr.readable)==null?void 0:vr.ssvAmount)||0})}},H=cr;H.SHARES_FORMAT_ABI="abi",H.VERSION={V2:"v2",V3:"v3"};})();
