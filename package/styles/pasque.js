const pasque = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Pasque
  Author: Gabriel Fontes (https://github.com/Misterio77)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme pasque
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #271C3A  Default Background
base01  #100323  Lighter Background (Used for status bars, line number and folding marks)
base02  #3E2D5C  Selection Background
base03  #5D5766  Comments, Invisibles, Line Highlighting
base04  #BEBCBF  Dark Foreground (Used for status bars)
base05  #DEDCDF  Default Foreground, Caret, Delimiters, Operators
base06  #EDEAEF  Light Foreground (Not often used)
base07  #BBAADD  Light Background (Not often used)
base08  #A92258  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #918889  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #804ead  Classes, Markup Bold, Search Text Background
base0B  #C6914B  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #7263AA  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #8E7DC6  Functions, Methods, Attribute IDs, Headings
base0E  #953B9D  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #59325C  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #DEDCDF;
  background: #271C3A
}
.hljs::selection,
.hljs ::selection {
  background-color: #3E2D5C;
  color: #DEDCDF
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #5D5766 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #5D5766
}
/* base04 - #BEBCBF -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #BEBCBF
}
/* base05 - #DEDCDF -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #DEDCDF
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
  color: #A92258
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #918889
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #804ead
}
.hljs-strong {
  font-weight: bold;
  color: #804ead
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #C6914B
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #7263AA
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #8E7DC6
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
  color: #953B9D
}
.hljs-emphasis {
  color: #953B9D;
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
  color: #59325C
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default pasque;
