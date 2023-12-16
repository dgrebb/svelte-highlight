const cupcake = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Cupcake
  Author: Chris Kempson (http://chriskempson.com)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme cupcake
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #fbf1f2  Default Background
base01  #f2f1f4  Lighter Background (Used for status bars, line number and folding marks)
base02  #d8d5dd  Selection Background
base03  #bfb9c6  Comments, Invisibles, Line Highlighting
base04  #a59daf  Dark Foreground (Used for status bars)
base05  #8b8198  Default Foreground, Caret, Delimiters, Operators
base06  #72677E  Light Foreground (Not often used)
base07  #585062  Light Background (Not often used)
base08  #D57E85  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #EBB790  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #DCB16C  Classes, Markup Bold, Search Text Background
base0B  #A3B367  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #69A9A7  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #7297B9  Functions, Methods, Attribute IDs, Headings
base0E  #BB99B4  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #BAA58C  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #8b8198;
  background: #fbf1f2
}
.hljs::selection,
.hljs ::selection {
  background-color: #d8d5dd;
  color: #8b8198
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #bfb9c6 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #bfb9c6
}
/* base04 - #a59daf -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #a59daf
}
/* base05 - #8b8198 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #8b8198
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
  color: #D57E85
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #EBB790
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #DCB16C
}
.hljs-strong {
  font-weight: bold;
  color: #DCB16C
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #A3B367
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #69A9A7
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #7297B9
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
  color: #BB99B4
}
.hljs-emphasis {
  color: #BB99B4;
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
  color: #BAA58C
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default cupcake;
