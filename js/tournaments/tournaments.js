import{a as b,h as f,o as v}from"../../assets/cabinet-CxHD5ZHW.js";import{h,c as x,b as y,s as D}from"../../assets/closeDropDownList-CK9utEua.js";import{f as g,h as L,g as T,i as j,c as S}from"../../assets/vendor-ZgN2xaTy.js";let p="",u="";function $(){const t=new Date,e=new Date;e.setDate(t.getDate()+3);function a(n){if(n.length===2){const o=n[0],c=n[1],r={year:"numeric",month:"2-digit",day:"2-digit"},s=new Intl.DateTimeFormat("uk-UA",r),i=s.format(o),m=s.format(c);w(i,m)}}g("#formDatetimeCalendar",{inline:!0,minDate:t,defaultDate:[t,e],dateFormat:"Y-m-d",mode:"range",monthSelectorType:"static",showMonths:1,locale:{...L.Ukrainian,months:{shorthand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],longhand:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]}},onChange:function(n){a(n)}}),a([t,e])}function w(t,e){p=t,u=e}async function E(t){const e=T(b);try{const a=await j(S(e,"tournaments"),t);console.log("Документ записано з ID: ",a.id)}catch(a){f(a)}finally{location.reload()}}function q(t){const e=document.querySelector(".js-tournaments-backdrop"),a=document.querySelector(".js-cancel"),n=document.querySelector(".js-confirm");a==null||a.addEventListener("click",()=>{o(),location.reload()}),n==null||n.addEventListener("click",()=>{E(t),o()});function o(){e==null||e.classList.remove("tournaments-backdrop_active"),document.body.classList.remove("to-freeze")}}function F(t){const e=document.querySelector(".js-tournaments-backdrop-content"),{name:a,description:n,rank:o,teams:c,rate:r,regime:s,startTournament:i,endTournament:m,time:_,limitRegion:k}=t;e.innerHTML=`<ul class="tournaments-backdrop__content-list">
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
    </ul>`,q(t)}function C(t){const e=document.querySelector(".js-tournaments-backdrop");e==null||e.classList.add("tournaments-backdrop_active"),document.body.classList.add("to-freeze"),setTimeout(()=>F(t),5e3)}function I(){const t=document.querySelector(".js-tournaments-form");t==null||t.addEventListener("submit",e);function e(a){var c,r;a.preventDefault();const n=a.target.elements,o={name:((c=n.namedItem("name"))==null?void 0:c.value)??"",description:((r=n.namedItem("description"))==null?void 0:r.value)??"",limitRegion:"of",rank:"",rate:"",regime:"",teams:"",time:"",startTournament:p??"",endTournament:u??""};[...n].forEach(s=>{s.checked&&(o[s.name]=s.value)}),C(o),t.reset()}}function M(){I()}function l(t){const e=document.querySelectorAll(".js-rank-item-input"),a=R(t);A(a,e)}function R(t){return[...d.children].indexOf(t)}function A(t,e){e.forEach(a=>a.classList.remove("form__rank-item-input_active"));for(let a=0;a<t;a++)e[a].classList.add("form__rank-item-input_active")}const d=document.querySelector(".js-rank-track-list");function B(){const t=document.querySelector(".js-rank-track-tumb");d==null||d.addEventListener("click",e);function e(a){const n=a.target.closest("li");(n==null?void 0:n.tagName)==="LI"&&(n.classList.contains("js-rank-item-1")&&(t.style.width="4%"),n.classList.contains("js-rank-item-2")&&(t.style.width="27%",l(n)),n.classList.contains("js-rank-item-3")&&(t.style.width="50%",l(n)),n.classList.contains("js-rank-item-4")&&(t.style.width="73%",l(n)),n.classList.contains("js-rank-item-5")&&(t.style.width="100%",l(n)))}}function H(){M(),B()}document.addEventListener("DOMContentLoaded",()=>{h(),x(),v(),y(),D(),$(),H()});
//# sourceMappingURL=tournaments.js.map
