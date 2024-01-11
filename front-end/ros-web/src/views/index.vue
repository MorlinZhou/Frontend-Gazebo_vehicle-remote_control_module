<template>
       <!-- <router-view></router-view> -->
    <body class="is-boxed has-animations">
        <div class="body-wrap boxed-container">
            <header class="site-header">
                <div class="container">
                    <div class="site-header-inner">
                        <div class="brand header-brand">
                            <h1 class="m-0">
                                <a href="#">
                                    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <title>Ava</title>
                                        <defs>
                                            <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="logo-gradient-b">
                                                <stop stop-color="#39D8C8" offset="0%" />
                                                <stop stop-color="#BCE4F4" offset="47.211%" />
                                                <stop stop-color="#838DEA" offset="100%" />
                                            </linearGradient>
                                            <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                                                id="logo-gradient-a" />
                                            <linearGradient x1="23.065%" y1="25.446%" y2="100%" id="logo-gradient-c">
                                                <stop stop-color="#1274ED" stop-opacity="0" offset="0%" />
                                                <stop stop-color="#1274ED" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="logo-gradient-d" fill="#fff">
                                                <use xlink:href="#logo-gradient-a" />
                                            </mask>
                                            <use fill="url(#logo-gradient-b)" xlink:href="#logo-gradient-a" />
                                            <path fill="url(#logo-gradient-c)" mask="url(#logo-gradient-d)"
                                                d="M-16-16h32v32h-32z" />
                                        </g>
                                    </svg>
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section class="hero text-center">
                    <div class="container-sm">
                        <div class="hero-inner">
                            <h1 class="hero-title h2-mobile mt-0 is-revealing">
                                智能网联车远程操控系统
                            </h1>
                            <p class="hero-paragraph is-revealing">
                                Intelligent network remote control system front-end display module
                            </p>
                            <div class="hero-form newsletter-form field field-grouped is-revealing">
                                <div class="control">
                                    <router-link to="/Panel">
                                        <a class="button button-primary button-block button-shadow">进入控制面板</a>
                                    </router-link>
                                    
                                </div>
                            </div>
                            <div class="hero-browser">
                                <div class="bubble-3 is-revealing">
                                    <svg width="427" height="286" viewBox="0 0 427 286" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path
                                                d="M213.5 286C331.413 286 427 190.413 427 72.5S304.221 16.45 186.309 16.45C68.396 16.45 0-45.414 0 72.5S95.587 286 213.5 286z"
                                                id="bubble-3-a" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="bubble-3-b" fill="#fff">
                                                <use xlink:href="#bubble-3-a" />
                                            </mask>
                                            <use fill="#4E8FF8" xlink:href="#bubble-3-a" />
                                            <path
                                                d="M64.5 129.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C-80.604-139.782-149-201.644-149-83.73c0 117.913 95.587 213.5 213.5 213.5z"
                                                fill="#1274ED" mask="url(#bubble-3-b)" />
                                            <path
                                                d="M381.5 501.77c117.913 0 213.5-95.588 213.5-213.5 0-117.914-122.779-56.052-240.691-56.052C236.396 232.218 168 170.356 168 288.27c0 117.913 95.587 213.5 213.5 213.5z"
                                                fill="#75ABF3" mask="url(#bubble-3-b)" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="bubble-4 is-revealing">
                                    <svg width="230" height="235" viewBox="0 0 230 235" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path
                                                d="M196.605 234.11C256.252 234.11 216 167.646 216 108 216 48.353 167.647 0 108 0S0 48.353 0 108s136.959 126.11 196.605 126.11z"
                                                id="bubble-4-a" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="bubble-4-b" fill="#fff">
                                                <use xlink:href="#bubble-4-a" />
                                            </mask>
                                            <use fill="#7CE8DD" xlink:href="#bubble-4-a" />
                                            <circle fill="#3BDDCC" mask="url(#bubble-4-b)" cx="30" cy="108" r="108" />
                                            <circle fill="#B1F1EA" opacity=".7" mask="url(#bubble-4-b)" cx="265" cy="88"
                                                r="108" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="hero-browser-inner is-revealing">
                                    <img src="https://se2021.oss-cn-shanghai.aliyuncs.com/adcc3f88349b8007de2d58d121eec5ad.jpg">
                                
                                </div>
                                <div class="bubble-1 is-revealing">
                                    <svg width="61" height="52" viewBox="0 0 61 52" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path
                                                d="M32 43.992c17.673 0 28.05 17.673 28.05 0S49.674 0 32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 11.992 32 11.992z"
                                                id="bubble-1-a" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="bubble-1-b" fill="#fff">
                                                <use xlink:href="#bubble-1-a" />
                                            </mask>
                                            <use fill="#FF6D8B" xlink:href="#bubble-1-a" />
                                            <path
                                                d="M2 43.992c17.673 0 28.05 17.673 28.05 0S19.674 0 2 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 11.992 32 11.992z"
                                                fill="#FF4F73" mask="url(#bubble-1-b)" />
                                            <path
                                                d="M74 30.992c17.673 0 28.05 17.673 28.05 0S91.674-13 74-13C56.327-13 42 1.327 42 19c0 17.673 14.327 11.992 32 11.992z"
                                                fill-opacity=".8" fill="#FFA3B5" mask="url(#bubble-1-b)" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="bubble-2 is-revealing">
                                    <svg width="179" height="126" viewBox="0 0 179 126" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <path
                                                d="M104.697 125.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S0-28.44 0 12.593c0 41.034 63.663 113.068 104.697 113.068z"
                                                id="bubble-2-a" />
                                        </defs>
                                        <g fill="none" fill-rule="evenodd">
                                            <mask id="bubble-2-b" fill="#fff">
                                                <use xlink:href="#bubble-2-a" />
                                            </mask>
                                            <use fill="#838DEA" xlink:href="#bubble-2-a" />
                                            <path
                                                d="M202.697 211.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S98 57.56 98 98.593c0 41.034 63.663 113.068 104.697 113.068z"
                                                fill="#626CD5" mask="url(#bubble-2-b)" />
                                            <path
                                                d="M43.697 56.661c41.034 0 74.298-33.264 74.298-74.298s-43.231-7.425-84.265-7.425S-61-97.44-61-56.407C-61-15.373 2.663 56.661 43.697 56.661z"
                                                fill="#B1B6F1" opacity=".64" mask="url(#bubble-2-b)" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="site-footer text-light">
                <div class="container">
                    <div class="site-footer-inner">
                        <div class="brand footer-brand">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <title>Ava</title>
                                    <defs>
                                        <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z"
                                            id="logo-gradient-footer-a" />
                                        <linearGradient x1="50%" y1="50%" y2="100%" id="logo-gradient-footer-b">
                                            <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
                                            <stop stop-color="#FFF" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd">
                                        <mask id="logo-gradient-footer-c" fill="#fff">
                                            <use xlink:href="#logo-gradient-footer-a" />
                                        </mask>
                                        <use fill-opacity=".32" fill="#FFF" xlink:href="#logo-gradient-footer-a" />
                                        <path fill="url(#logo-gradient-footer-b)" mask="url(#logo-gradient-footer-c)"
                                            d="M-16-16h32v32h-32z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </body>

</template>
<script src="@/dist/js/main.min.js"></script>
<style scoped>
html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

figcaption,
figure,
main {
    display: block;
}

figure {
    margin: 1em 40px;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

b,
strong {
    font-weight: inherit;
}

b,
strong {
    font-weight: bolder;
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}

dfn {
    font-style: italic;
}

mark {
    background-color: #ff0;
    color: #000;
}

small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

audio,
video {
    display: inline-block;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

img {
    border-style: none;
}

svg:not(:root) {
    overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
}

progress {
    display: inline-block;
    vertical-align: baseline;
}

textarea {
    overflow: auto;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

details,
menu {
    display: block;
}

summary {
    display: list-item;
}

canvas {
    display: inline-block;
}

template {
    display: none;
}

[hidden] {
    display: none;
}

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    background: #fff;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

hr {
    border: 0;
    display: block;
    height: 1px;
    background: #e3e7eb;
    background: linear-gradient(to right,
            rgba(227, 231, 235, 0.1) 0,
            rgba(227, 231, 235, 0.6) 50%,
            rgba(227, 231, 235, 0.1) 100%);
    margin-top: 24px;
    margin-bottom: 24px;
}

ul,
ol {
    margin-top: 0;
    margin-bottom: 24px;
    padding-left: 24px;
}

ul {
    list-style: disc;
}

ol {
    list-style: decimal;
}

li>ul,
li>ol {
    margin-bottom: 0;
}

dl {
    margin-top: 0;
    margin-bottom: 24px;
}

dt {
    font-weight: 700;
}

dd {
    margin-left: 24px;
    margin-bottom: 24px;
}

img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
}

figure {
    margin: 24px 0;
}

figcaption {
    font-size: 16px;
    line-height: 24px;
    padding: 8px 0;
}

img,
svg {
    display: block;
}

table {
    border-collapse: collapse;
    margin-bottom: 24px;
    width: 100%;
}

tr {
    border-bottom: 1px solid #e3e7eb;
}

th {
    text-align: left;
}

th,
td {
    padding: 10px 16px;
}

th:first-child,
td:first-child {
    padding-left: 0;
}

th:last-child,
td:last-child {
    padding-right: 0;
}

html {
    font-size: 18px;
    line-height: 27px;
}

@media (min-width: 641px) {
    html {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.1px;
    }
}

body {
    color: #5b6f82;
    font-size: 1rem;
}

body,
button,
input,
select,
textarea {
    font-family: "Lato", sans-serif;
}

a {
    color: inherit;
    text-decoration: underline;
}

a:hover,
a:active {
    outline: 0;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
    clear: both;
    color: #202b36;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
}

h1,
.h1 {
    font-size: 36px;
    line-height: 46px;
    letter-spacing: -0.2px;
}

@media (min-width: 641px) {

    h1,
    .h1 {
        font-size: 42px;
        line-height: 52px;
        letter-spacing: -0.1px;
    }
}

h2,
.h2 {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -0.1px;
}

@media (min-width: 641px) {

    h2,
    .h2 {
        font-size: 36px;
        line-height: 46px;
        letter-spacing: -0.2px;
    }
}

h3,
.h3,
blockquote {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.1px;
}

@media (min-width: 641px) {

    h3,
    .h3,
    blockquote {
        font-size: 30px;
        line-height: 40px;
        letter-spacing: -0.1px;
    }
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.1px;
}

@media (min-width: 641px) {

    h4,
    h5,
    h6,
    .h4,
    .h5,
    .h6 {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.1px;
    }
}

@media (max-width: 640px) {
    .h1-mobile {
        font-size: 36px;
        line-height: 46px;
        letter-spacing: -0.2px;
    }

    .h2-mobile {
        font-size: 30px;
        line-height: 40px;
        letter-spacing: -0.1px;
    }

    .h3-mobile {
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.1px;
    }

    .h4-mobile,
    .h5-mobile,
    .h6-mobile {
        font-size: 18px;
        line-height: 27px;
        letter-spacing: -0.1px;
    }
}

.text-light {
    color: rgba(255, 255, 255, 0.8);
}

.text-light a {
    color: rgba(255, 255, 255, 0.8);
}

.text-light h1,
.text-light h2,
.text-light h3,
.text-light h4,
.text-light h5,
.text-light h6,
.text-light .h1,
.text-light .h2,
.text-light .h3,
.text-light .h4,
.text-light .h5,
.text-light .h6 {
    color: #fff !important;
}

.text-sm {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.1px;
}

.text-xs {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.1px;
}

h1,
h2,
.h1,
.h2 {
    margin-top: 48px;
    margin-bottom: 16px;
}

h3,
.h3 {
    margin-top: 36px;
    margin-bottom: 12px;
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
    margin-top: 24px;
    margin-bottom: 4px;
}

p {
    margin-top: 0;
    margin-bottom: 24px;
}

dfn,
cite,
em,
i {
    font-style: italic;
}

blockquote {
    color: #92a2b1;
    font-style: italic;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 24px;
}

blockquote::before {
    content: "\201C";
}

blockquote::after {
    content: "\201D";
}

blockquote p {
    display: inline;
}

address {
    color: #5b6f82;
    border-width: 1px 0;
    border-style: solid;
    border-color: #e3e7eb;
    padding: 24px 0;
    margin: 0 0 24px;
}

pre,
pre h1,
pre h2,
pre h3,
pre h4,
pre h5,
pre h6,
pre .h1,
pre .h2,
pre .h3,
pre .h4,
pre .h5,
pre .h6 {
    font-family: "Courier 10 Pitch", Courier, monospace;
}

pre,
code,
kbd,
tt,
var {
    background: #f6f8fa;
}

pre {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
}

code,
kbd,
tt,
var {
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
    font-size: 16px;
    padding: 2px 4px;
}

abbr,
acronym {
    cursor: help;
}

mark,
ins {
    text-decoration: none;
}

small {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.1px;
}

b,
strong {
    font-weight: 700;
}

button,
input,
select,
textarea,
label {
    font-size: 18px;
    line-height: 27px;
}

.container,
.container-sm {
    width: 100%;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
}

@media (min-width: 481px) {

    .container,
    .container-sm {
        padding-left: 24px;
        padding-right: 24px;
    }
}

.container {
    max-width: 1128px;
}

.container-sm {
    max-width: 848px;
}

.container .container-sm {
    max-width: 800px;
    padding-left: 0;
    padding-right: 0;
}

.list-reset {
    list-style: none;
    padding: 0;
}

.text-center {
    text-align: center;
}

.m-0 {
    margin: 0;
}

.mt-0 {
    margin-top: 0;
}

@media (min-width: 641px) {
    .field-grouped {
        
    }

    .field-grouped>.control {
        flex-shrink: 0;
    }

    .field-grouped>.control.control-expanded {
        flex-grow: 1;
        flex-shrink: 1;
    }

    .field-grouped>.control:not(:last-child) {
        margin-bottom: 0;
        margin-right: 8px;
    }
}

.button {
    display: flex;
    align-items: center;
    font-size: 18px;
    letter-spacing: 0px;
    font-weight: 700;
    line-height: 16px;
    text-decoration: none !important;
    background-color: #ffffff8f;
    color: #4992f0 !important;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    justify-content: center;
    padding: 16px 32px;
    height: 48px;
    text-align: center;
    opacity: 0.95;
    border-radius: 10px;
}

.button:active {
    outline: 0;
}

.button::before {
    border-radius: 2px;
}

.button-shadow {
    position: relative;
}

.button-shadow::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 8px 24px rgba(32, 43, 54, 0.12);
    mix-blend-mode: multiply;
    transition: box-shadow 0.15s ease;
}

.button-shadow:hover::before {
    box-shadow: 0 8px 24px rgba(32, 43, 54, 0.25);
}

.button-sm.button-shadow:hover::before {
    box-shadow: 0 4px 16px rgba(32, 43, 54, 0.25);
}

.button-primary {
    color: #fff !important;
    transition: background 0.15s ease;
}

.button-primary {
    background: #2e83ef;
    background: linear-gradient(65deg, #1274ed 0, #4992f0 100%);
}

.button-primary:hover {
    background: #3386ef;
    background: linear-gradient(65deg, #1777ed 0, #4e95f0 100%);
}

.button-block {
    display: flex;
}

.site-header {
    position: relative;
    padding: 24px 0;
}

.site-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 16%;
    width: 84%;
    height: 500px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzEuMjA3IDY0OS44MDJDOTM1LjQ4NCA2NDIuMTQgMTQ4MCAzMzcuMzI1IDE0ODAgMTgwLjg4OGMwLTE1Ni40MzgtMzA5Ljc0NC0zNi4wNTUtNzIwLTM2LjA1NVMwLTE3NC40ODMgMCAxMzUuMTQ0YzAgMzA5LjYyNyA1MjYuOTMgNTIyLjMyIDczMS4yMDcgNTE0LjY1OHoiIGZpbGw9IiNGNkY4RkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==);
    background-size: 1140px 500px;
    background-repeat: no-repeat;
}

.site-header-inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (min-width: 641px) {
    .site-header {
        position: relative;
        padding: 24px 0;
    }

    .site-header::before {
        top: -50%;
        left: 20%;
        width: 80%;
        height: 651px;
        background-size: 1480px 651px;
    }
}

.hero {
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
}

.hero-paragraph {
    margin-bottom: 32px;
}

.hero-browser {
    position: relative;
    margin-top: 80px;
}

.hero-browser-inner {
    position: relative;
}

.hero-browser-inner svg {
    width: 100%;
    height: auto;
    overflow: visible;
}

.bubble-1,
.bubble-2,
.bubble-3,
.bubble-4 {
    position: absolute;
}

.bubble-1 svg,
.bubble-2 svg,
.bubble-3 svg,
.bubble-4 svg {
    height: auto;
}

.bubble-1 {
    top: -15px;
    left: 70px;
}

.bubble-1 svg {
    width: 34px;
}

.bubble-2 {
    bottom: 0;
    right: -30px;
}

.bubble-2 svg {
    width: 78px;
}

.bubble-3 {
    left: -40px;
    bottom: -40px;
}

.bubble-3 svg {
    width: 143px;
}

.bubble-4 {
    top: -25px;
    right: -54px;
}

.bubble-4 svg {
    width: 104px;
}

@media (min-width: 641px) {
    .hero {
        padding-top: 80px;
        padding-bottom: 120px;
    }

    .hero-paragraph {
        margin-bottom: 40px;
        padding-left: 72px;
        padding-right: 72px;
    }

    .bubble-1 svg,
    .bubble-2 svg,
    .bubble-3 svg,
    .bubble-4 svg {
        width: auto;
    }

    .bubble-1 {
        top: 85px;
        left: -30px;
    }

    .bubble-2 {
        bottom: -8px;
        right: -75px;
    }

    .bubble-3 {
        left: -140px;
        bottom: -120px;
    }

    .bubble-4 {
        top: -35px;
        right: -110px;
    }
}

@supports (-ms-ime-align: auto) {
    .feature-icon::before {
        box-shadow: 0 16px 48px rgba(32, 43, 54, 0.12);
    }
}

@media (min-width: 641px) {
    .newsletter .section-inner {
        padding-bottom: 120px;
    }

    .newsletter .section-paragraph {
        margin-bottom: 40px;
        padding-left: 72px;
        padding-right: 72px;
    }
}

.is-boxed {
    background: #f6f8fa;
}

.body-wrap {
    background: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.boxed-container {
    max-width: 2560px;
    margin: 0 auto;
    box-shadow: 0 16px 48px #e3e7eb;
}

@supports (-ms-ime-align: auto) {
    .boxed-container {
        box-shadow: 0 16px 48px rgba(32, 43, 54, 0.12);
    }
}

main {
    flex: 1 0 auto;
}

@media (min-width: 641px) {
    .section-inner {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}

.site-footer {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
}

.site-footer::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 220px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIyMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgPGRlZnM+ICAgIDxwYXRoIGQ9Ik0yNjEuNyAyODYuNjgyYzQyMS40NzcgMCAxNDg4Ljk3NyAxNzYuMDc4IDE0ODguOTc3IDM5LjIzNHM0NzguNzU0LTI0OC4wNDMgNTcuMjc4LTI0OC4wNDNjLTE5OC43NDYgMC00NjguNTY2IDMuNTU1LTcxOS45NTctMTEuMjNDODA2LjI3MSA1MC4wNzYgNTQxLjkgMjcuMjI3IDM0NC45NzcgNTIuNDM4LTI3LjY2NSAxMDAuMTQ1LTE1OS43NzYgMjg2LjY4MyAyNjEuNyAyODYuNjgzeiIgaWQ9ImEiLz4gIDwvZGVmcz4gIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODUgLTQxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4gICAgPC9tYXNrPiAgICA8dXNlIGZpbGw9IiM4MzhERUEiIHhsaW5rOmhyZWY9IiNhIi8+ICAgIDxwYXRoIGQ9Ik0yNDAuNzI3IDMyNi4zOTVjNDIxLjQ3NiAwIDk3Mi43NDQgMTc5Ljc4NyA5NzIuNzQ0IDQyLjk0M3MxMjkuMjg2LTE3NS43NDgtMjkyLjE5LTE3NS43NDgtMjU2LjMxNC0yMjYuNDk0LTI1Ni4zMTQtODkuNjVjMCAxMzYuODQzLTg0NS43MTcgMjIyLjQ1NS00MjQuMjQgMjIyLjQ1NXoiIGZpbGw9IiNBMEE2RUUiIG1hc2s9InVybCgjYikiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDEzNTUuMTYyIDApIi8+ICAgIDxwYXRoIGQ9Ik00NDUuNyAzODcuNjgyYzQyMS40NzcgMCA5NzIuNzQ1IDE3OS43ODcgOTcyLjc0NSA0Mi45NDNzNTc5Ljk0MS0yNTUuMjQ2IDE1OC40NjUtMjU1LjI0Ni03MDYuOTY5LTE0Ni45OTYtNzA2Ljk2OS0xMC4xNTJjMCAxMzYuODQzLTg0NS43MTcgMjIyLjQ1NS00MjQuMjQgMjIyLjQ1NXoiIGZpbGw9IiM2MjZDRDUiIG1hc2s9InVybCgjYikiLz4gIDwvZz48L3N2Zz4=);
    background-size: 2560px 220px;
    background-repeat: no-repeat;
}

.site-footer a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
}

.site-footer a:hover,
.site-footer a:active {
    color: #fff;
    text-decoration: underline;
}

.site-footer-inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    padding-bottom: 40px;
}
</style>