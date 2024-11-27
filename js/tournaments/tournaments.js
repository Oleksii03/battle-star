import{a as _,h as k,o as b}from"../../assets/cabinet-CxHD5ZHW.js";import{h as f,c as v,b as h,s as x}from"../../assets/closeDropDownList-CK9utEua.js";import{f as y,h as D,g,i as T,c as L}from"../../assets/vendor-ZgN2xaTy.js";let l="",p="";function S(){const t=new Date;new Date().setDate(t.getDate()+3),y("#formDatetimeCalendar",{inline:!0,dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...D.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(n,a,o){if(n.length===2){const c=n[0],r=n[1],s={year:"numeric",month:"2-digit",day:"2-digit"},i=new Intl.DateTimeFormat("uk-UA",s),m=i.format(c),d=i.format(r);$(m,d)}}})}function $(t,e){l=t,p=e}async function E(t){const e=g(_);try{const n=await T(L(e,"tournaments"),t);console.log("Документ записано з ID: ",n.id)}catch(n){k(n)}finally{location.reload()}}function F(t){const e=document.querySelector(".js-tournaments-backdrop"),n=document.querySelector(".js-cancel"),a=document.querySelector(".js-confirm");n==null||n.addEventListener("click",()=>{o(),location.reload()}),a==null||a.addEventListener("click",()=>{E(t),o()});function o(){e==null||e.classList.remove("tournaments-backdrop_active"),document.body.classList.remove("to-freeze")}}function j(t){const e=document.querySelector(".js-tournaments-backdrop-content"),{name:n,description:a,rank:o,teams:c,rate:r,regime:s,startTournament:i,endTournament:m,time:d,limitRegion:u}=t;e.innerHTML=`<ul class="tournaments-backdrop__content-list">
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ваш турнір:</p>
        <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${n}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Опис:</p>
          <div class="separator"></div>
        ${a?`<p class="tournaments-backdrop__content-item-text">${a}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
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
        <p class="tournaments-backdrop__content-item-text">${d}</p>
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
    </ul>`,F(t)}function q(t){const e=document.querySelector(".js-tournaments-backdrop");e==null||e.classList.add("tournaments-backdrop_active"),document.body.classList.add("to-freeze"),setTimeout(()=>j(t),5e3)}function w(){const t=document.querySelector(".js-tournaments-form");t==null||t.addEventListener("submit",e);function e(n){var c,r;n.preventDefault();const a=n.target.elements,o={name:((c=a.namedItem("name"))==null?void 0:c.value)??"",description:((r=a.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:l??"",endTournament:p??""};[...a].forEach(s=>{s.checked&&(o[s.name]=s.value)}),q(o),t.reset()}}function C(){w()}function I(){C()}document.addEventListener("DOMContentLoaded",()=>{f(),v(),b(),h(),x(),S(),I()});
//# sourceMappingURL=tournaments.js.map
