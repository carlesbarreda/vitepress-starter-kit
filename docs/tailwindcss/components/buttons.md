---
title: "Buttons"
---
<script setup lang="ts">
import TwcButton from "@/components/TwcButton.vue";
</script>

# All buttons

This page is an example on how to document your button components, most of the copy was written by AI so don't take it very seriously.

Find the code for this page in the `docs/components/buttons.md` file.

<div class="component-preview">
    <TwcButton primary>Primary</TwcButton>
    <TwcButton secondary>Secondary</TwcButton>
    <TwcButton text>Text</TwcButton>
</div>

```js
  <TwcButton primary>Primary</TwcButton>
  <TwcButton secondary>Secondary</TwcButton>
  <TwcButton text>Text</TwcButton>
```

## Primary button

We use the primary button for main actions like saving a form or creating a new item.

<div class="component-preview">
    <TwcButton primary>Primary button</TwcButton>
</div>

```js
<TwcButton primary>Primary button</TwcButton>
```

## Secondary button

Secondary buttons accompany primary buttons to provide additional actions.
For example, cancel buttons are secondary buttons.

<div class="component-preview">
    <TwcButton secondary>Secondary button</TwcButton>
</div>

```js
<TwcButton secondary>Secondary button</TwcButton>
```

## Text button

Text buttons are used for actions that do not require a primary or secondary button.

<div class="component-preview">
    <TwcButton text>Text button</TwcButton>
</div>

```js
<TwcButton text>Text button</TwcButton>
```
