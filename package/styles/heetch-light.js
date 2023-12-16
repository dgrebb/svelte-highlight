const heetchLight = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Heetch Light
  Author: Geoffrey Teale (tealeg@gmail.com)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme heetch-light
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #feffff  Default Background
base01  #392551  Lighter Background (Used for status bars, line number and folding marks)
base02  #7b6d8b  Selection Background
base03  #9c92a8  Comments, Invisibles, Line Highlighting
base04  #ddd6e5  Dark Foreground (Used for status bars)
base05  #5a496e  Default Foreground, Caret, Delimiters, Operators
base06  #470546  Light Foreground (Not often used)
base07  #190134  Light Background (Not often used)
base08  #27d9d5  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #bdb6c5  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #5ba2b6  Classes, Markup Bold, Search Text Background
base0B  #f80059  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #c33678  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #47f9f5  Functions, Methods, Attribute IDs, Headings
base0E  #bd0152  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #dedae2  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #5a496e;
  background: #feffff
}
.hljs::selection,
.hljs ::selection {
  background-color: #7b6d8b;
  color: #5a496e
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #9c92a8 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #9c92a8
}
/* base04 - #ddd6e5 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #ddd6e5
}
/* base05 - #5a496e -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #5a496e
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
  color: #27d9d5
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #bdb6c5
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #5ba2b6
}
.hljs-strong {
  font-weight: bold;
  color: #5ba2b6
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #f80059
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #c33678
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #47f9f5
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
  color: #bd0152
}
.hljs-emphasis {
  color: #bd0152;
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
  color: #dedae2
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default heetchLight;