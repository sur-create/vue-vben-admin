var ge=Object.defineProperty,pe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var A=Math.pow,B=(r,e,t)=>e in r?ge(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,S=(r,e)=>{for(var t in e||(e={}))be.call(e,t)&&B(r,t,e[t]);if(V)for(var t of V(e))Me.call(e,t)&&B(r,t,e[t]);return r},D=(r,e)=>pe(r,me(e));import{p as j,f as ye,_ as ke,w as ve}from"./index.js";import{w as Ee}from"./antd-4273b3e7.js";import{d as Se,f as xe,c as we,h as De,w as Te,u as _,a7 as Ae,Z as H,_ as Ce,a8 as Ie,ad as Re,aa as Le,a9 as Pe,N as je,ai as _e,aj as Ne,ac as Oe,ab as $e,$ as F,a1 as N}from"./vue-ea98dac5.js";const z=(r,e)=>r.push.apply(r,e),C=r=>r.sort((e,t)=>e.i-t.i||e.j-t.j),Z=r=>{const e={};let t=1;return r.forEach(s=>{e[s]=t,t+=1}),e};var We={4:[[1,2],[2,3]],5:[[1,3],[2,3],[2,4]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const X=2050,K=1e3,ze=We,Ue=10,Ye=1e4,se=10,ne=50,re=20,ae=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,Ge=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,qe=/^[A-Z\xbf-\xdf]+$/,ie=/^[^a-z\xdf-\xff]+$/,Ve=/^[a-z\xdf-\xff]+$/,Be=/^[^A-Z\xbf-\xdf]+$/,He=/[a-z\xdf-\xff]/,Fe=/[A-Z\xbf-\xdf]/,Ze=/[^A-Za-z\xbf-\xdf]/gi,Xe=/^\d+$/,Y=new Date().getFullYear(),Ke={recentYear:/19\d\d|200\d|201\d|202\d/g},Je=[" ",",",";",":","|","/","\\","_",".","-"];class Qe{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],s=this.filterNoise(t);return C(s)}getMatchesWithSeparator(e){const t=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(e.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=e.length);a+=1){const i=e.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&t.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-Y);for(let a=0;a<=Math.abs(e.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=e.length);i+=1){const o=e.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],l=o.length;if(ze[l].forEach(([p,f])=>{const b=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,p),10),parseInt(o.slice(p,f),10),parseInt(o.slice(f),10)]);b!=null&&c.push(b)}),c.length>0){let p=c[0],f=n(c[0]);c.slice(1).forEach(b=>{const h=n(b);h<f&&(p=b,f=h)}),t.push({pattern:"date",token:o,i:a,j:i,separator:"",year:p.year,month:p.month,day:p.day})}}}return t}filterNoise(e){return e.filter(t=>{let s=!1;const n=e.length;for(let a=0;a<n;a+=1){const i=e[a];if(t!==i&&i.i<=t.i&&i.j>=t.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,s=0,n=0;for(let a=0,i=e.length;a<i;a+=1){const o=e[a];if(o>99&&o<K||o>X)return null;o>31&&(s+=1),o>12&&(t+=1),o<=0&&(n+=1)}return s>=2||t===3||n>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],s=t.length;for(let n=0;n<s;n+=1){const[a,i]=t[n];if(K<=a&&a<=X){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=t[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let s=0;s<t.length;s+=1){const n=t[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const w=new Uint32Array(65536),et=(r,e)=>{const t=r.length,s=e.length,n=1<<t-1;let a=-1,i=0,o=t,c=t;for(;c--;)w[r.charCodeAt(c)]|=1<<c;for(c=0;c<s;c++){let l=w[e.charCodeAt(c)];const d=l|i;l|=(l&a)+a^a,i|=~(l|a),a&=l,i&n&&o++,a&n&&o--,i=i<<1|1,a=a<<1|~(d|i),i&=d}for(c=t;c--;)w[r.charCodeAt(c)]=0;return o},tt=(r,e)=>{const t=e.length,s=r.length,n=[],a=[],i=Math.ceil(t/32),o=Math.ceil(s/32);for(let h=0;h<i;h++)a[h]=-1,n[h]=0;let c=0;for(;c<o-1;c++){let h=0,m=-1;const M=c*32,y=Math.min(32,s)+M;for(let g=M;g<y;g++)w[r.charCodeAt(g)]|=1<<g;for(let g=0;g<t;g++){const E=w[e.charCodeAt(g)],v=a[g/32|0]>>>g&1,x=n[g/32|0]>>>g&1,G=E|h,q=((E|x)&m)+m^m|E|x;let I=h|~(q|m),L=m&q;I>>>31^v&&(a[g/32|0]^=1<<g),L>>>31^x&&(n[g/32|0]^=1<<g),I=I<<1|v,L=L<<1|x,m=L|~(G|I),h=I&G}for(let g=M;g<y;g++)w[r.charCodeAt(g)]=0}let l=0,d=-1;const p=c*32,f=Math.min(32,s-p)+p;for(let h=p;h<f;h++)w[r.charCodeAt(h)]|=1<<h;let b=s;for(let h=0;h<t;h++){const m=w[e.charCodeAt(h)],M=a[h/32|0]>>>h&1,y=n[h/32|0]>>>h&1,g=m|l,E=((m|y)&d)+d^d|m|y;let v=l|~(E|d),x=d&E;b+=v>>>s-1&1,b-=x>>>s-1&1,v>>>31^M&&(a[h/32|0]^=1<<h),x>>>31^y&&(n[h/32|0]^=1<<h),v=v<<1|M,x=x<<1|y,d=x|~(g|v),l=v&g}for(let h=p;h<f;h++)w[r.charCodeAt(h)]=0;return b},st=(r,e)=>{if(r.length<e.length){const t=e;e=r,r=t}return e.length===0?r.length:r.length<=32?et(r,e):tt(r,e)},nt=(r,e,t)=>{const s=r.length<=e.length,n=r.length<=t;return s||n?Math.ceil(r.length/4):t},rt=(r,e,t)=>{let s=0;const n=Object.keys(e).find(a=>{const i=nt(r,a,t);if(Math.abs(r.length-a.length)>i)return!1;const o=st(r,a),c=o<=i;return c&&(s=o),c});return n?{levenshteinDistance:s,levenshteinDistanceEntry:n}:{}};var J={a:["4","@"],b:["8"],c:["(","{","[","<"],d:["6","|)"],e:["3"],f:["#"],g:["6","9","&"],h:["#","|-|"],i:["1","!","|"],k:["<","|<"],l:["!","1","|","7"],m:["^^","nn","2n","/\\\\/\\\\"],n:["//"],o:["0","()"],q:["9"],u:["|_|"],s:["$","5"],t:["+","7"],v:["<",">","/"],w:["^/","uu","vv","2u","2v","\\\\/\\\\/"],x:["%","><"],z:["2"]},O={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class R{constructor(e=[]){this.parents=e,this.children=new Map}addSub(e,...t){const s=e.charAt(0);this.children.has(s)||this.children.set(s,new R([...this.parents,s]));let n=this.children.get(s);for(let a=1;a<e.length;a+=1){const i=e.charAt(a);n.hasChild(i)||n.addChild(i),n=n.getChild(i)}return n.subs=(n.subs||[]).concat(t),this}getChild(e){return this.children.get(e)}isTerminal(){return!!this.subs}addChild(e){this.hasChild(e)||this.children.set(e,new R([...this.parents,e]))}hasChild(e){return this.children.has(e)}}var Q=(r,e)=>(Object.entries(r).forEach(([t,s])=>{s.forEach(n=>{e.addSub(n,t)})}),e);class at{constructor(){this.matchers={},this.l33tTable=J,this.trieNodeRoot=Q(J,new R),this.dictionary={userInputs:[]},this.rankedDictionaries={},this.rankedDictionariesMaxWordSize={},this.translations=O,this.graphs={},this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.l33tMaxSubstitutions=512,this.maxLength=256,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable,this.trieNodeRoot=Q(e.l33tTable,new R)),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold),e.l33tMaxSubstitutions!==void 0&&(this.l33tMaxSubstitutions=e.l33tMaxSubstitutions),e.maxLength!==void 0&&(this.maxLength=e.maxLength)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(O).forEach(s=>{if(s in e){const n=s;Object.keys(O[n]).forEach(a=>{a in e[n]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={},t={};Object.keys(this.dictionary).forEach(s=>{e[s]=Z(this.dictionary[s]),t[s]=this.getRankedDictionariesMaxWordSize(this.dictionary[s])}),this.rankedDictionaries=e,this.rankedDictionariesMaxWordSize=t}getRankedDictionariesMaxWordSize(e){const t=e.map(s=>typeof s!="string"?s.toString().length:s.length);return t.length===0?0:t.reduce((s,n)=>Math.max(s,n),-1/0)}buildSanitizedRankedDictionary(e){const t=[];return e.forEach(s=>{const n=typeof s;(n==="string"||n==="number"||n==="boolean")&&t.push(s.toString().toLowerCase())}),Z(t)}extendUserInputsDictionary(e){this.dictionary.userInputs||(this.dictionary.userInputs=[]);const t=[...this.dictionary.userInputs,...e];this.rankedDictionaries.userInputs=this.buildSanitizedRankedDictionary(t),this.rankedDictionariesMaxWordSize.userInputs=this.getRankedDictionariesMaxWordSize(t)}addMatcher(e,t){this.matchers[e]||(this.matchers[e]=t)}}const u=new at;class it{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(s=>D(S({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:e.length-1-s.j,j:e.length-1-s.i}))}}const ot=({substr:r,buffer:e,limit:t,trieRoot:s})=>{const n=[],a=(i,o,c,l,d)=>{if(n.length>=t)return;if(c===r.length){i===o&&n.push({password:e.join(""),changes:d});return}const p=[];let f=s;for(let h=c;h<r.length;h+=1){const m=r.charAt(h);if(f=f.getChild(m),!f)break;p.push(f)}let b=!1;for(let h=c+p.length-1;h>=c;h-=1)if(f=p[h-c],f.isTerminal()){b=!0;const m=f.subs;for(const M of m){e.push(M);const y=d.concat({i:l,letter:M,substitution:f.parents.join("")});if(a(i,o,h+1,l+M.length,y),e.pop(),n.length>=t)return}}if(!i||!b){const h=r.charAt(c);e.push(h),a(i,o&&!b,c+1,l+1,d),e.pop()}};return a(!0,!0,0,0,[]),a(!1,!0,0,0,[]),n},ct=(r,e,t)=>ot({substr:r,buffer:[],limit:e,trieRoot:t}),lt=(r,e,t)=>{const s=r.changes.filter(o=>o.i>=e&&o.i<=t),n=s.reduce((o,c)=>o-c.letter.length+c.substitution.length,t),a=[],i=[];return s.forEach(o=>{a.findIndex(l=>l.letter===o.letter&&l.substitution===o.substitution)<0&&(a.push({letter:o.letter,substitution:o.substitution}),i.push(`${o.substitution} -> ${o.letter}`))}),{j:n,subs:a,subDisplay:i.join(", ")}};class ht{constructor(e){this.defaultMatch=e}isAlreadyIncluded(e,t){return e.some(s=>Object.entries(s).every(([n,a])=>n==="subs"||a===t[n]))}match({password:e}){const t=[],s=ct(e,u.l33tMaxSubstitutions,u.trieNodeRoot);let n=!1,a=!0;return s.forEach(i=>{if(n)return;const o=this.defaultMatch({password:i.password,useLevenshtein:a});a=!1,o.forEach(c=>{n||(n=c.i===0&&c.j===e.length-1);const l=lt(i,c.i,c.j),d=e.slice(c.i,+l.j+1||9e9),p=S(D(S({},c),{l33t:!0,token:d}),l),f=this.isAlreadyIncluded(t,p);d.toLowerCase()!==c.matchedWord&&!f&&t.push(p)})}),t.filter(i=>i.token.length>1)}}class ut{constructor(){this.l33t=new ht(this.defaultMatch),this.reverse=new it(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return C(t)}defaultMatch({password:e,useLevenshtein:t=!0}){const s=[],n=e.length,a=e.toLowerCase();return Object.keys(u.rankedDictionaries).forEach(i=>{const o=u.rankedDictionaries[i],c=u.rankedDictionariesMaxWordSize[i],l=Math.min(c,n);for(let d=0;d<n;d+=1){const p=Math.min(d+l,n);for(let f=d;f<p;f+=1){const b=a.slice(d,+f+1||9e9),h=b in o;let m={};const M=d===0&&f===n-1;u.useLevenshteinDistance&&M&&!h&&t&&(m=rt(b,o,u.levenshteinThreshold));const y=Object.keys(m).length!==0;if(h||y){const g=y?m.levenshteinDistanceEntry:b,E=o[g];s.push(S({pattern:"dictionary",i:d,j:f,token:e.slice(d,+f+1||9e9),matchedWord:b,rank:E,dictionaryName:i,reversed:!1,l33t:!1},m))}}}}),s}}class dt{match({password:e,regexes:t=Ke}){const s=[];return Object.keys(t).forEach(n=>{const a=t[n];a.lastIndex=0;const i=a.exec(e);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),C(s)}}var T={nCk(r,e){let t=r;if(e>t)return 0;if(e===0)return 1;let s=1;for(let n=1;n<=e;n+=1)s*=t,s/=n,t-=1;return s},log10(r){return r===0?0:Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let e=1;for(let t=2;t<=r;t+=1)e*=t;return e}},ft=({token:r})=>{let e=A(Ue,r.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return r.length===1?t=se+1:t=ne+1,Math.max(e,t)},gt=({year:r,separator:e})=>{let s=Math.max(Math.abs(r-Y),re)*365;return e&&(s*=4),s};const pt=r=>{const e=r.split(""),t=e.filter(i=>i.match(Fe)).length,s=e.filter(i=>i.match(He)).length;let n=0;const a=Math.min(t,s);for(let i=1;i<=a;i+=1)n+=T.nCk(t+s,i);return n};var mt=r=>{const e=r.replace(Ze,"");if(e.match(Be)||e.toLowerCase()===e)return 1;const t=[ae,Ge,ie],s=t.length;for(let n=0;n<s;n+=1){const a=t[n];if(e.match(a))return 2}return pt(e)};const bt=({sub:r,token:e})=>{const t=e.toLowerCase().split(""),s=t.filter(a=>a===r.substitution).length,n=t.filter(a=>a===r.letter).length;return{subbedCount:s,unsubbedCount:n}};var Mt=({l33t:r,subs:e,token:t})=>{if(!r)return 1;let s=1;return e.forEach(n=>{const{subbedCount:a,unsubbedCount:i}=bt({sub:n,token:t});if(a===0||i===0)s*=2;else{const o=Math.min(i,a);let c=0;for(let l=1;l<=o;l+=1)c+=T.nCk(i+a,l);s*=c}}),s},yt=({rank:r,reversed:e,l33t:t,subs:s,token:n,dictionaryName:a})=>{const i=r,o=mt(n),c=Mt({l33t:t,subs:s,token:n}),l=e&&2||1;let d;return a==="diceware"?d=A(6,5)/2:d=i*o*c*l,{baseGuesses:i,uppercaseVariations:o,l33tVariations:c,calculation:d}},kt=({regexName:r,regexMatch:e,token:t})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return A(s[r],t.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-Y),re)}return 0},vt=({baseGuesses:r,repeatCount:e})=>r*e,Et=({token:r,ascending:e})=>{const t=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(t)?s=4:t.match(/\d/)?s=10:s=26,e||(s*=2),s*r.length};const St=r=>{let e=0;return Object.keys(r).forEach(t=>{const s=r[t];e+=s.filter(n=>!!n).length}),e/=Object.entries(r).length,e},xt=({token:r,graph:e,turns:t})=>{const s=Object.keys(u.graphs[e]).length,n=St(u.graphs[e]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(t,o-1);for(let l=1;l<=c;l+=1)a+=T.nCk(o-1,l-1)*s*A(n,l)}return a};var wt=({graph:r,token:e,shiftedCount:t,turns:s})=>{let n=xt({token:e,graph:r,turns:s});if(t){const a=e.length-t;if(t===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(t,a);o+=1)i+=T.nCk(t+a,o);n*=i}}return Math.round(n)};const Dt=(r,e)=>{let t=1;return r.token.length<e.length&&(r.token.length===1?t=se:t=ne),t},ee={bruteforce:ft,date:gt,dictionary:yt,regex:kt,repeat:vt,sequence:Et,spatial:wt},Tt=(r,e)=>ee[r]?ee[r](e):u.matchers[r]&&"scoring"in u.matchers[r]?u.matchers[r].scoring(e):0;var At=(r,e)=>{const t={};if("guesses"in r&&r.guesses!=null)return r;const s=Dt(r,e),n=Tt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,t.baseGuesses=n.baseGuesses,t.uppercaseVariations=n.uppercaseVariations,t.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return D(S(S({},r),t),{guesses:i,guessesLog10:T.log10(i)})};const k={password:"",optimal:{},excludeAdditive:!1,separatorRegex:void 0,fillArray(r,e){const t=[];for(let s=0;s<r;s+=1){let n=[];e==="object"&&(n={}),t.push(n)}return t},makeBruteforceMatch(r,e){return{pattern:"bruteforce",token:this.password.slice(r,+e+1||9e9),i:r,j:e}},update(r,e){const t=r.j,s=At(r,this.password);let n=s.guesses;e>1&&(n*=this.optimal.pi[s.i-1][e-1]);let a=T.factorial(e)*n;this.excludeAdditive||(a+=A(Ye,e-1));let i=!1;Object.keys(this.optimal.g[t]).forEach(o=>{const c=this.optimal.g[t][o];parseInt(o,10)<=e&&c<=a&&(i=!0)}),i||(this.optimal.g[t][e]=a,this.optimal.m[t][e]=s,this.optimal.pi[t][e]=n)},bruteforceUpdate(r){let e=this.makeBruteforceMatch(0,r);this.update(e,1);for(let t=1;t<=r;t+=1){e=this.makeBruteforceMatch(t,r);const s=this.optimal.m[t-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(e,parseInt(n,10)+1)})}},unwind(r){const e=[];let t=r-1,s=0,n=1/0;const a=this.optimal.g[t];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});t>=0;){const i=this.optimal.m[t][s];e.unshift(i),t=i.i-1,s-=1}return e}};var U={mostGuessableMatchSequence(r,e,t=!1){k.password=r,k.excludeAdditive=t;const s=r.length;let n=k.fillArray(s,"array");e.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((l,d)=>l.i-d.i)),k.optimal={m:k.fillArray(s,"object"),pi:k.fillArray(s,"object"),g:k.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(l=>{l.i>0?Object.keys(k.optimal.m[l.i-1]).forEach(d=>{k.update(l,parseInt(d,10)+1)}):k.update(l,1)}),k.bruteforceUpdate(c);const a=k.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:T.log10(o),sequence:a}},getGuesses(r,e){const t=r.length;let s=0;return r.length===0?s=1:s=k.optimal.g[t-1][e],s}};function $({isLazy:r=!1,isAnchored:e=!1,flags:t=""}){return new RegExp(`${e?"^":""}(.+${r?"?":""})\\1+${e?"$":""}`,t)}class Ct{match({password:e,omniMatch:t}){const s=[];let n=0;for(;n<e.length;){const i=this.getGreedyMatch(e,n),o=this.getLazyMatch(e,n);if(i==null)break;const{match:c,baseToken:l}=this.setMatchToken(i,o);if(c){const d=c.index+c[0].length-1,p=this.getBaseGuesses(l,t);s.push(this.normalizeMatch(l,d,c,p)),n=d+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(e,t,s,n){const a={pattern:"repeat",i:s.index,j:t,token:s[0],baseToken:e,baseGuesses:0,repeatCount:s[0].length/e.length};return n instanceof Promise?n.then(i=>D(S({},a),{baseGuesses:i})):D(S({},a),{baseGuesses:n})}getGreedyMatch(e,t){const s=$({isLazy:!1,flags:"g"});return s.lastIndex=t,s.exec(e)}getLazyMatch(e,t){const s=$({isLazy:!0,flags:"g"});return s.lastIndex=t,s.exec(e)}setMatchToken(e,t){const s=$({isLazy:!0,isAnchored:!0});let n,a="";if(t&&e[0].length>t[0].length){n=e;const i=s.exec(n[0]);i&&(a=i[1])}else n=t,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(e,t){const s=t.match(e);return s instanceof Promise?s.then(a=>U.mostGuessableMatchSequence(e,a).guesses):U.mostGuessableMatchSequence(e,s).guesses}}class It{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let s=0,n=null;const a=e.length;for(let i=1;i<a;i+=1){const o=e.charCodeAt(i)-e.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:e,result:t}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:e,result:t}),t}update({i:e,j:t,delta:s,password:n,result:a}){if(t-e>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(o);return a.push({pattern:"sequence",i:e,j:t,token:n.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:s>0})}}return null}getSequence(e){let t="unicode",s=26;return Ve.test(e)?(t="lower",s=26):qe.test(e)?(t="upper",s=26):Xe.test(e)&&(t="digits",s=10),{sequenceName:t,sequenceSpace:s}}}class Rt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(u.graphs).forEach(s=>{const n=u.graphs[s];z(t,this.helper(e,n,s))}),C(t)}checkIfShifted(e,t,s){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(s))?1:0}helper(e,t,s){let n;const a=[];let i=0;const o=e.length;for(;i<o-1;){let c=i+1,l=0,d=0;for(n=this.checkIfShifted(s,e,i);;){const p=e.charAt(c-1),f=t[p]||[];let b=!1,h=-1,m=-1;if(c<o){const M=e.charAt(c),y=f.length;for(let g=0;g<y;g+=1){const E=f[g];if(m+=1,E){const v=E.indexOf(M);if(v!==-1){b=!0,h=m,v===1&&(n+=1),l!==h&&(d+=1,l=h);break}}}}if(b)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:e.slice(i,c),graph:s,turns:d,shiftedCount:n}),i=c;break}}}return a}}const Lt=new RegExp(`[${Je.join("")}]`);class P{static getMostUsedSeparatorChar(e){const t=[...e.split("").filter(n=>Lt.test(n)).reduce((n,a)=>{const i=n.get(a);return i?n.set(a,i+1):n.set(a,1),n},new Map).entries()].sort(([n,a],[i,o])=>o-a);if(!t.length)return;const s=t[0];if(!(s[1]<2))return s[0]}static getSeparatorRegex(e){return new RegExp(`([^${e}
])(${e})(?!${e})`,"g")}match({password:e}){const t=[];if(e.length===0)return t;const s=P.getMostUsedSeparatorChar(e);if(s===void 0)return t;const n=P.getSeparatorRegex(s);for(const a of e.matchAll(n)){if(a.index===void 0)continue;const i=a.index+1;t.push({pattern:"separator",token:s,i,j:i})}return t}}class Pt{constructor(){this.matchers={date:Qe,dictionary:ut,regex:dt,repeat:Ct,sequence:It,spatial:Rt,separator:P}}match(e){const t=[],s=[];return[...Object.keys(this.matchers),...Object.keys(u.matchers)].forEach(a=>{if(!this.matchers[a]&&!u.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:u.matchers[a].Matching,c=new i().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{z(t,l)}),s.push(c)):z(t,c)}),s.length>0?new Promise((a,i)=>{Promise.all(s).then(()=>{a(C(t))}).catch(o=>{i(o)})}):C(t)}}const oe=1,ce=oe*60,le=ce*60,he=le*24,ue=he*31,de=ue*12,jt=de*100,W={second:oe,minute:ce,hour:le,day:he,month:ue,year:de,century:jt};class _t{translate(e,t){let s=e;t!==void 0&&t!==1&&(s+="s");const{timeEstimation:n}=u.translations;return n[s].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(n=>{const a=t[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:t,crackTimesDisplay:s,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",s;const n=Object.keys(W),a=n.findIndex(i=>e<W[i]);return a>-1&&(t=n[a-1],a!==0?s=Math.round(e/W[t]):t="ltSecond"),this.translate(t,s)}}var Nt=()=>null,Ot=()=>({warning:u.translations.warnings.dates,suggestions:[u.translations.suggestions.dates]});const $t=(r,e)=>{let t=null;return e&&!r.l33t&&!r.reversed?r.rank<=10?t=u.translations.warnings.topTen:r.rank<=100?t=u.translations.warnings.topHundred:t=u.translations.warnings.common:r.guessesLog10<=4&&(t=u.translations.warnings.similarToCommon),t},Wt=(r,e)=>{let t=null;return e&&(t=u.translations.warnings.wordByItself),t},zt=(r,e)=>e?u.translations.warnings.namesByThemselves:u.translations.warnings.commonNames,Ut=(r,e)=>{let t=null;const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?t=$t(r,e):s.includes("wikipedia")?t=Wt(r,e):n?t=zt(r,e):s==="userInputs"&&(t=u.translations.warnings.userInputs),t};var Yt=(r,e)=>{const t=Ut(r,e),s=[],n=r.token;return n.match(ae)?s.push(u.translations.suggestions.capitalization):n.match(ie)&&n.toLowerCase()!==n&&s.push(u.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(u.translations.suggestions.reverseWords),r.l33t&&s.push(u.translations.suggestions.l33t),{warning:t,suggestions:s}},Gt=r=>r.regexName==="recentYear"?{warning:u.translations.warnings.recentYears,suggestions:[u.translations.suggestions.recentYears,u.translations.suggestions.associatedYears]}:{warning:null,suggestions:[]},qt=r=>{let e=u.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(e=u.translations.warnings.simpleRepeat),{warning:e,suggestions:[u.translations.suggestions.repeated]}},Vt=()=>({warning:u.translations.warnings.sequences,suggestions:[u.translations.suggestions.sequences]}),Bt=r=>{let e=u.translations.warnings.keyPattern;return r.turns===1&&(e=u.translations.warnings.straightRow),{warning:e,suggestions:[u.translations.suggestions.longerKeyboardPattern]}},Ht=()=>null;const te={warning:null,suggestions:[]};class Ft{constructor(){this.matchers={bruteforce:Nt,date:Ot,dictionary:Yt,regex:Gt,repeat:qt,sequence:Vt,spatial:Bt,separator:Ht},this.defaultFeedback={warning:null,suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(u.translations.suggestions.useWords,u.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return te;const s=u.translations.suggestions.anotherWord,n=this.getLongestMatch(t);let a=this.getMatchFeedback(n,t.length===1);return a!=null?a.suggestions.unshift(s):a={warning:null,suggestions:[s]},a}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(n=>{n.token.length>t.token.length&&(t=n)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):u.matchers[e.pattern]&&"feedback"in u.matchers[e.pattern]?u.matchers[e.pattern].feedback(e,t):te}}const fe=()=>new Date().getTime(),Zt=(r,e,t)=>{const s=new Ft,n=new _t,a=U.mostGuessableMatchSequence(e,r),i=fe()-t,o=n.estimateAttackTimes(a.guesses);return D(S(S({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},Xt=(r,e)=>(e&&u.extendUserInputsDictionary(e),new Pt().match(r)),Kt=(r,e)=>{const t=fe(),s=Xt(r,e);if(s instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Zt(s,r,t)},Jt=Se({name:"StrengthMeter",components:{InputPassword:Ee.Password},props:{value:j.string,showInput:j.bool.def(!0),disabled:j.bool},emits:["score-change","change"],setup(r,{emit:e}){const t=xe(""),{prefixCls:s}=ye("strength-meter"),n=we(()=>{const{disabled:i}=r;if(i)return-1;const c=_(t)?Kt(_(t)).score:-1;return e("score-change",c),c});function a(i){e("change",i.target.value),t.value=i.target.value}return De(()=>{t.value=r.value||""}),Te(()=>_(t),i=>{e("change",i)}),{getPasswordStrength:n,handleChange:a,prefixCls:s,innerValueRef:t}}});const Qt=["data-score"];function es(r,e,t,s,n,a){const i=Ae("InputPassword");return H(),Ce("div",{class:N([r.prefixCls,"relative"])},[r.showInput?(H(),Ie(i,Oe({key:0},r.$attrs,{allowClear:"",value:r.innerValueRef,onChange:r.handleChange,disabled:r.disabled}),Re({_:2},[Le(Object.keys(r.$slots),o=>({name:o,fn:Pe(c=>[je(r.$slots,o,_e(Ne(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):$e("",!0),F("div",{class:N(`${r.prefixCls}-bar`)},[F("div",{class:N(`${r.prefixCls}-bar--fill`),"data-score":r.getPasswordStrength},null,10,Qt)],2)],2)}const ts=ke(Jt,[["render",es],["__scopeId","data-v-6f788a6c"]]),is=ve(ts);export{is as S};