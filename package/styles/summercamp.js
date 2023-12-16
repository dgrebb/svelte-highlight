const summercamp = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: summercamp
  Author: zoe firi (zoefiri.github.io)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme summercamp
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #1c1810  Default Background
base01  #2a261c  Lighter Background (Used for status bars, line number and folding marks)
base02  #3a3527  Selection Background
base03  #504b38  Comments, Invisibles, Line Highlighting
base04  #5f5b45  Dark Foreground (Used for status bars)
base05  #736e55  Default Foreground, Caret, Delimiters, Operators
base06  #bab696  Light Foreground (Not often used)
base07  #f8f5de  Light Background (Not often used)
base08  #e35142  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #fba11b  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #f2ff27  Classes, Markup Bold, Search Text Background
base0B  #5ceb5a  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #5aebbc  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #489bf0  Functions, Methods, Attribute IDs, Headings
base0E  #FF8080  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #F69BE7  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #736e55;
  background: #1c1810
}
.hljs::selection,
.hljs ::selection {
  background-color: #3a3527;
  color: #736e55
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #504b38 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #504b38
}
/* base04 - #5f5b45 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #5f5b45
}
/* base05 - #736e55 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #736e55
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
  color: #e35142
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #fba11b
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #f2ff27
}
.hljs-strong {
  font-weight: bold;
  color: #f2ff27
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #5ceb5a
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #5aebbc
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #489bf0
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
  color: #FF8080
}
.hljs-emphasis {
  color: #FF8080;
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
  color: #F69BE7
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default summercamp;
