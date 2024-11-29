import{a as b,h as f,o as v}from"../../assets/cabinet-Dwn9lRut.js";import{h,c as x,b as y,s as g}from"../../assets/closeDropDownList-DAy9BuXW.js";import{l as D,m as T,a as S,n as L,e as w,o as d}from"../../assets/vendor-OwqoIaUp.js";let p="",u="";function $(){const e=new Date,t=new Date;t.setDate(e.getDate()+3);function n(a){if(a.length===2){const o=a[0],c=a[1],r={year:"numeric",month:"2-digit",day:"2-digit"},s=new Intl.DateTimeFormat("uk-UA",r),i=s.format(o),l=s.format(c);E(i,l)}}D("#formDatetimeCalendar",{inline:!0,minDate:e,defaultDate:[e,t],dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...T.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(a){n(a)}}),n([e,t])}function E(e,t){p=e,u=t}async function j(e){const t=S(b);try{const n=await L(w(t,"tournaments"),e);console.log("Документ записано з ID: ",n.id)}catch(n){f(n)}finally{location.reload()}}function q(e){const t=document.querySelector(".js-tournaments-backdrop"),n=document.querySelector(".js-cancel"),a=document.querySelector(".js-confirm");n==null||n.addEventListener("click",()=>{location.reload(),o()}),a==null||a.addEventListener("click",()=>{j(e),o()});function o(){t==null||t.classList.remove("tournaments-backdrop_active"),d.enablePageScroll()}}function F(e){const t=document.querySelector(".js-tournaments-backdrop-content"),{name:n,description:a,rank:o,teams:c,rate:r,regime:s,startTournament:i,endTournament:l,time:_,limitRegion:k}=e;t.innerHTML=`<ul class="tournaments-backdrop__content-list">
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
        ${l?`<p class="tournaments-backdrop__content-item-text">${l}</p>`:'<p class="tournaments-backdrop__content-item-text">не вибрано</p>'} 
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Час початку:</p>
          <div class="separator"></div>
        <p class="tournaments-backdrop__content-item-text">${_}</p>
      </li>
      <li class="tournaments-backdrop__content-item">
        <p class="tournaments-backdrop__content-item-text">Обмежити участь вашим регіоном:</p>
          <div class="separator"></div>
       ${k==="on"?'<p class="tournaments-backdrop__content-item-text">так</p>':'<p class="tournaments-backdrop__content-item-text">ні</p>'} 
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
    </ul>`,q(e)}function C(e){const t=document.querySelector(".js-tournaments-backdrop");t==null||t.classList.add("tournaments-backdrop_active"),d.disablePageScroll(),setTimeout(()=>F(e),5e3)}function I(){const e=document.querySelector(".js-tournaments-form");e==null||e.addEventListener("submit",t);function t(n){var c,r;n.preventDefault();const a=n.target.elements,o={name:((c=a.namedItem("name"))==null?void 0:c.value)??"",description:((r=a.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:p??"",endTournament:u??""};[...a].forEach(s=>{s.checked&&(o[s.name]=s.value)}),C(o),e.reset()}}function M(){I()}function R(e){const t=document.querySelectorAll(".js-rank-item-input"),n=A(e);B(n,t),H(n)}function A(e){return[...m.children].indexOf(e)}function B(e,t){t.forEach(n=>n.classList.remove("form__rank-item-input_active"));for(let n=0;n<e;n++)t[n].classList.add("form__rank-item-input_active")}function H(e){const t=document.querySelector(".js-rank-track-tumb");switch(e){case 0:t.style.width="4%";break;case 1:t.style.width="27%";break;case 2:t.style.width="50%";break;case 3:t.style.width="73%";break;case 4:t.style.width="100%";break;default:t.style.width="4%"}}const m=document.querySelector(".js-rank-track-list");function P(){m==null||m.addEventListener("click",e);function e(t){const n=t.target.closest("li");(n==null?void 0:n.tagName)==="LI"&&R(n)}}function U(){M(),P()}document.addEventListener("DOMContentLoaded",()=>{h(),x(),v(),y(),g(),$(),U()});
//# sourceMappingURL=tournaments.js.map
