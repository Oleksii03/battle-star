import{a as k,h as b,o as f}from"../../assets/cabinet-CxHD5ZHW.js";import{h as v,c as h,b as y,s as x}from"../../assets/closeDropDownList-CK9utEua.js";import{f as D,h as g,g as T,i as L,c as S}from"../../assets/vendor-ZgN2xaTy.js";let d="",p="";function w(){const e=new Date,t=new Date;t.setDate(e.getDate()+3);function n(a){if(a.length===2){const o=a[0],c=a[1],r={year:"numeric",month:"2-digit",day:"2-digit"},s=new Intl.DateTimeFormat("uk-UA",r),i=s.format(o),m=s.format(c);$(i,m)}}D("#formDatetimeCalendar",{inline:!0,minDate:e,defaultDate:[e,t],dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...g.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(a){n(a)}}),n([e,t])}function $(e,t){d=e,p=t}async function j(e){const t=T(k);try{const n=await L(S(t,"tournaments"),e);console.log("Документ записано з ID: ",n.id)}catch(n){b(n)}finally{location.reload()}}function E(e){const t=document.querySelector(".js-tournaments-backdrop"),n=document.querySelector(".js-cancel"),a=document.querySelector(".js-confirm");n==null||n.addEventListener("click",()=>{o(),location.reload()}),a==null||a.addEventListener("click",()=>{j(e),o()});function o(){t==null||t.classList.remove("tournaments-backdrop_active"),document.body.classList.remove("to-freeze")}}function q(e){const t=document.querySelector(".js-tournaments-backdrop-content"),{name:n,description:a,rank:o,teams:c,rate:r,regime:s,startTournament:i,endTournament:m,time:u,limitRegion:_}=e;t.innerHTML=`<ul class="tournaments-backdrop__content-list">
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
        <p class="tournaments-backdrop__content-item-text">${u}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Обмежити участь вашим регіоном:</p>
          <div class="separator"></div>
       ${_==="on"?'<p class="tournaments-backdrop__content-item-text">так</p>':'<p class="tournaments-backdrop__content-item-text">ні</p>'} 
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
    </ul>`,E(e)}function F(e){const t=document.querySelector(".js-tournaments-backdrop");t==null||t.classList.add("tournaments-backdrop_active"),document.body.classList.add("to-freeze"),setTimeout(()=>q(e),5e3)}function C(){const e=document.querySelector(".js-tournaments-form");e==null||e.addEventListener("submit",t);function t(n){var c,r;n.preventDefault();const a=n.target.elements,o={name:((c=a.namedItem("name"))==null?void 0:c.value)??"",description:((r=a.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:d??"",endTournament:p??""};[...a].forEach(s=>{s.checked&&(o[s.name]=s.value)}),F(o),e.reset()}}function I(){C()}function M(e){const t=document.querySelectorAll(".js-rank-item-input"),n=R(e);A(n,t),B(n)}function R(e){return[...l.children].indexOf(e)}function A(e,t){t.forEach(n=>n.classList.remove("form__rank-item-input_active"));for(let n=0;n<e;n++)t[n].classList.add("form__rank-item-input_active")}function B(e){const t=document.querySelector(".js-rank-track-tumb");switch(e){case 0:t.style.width="4%";break;case 1:t.style.width="27%";break;case 2:t.style.width="50%";break;case 3:t.style.width="73%";break;case 4:t.style.width="100%";break;default:t.style.width="4%"}}const l=document.querySelector(".js-rank-track-list");function H(){l==null||l.addEventListener("click",e);function e(t){const n=t.target.closest("li");(n==null?void 0:n.tagName)==="LI"&&M(n)}}function U(){I(),H()}document.addEventListener("DOMContentLoaded",()=>{v(),h(),f(),y(),x(),w(),U()});
//# sourceMappingURL=tournaments.js.map
