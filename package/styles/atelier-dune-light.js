const atelierDuneLight = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Atelier Dune Light
  Author: Bram de Haan (http://atelierbramdehaan.nl)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme atelier-dune-light
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #fefbec  Default Background
base01  #e8e4cf  Lighter Background (Used for status bars, line number and folding marks)
base02  #a6a28c  Selection Background
base03  #999580  Comments, Invisibles, Line Highlighting
base04  #7d7a68  Dark Foreground (Used for status bars)
base05  #6e6b5e  Default Foreground, Caret, Delimiters, Operators
base06  #292824  Light Foreground (Not often used)
base07  #20201d  Light Background (Not often used)
base08  #d73737  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #b65611  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ae9513  Classes, Markup Bold, Search Text Background
base0B  #60ac39  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #1fad83  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #6684e1  Functions, Methods, Attribute IDs, Headings
base0E  #b854d4  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #d43552  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #6e6b5e;
  background: #fefbec
}
.hljs::selection,
.hljs ::selection {
  background-color: #a6a28c;
  color: #6e6b5e
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #999580 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #999580
}
/* base04 - #7d7a68 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #7d7a68
}
/* base05 - #6e6b5e -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #6e6b5e
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
  color: #d73737
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #b65611
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ae9513
}
.hljs-strong {
  font-weight: bold;
  color: #ae9513
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #60ac39
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #1fad83
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #6684e1
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
  color: #b854d4
}
.hljs-emphasis {
  color: #b854d4;
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
  color: #d43552
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default atelierDuneLight;
