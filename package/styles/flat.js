const flat = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Flat
  Author: Chris Kempson (http://chriskempson.com)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme flat
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #2C3E50  Default Background
base01  #34495E  Lighter Background (Used for status bars, line number and folding marks)
base02  #7F8C8D  Selection Background
base03  #95A5A6  Comments, Invisibles, Line Highlighting
base04  #BDC3C7  Dark Foreground (Used for status bars)
base05  #e0e0e0  Default Foreground, Caret, Delimiters, Operators
base06  #f5f5f5  Light Foreground (Not often used)
base07  #ECF0F1  Light Background (Not often used)
base08  #E74C3C  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #E67E22  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #F1C40F  Classes, Markup Bold, Search Text Background
base0B  #2ECC71  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #1ABC9C  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #3498DB  Functions, Methods, Attribute IDs, Headings
base0E  #9B59B6  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #be643c  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #e0e0e0;
  background: #2C3E50
}
.hljs::selection,
.hljs ::selection {
  background-color: #7F8C8D;
  color: #e0e0e0
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #95A5A6 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #95A5A6
}
/* base04 - #BDC3C7 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #BDC3C7
}
/* base05 - #e0e0e0 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #e0e0e0
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
  color: #E74C3C
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #E67E22
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #F1C40F
}
.hljs-strong {
  font-weight: bold;
  color: #F1C40F
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #2ECC71
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #1ABC9C
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #3498DB
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
  color: #9B59B6
}
.hljs-emphasis {
  color: #9B59B6;
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
  color: #be643c
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default flat;
