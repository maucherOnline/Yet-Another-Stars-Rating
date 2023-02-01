(()=>{"use strict";var e={434:(e,t,r)=>{r.d(t,{K1:()=>E,Lz:()=>b,Mp:()=>p,Sg:()=>R,YD:()=>f,aF:()=>k,lN:()=>o,pD:()=>s,pP:()=>S,rl:()=>w,rn:()=>_,yG:()=>v});var a=wp.i18n.__,s=a("All these settings are optional","yet-another-stars-rating"),o=a("Size","yet-another-stars-rating"),n=a("Stars size","yet-another-stars-rating"),i=a("Small","yet-another-stars-rating"),l=a("Medium","yet-another-stars-rating"),c=a("Large","yet-another-stars-rating"),p=a("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),u=a("Remember: only the post author can rate here.","yet-another-stars-rating"),h=a("This is the star set where your users will be able to vote","yet-another-stars-rating"),g=a("Order posts by...","yet-another-stars-rating"),d=a("by Visitor Votes, most rated posts first ","yet-another-stars-rating"),m=a("by Visitor Votes, highest rated posts first ","yet-another-stars-rating"),y=a("by OverallRating ","yet-another-stars-rating"),v=function(e){var t;!1!==e.postId&&(t=e.postId);return React.createElement("div",null,React.createElement("input",{type:"text",size:"4",defaultValue:t,onKeyPress:function(t){return function(e,t){if("Enter"===t.key){var r=t.target.value;!0!==/^\d+$/.test(r)&&""!==r||e({postId:r}),t.preventDefault()}}(e.setAttributes,t)}}))},k=function(e){return React.createElement("form",null,React.createElement("select",{value:e.size,onChange:function(t){return(0,e.setAttributes)({size:(r=t).target.querySelector("option:checked").value}),void r.preventDefault();var r}},React.createElement("option",{value:"--"},n,"    "),React.createElement("option",{value:"small"},i,"  "),React.createElement("option",{value:"medium"},l),React.createElement("option",{value:"large"},c,"  ")))},b=function(e){var t=e.orderBy,r=e.setAttributes;return React.createElement("fieldset",{onChange:function(e){return function(e,t){e({orderby:t.target.value})}(r,e)}},React.createElement("legend",null,g),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsVVMost",name:"orderPostsratingSource",value:"vv_most",checked:"vv_most"===t}),React.createElement("label",{htmlFor:"orderPostsVVMost"},d)),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsVVHighest",name:"orderPostsratingSource",value:"vv_highest",checked:"vv_highest"===t}),React.createElement("label",{htmlFor:"orderPostsVVHighest"},m)),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsOverall",name:"orderPostsratingSource",value:"overall",checked:"overall"===t}),React.createElement("label",{htmlFor:"orderPostsOverall"},y)))},R=function(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,a("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));if(null===wp.data.select("core/editor"))return React.createElement(React.Fragment,null);var t=a("Rate this article / item","yet-another-stars-rating"),r=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,s=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return yasrSetRaterValue(32,"overall-rater",!1,.1,!1,r,s)}}))},f=function(e,t){var r=null;return"edit"===t?("small"!==e&&"medium"!==e||(r=' size="'.concat(e,'"')),r):("small"!==e&&"medium"!==e&&"large"!==e||(r=' size="'.concat(e,'"')),r)},_=function(e){var t=null;return!0===/^\d+$/.test(e)&&(t=' postid="'.concat(e,'"')),t},E=function(e){return"vv_most"===e||"vv_highest"===e||"overall"===e?e=" orderby=".concat(e):""},w=function(e){var t={className:null,shortCode:null,overallRating:!1,hookName:!1,panelSettings:!0,sizeAndId:!1,orderPosts:!1},r=wp.data.select("core/editor").getCurrentPostType();return"yet-another-stars-rating/overall-rating"===e&&(t.overallRating=!0,t.className="yasr-overall-block",t.shortCode="yasr_overall_rating",t.bottomDesc=u,t.sizeAndId=!0),"yet-another-stars-rating/visitor-votes"===e&&(t.className="yasr-vv-block",t.shortCode="yasr_visitor_votes",t.bottomDesc=h,t.sizeAndId=!0),"yet-another-stars-rating/overall-rating-ranking"===e&&(t.className="yasr-ov-ranking-block",t.shortCode="yasr_ov_ranking",t.hookName="yasr_overall_rating_rankings"),"yet-another-stars-rating/visitor-votes-ranking"===e&&(t.className="yasr-vv-ranking-block",t.shortCode="yasr_most_or_highest_rated_posts",t.hookName="yasr_visitor_votes_rankings"),"yet-another-stars-rating/most-active-users"===e&&(t.className="yasr-active-users-block",t.shortCode="yasr_most_active_users",t.hookName="yasr_top_visitor_setting"),"yet-another-stars-rating/most-active-reviewers"===e&&(t.className="yasr-reviewers-block",t.shortCode="yasr_top_reviewers",t.hookName="yasr_top_reviewers_setting"),"yet-another-stars-rating/user-rate-history"===e&&(t.className="yasr-user-rate-history",t.shortCode="yasr_user_rate_history",t.panelSettings=!1),"yet-another-stars-rating/display-posts"===e&&(t.className="yasr-display-posts",t.shortCode="yasr_display_posts",""!==r&&"page"!==r&&(t.panelSettings=!1),t.orderPosts=!0),t},N=function(){var e=a("To be able to customize this ranking, you need","yet-another-stars-rating"),t=a("You can buy the plugin, including support, updates and upgrades, on","yet-another-stars-rating");return React.createElement("h3",null,e," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings#yasr-pro"},"Yasr Pro."),React.createElement("br",null),t," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings"},"yetanotherstarsrating.com"))},S=function(){return React.createElement("div",null,React.createElement(N,null))}},449:(e,t,r)=>{const a=JSON.parse('{"title":"Yasr: Overall Rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating","description":"Insert the author rating.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","author","overall"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),s=JSON.parse('{"title":"Yasr: Visitor Votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes","description":"Insert the ability for your visitors to vote.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","visitor","votes","stars"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),o=JSON.parse('{"title":"Yasr: Most Active Visitors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-users","description":"This ranking shows the most active users, displaying the login name if logged in or \\"Anonymous\\" if not","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart","visitors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),n=JSON.parse('{"title":"Yasr: Most Active Authors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-reviewers","description":"This ranking shows the most active reviewers on your site.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart","authors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),i=JSON.parse('{"title":"Yasr: User Rate History","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/user-rate-history","description":"If user is logged in, this shortcode shows a list of all the ratings provided by the user on [yasr_visitor_votes] shortcode","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ratings","list","history"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),l=JSON.parse('{"title":"Yasr: Ranking by overall rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating-ranking","description":"This ranking shows the highest rated posts rated through the overall_rating shortcode.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),c=JSON.parse('{"title":"Yasr: Ranking by visitors votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes-ranking","description":"This ranking shows both the highest and most rated posts rated through the yasr_visitor_votes shortcode. For an item to appear in this chart, it has to be rated at least twice.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),p=JSON.parse('{"title":"Yasr: order posts by rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/display-posts","description":"Order your posts according to YASR ratings. This shortcode works only on pages.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","posts","order"],"attributes":{"orderby":{"type":"string","default":"vv_most"},"sort":{"type":"string","default":"DESC"},"posts_per_page":{"type":"number","default":10}},"editorScript":"yasr-shortcodes-blocks"}');var u=r(434),h=wp.components.PanelBody,g=wp.blockEditor.InspectorControls,d=function(e){var t=e.block,r=e.hookName,a=e.sizeAndId,s=e.orderPosts,o=(0,u.rl)(t),n=o.overallRating,i=o.panelSettings,l=o.bottomDesc,c=React.createElement(React.Fragment,null);return!1!==r&&(c=[React.createElement(u.pP,{key:0})],wp.hooks.doAction(r,c)),!0!==i&&!1===r?React.createElement(React.Fragment,null):React.createElement(g,null,n&&React.createElement(u.Sg,null),React.createElement(h,{title:"Settings"},c,i&&a&&React.createElement(m,e),i&&s&&React.createElement(u.Lz,e),React.createElement("div",{className:"yasr-guten-block-panel"},l)))},m=function(e){var t=e.block,r=e.setAttributes,a={size:t,postId:e.postId,setAttributes:r};return React.createElement(React.Fragment,null,React.createElement("h3",null,u.pD),React.createElement(y,a),React.createElement(v,a))},y=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,u.lN),React.createElement("div",null,React.createElement(u.aF,{size:e.size,setAttributes:e.setAttributes})))},v=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(u.yG,{postId:e.postId,setAttributes:e.setAttributes}),React.createElement("div",{className:"yasr-guten-block-explain"},"Use return (↵) to save."),React.createElement("p",null,u.Mp))},k=wp.element.Fragment,b=wp.blockEditor.useBlockProps;const R=function(e){var t=e.attributes,r=t.size,a=t.postId,s=t.orderby,o=t.sort,n=t.post_per_page,i=e.name,l=e.isSelected,c=e.setAttributes,p=(0,u.rl)(i),h=p.className,g=p.shortCode,m=p.hookName,y=p.sizeAndId,v=p.orderPosts,R=wp.data.select("core/editor").getCurrentPostType(),f={block:i,size:r,postId:a,orderBy:s,sort:o,postPerPage:n,setAttributes:c,hookName:m,sizeAndId:y,orderPosts:v},_=b({className:h,name:i}),E=(0,u.YD)(r,"edit"),w=(0,u.rn)(a),N="[".concat(g||"").concat(E||"").concat(w||"");if("yasr_display_posts"===g){var S=(0,u.K1)(s);N+="".concat(S||"")}return N+="]","yasr_display_posts"===g&&"page"!==R&&(N="This shortcode can be used only on pages"),React.createElement(k,null,l&&React.createElement(d,f),React.createElement("div",_,N,l&&y&&React.createElement(u.aF,{size:r,setAttributes:c})))};var f=wp.blockEditor.useBlockProps;const _=function(e,t){var r=e.attributes,a=r.size,s=r.postId,o=r.orderby,n=t.name,i=(0,u.rl)(n),l=i.className,c=i.shortCode,p=f.save({className:l}),h=wp.data.select("core/editor").getCurrentPostType();if("yasr_display_posts"!==c||"page"===h){var g=(0,u.YD)(a,"save"),d=(0,u.rn)(s),m="[".concat(c||"").concat(g||"").concat(d||"");if("yasr_display_posts"===c){var y=(0,u.K1)(o);m+="".concat(y||"")}return m+="]",React.createElement("div",p,m)}};for(var E=wp.blocks.registerBlockType,w={overallRating:a,visitorVotes:s,mostActiveUsers:o,topReviewers:n,userRateHistory:i,ovRanking:l,vvRanking:c,displayPosts:p},N=function(){var e=P[S];E(w[e],{edit:R,save:function(t){return _(t,w[e])}})},S=0,P=Object.keys(w);S<P.length;S++)N()}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(434);r(449)})();