import{a as u,h as l,o as f}from"../../assets/cabinet-CxHD5ZHW.js";import{h,c as g,b as D,s as p}from"../../assets/closeDropDownList-CK9utEua.js";import{f as T,h as F,g as k,i as v,c as y}from"../../assets/vendor-ZgN2xaTy.js";let i="",c="";function C(){T("#formDatetimeCalendar",{inline:!0,dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...F.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(t,n,e){if(t.length===2){const a=t[0],s=t[1],m={year:"numeric",month:"2-digit",day:"2-digit"},o=new Intl.DateTimeFormat("uk-UA",m),r=o.format(a),d=o.format(s);E(r,d)}}})}function E(t,n){i=t,c=n}async function S(t){const n=k(u);try{const e=await v(y(n,"tournaments"),t);console.log("Документ записано з ID: ",e.id)}catch(e){l(e)}}function b(){const t=document.querySelector(".js-tournaments-form");t==null||t.addEventListener("submit",n);function n(e){var m,o;e.preventDefault();const a=e.target.elements,s={name:((m=a.namedItem("name"))==null?void 0:m.value)??"",description:((o=a.namedItem("description"))==null?void 0:o.value)??"","limit-region":"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:i??"",endTournament:c??""};[...a].forEach(r=>{r.checked&&(s[r.name]=r.value)}),S(s)}}function w(){b()}function I(){w()}document.addEventListener("DOMContentLoaded",()=>{h(),g(),f(),D(),p(),C(),I()});
//# sourceMappingURL=tournaments.js.map
