const ocean = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Ocean
  Author: Chris Kempson (http://chriskempson.com)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme ocean
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #2b303b  Default Background
base01  #343d46  Lighter Background (Used for status bars, line number and folding marks)
base02  #4f5b66  Selection Background
base03  #65737e  Comments, Invisibles, Line Highlighting
base04  #a7adba  Dark Foreground (Used for status bars)
base05  #c0c5ce  Default Foreground, Caret, Delimiters, Operators
base06  #dfe1e8  Light Foreground (Not often used)
base07  #eff1f5  Light Background (Not often used)
base08  #bf616a  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #d08770  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #ebcb8b  Classes, Markup Bold, Search Text Background
base0B  #a3be8c  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #96b5b4  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #8fa1b3  Functions, Methods, Attribute IDs, Headings
base0E  #b48ead  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #ab7967  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #c0c5ce;
  background: #2b303b
}
.hljs::selection,
.hljs ::selection {
  background-color: #4f5b66;
  color: #c0c5ce
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #65737e -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #65737e
}
/* base04 - #a7adba -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #a7adba
}
/* base05 - #c0c5ce -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #c0c5ce
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
  color: #bf616a
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #d08770
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #ebcb8b
}
.hljs-strong {
  font-weight: bold;
  color: #ebcb8b
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #a3be8c
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #96b5b4
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #8fa1b3
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
  color: #b48ead
}
.hljs-emphasis {
  color: #b48ead;
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
  color: #ab7967
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default ocean;
