const londonTube = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: London Tube
  Author: Jan T. Sott
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme london-tube
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #231f20  Default Background
base01  #1c3f95  Lighter Background (Used for status bars, line number and folding marks)
base02  #5a5758  Selection Background
base03  #737171  Comments, Invisibles, Line Highlighting
base04  #959ca1  Dark Foreground (Used for status bars)
base05  #d9d8d8  Default Foreground, Caret, Delimiters, Operators
base06  #e7e7e8  Light Foreground (Not often used)
base07  #ffffff  Light Background (Not often used)
base08  #ee2e24  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #f386a1  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ffd204  Classes, Markup Bold, Search Text Background
base0B  #00853e  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #85cebc  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #009ddc  Functions, Methods, Attribute IDs, Headings
base0E  #98005d  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #b06110  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #d9d8d8;
  background: #231f20
}
.hljs::selection,
.hljs ::selection {
  background-color: #5a5758;
  color: #d9d8d8
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #737171 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #737171
}
/* base04 - #959ca1 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #959ca1
}
/* base05 - #d9d8d8 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #d9d8d8
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
  color: #ee2e24
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #f386a1
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ffd204
}
.hljs-strong {
  font-weight: bold;
  color: #ffd204
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #00853e
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #85cebc
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #009ddc
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
  color: #98005d
}
.hljs-emphasis {
  color: #98005d;
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
  color: #b06110
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default londonTube;