<template>
  <component
    :is="type"
    class="tag">
    <slot/>
  </component>
</template>

<script>
/**
 * Tags are generally used for interface actions. Suitable for all-purpose use.
 * Defaults to appearance that has white background with grey border. Primary style should be used only once per view for main call-to-action.
 */
export default {
  name: "Tag",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the span.
     */
    type: {
      type: String,
      default: "span",
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  background: $color-neon-blue;
  display: inline-block;
  color: #fff;
  font-family: $font-text;
  font-weight: 500;

  padding: $space-xxs $space-s;
  margin-right: $space-xs;

  border-radius: $radius-rounded;
  box-sizing: border-box;
  white-space: nowrap;
}
</style>


<docs>
  ```jsx
  <div>
    <Tag>Categoria</Tag>
    <Tag>Tag</Tag>
    <Tag>Otra mas</Tag>
  </div>
  ```
</docs>
