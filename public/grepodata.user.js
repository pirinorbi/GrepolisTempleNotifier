// ==UserScript==
// @name         GrepoData City Indexer (Edit by Jos)
// @namespace    grepodata
// @version      jos.2.0.0.2
// @author       grepodata.com
// @homepage     https://grepodata.com/indexer
// @updateURL    https://grepolis-temple-notifier.vercel.app/grepodata.user.js
// @downloadURL	 https://grepolis-temple-notifier.vercel.app/grepodata.user.js
// @description  This script allows you to collect and share enemy city intelligence
// @include      https://*.grepolis.com/game/*
// @include      https://grepodata.com*
// @exclude      view-source://*
// @icon         https://grepodata.com/assets/images/grepodata_icon.ico
// @copyright	 2016+, grepodata.com
// @grant        none
// ==/UserScript==

(function () {
    var rand = Math.floor((Date.now() / 1000) / (60 * 60)) + "";
    var CustomStyleJS = document.createElement('script');
    CustomStyleJS.type = 'text/javascript';
    CustomStyleJS.src = 'https://grepolis-temple-notifier.vercel.app/grepodata.js?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleJS);
    var CustomStyleCSS = document.createElement('link');
    CustomStyleCSS.rel = 'stylesheet';
    CustomStyleCSS.type = 'text/css';
    CustomStyleCSS.href = 'https://api.grepodata.com/script/indexer.css?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleCSS);
    console.log("Added GrepoData City Indexer by Tamper/GreaseMonkey");
})();
