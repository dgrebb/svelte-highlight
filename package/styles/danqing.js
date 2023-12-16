const danqing = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: DanQing
  Author: Wenhan Zhu (Cosmos) (zhuwenhan950913@gmail.com)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme danqing
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #2d302f  Default Background
base01  #434846  Lighter Background (Used for status bars, line number and folding marks)
base02  #5a605d  Selection Background
base03  #9da8a3  Comments, Invisibles, Line Highlighting
base04  #cad8d2  Dark Foreground (Used for status bars)
base05  #e0f0eF  Default Foreground, Caret, Delimiters, Operators
base06  #ecf6f2  Light Foreground (Not often used)
base07  #fcfefd  Light Background (Not often used)
base08  #F9906F  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #B38A61  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #F0C239  Classes, Markup Bold, Search Text Background
base0B  #8AB361  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #30DFF3  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #B0A4E3  Functions, Methods, Attribute IDs, Headings
base0E  #CCA4E3  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #CA6924  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #e0f0eF;
  background: #2d302f
}
.hljs::selection,
.hljs ::selection {
  background-color: #5a605d;
  color: #e0f0eF
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #9da8a3 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #9da8a3
}
/* base04 - #cad8d2 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #cad8d2
}
/* base05 - #e0f0eF -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #e0f0eF
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
  color: #F9906F
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #B38A61
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #F0C239
}
.hljs-strong {
  font-weight: bold;
  color: #F0C239
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #8AB361
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #30DFF3
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #B0A4E3
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
  color: #CCA4E3
}
.hljs-emphasis {
  color: #CCA4E3;
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
  color: #CA6924
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default danqing;
