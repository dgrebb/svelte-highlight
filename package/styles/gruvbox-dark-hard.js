const gruvboxDarkHard = `<style>pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Gruvbox dark, hard
  Author: Dawid Kurek (dawikur@gmail.com), morhetz (https://github.com/morhetz/gruvbox)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.09.0
*/
/*
  WARNING: DO NOT EDIT THIS FILE DIRECTLY.

  This theme file was auto-generated from the Base16 scheme gruvbox-dark-hard
  by the Highlight.js Base16 template builder.

  - https://github.com/highlightjs/base16-highlightjs
*/
/*
base00  #1d2021  Default Background
base01  #3c3836  Lighter Background (Used for status bars, line number and folding marks)
base02  #504945  Selection Background
base03  #665c54  Comments, Invisibles, Line Highlighting
base04  #bdae93  Dark Foreground (Used for status bars)
base05  #d5c4a1  Default Foreground, Caret, Delimiters, Operators
base06  #ebdbb2  Light Foreground (Not often used)
base07  #fbf1c7  Light Background (Not often used)
base08  #fb4934  Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
base09  #fe8019  Integers, Boolean, Constants, XML Attributes, Markup Link Url
base0A  #fabd2f  Classes, Markup Bold, Search Text Background
base0B  #b8bb26  Strings, Inherited Class, Markup Code, Diff Inserted
base0C  #8ec07c  Support, Regular Expressions, Escape Characters, Markup Quotes
base0D  #83a598  Functions, Methods, Attribute IDs, Headings
base0E  #d3869b  Keywords, Storage, Selector, Markup Italic, Diff Changed
base0F  #d65d0e  Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
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
  color: #d5c4a1;
  background: #1d2021
}
.hljs::selection,
.hljs ::selection {
  background-color: #504945;
  color: #d5c4a1
}
/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
  
}
/* base03 - #665c54 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #665c54
}
/* base04 - #bdae93 -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #bdae93
}
/* base05 - #d5c4a1 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #d5c4a1
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
  color: #fb4934
}
/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #fe8019
}
/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #fabd2f
}
.hljs-strong {
  font-weight: bold;
  color: #fabd2f
}
/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #b8bb26
}
/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
/* guessing */
.hljs-built_in,
.hljs-doctag,
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #8ec07c
}
/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #83a598
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
  color: #d3869b
}
.hljs-emphasis {
  color: #d3869b;
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
  color: #d65d0e
}
/* for v10 compatible themes */
.hljs-meta .hljs-keyword,
.hljs-meta-keyword {
  font-weight: bold
}</style>`;

export default gruvboxDarkHard;
