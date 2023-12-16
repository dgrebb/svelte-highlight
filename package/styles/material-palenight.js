const materialPalenight = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Material Palenight
  Author: Nate Peterson
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme material-palenight
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #292D3E  Default Background
base01  #444267  Lighter Background (Used for status bars, line number and folding marks)
base02  #32374D  Selection Background
base03  #676E95  Comments, Invisibles, Line Highlighting
base04  #8796B0  Dark Foreground (Used for status bars)
base05  #959DCB  Default Foreground, Caret, Delimiters, Operators
base06  #959DCB  Light Foreground (Not often used)
base07  #FFFFFF  Light Background (Not often used)
base08  #F07178  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #F78C6C  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #FFCB6B  Classes, Markup Bold, Search Text Background
base0B  #C3E88D  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #89DDFF  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #82AAFF  Functions, Methods, Attribute IDs, Headings
base0E  #C792EA  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #FF5370  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #959DCB;
  background: #292D3E
}
.hljs::selection,
.hljs ::selection {
  background-color: #32374D;
  color: #959DCB
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #676E95 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #676E95
}
/* base04 - #8796B0 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #8796B0
}
/* base05 - #959DCB -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #959DCB
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
  color: #F07178
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #F78C6C
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #FFCB6B
}
.hljs-strong {
  font-weight: bold;
  color: #FFCB6B
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #C3E88D
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #89DDFF
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #82AAFF
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
  color: #C792EA
}
.hljs-emphasis {
  color: #C792EA;
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
  color: #FF5370
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default materialPalenight;
