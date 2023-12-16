const spacemacs = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Spacemacs
  Author: Nasser Alshammari (https://github.com/nashamri/spacemacs-theme)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme spacemacs
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #1f2022  Default Background
base01  #282828  Lighter Background (Used for status bars, line number and folding marks)
base02  #444155  Selection Background
base03  #585858  Comments, Invisibles, Line Highlighting
base04  #b8b8b8  Dark Foreground (Used for status bars)
base05  #a3a3a3  Default Foreground, Caret, Delimiters, Operators
base06  #e8e8e8  Light Foreground (Not often used)
base07  #f8f8f8  Light Background (Not often used)
base08  #f2241f  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #ffa500  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #b1951d  Classes, Markup Bold, Search Text Background
base0B  #67b11d  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #2d9574  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #4f97d7  Functions, Methods, Attribute IDs, Headings
base0E  #a31db1  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #b03060  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
*/
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
.hljs {
  color: #a3a3a3;
  background: #1f2022
}
.hljs::selection,
.hljs ::selection {
  background-color: #444155;
  color: #a3a3a3
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #585858 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #585858
}
/* base04 - #b8b8b8 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #b8b8b8
}
/* base05 - #a3a3a3 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #a3a3a3
}
.hljs-operator {
  opacity: 0.7
}
/* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-selector-tag,
.hljs-name,
.hljs-deletion {
  color: #f2241f
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #ffa500
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #b1951d
}
.hljs-strong {
  font-weight: bold;
  color: #b1951d
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #67b11d
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #2d9574
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #4f97d7
}
/* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
/* .hljs-selector-id, */
/* .hljs-selector-class, */
/* .hljs-selector-attr, */
/* .hljs-selector-pseudo, */
.hljs-type,
.hljs-template-tag,
.diff .hljs-meta,
.hljs-keyword {
  color: #a31db1
}
.hljs-emphasis {
  color: #a31db1;
  font-style: italic
}
/* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */
/*
  prevent top level .keyword and .string scopes
  from leaking into meta by accident
*/
.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-meta .hljs-string {
  color: #b03060
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default spacemacs;
