const colors = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Colors
  Author: mrmrs (http://clrs.cc)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme colors
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #111111  Default Background
base01  #333333  Lighter Background (Used for status bars, line number and folding marks)
base02  #555555  Selection Background
base03  #777777  Comments, Invisibles, Line Highlighting
base04  #999999  Dark Foreground (Used for status bars)
base05  #bbbbbb  Default Foreground, Caret, Delimiters, Operators
base06  #dddddd  Light Foreground (Not often used)
base07  #ffffff  Light Background (Not often used)
base08  #ff4136  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #ff851b  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ffdc00  Classes, Markup Bold, Search Text Background
base0B  #2ecc40  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #7fdbff  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #0074d9  Functions, Methods, Attribute IDs, Headings
base0E  #b10dc9  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #85144b  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #bbbbbb;
  background: #111111
}
.hljs::selection,
.hljs ::selection {
  background-color: #555555;
  color: #bbbbbb
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #777777 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #777777
}
/* base04 - #999999 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #999999
}
/* base05 - #bbbbbb -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #bbbbbb
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
  color: #ff4136
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #ff851b
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ffdc00
}
.hljs-strong {
  font-weight: bold;
  color: #ffdc00
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #2ecc40
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #7fdbff
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #0074d9
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
  color: #b10dc9
}
.hljs-emphasis {
  color: #b10dc9;
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
  color: #85144b
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default colors;