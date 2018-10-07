<template>
  <component
    :is="type"
    :style="{ 'background-image': 'url(' + image + ')' }"
    :class="getSize"
    class="avatar">
    <span 
      v-if="number">
    +{{ number }}
    </span>
  </component>
</template>

<script>
export default {
  name: "Avatar",
  status: "prototype",
  release: "1.0.0",
  props: {
    type: {
      type: String,
      default: "div",
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
    number: {
      type: Number,
      required: false,
      default: null,
    },
    icon: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "large",
    },
  },
  computed: {
    getSize() {
      if (this.icon) return "is-icon"
      else return `is-${this.size}`
    },
  },
}
</script>

<style lang="scss" scoped>
.is-icon {
  width: 40px;
  height: 40px;
}

.is-large {
  width: 200px !important;
  height: 200px !important;

  border: 5px solid #fff !important;
}

.medium {
}

.small {
}

.avatar {
  background: #d3d7dd;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-family: $font-text;

  color: #7e92af;
  font-weight: bold;
  vertical-align: middle;

  display: inline-grid;
  justify-items: center;
  align-items: center;

  border-radius: 100%;

  border: 3px solid #fff;

  width: 40px;
  height: 40px;
}
</style>


<docs>
  ```jsx
  <div>
    <Avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpw3brtf2P7LKukd8m9tLyoDi2SNr7yp_HsFTmzniyfmQCn65"
        :icon="true"
    />
  </div>
  ```
</docs>
