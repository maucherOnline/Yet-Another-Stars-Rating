(()=>{"use strict";tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"})})(),(()=>{const t=document.getElementById("yasr-user-log-page-navigation-buttons"),e=document.getElementById("yasr-admin-log-page-navigation-buttons");function n(t="yasr-user"){let e=!1;"yasr-admin"===t&&(e=!0);const n=document.getElementById(`${t}-log-total-pages`).dataset.yasrLogTotalPages,l=`${t}_change_log_page`;let s=[],r=[],u=[],i=[],d=!1;!0===e&&(d=[]);for(let n=0;n<8;n++)s[n]=document.getElementById(`${t}-log-div-child-${n}`),r[n]=document.getElementById(`${t}-log-vote-${n}`),u[n]=document.getElementById(`${t}-log-post-${n}`),i[n]=document.getElementById(`${t}-log-date-${n}`),!0===e&&(d[n]=document.getElementById(`${t}-log-user-${n}`));jQuery(`.${t}-log-page-num`).on("click",(function(){const e=parseInt(this.value);a(e,n,t),o(e,s,r,u,i,n,d,t,l)})),jQuery(document).ajaxComplete((function(e,c,g){let p=!0;void 0!==g.data&&(p=g.data.search(`action=${l}`),-1!==p&&jQuery(`.${t}-log-page-num`).on("click",(function(){const e=parseInt(this.value);a(e,n,t),o(e,s,r,u,i,n,d,t,l)})))}))}function a(n,a,o){let l="";(n=parseInt(n))>=3&&a>3&&(l+=`<button class="${o}-log-page-num" value="1">\n            &laquo; First </button>&nbsp;&nbsp;...&nbsp;&nbsp;`);let s=n-1;s<=0&&(s=1);let r=n+1;r>=a&&(r=a);for(let t=s;t<=r;t++)l+=t===n?`<button class="button-primary" value="${t}">${t}</button>&nbsp;&nbsp;`:`<button class="${o}-log-page-num" value="${t}">${t}</button>&nbsp;&nbsp;`;return a>3&&n<a&&(l+=`...&nbsp;&nbsp;\n            <button class="${o}-log-page-num" value="${a}"> Last &raquo;</button>&nbsp;&nbsp;`),"yasr-admin"===o?e.innerHTML=l:t.innerHTML=l}function o(t,e,n,a,o,l,s,r,u){const i=document.getElementById(`${r}-log-loader-metabox`);i.style.display="inline";let d={action:u,pagenum:t,totalpages:l};jQuery.post(yasrWindowVar.ajaxurl,d,(function(t){let l;for(let r=0;r<8;r++)t.data[r]?(e[r].style.display="block",n[r].innerText=parseInt(t.data[r].vote),console.log(t.data[r].user_nicename),Array.isArray(s)&&(s[r].innerText=t.data[r].user_nicename),l=`<a href="${t.data[r].permalink}">${t.data[r].post_title}</a>`,a[r].innerHTML=l,o[r].innerText=t.data[r].date):e[r].style.display="none";i.style.display="none"}))}t&&n(),e&&n("yasr-admin")})();