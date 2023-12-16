const atelierLakeside = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Atelier Lakeside
  Author: Bram de Haan (http://atelierbramdehaan.nl)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme atelier-lakeside
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #161b1d  Default Background
base01  #1f292e  Lighter Background (Used for status bars, line number and folding marks)
base02  #516d7b  Selection Background
base03  #5a7b8c  Comments, Invisibles, Line Highlighting
base04  #7195a8  Dark Foreground (Used for status bars)
base05  #7ea2b4  Default Foreground, Caret, Delimiters, Operators
base06  #c1e4f6  Light Foreground (Not often used)
base07  #ebf8ff  Light Background (Not often used)
base08  #d22d72  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #935c25  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #8a8a0f  Classes, Markup Bold, Search Text Background
base0B  #568c3b  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #2d8f6f  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #257fad  Functions, Methods, Attribute IDs, Headings
base0E  #6b6bb8  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #b72dd2  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #7ea2b4;
  background: #161b1d
}
.hljs::selection,
.hljs ::selection {
  background-color: #516d7b;
  color: #7ea2b4
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #5a7b8c -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #5a7b8c
}
/* base04 - #7195a8 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #7195a8
}
/* base05 - #7ea2b4 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #7ea2b4
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
  color: #d22d72
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #935c25
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #8a8a0f
}
.hljs-strong {
  font-weight: bold;
  color: #8a8a0f
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #568c3b
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #2d8f6f
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #257fad
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
  color: #6b6bb8
}
.hljs-emphasis {
  color: #6b6bb8;
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
  color: #b72dd2
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default atelierLakeside;
