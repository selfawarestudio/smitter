module.exports=function(){var n={};return{emit:function(t,r){return n[t]?n[t].map(function(n){return n(r)}):[]},on:function(t,r){n[t]=(n[t]||[]).concat(r);var u=!1;return function(){u||(u=!0,n[t].splice(n[t].indexOf(r),1))}}}};
//# sourceMappingURL=smitter.js.map
