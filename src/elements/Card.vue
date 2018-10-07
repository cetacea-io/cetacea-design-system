<template>
  <component
    :is="type"
    class="card">
      <slot/>
  </component>
</template>

<script>
/**
 * Buttons are generally used for interface actions. Suitable for all-purpose use.
 * Defaults to appearance that has white background with grey border. Primary style should be used only once per view for main call-to-action.
 */
export default {
  name: "Card",
  status: "prototype",
  release: "1.0.0",
  props: {
    /**
     * The html element used for the card.
     * `div`
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $color-blue-whale;
  color: $color-white;
  font-family: $font-text;

  border-radius: $radius-default;

  padding: $space-m;
}
</style>

<docs>
  ```jsx
  <div>
    <Card>
        Esta es una card en donde puede ir algun otro
        <br/>
        elemento y mantener una consistencia en la
        <br/>
        interfaz de usuario
    </Card>
  </div>
  ```
</docs>
