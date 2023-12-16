const tender = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: tender
  Author: Jacobo Tabernero (https://github/com/jacoborus/tender.vim)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme tender
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #282828  Default Background
base01  #383838  Lighter Background (Used for status bars, line number and folding marks)
base02  #484848  Selection Background
base03  #4c4c4c  Comments, Invisibles, Line Highlighting
base04  #b8b8b8  Dark Foreground (Used for status bars)
base05  #eeeeee  Default Foreground, Caret, Delimiters, Operators
base06  #e8e8e8  Light Foreground (Not often used)
base07  #feffff  Light Background (Not often used)
base08  #f43753  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #dc9656  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ffc24b  Classes, Markup Bold, Search Text Background
base0B  #c9d05c  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #73cef4  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #b3deef  Functions, Methods, Attribute IDs, Headings
base0E  #d3b987  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #a16946  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #eeeeee;
  background: #282828
}
.hljs::selection,
.hljs ::selection {
  background-color: #484848;
  color: #eeeeee
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #4c4c4c -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #4c4c4c
}
/* base04 - #b8b8b8 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #b8b8b8
}
/* base05 - #eeeeee -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #eeeeee
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
  color: #f43753
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #dc9656
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ffc24b
}
.hljs-strong {
  font-weight: bold;
  color: #ffc24b
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #c9d05c
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #73cef4
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #b3deef
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
  color: #d3b987
}
.hljs-emphasis {
  color: #d3b987;
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
  color: #a16946
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default tender;
