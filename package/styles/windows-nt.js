const windowsNt = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Windows NT
  Author: Fergus Collins (https://github.com/C-Fergus)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme windows-nt
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #000000  Default Background
base01  #2a2a2a  Lighter Background (Used for status bars, line number and folding marks)
base02  #555555  Selection Background
base03  #808080  Comments, Invisibles, Line Highlighting
base04  #a1a1a1  Dark Foreground (Used for status bars)
base05  #c0c0c0  Default Foreground, Caret, Delimiters, Operators
base06  #e0e0e0  Light Foreground (Not often used)
base07  #ffffff  Light Background (Not often used)
base08  #ff0000  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #808000  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ffff00  Classes, Markup Bold, Search Text Background
base0B  #00ff00  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #00ffff  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #0000ff  Functions, Methods, Attribute IDs, Headings
base0E  #ff00ff  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #008000  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #c0c0c0;
  background: #000000
}
.hljs::selection,
.hljs ::selection {
  background-color: #555555;
  color: #c0c0c0
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #808080 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #808080
}
/* base04 - #a1a1a1 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #a1a1a1
}
/* base05 - #c0c0c0 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #c0c0c0
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
  color: #ff0000
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #808000
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ffff00
}
.hljs-strong {
  font-weight: bold;
  color: #ffff00
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #00ff00
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #00ffff
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #0000ff
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
  color: #ff00ff
}
.hljs-emphasis {
  color: #ff00ff;
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
  color: #008000
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default windowsNt;
