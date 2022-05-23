(()=>{var e={726:function(e,t,r){"use strict";var n;!function(a){if("function"!=typeof s){var s=function(e){return e};s.nonNative=!0}const o=s("plaintext"),i=s("html"),l=s("comment"),d=/<(\w*)>/g,c=/<\/?([^\s\/>]+)/;function u(e,t,r){return m(e=e||"",y(t=t||[],r=r||""))}function y(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"==typeof e){let r;for(;r=d.exec(e);)t.add(r[1])}else s.nonNative||"function"!=typeof e[s.iterator]?"function"==typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:o,tag_buffer:"",depth:0,in_quote_char:""}}function m(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let r=t.allowable_tags,n=t.tag_replacement,a=t.state,s=t.tag_buffer,d=t.depth,c=t.in_quote_char,u="";for(let t=0,y=e.length;t<y;t++){let y=e[t];if(a===o)if("<"===y)a=i,s+=y;else u+=y;else if(a===i)switch(y){case"<":if(c)break;d++;break;case">":if(c)break;if(d){d--;break}c="",a=o,s+=">",r.has(p(s))?u+=s:u+=n,s="";break;case'"':case"'":c=y===c?"":c||y,s+=y;break;case"-":"<!-"===s&&(a=l),s+=y;break;case" ":case"\n":if("<"===s){a=o,u+="< ",s="";break}s+=y;break;default:s+=y}else if(a===l)if(">"===y)"--"==s.slice(-2)&&(a=o),s="";else s+=y}return t.state=a,t.tag_buffer=s,t.depth=d,t.in_quote_char=c,u}function p(e){let t=c.exec(e);return t?t[1].toLowerCase():null}u.init_streaming_mode=function(e,t){let r=y(e=e||[],t=t||"");return function(e){return m(e||"",r)}},void 0===(n=function(){return u}.call(t,r,t,e))||(e.exports=n)}()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;if(document.getElementsByClassName("nav-tab-active").length>0&&(e=document.getElementsByClassName("nav-tab-active")[0].id),"general_settings"===e){var t=document.getElementById("yasr_auto_insert_switch").checked,r=document.getElementById("yasr-general-options-stars-title-switch").checked;!1===t&&jQuery(".yasr-auto-insert-options-class").prop("disabled",!0),!1===r&&jQuery(".yasr-stars-title-options-class").prop("disabled",!0),document.getElementById("yasr_auto_insert_switch").addEventListener("change",(function(){this.checked?jQuery(".yasr-auto-insert-options-class").prop("disabled",!1):jQuery(".yasr-auto-insert-options-class").prop("disabled",!0)})),document.getElementById("yasr-general-options-stars-title-switch").addEventListener("change",(function(){this.checked?jQuery(".yasr-stars-title-options-class").prop("disabled",!1):jQuery(".yasr-stars-title-options-class").prop("disabled",!0)})),document.getElementById("yasr-settings-custom-texts").addEventListener("click",(function(){document.getElementById("yasr-settings-custom-text-before-overall").value="Our Score",document.getElementById("yasr-settings-custom-text-before-visitor").value="Click to rate this post!",document.getElementById("yasr-settings-custom-text-after-visitor").value="[Total: %total_count% Average: %average%]",document.getElementById("yasr-settings-custom-text-rating-saved").value="Rating saved!",document.getElementById("yasr-settings-custom-text-rating-updated").value="Rating updated!",document.getElementById("yasr-settings-custom-text-must-sign-in").value="You must sign in to vote",document.getElementById("yasr-settings-custom-text-already-rated").value="You have already voted for this article with %rating%"}))}if("style_options"===e&&(wp.codeEditor.initialize(document.getElementById("yasr_style_options_textarea"),yasr_cm_settings),jQuery("#yasr-color-scheme-preview-link").on("click",(function(){return jQuery("#yasr-color-scheme-preview").toggle("slow"),!1})),wp.hooks.doAction("yasrStyleOptions")),"manage_multi"===e){var n=parseInt(document.getElementById("n-multiset").value);if(jQuery("#yasr-multi-set-doc-link").on("click",(function(){jQuery("#yasr-multi-set-doc-box").toggle("slow")})),jQuery("#yasr-multi-set-doc-link-hide").on("click",(function(){jQuery("#yasr-multi-set-doc-box").toggle("slow")})),1===n){var a=jQuery("#yasr-edit-form-number-elements").attr("value");a++,jQuery("#yasr-add-field-edit-multiset").on("click",(function(){if(a>9)return jQuery("#yasr-element-limit").show(),jQuery("#yasr-add-field-edit-multiset").hide(),!1;var e=jQuery(document.createElement("tr"));e.html('<td colspan="2">Element #'+a+' <input type="text" name="edit-multi-set-element-'+a+'" value="" ></td>'),e.appendTo("#yasr-table-form-edit-multi-set"),a++}))}else n>1&&(jQuery("#yasr-button-select-set-edit-form").on("click",(function(){var e={action:"yasr_get_multi_set",set_id:jQuery("#yasr_select_edit_set").val()};return jQuery.post(ajaxurl,e,(function(e){jQuery("#yasr-multi-set-response").show(),jQuery("#yasr-multi-set-response").html(e)})),!1})),jQuery(document).ajaxComplete((function(){var e=jQuery("#yasr-edit-form-number-elements").attr("value");e++,jQuery("#yasr-add-field-edit-multiset").on("click",(function(){if(e>9)return jQuery("#yasr-element-limit").show(),jQuery("#yasr-add-field-edit-multiset").hide(),!1;var t=jQuery(document.createElement("tr"));t.html('<td colspan="2">Element #'+e+' <input type="text" name="edit-multi-set-element-'+e+'" value="" ></td>'),t.appendTo("#yasr-table-form-edit-multi-set"),e++}))})))}"migration_tools"===e&&(jQuery("#yasr-import-ratemypost-submit").on("click",(function(){document.getElementById("yasr-import-ratemypost-answer").innerHTML='<img src="'+yasrWindowVar.loaderUrl+'" alt="yasr-loader" width="16" height="16">';var e={action:"yasr_import_ratemypost",nonce:document.getElementById("yasr-import-rmp-nonce").value};jQuery.post(ajaxurl,e,(function(e){e=JSON.parse(e),document.getElementById("yasr-import-ratemypost-answer").innerHTML=e}))})),jQuery("#yasr-import-wppr-submit").on("click",(function(){document.getElementById("yasr-import-wppr-answer").innerHTML='<img src="'+yasrWindowVar.loaderUrl+'" alt="yasr-loader" width="16" height="16">';var e={action:"yasr_import_wppr",nonce:document.getElementById("yasr-import-wppr-nonce").value};jQuery.post(ajaxurl,e,(function(e){document.getElementById("yasr-import-wppr-answer").innerHTML=e}))})),jQuery("#yasr-import-kksr-submit").on("click",(function(){document.getElementById("yasr-import-kksr-answer").innerHTML='<img src="'+yasrWindowVar.loaderUrl+'" alt="yasr-loader" width="16" height="16">';var e={action:"yasr_import_kksr",nonce:document.getElementById("yasr-import-kksr-nonce").value};jQuery.post(ajaxurl,e,(function(e){document.getElementById("yasr-import-kksr-answer").innerHTML=e}))})),jQuery("#yasr-import-mr-submit").on("click",(function(){document.getElementById("yasr-import-mr-answer").innerHTML='<img src="'+yasrWindowVar.loaderUrl+'" alt="yasr-loader" width="16" height="16">';var e={action:"yasr_import_mr",nonce:document.getElementById("yasr-import-mr-nonce").value};jQuery.post(ajaxurl,e,(function(e){document.getElementById("yasr-import-mr-answer").innerHTML=e}))})),wp.hooks.doAction("yasr_migration_page_bottom")),"rankings"===e&&wp.hooks.doAction("yasr_ranking_page_top")})(),(()=>{"use strict";let e;var t,n=function(t){var r=t.colClass,n=t.post,a=n.link,s=n.title;return React.createElement("td",{className:r},React.createElement("a",{href:a},function(t){if("string"!=typeof t||-1===t.indexOf("&"))return t;void 0===e&&(e=document.implementation&&document.implementation.createHTMLDocument?document.implementation.createHTMLDocument("").createElement("textarea"):document.createElement("textarea")),e.innerHTML=t;const r=e.textContent;return e.innerHTML="",r}(s)))},a=new Uint8Array(16);function s(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const i=function(e){return"string"==typeof e&&o.test(e)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};const u=function(e,t,r){var n=(e=e||{}).random||(e.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return c(n)};var y=r(726),m=r.n(y),p=function(e){var t=e.html;return React.createElement("div",{dangerouslySetInnerHTML:{__html:m()(t,"<strong><p>")}})},g=function(e){var t=e.post,r=t.number_of_votes,n=t.rating,a=e.text;if(void 0!==r){var s=JSON.parse(yasrWindowVar.textAfterVr);return s=(s=s.replace("%total_count%",r)).replace("%average%",n),React.createElement("div",{className:"yasr-most-rated-text"},React.createElement(p,{html:s}))}return React.createElement(React.Fragment,null,a," ",n)},f=function(e){var t=e.size,r=e.htmlId,n=e.element,a=e.step,s=e.readonly,o=e.rating;return React.createElement("div",{id:r,ref:function(){return yasrSetRaterValue(t,r,n,a,s,o)}})},h=function(e){var t=e.rankingParams,r=e.tableId,n=e.colClass,a=e.post,s="after",o=JSON.parse(yasrWindowVar.textRating),i=new URLSearchParams(t);null!==i.get("text_position")&&(s=i.get("text_position")),null!==i.get("custom_txt")&&(o=i.get("custom_txt"));var l={rating:a.rating,htmlId:"yasr-ranking-element-"+u(),size:document.getElementById(r).dataset.rankingSize};return"before"===s?React.createElement("td",{className:n},React.createElement(g,{post:a,text:o}),React.createElement(f,l)):React.createElement("td",{className:n},React.createElement(f,l),React.createElement(g,{post:a,text:o}))},v=function(e){return React.createElement("tr",{className:e.trClass},React.createElement(n,{colClass:e.leftClass,post:e.post}),React.createElement(h,e))},_=function(e){var t=e.tBodyId,r=e.show,n=e.data,a=e.source,s=e.rankingParams,o=e.tableId;return React.createElement("tbody",{id:t,style:{display:r}},n.map((function(e,t){var r="yasr-rankings-td-colored",n="yasr-top-10-most-highest-left",i="yasr-top-10-most-highest-right";return"author_ranking"===a&&(r="yasr-rankings-td-white",n="yasr-top-10-overall-left",i="yasr-top-10-overall-right"),t%2==0&&(r="yasr-rankings-td-white","author_ranking"===a&&(r="yasr-rankings-td-colored")),React.createElement(v,{key:e.post_id,source:a,tableId:o,rankingParams:s,post:e,trClass:r,leftClass:n,rightClass:i})})))};function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=B(e);if(t){var a=B(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return I(this,r)}}function I(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=wp.element.render,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(s,React.Component);var t,r,n,a=w(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).state={error:null,isLoaded:!1,data:[],tableId:e.tableId,source:e.source,rankingParams:e.params,nonce:e.nonce},t}return t=s,r=[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(document.getElementById(this.state.tableId).dataset.rankingData),r={};if("yes"!==yasrWindowVar.ajaxEnabled)console.info("Ajax Disabled, getting data from source"),this.setState({isLoaded:!0,data:t});else if(this.state.source){var n=this.returnRestUrl();Promise.all(n.map((function(e){return fetch(e).then((function(e){return!0===e.ok?e.json():(console.info("Ajax Call Failed. Getting data from source"),"KO")})).then((function(e){"KO"===e?r=t:"overall_rating"===e.source||"author_multi"===e.source?r="overall_rating"===e.source?e.data_overall:e.data_mv:r[e.show]=e.data_vv})).catch((function(e){r=t,console.info(e)}))}))).then((function(t){e.setState({isLoaded:!0,data:r})})).catch((function(t){console.info(t),e.setState({isLoaded:!0,data:r})}))}else this.setState({error:"Invalid Data Source"})}},{key:"returnRestUrl",value:function(){var e,t=""!==this.state.rankingParams?this.state.rankingParams:"",r=this.state.source,n="&nonce_rankings="+this.state.nonce,a="";if(""!==t&&!1!==t){var s=new URLSearchParams(t);null!==s.get("order_by")&&(a+="order_by="+s.get("order_by")),null!==s.get("limit")&&(a+="&limit="+s.get("limit")),null!==s.get("start_date")&&"0"!==s.get("start_date")&&(a+="&start_date="+s.get("start_date")),null!==s.get("end_date")&&"0"!==s.get("end_date")&&(a+="&end_date="+s.get("end_date")),null!==s.get("ctg")?a+="&ctg="+s.get("ctg"):null!==s.get("cpt")&&(a+="&cpt="+s.get("cpt")),""!==a&&(a="&"+(a=a.replace(/\s+/g,""))),"visitor_multi"!==r&&"author_multi"!==r||null!==s.get("setid")&&(a+="&setid="+s.get("setid"))}else a="";if("author_ranking"===r||"author_multi"===r)e=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&source="+r+a+n];else{var o="",i="";if(""!==t){var l=new URLSearchParams(t);null!==l.get("required_votes[most]")&&(o="&required_votes="+l.get("required_votes[most]")),null!==l.get("required_votes[highest]")&&(i="&required_votes="+l.get("required_votes[highest]"))}e=[yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=most&source="+r+a+o+n,yasrWindowVar.ajaxurl+"?action=yasr_load_rankings&show=highest&source="+r+a+i+n]}return e}},{key:"rankingTableHead",value:function(e,t){var r=this.state.tableId,n="link-most-rated-posts-"+r,a="link-highest-rated-posts-"+r;if("author_ranking"!==e){var s=React.createElement("span",null,React.createElement("span",{id:n},JSON.parse(yasrWindowVar.textMostRated))," | ",React.createElement("a",{href:"#",id:a,onClick:this.switchTBody.bind(this)},JSON.parse(yasrWindowVar.textHighestRated)));return"highest"===t&&(s=React.createElement("span",null,React.createElement("span",{id:a},JSON.parse(yasrWindowVar.textHighestRated))," | ",React.createElement("a",{href:"#",id:n,onClick:this.switchTBody.bind(this)},JSON.parse(yasrWindowVar.textMostRated)))),React.createElement("thead",null,React.createElement("tr",{className:"yasr-rankings-td-colored yasr-rankings-heading"},React.createElement("th",null,JSON.parse(yasrWindowVar.textLeftColumnHeader)),React.createElement("th",null,JSON.parse(yasrWindowVar.textOrderBy),":  ",s)))}return React.createElement(React.Fragment,null)}},{key:"switchTBody",value:function(e){e.preventDefault();var t=e.target.id,r=this.state.tableId,n="link-most-rated-posts-"+r,a="link-highest-rated-posts-"+r,s="most-rated-posts-"+r,o="highest-rated-posts-"+r,i=document.getElementById(t),l=document.createElement("span");l.innerHTML=i.innerHTML,l.id=i.id,i.parentNode.replaceChild(l,i),t===n&&(document.getElementById(o).style.display="none",document.getElementById(s).style.display="",l=document.getElementById(a),i.innerHTML=l.innerHTML,i.id=l.id,l.parentNode.replaceChild(i,l)),t===a&&(document.getElementById(s).style.display="none",document.getElementById(o).style.display="",l=document.getElementById(n),i.innerHTML=l.innerHTML,i.id=l.id,l.parentNode.replaceChild(i,l))}},{key:"rankingTableBody",value:function(){var e=this.state,t=e.data,r=e.source,n=e.rankingParams;if("overall_rating"===r||"author_multi"===r)return React.createElement(_,{data:t,tableId:this.state.tableId,tBodyId:"overall_"+this.state.tableId,rankingParams:n,show:"table-row-group",source:r});var a=t.most,s=t.highest,o="table-row-group",i="none",l="most",d=o,c=i,u=new URLSearchParams(n);return null!==u.get("view")&&(l=u.get("view")),"highest"===l&&(d=i,c=o),React.createElement(React.Fragment,null,this.rankingTableHead(r,l),React.createElement(_,{data:a,tableId:this.state.tableId,tBodyId:"most-rated-posts-"+this.state.tableId,rankingParams:n,show:d,source:r}),React.createElement(_,{data:s,tableId:this.state.tableId,tBodyId:"highest-rated-posts-"+this.state.tableId,rankingParams:n,show:c,source:r}))}},{key:"render",value:function(){var e=this.state,t=e.error,r=e.isLoaded;return t?React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,console.log(t),"Error"))):!1===r?React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,JSON.parse(yasrWindowVar.textLoadRanking)))):React.createElement(React.Fragment,null,this.rankingTableBody())}}],r&&E(t.prototype,r),n&&E(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}();function j(){var e=document.getElementsByClassName("yasr-stars-rankings");if(e.length>0)for(var t=0;t<e.length;t++){var r=e.item(t).id,n=JSON.parse(e.item(t).dataset.rankingSource),a=JSON.parse(e.item(t).dataset.rankingParams),s=JSON.parse(e.item(t).dataset.rankingNonce),o=document.getElementById(r);R(React.createElement(x,{source:n,tableId:r,params:a,nonce:s}),o)}}j();tippy(document.querySelectorAll(".yasr-copy-shortcode"),{content:"Copied! Insert into your post!",theme:"yasr",arrow:"true",arrowType:"round",trigger:"click"});var S,C=wp.i18n.__;if(document.getElementsByClassName("nav-tab-active").length>0&&(S=document.getElementsByClassName("nav-tab-active")[0].id),"rankings"===S){var L,Q=function(e){var t=q.value,r=document.getElementById("yasr-builder-shortcode").textContent,n=["yasr_ov_ranking","yasr_most_or_highest_rated_posts","yasr_multi_set_ranking","yasr_visitor_multi_set_ranking"];n=wp.hooks.applyFilters("yasrBuilderDrawRankingsShortcodes",n),fetch(ajaxurl+"?action=yasr_rankings_preview_shortcode&shortcode="+t+"&full_shortcode="+r).then((function(e){return!0===e.ok?e.json():(console.info(C("Ajax Call Failed. Shortcode preview can't be done","yet-another-stars-rating")),"KO")})).catch((function(e){console.info(e)})).then((function(e){if("KO"!==e){var t=document.createElement("div");t.innerHTML=e,U.childNodes.length>0?U.replaceChild(t,U.childNodes[0]):U.appendChild(t)}})).then((function(e){n.forEach((function(e){t===e&&j()}))}))},O=function(e,t,r,n,a,s,o,i,l){e.style.display="",t.style.display="",s.style.display="",l.style.display="",r.style.display="none",n.style.display="none",a.style.display="none",null!==o&&(o.style.display=""),null!==i&&(i.style.display="none")},T=function(e,t,r,n,a,s,o,i,l){r.style.display="",n.style.display="",t.style.display="",s.style.display="",l.style.display="",e.style.display="none",a.style.display="none",null!==o&&(o.style.display=""),null!==i&&(i.style.display="none")},N=function(e,t,r,n,a,s,o,i,l){a.style.display="",l.style.display="none",e.style.display="none",r.style.display="none",n.style.display="none",t.style.display="none",s.style.display="none",null!==o&&(o.style.display="none"),null!==i&&(i.style.display="none")},P=function(e,t,r,n,a,s,o,i){var l=arguments.length>8&&void 0!==arguments[8]&&arguments[8],d=arguments.length>9?arguments[9]:void 0;!0===l?(K.className="",K.classList.add("yasr-settings-row-24"),r.style.display="",n.style.display="",e.style.display="none"):(r.style.display="none",n.style.display="none",e.style.display=""),s.style.display="",t.style.display="",d.style.display="",a.style.display="none",null!==o&&(o.style.display=""),null!==i&&(i.style.display="")},H=".yasr-builder-elements-parents",M=".yasr-builder-elements-childs";jQuery(H).prop("disabled",!0),jQuery(M).prop("disabled",!0),jQuery(H).find("input").each((function(){jQuery(this).prop("disabled",!0)})),wp.hooks.doAction("yasrBuilderBegin",H,M);var V=[],W={name:"yasr_most_or_highest_rated_posts",setid:"",rows:"",size:"",view:"",minvotesmost:"",minvoteshg:"",txtPosition:"",txt:"",display:"",start_date:"",end_date:"",category:"",cpt:""};L=W.name,document.getElementById("yasr-builder-shortcode").textContent="["+L+"]",document.getElementById("yasr-builder-copy-shortcode").setAttribute("data-shortcode","["+L+"]");var A=document.getElementById("yasr-builder-button-preview"),J=document.getElementById("yasr-builder-copy-shortcode"),U=document.getElementById("yasr-builder-preview"),q=document.getElementById("yasr-ranking-source"),D=document.getElementById("yasr-ranking-multiset-select"),F=document.getElementById("yasr-builder-datepicker-start"),z=document.getElementById("yasr-builder-datepicker-end"),K=document.getElementById("yasr-builder-params-container"),Y=document.getElementById("builder-vv-default-view"),G=document.getElementById("builder-vv-required-votes"),$=document.getElementById("builder-stars-size"),X=document.getElementById("builder-overall-text"),Z=document.getElementById("builder-username-options"),ee=document.getElementById("builder-category"),te=document.getElementById("builder-cpt"),re=document.getElementById("yasr-ranking-multiset"),ne=document.getElementById("yasr-builder-datepicker"),ae=q.value,se=!1;F.value="",z.value="","yasr_ov_ranking"===ae?O(X,$,Y,G,Z,ee,te,re,ne):"yasr_most_active_users"===ae||"yasr_top_reviewers"===ae?N(X,$,Y,G,Z,ee,te,re,ne):"yasr_multi_set_ranking"===ae?P(X,$,Y,G,Z,ee,te,re,!1,ne):"yasr_visitor_multi_set_ranking"===ae?P(X,$,Y,G,Z,ee,te,re,!0,ne):T(X,$,Y,G,Z,ee,te,re,ne),document.addEventListener("change",(function(e){if("yasr-ranking-source"===e.target.id)K.className="",K.classList.add("yasr-settings-row-33"),U.innerHTML="",F.value="",z.value="",W={name:"yasr_most_or_highest_rated_posts",setid:"",rows:"",size:"",view:"",minvotesmost:"",minvoteshg:"",txtPosition:"",txt:"",display:"",start_date:"",end_date:"",category:"",cpt:""},"yasr_ov_ranking"===e.target.value?O(X,$,Y,G,Z,ee,te,re,ne):"yasr_most_active_users"===e.target.value||"yasr_top_reviewers"===e.target.value?N(X,$,Y,G,Z,ee,te,re,ne):"yasr_multi_set_ranking"===e.target.value?(P(X,$,Y,G,Z,ee,te,re,!1,ne),W.setid=" setid="+D[0].value):"yasr_visitor_multi_set_ranking"===e.target.value?(P(X,$,Y,G,Z,ee,te,re,!0,ne),W.setid=" setid="+D[0].value):T(X,$,Y,G,Z,ee,te,re,ne),W.name=e.target.value,L=W.name+W.setid;else{"yasr-ranking-multiset-select"===e.target.id&&(W.setid=" setid="+e.target.value),V=wp.hooks.applyFilters("yasrBuilderFilterShortcode",W);for(var t=2;W.length;t++)V.hasOwnProperty(W[t])&&(W[t]=V[t]);L=W.name+W.setid+W.rows+W.view+W.minvotesmost+W.minvoteshg+W.size+W.txtPosition+W.txt+W.display+W.start_date+W.end_date+W.category+W.cpt}document.getElementById("yasr-builder-shortcode").textContent="["+L+"]",document.getElementById("yasr-builder-copy-shortcode").setAttribute("data-shortcode","["+L+"]"),!0===se&&"yasr-ranking-source"!==e.target.id&&"yasr-builder-category-radio"!==e.target.name&&Q()})),J.onclick=function(e){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(document.getElementById(e.target.id).getAttribute("data-shortcode"))},A.onclick=function(e){Q(),se=!0}}})()})();