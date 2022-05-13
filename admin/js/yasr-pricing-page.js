(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var c=0;c<t.length;c++){var a=t[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function a(t,c){if(c&&("object"===e(c)||"function"==typeof c))return c;if(void 0!==c)throw new TypeError("Derived constructors may only return object or undefined");return r(t)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}function l(e){var t="$";return"eur"===e.name&&(t="€"),React.createElement("small",null,t," ")}function i(e){var t="/year";return"monthly"===e.name&&(t="/month"),"lifetime"===e.name&&(t=""),React.createElement("small",null,t)}function s(e){var t=" 1 website";return"plus"===e.license&&(t=" 5 websites"),"enterprise"===e.license&&(t=" 30 websites"),React.createElement("ul",{className:"yasr-pricing-table-features"},"annual"===e.cycle&&React.createElement("li",{className:"yasr-pricing-table-feature"},React.createElement("strong",null,"1 year")," of supports and updates ",React.createElement("br",null),"for",React.createElement("strong",null,t)),"monthly"===e.cycle&&React.createElement("li",{className:"yasr-pricing-table-feature"},React.createElement("strong",null,"1 month")," of supports and updates ",React.createElement("br",null),"for",React.createElement("strong",null,t)),"lifetime"===e.cycle&&React.createElement("li",{className:"yasr-pricing-table-feature"},React.createElement("strong",null,"Lifetime")," updates and support",React.createElement("br",null),"for",React.createElement("strong",null,t)),React.createElement("li",{className:"yasr-pricing-table-feature"},"User reviews"),React.createElement("li",{className:"yasr-pricing-table-feature"},"Custom rankings"),React.createElement("li",{className:"yasr-pricing-table-feature"},"20 + ready to use themes"),React.createElement("li",{className:"yasr-pricing-table-feature"},"Upload your own theme"),React.createElement("li",{className:"yasr-pricing-table-feature"},"Add fake ratings"),React.createElement("li",{className:"yasr-pricing-table-feature"},"Direct email support"),"lifetime"===e.cycle&&React.createElement("li",{className:"yasr-pricing-table-feature"},"We setup the plugin for free ",React.createElement("br",null),"(only lifetime plans)"))}function u(e){var t="",c=1,a="";return"single"===e.license?(a="eur"===e.currency?5399:1933,t="monthly"===e.cycle?"eur"===e.currency?"4.49":"4.99":"lifetime"===e.cycle?"eur"===e.currency?"129.99":"149.99":"eur"===e.currency?"41.99":"47.88"):"plus"===e.license?(c=5,a="eur"===e.currency?5400:1935,t="monthly"===e.cycle?"eur"===e.currency?"8.99":"9.99":"lifetime"===e.cycle?"eur"===e.currency?"249.99":"289.99":"eur"===e.currency?"83.88":"95.88"):"enterprise"===e.license&&(c=30,a="eur"===e.currency?5550:5549,t="monthly"===e.cycle?"eur"===e.currency?"12.99":"14.99":"lifetime"===e.cycle?"eur"===e.currency?"359.99":"439.99":"eur"===e.currency?"119.88":"143.88"),React.createElement("div",{className:"yasr-pring-table-price"},React.createElement(l,{name:e.currency}),React.createElement("span",null,t),React.createElement(i,{name:e.cycle}),React.createElement(o,{cycle:e.cycle,currency:e.currency,license:e.license}),React.createElement("p",{className:"PT-CTA"},React.createElement("a",{href:"#",className:"yasr-buy-button",onClick:function(t){!function(e,t,c,a){var r={plugin_id:256,billing_cycle:e,pricing_id:a,licenses:t,id:"yasr_checkout",page:"yasr_settings_page-pricing",checkout:"true",plan_id:"2778",plan_name:"yasrpro",disable_licenses_selector:!0,hide_billing_cycles:!0,currency:c},n=[];for(var l in r){var i=encodeURIComponent(l),s=encodeURIComponent(r[l]);n.push(i+"="+s)}n=n.join("&");var u=yasrWindowVar.adminUrl+"admin.php?"+n;window.open(u,"_self")}(e.cycle,c,e.currency,a),t.preventDefault()}},"Buy YASR ")))}function o(e){if("annual"===e.cycle){var t;return t="plus"===e.license?"eur"===e.currency?"6.99":"7.99":"enterprise"===e.license?"eur"===e.currency?"9.99":"11.99":"eur"===e.currency?"3.49":"3.99",React.createElement("p",{className:"yasr-pricing-table-price-desc"},React.createElement(l,{name:e.currency}),t," /month")}return React.createElement(React.Fragment,null)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,React.Component);var l,i,o,y,m=(o=p,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=n(o);if(y){var c=n(this).constructor;e=Reflect.construct(t,arguments,c)}else e=t.apply(this,arguments);return a(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=m.call(this,e)).state={currencyName:"usd",cycle:"annual"},t.updateCurrency=t.updateCurrency.bind(r(t)),t.updateCycle=t.updateCycle.bind(r(t)),t}return l=p,(i=[{key:"updateCurrency",value:function(e){var t=e.target;!0===("checkbox"===t.type?t.checked:t.value)?this.setState({currencyName:"eur"}):this.setState({currencyName:"usd"})}},{key:"updateCycle",value:function(e){this.setState({cycle:e.target.value})}},{key:"render",value:function(){return React.createElement(React.Fragment,null,React.createElement("div",{id:"yasr-radio-billing-cycle"},React.createElement("input",{type:"radio",id:"yasr-billing-cycle-monthly",name:"billing-cycle",value:"monthly",onChange:this.updateCycle,checked:"monthly"===this.state.cycle}),React.createElement("label",{htmlFor:"yasr-billing-cycle-monthly"},"Monthly"),React.createElement("input",{type:"radio",id:"yasr-billing-cycle-annual",name:"billing-cycle",value:"annual",onChange:this.updateCycle,checked:"annual"===this.state.cycle}),React.createElement("label",{htmlFor:"yasr-billing-cycle-annual"},"Annual"),React.createElement("input",{type:"radio",id:"yasr-billing-cycle-lifetime",name:"billing-cycle",value:"lifetime",onChange:this.updateCycle,checked:"lifetime"===this.state.cycle}),React.createElement("label",{htmlFor:"yasr-billing-cycle-lifetime"},"Lifetime")),React.createElement("div",{id:"yasr-pricing-table"},React.createElement("div",{className:"yasr-pricing-table-item"},React.createElement("header",{className:"yasr-pricing-table-heading"},React.createElement("h2",{className:"yasr-pricing-table-title"},"Plus"),React.createElement("p",{className:"yasr-pricing-table-subtitle"},"5 websites")),React.createElement(s,{cycle:this.state.cycle,license:"plus"}),React.createElement("div",{className:"yasr-pricing-table-footer"},React.createElement(u,{cycle:this.state.cycle,currency:this.state.currencyName,license:"plus"}))),React.createElement("div",{className:"yasr-pricing-table-item is-highlighted"},React.createElement("header",{className:"yasr-pricing-table-heading"},React.createElement("h2",{className:"yasr-pricing-table-title"},"Single"),React.createElement("p",{className:"yasr-pricing-table-subtitle"}," 1 website")),React.createElement(s,{cycle:this.state.cycle,license:"single"}),React.createElement("div",{className:"yasr-pricing-table-footer"},React.createElement(u,{cycle:this.state.cycle,currency:this.state.currencyName,license:"single"}))),React.createElement("div",{className:"yasr-pricing-table-item"},React.createElement("header",{className:"yasr-pricing-table-heading"},React.createElement("h2",{className:"yasr-pricing-table-title"},"Enterprise"),React.createElement("p",{className:"yasr-pricing-table-subtitle"}," 30 websites")),React.createElement(s,{cycle:this.state.cycle,license:"enterprise"}),React.createElement("div",{className:"yasr-pricing-table-footer"},React.createElement(u,{cycle:this.state.cycle,currency:this.state.currencyName,license:"enterprise"})))),React.createElement("div",{id:"switch-container"},React.createElement("span",{className:"yasr-pricing-text-switcher"}," Display Prices In US $ "),React.createElement("label",{className:"yasr-pricing-switch"},React.createElement("input",{type:"checkbox",onChange:this.updateCurrency}),React.createElement("span",{className:"yasr-pricing-slider"})),React.createElement("span",{className:"yasr-pricing-text-switcher"}," €")))}}])&&t(l.prototype,i),Object.defineProperty(l,"prototype",{writable:!1}),p}();ReactDOM.render(React.createElement(y,null),document.getElementById("yasr-table-container"));var m=document.getElementById("yasr-link-policy"),p=document.getElementById("yasr-link-policy-faq"),f=document.getElementById("yasr-refund-policy"),d=document.getElementById("yasr-close-modal-policy");m.addEventListener("click",(function(){f.style.display="block",document.body.style.backgroundColor="rgba(0,0,0,0.7)"})),p.addEventListener("click",(function(){f.style.display="block",document.body.style.backgroundColor="rgba(0,0,0,0.7)"})),d.onclick=function(){f.style.display="none",document.body.style.backgroundColor="#f1f1f1"}})();