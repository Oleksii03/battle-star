import{s as u,g as _,a as p,c as g}from"./vendor-DZUFF-U2.js";import{h as L,a as h,b as f}from"./cabinet-CWERuWV8.js";const w="index",b="cabinet",P="mainPageListTop",v="mainPageListTopDota",x="mainPageLeaderboardCards",C="mainPagePopularMatchesCardsList",O="mainPagePopularMatches",j="cabinetHistoryMatches",r=document.querySelector(".js-user-inner-list"),c=document.querySelector(".js-game-dropdown-item-inner-list"),a=document.querySelector(".js-icon-arrow-down");function D(){const o=document.querySelector(".js-user-item-box"),i=document.querySelector(".js-game-dropdown-box"),n=document.querySelector(".js-game-dropdown-active-title");o==null||o.addEventListener("click",t);function t(){r==null||r.classList.toggle("header__user-inner-list_open"),a==null||a.classList.toggle("header__user-item-icon_rotate")}i==null||i.addEventListener("click",e);function e(){c==null||c.classList.toggle("game-dropdown-item__inner-list_open")}c==null||c.addEventListener("click",s);function s(d){const l=d.target;n&&(n.textContent=l.textContent),e()}}function S(o){if(o.includes(w))return console.log("index"),"./";if(o.includes(b))return console.log("cabinet"),"./"}function A(){const o=document.querySelector(".js-sidebar-btn-exit");o&&o.addEventListener("click",()=>{const i=window.location.pathname;u(h).then(()=>{const n=S(i);typeof n=="string"&&(window.location.href=n,localStorage.setItem("logged","false"))}).catch(L)})}async function E(o){const i=_(f);try{const n=await p(g(i,o)),t=[];return n.forEach(e=>{t.push({id:e.id,...e.data()})}),t}catch(n){return console.error("Error getting documents:",n),[]}}function q(){document.addEventListener("click",t=>{o(t),i(t),n(t)});function o(t){const e=t.target.closest(".header__user-inner-item"),s=t.target.closest(".header__user-item-box");!(e!=null&&e.classList.contains("header__user-inner-item"))&&!(s!=null&&s.classList.contains("header__user-item-box"))&&(r==null||r.classList.remove("header__user-inner-list_open"),a==null||a.classList.remove("header__user-item-icon_rotate"))}function i(t){const e=t.target.closest(".game-dropdown-item__inner-item"),s=t.target.closest(".js-game-dropdown-box");!(e!=null&&e.classList.contains("game-dropdown-item__inner-item"))&&!(s!=null&&s.classList.contains("js-game-dropdown-box"))&&(c==null||c.classList.remove("game-dropdown-item__inner-list_open"))}function n(t){var l,m;const e=t.target,s=t.target.closest(".js-drop-down-item-title-box");!(e!=null&&e.classList.contains("cabinet-history__drop-down-inner-item-text"))&&!(s!=null&&s.classList.contains("js-drop-down-item-title-box"))&&((l=document.querySelector(".js-drop-down-inner-list"))==null||l.classList.remove("cabinet-history__drop-down-inner-list_active"),(m=document.querySelector(".js-drop-down-icon"))==null||m.classList.remove("cabinet-history__drop-down-item-icon_active"))}}export{j as H,x as L,C as M,b as P,P as T,v as a,O as b,q as c,E as g,D as h,A as l};
//# sourceMappingURL=closeDropDownList-D3JACSJ9.js.map
