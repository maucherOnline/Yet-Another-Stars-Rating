(()=>{"use strict";tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"})})(),(()=>{const t=document.getElementById("yasr-user-log-page-navigation-buttons"),e=document.getElementById("yasr-admin-log-page-navigation-buttons");function n(t="yasr-user"){let e=!1;"yasr-admin"===t&&(e=!0);const n=document.getElementById(`${t}-log-total-pages`).dataset.yasrLogTotalPages,l=`${t}_change_log_page`;let s=[],r=[],u=[],d=[],i=!1,c=!1;!0===e&&(i=[],c=[]);for(let n=0;n<8;n++)s[n]=document.getElementById(`${t}-log-div-child-${n}`),r[n]=document.getElementById(`${t}-log-vote-${n}`),u[n]=document.getElementById(`${t}-log-post-${n}`),d[n]=document.getElementById(`${t}-log-date-${n}`),!0===e&&(i[n]=document.getElementById(`${t}-log-user-${n}`),c[n]=document.getElementById(`${t}-log-avatar-${n}`));jQuery(`.${t}-log-page-num`).on("click",(function(){const e=parseInt(this.value);a(e,n,t),o(e,s,r,u,d,n,i,c,t,l)})),jQuery(document).ajaxComplete((function(e,g,p){let y=!0;void 0!==p.data&&(y=p.data.search(`action=${l}`),-1!==y&&jQuery(`.${t}-log-page-num`).on("click",(function(){const e=parseInt(this.value);a(e,n,t),o(e,s,r,u,d,n,i,c,t,l)})))}))}function a(n,a,o){let l="";(n=parseInt(n))>=3&&a>3&&(l+=`<button class="${o}-log-page-num" value="1">\n            &laquo; First </button>&nbsp;&nbsp;...&nbsp;&nbsp;`);let s=n-1;s<=0&&(s=1);let r=n+1;r>=a&&(r=a);for(let t=s;t<=r;t++)l+=t===n?`<button class="button-primary" value="${t}">${t}</button>&nbsp;&nbsp;`:`<button class="${o}-log-page-num" value="${t}">${t}</button>&nbsp;&nbsp;`;return a>3&&n<a&&(l+=`...&nbsp;&nbsp;\n            <button class="${o}-log-page-num" value="${a}"> Last &raquo;</button>&nbsp;&nbsp;`),"yasr-admin"===o?e.innerHTML=l:t.innerHTML=l}function o(t,e,n,a,o,l,s,r,u,d){const i=document.getElementById(`${u}-log-loader-metabox`);i.style.display="inline";let c={action:d,pagenum:t,totalpages:l};jQuery.post(yasrWindowVar.ajaxurl,c,(function(t){let l;for(let u=0;u<8;u++)t.data[u]?(e[u].style.display="block",n[u].innerText=parseInt(t.data[u].vote),Array.isArray(s)&&(s[u].innerText=t.data[u].user_nicename),Array.isArray(r)&&(r[u].src=t.data[u].avatar_url),l=`<a href="${t.data[u].permalink}">${t.data[u].post_title}</a>`,a[u].innerHTML=l,o[u].innerText=t.data[u].date):e[u].style.display="none";i.style.display="none"}))}t&&n(),e&&n("yasr-admin")})();