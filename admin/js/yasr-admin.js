(()=>{"use strict";tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"})})(),jQuery(document).ready((function(){jQuery(".yasr-log-pagenum").on("click",(function(){jQuery("#yasr-loader-log-metabox").show();var e={action:"yasr_change_log_page",pagenum:jQuery(this).val(),totalpages:jQuery("#yasr-log-total-pages").data("yasr-log-total-pages")};jQuery.post(ajaxurl,e,(function(e){jQuery("#yasr-loader-log-metabox").hide(),jQuery("#yasr-log-container").html(e)}))})),jQuery(document).ajaxComplete((function(e,a,t){var o=!0;void 0!==t.data&&(o=t.data.search("action=yasr_change_log_page")),-1!==o&&jQuery(".yasr-log-pagenum").on("click",(function(){jQuery("#yasr-loader-log-metabox").show();var e={action:"yasr_change_log_page",pagenum:jQuery(this).val(),totalpages:jQuery("#yasr-log-total-pages").data("yasr-log-total-pages")};jQuery.post(ajaxurl,e,(function(e){jQuery("#yasr-log-container").html(e)}))}))}))})),(()=>{const e=document.getElementById("yasr-user-log-page-navigation-buttons"),a=document.getElementById("yasr-user-log-total-pages").dataset.yasrLogTotalPages;let t=[],o=[],n=[];for(let e=0;e<8;e++)t[e]=document.getElementById(`yasr-user-log-vote-${e}`),o[e]=document.getElementById(`yasr-user-log-post-${e}`),n[e]=document.getElementById(`yasr-user-log-date-${e}`);function r(t){let o="";(t=parseInt(t))>=3&&a>3&&(o+='<button class="yasr-user-log-page-num" value="1">\n                &laquo; First </button>&nbsp;&nbsp;...&nbsp;&nbsp;');let n=t-1;n<=0&&(n=1);let r=t+1;r>=a&&(r=a);for(let e=n;e<=r;e++)o+=e===t?`<button class="button-primary" value="${e}">${e}</button>&nbsp;&nbsp;`:`<button class="yasr-user-log-page-num" value="${e}">${e}</button>&nbsp;&nbsp;`;return a>3&&t<a&&(o+=`...&nbsp;&nbsp;\n                <button class="yasr-user-log-page-num" value="${a}"> Last &raquo;</button>&nbsp;&nbsp;`),e.innerHTML=o}function s(e){const r=document.getElementById("yasr-loader-user-log-metabox");r.style.display="inline";let s={action:"yasr_change_user_log_page_front",pagenum:e,totalpages:a};jQuery.post(yasrWindowVar.ajaxurl,s,(function(e){let a;for(let r=0;r<8;r++)e.data[r]?(t[r].innerText=parseInt(e.data[r].vote),a=`<a href="${e.data[r].permalink}">${e.data[r].post_title}</a>`,o[r].innerHTML=a,n[r].innerText=e.data[r].date):o[r].innerText="";r.style.display="none"}))}jQuery(".yasr-user-log-page-num").on("click",(function(){const e=parseInt(this.value);r(e),s(e)})),jQuery(document).ajaxComplete((function(e,a,t){let o=!0;void 0!==t.data&&(o=t.data.search("action=yasr_change_user_log_page_front"),-1!==o&&jQuery(".yasr-user-log-page-num").on("click",(function(){const e=parseInt(this.value);r(e),s(e)})))}))})();