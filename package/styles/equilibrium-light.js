const equilibriumLight = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Equilibrium Light
  Author: Carlo Abelli
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme equilibrium-light
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #f5f0e7  Default Background
base01  #e7e2d9  Lighter Background (Used for status bars, line number and folding marks)
base02  #d8d4cb  Selection Background
base03  #73777f  Comments, Invisibles, Line Highlighting
base04  #5a5f66  Dark Foreground (Used for status bars)
base05  #43474e  Default Foreground, Caret, Delimiters, Operators
base06  #2c3138  Light Foreground (Not often used)
base07  #181c22  Light Background (Not often used)
base08  #d02023  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #bf3e05  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #9d6f00  Classes, Markup Bold, Search Text Background
base0B  #637200  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #007a72  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #0073b5  Functions, Methods, Attribute IDs, Headings
base0E  #4e66b6  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #c42775  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #43474e;
  background: #f5f0e7
}
.hljs::selection,
.hljs ::selection {
  background-color: #d8d4cb;
  color: #43474e
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #73777f -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #73777f
}
/* base04 - #5a5f66 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #5a5f66
}
/* base05 - #43474e -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #43474e
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
  color: #d02023
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #bf3e05
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #9d6f00
}
.hljs-strong {
  font-weight: bold;
  color: #9d6f00
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #637200
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #007a72
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #0073b5
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
  color: #4e66b6
}
.hljs-emphasis {
  color: #4e66b6;
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
  color: #c42775
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default equilibriumLight;
