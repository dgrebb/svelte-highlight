const a11yDark = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: a11y-dark
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/
.hljs {
  background: #2b2b2b;
  color: #f8f8f2
}
/* Comment */
.hljs-comment,
.hljs-quote {
  color: #d4d0ab
}
/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ffa07a
}
/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5ab35
}
/* Yellow */
.hljs-attribute {
  color: #ffd700
}
/* Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #abe338
}
/* Blue */
.hljs-title,
.hljs-section {
  color: #00e0e0
}
/* Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #dcc6e0
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
    color: highlight
  }
  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold
  }
}</style>`;

export default a11yDark;
