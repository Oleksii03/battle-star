import{a as _,h as k,o as b}from"../../assets/cabinet-CxHD5ZHW.js";import{h as f,c as v,b as h,s as x}from"../../assets/closeDropDownList-CK9utEua.js";import{f as D,h as g,g as y,i as T,c as L}from"../../assets/vendor-ZgN2xaTy.js";let d="",l="";function $(){const t=new Date,e=new Date;e.setDate(t.getDate()+3);function a(n){if(n.length===2){const o=n[0],c=n[1],r={year:"numeric",month:"2-digit",day:"2-digit"},s=new Intl.DateTimeFormat("uk-UA",r),i=s.format(o),m=s.format(c);S(i,m)}}D("#formDatetimeCalendar",{inline:!0,minDate:t,defaultDate:[t,e],dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...g.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(n){a(n)}}),a([t,e])}function S(t,e){d=t,l=e}async function E(t){const e=y(_);try{const a=await T(L(e,"tournaments"),t);console.log("Документ записано з ID: ",a.id)}catch(a){k(a)}finally{location.reload()}}function F(t){const e=document.querySelector(".js-tournaments-backdrop"),a=document.querySelector(".js-cancel"),n=document.querySelector(".js-confirm");a==null||a.addEventListener("click",()=>{o(),location.reload()}),n==null||n.addEventListener("click",()=>{E(t),o()});function o(){e==null||e.classList.remove("tournaments-backdrop_active"),document.body.classList.remove("to-freeze")}}function j(t){const e=document.querySelector(".js-tournaments-backdrop-content"),{name:a,description:n,rank:o,teams:c,rate:r,regime:s,startTournament:i,endTournament:m,time:p,limitRegion:u}=t;e.innerHTML=`<ul class="tournaments-backdrop__content-list">
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ваш турнір:</p>
        <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${a}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Опис:</p>
          <div class="separator"></div>
        ${n?`<p class="tournaments-backdrop__content-item-text">${n}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ранг:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${o} <span class="currency">BS</span></p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Кількість команд:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${c}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ставка входу:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${r} <span class="currency">BS</span></p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Режим:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${s}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Турнір починається:</p>
          <div class="separator"></div>
        ${i?`<p class="tournaments-backdrop__content-item-text">${i}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Турнір завершується:</p>
          <div class="separator"></div>
        ${m?`<p class="tournaments-backdrop__content-item-text">${m}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Час початку:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${p}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Обмежити участь вашим регіоном:</p>
          <div class="separator"></div>
       ${u==="on"?'<p class="tournaments-backdrop__content-item-text">так</p>':'<p class="tournaments-backdrop__content-item-text">ні</p>'} 
      </li>

      <li class="tournaments-backdrop__content-item tournaments-backdrop__content-item_last">
       <button
        type="button"
        class="confirm js-confirm">
        Підтвердити
       </button>
       <div class="separator"></div>
       <button
        type="button"
        class="cancel js-cancel">
        Скасувати
       </button>
     </li>
    </ul>`,F(t)}function q(t){const e=document.querySelector(".js-tournaments-backdrop");e==null||e.classList.add("tournaments-backdrop_active"),document.body.classList.add("to-freeze"),setTimeout(()=>j(t),5e3)}function w(){const t=document.querySelector(".js-tournaments-form");t==null||t.addEventListener("submit",e);function e(a){var c,r;a.preventDefault();const n=a.target.elements,o={name:((c=n.namedItem("name"))==null?void 0:c.value)??"",description:((r=n.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:d??"",endTournament:l??""};[...n].forEach(s=>{s.checked&&(o[s.name]=s.value)}),q(o),t.reset()}}function C(){w()}function I(){C()}document.addEventListener("DOMContentLoaded",()=>{f(),v(),b(),h(),x(),$(),I()});
//# sourceMappingURL=tournaments.js.map
