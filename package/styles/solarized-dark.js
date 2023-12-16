const solarizedDark = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Solarized Dark
  Author: Ethan Schoonover (modified by aramisgithub)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme solarized-dark
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #002b36  Default Background
base01  #073642  Lighter Background (Used for status bars, line number and folding marks)
base02  #586e75  Selection Background
base03  #657b83  Comments, Invisibles, Line Highlighting
base04  #839496  Dark Foreground (Used for status bars)
base05  #93a1a1  Default Foreground, Caret, Delimiters, Operators
base06  #eee8d5  Light Foreground (Not often used)
base07  #fdf6e3  Light Background (Not often used)
base08  #dc322f  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #cb4b16  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #b58900  Classes, Markup Bold, Search Text Background
base0B  #859900  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #2aa198  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #268bd2  Functions, Methods, Attribute IDs, Headings
base0E  #6c71c4  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #d33682  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #93a1a1;
  background: #002b36
}
.hljs::selection,
.hljs ::selection {
  background-color: #586e75;
  color: #93a1a1
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #657b83 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #657b83
}
/* base04 - #839496 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #839496
}
/* base05 - #93a1a1 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #93a1a1
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
  color: #dc322f
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #cb4b16
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #b58900
}
.hljs-strong {
  font-weight: bold;
  color: #b58900
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #859900
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #2aa198
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #268bd2
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
  color: #6c71c4
}
.hljs-emphasis {
  color: #6c71c4;
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
  color: #d33682
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default solarizedDark;
