module.exports=function(){var n={};return{emit:function(t,o){n[t]&&n[t].map(function(n){return n(o)})},on:function(t,o){n[t]=(n[t]||[]).concat(o);var r=!1;return function(){r||(r=!0,n[t].splice(n[t].indexOf(o),1))}}}};
//# sourceMappingURL=smitter.js.map
