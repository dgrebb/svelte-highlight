const iaDark = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: iA Dark
  Author: iA Inc. (modified by aramisgithub)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme ia-dark
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #1a1a1a  Default Background
base01  #222222  Lighter Background (Used for status bars, line number and folding marks)
base02  #1d414d  Selection Background
base03  #767676  Comments, Invisibles, Line Highlighting
base04  #b8b8b8  Dark Foreground (Used for status bars)
base05  #cccccc  Default Foreground, Caret, Delimiters, Operators
base06  #e8e8e8  Light Foreground (Not often used)
base07  #f8f8f8  Light Background (Not often used)
base08  #d88568  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #d86868  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #b99353  Classes, Markup Bold, Search Text Background
base0B  #83a471  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #7c9cae  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #8eccdd  Functions, Methods, Attribute IDs, Headings
base0E  #b98eb2  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #8b6c37  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #cccccc;
  background: #1a1a1a
}
.hljs::selection,
.hljs ::selection {
  background-color: #1d414d;
  color: #cccccc
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #767676 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #767676
}
/* base04 - #b8b8b8 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #b8b8b8
}
/* base05 - #cccccc -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #cccccc
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
  color: #d88568
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #d86868
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #b99353
}
.hljs-strong {
  font-weight: bold;
  color: #b99353
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #83a471
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #7c9cae
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #8eccdd
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
  color: #b98eb2
}
.hljs-emphasis {
  color: #b98eb2;
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
  color: #8b6c37
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default iaDark;