import{s as d}from"./vendor-Cuq87dUK.js";import{b as u}from"./cabinet-CvSio9GG.js";const g="index",m="cabinet",_="mainPageListTop",f="mainPageListTopDota",P="mainPageLeaderboardCards",S="mainPagePopularMatchesCardsList",A="mainPagePopularMatches",s=document.querySelector(".js-user-inner-list"),o=document.querySelector(".js-game-dropdown-item-inner-list");function E(){const t=document.querySelector(".js-user-item-box"),n=document.querySelector(".js-game-dropdown-box"),e=document.querySelector(".js-game-dropdown-active-title");t==null||t.addEventListener("click",c);function c(){s==null||s.classList.toggle("header__user-inner-list_open")}n==null||n.addEventListener("click",i);function i(){o==null||o.classList.toggle("game-dropdown-item__inner-list_open")}o==null||o.addEventListener("click",a);function a(r){const l=r.target;e&&(e.textContent=l.textContent),i()}}function p(t){if(t.includes(g))return console.log("index"),"./";if(t.includes(m))return console.log("cabinet"),"./"}function h(){const t=document.querySelector(".js-sidebar-btn-exit");t&&t.addEventListener("click",()=>{const n=window.location.pathname;d(u).then(()=>{const e=p(n);typeof e=="string"&&(window.location.href=e)}).catch(e=>{console.error("Error signing out:",e)})})}export{P as L,S as M,m as P,_ as T,f as a,A as b,o as g,E as h,h as l,s as u};
//# sourceMappingURL=signOut-DRArERCV.js.map
