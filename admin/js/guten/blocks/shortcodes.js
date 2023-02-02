(()=>{"use strict";var e={434:(e,t,r)=>{r.d(t,{$S:()=>E,Lz:()=>R,Mp:()=>u,NA:()=>k,Sg:()=>b,aF:()=>v,lN:()=>n,pD:()=>s,pP:()=>w,rl:()=>f,yG:()=>y});var a=wp.i18n.__,s=a("All these settings are optional","yet-another-stars-rating"),n=a("Size","yet-another-stars-rating"),o=a("Stars size","yet-another-stars-rating"),i=a("Small","yet-another-stars-rating"),l=a("Medium","yet-another-stars-rating"),c=a("Large","yet-another-stars-rating"),u=a("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),g=a("Remember: only the post author can rate here.","yet-another-stars-rating"),d=a("This is the star set where your users will be able to vote","yet-another-stars-rating"),h=a("by Visitor Votes, using number of ratings ","yet-another-stars-rating"),m=a("by Visitor Votes, using average rating ","yet-another-stars-rating"),p=a("by Author Rating","yet-another-stars-rating"),y=function(e){var t;!1!==e.postId&&(t=e.postId);return React.createElement("div",null,React.createElement("input",{type:"text",size:"4",defaultValue:t,onKeyPress:function(t){return function(e,t){if("Enter"===t.key){var r=t.target.value;!0!==/^\d+$/.test(r)&&""!==r||e({postId:r}),t.preventDefault()}}(e.setAttributes,t)}}))},v=function(e){return React.createElement("form",null,React.createElement("select",{value:e.size,onChange:function(t){return(0,e.setAttributes)({size:(r=t).target.querySelector("option:checked").value}),void r.preventDefault();var r}},React.createElement("option",{value:"--"},o,"    "),React.createElement("option",{value:"small"},i,"  "),React.createElement("option",{value:"medium"},l),React.createElement("option",{value:"large"},c,"  ")))},R=function(e){var t=e.orderBy,r=e.setAttributes;return React.createElement(React.Fragment,null,React.createElement("fieldset",{onChange:function(e){return function(e,t){e({orderby:t.target.value})}(r,e)}},React.createElement("legend",null,React.createElement("strong",null,a("Sort posts","yet-another-stars-rating"))),React.createElement("div",{className:"yasr-indented-answer"},React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsVVMost",name:"orderPostsratingSource",value:"vv_most",checked:"vv_most"===t}),React.createElement("label",{htmlFor:"orderPostsVVMost"},h)),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsVVHighest",name:"orderPostsratingSource",value:"vv_highest",checked:"vv_highest"===t}),React.createElement("label",{htmlFor:"orderPostsVVHighest"},m)),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsOverall",name:"orderPostsratingSource",value:"overall",checked:"overall"===t}),React.createElement("label",{htmlFor:"orderPostsOverall"},p)))),React.createElement("p",null," "))},k=function(e){var t=e.sort,r=e.setAttributes;return React.createElement("fieldset",{onChange:function(e){return function(e,t){e({sort:t.target.value})}(r,e)}},React.createElement("legend",null,React.createElement("strong",null,a("Order",""))),React.createElement("div",{className:"yasr-indented-answer"},React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsDesc",name:"orderPostsSort",value:"desc",checked:"desc"===t}),React.createElement("label",{htmlFor:"orderPostsDesc"},a("Highest Rated","yet-another-stars-rating"))),React.createElement("div",null,React.createElement("input",{type:"radio",id:"orderPostsASC",name:"orderPostsSort",value:"asc",checked:"asc"===t}),React.createElement("label",{htmlFor:"orderPostsASC"},a("Lowest Rated","yet-another-stars-rating")))))},b=function(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,a("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));if(null===wp.data.select("core/editor"))return React.createElement(React.Fragment,null);var t=a("Rate this article / item","yet-another-stars-rating"),r=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,s=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return yasrSetRaterValue(32,"overall-rater",!1,.1,!1,r,s)}}))},f=function(e){var t={className:null,shortCode:null,overallRating:!1,hookName:!1,panelSettings:!0,sizeAndId:!1,orderPosts:!1},r=wp.data.select("core/editor").getCurrentPostType();return"yet-another-stars-rating/overall-rating"===e&&(t.overallRating=!0,t.className="yasr-overall-block",t.shortCode="yasr_overall_rating",t.bottomDesc=g,t.sizeAndId=!0),"yet-another-stars-rating/visitor-votes"===e&&(t.className="yasr-vv-block",t.shortCode="yasr_visitor_votes",t.bottomDesc=d,t.sizeAndId=!0),"yet-another-stars-rating/overall-rating-ranking"===e&&(t.className="yasr-ov-ranking-block",t.shortCode="yasr_ov_ranking",t.hookName="yasr_overall_rating_rankings"),"yet-another-stars-rating/visitor-votes-ranking"===e&&(t.className="yasr-vv-ranking-block",t.shortCode="yasr_most_or_highest_rated_posts",t.hookName="yasr_visitor_votes_rankings"),"yet-another-stars-rating/most-active-users"===e&&(t.className="yasr-active-users-block",t.shortCode="yasr_most_active_users",t.hookName="yasr_top_visitor_setting"),"yet-another-stars-rating/most-active-reviewers"===e&&(t.className="yasr-reviewers-block",t.shortCode="yasr_top_reviewers",t.hookName="yasr_top_reviewers_setting"),"yet-another-stars-rating/user-rate-history"===e&&(t.className="yasr-user-rate-history",t.shortCode="yasr_user_rate_history",t.panelSettings=!1),"yet-another-stars-rating/display-posts"===e&&(t.className="yasr-display-posts",t.shortCode="yasr_display_posts",""!==r&&"page"!==r&&(t.panelSettings=!1),t.orderPosts=!0),t},E=function(e,t,r,a,s,n){var o=wp.data.select("core/editor").getCurrentPostType();if(!a)return"";var i="[".concat(a||""),l=function(e,t){var r=null;return"edit"===t?("small"!==e&&"medium"!==e||(r=' size="'.concat(e,'"')),r):("small"!==e&&"medium"!==e&&"large"!==e||(r=' size="'.concat(e,'"')),r)}(e,t),c=function(e){var t=null;return!0===/^\d+$/.test(e)&&(t=' postid="'.concat(e,'"')),t}(r);if(i+="".concat(l||"").concat(c||""),"yasr_display_posts"===a){if("page"!==o)return"This shortcode can be used only on pages";var u=function(e,t){var r="";return"vv_highest"!==e&&"overall"!==e||(r+=" orderby=".concat(e)),"asc"===t&&(r+=" order=ASC"),r}(s,n);i+="".concat(u||"")}return i+="]"},_=function(){var e=a("To be able to customize this ranking, you need","yet-another-stars-rating"),t=a("You can buy the plugin, including support, updates and upgrades, on","yet-another-stars-rating");return React.createElement("h3",null,e," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings#yasr-pro"},"Yasr Pro."),React.createElement("br",null),t," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings"},"yetanotherstarsrating.com"))},w=function(){return React.createElement("div",null,React.createElement(_,null))}},449:(e,t,r)=>{const a=JSON.parse('{"title":"Yasr: Overall Rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating","description":"Insert the author rating.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","author","overall"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),s=JSON.parse('{"title":"Yasr: Visitor Votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes","description":"Insert the ability for your visitors to vote.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","visitor","votes","stars"],"attributes":{"size":{"type":"string","default":"large"},"postId":{"type":"string","default":false}},"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),n=JSON.parse('{"title":"Yasr: Most Active Visitors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-users","description":"This ranking shows the most active users, displaying the login name if logged in or \\"Anonymous\\" if not","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart","visitors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),o=JSON.parse('{"title":"Yasr: Most Active Authors","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/most-active-reviewers","description":"This ranking shows the most active reviewers on your site.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart","authors"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),i=JSON.parse('{"title":"Yasr: User Rate History","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/user-rate-history","description":"If user is logged in, this shortcode shows a list of all the ratings provided by the user on [yasr_visitor_votes] shortcode","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ratings","list","history"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),l=JSON.parse('{"title":"Yasr: Ranking by overall rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/overall-rating-ranking","description":"This ranking shows the highest rated posts rated through the overall_rating shortcode.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),c=JSON.parse('{"title":"Yasr: Ranking by visitors votes","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/visitor-votes-ranking","description":"This ranking shows both the highest and most rated posts rated through the yasr_visitor_votes shortcode. For an item to appear in this chart, it has to be rated at least twice.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["ranking","highest","most","chart"],"supports":{"align":["left","center","right"]},"editorScript":"yasr-shortcodes-blocks"}'),u=JSON.parse('{"title":"Yasr: Order posts by rating","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"yet-another-stars-rating/display-posts","description":"Display your posts according to YASR ratings. This shortcode works only on pages.","icon":"star-half","category":"yet-another-stars-rating","example":{},"keywords":["rating","posts","order"],"attributes":{"orderby":{"type":"string","default":"vv_most"},"sort":{"type":"string","default":"desc"},"posts_per_page":{"type":"number","default":10}},"editorScript":"yasr-shortcodes-blocks"}');var g=r(434),d=wp.components.PanelBody,h=wp.blockEditor.InspectorControls,m=function(e){var t=e.block,r=e.hookName,a=e.sizeAndId,s=e.orderPosts,n=(0,g.rl)(t),o=n.overallRating,i=n.panelSettings,l=n.bottomDesc,c=React.createElement(React.Fragment,null);return!1!==r&&(c=[React.createElement(g.pP,{key:0})],wp.hooks.doAction(r,c)),!0!==i&&!1===r?React.createElement(React.Fragment,null):React.createElement(h,null,o&&React.createElement(g.Sg,null),React.createElement(d,{title:"Settings"},c,i&&React.createElement(React.Fragment,null,a&&React.createElement(p,e),s&&React.createElement(React.Fragment,null,React.createElement(g.Lz,e),React.createElement(g.NA,e))),React.createElement("div",{className:"yasr-guten-block-panel"},l)))},p=function(e){var t=e.block,r=e.setAttributes,a={size:t,postId:e.postId,setAttributes:r};return React.createElement(React.Fragment,null,React.createElement("h3",null,g.pD),React.createElement(y,a),React.createElement(v,a))},y=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,g.lN),React.createElement("div",null,React.createElement(g.aF,{size:e.size,setAttributes:e.setAttributes})))},v=function(e){return React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(g.yG,{postId:e.postId,setAttributes:e.setAttributes}),React.createElement("div",{className:"yasr-guten-block-explain"},"Use return (↵) to save."),React.createElement("p",null,g.Mp))},R=wp.element.Fragment,k=wp.blockEditor.useBlockProps;const b=function(e){var t=e.attributes,r=t.size,a=t.postId,s=t.orderby,n=t.sort,o=t.post_per_page,i=e.name,l=e.isSelected,c=e.setAttributes,u=(0,g.rl)(i),d=u.className,h=u.shortCode,p=u.hookName,y=u.sizeAndId,v={block:i,size:r,postId:a,orderBy:s,sort:n,postPerPage:o,setAttributes:c,hookName:p,sizeAndId:y,orderPosts:u.orderPosts},b=k({className:d,name:i}),f=(0,g.$S)(r,"edit",a,h,s,n);return React.createElement(R,null,l&&React.createElement(m,v),React.createElement("div",b,f,l&&y&&React.createElement(g.aF,{size:r,setAttributes:c})))};var f=wp.blockEditor.useBlockProps;const E=function(e,t){var r=e.attributes,a=r.size,s=r.postId,n=r.orderby,o=r.sort,i=t.name,l=(0,g.rl)(i),c=l.className,u=l.shortCode,d=f.save({className:c}),h=(0,g.$S)(a,"save",s,u,n,o);return React.createElement("div",d,h)};for(var _=wp.blocks.registerBlockType,w={overallRating:a,visitorVotes:s,mostActiveUsers:n,topReviewers:o,userRateHistory:i,ovRanking:l,vvRanking:c,displayPosts:u},S=function(){var e=P[N];_(w[e],{edit:b,save:function(t){return E(t,w[e])}})},N=0,P=Object.keys(w);N<P.length;N++)S()}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(434);r(449)})();