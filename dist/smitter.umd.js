!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=function(){var n={};return{emit:function(t,e){n[t]&&n[t].map(function(n){return n(e)})},on:function(t,e){n[t]=(n[t]||[]).concat(e);var i=!1;return function(){i||(i=!0,n[t].splice(n[t].indexOf(e),1))}}}}:"function"==typeof define&&define.amd?define(function(){return function(){var n={};return{emit:function(t,e){n[t]&&n[t].map(function(n){return n(e)})},on:function(t,e){n[t]=(n[t]||[]).concat(e);var i=!1;return function(){i||(i=!0,n[t].splice(n[t].indexOf(e),1))}}}}}):(n=n||self).smitter=function(){var n={};return{emit:function(t,e){n[t]&&n[t].map(function(n){return n(e)})},on:function(t,e){n[t]=(n[t]||[]).concat(e);var i=!1;return function(){i||(i=!0,n[t].splice(n[t].indexOf(e),1))}}}}}(this);
//# sourceMappingURL=smitter.umd.js.map