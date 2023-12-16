const codeschool = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Codeschool
  Author: blockloop
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme codeschool
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #232c31  Default Background
base01  #1c3657  Lighter Background (Used for status bars, line number and folding marks)
base02  #2a343a  Selection Background
base03  #3f4944  Comments, Invisibles, Line Highlighting
base04  #84898c  Dark Foreground (Used for status bars)
base05  #9ea7a6  Default Foreground, Caret, Delimiters, Operators
base06  #a7cfa3  Light Foreground (Not often used)
base07  #b5d8f6  Light Background (Not often used)
base08  #2a5491  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #43820d  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #a03b1e  Classes, Markup Bold, Search Text Background
base0B  #237986  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #b02f30  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #484d79  Functions, Methods, Attribute IDs, Headings
base0E  #c59820  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #c98344  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #9ea7a6;
  background: #232c31
}
.hljs::selection,
.hljs ::selection {
  background-color: #2a343a;
  color: #9ea7a6
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #3f4944 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #3f4944
}
/* base04 - #84898c -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #84898c
}
/* base05 - #9ea7a6 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #9ea7a6
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
  color: #2a5491
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #43820d
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #a03b1e
}
.hljs-strong {
  font-weight: bold;
  color: #a03b1e
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #237986
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #b02f30
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #484d79
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
  color: #c59820
}
.hljs-emphasis {
  color: #c59820;
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
  color: #c98344
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default codeschool;