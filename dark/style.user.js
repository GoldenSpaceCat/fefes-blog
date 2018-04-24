// ==UserScript==
// @name         fefes-blog dark style injector
// @namespace    https://gottz.de
// @version      0.1.1
// @description  applies my own css to fefe's blog
// @author       GottZ
// @include      /^https?://blog.fefe.de\//
// @updateURL    https://github.com/GoldenSpaceCat/fefes-blog/raw/master/dark/style.user.js
// @downloadURL  https://github.com/GoldenSpaceCat/fefes-blog/raw/master/dark/style.user.js
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    const url = 'https://cdn.rawgit.com/GoldenSpaceCat/fefes-blog/b52a76ac/dark/style.css';

    const links = [...document.querySelectorAll('link[rel="stylesheet"][type="text/css"]')];

    if (links.some(link => link.href == url)) {
        return;
    }

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;

    document.head.appendChild(style);

    document.cookie='css=' + url + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
})();
