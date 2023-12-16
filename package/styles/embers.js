const embers = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Embers
  Author: Jannik Siebert (https://github.com/janniks)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme embers
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #16130F  Default Background
base01  #2C2620  Lighter Background (Used for status bars, line number and folding marks)
base02  #433B32  Selection Background
base03  #5A5047  Comments, Invisibles, Line Highlighting
base04  #8A8075  Dark Foreground (Used for status bars)
base05  #A39A90  Default Foreground, Caret, Delimiters, Operators
base06  #BEB6AE  Light Foreground (Not often used)
base07  #DBD6D1  Light Background (Not often used)
base08  #826D57  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #828257  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #6D8257  Classes, Markup Bold, Search Text Background
base0B  #57826D  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #576D82  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #6D5782  Functions, Methods, Attribute IDs, Headings
base0E  #82576D  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #825757  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #A39A90;
  background: #16130F
}
.hljs::selection,
.hljs ::selection {
  background-color: #433B32;
  color: #A39A90
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #5A5047 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #5A5047
}
/* base04 - #8A8075 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #8A8075
}
/* base05 - #A39A90 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #A39A90
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
  color: #826D57
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #828257
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #6D8257
}
.hljs-strong {
  font-weight: bold;
  color: #6D8257
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #57826D
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #576D82
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #6D5782
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
  color: #82576D
}
.hljs-emphasis {
  color: #82576D;
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
  color: #825757
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default embers;
