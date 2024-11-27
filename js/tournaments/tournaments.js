import{a as _,h as k,o as b}from"../../assets/cabinet-CxHD5ZHW.js";import{h as f,c as v,b as h,s as y}from"../../assets/closeDropDownList-CK9utEua.js";import{f as x,h as D,g,i as T,c as L}from"../../assets/vendor-ZgN2xaTy.js";let l="",d="";function j(){const e=new Date,t=new Date;t.setDate(e.getDate()+3);function s(n){if(n.length===2){const a=n[0],c=n[1],r={year:"numeric",month:"2-digit",day:"2-digit"},o=new Intl.DateTimeFormat("uk-UA",r),i=o.format(a),m=o.format(c);S(i,m)}}x("#formDatetimeCalendar",{inline:!0,minDate:e,defaultDate:[e,t],dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...D.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(n){s(n)}}),s([e,t])}function S(e,t){l=e,d=t}async function $(e){const t=g(_);try{const s=await T(L(t,"tournaments"),e);console.log("Документ записано з ID: ",s.id)}catch(s){k(s)}finally{location.reload()}}function w(e){const t=document.querySelector(".js-tournaments-backdrop"),s=document.querySelector(".js-cancel"),n=document.querySelector(".js-confirm");s==null||s.addEventListener("click",()=>{a(),location.reload()}),n==null||n.addEventListener("click",()=>{$(e),a()});function a(){t==null||t.classList.remove("tournaments-backdrop_active"),document.body.classList.remove("to-freeze")}}function E(e){const t=document.querySelector(".js-tournaments-backdrop-content"),{name:s,description:n,rank:a,teams:c,rate:r,regime:o,startTournament:i,endTournament:m,time:p,limitRegion:u}=e;t.innerHTML=`<ul class="tournaments-backdrop__content-list">
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ваш турнір:</p>
        <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${s}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Опис:</p>
          <div class="separator"></div>
        ${n?`<p class="tournaments-backdrop__content-item-text">${n}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Ранг:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${a} <span class="currency">BS</span></p>
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
        <p class="tournaments-backdrop__content-item-text">${o}</p>
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
    </ul>`,w(e)}function q(e){const t=document.querySelector(".js-tournaments-backdrop");t==null||t.classList.add("tournaments-backdrop_active"),document.body.classList.add("to-freeze"),setTimeout(()=>E(e),5e3)}function F(){const e=document.querySelector(".js-tournaments-form");e==null||e.addEventListener("submit",t);function t(s){var c,r;s.preventDefault();const n=s.target.elements,a={name:((c=n.namedItem("name"))==null?void 0:c.value)??"",description:((r=n.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:l??"",endTournament:d??""};[...n].forEach(o=>{o.checked&&(a[o.name]=o.value)}),q(a),e.reset()}}function C(){F()}function I(){const e=document.querySelector(".js-rank-track-list"),t=document.querySelector(".js-rank-track-tumb");e==null||e.addEventListener("click",s);function s(n){const a=n.target.closest("li");(a==null?void 0:a.tagName)==="LI"&&(a.classList.contains("js-rank-item-1")&&(t.style.width="4%"),a.classList.contains("js-rank-item-2")&&(t.style.width="27%"),a.classList.contains("js-rank-item-3")&&(t.style.width="50%"),a.classList.contains("js-rank-item-4")&&(t.style.width="73%"),a.classList.contains("js-rank-item-5")&&(t.style.width="100%"))}}function R(){C(),I()}document.addEventListener("DOMContentLoaded",()=>{f(),v(),b(),h(),y(),j(),R()});
//# sourceMappingURL=tournaments.js.map
