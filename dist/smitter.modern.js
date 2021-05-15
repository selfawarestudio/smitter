export default function(){let e={};return{emit:(t,n)=>e[t]?e[t].map(e=>e(n)):[],on(t,n){e[t]=(e[t]||[]).concat(n);let r=!1;return()=>{r||(r=!0,e[t].splice(e[t].indexOf(n),1))}}}}
//# sourceMappingURL=smitter.modern.js.map
