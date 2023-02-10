(()=>{"use strict";var e={268:(e,t,n)=>{n.d(t,{v:()=>r});var r=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"})},726:function(e,t,n){var r;!function(a){if("function"!=typeof o){var o=function(e){return e};o.nonNative=!0}const s=o("plaintext"),i=o("html"),l=o("comment"),d=/<(\w*)>/g,c=/<\/?([^\s\/>]+)/;function u(e,t,n){return y(e=e||"",m(t=t||[],n=n||""))}function m(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let n;for(;n=d.exec(e);)t.add(n[1])}else o.nonNative||"function"!=typeof e[o.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:s,tag_buffer:"",depth:0,in_quote_char:""}}function y(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let n=t.allowable_tags,r=t.tag_replacement,a=t.state,o=t.tag_buffer,d=t.depth,c=t.in_quote_char,u="";for(let t=0,m=e.length;t<m;t++){let m=e[t];if(a===s)if("<"===m)a=i,o+=m;else u+=m;else if(a===i)switch(m){case"<":if(c)break;d++;break;case">":if(c)break;if(d){d--;break}c="",a=s,o+=">",n.has(p(o))?u+=o:u+=r,o="";break;case'"':case"'":c=m===c?"":c||m,o+=m;break;case"-":"<!-"===o&&(a=l),o+=m;break;case" ":case"\n":if("<"===o){a=s,u+="< ",o="";break}o+=m;break;default:o+=m}else if(a===l)if(">"===m)"--"==o.slice(-2)&&(a=s),o="";else o+=m}return t.state=a,t.tag_buffer=o,t.depth=d,t.in_quote_char=c,u}function p(e){let t=c.exec(e);return t?t[1].toLowerCase():null}u.init_streaming_mode=function(e,t){let n=m(e=e||[],t=t||"");return function(e){return y(e||"",n)}},void 0===(r=function(){return u}.call(t,n,t,e))||(e.exports=r)}()},586:(e,t,n)=>{var r;n.d(t,{Z:()=>u});var a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const i=function(e){return"string"==typeof e&&s.test(e)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n};const u=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return c(r)}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{n(268);var e=n(586);function t(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a,o,s=function(){var e=document.getElementById("yasr-add-field-edit-multiset"),t=document.getElementById("yasr-edit-form-number-elements");if(!0==!!t){t=t.value,t++;var n=document.getElementById("edit-form-remove-3"),r=document.getElementById("edit-form-remove-4");!0==!!n&&n.addEventListener("click",(function(e){t--,document.getElementById("yasr-element-limit").style.display="none",document.getElementById("yasr-add-field-edit-multiset").style.display=""})),!0==!!r&&r.addEventListener("click",(function(e){t--,document.getElementById("yasr-element-limit").style.display="none",document.getElementById("yasr-add-field-edit-multiset").style.display=""})),e.addEventListener("click",(function(e){if(e.preventDefault(),t>9)return document.getElementById("yasr-element-limit").style.display="",document.getElementById("yasr-add-field-edit-multiset").style.display="none",!1;var n=document.getElementById("edit-set-criteria-container"),r=d(t,"edit-form-removable-criteria","edit-form-criteria-row-container-","edit-multi-set-element-","edit-form-multi-set-name-element-","edit-form",!1);c(!1,t,n,r),t++}))}},i=function(e){return t(document.getElementsByClassName(e)).map((function(e){return parseInt(e.attributes.value.value)}))},l=function(e){var t=!1;e.sort();for(var n=1;n<=e.length;n++)if(-1===e.indexOf(n)){t=n;break}return t},d=function(e,t,n,r,a,o){var s,i=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],l="criteria-row ".concat(t),d=document.createElement("div");return d.className=l,d.id="".concat(n).concat(e),d.setAttribute("value",e),s="edit-form"===o?"edit-form-remove-".concat(e):"new-form-remove-".concat(e),d.innerHTML='\n        <label>\n            <input type="text"\n                name="'.concat(r).concat(e,'"\n                id="').concat(a).concat(e,'"\n                class="input-text-multi-set"\n                placeholder="New Criteria"\n            />\n        </label> '),!1!==i&&(d.innerHTML+=' <span \n            class="dashicons dashicons-remove yasr-multiset-info-delete criteria-delete" \n            id="'.concat(s,'"\n            data-id-criteria="').concat(d.id,'"\n            onclick="document.getElementById(\'').concat(d.id,"').remove();\"\n            >            \n        </span>")),d},c=function(e,t,n,r){if(!1!==e)for(var a=1,o=3;o<9;o++){var s="criteria-row-container-".concat(t+a);if(!0==!!document.getElementById(s)){var i=document.getElementById(s);n.insertBefore(r,i);break}a++}else n.appendChild(r)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"yasr_select_set",o=document.getElementById(a),s=!1;!0==!!o&&o.addEventListener("change",(function(){var a=o.value;return!1!==t?(document.getElementById("yasr-loader-select-multi-set").style.display="",s=document.getElementById("yasr_nonce_change_set-id").value,m(a,t,e,n,r,s)):(s=document.getElementById("nonce-settings-edit-form-id").value,y(a,s)),!1}))},m=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5?arguments[5]:void 0,s={action:"yasr_send_id_nameset",set_id:e,post_id:t,yasr_send_id_nameset_nonce:o};return jQuery.post(ajaxurl,s,(function(t){n>1&&(document.getElementById("yasr-loader-select-multi-set").style.display="none");var r=JSON.parse(t),a=document.getElementById("yasr-table-multi-set-admin"),o=document.getElementById("yasr-table-multi-set-admin-visitor");p(r,a),p(r,o,!1),g(),g(!1);for(var s=document.getElementsByClassName("yasr-editor-multiset-id"),i=0;i<s.length;i++)s[i].innerText=e})),document.getElementById("yasr-multiset-id").value=e,null!==r&&""!==r&&null!==a&&(r.value===e?a.checked=!0:a.checked=!1),!1},y=function(e,t){var n={action:"yasr_get_multi_set",set_id:e,nonce:t};jQuery.post(ajaxurl,n,(function(e){jQuery("#yasr-table-form-edit-multi-set").html(e)})),jQuery(document).ajaxComplete((function(){s()}))},p=function(t,n){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="",o="yasr-multiset-admin",s=0;s<t.length;s++){var i=t[s].name,l=0,d=!0;!1!==r&&(l=t[s].average_rating,d=!1,o="yasr-multiset-admin-author");var c=t[s].id;a+="<tr>",a+="<td>".concat(i,"</td>"),a+='<td><div class="'.concat(o,'" id="yasr-multiset-admin-').concat((0,e.Z)(),'" data-rating="').concat(l,'" \n                        data-multi-idfield="').concat(c,'" data-readonly="').concat(d,'"></div>'),a+="</td>",a+="</tr>"}if(!1===r){var u='<tr><td colspan="2"><input type="submit" class="button button-primary" value="Submit!" disabled></td></tr>';a+=u}n.innerHTML=a},g=function(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e=!1!==t?"yasr-multiset-admin-author":"yasr-multiset-admin";for(var n=document.getElementsByClassName(e),r=[],a=!1,o=0;o<n.length;o++)!function(e){var t=n.item(e).id,o=document.getElementById(t),s=parseInt(o.getAttribute("data-multi-idfield")),i=parseInt(o.getAttribute("data-rating")),l="true"===o.getAttribute("data-readonly"),d={field:s,rating:i};r.push(d);yasrSetRaterValue(32,t,!1,.5,l,!1,(function(e,t){e=e.toFixed(1),e=parseFloat(e),this.setRating(e);for(var n=0;n<r.length;n++)r[n].field===s&&(r[n].rating=e);a=JSON.stringify(r),document.getElementById("yasr-multiset-author-votes").value=a,t()}))}(o)};if(document.getElementsByClassName("nav-tab-active").length>0&&(a=document.getElementsByClassName("nav-tab-active")[0].id),"general_settings"===a){var f=document.getElementById("yasr_auto_insert_switch"),v=document.getElementById("yasr-general-options-stars-title-switch"),h=document.getElementById("yasr_general_options[sort_posts_by]-no"),_=document.querySelectorAll('input[type=radio][name="yasr_general_options[sort_posts_by]"]');!1===f.checked&&jQuery(".yasr-auto-insert-options-class").prop("disabled",!0),!1===v.checked&&jQuery(".yasr-stars-title-options-class").prop("disabled",!0),!0===h.checked&&jQuery("#yasr-sort-posts-list-archives :input").prop("disabled",!0),f.addEventListener("change",(function(){this.checked?jQuery(".yasr-auto-insert-options-class").prop("disabled",!1):jQuery(".yasr-auto-insert-options-class").prop("disabled",!0)})),v.addEventListener("change",(function(){this.checked?jQuery(".yasr-stars-title-options-class").prop("disabled",!1):jQuery(".yasr-stars-title-options-class").prop("disabled",!0)})),Array.prototype.forEach.call(_,(function(e){e.addEventListener("change",(function(e){"no"===this.value?jQuery("#yasr-sort-posts-list-archives :input").prop("disabled",!0):jQuery("#yasr-sort-posts-list-archives :input").prop("disabled",!1)}))})),document.getElementById("yasr-settings-custom-texts").addEventListener("click",(function(){document.getElementById("yasr-settings-custom-text-before-overall").value="Our Score",document.getElementById("yasr-settings-custom-text-before-visitor").value="Click to rate this post!",document.getElementById("yasr-settings-custom-text-after-visitor").value="[Total: %total_count% Average: %average%]",document.getElementById("yasr-settings-custom-text-rating-saved").value="Rating saved!",document.getElementById("yasr-settings-custom-text-rating-updated").value="Rating updated!",document.getElementById("yasr-settings-custom-text-must-sign-in").value="You must sign in to vote",document.getElementById("yasr-settings-custom-text-already-rated").value="You have already voted for this article with %rating%"}))}"style_options"===a&&(wp.codeEditor.initialize(document.getElementById("yasr_style_options_textarea"),yasr_cm_settings),jQuery("#yasr-color-scheme-preview-link").on("click",(function(){return jQuery("#yasr-color-scheme-preview").toggle("slow"),!1})),jQuery("#yasr-settings-stylish-stars").mouseover((function(){jQuery("#yasr-settings-stylish-text").css("visibility","visible"),jQuery("#yasr-settings-stylish-image").css("opacity",.4)})),wp.hooks.doAction("yasrStyleOptions")),"manage_multi"===a&&(o=document.getElementById("new-set-criteria-container"),document.getElementById("new-criteria-button").onclick=function(e){e.preventDefault();var t,n=i("removable-criteria"),r=l(n);if(!((t=!1!==r?r:n.length+1)<3||t>9)){var a=d(t,"removable-criteria","criteria-row-container-","multi-set-name-element-","multi-set-name-element-","new-form");c(r,t,o,a)}},s(),u()),"migration_tools"===a&&(jQuery("#yasr-import-rmp-submit").on("click",(function(){document.getElementById("yasr-import-rmp-answer").innerHTML=yasrWindowVar.loaderHtml;var e={action:"yasr_import_ratemypost",nonce:document.getElementById("yasr-import-rmp-nonce").value};jQuery.post(ajaxurl,e,(function(e){e=JSON.parse(e),document.getElementById("yasr-import-rmp-answer").innerHTML=e}))})),jQuery("#yasr-import-wppr-submit").on("click",(function(){document.getElementById("yasr-import-wppr-answer").innerHTML=yasrWindowVar.loaderHtml;var e={action:"yasr_import_wppr",nonce:document.getElementById("yasr-import-wppr-nonce").value};jQuery.post(ajaxurl,e,(function(e){e=JSON.parse(e),document.getElementById("yasr-import-wppr-answer").innerHTML=e}))})),jQuery("#yasr-import-kksr-submit").on("click",(function(){document.getElementById("yasr-import-kksr-answer").innerHTML=yasrWindowVar.loaderHtml;var e={action:"yasr_import_kksr",nonce:document.getElementById("yasr-import-kksr-nonce").value};jQuery.post(ajaxurl,e,(function(e){e=JSON.parse(e),document.getElementById("yasr-import-kksr-answer").innerHTML=e}))})),jQuery("#yasr-import-mr-submit").on("click",(function(){document.getElementById("yasr-import-mr-answer").innerHTML=yasrWindowVar.loaderHtml;var e={action:"yasr_import_mr",nonce:document.getElementById("yasr-import-mr-nonce").value};jQuery.post(ajaxurl,e,(function(e){e=JSON.parse(e),document.getElementById("yasr-import-mr-answer").innerHTML=e}))})),wp.hooks.doAction("yasr_migration_page_bottom")),"rankings"===a&&wp.hooks.doAction("yasr_ranking_page_top")})(),(()=>{let e;var t=function(t){var n=t.colClass,r=t.post,a=r.link,o=r.title;return React.createElement("td",{className:n},React.createElement("a",{href:a},function(t){if("string"!=typeof t||-1===t.indexOf("&"))return t;void 0===e&&(e=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),e.innerHTML=t;const n=e.textContent;return e.innerHTML="",n}(o)))},r=n(586),a=n(726),o=n.n(a),s=function(e){var t=e.html;return React.createElement("div",{dangerouslySetInnerHTML:{__html:o()(t,"<strong><p>")}})},i=function(e){var t=e.post,n=t.number_of_votes,r=t.rating,a=e.text;if(void 0!==n){var o=JSON.parse(yasrWindowVar.textAfterVr);return o=(o=o.replace("%total_count%",n)).replace("%average%",r),React.createElement("div",{className:"yasr-most-rated-text"},React.createElement(s,{html:o}))}return React.createElement("span",null,a," ",r)},l=function(e){var t=e.size,n=e.htmlId,r=e.element,a=e.step,o=e.readonly,s=e.rating;return React.createElement("div",{id:n,ref:function(){return yasrSetRaterValue(t,n,r,a,o,s)}})},d=function(e){var t=e.rankingParams,n=e.tableId,a=e.colClass,o=e.post,s="after",d=JSON.parse(yasrWindowVar.textRating),c=new URLSearchParams(t);null!==c.get("text_position")&&(s=c.get("text_position")),null!==c.get("custom_txt")&&(d=c.get("custom_txt"));var u={rating:o.rating,htmlId:"yasr-ranking-element-"+(0,r.Z)(),size:document.getElementById(n).dataset.rankingSize};return"before"===s?React.createElement("td",{className:a},React.createElement(i,{post:o,text:d}),React.createElement(l,u)):React.createElement("td",{className:a},React.createElement(l,u),React.createElement(i,{post:o,text:d}))},c=function(e){var n={colClass:e.leftClass,post:e.post},r={rankingParams:e.rankingParams,tableId:e.tableId,colClass:e.rightClass,post:e.post};return React.createElement("tr",{className:e.trClass},React.createElement(t,n),React.createElement(d,r))},u=function(e){var t=e.tBodyId,n=e.show,r=e.data,a=e.source,o=e.rankingParams,s=e.tableId;return React.createElement("tbody",{id:t,style:{display:n}},r.map((function(e,t){var n="yasr-rankings-td-colored",r="yasr-top-10-most-highest-left",i="yasr-top-10-most-highest-right";return"author_ranking"===a&&(n="yasr-rankings-td-white",r="yasr-top-10-overall-left",i="yasr-top-10-overall-right"),t%2==0&&(n="yasr-rankings-td-white","author_ranking"===a&&(n="yasr-rankings-td-colored")),React.createElement(c,{key:e.post_id,source:a,tableId:s,rankingParams:o,post:e,trClass:n,leftClass:r,rightClass:i})})))},m=function(e){return function(t){t.preventDefault();var n=t.target.id,r=e.tableId,a="link-most-rated-posts-"+r,o="link-highest-rated-posts-"+r,s="most-rated-posts-"+r,i="highest-rated-posts-"+r,l=document.getElementById(n),d=document.createElement("span");d.innerHTML=l.innerHTML,d.id=l.id,l.parentNode.replaceChild(d,l),n===a&&(document.getElementById(i).style.display="none",document.getElementById(s).style.display="",d=document.getElementById(o),l.innerHTML=d.innerHTML,l.id=d.id,d.parentNode.replaceChild(l,d)),n===o&&(document.getElementById(s).style.display="none",document.getElementById(i).style.display="",d=document.getElementById(a),l.innerHTML=d.innerHTML,l.id=d.id,d.parentNode.replaceChild(l,d))}},y=function(e){var t=e.tableId,n=e.source,r=e.defaultView,a="link-most-rated-posts-"+t,o="link-highest-rated-posts-"+t;if("author_ranking"!==n){var s=React.createElement("span",null,React.createElement("span",{id:a},JSON.parse(yasrWindowVar.textMostRated))," | ",React.createElement("a",{href:"#",id:o,onClick:m(e)},JSON.parse(yasrWindowVar.textHighestRated)));return"highest"===r&&(s=React.createElement("span",null,React.createElement("span",{id:o},JSON.parse(yasrWindowVar.textHighestRated))," | ",React.createElement("a",{href:"#",id:a,onClick:m(e)},JSON.parse(yasrWindowVar.textMostRated)))),React.createElement("thead",null,React.createElement("tr",{className:"yasr-rankings-td-colored yasr-rankings-heading"},React.createElement("th",null,JSON.parse(yasrWindowVar.textLeftColumnHeader)),React.createElement("th",null,JSON.parse(yasrWindowVar.textOrderBy),":  ",s)))}return React.createElement(React.Fragment,null)},p=function(e){var t=e.error,n=e.isLoaded,r=e.data,a=e.source,o=e.rankingParams,s=e.tableId;if(t)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,console.log(t),"Error")));if(!1===n)return React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,JSON.parse(yasrWindowVar.textLoadRanking))));if("overall_rating"===a||"author_multi"===a)return React.createElement(u,{data:r,tableId:s,tBodyId:"overall_"+s,rankingParams:o,show:"table-row-group",source:a});var i=r.most,l=r.highest,d="table-row-group",c="none",m="most",p=d,g=c,f=new URLSearchParams(o);return null!==f.get("view")&&(m=f.get("view")),"highest"===m&&(p=c,g=d),React.createElement(React.Fragment,null,React.createElement(y,{tableId:s,source:a,defaultView:m}),React.createElement(u,{data:i,tableId:s,tBodyId:"most-rated-posts-"+s,rankingParams:o,show:p,source:a}),React.createElement(u,{data:l,tableId:s,tBodyId:"highest-rated-posts-"+s,rankingParams:o,show:g,source:a}))};function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){i=!0,a=e}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h=wp.element,_=h.useState,E=h.useEffect,b=function(e){var t=e.tableId,n=e.source,r=e.params,a=e.nonce,o={tableId:t,source:n,rankingParams:r},s=f(_(null),2),i=s[0],l=s[1],d=f(_(!1),2),c=d[0],u=d[1],m=f(_([]),2),y=m[0],v=m[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=JSON.parse(document.getElementById(t).dataset.rankingData);!0===e&&console.info("Ajax Disabled, getting data from source"),v(n)},b=function(){var e=[],t=function(e,t,n){var r,a=t,o="&nonce_rankings="+n,s=""!==e?e:"";""!==s&&!1!==s&&(s=new URLSearchParams(s));var i=function(e,t){var n="";return""!==e&&!1!==e&&(null!==e.get("order_by")&&(n+="order_by="+e.get("order_by")),null!==e.get("limit")&&(n+="&limit="+e.get("limit")),null!==e.get("start_date")&&"0"!==e.get("start_date")&&(n+="&start_date="+e.get("start_date")),null!==e.get("end_date")&&"0"!==e.get("end_date")&&(n+="&end_date="+e.get("end_date")),null!==e.get("ctg")?n+="&ctg="+e.get("ctg"):null!==e.get("cpt")&&(n+="&cpt="+e.get("cpt")),""!==n&&(n="&"+(n=n.replace(/\s+/g,""))),"visitor_multi"!==t&&"author_multi"!==t||null!==e.get("setid")&&(n+="&setid="+e.get("setid"))),n}(s,a);if("author_ranking"===a||"author_multi"===a||"overall_rating"===a)r=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&source="+a+i+o];else{var l="",d="";null!==s.get("required_votes[most]")&&(l="&required_votes="+s.get("required_votes[most]")),null!==s.get("required_votes[highest]")&&(d="&required_votes="+s.get("required_votes[highest]")),r=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=most&source=".concat(a).concat(i).concat(l).concat(o),yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=highest&source=".concat(a).concat(i).concat(d).concat(o)]}return r}(r,n,a);Promise.all(t.map((function(t){return fetch(t).then((function(e){return!0===e.ok?e.json():(console.info("Ajax Call Failed. Getting data from source"),"KO")})).then((function(t){"KO"===t?h():("overall_rating"===t.source||"author_multi"===t.source?e="overall_rating"===t.source?t.data_overall:t.data_mv:e[t.show]=t.data_vv,v(e))})).catch((function(e){h(),console.info(e)}))}))).then((function(e){u(!0)})).catch((function(e){h(),console.info(e)}))};return E((function(){"yes"!==yasrWindowVar.ajaxEnabled?(h(!0),u(!0)):n?b():l("Invalid Data Source")}),[]),React.createElement(React.Fragment,null,React.createElement(p,g({error:i,isLoaded:c,data:y},o)))},I=wp.element.render,k=function(){var e=document.getElementsByClassName("yasr-stars-rankings");if(e.length>0)for(var t=0;t<e.length;t++){var n=e.item(t).id,r=JSON.parse(e.item(t).dataset.rankingSource),a=JSON.parse(e.item(t).dataset.rankingParams),o=JSON.parse(e.item(t).dataset.rankingNonce),s=document.getElementById(n);I(React.createElement(b,{source:r,tableId:n,params:a,nonce:o}),s)}};k();var w,B=n(268),x=wp.i18n.__;if(document.getElementsByClassName("nav-tab-active").length>0&&(w=document.getElementsByClassName("nav-tab-active")[0].id),"rankings"===w){var R,j=function(e){var t=P.value,n=document.getElementById("yasr-builder-shortcode").textContent,r=["yasr_ov_ranking","yasr_most_or_highest_rated_posts","yasr_multi_set_ranking","yasr_visitor_multi_set_ranking"];r=wp.hooks.applyFilters("yasrBuilderDrawRankingsShortcodes",r),fetch(ajaxurl+"?action=yasr_rankings_preview_shortcode&shortcode="+t+"&full_shortcode="+n).then((function(e){return!0===e.ok?e.json():(console.info(x("Ajax Call Failed. Shortcode preview can't be done","yet-another-stars-rating")),"KO")})).catch((function(e){console.info(e)})).then((function(e){if("KO"!==e){var t=document.createElement("div");t.innerHTML=e,V.childNodes.length>0?V.replaceChild(t,V.childNodes[0]):V.appendChild(t)}})).then((function(e){r.forEach((function(e){t===e&&k()}))}))},S=function(e,t,n,r,a,o,s,i,l){e.style.display="",t.style.display="",o.style.display="",l.style.display="",n.style.display="none",r.style.display="none",a.style.display="none",null!==s&&(s.style.display=""),null!==i&&(i.style.display="none")},C=function(e,t,n,r,a,o,s,i,l){n.style.display="",r.style.display="",t.style.display="",o.style.display="",l.style.display="",e.style.display="none",a.style.display="none",null!==s&&(s.style.display=""),null!==i&&(i.style.display="none")},N=function(e,t,n,r,a,o,s,i,l){a.style.display="",l.style.display="none",e.style.display="none",n.style.display="none",r.style.display="none",t.style.display="none",o.style.display="none",null!==s&&(s.style.display="none"),null!==i&&(i.style.display="none")},L=function(e,t,n,r,a,o,s,i){var l=arguments.length>8&&void 0!==arguments[8]&&arguments[8],d=arguments.length>9?arguments[9]:void 0;!0===l?(D.className="",D.classList.add("yasr-settings-row-24"),n.style.display="",r.style.display="",e.style.display="none"):(n.style.display="none",r.style.display="none",e.style.display=""),o.style.display="",t.style.display="",d.style.display="",a.style.display="none",null!==s&&(s.style.display=""),null!==i&&(i.style.display="")},O=".yasr-builder-elements-parents",A=".yasr-builder-elements-childs";jQuery(O).prop("disabled",!0),jQuery(A).prop("disabled",!0),jQuery(O).find("input").each((function(){jQuery(this).prop("disabled",!0)})),wp.hooks.doAction("yasrBuilderBegin",O,A);var H=[],T={name:"yasr_most_or_highest_rated_posts",setid:"",rows:"",size:"",view:"",minvotesmost:"",minvoteshg:"",txtPosition:"",txt:"",display:"",start_date:"",end_date:"",category:"",cpt:""};R=T.name,document.getElementById("yasr-builder-shortcode").textContent="["+R+"]",document.getElementById("yasr-builder-copy-shortcode").setAttribute("data-shortcode","["+R+"]");var Q=document.getElementById("yasr-builder-button-preview"),M=document.getElementById("yasr-builder-copy-shortcode"),V=document.getElementById("yasr-builder-preview"),P=document.getElementById("yasr-ranking-source"),J=document.getElementById("yasr-ranking-multiset-select"),W=document.getElementById("yasr-builder-datepicker-start"),q=document.getElementById("yasr-builder-datepicker-end"),D=document.getElementById("yasr-builder-params-container"),F=document.getElementById("builder-vv-default-view"),z=document.getElementById("builder-vv-required-votes"),U=document.getElementById("builder-stars-size"),K=document.getElementById("builder-overall-text"),Z=document.getElementById("builder-username-options"),$=document.getElementById("builder-category"),Y=document.getElementById("builder-cpt"),G=document.getElementById("yasr-ranking-multiset"),X=document.getElementById("yasr-builder-datepicker"),ee=P.value,te=!1;W.value="",q.value="","yasr_ov_ranking"===ee?S(K,U,F,z,Z,$,Y,G,X):"yasr_most_active_users"===ee||"yasr_top_reviewers"===ee?N(K,U,F,z,Z,$,Y,G,X):"yasr_multi_set_ranking"===ee?L(K,U,F,z,Z,$,Y,G,!1,X):"yasr_visitor_multi_set_ranking"===ee?L(K,U,F,z,Z,$,Y,G,!0,X):C(K,U,F,z,Z,$,Y,G,X),document.addEventListener("change",(function(e){if("yasr-ranking-source"===e.target.id)D.className="",D.classList.add("yasr-settings-row-33"),V.innerHTML="",W.value="",q.value="",T={name:"yasr_most_or_highest_rated_posts",setid:"",rows:"",size:"",view:"",minvotesmost:"",minvoteshg:"",txtPosition:"",txt:"",display:"",start_date:"",end_date:"",category:"",cpt:""},"yasr_ov_ranking"===e.target.value?S(K,U,F,z,Z,$,Y,G,X):"yasr_most_active_users"===e.target.value||"yasr_top_reviewers"===e.target.value?N(K,U,F,z,Z,$,Y,G,X):"yasr_multi_set_ranking"===e.target.value?(L(K,U,F,z,Z,$,Y,G,!1,X),T.setid=" setid="+J[0].value):"yasr_visitor_multi_set_ranking"===e.target.value?(L(K,U,F,z,Z,$,Y,G,!0,X),T.setid=" setid="+J[0].value):C(K,U,F,z,Z,$,Y,G,X),T.name=e.target.value,R=T.name+T.setid;else{"yasr-ranking-multiset-select"===e.target.id&&(T.setid=" setid="+e.target.value),H=wp.hooks.applyFilters("yasrBuilderFilterShortcode",T);for(var t=2;T.length;t++)H.hasOwnProperty(T[t])&&(T[t]=H[t]);R=T.name+T.setid+T.rows+T.view+T.minvotesmost+T.minvoteshg+T.size+T.txtPosition+T.txt+T.display+T.start_date+T.end_date+T.category+T.cpt}document.getElementById("yasr-builder-shortcode").textContent="["+R+"]",document.getElementById("yasr-builder-copy-shortcode").setAttribute("data-shortcode","["+R+"]"),!0===te&&"yasr-ranking-source"!==e.target.id&&"yasr-builder-category-radio"!==e.target.name&&j()})),M.onclick=function(e){var t=document.getElementById(e.target.id);(0,B.v)(t.getAttribute("data-shortcode"))},Q.onclick=function(e){j(),te=!0}}})()})();