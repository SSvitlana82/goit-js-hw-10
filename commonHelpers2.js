import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");t.addEventListener("submit",m);function m(r){r.preventDefault();const e=t.delay.value,o=t.state.value;new Promise((s,n)=>{setTimeout(o==="fulfilled"?()=>s(o):()=>n(o),e)}).then(s=>{i.show({position:"topRight",color:"green",message:`✅ Fulfilled promise in ${e}ms`})}).catch(s=>{i.show({position:"topRight",color:"red",message:`❌ Rejected promise in ${e}ms`})}),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map